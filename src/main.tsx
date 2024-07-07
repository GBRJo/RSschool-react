import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import { ErrorBoundary } from '@components/error/error.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackUI={<div>Something went wrong.</div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
