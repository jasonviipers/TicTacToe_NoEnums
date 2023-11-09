import React from 'react'
import styled from 'styled-components';

interface GameCardProps {
  title: string;
  subtitle: string;
  IconComponent: React.FC;
  IconSize?: number;
}

function GameCard({ title, subtitle, IconComponent }: GameCardProps) {
  return (
    <Container>
      <Card>
        <IconComponent />
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <PlayButton>Play</PlayButton>
      </Card>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
      width: auto;
    }
`;

const Card = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 300px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #FFFFFF;
  overflow: hidden; /* Ensures content does not overflow the card */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #000000; /* Adjust the color to match your design */
  margin: 10px 0;
`;

const CardSubtitle = styled.p`
  font-size: 14px;
  color: #666666; /* Adjust the color to match your design */
  text-align: center;
  margin-bottom: 20px;
`;

const PlayButton = styled.button`
  background-color: #FFA500; /* Adjust the color to match your design */
  color: #FFFFFF;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #cc8400; /* Darker shade for hover effect */
  }
`;
export default GameCard