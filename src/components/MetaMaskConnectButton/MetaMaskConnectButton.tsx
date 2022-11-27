import { truncate } from 'truncate-ethereum-address';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { button } from './MetaMaskConnectButton.css';

export function MetaMaskConnectButton() {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <button
      className={button}
      onClick={address ? () => disconnect() : () => connect()}
    >
      {address ? (
        <span>Connected: {truncate(address, { separator: 'brackets' })}</span>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
}
