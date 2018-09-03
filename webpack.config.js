const path = require('path');

const appDirectory = path.resolve(__dirname, 'client');

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'node_modules', 'expo', 'AppEntry.js'),
    path.resolve(appDirectory, 'shared'),
    path.resolve(appDirectory, 'mobile'),
    path.resolve(appDirectory, 'node_modules/react-native'),
    path.resolve(appDirectory, 'node_modules/react-navigation'),
    path.resolve(appDirectory, 'node_modules/native-base')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ['react-native'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web']
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
