const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "url": require.resolve("url/")
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },
};
