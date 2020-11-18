/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (config) => {
  const svgr = require('@svgr/rollup').default;
  const url = require('@rollup/plugin-url');

  return {
    ...config,
    plugins: [
      ...config.plugins,
      url(),
      svgr({
        svgo: false,
        ref: true,
        titleProp: true,
      }),
    ],
  };
};
