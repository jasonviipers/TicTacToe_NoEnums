import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../home/HomePage';
import Board from '@/components/Board/Board';
import Vs from '@/assets/img/vs_small.png';
import Dora from '@/assets/img/signin_Dora.png';

const GamePage = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | 'TIE' | null>(null);

  // Handling a click on a tile
  const handleTileClick = (index: any) => {
    // Proceed only if the tile is empty and the game is not over
    if (!gameState[index] && !winner) {
      const newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);

      const foundWinner = calculateWinner(newGameState);
      if (foundWinner) {
        setWinner(foundWinner);
      } else if (!newGameState.includes(null)) {
        // It's a tie if all tiles are filled and there's no winner
        setWinner('TIE');
      } else {
        // Toggle the player
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };
  const resetGame = () => {
    setGameState(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <Container>
      {winner ? (
        <StatusBar>{winner === 'TIE' ? 'Tie Game' : `Player ${winner} Wins!`}</StatusBar>
      ) : (
        <StatusBar>Your Turn, Player {currentPlayer}</StatusBar>
      )}
      <Board tiles={gameState} onTileClick={handleTileClick} />
      {winner && (
        <ResetButton onClick={resetGame}>New Game</ResetButton>
      )}
      <PlayerInfo>
        <Player>
          <PlayerAvatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Player Avatar" />
          <PlayerNameSign>Aayush</PlayerNameSign>
          <PlayerSign>X</PlayerSign>
        </Player>
        <Versus><VersusImage src={Vs} alt="Versus" /></Versus>
        <Player>
          <PlayerAvatar src={Dora} alt="Opponent Avatar" />
          <PlayerNameSign>Dora</PlayerNameSign>
          <PlayerSign>O</PlayerSign>
        </Player>
      </PlayerInfo>
    </Container>
  );
};

const calculateWinner = (tiles: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

const ResetButton = styled.button`
  background: #FF821B;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #e07a15;
  }
`;

const StatusBar = styled.div`
  position: absolute;
  top: 0;
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #23282B;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;

const PlayerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const PlayerNameSign = styled.span`
  margin-right: 4px;
  font-weight: bold;
  font-size: 1.5em;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const VersusImage = styled.img`
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    width: 30px;
  }
`;

const PlayerSign = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  color: #FF821B;
  margin-right: 4px;
  @media (max-width: 768px) {
    font-size: 1em;
  }

`;

const Versus = styled.span`
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export default GamePage;
