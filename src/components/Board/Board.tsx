import styled from 'styled-components';

interface BoardProps {
  tiles: string[];
  onTileClick: (index: number) => void;
}

const Board = ({ tiles, onTileClick }: BoardProps) => {
  return (
    <BoardWrapper>
      {tiles.map((tile, index) => (
        <Tile key={index} onClick={() => onTileClick(index)}>
          {tile === 'O' && <Circle />}
          {tile === 'X' && <Cross />}
        </Tile>
      ))}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  background: #000;
  padding: 10px;
  border-radius: 10px;
`;

const Tile = styled.div`
  width: 100px;
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;

const Circle = styled.div`
  width: 80%;
  height: 80%;
  border: 10px solid red;
  border-radius: 50%;
`;

const Cross = styled.div`
  width: 80%;
  height: 80%;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 80%;
    background-color: red;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default Board;
