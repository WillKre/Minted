import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ZoomableImage } from './ZoomableImage';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

it('renders a zoomable image with an alt attribute', () => {
  render(<ZoomableImage alt="Bitcoin" src="https://bitcoin.com/logo.png" />);

  const image = screen.getByRole('img', { name: 'Bitcoin' });

  expect(image).toBeInTheDocument();
});
