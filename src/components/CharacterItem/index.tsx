import React, { memo } from 'react';

import { Character } from '../../store/ducks/characters/types';

import { Container, Image, Name } from './styles';
import defaultUser from '../../assets/images/defaultUser.png';

type Props = {
  character: Character;
};

const CharacterItem: React.FC<Props> = ({ character }) => (
  <Container>
    <Image
      src={
        character.image.includes('../')
          ? `${process.env.REACT_APP_URL_API}/${character.image.replace(
              '../',
              '',
            )}`
          : character.image
      }
      onError={(event: any) => (event.target.src = defaultUser)}
      alt={character.name}
      data-testid="image"
    />
    <Name data-testid="name">{character.name}</Name>
  </Container>
);

export default memo(CharacterItem);
