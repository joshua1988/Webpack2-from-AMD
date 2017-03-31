define(['glue'],
    function(GlueJS) {
        GlueJS.isDevelopment = true;
        GlueJS.debugpoint.timeunit = 'ms';
        var App = new GlueJS.App({
            controller: 'Controller',
            models: [
                'HelloWorldModel'
            ],
            views: [
                'HelloWorldView'
            ],
            templates: [
                'HelloWorldTemplate'
            ],
            appRoutes: {
                'helloworld': 'helloworld',
                '*actions': 'defaultAction'
            },
            appEvents: {
                'click:#helloworld_btn': 'btn_click'
            }
        });       
        return App;
    }
);