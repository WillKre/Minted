import { useNavigate } from 'react-router-dom';
import { truncate } from 'truncate-ethereum-address';

import { link } from './Success.css';
import { en } from '../../../../lang';
import { section, button, buttons } from '../../../../App.css';

type SuccessProps = {
  deployedContractAddress: string;
};

export function Success({ deployedContractAddress }: SuccessProps) {
  const navigate = useNavigate();

  function handleGoToMint() {
    navigate('/mint', { state: { contractAddress: deployedContractAddress } });
  }

  function handleGoToHome() {
    navigate('/');
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
            href={`https://goerli.etherscan.io/address/${deployedContractAddress}`}
          >
            Etherscan
          </a>
        </p>
      </div>

      <div className={buttons}>
        <p>
          <b>{en.common.contract}:</b>
        </p>
        <p>
          {truncate(deployedContractAddress, {
            nPrefix: 12,
            nSuffix: 14,
            separator: 'brackets',
          })}
        </p>
      </div>

      <div className={buttons}>
        <button type="button" className={button} onClick={handleGoToMint}>
          {en.deployer.success.mintNft}
        </button>
        <button type="button" className={button} onClick={handleGoToHome}>
          {en.common.home}
        </button>
      </div>
    </section>
  );
}
