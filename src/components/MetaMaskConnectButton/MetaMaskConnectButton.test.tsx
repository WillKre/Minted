import * as wagmi from 'wagmi';
import { expect, it, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MetaMaskConnectButton } from './MetaMaskConnectButton';

vi.mock('wagmi');

beforeEach(() => {
  vi.resetAllMocks();
});

it('renders the trimmed address if connected and calls disconnect() if clicked', async () => {
  (wagmi.useAccount as Mock).mockImplementation(() => ({
    address: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
  }));
  (wagmi.useConnect as Mock).mockImplementation(() => ({ connect: vi.fn() }));
  (wagmi.useDisconnect as Mock).mockImplementation(() => ({
    disconnect: vi.fn(),
  }));

  render(<MetaMaskConnectButton />);

  const button = screen.getByRole('button', {
    name: 'Metamask fox 0xab[…]ec9b',
  });

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(wagmi.useDisconnect).toHaveBeenCalledOnce();
});

it('renders "Connect" if not connected and calls connect() if clicked', async () => {
  (wagmi.useAccount as Mock).mockImplementation(() => ({ address: undefined }));
  (wagmi.useConnect as Mock).mockImplementation(() => ({ connect: vi.fn() }));
  (wagmi.useDisconnect as Mock).mockImplementation(() => ({
    disconnect: vi.fn(),
  }));

  render(<MetaMaskConnectButton />);

  const button = screen.getByRole('button', { name: /Connect/ });

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(wagmi.useConnect).toHaveBeenCalledOnce();
});
