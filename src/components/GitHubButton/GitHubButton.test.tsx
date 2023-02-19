import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { GitHubButton } from './GitHubButton';

it('renders the GitHub logo w/ alt', () => {
  render(<GitHubButton />);

  const image = screen.getByRole('img', { name: 'GitHub octocat' });

  expect(image).toBeInTheDocument();
});

it('navigates to the repository on click', async () => {
  render(<GitHubButton />);
  global.open = vi.fn();
  const user = userEvent.setup();
  const button = screen.getByRole('button');

  await user.click(button);

  expect(global.open).toHaveBeenCalledWith(
    'https://github.com/WillKre/Minted',
    '_blank'
  );
});
