import { FormEvent, useState } from 'react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import { useSigner, useAccount } from 'wagmi';

import { en } from '../../lang';
import MintzArtifact from '../../../artifacts/contracts/Mintz.sol/Mintz.json';
import { TextInput } from '../../components/TextInput/TextInput';
import { section, form, submitButton } from '../../App.css';

export function Deployer() {
  const { address } = useAccount();
  const { data: signer, isLoading } = useSigner();

  const [name, setName] = useState('Mintz');
  const [symbol, setSymbol] = useState('MINT');

  async function handleDeploy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address) {
      toast(en.common.connectMetaMask, {
        icon: '🦊',
        position: 'bottom-right',
      });
      return;
    }

    if (!signer) {
      return null;
    }

    const factory = new ethers.ContractFactory(
      MintzArtifact.abi,
      MintzArtifact.bytecode,
      signer
    );
    const contract = await factory.deploy();
    await contract.deployTransaction.wait();
  }

  return (
    <section className={section}>
      <form className={form} onSubmit={handleDeploy}>
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

        <button type="submit" className={submitButton} disabled={isLoading}>
          {en.deployer.form.submitButtonTitle}
        </button>
      </form>
    </section>
  );
}
