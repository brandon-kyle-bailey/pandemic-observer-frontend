import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders STAY', () => {
  const { getByText } = render(<App />);
  const stay = getByText(/STAY/i);
  expect(stay).toBeInTheDocument();
});

test('renders HOME', () => {
  const { getByText } = render(<App />);
  const home = getByText(/HOME/i);
  expect(home).toBeInTheDocument();
});