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
        include: ['app/**/*.{ts,tsx}'],
        exclude: [
          'app/**/*.d.ts',
          'app/vite-env.d.ts',
          'app/entry.server.tsx',
          'app/entry.client.tsx',
          'app/routes/_index.tsx',
          'app/routes/$.tsx',
          'app/root.tsx',
        ],
        statements: 80,
      },
    },
  }),
);
