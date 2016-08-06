var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  // devServer: {
  //   inline: true,
  //   contentBase: './build',
  //   port: 8000
  // },
  // plugins: [
  //   // new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  //     __CLIENT__: JSON.stringify(true),
  //     __SERVER__: JSON.stringify(false),
  //   }),
  // ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
