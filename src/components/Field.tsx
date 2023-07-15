import Mark from './Mark';

interface FieldProps {
  status: string;
  squares: string[];
  handleClick: (index: number) => void;
}

function Field({ status, squares, handleClick }: FieldProps) {
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
}

export default Field;
