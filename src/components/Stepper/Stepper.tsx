import { Dispatch, SetStateAction, ReactNode } from 'react';

import { Step } from '../../types';
import { button, buttons, container, screen } from './Stepper.css';

type StepperProps = {
  children: ReactNode;
  step: Step;
  setStep: Dispatch<SetStateAction<Step>>;
};

export function Stepper({ children, step, setStep }: StepperProps) {
  function handleBackStep() {
    setStep('welcome');
  }

  return (
    <div className={container}>
      <div className={screen}>{children}</div>

      <div className={buttons}>
        {step !== 'welcome' && (
          <button type="button" className={button} onClick={handleBackStep}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}
