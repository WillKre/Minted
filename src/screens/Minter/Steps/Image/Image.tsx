import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import { en } from '../../../../lang';
import { Preview } from '../../../../components/Preview';
import { form, section, button } from '../../../../App.css';
import { ImageSelect } from '../../../../components/ImageSelect';
import { TextInput } from '../../../../components/TextInput/TextInput';

type ImageProps = {
  imageUri: string;
  setImageUri: Dispatch<SetStateAction<string>>;
  handleSelectImageSuccess: (image: File) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function Image({
  onSubmit,
  imageUri,
  setImageUri,
  handleSelectImageSuccess,
}: ImageProps) {
  const [imgHasError, setImgHasError] = useState(false);
  const [showTextField, setShowTextField] = useState(false);

  function switchImageType() {
    setImageUri('');
    setShowTextField(!showTextField);
  }

  function handleSetImageHasError(hasError: boolean) {
    setImgHasError(hasError);
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={onSubmit}>
        {showTextField ? (
          <div>
            <TextInput
              autoFocus
              action={{
                label: ' - Switch to image upload',
                onClick: switchImageType,
              }}
              value={imageUri}
              onChange={setImageUri}
              label={en.minter.form.link.label}
              placeholder={en.minter.form.link.placeholder}
            />
            {!!imageUri.length && (
              <Preview src={imageUri} onImgError={handleSetImageHasError} />
            )}
          </div>
        ) : (
          <ImageSelect
            action={{
              label: '- Switch to URI input',
              onClick: switchImageType,
            }}
            onChange={handleSelectImageSuccess}
          />
        )}

        <button
          type="submit"
          className={button}
          disabled={!imageUri || imgHasError}
        >
          {en.minter.next}
        </button>
      </form>
    </section>
  );
}
