import cross from '../assets/images/cross.svg';
import heart from '../assets/images/heart.svg';

interface MarkProps {
  content: string;
  onMarkClick: () => void;
}

function Mark({ content, onMarkClick }: MarkProps) {
  const buttonStyle = 'btn';
  let buttonContent;
  let imageSource;
  if (content == 'X') {
    imageSource = cross;
    buttonContent = <img src={imageSource} alt={content} />;
  } else if (content == 'O') {
    imageSource = heart;
    buttonContent = (
      <img
        src={imageSource}
        alt={content}
        style={{ fill: 'red', scale: '1.4' }}
      />
    );
  } else {
    buttonContent = '';
  }

  return (
    <button className={buttonStyle} onClick={onMarkClick}>
      {buttonContent}
    </button>
  );
}

export default Mark;
