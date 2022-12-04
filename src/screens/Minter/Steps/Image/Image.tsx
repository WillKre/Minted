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
  setStep: Dispatch<SetStateAction<MinterStep>>;
  setImageUri: Dispatch<SetStateAction<string>>;
  handleSelectImageSuccess: (image: File) => void;
};

export function Image({
  setStep,
  imageUri,
  setImageUri,
  contractAddress,
  handleSelectImageSuccess,
}: ImageProps) {
  const navigate = useNavigate();

  const [imgHasError, setImgHasError] = useState(false);
  const [showTextField, setShowTextField] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!imageUri || imgHasError) {
      return showToast(en.minter.toast.mintButtonValidation, '🏞');
    }

    setStep('fields');
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
            disabled
            autoFocus
            onChange={() => {}}
            value={contractAddress}
            label={en.minter.form.contract.label}
          />
          {showTextField ? (
            <TextInput
              autoFocus
              action={{
                label: '- Switch to image upload',
                onClick: switchImageType,
              }}
              value={imageUri}
              onChange={setImageUri}
              label={en.minter.form.link.label}
              placeholder={en.minter.form.link.placeholder}
            />
          ) : (
            <ImageSelect
              action={{
                label: '- Switch to URI input',
                onClick: switchImageType,
              }}
              onChange={handleSelectImageSuccess}
            />
          )}

          {!!imageUri.length && (
            <Preview
              src={imageUri}
              onImgLoad={() => setImgHasError(false)}
              onImgError={() => setImgHasError(false)}
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
