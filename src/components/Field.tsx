import Mark from './Mark';
import TryAgain from './TryAgain';

interface FieldProps {
  status: string;
  squares: string[];
  handleClick: (index: number) => void;
  resetGame: () => void;
}

function Field({ status, squares, handleClick, resetGame }: FieldProps) {
  const rows = [0, 1, 2];
  const columns = [0, 1, 2];

  const cells = rows.map((row) => (
    <div className='row' key={row}>
      <>
        {columns.map((col) => (
          <div className='col' key={col}>
            <Mark
              content={squares[row * columns.length + col]}
              onMarkClick={() => handleClick(row * columns.length + col)}
            />
          </div>
        ))}
      </>
    </div>
  ));

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='h1'>{status}</div>
        </div>
        <>{cells}</>
        <TryAgain origin='fromField' resetGame={resetGame} />
      </div>
    </>
  );
}

export default Field;
