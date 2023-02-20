import { ReactNode } from 'react';

import { Sentry } from './sentry';
import { ErrorBoundary } from './error-boundary';
import { WagmiRainbow } from './wagmi-rainbow';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Sentry>
      <ErrorBoundary>
        <WagmiRainbow>{children}</WagmiRainbow>
      </ErrorBoundary>
    </Sentry>
  );
}
