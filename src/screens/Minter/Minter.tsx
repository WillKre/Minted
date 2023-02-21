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
import { TAttribute } from '../../types';
import { Success } from './Steps/Success';
import { showToast } from '../../utils/showToast';
import { capitalize } from '../../utils/capitalize';
import { pinFileToIpfs } from '../../utils/pinFileToIpfs';
import { appendFileToForm } from '../../utils/appendFileToForm';
import MintedArtifact from '../../../artifacts/contracts/Minted.sol/Minted.json';

export type MinterStep = 'image' | 'fields' | 'success';

type WagmiError = Error & { reason?: string };

export function Minter() {
  const { state } = useLocation();
  const { address } = useAccount();

  const [step, setStep] = useState<MinterStep>('image');
  const [imageUri, setImageUri] = useState('');
  const [jsonPinataUrl, setJsonPinataUrl] = useState<string>('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attributes, setAttributes] = useState<TAttribute[]>([]);
  const [isContractWriteValid, setIsContractWriteValid] = useState(false);
  const initialContractAddress: string =
    state?.contractAddress || import.meta.env.VITE_CONTRACT_ADDRESS;
  const [contractAddress, setContractAddress] = useState<string>(
    initialContractAddress
  );

  const { config } = usePrepareContractWrite({
    args: [address, jsonPinataUrl],
    abi: MintedArtifact.abi,
    functionName: 'mintNFT',
    address: contractAddress as `0x${string}`,
    onSuccess: () => setIsContractWriteValid(true),
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
      setJsonPinataUrl('');
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

  async function handleSelectImageSuccess(image: File) {
    const { pinataUrl } = await pinFileToIpfs(appendFileToForm(image));
    setImageUri(pinataUrl);
  }

  if (step === 'image') {
    return (
      <Image
        setStep={setStep}
        imageUri={imageUri}
        setImageUri={setImageUri}
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
        imageUri={imageUri}
        isMinting={isLoading}
        attributes={attributes}
        description={description}
        setAttributes={setAttributes}
        handleWrite={() => write?.()}
        setDescription={setDescription}
        setJsonPinataUrl={setJsonPinataUrl}
      />
    );
  }

  if (step === 'success') {
    return (
      <Success
        data={data}
        setStep={setStep}
        setName={setName}
        imageUri={imageUri}
        setImageUri={setImageUri}
        setAttributes={setAttributes}
        setDescription={setDescription}
      />
    );
  }

  return null;
}
