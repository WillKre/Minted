import { truncate } from 'truncate-ethereum-address';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { button, text } from './MetaMaskConnectButton.css';

export function MetaMaskConnectButton() {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  function getText() {
    return address
      ? `${truncate(address, { separator: 'brackets' })}`
      : 'Connect';
  }

  return (
    <button
      className={button}
      onClick={address ? () => disconnect() : () => connect()}
    >
      🦊
      <span className={text}>{getText()}</span>
    </button>
  );
}
