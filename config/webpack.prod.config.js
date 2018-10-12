var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.mode = 'production';
config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, '..', 'dist')
};

config.optimization = {
  minimizer: [new UglifyJsPlugin({
    cache: true,
    parallel: true,
    uglifyOptions: {
      compress: false,
      ecma: 6,
      mangle: true
    },
    sourceMap: true
  })]
};
// config.plugins = config.plugins.concat([

//   // Reduces bundles total size
//   new webpack.optimize.UglifyJsPlugin({
//     mangle: {

//       // You can specify all variables that should not be mangled.
//       // For example if your vendor dependency doesn't use modules
//       // and relies on global variables. Most of angular modules relies on
//       // angular global variable, so we should keep it unchanged
//       except: ['$super', '$', 'exports', 'require', 'angular']
//     }
//   })
// ]);

module.exports = config;
