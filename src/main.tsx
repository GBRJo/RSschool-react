import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app/App.tsx';
import './index.scss';
import { ErrorBoundary } from '@components/error/error.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersonDetails } from './pages/personDetails/PersonDetails.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallbackUI={<div>Something went wrong.</div>}>
        <App />
      </ErrorBoundary>
    ),
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

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ErrorBoundary fallbackUI={<div>Something went wrong.</div>}>
//       <App />
//     </ErrorBoundary>
//   </React.StrictMode>,
// );
