import { useState } from 'react';

import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from 'wagmi';
import { useLocation } from 'react-router-dom';

import { en } from '../../lang';
import { Image } from './Steps/Image';
import { Fields } from './Steps/Fields';
import { Success } from './Steps/Success';
import { showToast } from '../../utils/showToast';
import { capitalize } from '../../utils/capitalize';
import { pinJSONToIPFS } from '../../utils/pinJsonToIpfs';
import { pinFileToIPFS } from '../../utils/pinFileToIpfs';
import { useIsSupportedNetwork } from '../../hooks/useIsSupportedNetwork';
import MintedArtifact from '../../../artifacts/contracts/Minted.sol/Minted.json';

export type MinterStep = 'image' | 'fields' | 'success';

type WagmiError = Error & { reason?: string };

export function Minter() {
  const { state } = useLocation();
  const { address } = useAccount();
  const { isSupportedNetwork } = useIsSupportedNetwork();

  const [step, setStep] = useState<MinterStep>('image');
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isContractWriteValid, setIsContractWriteValid] = useState(false);
  const initialContractAddress: string =
    state?.contractAddress || import.meta.env.VITE_CONTRACT_ADDRESS;
  const [contractAddress, setContractAddress] = useState<string>(
    initialContractAddress
  );

  const { config } = usePrepareContractWrite({
    args: [address, ''],
    abi: MintedArtifact.abi,
    functionName: 'mintNFT',
    address: contractAddress,
    onSuccess: () => {
      setIsContractWriteValid(true);
    },
    onError: (error: WagmiError) => {
      setIsContractWriteValid(false);
      showToast(
        capitalize(error?.reason) || en.minter.toast.errorPreparing,
        '🚨'
      );
    },
  });
  const { data, write } = useContractWrite(config);
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      showToast(en.minter.toast.minted, '✅');
      setStep('success');
    },
    onError: (error: WagmiError) => {
      setIsContractWriteValid(false);
      showToast(
        capitalize(error?.reason) || en.minter.toast.errorMinting,
        '🚨'
      );
    },
  });

  function resetAddress() {
    setContractAddress(initialContractAddress);
  }

  function resetForm() {
    setImageUri('');
    setName('');
    setDescription('');
  }

  async function handleSelectImageSuccess(image: File) {
    const { pinataUrl } = await pinFileToIPFS(image);
    setImageUri(pinataUrl);
  }

  async function handleMint() {
    if (!address) {
      return showToast(en.common.connectMetaMask, '🦊');
    }

    if (!isSupportedNetwork) {
      return showToast(en.common.unsupportedNetwork, '🚨');
    }

    const { pinataUrl } = await pinJSONToIPFS({
      name,
      description,
      image: imageUri,
      attributes: [],
    });

    showToast(en.minter.toast.pinnedMetaData, '🧪');

    if (pinataUrl) {
      write?.({ recklesslySetUnpreparedArgs: [address, pinataUrl] });
    }
  }

  if (step === 'image') {
    return (
      <Image
        setStep={setStep}
        imageUri={imageUri}
        setImageUri={setImageUri}
        resetAddress={resetAddress}
        contractAddress={contractAddress}
        setContractAddress={setContractAddress}
        isContractWriteValid={isContractWriteValid}
        handleSelectImageSuccess={handleSelectImageSuccess}
      />
    );
  }

  if (step === 'fields') {
    return (
      <Fields
        name={name}
        setName={setName}
        setStep={setStep}
        isMinting={isLoading}
        handleMint={handleMint}
        description={description}
        setDescription={setDescription}
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
