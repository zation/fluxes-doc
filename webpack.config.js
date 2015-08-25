var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    noParse: [/babel-core\/browser/],
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: [
        path.join(__dirname, 'components'),
        path.join(__dirname, 'pages'),
        path.join(__dirname, 'examples'),
        path.join(__dirname, 'node_modules/fluxes/components')
      ]
    }]
  }
};