import { ReactNode } from 'react';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { mainnet, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';

type WagmiRainbowProps = {
  children: ReactNode;
};

export function WagmiRainbow({ children }: WagmiRainbowProps) {
  const { chains, provider } = configureChains(
    [mainnet, goerli],
    [
      alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({ appName: 'Minted', chains });

  const wagmiClient = createClient({ autoConnect: true, connectors, provider });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
