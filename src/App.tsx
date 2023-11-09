import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authentification from "./pages/auth/Authentification"
import SignInPage from "./pages/auth/SignInPage"
import FindingOpponentPage from "./pages/Finding/FindingOpponentPage"
import GamePage from "./pages/game/GamePage"
import HomePage from "./pages/home/HomePage"
import SplashPage from "./pages/splash/SplashPage"
import '@/styles/global.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/auth" element={<Authentification />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/finding" element={<FindingOpponentPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
