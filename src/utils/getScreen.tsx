import { Dispatch, SetStateAction } from 'react';

import { Step } from '../types';
import { Deployer } from '../screens/Deployer';
import { Minter } from '../screens/Minter';
import { Welcome } from '../screens/Welcome';

export function getScreen(step: Step, setStep: Dispatch<SetStateAction<Step>>) {
  switch (step) {
    case 'welcome':
      return <Welcome setStep={setStep} />;
    case 'deploy':
      return <Deployer />;
    case 'mint':
      return <Minter />;
  }
}
