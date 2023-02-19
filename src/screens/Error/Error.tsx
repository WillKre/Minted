import { useRouteError } from 'react-router-dom';

import { en } from '../../lang';
import { Header } from '../../components/Header';
import { GitHubButton } from '../../components/GitHubButton';
import { container } from '../../App.css';

type RouteError = {
  statusText?: string;
  message?: string;
  status?: number;
};

export function Error() {
  const error = useRouteError() as RouteError;

  return (
    <>
      <GitHubButton />

      <div className={container}>
        <Header />

        {error.status === 404 ? (
          <p>{en.errorPage.page404}</p>
        ) : (
          <p>{error.statusText || error.message}</p>
        )}

        {error.status && <b>Error code: {error.status}</b>}
      </div>
    </>
  );
}
