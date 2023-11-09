import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../home/HomePage';
import Board from '@/components/Board/Board';

const GamePage = () => {
  // Assuming the game state is an array of null (empty), 'X', or 'O'
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const currentPlayer = 'X'; // or 'O', determined by game logic

  // Handling a click on a tile (not complete game logic, just an example)
  const handleTileClick = (index:any) => {
    if (gameState[index] === null) {
      const newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
    }
    // Add further game logic here
  };

  return (
    <Container>
      <StatusBar>Your Turn</StatusBar>
      {/* <Board>
        {gameState.map((tile, index) => (
          <Tile key={index} onClick={() => handleTileClick(index)}>
            {tile}
          </Tile>
        ))}
      </Board> */}
      <Board tiles={gameState} onTileClick={handleTileClick} />

      <PlayerInfo>
        <Player>
          <PlayerAvatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Player Avatar" />
          <PlayerNameSign>Aayush</PlayerNameSign>
          <PlayerSign>X</PlayerSign>
        </Player>
        <Versus>VS</Versus>
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
  background-color: #333;
  color: white;
`;

// const Board = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
//   margin: 20px;
// `;

const Tile = styled.div`
  background-color: #fff;
  height: 100px; // Your preferred size
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #333;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Player = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

const PlayerNameSign = styled.span`
  margin-right: 4px;
`;

const PlayerSign = styled.span`
  font-weight: bold;
  font-size: 1.5em;
`;

const Versus = styled.span`
  margin: 0 10px;
`;

export default GamePage;
