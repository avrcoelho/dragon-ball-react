import React from 'react';

import { Character } from '../../store/ducks/characters/types';

import Load from '../Load';

import { Container, List, Item, Image, NameContainer, Name } from './styles';
import defaultUser from '../../assets/images/defaultUser.png';

type Prop = {
  characters: Character[];
  loading: boolean;
};

const ListCharacters: React.FC<Prop> = ({ characters, loading }) => (
  <Container>
    {loading ? (
      <Load />
    ) : (
      <>
        {characters.map((character: Character) => (
          <List key={character._id}>
            <Item>
              <Image
                src={
                  character.image.includes('../')
                    ? `${
                        process.env.REACT_APP_URL_API
                      }/${character.image.replace('../', '')}`
                    : character.image
                }
                onError={(event: any) => (event.target.src = defaultUser)}
                alt={character.name}
              />
              <NameContainer>
                <Name>{character.name}</Name>
              </NameContainer>
            </Item>
          </List>
        ))}
      </>
    )}
  </Container>
);

export default ListCharacters;
