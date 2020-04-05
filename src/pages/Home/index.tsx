import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/ducks/characters/actions';
import * as PlanetsActions from '../../store/ducks/planets/actions';
import { Character } from '../../store/ducks/characters/types';
import { Planet } from '../../store/ducks/planets/types';

import Navbar from '../../components/Navbar';
import ListCharacters from '../../components/ListCharacters';
import ListPlanets from '../../components/ListPlanets';

const Home: React.FC = () => {
  const [itemActive, setItemActive] = useState('characters');
  const dispatch = useDispatch();

  const {
    loading: loadingCharacters,
    data: characters,
  }: { loading: boolean; data: Character[] } = useSelector(
    (state: ApplicationState) => state.characters,
  );
  const {
    loading: loadingPlanets,
    data: planets,
  }: { loading: boolean; data: Planet[] } = useSelector(
    (state: ApplicationState) => state.planets,
  );

  useEffect(() => {
    dispatch(CharactersActions.loadRequest());
    dispatch(PlanetsActions.loadRequest());
  }, [dispatch]);

  return (
    <>
      <Navbar
        itemActive={itemActive}
        setItemActive={(value: string) => setItemActive(value)}
      />
      {itemActive === 'characters' ? (
        <ListCharacters characters={characters} loading={loadingCharacters} />
      ) : (
        <ListPlanets planets={planets} loading={loadingPlanets} />
      )}
    </>
  );
};

export default Home;
