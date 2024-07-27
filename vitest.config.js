import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        reporter: ['text', 'json', 'html'],
        all: true,
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/**/*.d.ts',
          'src/main.tsx',
          'src/pages/app/App.tsx',
          'src/components/ErrorBoundary.tsx',
          'src/pages/MainPage/MainPage.tsx',
          'src/pages/pages/NotFound/NotFound.tsx',
          'src/vite-env.d.ts',
        ],
        statements: 80,
      },
    },
  }),
);
