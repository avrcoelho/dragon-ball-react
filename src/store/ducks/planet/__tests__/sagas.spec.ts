import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { planet } from '../sagas';
import { Planet } from '../../planets/types';

const apiMock = new MockAdapter(api);

describe('Planet Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch planets', async () => {
    const planetData: Planet = {
      residents: ['Gohan', 'Trunks', 'Android16'],
      _id: '5c785e7a52cc1dd11ddb59ba',
      created: '2019-02-28T22:19:38.652Z',
      name: 'Earth',
      url: '/api/planet/Earth',
      image: '/api/planet/images/Earth.jpeg',
    };
    const planetName: string = 'Earth';

    apiMock.onGet(`api/planet/${planetName}`).reply(200, planetData);

    await runSaga({ dispatch }, planet, {
      payload: { planetName },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(planetData));
  });

  it('should fail when api returns error', async () => {
    const planetName: string = 'Earth';

    apiMock.onGet(`api/planet/${planetName}`).reply(500);

    await runSaga({ dispatch }, planet, {
      payload: { planetName },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
