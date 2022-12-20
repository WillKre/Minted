import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './App';

import { Home } from './screens/Home';
import { Deployer } from './screens/Deployer';
import { Minter } from './screens/Minter';
import { Error } from './screens/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/deploy', element: <Deployer /> },
      { path: '/mint', element: <Minter /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
