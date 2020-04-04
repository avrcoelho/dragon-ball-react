import { all, takeLatest } from 'redux-saga/effects';

import { CharactersTypes } from './characters/types';
import { PlanetsTypes } from './planets/types';
import { characters } from './characters/sagas';
import { planets } from './planets/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.LOAD_REQUEST, characters),
    takeLatest(PlanetsTypes.LOAD_REQUEST, planets),
  ]);
}
