import reducer, { INITIAL_STATE } from '../';
import * as CharactersActions from '../actions';
import { Character } from '../types';

describe('Characters reducer', () => {
  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, CharactersActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CharactersActions.loadSuccess(charactersData),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: charactersData,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, CharactersActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      error: true,
    });
  });
});
