import { FormEvent, useEffect, useState } from 'react';

import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from 'wagmi';
import toast from 'react-hot-toast';

import { en } from '../../lang';
import { Image } from './Steps/Image';
import { Fields } from './Steps/Fields';
import { Success } from './Steps/Success';
import { pinJSONToIPFS } from '../../utils/pinJsonToIpfs';
import { pinFileToIPFS } from '../../utils/pinFileToIpfs';
import MintzArtifact from '../../../artifacts/contracts/Mintz.sol/Mintz.json';

export function Minter() {
  const [step, setStep] = useState('image');
  const { address } = useAccount();
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { config } = usePrepareContractWrite({
    args: [address, ''],
    abi: MintzArtifact.abi,
    functionName: 'mintNFT',
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
  });
  const { data, write } = useContractWrite(config);
  const { isLoading: isMinting, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  function resetForm() {
    setImageUri('');
    setName('');
    setDescription('');
  }

  useEffect(() => {
    if (isSuccess) {
      setStep('success');
    }
  }, [isSuccess]);

  async function handleSelectImageSuccess(image: File) {
    try {
      toast(en.minter.toast.uploadingImage, {
        icon: '🏞',
        position: 'bottom-right',
      });

      const { pinataUrl } = await pinFileToIPFS(image);
      setImageUri(pinataUrl);

      toast(en.minter.toast.uploadedImage, {
        icon: '✅',
        position: 'bottom-right',
      });
    } catch {
      toast(en.minter.toast.uploadImageError, {
        icon: '❌',
        position: 'bottom-right',
      });
    }
  }

  async function handleGoToFields(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStep('fields');
  }

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

  if (step === 'image') {
    return (
      <Image
        imageUri={imageUri}
        setImageUri={setImageUri}
        onSubmit={handleGoToFields}
        handleSelectImageSuccess={handleSelectImageSuccess}
      />
    );
  }

  if (step === 'fields') {
    return (
      <Fields
        name={name}
        setName={setName}
        description={description}
        isMinting={isMinting}
        setDescription={setDescription}
        onSubmit={handleMint}
      />
    );
  }

  if (step === 'success') {
    return (
      <Success
        data={data}
        setStep={setStep}
        imageUri={imageUri}
        resetForm={resetForm}
      />
    );
  }

  return null;
}
