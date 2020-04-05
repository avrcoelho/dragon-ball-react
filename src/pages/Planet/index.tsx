import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ApplicationState } from '../../store';
import * as PlanetActions from '../../store/ducks/planet/actions';
import { Planet as PlanetData } from '../../store/ducks/planets/types';

import Header from '../../components/Header';
import Load from '../../components/Load';

import {
  Container,
  Title,
  PlanetContainer,
  Data,
  Image,
  Name,
  ResidentContainer,
  ResidentTitle,
  List,
  Item,
} from './styles';
import defaultPlanet from '../../assets/images/defaultPlanet.png';

const Planet: React.FC = () => {
  const dispatch = useDispatch();
  const { planetName } = useParams();

  const {
    loading,
    data,
  }: { loading: boolean; data: PlanetData | null } = useSelector(
    (state: ApplicationState) => state.planet,
  );

  useEffect(() => {
    if (planetName) {
      // dispatch(PlanetActions.loadRequest(planetName));
    }
  }, [dispatch, planetName]);

  return (
    <>
      <Header />
      <Container>
        {loading && <Load />}
        {!loading && data && (
          <>
            <Title>Planeta</Title>
            <PlanetContainer data-testid="planetContainer">
              <Data>
                <Image
                  src={
                    data.image.includes('../')
                      ? `${process.env.REACT_APP_URL_API}/${data.image.replace(
                          '../',
                          '',
                        )}`
                      : data.image
                  }
                  onError={(event: any) => (event.target.src = defaultPlanet)}
                  alt={data.name}
                  data-testid="planetImage"
                />
                <Name data-testid="planetName">{data.name}</Name>
              </Data>
              <ResidentContainer>
                <ResidentTitle>Habitantes</ResidentTitle>
                <List>
                  {data.residents.map((resident: string) => (
                    <Item key={resident}>{resident}</Item>
                  ))}
                </List>
              </ResidentContainer>
            </PlanetContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Planet;
