import { useNetwork } from 'wagmi';
import { SUPPORTED_NETWORKS } from '../constants';

export function useIsSupportedNetwork() {
  const { chain } = useNetwork();

  return {
    isSupportedNetwork: chain
      ? SUPPORTED_NETWORKS.includes(chain.network)
      : false,
  };
}
