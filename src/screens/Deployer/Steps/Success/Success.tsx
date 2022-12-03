import { Dispatch, SetStateAction } from 'react';

import { link } from './Success.css';
import { en } from '../../../../lang';
import { DeployerStep } from '../../Deployer';
import { section, button } from '../../../../App.css';

type SuccessProps = {
  deployedContractTxHash: string;
  setStep: Dispatch<SetStateAction<DeployerStep>>;
};

export function Success({ setStep, deployedContractTxHash }: SuccessProps) {
  function handleResetScreen() {
    setStep('fields');
  }

  return (
    <section className={section}>
      <div>
        <h3>{en.deployer.success.title}</h3>
        <p>
          {en.deployer.success.kicker}{' '}
          <a
            className={link}
            target="_blank"
            rel="noreferrer"
            href={`https://goerli.etherscan.io/address/${deployedContractTxHash}`}
          >
            Etherscan
          </a>
        </p>
      </div>

      <button type="button" className={button} onClick={handleResetScreen}>
        Lorem Ipsum
      </button>
    </section>
  );
}
