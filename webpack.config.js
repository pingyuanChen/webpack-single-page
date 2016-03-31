const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    'index': path.join(srcDir, 'index.jsx')
  },

  output: {
    path: buildDir,
    filename: '[name].js',
    publicPath: '/',
    pathinfo: true
  },

  resolve: {
    root: srcDir,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },

  devtool: 'eval',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // display only errors to reduce the amount of output
    // stats: 'errors-only',

    // parse host and port from env so this is easy
    // to customize
    // host: process.env.HOST,
    host: '0.0.0.0',
    port: 8001
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.join(srcDir, '/index.html')
    }),
    new ExtractTextPlugin('css/[hash:8].[name].css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded'),
        include: srcDir
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: srcDir,
        exclude: ['/node_modules/']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=5120&name=img/[hash:8].[name].[ext]',  // return Data URL if smaller than 5k, otherwise use file-loader
        include: srcDir
      }
    ]
  }
};


