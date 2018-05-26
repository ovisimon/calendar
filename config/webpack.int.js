var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpack = require("webpack");
var helpers = require('./helpers');
// var uglifyjs = webpack.optimize.UglifyJsPlugin;
var uglifyjs = require('uglifyjs-webpack-plugin');

var uglifyOptions = {
  compress: false, // marginal savings
  mangle: {
    keep_fnames: true
  },
  output: {
    comments: false,
    beautify: false
  }
};

module.exports = webpackMerge.smart(commonConfig, {
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              errorsAsWarnings: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new uglifyjs({
      parallel: true,
      uglifyOptions: uglifyOptions
    }),
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify("int")
    })
  ]
});
