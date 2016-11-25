const webpack = require('webpack');
const path = require('path');  

const ROOT_PATH = path.resolve(__dirname);

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
  devtool: 'source-map',
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
    new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};