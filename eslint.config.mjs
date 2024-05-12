import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ...eslint.configs.recommended,
    ignores: ['dist/*', '.prettierrc.js'],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    ignores: ['dist/*'],
  })),
  {
    rules: {
      'no-constant-condition': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignores: ['dist/*', 'jest.config.js'],
  },
];
