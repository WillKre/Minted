import { truncate } from 'truncate-ethereum-address';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import fox from './fox.svg';
import { en } from '../../lang';
import { button, image, text } from './MetaMaskConnectButton.css';

export function MetaMaskConnectButton() {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  function getText() {
    return address
      ? `${truncate(address, { nPrefix: 2, separator: 'brackets' })}`
      : en.common.connect;
  }

  return (
    <button
      className={button}
      onClick={address ? () => disconnect() : () => connect()}
    >
      <img src={fox} className={image} alt={en.common.metaMaskLogoAlt} />
      <span className={text}>{getText()}</span>
    </button>
  );
}
