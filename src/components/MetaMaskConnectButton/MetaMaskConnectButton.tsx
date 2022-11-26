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
    <button id="walletButton" className={button} onClick={onClick}>
      {address.length ? `Connected: ${address}` : <span>Connect Wallet</span>}
    </button>
  );
}
