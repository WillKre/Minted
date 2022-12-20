/// <reference types="vite/client" />
import { Contract } from 'alchemy-sdk';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    contract?: Contract;
    ethereum?: MetaMaskInpageProvider;
  }
}

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDRESS: string;
  readonly VITE_ALCHEMY_KEY: string;
  readonly VITE_PINATA_API_KEY: string;
  readonly VITE_PINATA_API_SECRET: string;
  readonly SENTRY_DSN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
