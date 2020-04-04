import { action } from 'typesafe-actions';
import { PlanetsTypes, Planet } from './types';

export const loadRequest = () => action(PlanetsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Planet[]) =>
  action(PlanetsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(PlanetsTypes.LOAD_FAILURE);
