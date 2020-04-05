import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { Planet } from '../planets/types';

export function* planet({ payload: { planetName } }: any) {
  try {
    const { data }: { data: Planet } = yield call(
      api.get,
      `api/planet/${planetName}`,
    );

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error('Falha ao obter os planeta');
    yield put(loadFailure());
  }
}
