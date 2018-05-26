var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var TSLintPlugin = require('tslint-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpack = require("webpack");
var helpers = require('./helpers');
var HistoryApiFallback = require('connect-history-api-fallback');

console.log("Automatic Browser Reload is", process.env.DISABLE_BROWSER_RELOAD ? "disabled" : "enabled");

module.exports = webpackMerge.smart(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost', // browse to http://localhost:3001/ during development
      port: 3001,
      server: { baseDir: ['build'], middleware: [ HistoryApiFallback() ] }, // ./build directory is being served
      ui: false,
      online: false,
      notify: false,
      open: false,
      codeSync: !process.env.DISABLE_BROWSER_RELOAD
    }),
    new TSLintPlugin({
      files: [helpers.root('src', '**/*.ts')],
      format: 'stylish',
      typeCheck: true,
      project: './src',
      force: true
    }),
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify("dev")
    })
  ]
});
