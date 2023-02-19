import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Banner, formatNetworkName } from './Banner';

describe('Banner', () => {
  it('shows the informative text by default', () => {
    render(<Banner />);

    const banner = screen.getByText(
      /Please connect your wallet to a supported network/
    );

    expect(banner).toBeInTheDocument();
  });
});

describe('formatNetworkName', () => {
  it('formats the name given a network', () => {
    const network1 = 'homestead';
    const network2 = 'goerli';

    const name1 = formatNetworkName(network1);
    const name2 = formatNetworkName(network2);

    expect(name1).toBe('Mainnet');
    expect(name2).toBe('Goerli');
  });
});
