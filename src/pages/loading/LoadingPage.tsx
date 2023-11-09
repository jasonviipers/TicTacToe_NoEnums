import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "@react-spring/web";
import { Container } from "../home/HomePage";

function LoadingPage() {
  const loadingAnimation = useSpring({
    loop: true,
    from: { opacity: 1 },
    to: { opacity: 0.1 },
    config: { duration: 1000 },
  });

  return (
    <Container>
        <animated.div style={loadingAnimation}>
      <LoadPageText>
          LOADING
      </LoadPageText>
        </animated.div>
    </Container>
  );
}

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const LoadPageText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  &::after {
    content: '...'; /* Three dots */
    display: inline-block;
    width: 1em; /* Space of one character */
    animation: ${blink} 1s infinite; /* Apply blink animation */
  }
`;

export default LoadingPage;
