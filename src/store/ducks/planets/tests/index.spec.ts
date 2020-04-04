import reducer, { INITIAL_STATE } from '../';
import * as PlanetsActions from '../actions';
import { Planet } from '../types';

describe('Planets reducer', () => {
  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, PlanetsActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
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

    const state = reducer(
      INITIAL_STATE,
      PlanetsActions.loadSuccess(planetsData),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: planetsData,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, PlanetsActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      error: true,
    });
  });
});
