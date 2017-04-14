var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
    	main: './index.js',
    },
    output: {
    	filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
    	loaders: [
//    		 Underscore O , Backbone O , GlueJS X (Empty object)
//    		{ test: /underscore/, loader: 'expose-loader?_' },
//    		{ test: /backbone/, loader: 'expose-loader?Backbone!imports-loader?underscore,jquery,this=>window' },
    		{ test: /glue/, loader: 'expose-loader?gluejs!imports-loader?Backbone=backbone,_=underscore,jquery,this=>window' }

    		// Demo
//    		{ test: require.resolve('./js/libs/glue'), loader: 'expose-loader?gluej!imports-loader?Backbone=backbone,_=underscore,jquery'},
//    		{ test: /glue/, loader: 'expose-loader?GlueJS!imports-loader?Backbone=backbone,_=underscore,jquery'},
//    		{ test: /glue/, loader: 'expose-loader?GlueJS!imports-loader?backbone,underscore,jquery' }
		]
    },
    resolve: {
    	extensions: ['.js'],
    	alias: {
    		jquery      : path.join(__dirname, "./js/libs/jquery.js"),
            underscore  : path.join(__dirname, "./js/libs/underscore.js"),
            backbone    : path.join(__dirname, "./js/libs/backbone.js")
    	}
    },
//    plugins: [
//        new webpack.ProvidePlugin({
//          $: "jquery",
////          underscore: "underscore"
//        })
//    ]
//    devServer: /*{
//	  contentBase: path.join(__dirname, "dist"),
//	  compress: true,
//	  port: 9000
//	}*/
};