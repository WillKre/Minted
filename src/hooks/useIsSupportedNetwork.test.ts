import * as wagmi from 'wagmi';
import { describe, expect, it, vi } from 'vitest';

import {
  isSupportedNetwork,
  useIsSupportedNetwork,
} from './useIsSupportedNetwork';

vi.mock('wagmi');

describe('useIsSupportedNetwork()', () => {
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

  it('should return false if the useNetwork within returns undefined', () => {
    (wagmi.useNetwork as unknown) = () => ({
      chain: {
        network: undefined,
      },
    });

    const { isSupportedNetwork } = useIsSupportedNetwork();

    expect(isSupportedNetwork).toEqual(false);
  });
});
