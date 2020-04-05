import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    planetName: 'Vegeta',
  }),
  Link: 'Link',
}));

describe('Header', () => {
  it('Should be able to back', () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId('buttonBack')).toBeTruthy();
  });
});
