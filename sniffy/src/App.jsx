import { useState } from 'react'
import Avatar from './Avatar';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import './App.css'
import Names from './Names';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [firstInitial, setFirstInitial] = useState(1);

  console.log('Names', Names);

  const questions = {
    'question1' : 'something',
    'question2' : 'something',
    'question3' : 'something',
  };

  console.log('questions', questions);

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
      <h1>Hi I&apos;m Nosy, let me see if I can guess who you are !</h1>

        <form onSubmit={(e) => handleThisSubmit(e)} noValidate>

          <Question1 setCurrentQuestion={setCurrentQuestion} showHide={currentQuestion !== 1 ? 'hide' : 'show' }/>
          
          <Question2 setCurrentQuestion={setCurrentQuestion} showHide={currentQuestion !== 2 ? 'hide' : 'show' }/>
          
          <Question3  setCurrentQuestion={setCurrentQuestion} showHide={currentQuestion !== 3 ? 'hide' : 'show' }/>
          
          <button type='button' onClick={handleNext}>Next</button>

          <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
