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
          'src/components/app/App.tsx',
          'src/components/personDetails/PersonDetails.tsx',
          'src/pages/index.jsx',
          'src/pages/404.tsx',
          'src/pages/_app.tsx',
          'src/vite-env.d.ts',
        ],
        statements: 80,
      },
    },
  }),
);
