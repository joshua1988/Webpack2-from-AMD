require.config({
    baseUrl: 'js',
    paths: {
        'text': 'libs/text',
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'jquerymobile': 'libs/jquerymobile',
        'handlebars': 'libs/handlebars-v1.3.0',
        'datatables': 'libs/jquery.dataTables', // 'datatables'濡�怨좎젙�댁빞 ��        'datatables-fixedcolumns': 'libs/dataTables.fixedColumns', // 'datatables-fixedcolumns'濡�怨좎젙�댁빞 ��        'glue': 'libs/glue',
        'templates': '../templates',
		'glue':'libs/glue'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'glue': {
            deps: ['jquery', 'underscore', 'backbone', 'handlebars'],
            exports: 'GlueJS'
        }
    }
});
require([
    'App'
], function(App) {
    App.start();
});