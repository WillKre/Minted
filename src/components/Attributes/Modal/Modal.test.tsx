import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Modal } from './Modal';

it('populates attribute data and calls correcly onClick', async () => {
  const user = userEvent.setup();
  const setIsModalOpen = vi.fn();
  const setAttributes = vi.fn();
  render(
    <Modal
      isModalOpen={true}
      setIsModalOpen={setIsModalOpen}
      attributes={[]}
      setAttributes={setAttributes}
    />
  );

  const modal = screen.getByRole('dialog');
  const button = screen.getByRole('button', { name: 'Add Attribute' });

  expect(modal).toBeInTheDocument();

  const traitInput = screen.getByRole('textbox', { name: 'Trait Type' });
  const valueInput = screen.getByRole('textbox', { name: 'Value' });

  expect(traitInput).toBeInTheDocument();
  expect(valueInput).toBeInTheDocument();

  await user.type(traitInput, 'Eyes');
  await user.type(valueInput, 'Blue');
  await user.click(button);

  expect(setAttributes).toBeCalledWith([{ trait_type: 'Eyes', value: 'Blue' }]);
});

it('allows a user to action the close modal button', async () => {
  const user = userEvent.setup();
  const setIsModalOpen = vi.fn();
  const setAttributes = vi.fn();
  render(
    <Modal
      isModalOpen={true}
      setIsModalOpen={setIsModalOpen}
      attributes={[]}
      setAttributes={setAttributes}
    />
  );

  const button = screen.getByRole('button', { name: 'Close' });

  await user.click(button);

  expect(setIsModalOpen).toBeCalledWith(false);
});
