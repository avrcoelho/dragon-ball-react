import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { Character } from './types';

export function* characters() {
  try {
    const { data }: { data: Character[] } = yield call(
      api.get,
      'api/character',
    );

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error('Falha ao obter os personagens');
    yield put(loadFailure());
  }
}
