import { ReactNode } from 'react';
import { container } from './View.css';

type ViewProps = {
  children: ReactNode;
};

export function View({ children }: ViewProps) {
  return <div className={container}>{children}</div>;
}
