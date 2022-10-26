/* eslint-disable quotes */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // eslint-disable-next-line prettier/prettier
        'prettier/prettier': ['error', { "endOfLine": "auto"}, { usePrettierrc: true }],  // Use our .prettierrc file as source
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
