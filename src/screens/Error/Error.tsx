import { useNavigate, useRouteError } from 'react-router-dom';

import { en } from '../../lang';
import { container } from './Error.css';
import { Header } from '../../components/Header';
import { button, container as appContainer } from '../../App.css';
import { GitHubButton } from '../../components/GitHubButton';
import { Button } from '../Home/Button';

type RouteError = {
  statusText?: string;
  message?: string;
  status?: number;
};

export function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <div className={container}>
      <GitHubButton />

      <div className={appContainer}>
        <Header />

        {error?.status === 404 ? (
          <p>{en.errorPage.page404}</p>
        ) : (
          <p>{error?.statusText || error?.message}</p>
        )}

        {error?.status && <b>Error code: {error?.status}</b>}

        <button type="button" className={button} onClick={() => navigate('/')}>
          {en.errorPage.buttonText}
        </button>
      </div>
    </div>
  );
}
