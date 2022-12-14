import { useRouteError } from 'react-router-dom';

import { en } from '../../lang';
import { View } from '../../components/View';
import { Header } from '../../components/Header';
import { GitHubButton } from '../../components/GitHubButton';

type RouteError = {
  statusText?: string;
  message?: string;
};

export function Error() {
  const error = useRouteError() as RouteError;

  return (
    <>
      <GitHubButton />

      <Header />

      <View>
        <h1>{en.errorPage.title}</h1>
        <p>
          <i>{error.statusText || error.message}</i> - {en.errorPage.subtitle}
        </p>
      </View>
    </>
  );
}
