import { useEffect, useState } from 'react';

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
import { pinJSONToIPFS } from '../../utils/pinJsonToIpfs';
import { pinFileToIPFS } from '../../utils/pinFileToIpfs';
import MintedArtifact from '../../../artifacts/contracts/Minted.sol/Minted.json';

export type MinterStep = 'image' | 'fields' | 'success';

export function Minter() {
  const location = useLocation();
  const [step, setStep] = useState<MinterStep>('image');
  const { address } = useAccount();
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const contractAddress =
    location.state?.contractAddress || import.meta.env.VITE_CONTRACT_ADDRESS;

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    args: [address, ''],
    abi: MintedArtifact.abi,
    functionName: 'mintNFT',
    address: contractAddress,
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  function resetForm() {
    setImageUri('');
    setName('');
    setDescription('');
  }

  async function handleSelectImageSuccess(image: File) {
    const { pinataUrl } = await pinFileToIPFS(image);
    if (pinataUrl) setImageUri(pinataUrl);
  }

  async function handleMint() {
    if (!address) {
      return showToast(en.common.connectMetaMask, '🦊');
    }

    const { pinataUrl } = await pinJSONToIPFS({
      name,
      description,
      image: imageUri,
      attributes: [],
    });

    if (pinataUrl) {
      write?.({
        recklesslySetUnpreparedArgs: [address, pinataUrl],
      });
    }
  }

  useEffect(() => {
    if (isSuccess) setStep('success');
    if (isPrepareError || isError) {
      showToast(
        (prepareError || error)?.message || en.minter.toast.errorMinting,
        '🚨'
      );
    }
  }, [isSuccess, isError, isPrepareError]);

  if (step === 'image') {
    return (
      <Image
        setStep={setStep}
        imageUri={imageUri}
        setImageUri={setImageUri}
        contractAddress={contractAddress}
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
