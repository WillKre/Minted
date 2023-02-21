import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import blocks from '../blocks.png';
import { en } from '../../../../lang';
import { TextInput } from '../../../../components/TextInput';
import loadingAnimation from '../../../../assets/loading.json';
import {
  form,
  text,
  button,
  section,
  smallImg,
  buttonGrid,
  loadingWrapper,
} from '../../../../App.css';

type FieldsProps = {
  name: string;
  symbol: string;
  isDeploying: boolean;
  setName: Dispatch<SetStateAction<string>>;
  setSymbol: Dispatch<SetStateAction<string>>;
  handleDeploy: () => Promise<void>;
};

export function Fields({
  name,
  symbol,
  setName,
  setSymbol,
  isDeploying,
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
          <p className={text}>{en.deployer.form.info}</p>
        </div>

        <img
          src={blocks}
          className={smallImg}
          alt={en.deployer.success.imgAlt}
        />

        <div className={buttonGrid}>
          <button type="button" className={button} onClick={handleGoToHome}>
            {en.common.back}
          </button>
          <button type="submit" className={button} disabled={isDeploying}>
            {isDeploying ? (
              <div className={loadingWrapper}>
                <Lottie animationData={loadingAnimation} />
              </div>
            ) : (
              en.deployer.form.submitButtonTitle
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
