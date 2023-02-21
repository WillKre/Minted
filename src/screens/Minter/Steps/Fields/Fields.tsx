import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Lottie from 'lottie-react';
import { useAccount } from 'wagmi';

import {
  form,
  button,
  section,
  buttonGrid,
  loadingWrapper,
} from '../../../../App.css';
import { en } from '../../../../lang';
import { MinterStep } from '../../Minter';
import { TAttribute } from '../../../../types';
import { showToast } from '../../../../utils/showToast';
import { TextInput } from '../../../../components/TextInput';
import { Attributes } from '../../../../components/Attributes';
import loadingAnimation from '../../../../assets/loading.json';
import { pinJsonToIpfs } from '../../../../utils/pinJsonToIpfs';
import { useIsSupportedNetwork } from '../../../../hooks/useIsSupportedNetwork';

type FieldsProps = {
  name: string;
  imageUri: string;
  isMinting: boolean;
  description: string;
  attributes: TAttribute[];
  setName: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<MinterStep>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setJsonPinataUrl: Dispatch<SetStateAction<string>>;
  setAttributes: Dispatch<SetStateAction<TAttribute[]>>;
  handleWrite: () => void;
};

export function Fields({
  name,
  setName,
  setStep,
  imageUri,
  isMinting,
  attributes,
  description,
  handleWrite,
  setAttributes,
  setDescription,
  setJsonPinataUrl,
}: FieldsProps) {
  const { address } = useAccount();
  const { isSupportedNetwork } = useIsSupportedNetwork();
  const [buttonStep, setButtonStep] = useState<'pin' | 'mint'>('pin');
  const [isPinning, setIsPinning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handlePinJsonToIpfs() {
    if (!address) {
      return showToast(en.common.connectMetaMask, '🦊');
    }

    if (!isSupportedNetwork) {
      return showToast(en.common.unsupportedNetwork, '🚨');
    }

    setIsPinning(true);
    showToast(en.minter.toast.pinningMetaData, '🪅');

    const { pinataUrl } = await pinJsonToIpfs({
      name,
      description,
      image: imageUri,
      attributes,
    });

    showToast(en.minter.toast.pinnedMetaData, '🧪');

    setJsonPinataUrl(pinataUrl);
    setButtonStep('mint');
    setIsPinning(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    buttonStep === 'pin' ? handlePinJsonToIpfs() : handleWrite();
  }

  function handleGoBack() {
    setStep('image');
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={onSubmit}>
        <div>
          <TextInput
            value={name}
            onChange={setName}
            label={en.minter.form.name.label}
            placeholder={en.minter.form.name.placeholder}
          />
          <TextInput
            value={description}
            onChange={setDescription}
            label={en.minter.form.description.label}
            placeholder={en.minter.form.description.placeholder}
          />

          <button
            type="button"
            className={button}
            onClick={() => setIsModalOpen(true)}
          >
            {en.minter.form.attributes.add}
          </button>

          <Attributes
            attributes={attributes}
            isModalOpen={isModalOpen}
            setAttributes={setAttributes}
            setIsModalOpen={setIsModalOpen}
          />
        </div>

        <div className={buttonGrid}>
          <button type="button" className={button} onClick={handleGoBack}>
            {en.common.back}
          </button>
          <button
            type="submit"
            className={button}
            disabled={isPinning || isMinting}
          >
            {isPinning || isMinting ? (
              <div className={loadingWrapper}>
                <Lottie animationData={loadingAnimation} />
              </div>
            ) : buttonStep === 'pin' ? (
              en.minter.pin
            ) : (
              en.minter.mint
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
