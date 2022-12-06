import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { en } from '../../../../lang';
import { MinterStep } from '../../Minter';
import { showToast } from '../../../../utils/showToast';
import { Preview } from '../../../../components/Preview';
import { form, section, button } from '../../../../App.css';
import { ImageSelect } from '../../../../components/ImageSelect';
import { TextInput } from '../../../../components/TextInput/TextInput';

type ImageProps = {
  imageUri: string;
  contractAddress: string;
  isContractWriteValid: boolean;
  setStep: Dispatch<SetStateAction<MinterStep>>;
  setImageUri: Dispatch<SetStateAction<string>>;
  setContractAddress: Dispatch<SetStateAction<string>>;
  resetAddress: () => void;
  handleSelectImageSuccess: (image: File) => void;
};

export function Image({
  setStep,
  imageUri,
  setImageUri,
  resetAddress,
  contractAddress,
  setContractAddress,
  isContractWriteValid,
  handleSelectImageSuccess,
}: ImageProps) {
  const navigate = useNavigate();

  const [imgHasError, setImgHasError] = useState(false);
  const [showTextField, setShowTextField] = useState(false);
  const [useCustomAddress, setUseCustomAddress] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      resetAddress();
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
                ? 'Switch to Minted contract'
                : 'Switch to custom contract',
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
                label: 'Switch to image upload',
                onClick: switchImageType,
              }}
            />
          ) : (
            <ImageSelect
              onChange={handleSelectImageSuccess}
              action={{
                label: 'Switch to URI input',
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

        <div>
          <button type="submit" className={button}>
            {en.minter.next}
          </button>
          <button type="button" className={button} onClick={handleGoToHome}>
            {en.common.back}
          </button>
        </div>
      </form>
    </section>
  );
}
