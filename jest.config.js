// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.ts'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/*.tsx',
    'src/store/**/*.ts',
    'src/**/*.{js,jsx,tsx}',
    '!src/store/*.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
    '!src/**/Skeleton/**/*.tsx',
    '!src/**/*.spec.tsx'
  ],
  coverageReporters: ['lcov', 'json']
};