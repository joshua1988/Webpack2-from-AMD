define(
    function() {
        var HelloWorldController = GlueJS.Controller.extend({
            initialize: function(options) {
                this.init_navigate = '#helloworld';
            },
            /*
                appRoutes 정의 functions
            */
            helloworld: function(options) {
                GlueJS.loadModule('HelloWorldView').show();
            },
            defaultAction: function(options) {
                if (options == null) {
                    GlueJS.AppRouter.navigate(this.init_navigate, {
                        trigger: true,
                        replace: true
                    });
                }
            },
            /*
                appEvents 정의 functions
            */
            btn_click: function(event) {
                alert("HelloWorld Button Click");
            }
        });
        return HelloWorldController;
    }
);