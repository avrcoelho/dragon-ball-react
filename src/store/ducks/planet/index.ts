import { Reducer } from 'redux';
import { PlanetState, PlanetTypes } from './types';

export const INITIAL_STATE: PlanetState = {
  data: null,
  error: false,
  loading: true,
};

const reducer: Reducer<PlanetState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlanetTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PlanetTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case PlanetTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case PlanetTypes.RESET:
      return {
        ...state,
        loading: true,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
