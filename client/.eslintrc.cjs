module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['./postcss.config.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Make sure your tsconfig.json is referenced here
    tsconfigRootDir: __dirname, // Ensures the correct root directory
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'quotes': 'off',
    '@typescript-eslint/quotes': 'error',
    "@typescript-eslint/strict-boolean-expressions": "error"
  },
  ignorePatterns: ['.eslintrc.cjs', 'client/context/authContext.tsx'],
};
