module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        bracketSameLine: true,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        tabWidth: 2,
        printWidth: 120,
        endOfLine: 'auto',
      },
    ],
  },
};
