import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders products', () => {
  const { getByText } = render(<App />);
  const productsElement = getByText(/products/i);
  expect(productsElement).toBeInTheDocument();
});
