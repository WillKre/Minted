import { Dispatch, FormEvent, SetStateAction } from 'react';

import { en } from '../../../../lang';
import { MinterStep } from '../../Minter';
import { form, section, button } from '../../../../App.css';
import { TextInput } from '../../../../components/TextInput/TextInput';

type FieldsProps = {
  name: string;
  isMinting: boolean;
  description: string;
  setName: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<MinterStep>>;
  setDescription: Dispatch<SetStateAction<string>>;
  handleMint: () => Promise<void>;
};

export function Fields({
  name,
  setName,
  setStep,
  isMinting,
  handleMint,
  description,
  setDescription,
}: FieldsProps) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleMint();
  }

  function handleGoBack() {
    setStep('image');
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={onSubmit}>
        <div>
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
        </div>

        <div>
          <button type="submit" className={button} disabled={isMinting}>
            {isMinting ? en.minter.minting : en.minter.mint}
          </button>
          <button type="button" className={button} onClick={handleGoBack}>
            {en.common.back}
          </button>
        </div>
      </form>
    </section>
  );
}
