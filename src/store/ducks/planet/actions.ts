import { action } from 'typesafe-actions';
import { PlanetTypes } from './types';
import { Planet } from '../planets/types';

export const loadRequest = (planetName: string) =>
  action(PlanetTypes.LOAD_REQUEST, { planetName });
export const loadSuccess = (data: Planet) =>
  action(PlanetTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(PlanetTypes.LOAD_FAILURE);
