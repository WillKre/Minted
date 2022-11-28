import { FormEvent, useEffect, useState } from 'react';

import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from 'wagmi';

import { TextInput } from '../../components/TextInput/TextInput';
import { container, mintButton } from './Minter.css';

import abi from '../../../contract-abi.json';

export function Minter() {
  const contractAddress = '0x0f2eC22DDe87D19f78f5EE8c70C154618077346c';
  const { address } = useAccount();
  const [tokenURI, setTokenURI] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const { config } = usePrepareContractWrite({
    abi,
    address: contractAddress,
    functionName: 'mintNFT',
    args: [address, tokenURI],
  });

  const { data, write } = useContractWrite(config);

  async function handleMint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    write?.();
  }

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  function resetForm() {
    setTokenURI('');
    setName('');
    setDescription('');
  }

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      setShowSuccessScreen(true);
    }
  }, [isSuccess]);

  if (showSuccessScreen) {
    return (
      <section className={container}>
        <h3>Successfully minted your NFT!</h3>
        <p>Check it out here:</p>
        <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>Etherscan</a>

        <button
          type="button"
          onClick={() => setShowSuccessScreen(false)}
          className={mintButton}
        >
          Mint Another
        </button>
      </section>
    );
  }

  return (
    <section className={container}>
      <form style={{ width: '100%' }} onSubmit={handleMint}>
        <TextInput
          label="Link"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          value={tokenURI}
          onChange={setTokenURI}
        />
        <TextInput
          label="Name"
          placeholder="e.g. Bored Dog Yacht Club #1"
          value={name}
          onChange={setName}
        />
        <TextInput
          label="Description"
          placeholder="e.g. Next generation Bored Dogs..."
          value={description}
          onChange={setDescription}
        />

        <button type="submit" className={mintButton} disabled={isLoading}>
          {isLoading ? 'Minting...' : 'Mint'}
        </button>
      </form>
    </section>
  );
}
