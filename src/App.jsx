import { useState } from 'react'
import './App.css'
import FirstScreen from './components/first-screen'
import SecondScreen from './components/second-screen'


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  function startGame() {

    setIsGameStarted(true)

  }

  return (
    <div className="App">
      
      { isGameStarted ? <SecondScreen /> : <FirstScreen handleStartGame={startGame} />}
      
      </div>
      )
  
  }

export default App
