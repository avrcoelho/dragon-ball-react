import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ListPlanets from '.';

describe('List Planets', () => {
  it('Should be able to list planets', () => {
    const planets = [
      {
        residents: ['Goku', 'Vegeta', 'Cunbar', 'Raditz', 'Gabriel', 'Broly'],
        _id: '5c7c8a8312b25c00177aa152',
        created: '2019-03-04T02:16:35.038Z',
        name: 'Vegeta',
        url: '/api/planet/Vegeta',
        image: '../images/Vegeta.jpg',
      },
      {
        residents: ['Fat_Majin_Buu', 'Kid_Buu'],
        _id: '5c7c8a8b12b25c00177aa153',
        created: '2019-03-04T02:16:43.767Z',
        name: 'Majin',
        url: '/api/planet/Majin',
        image: '../images/Majin.jpg',
      },
    ];
    const { container } = render(
      <MemoryRouter>
        <ListPlanets planets={planets} loading={false} />
      </MemoryRouter>,
    );

    const item = container.querySelectorAll('li');

    expect(item).toHaveLength(2);
  });

  it('Should be able to render load component', () => {
    const { getByTestId } = render(<ListPlanets planets={[]} loading={true} />);

    expect(getByTestId('load')).toBeTruthy();
  });
});
