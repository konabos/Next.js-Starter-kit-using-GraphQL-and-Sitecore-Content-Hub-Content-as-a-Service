const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 21,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    '@typescript-eslint/explicit-module-boundary-types': RULES.OFF,
    '@typescript-eslint/no-explicit-any': RULES.OFF,
    'prettier/prettier': RULES.OFF,
    'react/jsx-no-target-blank': RULES.OFF,
    'prefer-const': RULES.OFF,
    'no-var': RULES.OFF,
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
};
