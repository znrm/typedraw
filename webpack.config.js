const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, './');
const srcDir = path.resolve(rootDir, 'src');
const pubDir = path.resolve(rootDir, 'public');
const modulesDir = path.resolve(rootDir, 'node_modules');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(srcDir),
    path.resolve(modulesDir, 'react-native'),
    path.resolve(modulesDir, 'react-native-safe-module'),
    path.resolve(modulesDir, 'react-native-safe-area-view'),
    path.resolve(modulesDir, 'react-native-tab-view'),
    path.resolve(modulesDir, 'react-native-paper'),
    path.resolve(modulesDir, 'react-native-vector-icons'),
    path.resolve(modulesDir, 'react-native-safe-area-view'),
    path.resolve(modulesDir, '@expo/samples'),
    path.resolve(modulesDir, '@expo/vector-icons'),
    path.resolve(modulesDir, 'react-native-platform-touchable'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins: [
        'expo-web',
        'react-native-web',
        'transform-decorators-legacy',
        [
          'transform-runtime',
          { helpers: false, polyfill: false, regenerator: true },
        ],
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
  include: [path.resolve(modulesDir, 'react-native-vector-icons')],
};

module.exports = {
  entry: path.resolve(srcDir, 'index.js'),

  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
    path: path.resolve(pubDir, 'app'),
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
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
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
      'react-native': 'react-native-web',
    },
  },
};
