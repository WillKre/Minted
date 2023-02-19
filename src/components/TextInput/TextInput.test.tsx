import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { TextInput } from './TextInput';

it('renders a text input and calls the onChange upon typing', async () => {
  const onChange = vi.fn();
  render(<TextInput label="Name" value="" onChange={onChange} />);
  const user = userEvent.setup();
  const input = screen.getByRole('textbox', { name: 'Name' });

  expect(input).toBeInTheDocument();

  await user.type(input, 'Hello');

  expect(onChange).toHaveBeenCalledTimes(5);
});

it('renders an action button (if provided) which calls an onClick', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(
    <TextInput
      label="Preview"
      value=""
      onChange={vi.fn()}
      action={{ label: 'Switch to URI input', onClick }}
    />
  );

  const actionButton = screen.getByRole('button', {
    name: 'Switch to URI input',
  });

  await user.click(actionButton);

  expect(onClick).toHaveBeenCalledOnce();
});
