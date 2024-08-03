// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Убедитесь, что путь правильный
import { ThemeProvider } from '../hooks/ThemeContext';
import { ErrorBoundary } from '../components/error/error'; // Импортируйте свой ErrorBoundary
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
