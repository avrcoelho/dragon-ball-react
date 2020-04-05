import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { CharactersState } from './ducks/characters/types';
import { PlanetsState } from './ducks/planets/types';
import { PlanetState } from './ducks/planet/types';

export interface ApplicationState {
  characters: CharactersState;
  planets: PlanetsState;
  planet: PlanetState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
