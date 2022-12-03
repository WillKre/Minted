import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { link } from './Success.css';
import { en } from '../../../../lang';
import { MinterStep } from '../../Minter';
import { img, section, buttons, button } from '../../../../App.css';

type SuccessProps = {
  data?: {
    hash: string;
  };
  imageUri: string;
  resetForm: () => void;
  setStep: Dispatch<SetStateAction<MinterStep>>;
};

export function Success({ data, imageUri, setStep, resetForm }: SuccessProps) {
  const navigate = useNavigate();

  function handleResetScreen() {
    setStep('image');
    resetForm();
  }

  function handleGoToHome() {
    navigate('/');
  }

  return (
    <section className={section}>
      <div>
        <h3>{en.minter.success.title}</h3>
        <p>
          {en.minter.success.kicker}{' '}
          <a
            className={link}
            target="_blank"
            rel="noreferrer"
            href={`https://goerli.etherscan.io/tx/${data?.hash}`}
          >
            Etherscan
          </a>
        </p>
      </div>

      <img src={imageUri} className={img} />

      <div className={buttons}>
        <button type="button" className={button} onClick={handleResetScreen}>
          {en.minter.success.buttonText}
        </button>
        <button type="button" className={button} onClick={handleGoToHome}>
          {en.common.home}
        </button>
      </div>
    </section>
  );
}
