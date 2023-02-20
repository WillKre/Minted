import { ConnectButton } from '@rainbow-me/rainbowkit';

import { container } from './RainbowButton.css';

export function RainbowButton() {
  return (
    <div className={container}>
      <ConnectButton />
    </div>
  );
}
