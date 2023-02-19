import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ImageSelect } from './ImageSelect';

it('renders an action button which calls an onClick', async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  const onChange = vi.fn();
  render(
    <ImageSelect
      action={{ label: 'Switch to URI input', onClick }}
      onChange={onChange}
    />
  );

  const button = screen.getByRole('button', { name: /switch to/i });

  expect(button).toBeInTheDocument();

  await user.click(button);

  expect(onClick).toHaveBeenCalledOnce();
});
