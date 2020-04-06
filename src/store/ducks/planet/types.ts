import { Planet } from '../planets/types';

export enum PlanetTypes {
  LOAD_REQUEST = '@planet/LOAD_REQUEST',
  LOAD_SUCCESS = '@planet/LOAD_SUCCESS',
  LOAD_FAILURE = '@planet/LOAD_FAILURE',
  RESET = '@planet/RESET',
}

export interface PlanetState {
  readonly data: Planet | null;
  readonly loading: boolean;
  readonly error: boolean;
}
