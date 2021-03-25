const path = require('path');

module.exports = {
  entry: './src/canvas/canvas.js',
  output: {
    filename: 'canvas.bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../../', 'public', 'canvas'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
};
