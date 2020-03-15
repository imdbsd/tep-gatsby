const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: [{
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, '../../tsconfig.json'),
      },
      include: [path.resolve(__dirname, '../stories'), path.resolve(__dirname, '../../src')],
      transpileManager: true,
    },
  },]
}
