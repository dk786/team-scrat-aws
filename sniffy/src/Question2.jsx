import './App.css'
import PropTypes from 'prop-types';

function Question2({showHide}) {

  return (
    <div className={showHide}>
      <label htmlFor="question2">Question 2</label>
      <input type="text" id="question2" name="question2"/>
    </div>
  )
}

Question2.propTypes = {
  showHide: PropTypes.string,
};

export default Question2;
