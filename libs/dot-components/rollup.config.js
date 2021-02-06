/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (config) => {
  const svgr = require('@svgr/rollup').default;
  const url = require('@rollup/plugin-url');

  return {
    ...config,
    plugins: [
      ...config.plugins,
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2'],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      svgr({
        svgo: false,
        ref: true,
        titleProp: true,
      }),
    ],
    output: {
      ...config.output,
      globals: {
        ...config.output.globals,
        react: 'React',
        'react-router-dom': 'ReactRouterDom',
        '@material-ui/core': 'MuiCore',
        '@material-ui/lab': 'MuiLab',
        'styled-components': 'styled',
      },
    },
  };
};
