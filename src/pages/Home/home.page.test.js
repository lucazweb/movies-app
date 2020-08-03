import React from 'react';
import { render, fireEvent, screen } from '../../helpers/test.utils';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './home.page';

test('Component render without break', () => {
  render(<Home />);
});
