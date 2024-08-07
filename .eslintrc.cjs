module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': 'error',
    "react-compiler/react-compiler": "error",
    'import/export/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

