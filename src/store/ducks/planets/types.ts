export enum PlanetsTypes {
  LOAD_REQUEST = '@planets/LOAD_REQUEST',
  LOAD_SUCCESS = '@planets/LOAD_SUCCESS',
  LOAD_FAILURE = '@planets/LOAD_FAILURE',
}

export interface Planet {
  residents: string[];
  _id: string;
  created: string;
  name: string;
  url: string;
  image: string;
}

export interface PlanetsState {
  readonly data: Planet[];
  readonly loading: boolean;
  readonly error: boolean;
}
