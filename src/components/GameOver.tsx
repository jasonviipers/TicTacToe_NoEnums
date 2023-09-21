import TryAgain from './TryAgain';

interface GameOverProps {
  winner: string;
  resetGame: () => void;
}

function GameOver({ winner, resetGame }: GameOverProps) {
  let status = 'Winner is';
  let transformmedWinner;
  if (winner == 'NONE') {
    status = 'EVEN';
    transformmedWinner = 'NO ONE WINS';
  } else if (winner == 'X') {
    transformmedWinner = 'X';
  } else {
    transformmedWinner = '❤️';
  }

  const modalBodyClass =
    winner == 'NONE'
      ? 'modal-body container'
      : 'modal-body container confetti-container confetti';
  return (
    <>
      <div className='modal'>
        <div className='modal-backdrop'></div>
        <div className={modalBodyClass}>
          <div className='text-emphasize bounce-in-left'>{status}</div>
          <div className='text-emphasize bounce-in-right'>
            {transformmedWinner}
          </div>
          <TryAgain origin='fromGameOver' resetGame={resetGame} />
        </div>
      </div>
    </>
  );
}

export default GameOver;
