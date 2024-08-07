// app/layout.tsx
'use client';

import React from 'react';
import '../src/index.scss';
import { Provider } from 'react-redux';
import { store } from '~/store/store';
import { ThemeProvider } from '~/hooks/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <div id="root">{children}</div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
