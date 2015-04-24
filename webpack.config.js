'use strict';

var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

module.exports = {
	devtool: 'sourcemap',
  entry: [ './js/main.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          ReactStylePlugin.loader(),
          'babel-loader'
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      'process.env': {
        // To enable production mode:
        //NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
