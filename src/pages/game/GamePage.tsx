import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../home/HomePage';
import Board from '@/components/Board/Board';
import Vs from '@/assets/img/vs_small.png';

const GamePage = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

 // Handling a click on a tile
 const handleTileClick = (index:any) => {
  // Proceed only if the tile is empty and the game is not over
  if (gameState[index] === null) {
    const newGameState = [...gameState];
    newGameState[index] = currentPlayer;
    setGameState(newGameState);
    // Toggle the player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    // Add further game logic here, such as checking for a win or a draw
  }
};

  return (
    <Container>
      <StatusBar>Your Turn</StatusBar>
      <Board tiles={gameState} onTileClick={handleTileClick} />
      <PlayerInfo>
        <Player>
          <PlayerAvatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Player Avatar" />
          <PlayerNameSign>Aayush</PlayerNameSign>
          <PlayerSign>X</PlayerSign>
        </Player>
        <Versus><VersusImage src={Vs} alt="Versus" /></Versus>
        <Player>
          <PlayerAvatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Opponent Avatar" />
          <PlayerNameSign>Dora</PlayerNameSign>
          <PlayerSign>O</PlayerSign>
        </Player>
      </PlayerInfo>
    </Container>
  );
};


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
