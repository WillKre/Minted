import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import { Providers } from './providers';
import { View } from './components/View';
import { GitHubButton } from './components/GitHubButton';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';

export default function App() {
  return (
    <Providers>
      <GitHubButton />
      <MetaMaskConnectButton />

      <View>
        <Outlet />
      </View>

      <Toaster />
    </Providers>
  );
}
