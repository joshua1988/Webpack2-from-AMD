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
            {
              test: /\.handlebars$/,
              exclude: /node_modules/,
              use: "handlebars-loader"
              // use: [
              //   'imports-loader?this=>window',
              //   'exports-loader?handlebars'
              // ]
            },
            {
              test: /backbone/,
              use: [
                'expose-loader?Backbone',
                'imports-loader?this=>window,jquery,underscore'
              ]
            },
            {test: /glue/, use: [
              'expose-loader?GlueJS',
              'imports-loader?jquery,underscore,backbone'
            ]}

            // Require.js
            // 'glue': {
            //     deps: ['jquery', 'underscore', 'backbone', 'handlebars'],
            //     exports: 'GlueJS'
            // }
          ]
        },
        resolve: {
          alias: {
            "jquerymobile" : "./js/libs/jquerymobile.js",
            "handlebars" : "./js/libs/handlebars-v1.3.0.js"
          }
        }
    }
}
