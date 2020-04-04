import { Reducer } from 'redux';
import { PlanetsState, PlanetsTypes } from './types';

export const INITIAL_STATE: PlanetsState = {
  data: [],
  error: false,
  loading: true,
};

const reducer: Reducer<PlanetsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlanetsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PlanetsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case PlanetsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
