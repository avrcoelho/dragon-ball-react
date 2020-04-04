import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { characters } from '../sagas';
import { Character } from '../types';

const apiMock = new MockAdapter(api);

describe('Characters Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch charcters', async () => {
    const charactersData: Character[] = [
      {
        species: 'Saiyan',
        status: 'Alive',
        originPlanet: 'Earth',
        gender: 'Male',
        _id: '5c787595373a47d30cff0317',
        name: 'Gohan',
        series: 'Z',
        image: '../images/Gohan.jpg',
        created: '2019-02-28T23:58:13.141Z',
        url: '/api/character/Gohan',
      },
    ];

    apiMock.onGet('api/character').reply(200, charactersData);

    await runSaga({ dispatch }, characters).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(charactersData));
  });

  it('should fail when api returns error', async () => {
    apiMock.onGet('api/character').reply(500);

    await runSaga({ dispatch }, characters).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
