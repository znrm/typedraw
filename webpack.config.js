const path = require('path');

module.exports = {
  context: __dirname,
  entry: './client/web/index.jsx',
  output: {
    path: path.resolve(__dirname, 'server', 'static'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
};
