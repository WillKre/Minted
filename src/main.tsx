import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './App';
import './index.css';

import { Welcome } from './screens/Welcome';
import { Deployer } from './screens/Deployer';
import { Minter } from './screens/Minter';
import { Error } from './screens/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/deploy',
        element: <Deployer />,
      },
      {
        path: '/mint',
        element: <Minter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
