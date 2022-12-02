import { Dispatch, FormEvent, SetStateAction } from 'react';

import { en } from '../../../../lang';
import { form, section, button } from '../../../../App.css';
import { TextInput } from '../../../../components/TextInput/TextInput';

type FieldsProps = {
  name: string;
  isMinting: boolean;
  description: string;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function Fields({
  name,
  setName,
  onSubmit,
  isMinting,
  description,
  setDescription,
}: FieldsProps) {
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

        <button type="submit" className={button} disabled={isMinting}>
          {isMinting ? en.minter.minting : en.minter.mint}
        </button>
      </form>
    </section>
  );
}
