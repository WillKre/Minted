import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Providers } from './providers';
import { View } from './components/View';
import { GitHubButton } from './components/GitHubButton';
import { RainbowButton } from './components/RainbowButton';

export default function App() {
  return (
    <Providers>
      <GitHubButton />
      <RainbowButton />

      <View>
        <Outlet />
      </View>

      <Toaster />
    </Providers>
  );
}
