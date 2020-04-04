import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import * as Characters from '../../store/ducks/characters/actions';
import { Character } from '../../store/ducks/characters/types';

import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
  const [itemActive, setItemActive] = useState('characters');
  const dispatch = useDispatch();

  const {
    loading: loadingCharacters,
    data: characters,
  }: { loading: boolean; data: Character[] } = useSelector(
    (state: ApplicationState) => state.characters,
  );

  useEffect(() => {
    dispatch(Characters.loadRequest());
  }, [dispatch]);

  console.log(characters);

  return (
    <Navbar
      itemActive={itemActive}
      setItemActive={(value: string) => setItemActive(value)}
    />
  );
};

export default Home;
