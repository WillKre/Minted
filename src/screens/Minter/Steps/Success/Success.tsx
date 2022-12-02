import { Dispatch, SetStateAction } from 'react';

import { link } from './Success.css';
import { en } from '../../../../lang';
import { img, section, button } from '../../../../App.css';

type SuccessProps = {
  data?: {
    hash: string;
  };
  imageUri: string;
  resetForm: () => void;
  setStep: Dispatch<SetStateAction<string>>;
};

export function Success({ data, imageUri, setStep, resetForm }: SuccessProps) {
  function handleResetScreen() {
    setStep('image');
    resetForm();
  }

  return (
    <section className={section}>
      <div>
        <h3>{en.minter.success.title}</h3>
        <p>
          {en.minter.success.kicker}{' '}
          <a
            className={link}
            href={`https://goerli.etherscan.io/tx/${data?.hash}`}
          >
            Etherscan
          </a>
        </p>
      </div>

      <img src={imageUri} className={img} />

      <button type="button" className={button} onClick={handleResetScreen}>
        Mint Another
      </button>
    </section>
  );
}
