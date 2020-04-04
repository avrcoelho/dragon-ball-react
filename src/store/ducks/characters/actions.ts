import { action } from 'typesafe-actions';
import { CharactersTypes, Character } from './types';

export const loadRequest = () => action(CharactersTypes.LOAD_REQUEST);
export const loadSuccess = (data: Character[]) =>
  action(CharactersTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CharactersTypes.LOAD_FAILURE);
