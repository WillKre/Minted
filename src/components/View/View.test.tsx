import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { View } from './View';

vi.mock('../../hooks/useIsSupportedNetwork', () => ({
  useIsSupportedNetwork: () => ({
    isSupportedNetwork: false,
  }),
}));

it('renders a child', () => {
  render(
    <View>
      <h1>Child</h1>
    </View>
  );

  const child = screen.getByRole('heading', { name: 'Child' });

  expect(child).toBeInTheDocument();
});

it('renders a banner if the user is connected to an unsupported network', () => {
  render(
    <View>
      <h1>Unsupported</h1>
    </View>
  );

  const bannerText = screen.getByText(
    'Please connect your wallet to a supported network (Mainnet, Goerli)'
  );

  expect(bannerText).toBeInTheDocument();
});
