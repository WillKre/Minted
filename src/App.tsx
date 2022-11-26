import { FormEvent, useState } from 'react';

import { Header } from './components/Header';
import { TextInput } from './components/TextInput/TextInput';
import { MetaMaskConnectButton } from './components/MetaMaskConnectButton';
import { connectWallet } from './utils/connectWallet';
import { container, mintButton, status } from './App.css';

export function App() {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [metaMaskStatus, setMetaMaskStatus] = useState<string | JSX.Element>(
    ''
  );

  async function handleConnectWallet() {
    const { address, status } = await connectWallet();
    setWalletAddress(address);
    setMetaMaskStatus(status);
  }

  function handleMint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Handle mint...');
  }

  return (
    <section className={container}>
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

        <button type="submit" className={mintButton}>
          Mint NFT
        </button>

        <p className={status}>{metaMaskStatus}</p>
      </form>
    </section>
  );
}
