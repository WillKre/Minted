import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { en } from '../../../../lang';
import { button, form, section } from '../../../../App.css';
import { TextInput } from '../../../../components/TextInput/TextInput';

type FieldsProps = {
  name: string;
  symbol: string;
  isLoading: boolean;
  setName: Dispatch<SetStateAction<string>>;
  setSymbol: Dispatch<SetStateAction<string>>;
  handleDeploy: () => Promise<void>;
};

export function Fields({
  name,
  symbol,
  setName,
  setSymbol,
  isLoading,
  handleDeploy,
}: FieldsProps) {
  const navigate = useNavigate();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleDeploy();
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
            value={name}
            onChange={setName}
            label={en.deployer.form.name.label}
            placeholder={en.deployer.form.name.placeholder}
          />

          <TextInput
            disabled
            value={symbol}
            onChange={setSymbol}
            label={en.deployer.form.symbol.label}
            placeholder={en.deployer.form.symbol.placeholder}
          />
          <p>{en.deployer.form.info}</p>
        </div>

        <div>
          <button type="submit" className={button} disabled={isLoading}>
            {en.deployer.form.submitButtonTitle}
          </button>
          <button type="button" className={button} onClick={handleGoToHome}>
            {en.common.back}
          </button>
        </div>
      </form>
    </section>
  );
}
