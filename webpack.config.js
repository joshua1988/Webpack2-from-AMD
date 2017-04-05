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
            // {
            //   test: /jquery\-2\.0\.3\.js/,
            //   use: [
            //     'exports-loader?jQuery',
            //     'imports-loader?this=>window'
            //   ]
            // },
            {
              test: /underscore/,
              use: [
                "expose-loader?_"
              ]
            },
            {
              test: /backbone/,
              use: [
                'expose-loader?Backbone',
                'imports-loader?this=>window,jquery,underscore'
              ]
            },
            {
              test: /glue/,
              use: [
                'expose-loader?GlueJS',
                // 'imports-loader?this=>window,jquery,underscore,backbone'
                'imports-loader?backbone,underscore,jquery,this=>window'
              ]
            }

            // Require.js
            // 'glue': {
            //     deps: ['jquery', 'underscore', 'backbone', 'handlebars'],
            //     exports: 'GlueJS'
            // }
          ]
        },
        resolve: {
          alias: {
            // "jquery" : "./js/libs/jquery.js",
            // "jquerymobile" : "./js/libs/jquerymobile.js",
            // "handlebars" : "./js/libs/handlebars-v1.3.0.js"
          }
        },
        plugins: [
          new webpack.ProvidePlugin({
            // jquery: "jquery",
            underscore: "underscore",
            // backbone: "backbone"
            // jQuery: "jquery"
          })
        ]
    }
}
