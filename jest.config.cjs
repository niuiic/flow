/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: [require('path').join(__dirname, 'tests/**/*.spec.ts')],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^src/(.+)\\.js$': '<rootDir>/src/$1',
    '^(.+)\\.js$': '$1'
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  }
}
