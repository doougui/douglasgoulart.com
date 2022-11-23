module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.@(js|jsx|ts|tsx)',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/**/types.ts',
  ],
  setupFiles: ['<rootDir>/.jest/setEnvVars.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
};
