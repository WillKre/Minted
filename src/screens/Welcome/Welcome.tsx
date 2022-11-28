import { Dispatch, SetStateAction } from 'react';

import { en } from '../../lang';
import { Button } from './Button';
import { Step } from '../../types';
import { buttons } from './Welcome.css';

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
      <h1>{en.welcome.title}</h1>
      <p>{en.welcome.subtitle}</p>

      <div className={buttons}>
        <Button
          title={en.welcome.deployButtonTitle}
          onClick={handleGoToDeploy}
        />
        <Button title={en.welcome.mintButtonTitle} onClick={handleGoToMint} />
      </div>
    </section>
  );
}
