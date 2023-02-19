import { Component, ReactNode } from 'react';

import { Error } from '../screens/Error';
import { Wagmi } from './wagmi';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wagmi>
          <Error />
        </Wagmi>
      );
    }

    return this.props.children;
  }
}
