import React from 'react';
import { render } from '@testing-library/react';

import ListCharacters from '.';

describe('List Characters', () => {
  it('Should be able to list characters', () => {
    const characters = [
      {
        species: 'unknown',
        status: 'Alive',
        originPlanet: 'Unknown',
        gender: 'Male',
        _id: '5c7c89fb12b25c00177aa150',
        name: 'Frieza',
        series: 'Z',
        created: '2019-03-04T02:14:19.836Z',
        url: '/api/character/Frieza',
        image: '../images/Frieza.jpg',
      },
      {
        species: 'Saiyan',
        status: 'Alive',
        originPlanet: 'Vegeta',
        gender: 'Male',
        _id: '5c7c8ab312b25c00177aa155',
        name: 'Goku',
        series: 'DragonBall',
        created: '2019-03-04T02:17:23.056Z',
        url: '/api/character/Goku',
        image: '../images/Goku.jpg',
      },
    ];
    const { container } = render(
      <ListCharacters characters={characters} loading={false} />,
    );

    const item = container.querySelectorAll('li');

    expect(item).toHaveLength(2);
  });

  it('Should be able to render load component', () => {
    const { getByTestId } = render(
      <ListCharacters characters={[]} loading={true} />,
    );

    expect(getByTestId('load')).toBeTruthy();
  });
});
