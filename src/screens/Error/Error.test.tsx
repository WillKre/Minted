import { expect, it, vi } from 'vitest';
import * as router from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Error } from './Error';

vi.mock('react-router-dom');

it('renders the predefined message given a 404 status code', () => {
  vi.spyOn(router, 'useRouteError').mockImplementationOnce(() => ({
    status: 404,
    message: 'Page not found',
  }));
  render(<Error />);

  const title = screen.getByText(
    "We can't seem to find the page you're looking for!"
  );
  const message = screen.getByText('Error code: 404');

  expect(title).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

it('renders the statusText if provided with a 500 status code', () => {
  vi.spyOn(router, 'useRouteError').mockImplementationOnce(() => ({
    status: 500,
    statusText: 'Internal server error',
  }));
  render(<Error />);

  const title = screen.getByText('Internal server error');
  const message = screen.getByText('Error code: 500');

  expect(title).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

it('renders the message if provided with a 500 status code', () => {
  vi.spyOn(router, 'useRouteError').mockImplementationOnce(() => ({
    status: 500,
    message: 'Internal server error',
  }));
  render(<Error />);

  const title = screen.getByText('Internal server error');
  const message = screen.getByText('Error code: 500');

  expect(title).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

it('renders the predefined error message and no code if neither message/statusText/status is available', async () => {
  vi.spyOn(router, 'useRouteError');
  render(<Error />);

  const title = screen.getByText('Oops! Something went wrong');
  const message = await screen.queryByText('Error code: 500');

  expect(title).toBeInTheDocument();
  expect(message).not.toBeInTheDocument();
});
