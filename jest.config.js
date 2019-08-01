module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: true,
  preset: 'ts-jest',
  globalSetup: './__tests__/setup.ts',
  globalTeardown: './__tests__/teardown.ts'
};
