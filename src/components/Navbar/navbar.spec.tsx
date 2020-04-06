import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '.';

describe('Navbar', () => {
  it('Should be able characters item to have actived', () => {
    const { getByTestId } = render(
      <Navbar itemActive="characters" setItemActive={() => {}} />,
    );

    expect(getByTestId('characters')).toHaveStyle('background-color: #f4511e');
    expect(getByTestId('characters')).toHaveStyle('color: #000');
    expect(getByTestId('planets')).toHaveStyle('background-color: transparent');
    expect(getByTestId('planets')).toHaveStyle('color: #f4511e');
  });

  it('Should be able planets item to have actived', () => {
    const { getByTestId } = render(
      <Navbar itemActive="planets" setItemActive={() => {}} />,
    );

    expect(getByTestId('planets')).toHaveStyle('background-color: #f4511e');
    expect(getByTestId('planets')).toHaveStyle('color: #000');
    expect(getByTestId('characters')).toHaveStyle(
      'background-color: transparent',
    );
    expect(getByTestId('characters')).toHaveStyle('color: #f4511e');
  });
});
