import * as wagmi from 'wagmi';
import { expect, it, vi } from 'vitest';

import { useIsSupportedNetwork } from './useIsSupportedNetwork';

vi.mock('wagmi');

it('should return true if the useNetwork within returns a supported network', () => {
  (wagmi.useNetwork as unknown) = () => ({
    chain: {
      network: 'homestead',
    },
  });

  const { isSupportedNetwork } = useIsSupportedNetwork();

  expect(isSupportedNetwork).toEqual(true);
});

it('should return false if the useNetwork within returns a non-supported network', () => {
  (wagmi.useNetwork as unknown) = () => ({
    chain: {
      network: 'unsupported',
    },
  });

  const { isSupportedNetwork } = useIsSupportedNetwork();

  expect(isSupportedNetwork).toEqual(false);
});
