import styled from "styled-components";

import TicTacToe from '@/assets/img/splash_logo.png'

function SplashPage() {
  return (
    <SplashPages>
      <img src={TicTacToe} alt="Tic Tac Toe" />
      <SplashBottomFooter >
        <p style={{ textAlign: 'center', color: '#fff', fontSize: '1.9rem', fontFamily: 'Displatter, cursive' }}>
          Calculate Everything Move
        </p>
      </SplashBottomFooter>
    </SplashPages>
  )
}


const SplashPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24292d;
  font-family: 'Poppins', sans-serif;
`;

const SplashBottomFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #24292d;
`;

export default SplashPage
