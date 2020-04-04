import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { Planet } from './types';

export function* planets() {
  try {
    const { data }: { data: Planet[] } = yield call(api.get, 'api/planet');

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error('Falha ao obter os planetas');
    yield put(loadFailure());
  }
}
