import { Reducer } from 'redux';
import { CharactersState, CharactersTypes } from './types';

export const INITIAL_STATE: CharactersState = {
  data: [],
  error: false,
  loading: true,
};

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CharactersTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case CharactersTypes.LOAD_FAILURE:
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
