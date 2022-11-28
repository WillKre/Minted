import { useState } from 'react';
import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { Step } from './types';
import { getScreen } from './utils/getScreen';
import { Header } from './components/Header';
import { Stepper } from './components/Stepper';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';

export function App() {
  const { chains, provider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
    publicProvider(),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    provider,
  });

  const [step, setStep] = useState<Step>('start');

  return (
    <WagmiConfig client={wagmiClient}>
      <MetaMaskConnectButton />

      <Header />

      <Stepper step={step} setStep={setStep}>
        {getScreen(step, setStep)}
      </Stepper>
    </WagmiConfig>
  );
}
