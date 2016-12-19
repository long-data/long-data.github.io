const fs   = require('fs');
const path = require('path');

const webpack              = require('webpack');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {

  entry: 'script.js',
  output: {
    path: __dirname + '/../assets',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.scss'],
    root: [
      __dirname,
    ],
    moduleDirectories: [
      path.join(__dirname, 'node_modules')
    ]
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new WebpackOnBuildPlugin(function(stats) {
      fs.writeFileSync(path.join(__dirname, '..', '_data', 'generated.yml'), `assetsHash: ${stats.hash}`);
    }),
  ]

};
