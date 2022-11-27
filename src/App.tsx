import { FormEvent, useState } from 'react';

import {
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from 'wagmi';

import { Header } from './components/Header';
import { TextInput } from './components/TextInput/TextInput';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';
import { container, mintButton } from './App.css';

import abi from '../contract-abi.json';

export function App() {
  const { config } = usePrepareContractWrite({
    address: '',
    abi,
    functionName: 'mintNFT',
    args: ['Hello', 'World'],
  });

  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleMint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('write is: ', write);

    write?.();
  }

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <section className={container}>
      <MetaMaskConnectButton />

      <Header />

      <form onSubmit={handleMint}>
        <TextInput
          label="Link"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          value={link}
          onChange={setLink}
        />
        <TextInput
          label="Name"
          placeholder="e.g. CryptoPunkz #1"
          value={name}
          onChange={setName}
        />
        <TextInput
          label="Description"
          placeholder="e.g. Next generation CryptoPunkz..."
          value={description}
          onChange={setDescription}
        />

        <button type="submit" className={mintButton} disabled={isLoading}>
          {isLoading ? 'Minting...' : 'Mint'}
        </button>
      </form>

      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </section>
  );
}
