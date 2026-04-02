import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './page/home'
import { Routes, Route } from "react-router-dom";
import Team from "./page/Team";

function App() {
  const [count, setCount] = useState(0)



  return (
    <Routes>
      <Route path="/" element={<Home> </Home>} />
      <Route path="/team" element={<Team> </Team>} />
    </Routes>
  )
}

export default App
