import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import Planet from '.';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    planetname: 'Vegeta',
  }),
}));

describe('Planet', () => {
  const dispatch = jest.fn();

  useDispatch.mockReturnValue(dispatch);

  it('Should be able to show data', () => {
    const planet = {
      residents: ['Goku', 'Vegeta', 'Cunbar', 'Raditz', 'Gabriel', 'Broly'],
      _id: '5c7c8a8312b25c00177aa152',
      created: '2019-03-04T02:16:35.038Z',
      name: 'Earth',
      url: '/api/planet/Vegeta',
      image: `${process.env.REACT_APP_URL_API}/images/Goku.jpg`,
    };

    useSelector.mockImplementation(
      (
        callback: (arg0: {
          planet: {
            loading: boolean;
            data: {
              residents: string[];
              _id: string;
              created: string;
              name: string;
              url: string;
              image: string;
            };
          };
        }) => any,
      ) =>
        callback({
          planet: {
            loading: false,
            data: planet,
          },
        }),
    );

    const { getByTestId, getByText, container, queryByTestId } = render(
      <Planet />,
    );

    const item = container.querySelectorAll('li');

    expect(item).toHaveLength(planet.residents.length);
    expect(getByTestId('planetName')).toContainElement(getByText(planet.name));
    expect(getByTestId('planetImage').getAttribute('src')).toEqual(
      planet.image,
    );
    expect(queryByTestId('load')).toBeFalsy();
  });

  it('Should be able to show loading', () => {
    useSelector.mockImplementation(
      (
        callback: (arg0: {
          planet: {
            loading: boolean;
            data: null;
          };
        }) => any,
      ) =>
        callback({
          planet: {
            loading: true,
            data: null,
          },
        }),
    );

    const { queryByTestId } = render(<Planet />);

    expect(queryByTestId('planetContainer')).toBeFalsy();
    expect(queryByTestId('load')).toBeTruthy();
  });
});
