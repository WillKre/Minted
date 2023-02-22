import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Attribute } from './Attribute';

it('should render the relevant elements (text and callable button)', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(<Attribute trait_type="Eyes" value="Blue" handleOnClick={onClick} />);
  const button = screen.getByRole('button');
  const trait = screen.getByText('Eyes');
  const value = screen.getByText('Blue');

  expect(button).toBeInTheDocument();
  expect(trait).toBeInTheDocument();
  expect(value).toBeInTheDocument();

  await user.click(button);

  expect(onClick).toHaveBeenCalledOnce();
});
