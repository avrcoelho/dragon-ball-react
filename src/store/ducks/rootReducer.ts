import { combineReducers } from 'redux';

import characters from './characters';
import planets from './planets';

export default combineReducers({
  characters,
  planets,
});
