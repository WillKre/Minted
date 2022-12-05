import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNetwork } from 'wagmi';

import { en } from '../../../../lang';
import { link, img } from './Success.css';
import { MinterStep } from '../../Minter';
import { section, buttons, button } from '../../../../App.css';
import { getEtherscanPrefix } from '../../../../utils/getEtherscanPrefix';
import { ZoomableImage } from '../../../../components/ZoomableImage';

type SuccessProps = {
  data?: {
    hash: string;
  };
  imageUri: string;
  resetForm: () => void;
  setStep: Dispatch<SetStateAction<MinterStep>>;
};

export function Success({ data, imageUri, setStep, resetForm }: SuccessProps) {
  const { chain } = useNetwork();
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
