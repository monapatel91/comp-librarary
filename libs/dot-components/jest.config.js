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
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>libs/testing-utils/src/lib/file-mock.ts',
  },
  coverageDirectory: '../../coverage/libs/dot-components',
  coveragePathIgnorePatterns: ['/node_modules/'],
};
