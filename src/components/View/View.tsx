import { ReactNode } from 'react';

import { Banner } from '../Banner';
import { container } from '../../App.css';
import { useIsSupportedNetwork } from '../../hooks/useIsSupportedNetwork';

type ViewProps = {
  children: ReactNode;
};

export function View({ children }: ViewProps) {
  const { isSupportedNetwork } = useIsSupportedNetwork();

  return (
    <div className={container}>
      {children}
      {!isSupportedNetwork && <Banner />}
    </div>
  );
}
