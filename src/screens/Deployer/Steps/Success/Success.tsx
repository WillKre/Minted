import { useNavigate } from 'react-router-dom';
import { truncate } from 'truncate-ethereum-address';
import { useNetwork } from 'wagmi';

import blocks from '../blocks.png';
import { en } from '../../../../lang';
import { title, link } from './Success.css';
import { section, button, buttonGrid, smallImg } from '../../../../App.css';
import { getEtherscanPrefix } from '../../../../utils/getEtherscanPrefix';

type SuccessProps = {
  deployedContractAddress: string;
};

export function Success({ deployedContractAddress }: SuccessProps) {
  const { chain } = useNetwork();
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
        <h3 className={title}>{en.deployer.success.title}</h3>

        <p>
          <b>{en.common.transaction}:</b>
        </p>
        <p className={link}>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://${getEtherscanPrefix(
              chain?.network
            )}etherscan.io/address/${deployedContractAddress}`}
          >
            Etherscan
          </a>
        </p>
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

      <img src={blocks} className={smallImg} alt={en.deployer.success.imgAlt} />

      <div className={buttonGrid}>
        <button type="button" className={button} onClick={handleGoToHome}>
          {en.common.home}
        </button>
        <button type="button" className={button} onClick={handleGoToMint}>
          {en.deployer.success.mintNft}
        </button>
      </div>
    </section>
  );
}
