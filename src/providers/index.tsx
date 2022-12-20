import { ReactNode } from 'react';

import { Sentry } from './sentry';
import { ErrorBoundary } from './error-boundary';
import { Wagmi } from './wagmi';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Sentry>
      <ErrorBoundary>
        <Wagmi>{children}</Wagmi>
      </ErrorBoundary>
    </Sentry>
  );
}
