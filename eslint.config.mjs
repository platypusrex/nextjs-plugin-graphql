import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/node_modules'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
