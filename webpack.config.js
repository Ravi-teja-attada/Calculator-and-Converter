const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the path to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Add your loaders here
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  exclude: /node_modules\/eslint-webpack-plugin\/node_modules\/jest-worker\/build\/index\.js/
};