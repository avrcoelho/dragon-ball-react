import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/ducks/characters/actions';
import * as PlanetsActions from '../../store/ducks/planets/actions';
import { Character } from '../../store/ducks/characters/types';
import { Planet } from '../../store/ducks/planets/types';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import ListCharacters from '../../components/ListCharacters';
import ListPlanets from '../../components/ListPlanets';
import Search from '../../components/Search';

const Home: React.FC = () => {
  const [itemActive, setItemActive] = useState('characters');
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const {
    loading: loadingCharacters,
    data: charactersData,
  }: { loading: boolean; data: Character[] } = useSelector(
    (state: ApplicationState) => state.characters,
  );
  const {
    loading: loadingPlanets,
    data: planetsData,
  }: { loading: boolean; data: Planet[] } = useSelector(
    (state: ApplicationState) => state.planets,
  );

  useEffect(() => {
    dispatch(CharactersActions.loadRequest());
    dispatch(PlanetsActions.loadRequest());
  }, [dispatch]);

  useEffect(() => {
    setSearch('');
  }, [itemActive]);

  const planets = useMemo(
    () =>
      itemActive === 'planets' && search
        ? planetsData.filter((planet: Planet) =>
            planet.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()),
          )
        : planetsData,
    [search, itemActive, planetsData],
  );

  const characters = useMemo(
    () =>
      itemActive === 'characters' && search
        ? charactersData.filter((character: Character) =>
            character.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()),
          )
        : charactersData,
    [search, itemActive, charactersData],
  );

  return (
    <>
      <Header />
      <Navbar
        itemActive={itemActive}
        setItemActive={(value: string) => setItemActive(value)}
      />
      {itemActive === 'characters' ? (
        <>
          <Search search={(value: string) => setSearch(value)} value={search} />
          <ListCharacters characters={characters} loading={loadingCharacters} />
        </>
      ) : (
        <>
          <Search search={(value: string) => setSearch(value)} value={search} />
          <ListPlanets planets={planets} loading={loadingPlanets} />
        </>
      )}
    </>
  );
};

export default Home;
