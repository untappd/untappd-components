const path = require('path')
const config = require('./webpack.config')

config.devtool = false
config.optimization = {
  minimize: true,
}

config.output = {
  filename: '[name].[hash].js',
  path: path.resolve(__dirname, 'docs'),
}

module.exports = config
