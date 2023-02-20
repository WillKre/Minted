import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNetwork } from 'wagmi';

import { en } from '../../../../lang';
import { link, img } from './Success.css';
import { MinterStep } from '../../Minter';
import { section, buttons, button } from '../../../../App.css';
import { ZoomableImage } from '../../../../components/ZoomableImage';
import { getEtherscanPrefix } from '../../../../utils/getEtherscanPrefix';

type SuccessProps = {
  data?: {
    hash: string;
  };
  imageUri: string;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setImageUri: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<MinterStep>>;
};

export function Success({
  data,
  setStep,
  setName,
  imageUri,
  setImageUri,
  setDescription,
}: SuccessProps) {
  const { chain } = useNetwork();
  const navigate = useNavigate();

  function handleResetScreen() {
    setStep('image');
    setName('');
    setDescription('');
    setImageUri('');
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
            href={`https://${getEtherscanPrefix(
              chain?.network
            )}etherscan.io/tx/${data?.hash}`}
          >
            Etherscan
          </a>
        </p>
      </div>

      <ZoomableImage
        src={imageUri}
        className={img}
        alt={en.minter.success.imgAlt}
      />

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
