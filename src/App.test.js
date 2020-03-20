import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react Link', () => {
  const { getByText } = render(<App />);
  const LinkElement = getByText(/learn react/i);
  expect(LinkElement).toBeInTheDocument();
});
