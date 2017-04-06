console.log("Backbone : ", Backbone);
// console.log("GlueJS : " , GlueJS);

var App = new GlueJS.App({
            controller: 'Controller',
            models: [
                'HelloWorldModel'
            ],
            views: [
                'HelloWorldView'
            ],
            templates: [
                'HelloWorldTemplate',
                'SecondTemplate'
            ],
            appRoutes: {
                'helloworld': 'helloworld',
                '*actions': 'defaultAction'
            },
            appEvents: {
                'click:#helloworld_btn': 'btn_click'
            }
        });

App.start();

//var App = new GlueJS.App();
console.log(App);
