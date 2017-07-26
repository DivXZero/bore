const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.jsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
