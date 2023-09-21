interface TryAgainProps {
  origin: string;
  resetGame: () => void;
}

function TryAgain({ origin, resetGame }: TryAgainProps) {
  const buttonStyle =
    origin == 'fromField' ? 'btn-reset' : 'btn-reset wobble-hor-bottom';

  return (
    <>
      <div className='container'>
        <button className={buttonStyle} onClick={resetGame}>
          Try Again
        </button>
      </div>
    </>
  );
}

export default TryAgain;
