import { all, takeLatest } from 'redux-saga/effects';

import { CharactersTypes } from './characters/types';
import { characters } from './characters/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(CharactersTypes.LOAD_REQUEST, characters)]);
}
