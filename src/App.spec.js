import React from 'react';
import {render} from 'react-testing-library';
import App from './app';

describe('App', () => {
  it('Renders without error', () => {
    render(<App />);
  });
})