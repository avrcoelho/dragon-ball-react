import React, { memo } from 'react';

import { Character } from '../../store/ducks/characters/types';

import { Container, Image, NameContainer, Name } from './styles';
import defaultCharacter from '../../assets/images/defaultCharacter.png';

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
      onError={(event: any) => (event.target.src = defaultCharacter)}
      alt={character.name}
      data-testid="image"
    />
    <NameContainer>
      <Name data-testid="name">{character.name}</Name>
    </NameContainer>
  </Container>
);

export default memo(CharacterItem);
