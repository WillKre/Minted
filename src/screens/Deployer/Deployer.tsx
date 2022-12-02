import { FormEvent, useState } from 'react';
import { ethers } from 'ethers';
import { useSigner, useAccount } from 'wagmi';

import { en } from '../../lang';
import { showToast } from '../../utils/showToast';
import { section, form, button } from '../../App.css';
import { TextInput } from '../../components/TextInput/TextInput';
import MintzArtifact from '../../../artifacts/contracts/Mintz.sol/Mintz.json';

type MetaMaskError = {
  code: number;
  reason: string;
};

export function Deployer() {
  const { address } = useAccount();
  const { data: signer, isLoading } = useSigner();

  const [name, setName] = useState('Mintz');
  const [symbol, setSymbol] = useState('MINT');

  async function handleDeploy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address || !signer) {
      showToast(en.common.connectMetaMask, '🦊');
      return;
    }

    try {
      const factory = new ethers.ContractFactory(
        MintzArtifact.abi,
        MintzArtifact.bytecode,
        signer
      );
      const contract = await factory.deploy();
      await contract.deployTransaction.wait();
    } catch (error) {
      showToast(
        (error as MetaMaskError)?.reason || en.deployer.toast.errorDeploying,
        '🚨'
      );
    }
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={handleDeploy}>
        <div>
          <TextInput
            disabled
            value={name}
            onChange={setName}
            label={en.deployer.form.name.label}
            placeholder={en.deployer.form.name.placeholder}
          />

          <TextInput
            disabled
            value={symbol}
            onChange={setSymbol}
            label={en.deployer.form.symbol.label}
            placeholder={en.deployer.form.symbol.placeholder}
          />
        </div>

        <button type="submit" className={button} disabled={isLoading}>
          {en.deployer.form.submitButtonTitle}
        </button>
      </form>
    </section>
  );
}
