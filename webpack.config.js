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
    		{ test: /backbone/, loader: 'imports-loader?underscore,jquery' },
    		{ test: /glue/, loader: 'imports-loader?Backbone=backbone,_=underscore,jquery,this=>window' }

    		// Demo
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
    plugins: [
        new webpack.ProvidePlugin({
        	$: "jquery",
        	"root.jQuery" : "jquery",
//          GlueJS: "glue",
//          underscore: "underscore"
        })
    ]
//    devServer: /*{
//	  contentBase: path.join(__dirname, "dist"),
//	  compress: true,
//	  port: 9000
//	}*/
};