import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import { en } from '../../../../lang';
import { ImageSelect } from '../../../../components/ImageSelect';
import { form, section, submitButton } from '../../../../App.css';
import { TextInput } from '../../../../components/TextInput/TextInput';

type ImageProps = {
  imageUri: string;
  setImageUri: Dispatch<SetStateAction<string>>;
  handleSelectImageSuccess: (image: File) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function Image({
  onSubmit,
  imageUri,
  setImageUri,
  handleSelectImageSuccess,
}: ImageProps) {
  const [showTextField, setShowTextField] = useState(false);

  function switchImageType() {
    setImageUri('');
    setShowTextField(!showTextField);
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={onSubmit}>
        {showTextField ? (
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
        ) : (
          <ImageSelect
            action={{
              label: '- Switch to URI input',
              onClick: switchImageType,
            }}
            onChange={handleSelectImageSuccess}
          />
        )}

        <button type="submit" className={submitButton} disabled={!imageUri}>
          {en.minter.next}
        </button>
      </form>
    </section>
  );
}
