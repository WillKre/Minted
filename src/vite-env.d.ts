/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract } from 'alchemy-sdk';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
    contract?: Contract;
  }
}

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDRESS: string;
  readonly VITE_ALCHEMY_KEY: string;
  readonly VITE_PINATA_JWT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
