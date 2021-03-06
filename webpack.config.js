var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // devtool: 'eval',
  // entry: [
  //   'webpack-hot-middleware/client',
  //   './src/main'
  // ],
  entry: './src/main',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
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
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/asset/index.html'}
    ]) 
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
