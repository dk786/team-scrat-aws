import './App.css'
import PropTypes from 'prop-types';


function Question1({showHide}) {

  return (
    <div className={showHide}>
      <label htmlFor="question1">Question 1</label>
      <input type="text" id="question1" name="question1"/>
    </div>
  )
}

Question1.propTypes = {
  showHide: PropTypes.string,
};


export default Question1;
