const webpack = require('webpack');
const path = require('path');  

const ROOT_PATH = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    App: './src/js/components/App.jsx'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: '[name].js',
    publicPath: path.resolve(ROOT_PATH, 'build')
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'build'),
    publicPath: path.resolve(ROOT_PATH, 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000,
    filename: '[name].js'
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
        plugins: ["transform-runtime", "transform-react-jsx"],
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'React'
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: path.resolve(ROOT_PATH, 'views/index.html'),
      template: path.resolve(ROOT_PATH, 'views/index.html'),
      inject: true
    })
  ]
};