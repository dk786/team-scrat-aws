import { useState } from 'react'
import Avatar from './Avatar';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';


import './App.css'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(1)


  const handleThisSubmit = (e) => {
    e.preventDefault();
    const q1 = document.getElementById("question1").value || null
    const q2 = document.getElementById("question2").value || null;
    const q3 = document.getElementById("question3").value || null;
    console.log('handleThisSubmit', q1, q2, q3);
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <>
      <Avatar mood={'happy'}/>
        <form onSubmit={(e) => handleThisSubmit(e)} noValidate>

          <Question1 setCurrentQuestion={setCurrentQuestion}  showHide={currentQuestion !== 1 ? 'hide' : 'show' }/>

          <Question2 setCurrentQuestion={setCurrentQuestion} showHide={currentQuestion !== 2 ? 'hide' : 'show' }/>
   
          <Question3  setCurrentQuestion={setCurrentQuestion} showHide={currentQuestion !== 3 ? 'hide' : 'show' }/>
        <button type='button' onClick={handleNext}>Next</button>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
