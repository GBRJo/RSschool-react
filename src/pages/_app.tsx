// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '../hooks/ThemeContext';
import { ErrorBoundary } from '../components/error/error';
import '../index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary fallbackUI={<div>Something went wrong.</div>}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
