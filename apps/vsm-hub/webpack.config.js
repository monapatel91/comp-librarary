const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(png|jpe?g|gif|webp|woff)$/,
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
          },
        },
      ],
    },
  };
};
