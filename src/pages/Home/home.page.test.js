import React from 'react';
import { render, fireEvent, screen, act } from '../../helpers/test.utils';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './home.page';

test('Page render without break', () => {
  render(<Home />);
  const logo = screen.getByTestId('logo');
  const input = screen.getByTestId('search-ipt');
  const button = screen.getByTestId('search-button');
  const resetButton = screen.queryByTestId('reset-button');

  expect(logo).toBeVisible();
  expect(input).toBeVisible();
  expect(button).toBeVisible();
  expect(button).toHaveTextContent('Buscar');
  expect(resetButton).not.toBeInTheDocument();
});

test('Page render search input', async () => {
  render(<Home />);
  const input = screen.getByTestId('search-ipt');
  const button = screen.getByTestId('search-button');
  expect(input).toBeVisible();
  expect(input).toBeEnabled();
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('placeholder', 'Procure seu Filme');
  expect(button).toBeVisible();
  expect(button).toHaveTextContent('Buscar');
});

// // Perform a search
// test('Should perform a a search', () => {
//   render(<Home />);

//   const input = screen.getByTestId('search-ipt');
//   expect(input).toHaveTextContent('go');
// });

// Clear a search
