import { truncate } from 'truncate-ethereum-address';

import { button } from './MetaMaskConnectButton.css';

type MetaMaskConnectButtonProps = {
  address: string;
  onClick: () => void;
};

export function MetaMaskConnectButton({
  address,
  onClick,
}: MetaMaskConnectButtonProps) {
  return (
    <button className={button} onClick={onClick}>
      {address.length ? (
        <span>Connected: {truncate(address, { separator: 'brackets' })}</span>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
}
