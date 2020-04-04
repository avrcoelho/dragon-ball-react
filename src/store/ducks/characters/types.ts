export enum CharactersTypes {
  LOAD_REQUEST = '@characters/LOAD_REQUEST',
  LOAD_SUCCESS = '@characters/LOAD_SUCCESS',
  LOAD_FAILURE = '@characters/LOAD_FAILURE',
}

export interface Character {
  species: string;
  status: string;
  originPlanet: string;
  gender: string;
  _id: string;
  name: string;
  series: string;
  created: string;
  url: string;
  image: string;
}

export interface CharactersState {
  readonly data: Character[];
  readonly loading: boolean;
  readonly error: boolean;
}
