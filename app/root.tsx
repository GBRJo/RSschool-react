import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '~/hooks/ThemeContext';
import { store } from './store/store';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import stylesheetUrl from './index.css';

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    { rel: "stylesheet", href: stylesheetUrl },
  ];
};

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'My React App' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { name: 'theme-color', content: '#000000' },
    { name: 'description', content: 'My beautiful React app' },
  ];
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <div id="root">
              <Outlet />
            </div>
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

