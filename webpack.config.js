const path = require('path');

module.exports = {
  entry: "./index.jsx",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [{ test:  /\.js$|jsx/, use: 'babel-loader' }],
  }
};