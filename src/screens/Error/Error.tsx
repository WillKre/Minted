import { useNavigate, useRouteError } from 'react-router-dom';

import { en } from '../../lang';
import { container, text } from './Error.css';
import { Header } from '../../components/Header';
import { button, container as appContainer } from '../../App.css';
import { GitHubButton } from '../../components/GitHubButton';

type RouteError = {
  statusText?: string;
  message?: string;
  status?: number;
};

export function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  function handleOnClick() {
    navigate('/');
    window.location.reload();
  }

  return (
    <div className={container}>
      <GitHubButton />

      <div className={appContainer}>
        <Header />

        <p className={text}>
          {error?.status === 404
            ? en.errorPage.page404
            : error?.statusText || error?.message || en.errorPage.pageError}
        </p>

        {error?.status && <b>Error code: {error?.status}</b>}

        <button type="button" className={button} onClick={handleOnClick}>
          {en.errorPage.buttonText}
        </button>
      </div>
    </div>
  );
}
