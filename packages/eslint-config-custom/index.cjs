module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-return-assign': 'off',
    'no-useless-concat': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'max-nested-callbacks': ['error', 4],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  }
}
