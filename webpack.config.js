const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, 'client');

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname),
    path.resolve(appDirectory, 'web', 'index.web.js'),
    path.resolve(appDirectory, 'shared'),
    path.resolve(appDirectory, 'mobile'),
    path.resolve(appDirectory, 'node_modules', 'react-native'),
    path.resolve(appDirectory, 'node_modules', 'react-navigation'),
    path.resolve(appDirectory, 'node_modules', 'native-base')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['react-native', 'react', 'env'],
      plugins: ['react-native-web', 'transform-react-jsx', 'transform-class-properties']
    }
  }
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  context: path.resolve(__dirname),

  entry: [path.resolve(appDirectory, 'web', 'index.web.js')],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'server', 'static')
  },

  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: ['.web.js', '.js']
  },

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration]
  },
  devtool: 'source-map'
};
