interface GameOverProps {
  winner: string;
}

function GameOver({ winner }: GameOverProps) {
  const transformmedWinner = winner == 'X' ? 'X' : '❤️';

  return (
    <>
      <div className='modal'>
        <div className='modal-backdrop'></div>
        <div className='modal-body container'>
          <div className=' text-emphasize bounce-in-left '>Winner is</div>
          <div className=' text-emphasize bounce-in-right '>
            {transformmedWinner}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameOver;
