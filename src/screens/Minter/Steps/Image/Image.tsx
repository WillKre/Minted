import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';

import { en } from '../../../../lang';
import { MinterStep } from '../../Minter';
import { showToast } from '../../../../utils/showToast';
import { Preview } from '../../../../components/Preview';
import { TextInput } from '../../../../components/TextInput';
import { ImageSelect } from '../../../../components/ImageSelect';
import { form, section, button, buttonGrid } from '../../../../App.css';

type ImageProps = {
  imageUri: string;
  contractAddress: string;
  isContractWriteValid: boolean;
  setStep: Dispatch<SetStateAction<MinterStep>>;
  setImageUri: Dispatch<SetStateAction<string>>;
  setContractAddress: Dispatch<SetStateAction<string>>;
  handleSelectImageSuccess: (image: File) => void;
};

export function Image({
  setStep,
  imageUri,
  setImageUri,
  contractAddress,
  setContractAddress,
  isContractWriteValid,
  handleSelectImageSuccess,
}: ImageProps) {
  const { address } = useAccount();
  const navigate = useNavigate();

  const [imgHasError, setImgHasError] = useState(false);
  const [showTextField, setShowTextField] = useState(false);
  const [useCustomAddress, setUseCustomAddress] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address) {
      return showToast(en.common.connectMetaMask, '🦊');
    }

    if (!isContractWriteValid) {
      return showToast(en.minter.toast.invalidContractAddress, '🚨');
    }

    if (!imageUri || imgHasError) {
      return showToast(en.minter.toast.mintButtonValidation, '🏞');
    }

    setStep('fields');
  }

  function switchUseCustomAddress() {
    setUseCustomAddress(!useCustomAddress);

    if (useCustomAddress) {
      setContractAddress(import.meta.env.VITE_CONTRACT_ADDRESS);
    }
  }

  function switchImageType() {
    setImageUri('');
    setShowTextField(!showTextField);
  }

  function handleGoToHome() {
    navigate('/');
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={onSubmit}>
        <div>
          <TextInput
            autoFocus
            value={contractAddress}
            disabled={!useCustomAddress}
            onChange={setContractAddress}
            label={en.minter.form.contract.label}
            action={{
              label: useCustomAddress
                ? en.minter.form.contract.actionLabelMinted
                : en.minter.form.contract.actionLabelCustom,
              onClick: switchUseCustomAddress,
            }}
          />
          {showTextField ? (
            <TextInput
              autoFocus
              value={imageUri}
              onChange={setImageUri}
              label={en.minter.form.link.label}
              placeholder={en.minter.form.link.placeholder}
              action={{
                label: en.minter.form.link.actionLabelImage,
                onClick: switchImageType,
              }}
            />
          ) : (
            <ImageSelect
              onChange={handleSelectImageSuccess}
              action={{
                label: en.minter.form.link.actionLabelInput,
                onClick: switchImageType,
              }}
            />
          )}

          {!!imageUri.length && (
            <Preview
              src={imageUri}
              onImgLoad={() => setImgHasError(false)}
              onImgError={() => setImgHasError(true)}
            />
          )}
        </div>

        <div className={buttonGrid}>
          <button type="button" className={button} onClick={handleGoToHome}>
            {en.common.back}
          </button>
          <button type="submit" className={button}>
            {en.minter.next}
          </button>
        </div>
      </form>
    </section>
  );
}
