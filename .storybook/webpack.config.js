/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /\.module.scss$/,
  });

  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      'style-loader',
      '@teamsupercell/typings-for-css-modules-loader',
      {
        loader: 'css-loader',
        options: { modules: true },
      },
    ],
  });

  // Return the altered config
  return config;
};
