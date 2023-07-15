import { createPortal } from 'react-dom';

interface TryAgainProps {
  resetGame: () => void;
}

function TryAgain({ resetGame }: TryAgainProps) {
  return (
    <>
      <div className='container'>
        <button className='btn-reset wobble-hor-bottom' onClick={resetGame}>
          Try Again
        </button>
      </div>
    </>
  );
}

export default TryAgain;
