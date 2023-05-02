import React, { useState } from 'react'
import MainApp from './Components/MainApp'
import './app.css'

function App() {
  const [showBox, setShowbox] = useState(true)
  function StartQuiz() {
    setShowbox(false)
  }

  return (
    <div>
      {showBox ?
        <div className='mainbox'>

          <div className='box'>
            <h2>Welcome to the Quiz App!</h2>
            <p>Are you ready to start the quiz?</p>
            <h3>Rules For Game. </h3>
            <p>1) Read the question clearly </p>
            <p>2) Choose the Write Answer </p>
            <p>3) Click the Right answer for once! </p>
            <button className='button' onClick={StartQuiz}>Start</button>
          </div>
        </div>
        :
        <MainApp setShowbox={setShowbox} />
      }
    </div>
  )
}

export default App