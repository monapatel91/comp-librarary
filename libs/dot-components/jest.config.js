module.exports = {
  displayName: 'dot-components',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['../../jest.setup.js'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/../testing-utils/src/lib/file-mock.ts',
    '\\.woff': '<rootDir>/../testing-utils/src/lib/file-mock.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/dot-components',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
};
