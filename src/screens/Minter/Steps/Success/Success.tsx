import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNetwork } from 'wagmi';

import { en } from '../../../../lang';
import { link, img } from './Success.css';
import { MinterStep } from '../../Minter';
import { TAttribute } from '../../../../types';
import { section, button, buttonGrid } from '../../../../App.css';
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
  setAttributes: Dispatch<SetStateAction<TAttribute[]>>;
  setStep: Dispatch<SetStateAction<MinterStep>>;
};

export function Success({
  data,
  setStep,
  setName,
  imageUri,
  setImageUri,
  setDescription,
  setAttributes,
}: SuccessProps) {
  const { chain } = useNetwork();
  const navigate = useNavigate();

  function resetForm() {
    setName('');
    setDescription('');
    setImageUri('');
    setAttributes([]);
  }

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
            href={`https://${getEtherscanPrefix(
              chain?.network
            )}etherscan.io/tx/${data?.hash}`}
          >
            {en.common.etherscan}
          </a>
        </p>
      </div>

      <ZoomableImage
        src={imageUri}
        className={img}
        alt={en.minter.success.imgAlt}
      />

      <div className={buttonGrid}>
        <button type="button" className={button} onClick={handleGoToHome}>
          {en.common.home}
        </button>
        <button type="button" className={button} onClick={handleResetScreen}>
          {en.minter.success.buttonText}
        </button>
      </div>
    </section>
  );
}
