import { Dispatch, SetStateAction } from 'react';

import { Step } from '../../types';
import { button, buttons, buttonContent } from './Welcome.css';

type WelcomeProps = {
  setStep: Dispatch<SetStateAction<Step>>;
};

export function Welcome({ setStep }: WelcomeProps) {
  function handleGoToDeploy() {
    setStep('deploy');
  }

  function handleGoToMint() {
    setStep('mint');
  }

  return (
    <section>
      <h1>Welcome!</h1>
      <p>To get started, select one of the following options:</p>

      <div className={buttons}>
        <button className={button} type="button" onClick={handleGoToDeploy}>
          <div className={buttonContent}>
            <span>Deploy your NFT Collection</span>
          </div>
        </button>
        <button className={button} type="button" onClick={handleGoToMint}>
          <div className={buttonContent}>
            <span>Mint your NFT</span>
          </div>
        </button>
      </div>
    </section>
  );
}
