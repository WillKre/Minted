import { Dispatch, SetStateAction } from 'react';

import { en } from '../../../lang';
import { link } from './Success.css';
import { section, submitButton } from '../../../App.css';

type SuccessProps = {
  data?: {
    hash: string;
  };
  setShowSuccessScreen: Dispatch<SetStateAction<boolean>>;
};

export function Success({ data, setShowSuccessScreen }: SuccessProps) {
  function handleResetScreen() {
    setShowSuccessScreen(false);
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

      <button
        type="button"
        className={submitButton}
        onClick={handleResetScreen}
      >
        Mint Another
      </button>
    </section>
  );
}
