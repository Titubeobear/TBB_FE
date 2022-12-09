module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['react-hooks'],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-exports': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};
