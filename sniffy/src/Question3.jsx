import './App.css'
import PropTypes from 'prop-types';

function Question3({showHide}) {

  return (
    <div className={showHide}>
      <label htmlFor="question3">Question 3</label>
      <input type="text" id="question3" name="question3"/>
    </div>
  )
}

Question3.propTypes = {
  showHide: PropTypes.string,
};

export default Question3;
