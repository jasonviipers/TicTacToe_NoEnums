import styled, { keyframes } from 'styled-components';
import { Container } from '../home/HomePage';
import Dora from '@/assets/img/signin_Dora.png';
import Vs from '@/assets/img/vs_small.png';

function FindingOpponentPage() {
  return (
    <Container>
      <CharacterWrapper>
        <Character src={Dora} alt="Character Dora" />
        <SearchingText>Finding Opponent Player..</SearchingText>
      </CharacterWrapper>
      <VersusSection>
        <Player>
          <Avatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Player Avatar" />
          <PlayerName>Aayush Thacker</PlayerName>
        </Player>
        <Versus><VersusImage src={Vs} alt="Versus" /></Versus>
        <Player>
          <Avatar src={'https://avatars.githubusercontent.com/u/55942632?v=4'} alt="Player Avatar" />
          <PlayerName>Wait for Opponent</PlayerName>
        </Player>
      </VersusSection>
      <CancelButton>✕ Cancel</CancelButton>
    </Container>
  )
}

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Character = styled.img`
    height: 150px;
    @media (max-width: 768px) {
        height: 100px;
    }
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const SearchingText = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  animation: ${blink} 2s linear infinite;

  &::after {
    content: '...'; /* Three dots */
    display: inline-block;
    width: 1em; /* Space of one character */
    animation: ${blink} 1s infinite; /* Apply blink animation */
  }
`;

const VersusSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F0842A;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const PlayerName = styled.span`
  font-size: 14px;
  color: white;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Versus = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px;
  }
`;

const VersusImage = styled.img`
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    width: 30px;
  }
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #F0842A;
  color: white;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-8px);
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 14px;
  }
`;

export default FindingOpponentPage