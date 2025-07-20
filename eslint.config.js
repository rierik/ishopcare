import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';

const files = ['src/**/*.{ts,tsx}'];

export default defineConfig([
  {
    files,
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files,
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files,
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-no-target-blank': 'error',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],
    },
  },
  {
    files,
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  prettier,
  {
    ignores: ['*.js'],
  },
]);
