// app/layout.tsx
'use client';

import React from 'react';
import '../src/index.scss';
import { ThemeProvider } from '../src/hooks/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

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
