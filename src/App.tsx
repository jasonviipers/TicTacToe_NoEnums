import Field from './components/Field';
// import './assets/styles/animation.css';
import GameOver from './components/GameOver';

function App() {
  return (
    <>
      <Field />
      <GameOver winner='X' />
    </>
  );
}

export default App;
