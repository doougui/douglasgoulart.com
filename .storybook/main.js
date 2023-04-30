const webpack = require('webpack');
module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  webpackFinal: config => {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.__NEXT_NEW_LINK_BEHAVIOR': true
    }));
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
  docs: {
    autodocs: true
  }
};