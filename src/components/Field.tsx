import { useState } from 'react';
import Mark from './Mark';

const Field = () => {
  //Declaration of Hooks
  // Store the board's status
  const [squares, setSquares] = useState(Array(9).fill(null));
  //Store the active player status
  const [activePlayerX, setActivePlayerX] = useState(true);

  //Handle Click funtion - what happens when User clicks on the button
  function handleClick(index: number) {
    if (squares[index] || calculateTheWinner(squares)) {
      return;
    }

    //create a copy of current status array
    const nextSquares = squares.slice();
    //fill in new array with changes based on player's turn
    nextSquares[index] = activePlayerX == true ? 'X' : 'O';
    //update the Component's hooks
    setSquares(nextSquares);
    setActivePlayerX(!activePlayerX);
  }

  // Display the status of the game: the turn OR the winner
  let status;
  const winner = calculateTheWinner(squares);

  if (winner) {
    status = 'Winner is ' + winner;
  } else {
    status = 'Active player is ' + (activePlayerX ? 'X' : '❤️');
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='h1'>{status}</div>
        </div>

        <div className='row'>
          <div className='col '>
            <Mark
              content={squares[0]}
              onMarkClick={() => {
                handleClick(0);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[1]}
              onMarkClick={() => {
                handleClick(1);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[2]}
              onMarkClick={() => {
                handleClick(2);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Mark
              content={squares[3]}
              onMarkClick={() => {
                handleClick(3);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[4]}
              onMarkClick={() => {
                handleClick(4);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[5]}
              onMarkClick={() => {
                handleClick(5);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Mark
              content={squares[6]}
              onMarkClick={() => {
                handleClick(6);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[7]}
              onMarkClick={() => {
                handleClick(7);
              }}
            />
          </div>
          <div className='col'>
            <Mark
              content={squares[8]}
              onMarkClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );

  //MARK: как обознать массив массивов??
  // Game logic
  // Calculation of winner
  function calculateTheWinner(squares: number[][]) {
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
    return null;
  }
};

export default Field;
