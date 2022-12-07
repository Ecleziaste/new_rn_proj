module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {singleQuote: true}, {usePrettierrc: true}],
    'react-hooks/exhaustive-deps': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  globals: {
    JSX: true,
    NodeJS: true,
    Response: true,
  },
};
