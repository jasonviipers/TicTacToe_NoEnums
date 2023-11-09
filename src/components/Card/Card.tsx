import styled from 'styled-components';

interface CardProps {
    title: string;
    content: string;
    buttonText: string;
    imageUrl?: string;
    onButtonClick?: () => void;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, content, buttonText, imageUrl, onButtonClick, style }) => {
    return (
        <Container>
            {imageUrl && <CardImage src={imageUrl} alt="Card Image" style={style}/>}
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{content}</CardText>
                <Button onClick={onButtonClick}  
                >{buttonText}</Button>
            </CardBody>
        </Container>
    )
}


const Container = styled.div`
    background-color: #161719;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    max-width: 300px;
    margin: auto;
    transition: transform 0.2s;

    &:hover {
    transform: translateY(-8px);
    }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 8px 0;
    color: #ffffff;
`;

const CardText = styled.p`
  font-size: 1em;
  margin: 0 0 16px 0;
    color: #D6D6DC;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-size: 1em;
  color: #ffffff;
  background-color: #F0842A;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e76f00;
  }
`;
export default Card