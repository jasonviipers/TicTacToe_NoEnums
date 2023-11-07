import { useState } from 'react';
import Field from './Field';
import GameOver from './GameOver';
// import * as GAME from '../logic/TicTacToe';
import { TicTacToe } from '../logic/tictactoe';
import { WinnerType } from '../logic/tictactoe';
import { GameStateKind } from '../logic/tictactoe';

function Game() {
  //Declaration of Hooks
  // Store the board's status

  const [game, setModel] = useState(new TicTacToe());

  //Handle Click funtion - what happens when User clicks on the button
  function handleClick(index: number) {
    if (game.action(index)) {
      return;
    }
  }

  // Display the status of the game: the turn OR the winner
  let status;
  let field = game.getField();
  let gameState = game.getState();

  const winner = game.getWinner();

  function handleResetGame() {
    game.start();
  }

  if (gameState.type == GameStateKind.Finished) {
    status = 'GAME OVER';
    return (
      <>
        <Field
          status={status}
          squares={field}
          handleClick={handleClick}
          resetGame={handleResetGame}
        />
        <GameOver winner={winner} resetGame={handleResetGame} />
      </>
    );
  } else {
    status = 'Active player is ' + (gameState.type ? 'X' : '❤️');
  }

  return (
    <>
      <Field
        status={status}
        squares={filed}
        handleClick={handleClick}
        resetGame={handleResetGame}
      />
      <Confetti />
    </>
  );
}

export default Game;
