var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
          main: './index.js',
          // vendor: [
          //   'underscore'
          // ]
        },
        output: {
            // filename: '[name].[chunkhash].js',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
          rules: [
            {

            },
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
            // {
            //   test: /backbone/,
            //   use: [
            //     'expose-loader?Backbone',
            //     'imports-loader?underscore,jquery,this=>window'
            //     // 'imports-loader?jquery,this=>window'
            //   ]
            // },
            // {
            //   test: /glue/,
            //   use: [
            //     'expose-loader?GlueJS',
            //     'imports-loader?Backbone=backbone,_=underscore,jquery,this=>window'
            //     // 'imports-loader?Backbone=backbone,jquery,this=>window'
            //   ]
            // },
            {
              test: /\.html$/,
              use: [ {
                loader: 'html-loader'
                // options: {
                //   minimize: true
                // }
              }],
            }
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
            // underscore: "underscore",
            // _: "underscore",
            // backbone: "backbone"
            // jQuery: "jquery"
          })
        ]
    }
}
