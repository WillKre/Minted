import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Preview } from './Preview';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

it('renders the preview image and label', () => {
  render(<Preview src="https://example.com/image.png" />);

  const image = screen.getByRole('img', { name: 'NFT' });
  const label = screen.getByText('Preview');

  expect(image).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});
