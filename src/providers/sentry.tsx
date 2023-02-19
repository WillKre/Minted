import { ReactNode } from 'react';
import * as SentryReact from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

type SentryProps = {
  children: ReactNode;
};

export function Sentry({ children }: SentryProps) {
  SentryReact.init({
    dsn: import.meta.env.SENTRY_DSN,
    environment: import.meta.env.MODE,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  return <>{children}</>;
}
