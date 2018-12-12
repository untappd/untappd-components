const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  devtool: 'cheap-eval-source-map',
  entry: './examples/src/index.js',

  output: {
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },

  resolve: {
    alias: {
      '@untappd/components': path.resolve(__dirname, 'src/index'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },

  devServer: {
    port: 4000,
    compress: true,
    clientLogLevel: 'none',
    overlay: true,
    stats: 'errors-only',
  },
}

module.exports = config
