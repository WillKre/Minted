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
import { pinJSONToIPFS } from '../../utils/pinJsonToIpfs';
import { section, form, submitButton } from '../../App.css';
import { TextInput } from '../../components/TextInput/TextInput';
import MintzArtifact from '../../../artifacts/contracts/Mintz.sol/Mintz.json';

export function Minter() {
  const { address } = useAccount();
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const { config } = usePrepareContractWrite({
    abi: MintzArtifact.abi,
    functionName: 'mintNFT',
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    args: [address, ''],
  });
  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  function resetForm() {
    setImageUri('');
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

    const { pinataUrl, errorMessage } = await pinJSONToIPFS({
      name,
      description,
      image: imageUri,
      attributes: [],
    });

    if (errorMessage) {
      toast(errorMessage, {
        icon: '🦊',
        position: 'bottom-right',
      });
    }

    write?.({
      recklesslySetUnpreparedArgs: [address, pinataUrl],
    });
  }

  if (showSuccessScreen) {
    return <Success data={data} setShowSuccessScreen={setShowSuccessScreen} />;
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={handleMint}>
        <TextInput
          autoFocus
          value={imageUri}
          onChange={setImageUri}
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

        <button type="submit" className={submitButton} disabled={isLoading}>
          {isLoading ? 'Minting...' : 'Mint'}
        </button>
      </form>
    </section>
  );
}
