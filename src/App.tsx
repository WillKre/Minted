import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { View } from './components/View';
import { Header } from './components/Header';
import { GitHubButton } from './components/GitHubButton';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';

export default function App() {
  const { chains, provider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
    publicProvider(),
  ]);

  const wagmiClient = createClient({
    provider,
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <GitHubButton />
      <MetaMaskConnectButton />

      <Header />

      <View>
        <Outlet />
      </View>

      <Toaster />
    </WagmiConfig>
  );
}
