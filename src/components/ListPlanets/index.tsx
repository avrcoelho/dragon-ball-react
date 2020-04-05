import React from 'react';

import { Planet } from '../../store/ducks/planets/types';

import Load from '../Load';
import PlanetItem from '../PlanetItem';

import { Container, List } from './styles';

type Props = {
  planets: Planet[];
  loading: boolean;
};

const ListPlanets: React.FC<Props> = ({ planets, loading }) => (
  <Container>
    {loading ? (
      <Load />
    ) : (
      <List>
        {planets.map((planet: Planet) => (
          <PlanetItem key={planet._id} planet={planet} />
        ))}
      </List>
    )}
  </Container>
);

export default ListPlanets;
