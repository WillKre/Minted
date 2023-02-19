import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';

it('renders a header which contains the Minted logo w/ alt', () => {
  render(<Header />);

  const header = screen.getByRole('banner');
  const image = screen.getByRole('img', { name: 'Minted' });

  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
