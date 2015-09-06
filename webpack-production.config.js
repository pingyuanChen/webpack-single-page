var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcPath = path.resolve(__dirname, 'src');
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    'boot-bundle': './src/index',
    'buttons-bundle': './src/pages/buttons',
    'dialog-bundle': './src/pages/dialog',
    'dropdown-menu-bundle': './src/pages/dropdown-menu',
    'icon-button-bundle': './src/pages/icon-button',
    'tab-bundle': './src/pages/tab',
    'toast-bundle': './src/pages/toast'
  },

  output: {
    path: buildPath,
    filename: '[name].js',
    pathinfo: true
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },

  devtool: 'eval',

  plugins: [
    //for webpack optimize
    new webpack.optimize.CommonsChunkPlugin('common-bundle.js'),

    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'src/_index.html'
    // }),


    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel?stage=0'],
        include: path.join(__dirname, 'src'),
        exclude: ['/node_modules/']
      }
    ]
  }
};


