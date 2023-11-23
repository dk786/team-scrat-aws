import './App.css'
import PropTypes from 'prop-types';

import happy from './assets/clippy-happy.png';
import sad from './assets/clippy-sad.png';
import talk from './assets/clippy-talk.png';

function Avatar({ mood }) {
    let imgSrc;

    switch(mood) {
        case 'happy':
            imgSrc = happy;
          break;
          case 'sad':
            imgSrc = sad;
          break;
          case 'talking':
            imgSrc = talk;
          break;
        default:
            imgSrc = '';
     }

  return (
    <div>
        <img src={imgSrc} />
    </div>
  )
}


Avatar.propTypes = {
    mood: PropTypes.string,
  };

export default Avatar;
