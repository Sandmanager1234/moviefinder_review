module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'esling:react/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/jsx-runtime",
    'plugin:react-hooks/recommended',
    "plugin:@typescript-eslint/stylistic-type-checked",

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ]
  },
}
