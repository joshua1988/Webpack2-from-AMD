var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
          main: './index.js'
          // vendor: 'moment'
        },
        output: {
            // filename: '[name].[chunkhash].js',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
          rules: [
            {test: /\.css$/, exclude: /node_modules/, use: 'svg-inline-loader'},
            {test: /\.handlebars$/, exclude: /node_modules/, use: "handlebars-loader"}
          ]
        },
        resolve: {
          alias: {
            "handlebars" : "./js/libs/handlebars-v1.3.0.js"
          }
        }
    }
}
