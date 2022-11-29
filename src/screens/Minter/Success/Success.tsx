import { Dispatch, SetStateAction } from 'react';

import { en } from '../../../lang';
import { link } from './Success.css';
import { container, mintButton } from '../Minter.css';

type SuccessProps = {
  setShowSuccessScreen: Dispatch<SetStateAction<boolean>>;
};

export function Success({ setShowSuccessScreen }: SuccessProps) {
  function handleResetScreen() {
    setShowSuccessScreen(false);
  }

  return (
    <section className={container}>
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

      <button type="button" className={mintButton} onClick={handleResetScreen}>
        Mint Another
      </button>
    </section>
  );
}
