import React from 'react';
import { render } from '@testing-library/react';

import PlanetItem from '.';

describe('Planet Item', () => {
  it('Should be able to show data', () => {
    const planet = {
      residents: ['Gohan', 'Trunks', 'Android16'],
      _id: '5c785e7a52cc1dd11ddb59ba',
      created: '2019-02-28T22:19:38.652Z',
      name: 'Earth',
      url: '/api/planet/Earth',
      image: `${process.env.REACT_APP_URL_API}/images/Goku.jpg`,
    };

    const { getByTestId, getByText } = render(<PlanetItem planet={planet} />);

    expect(getByTestId('name')).toContainElement(getByText(planet.name));
    expect(getByTestId('image').getAttribute('src')).toEqual(planet.image);
  });
});
