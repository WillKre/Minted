/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract } from 'alchemy-sdk';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
    contract?: Contract;
  }

  namespace NodeJS {
    interface ProcessEnv {
      PINATA_API_KEY: string;
      PINATA_API_SECRET: string;
      ALCHEMY_KEY: string;
    }
  }
}
