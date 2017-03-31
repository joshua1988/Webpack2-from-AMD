var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
          main: './index.js'
          // vendor: 'moment'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
          rules: [
            {test: /\.css$/, exclude: /node_modules/, use: 'svg-inline-loader'}
          ]
        }
    }
}
