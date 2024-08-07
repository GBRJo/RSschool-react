import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild
  .build({
    entryPoints: ['app/root.tsx'],
    bundle: true,
    outdir: 'public/build',
    plugins: [sassPlugin()],
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx',
      '.scss': 'css',
    },
  })
  .catch(() => process.exit(1));
