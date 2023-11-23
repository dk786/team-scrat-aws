import './App.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Names from './Names';
const characters ='ABC';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function Question1({showHide}) {
  const [guessInitial, setGuessInitial] = useState(null);
  const [question, setQuestion] = useState(null);

  const handleAnswer = (e) => {
    if (e.target.value === 'yes') {
      console.log('guessInitial', guessInitial);
      const Names = ["Angela","Bill","Catherine"];
      const thisGuess = "" + guessInitial + "";
      console.log('thisGuess', thisGuess);
      const allNames = Names.filter(thisName => thisName.startsWith(thisGuess));
      console.log('allnames', allNames);
      const getRandomName = allNames[0];
      console.log('getRandomName', getRandomName);

      console.log('getRandomName', getRandomName);
      setQuestion(`Great! I'm guessing that your name is... ${getRandomName}`);
    } else {
      setQuestion(`NEGATIVE RESPONSE`);
      console.log('noooo');
    }
  }

  // On initial load
  useEffect(() => {
    const thisInitial = generateString(1);
    setGuessInitial(`${thisInitial}`)
    setQuestion(`I&apos;m going to guess your first name; does it begin with an ${thisInitial}?`);
  }, []);

  return (
    <div className={showHide}>
      <label htmlFor="question1">{question}</label>
      <button type="button" value="yes" onClick={(e) => handleAnswer(e)}>Yes</button>
      <button type="button" value="no" onClick={(e) => handleAnswer(e)}> No</button>
      <input type="text" id="question1" name="question1"/>
    </div>
  )
}

Question1.propTypes = {
  showHide: PropTypes.string,
};


export default Question1;
