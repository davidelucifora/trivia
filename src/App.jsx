import { useState, useEffect } from 'react'
import './App.css'
import FirstScreen from './components/first-screen'
import SecondScreen from './components/second-screen'
import callAPI from './callAPI'


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [noOfQuestions, setNoOfQuestions] = useState('5')
  const [allQuestions, setAllQuestions] = useState([])


  function startGame() {

    setIsGameStarted(true)

  }

  /* Set number of Questions when selecting radio btn*/
  function handleNoOfQuestions(event){
    const {value} = event.target
    setNoOfQuestions(value)
  }

  /* Call Api with 5 or 10 questions if user changes noOfQuestions */
  useEffect(() => {
    callAPI(noOfQuestions).then(setAllQuestions)
  },[noOfQuestions])

  return (
    <div className="App">
      
      { isGameStarted ? <SecondScreen /> : 
      <FirstScreen 
      handleStartGame={startGame}
      handleNoOfQuestions={handleNoOfQuestions}
      noOfQuestions={noOfQuestions}
      />}
      <p>{allQuestions.length ? allQuestions[0].question : 'empty array'}</p>
      </div>
      )
  
  }

export default App
