define(
    function() {
        var HelloWorldView = GlueJS.View.extend({
            el: '#home',
            template: 'HelloWorldTemplate',
            model: 'HelloWorldModel'
        });
        return HelloWorldView;
    }
);