import React from 'react';

import { Character } from '../../store/ducks/characters/types';

import Load from '../Load';
import CharacterItem from '../CharacterItem';

import { Container, List } from './styles';

type Props = {
  characters: Character[];
  loading: boolean;
};

const ListCharacters: React.FC<Props> = ({ characters, loading }) => (
  <Container>
    {loading ? (
      <Load />
    ) : (
      <List data-testid="characterItem">
        {characters.map((character: Character) => (
          <CharacterItem key={character._id} character={character} />
        ))}
      </List>
    )}
  </Container>
);

export default ListCharacters;
