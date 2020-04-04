import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { planets } from '../sagas';
import { Planet } from '../types';

const apiMock = new MockAdapter(api);

describe('Planets Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch planets', async () => {
    const planetsData: Planet[] = [
      {
        residents: ['Gohan', 'Trunks', 'Android16'],
        _id: '5c785e7a52cc1dd11ddb59ba',
        created: '2019-02-28T22:19:38.652Z',
        name: 'Earth',
        url: '/api/planet/Earth',
        image: '/api/planet/images/Earth.jpeg',
      },
    ];

    apiMock.onGet('api/planet').reply(200, planetsData);

    await runSaga({ dispatch }, planets).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(planetsData));
  });

  it('should fail when api returns error', async () => {
    apiMock.onGet('api/planet').reply(500);

    await runSaga({ dispatch }, planets).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
