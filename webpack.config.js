// var webpack = require('webpack');
module.exports = {
  // Entry point for the bundle, path and filename to main module
  entry: './src/main.js',
  output: {
    // Output directory as an absolute path
    path: './src',
    // Filename as relative path within output path
    filename: 'bundle.js',
    // Output path from the view of the JS/HTML
    // publicPath: '/${4:output_publicPath}/'
  },
  module: {
    // Loader required for JSX
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 8000
  }
};