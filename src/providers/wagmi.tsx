import { ReactNode } from 'react';
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { InjectedConnector } from 'wagmi/connectors/injected';

type WagmiProps = {
  children: ReactNode;
};

export function Wagmi({ children }: WagmiProps) {
  const { chains, provider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
    publicProvider(),
  ]);

  const wagmiClient = createClient({
    provider,
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
  });

  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
}
