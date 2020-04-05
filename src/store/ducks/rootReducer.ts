import { combineReducers } from 'redux';

import characters from './characters';
import planets from './planets';
import planet from './planet';

export default combineReducers({
  characters,
  planets,
  planet,
});
