import { FormEvent, useEffect, useState } from 'react';

import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from 'wagmi';
import toast from 'react-hot-toast';

import { en } from '../../lang';
import { Success } from './Success';
import abi from '../../../contract-abi.json';
import { TextInput } from '../../components/TextInput/TextInput';
import { container, form, mintButton } from './Minter.css';

export function Minter() {
  const { address } = useAccount();
  const [tokenURI, setTokenURI] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const { config } = usePrepareContractWrite({
    abi,
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    functionName: 'mintNFT',
    args: [address, tokenURI],
  });
  const { data, write } = useContractWrite(config);
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

  async function handleMint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address) {
      toast(en.common.connectMetaMask, {
        icon: '🦊',
        position: 'bottom-right',
      });
      return;
    }

    write?.();
  }

  if (showSuccessScreen) {
    return <Success setShowSuccessScreen={setShowSuccessScreen} />;
  }

  return (
    <section className={container}>
      <form className={form} onSubmit={handleMint}>
        <TextInput
          autoFocus
          value={tokenURI}
          onChange={setTokenURI}
          label={en.minter.form.link.label}
          placeholder={en.minter.form.link.placeholder}
        />
        <TextInput
          value={name}
          onChange={setName}
          label={en.minter.form.name.label}
          placeholder={en.minter.form.name.placeholder}
        />
        <TextInput
          value={description}
          onChange={setDescription}
          label={en.minter.form.description.label}
          placeholder={en.minter.form.description.placeholder}
        />

        <button type="submit" className={mintButton} disabled={isLoading}>
          {isLoading ? 'Minting...' : 'Mint'}
        </button>
      </form>
    </section>
  );
}
