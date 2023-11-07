import { useState } from 'react';
import Field from './Field';
import GameOver from './GameOver';
import Confetti from '../assets/animation/Confetti';
import TicTacToe from '../logic/tictactoe';

interface Model {
  squares: string[];
  activePlayerX: boolean;
  count: number;
}

function Game() {
  //Declaration of Hooks
  // Store the board's status

  const [{ squares, activePlayerX, count }, setModel] = useState<Model>({
    squares: Array(9).fill(null),
    activePlayerX: true,
    count: 0,
  });

  //Handle Click funtion - what happens when User clicks on the button
  function handleClick(index: number) {
    if (squares[index] || calculateTheWinner(squares)) {
      return;
    }

    //create a copy of current status array
    const nextSquares = [...squares];
    //fill in new array with changes based on player's turn
    nextSquares[index] = activePlayerX == true ? 'X' : 'O';
    //update the Component's hooks
    setModel({
      squares: nextSquares,
      activePlayerX: !activePlayerX,
      count: count + 1,
    });
  }

  // Display the status of the game: the turn OR the winner
  let status;
  const winner = calculateTheWinner(squares);

  function handleResetGame() {
    setModel({
      squares: Array(9).fill(null),
      activePlayerX: true,
      count: 0,
    });
  }

  if (winner) {
    status = 'GAME OVER';
    return (
      <>
        <Field
          status={status}
          squares={squares}
          handleClick={handleClick}
          resetGame={handleResetGame}
        />
        <GameOver winner={winner} resetGame={handleResetGame} />
      </>
    );
  } else {
    status = 'Active player is ' + (activePlayerX ? 'X' : '❤️');
  }

  return (
    <>
      <Field
        status={status}
        squares={squares}
        handleClick={handleClick}
        resetGame={handleResetGame}
      />
      <Confetti />
    </>
  );

  function calculateTheWinner(squares: string[]) {
    const winningCombination = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let index = 0; index < winningCombination.length; index++) {
      const [a, b, c] = winningCombination[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (count == 9) return 'NONE';

    return null;
  }
}

export default Game;
