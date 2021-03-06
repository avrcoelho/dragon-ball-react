import React from 'react';
import { render } from '@testing-library/react';

import CharacterItem from '.';

describe('Character Item', () => {
  it('Should be able to show data', () => {
    const character = {
      species: 'Saiyan',
      status: 'Alive',
      originPlanet: 'Vegeta',
      gender: 'Male',
      _id: '5c7c8ab312b25c00177aa155',
      name: 'Goku',
      series: 'DragonBall',
      created: '2019-03-04T02:17:23.056Z',
      url: '/api/character/Goku',
      image: `${process.env.REACT_APP_URL_API}/images/Goku.jpg`,
    };

    const { getByTestId, getByText } = render(
      <CharacterItem character={character} />,
    );

    expect(getByTestId('name')).toContainElement(getByText(character.name));
    expect(getByTestId('image').getAttribute('src')).toEqual(character.image);
  });
});
