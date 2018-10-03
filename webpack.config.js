const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, './');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-module'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
    path.resolve(appDirectory, 'node_modules/react-native-paper'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(appDirectory, 'node_modules/@expo/samples'),
    path.resolve(appDirectory, 'node_modules/@expo/vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-platform-touchable'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins: [
        'expo-web',
        'react-native-web',
        'transform-decorators-legacy',
        ['transform-runtime', { helpers: false, polyfill: false, regenerator: true }],
      ],
      presets: ['react-native'],
    },
  },
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: './fonts/[hash].[ext]',
      },
    },
  ],
  include: [
    path.resolve(appDirectory, './assets/fonts'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
  ],
};

module.exports = {
  entry: path.resolve(appDirectory, 'src', 'index.js'),
  devtool: 'eval, cheap-module-eval-source-map',

  output: {
    filename: 'app.js',
    publicPath: '/',
    path: path.resolve(appDirectory, './public', 'app'),
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      cssLoaderConfiguration,
      imageLoaderConfiguration,
      ttfLoaderConfiguration,
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV === 'production' || true,
    }),
  ],

  resolve: {
    symlinks: false,
    extensions: ['.web.js', '.js'],
    alias: {
      './assets/images/expo-icon.png': './assets/images/expo-icon@2x.png',
      './assets/images/slack-icon.png': './assets/images/slack-icon@2x.png',
      '@expo/vector-icons': 'expo-web',
      expo: 'expo-web',
      'react-native': 'react-native-web'
    },
  },
};
