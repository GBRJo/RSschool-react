import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app/App.tsx';
import './index.scss';
import { ErrorBoundary } from '@components/error/error.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersonDetails } from './pages/personDetails/PersonDetails.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallbackUI={<div>Something went wrong.</div>}>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: 'details/:personId',
        element: <PersonDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
