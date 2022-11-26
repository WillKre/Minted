import { FormEvent, useState } from 'react';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput/TextInput';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';
import { container } from './App.css';

export function App() {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  function handleConnectWallet() {
    console.log('Connect wallet...');
  }

  function handleMint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Handle mint...');
  }

  return (
    <div className={container}>
      <MetaMaskConnectButton
        address={walletAddress}
        onClick={handleConnectWallet}
      />

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
        <Button />
      </form>
    </div>
  );
}
