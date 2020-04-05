import React, { memo } from 'react';

import { Planet } from '../../store/ducks/planets/types';

import { Container, Redirect, Image, NameContainer, Name } from './styles';
import defaultPlanet from '../../assets/images/defaultPlanet.png';

type Props = {
  planet: Planet;
};

const PlanetItem: React.FC<Props> = ({ planet }) => (
  <Container>
    <Redirect to={`/planet/${planet.name}`}>
      <Image
        src={
          planet.image.includes('../')
            ? `${process.env.REACT_APP_URL_API}/${planet.image.replace(
                '../',
                '',
              )}`
            : planet.image
        }
        onError={(event: any) => (event.target.src = defaultPlanet)}
        alt={planet.name}
        data-testid="image"
      />
      <NameContainer>
        <Name data-testid="name">{planet.name}</Name>
      </NameContainer>
    </Redirect>
  </Container>
);

export default memo(PlanetItem);
