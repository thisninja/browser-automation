module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  globals: {
    COMMIT: true,
    NODE_ENV: true,
  },
  extends: ['airbnb-base'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-case-declarations': 'off',
    indent: ['error', 4],
    radix: 'off',
    'no-underscore-dangle': 'off',

    // TODO: remove later
    camelcase: process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'max-len': process.env.NODE_ENV === 'development'
      ? ['error', { code: 120, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }] : 'off',
    'no-mixed-operators':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-restricted-syntax':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'import/extensions':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-prototype-builtins':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-shadow': process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-throw-literal':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-nested-ternary':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'guard-for-in':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'array-callback-return':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-continue': process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-unused-expressions':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-bitwise': process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'prefer-promise-reject-errors':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'vue/require-valid-default-prop':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'default-case':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-await-in-loop':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'prefer-destructuring':
      process.env.NODE_ENV === 'development'
        ? ['error', { object: false, array: true }]
        : 'off',
    'no-loop-func':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-cond-assign':
      process.env.NODE_ENV === 'development' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};