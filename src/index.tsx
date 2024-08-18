import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HookForm } from './pages/hookForm/HookForm.tsx';
import { Main } from './pages/main/Main.tsx';
import { UncontrolledForm } from './pages/uncontrolledForm/UncontrolledForm.tsx';
import store from '@store/store.ts';
import { Layout } from '@components/layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/uncontrolled-form',
        element: <UncontrolledForm />,
      },
      {
        path: '/hook-form',
        element: <HookForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
