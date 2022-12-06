import { useState } from 'react';
import { ethers } from 'ethers';
import { useSigner, useAccount } from 'wagmi';

import { en } from '../../lang';
import { Success } from './Steps/Success';
import { Fields } from './Steps/Fields/Fields';
import { showToast } from '../../utils/showToast';
import { capitalize } from '../../utils/capitalize';
import MintedArtifact from '../../../artifacts/contracts/Minted.sol/Minted.json';

type MetaMaskError = {
  code: number;
  reason: string;
};

export type DeployerStep = 'fields' | 'success';

export function Deployer() {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const [name, setName] = useState('Minted');
  const [symbol, setSymbol] = useState('MINT');
  const [step, setStep] = useState<DeployerStep>('fields');
  const [deployedContractAddress, setDeployedContractAddress] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  async function handleDeploy() {
    if (!address || !signer) {
      return showToast(en.common.connectMetaMask, '🦊');
    }

    setIsDeploying(true);

    try {
      const factory = new ethers.ContractFactory(
        MintedArtifact.abi,
        MintedArtifact.bytecode,
        signer
      );
      const contract = await factory.deploy();
      const receipt = await contract.deployTransaction.wait();

      setDeployedContractAddress(receipt.contractAddress);
      setStep('success');
    } catch (error) {
      showToast(
        capitalize((error as MetaMaskError)?.reason) ||
          en.deployer.toast.errorDeploying,
        '🚨'
      );
    } finally {
      setIsDeploying(false);
    }
  }

  if (step === 'fields') {
    return (
      <Fields
        name={name}
        setName={setName}
        symbol={symbol}
        setSymbol={setSymbol}
        isDeploying={isDeploying}
        handleDeploy={handleDeploy}
      />
    );
  }

  if (step === 'success') {
    return <Success deployedContractAddress={deployedContractAddress} />;
  }

  return null;
}
