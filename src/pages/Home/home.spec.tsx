import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { Character } from '../../store/ducks/characters/types';

import Home from '.';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    planetName: undefined,
  }),
  Link: 'Link',
}));

describe('Home', () => {
  const dispatch = jest.fn();

  useDispatch.mockReturnValue(dispatch);

  it('Should be able to search', () => {
    const characters: Character[] = [
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

    useSelector.mockImplementation((callback: any) =>
      callback({
        characters: {
          loading: false,
          data: characters,
        },
        planets: {
          loading: false,
          data: [],
        },
      }),
    );

    const { container, getByTestId } = render(<Home />);

    fireEvent.change(getByTestId('inputeSarch'), { target: { value: 'Goku' } });

    const item = container.querySelectorAll('[data-testid="characterItem"]');

    expect(item).toHaveLength(1);
  });
});
