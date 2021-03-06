/**
 * Copyright(c) 2014 POSCO ICT
 * @File : glue.js (UTF-8)
 * @FileName : glue
 * @Author : 배광식
 * @LastVersion : 1.0.0
 * @Change : 2014-04-01 | 배광식 | 최초 작성
 * @Change : 2014-06-18 | 배광식 | 주석 작성
 * @Change : 2014-08-27 | 배광식 | GlueJS 2차 작업내용 추가
 */

// "use strict";

/**
 * GlueJS는 Backbone을 확장시킨 프레임워크로 모듈화된 구조, View의 자동화,
 * 구조적인 이벤트 처리와 바인딩, 디버깅 등 복잡한 JavaScript Application을 MVC 패턴 형태로
 * 구현할 수 있도록 여러 기능들을 제공한다.
 *
 * @namespace GlueJS는 Backbone을 확장시킨 프레임워크로 모듈화된 구조, View의 자동화,
 * 구조적인 이벤트 처리와 바인딩, 디버깅 등 복잡한 JavaScript Application을 MVC 패턴 형태로
 * 구현할 수 있도록 여러 기능들을 제공한다.
 * @author SW제품기술팀
 * @version 1.0.0
 * @since 2014.10.28
 * @see <a target='_blank' href='http://backbonejs.org/'>Backbone.js</a>
 */

//(function() {
	
	"use strict";

	var GlueJS = {
	    name: 'GlueJS',
	    VERSION: '1.0.0',
	    /**
	     * Application에서 템플릿을 처리할 모듈을 설정한다.
	     * <br>* <a target='_blank' href='http://underscorejs.org/'><b>underscore-template</b></a> :
	     * Underscore.js에서 제공하는 템플릿 모듈이며 GlueJS의 Default모듈
	     * <br>* <a target='_blank' href='http://underscorejs.org/'><b>underscore-selector-template</b></a> :
	     * selector를 이용하여 underscore-template을 로딩하는 템플릿 모듈
	     * <br>* <a target='_blank' href='http://handlebarsjs.com/'><b>handlebars-template</b></a> : Mustache를 기반으로 구현한 템플릿 모듈
	     * <br>* <b>javascript-template</b> : View에 정의한 javascript를 로딩하는 템플릿 모듈
	     * @type string
	     * @default underscore-template
	     */
	    templateStrategy: 'underscore-template',
	    /**
	     * Application의 Validation 초기화 작업 여부를 설정한다.
	     * @type boolean
	     * @default false
	     */
	    validationInit: false,
	    /**
	     * Application의 debug, debugpoint 로그 사용여부를 설정한다.
	     * @type boolean
	     * @default false
	     */
	    isDevelopment: false,
	    _markRecs: {},
	    MODULES: {},
	    history: Backbone.history,
	    /**
	     * Debug 여부에 따라 로그 및 mark 된 두 지점의 시간차를 console에 출력한다.
	     * @class Debug 여부에 따라 로그 및 mark 된 두 지점의 시간차를 console에 출력한다.
	     */
	    $: Backbone.$,
	    protoSlice :Array.prototype.slice
	};
	
	console.log("_ in gluejs : ", _);
	console.log("backbone in gluejs : ", Backbone);

//	GlueJS.extend = Backbone.Model.extend;
//	
//	/**
//	 * 대상 객체에서 옵션명에 해당하는 객체, 함수 또는 다른 값을 검색한다.
//	 * @param {object} target 대상객체
//	 * @param {string} optionName 옵션명
//	 * @returns {object} 옵션명에 해당하는 값
//	 */
//	GlueJS.getOption = function(target, optionName) {
//	    if (!target || !optionName) {
//	        return;
//	    }
//	    var value;
//	    if (target.options && (optionName in target.options) && (target.options[optionName] !== undefined)) {
//	        value = target.options[optionName];
//	    } else {
//	        value = target[optionName];
//	    }
//	    return value;
//	};
//	
//	/**
//	 * 함수의 인자를 배열로 변환하여 반환한다.
//	 * @private
//	 * @param {object} args 함수 인자
//	 * @returns {array} 배열
//	 */
//	GlueJS.slice = function(args) {
//	    return GlueJS.protoSlice.call(args);
//	};
//	
//	GlueJS.triggerMethod = (function() {
//	    var splitter = /(^|:)(\w)/gi;
//	    /**
//	     * 이벤트명을 첫 문자를 대문자로 변환하여 반환한다.
//	     * @param {object} 정규표현식
//	     * @param {object} 접두구문
//	     * @param {string} 이벤트명
//	     * @return {string} 변환된 이벤트명
//	     */
//	    var getEventName = function(match, prefix, eventName) {
//	        return eventName.toUpperCase();
//	    }
//	    /**
//	     * 대상 객체의 method 및 이벤트를 실행한다.
//	     * @param {object} method 및 이벤트
//	     * @return {string} 이벤트 실행
//	     */
//	    var triggerMethod = function(event) {
//	        // get the method name from the event name
//	        var methodName = 'on' + event.replace(splitter, getEventName);
//	        var method = this[methodName];
//	        // trigger the event
//	        this.trigger.apply(this, arguments);
//	        // call the onMethodName if it exists
//	        if (_.isFunction(method)) {
//	            // pass all arguments, except the event name
//	            return method.apply(this, _.tail(arguments));
//	        }
//	    };
//	    return triggerMethod;
//	})();
//	
//	/**
//	 * Callback function 및 method를 생성, 관리하고 실행한다.
//	 * @class Callback function 및 method를 생성, 관리하고 실행한다.
//	 * @constructor
//	 * @param
//	 * @returns {void}
//	 * @example
//	var callbacks = <b>new GlueJS.Callbacks</b>();
//	 */
//	GlueJS.Callbacks = function() {
//	    this._deferred = GlueJS.$.Deferred();
//	    this._callbacks = [];
//	};
//	
//	_.extend(GlueJS.Callbacks.prototype, /** @lends GlueJS.Callbacks# */{
//	    /**
//	     * 실행할 Callback function 및 method를 등록한다.
//	     * @param {function} callback Callback method
//	     * @param {object} contextOverride Callback이 실행 될 때의 context
//	     * @returns {void}
//	     * @example
//	callbacks.<b>add</b>(function(options){
//	    GlueJS.log("Callback Run " + options.value);
//	});
//	     */
//	    add: function(callback, contextOverride) {
//	        this._callbacks.push({
//	            cb: callback,
//	            ctx: contextOverride
//	        });
//	
//	        this._deferred.done(function(context, options) {
//	            if (contextOverride) {
//	                context = contextOverride;
//	            }
//	            callback.call(context, options);
//	        });
//	    },
//	
//	    /**
//	     * 등록한 Callback function 및 method를 실행한다.
//	     * @param {object} options 실행 option객체
//	     * @param {object} context 실행 context객체
//	     * @returns {void}
//	     * @example
//	callbacks.<b>run</b>({
//	    value: 'options'
//	});
//	
//	     */
//	    run: function(options, context) {
//	        this._deferred.resolve(options, context);
//	    },
//	
//	    /**
//	     * 등록한 Callback function 및 method를 재설정 한다.
//	     * @param
//	     * @returns {void}
//	     * @example
//	callbacks.<b>reset</b>();
//	     */
//	    reset: function() {
//	        var callbacks = this._callbacks;
//	        this._deferred = GlueJS.$.Deferred();
//	        this._callbacks = [];
//	
//	        _.each(callbacks, function(cb) {
//	            this.add(cb.cb, cb.ctx);
//	        }, this);
//	    }
//	});
//	
//	/**
//	 * GlueJS.App에서 설정하여 저장되거나 추가한 모듈 객체를 반환한다.
//	 * @param {string} moduleName 모듈 객체명
//	 * @param {boolean} loadType 객체 생성여부
//	 * @param {object} valueObj 생성객체 초기값
//	 * @return {object} 모듈 객체
//	 * @memberOf GlueJS.Loader#
//	 * @example
//	GlueJS.log(<b>GlueJS.loadModule</b>('HelloWorldView'));
//	 */
//	GlueJS.loadModule = function(moduleName, loadType, valueObj){
//	    if(moduleName && GlueJS.MODULES.hasOwnProperty(moduleName)) {
//	        var module = GlueJS.MODULES[moduleName];
//	        if(typeof module === 'string') {
//	            return module;
//	        } else {
//	            if(loadType === undefined) {
//	                return module;
//	            } else {
//	                return loadType ? new module.constructor(valueObj) : module.constructor;
//	            }
//	        }
//	    } else {
//	    	console.log("this module doesn't exist");
//	    }
//	};
//	
//	/**
//	 * GlueJS.App에서 설정한 객체들의 인스턴스를 생성하여 저장한다.
//	 * @class GlueJS.App에서 설정한 객체들의 인스턴스를 생성하여 저장하고 관리한다.
//	 * @private
//	 * @param {object} options 실행 option객체
//	 * @returns {object} jQuery Deferred의 promise
//	 * @see GlueJS.App
//	 */
//	// GlueJS.Loader = function(options) {
//	//     var deferred = $.Deferred();
//	//     var templateFullNames = [];
//	//     var templateNames = [];
//	//     var collectionFullNames = [];
//	//     var collectionNames = [];
//	//     var modelFullNames = [];
//	//     var modelNames = [];
//	//     var viewFullNames = [];
//	//     var viewNames = [];
//	//     var controllerFullNames = [];
//	//     var controllerNames = [];
//	//
//	//     // if(options.templates){
//	//     //     _.map(options.templates, function(templateName){
//	//     //         templateNames.push(templateName);
//	//     //         templateFullNames.push('text!templates/' + templateName +'.html');
//	//     //     });
//	//     // }
//	//     // if(options.models) {
//	//     //     _.map(options.models, function(modelName){
//	//     //         modelNames.push(modelName);
//	//     //         modelFullNames.push('models/' + modelName);
//	//     //     });
//	//     // }
//	//     // if(options.collections) {
//	//     //     _.map(options.collections, function(collectionName){
//	//     //         collectionNames.push(collectionName);
//	//     //         collectionFullNames.push('collections/' + collectionName);
//	//     //     });
//	//     // }
//	//     // if(options.views) {
//	//     //     _.map(options.views, function(viewName){
//	//     //         viewNames.push(viewName);
//	//     //         viewFullNames.push('views/' + viewName);
//	//     //     });
//	//     // }
//	//     // if(options.controller) {
//	//     //     controllerNames.push(options.controller);
//	//     //     controllerFullNames.push('controllers/' + options.controller);
//	//     // }
//	//
//	//     console.log("templateNames : ", templateNames);
//	//     console.log("templateFullNames : ", templateFullNames);
//	//
//	//
//	//     // var req = require.context("./js", true, /^\.\/.*\.js$/);
//	//     // console.log("req : ", req);
//	//     // console.log(req.keys());
//	//
//	//     // customized the loading modules based on Webpack 2 - HTML loader
//	//     if (options.templates) {
//	//       options.templates.forEach(function (x) {
//	//         var name = './templates/'+ this.x +'.html';
//	//         GlueJS.MODULES[x] = require(name);
//	//         console.log("templates : ", GlueJS.MODULES[x]);
//	//       });
//	//     }
//	//     if (options.models) {
//	//       options.models.forEach(function (x) {
//	//         var name = './js/models/'+ this.x;
//	//         GlueJS.MODULES[x] = require(name);
//	//       });
//	//     }
//	//     if(options.collections) {
//	//       options.collections.forEach(function (x) {
//	//         var name = './js/collections/'+ this.x;
//	//         GlueJS.MODULES[x] = require(name);
//	//       });
//	//     }
//	//     if(options.views) {
//	//       options.views.forEach(function (x) {
//	//         var name = './js/views/'+ this.x;
//	//         GlueJS.MODULES[x] = require(name);
//	//       });
//	//     }
//	//     if(options.controller) {
//	//       var name = "./js/controller/"+ options.controller;
//	//       GlueJS.MODULES[options.controller] = require(name);
//	//     }
//	//     // deferred.resolve();
//	//
//	//     // Original Logic
//	//     // require(templateFullNames, function() {
//	//     //     if(arguments.length == 1){
//	//     //         GlueJS.MODULES[templateNames] = arguments[0];
//	//     //     } else {
//	//     //         _.each(arguments, function(module, index){
//	//     //             if(typeof module === 'string') {
//	//     //                 GlueJS.MODULES[templateNames[index]] = module;
//	//     //             }
//	//     //         });
//	//     //     }
//	//     //     require(modelFullNames, function() {
//	//     //         if(arguments.length == 1){
//	//     //             GlueJS.MODULES[modelNames] = new arguments[0]();
//	//     //         } else {
//	//     //             _.each(arguments, function(module, index){
//	//     //                 GlueJS.MODULES[modelNames[index]] = new module();
//	//     //             });
//	//     //         }
//	//     //         require(collectionFullNames, function() {
//	//     //             if(arguments.length == 1){
//	//     //                 if(_.contains(collectionSetModelKeys, collectionNames)){
//	//     //                         arguments[0].prototype.model = GlueJS.loadModule(options.collectionSetModel[collectionNames]).constructor;
//	//     //                 }
//	//     //                 GlueJS.MODULES[collectionNames] = new arguments[0]();
//	//     //             } else {
//	//     //                 _.each(arguments, function(module, index){
//	//     //                     if(_.contains(options.collectionSetModel, collectionNames[index])){
//	//     //                         module.prototype.model = GlueJS.loadModule(options.collectionSetModel[collectionNames[index]]).constructor;
//	//     //                     }
//	//     //                     GlueJS.MODULES[collectionNames[index]] = new module();
//	//     //                 });
//	//     //             }
//	//     //             require(viewFullNames, function() {
//	//     //                 if(arguments.length == 1){
//	//     //                     if(_.contains(viewSetModelKeys, viewNames)){
//	//     //                         arguments[0].prototype.model = GlueJS.loadModule(options.viewSetModel[viewNames]);
//	//     //                     }
//	//     //                     if(_.contains(viewSetCollectionKeys, viewNames)){
//	//     //                         arguments[0].prototype.collection = GlueJS.loadModule(options.viewSetCollection[viewNames]);
//	//     //                     }
//	//     //                     GlueJS.MODULES[viewNames] = new arguments[0]();
//	//     //                 } else {
//	//     //                     _.each(arguments, function(module, index){
//	//     //                         if(_.contains(viewSetModelKeys, viewNames[index])){
//	//     //                             module.prototype.model = GlueJS.loadModule(options.viewSetModel[viewNames[index]]);
//	//     //                         }
//	//     //                         if(_.contains(viewSetCollectionKeys, viewNames[index])){
//	//     //                             module.prototype.collection = GlueJS.loadModule(options.viewSetCollection[viewNames[index]]);
//	//     //                         }
//	//     //
//	//     //                         GlueJS.MODULES[viewNames[index]] = new module();
//	//     //                     });
//	//     //                 }
//	//     //                 require(controllerFullNames, function() {
//	//     //                     if(arguments.length == 1){
//	//     //                         GlueJS.MODULES[controllerNames] = new arguments[0]();
//	//     //                     }
//	//     //                     deferred.resolve();
//	//     //                 });
//	//     //             });
//	//     //         });
//	//     //     });
//	//     // });
//	//
//	//     return deferred.promise();
//	// };
//	
//	
//	/**
//	 * Application을 초기화 하고 설정한 객체를 로딩하며 Route, Event, Controller를 설정한다.
//	 * @class Application을 초기화 하고 설정한 객체를 로딩하며 Route, Event, Controller를 설정한다.
//	 * @constructor
//	 * @returns {void}
//	 * @param {object} options 설정 option객체
//	 * @param {array} options.subApps 고려중
//	 * @param {string} options.controller URL변경, 이벤트 발생 때 실행되는 method들을 정의한 Controller를 설정한다.
//	 * @param {array} options.views js/views폴더의 로드할 View 객체들을 배열로 정의한다.
//	 * @param {array} options.models js/models 폴더에 로드할 Model 객체들를 배열로 정의한다.
//	 * @param {array} options.templates templates 폴더의 로드할 템플릿 html파일들을 배열로 정의한다.
//	 * @param {object} options.viewSetModel View 객체에 model속성을 설정한다.
//	 * @param {object} options.viewSetCollection View 객체에 collection속성을 설정한다.
//	 * @param {object} options.collectionSetModel Collection 객체에 model속성을 설정한다.
//	 * @param {object} options.appRoutes Application에서 hash URL이 변경될 때 실행 할 Controller의 method를 지정한다.
//	 * @param {object} options.appEvents Application에서 이벤트가 발생했을 때 실행 할 Controller의 method를 지정한다.
//	 * @example
//	var HelloWorldApp = <b>new GlueJS.App</b>({
//	    subApps: [
//	        'otherApp'
//	    ],
//	    controller: 'HelloWorldController',
//	    models: [
//	        'HelloWorldModel'
//	    ],
//	    views: [
//	        'HelloWorldView'
//	    ],
//	    templates: [
//	        'helloWorldTemplate'
//	    ],
//	    viewSetModel: {
//	        'HelloWorldView': 'HelloWorldModel'
//	    },
//	    viewSetCollection: {
//	        'HelloWorldView': 'HelloWorldCollection'
//	    },
//	    collectionSetModel: {
//	        'HelloWorldCollection': 'HelloWorldModel'
//	    },
//	    appRoutes: {
//	        'helloworld': 'helloworld',
//	        '*actions': 'defaultAction'
//	    },
//	    appEvents: {
//	        'click:#helloworld_btn': 'btn_click'
//	    }
//	});
//	 */
//	GlueJS.App = function(options) {
//	    this._initCallbacks = new GlueJS.Callbacks();
//	    _.extend(this, options);
//	
//	//     if(!GlueJS.notUsejQueryMobile){
//	//         require([
//	//             'jquerymobile'
//	//         ], function() {
//	//             // $.mobile.ajaxEnabled = false;
//	//             $.mobile.linkBindingEnabled = false;
//	//             $.mobile.hashListeningEnabled = false;
//	//             // $.mobile.pushStateEnabled = false;
//	//             $.mobile.changePage.defaults.changeHash = false;
//	//
//	// //            $.mobile.loading('show', {
//	// //                text: 'Initializing...',
//	// //                textVisible: true,
//	// //                theme: 'b',
//	// //                html: ""
//	// //            });
//	//         });
//	//     }
//	
//	    $.mobile.linkBindingEnabled = false;
//	    $.mobile.hashListeningEnabled = false;
//	    $.mobile.changePage.defaults.changeHash = false;
//	
//	    GlueJS.AppRouter = new GlueJS.Router();
//	
//	    GlueJS.Loader(options).done(function(){
//	
//	        console.log("options in glue.js 476 : ", options);
//	
//	        var controller = GlueJS.loadModule(options.controller);
//	        GlueJS.AppRouter.processAppRoutes(controller, options.appRoutes);
//	        GlueJS.AppRouter.processAppEvents(controller, options.appEvents);
//	
//	//        var subAppsCount = 0;
//	//        if(options.subApps && options.subApps.length > 0) {
//	//            require(options.subApps, function() {
//	//                _.each(arguments, function(subApp) {
//	//                    GlueJS.Loader(subApp).done(function(){
//	//                        var controller = GlueJS.loadModule(subApp.controller);
//	//                        GlueJS.AppRouter.processAppRoutes(controller, subApp.appRoutes);
//	//                        GlueJS.AppRouter.processAppEvents(controller, subApp.appEvents);
//	//                        if(++subAppsCount == options.subApps.length) {
//	//                            GlueJS.history.start();
//	//                            if(!GlueJS.notUsejQueryMobile){
//	//                                $.mobile.loading('hide');
//	//                            }
//	//                        }
//	//                    });
//	//                });
//	//            });
//	//        } else {
//	//            GlueJS.history.start();
//	//            if(!GlueJS.notUsejQueryMobile){
//	//                $.mobile.loading('hide');
//	//            }
//	//        }
//	
//	        GlueJS.history.start();
//	    });
//	
//	    if(GlueJS.validationInit) {
//	        GlueJS.Validation();
//	    }
//	    this.triggerMethod = GlueJS.triggerMethod;
//	};
//	
//	_.extend(GlueJS.App.prototype, Backbone.Events, /** @lends GlueJS.App# */{
//	    /**
//	     * Application이 시작 될 때 자동으로 실행 할 Callback function을 추가한다.
//	     * @param {function} initializer 실행할 Callback function
//	     * @returns {void}
//	     * @example
//		HelloWorldApp.<b>addInitializer</b>(function(options) {
//		    GlueJS.debug('HelloWorldApp Initializer Run');
//		});
//	     */
//	    addInitializer: function(initializer) {
//	        this._initCallbacks.add(initializer);
//	    },
//	
//	    /**
//	     * Application을 시작하며 설정한 options객체를 초기화 이벤트에 전달하여 실행한다.
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     * @example
//		HelloWorldApp.<b>start</b>();
//	     */
//	    start: function(options) {
//	        this.triggerMethod("initialize:before", options);
//	        this._initCallbacks.run(options, this);
//	        this.triggerMethod("initialize:after", options);
//	
//	        this.triggerMethod("start", options);
//	    }
//	});
//	
//	GlueJS.App.extend = GlueJS.extend;
//	
//	/**
//	 * Application에서 설정한 URL변경, 이벤트 발생 정보에 대한 처리 method를 정의하고 View와 Model을 제어한다.
//	 * @class Application에서 설정한 URL변경, 이벤트 발생 정보에 대한 처리 method를 정의하고 View와 Model을 제어한다.
//	 * @param {object} options 설정 option객체
//	 * @constructor
//	 * @returns {void}
//	 * @see GlueJS.App
//	 * @example
//	// #HelloWorldController.js 정의
//	define(
//	    function() {
//	        var HelloWorldController = <b>GlueJS.Controller.extend</b>({
//	            initialize: function(options) {
//	                GlueJS.loadModule('HelloWorldView').show();
//	            }
//	        });
//	        return HelloWorldController;
//	    }
//	);
//	 * @example
//	// #app.js
//	var HelloWorldApp = new GlueJS.App({
//	    <b>controller: 'HelloWorldController'</b>,
//	    ......
//	    ......
//	
//	 * @example
//	// 사용
//	var helloWorldController = GlueJS.loadModule(<b>'HelloWorldController'</b>);
//	 */
//	GlueJS.Controller = function(options) {
//	    this.triggerMethod = GlueJS.triggerMethod;
//	    this.options = options || {};
//	
//	    if (_.isFunction(this.initialize)) {
//	        this.initialize(this.options);
//	    }
//	};
//	
//	GlueJS.Controller.extend = GlueJS.extend;
//	
//	_.extend(GlueJS.Controller.prototype, Backbone.Events, /** @lends GlueJS.Controller# */{
//	    /**
//	     * Controller의 인스턴스가 생성될때 자동으로 실행한다.
//	     * @function
//	     * @param
//	     * @returns {void}
//	     * @example
//	define(
//	    function() {
//	        var HelloWorldController = GlueJS.Controller.extend({
//	            <b>initialize</b>: function(options) {
//	                GlueJS.loadModule('HelloWorldView').show();
//	            }
//	        });
//	        return HelloWorldController;
//	    }
//	);
//	     */
//	    initialize: null,
//	    /**
//	     * 생성된 인스턴스를 삭제하고 Application에서 설정된 Controller를 해제한다.
//	     * @param
//	     * @returns {void}
//	     * @example
//	helloWorldController.<b>close</b>();
//	     */
//	    close: function() {
//	        this.stopListening();
//	        this.triggerMethod("close");
//	        this.unbind();
//	    }
//	});
//	
//	/**
//	 * Application에 의해 생성되며 Navigator역활을 하고 Application에 설정된 Route, Event정보와 Controller의 method를 연결(바인드)한다.
//	 * @class Application에 의해 생성되며 Navigator역활을 하고 Application에 설정된 Route, Event정보와 Controller의 method를 연결(바인드)한다.
//	 * @example
//	// GlueJS.App이 초기화 되면서 자동으로 실행된다.
//	GlueJS.AppRouter = new GlueJS.Router();
//	 */
//	GlueJS.Router = Backbone.Router.extend(/** @lends GlueJS.Router# */{
//	    /**
//	     * GlueJS.Router를 초기화 한다.
//	     * @private
//	     * @param
//	     * @returns {void}
//	     */
//	    initialize: function() {
//	        this.routesHit = 0;
//	        GlueJS.history.on('route', function() {
//	            this.routesHit++;
//	        }, this);
//	        document.getElementsByTagName('html')[0].style.display = "block";
//	    },
//	    /**
//	     * 이전 이벤트 및 화면으로 이동한다.
//	     * @param
//	     * @returns {void}
//	     * @example
//	GlueJS.AppRouter.<b>back</b>();
//	     */
//	    back: function() {
//	        if (this.routesHit > 1) {
//	            window.history.back();
//	        } else {
//	            this.navigate(this.init_navigate, {
//	                trigger: true,
//	                replace: true
//	            });
//	        }
//	    },
//	    /**
//	     * GlueJS.App에 설정된 Route와 Controller의 method를 연결한다.
//	     * @private
//	     * @param {object} controller Controller객체
//	     * @param {object} appRoutes Route정보와 실행 될 Controller의 method
//	     * @returns {void}
//	     * @see GlueJS.App
//	     * @example
//	// #app.js
//	<b>appRoutes</b>: {
//	    'helloworld': 'helloworld',
//	    '*actions': 'defaultAction'
//	}
//	     * @example
//	// GlueJS.App이 초기화 되면서 자동으로 실행된다.
//	GlueJS.AppRouter.processAppRoutes(controller, options.appRoutes);
//	     */
//	    processAppRoutes: function(controller, appRoutes) {
//	        var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
//	        _.each(routeNames, function(route) {
//	            var methodName = appRoutes[route];
//	            var method = controller[methodName];
//	            if (!method) {
//	                throw new Error("GlueJS.App appRoutes method '" + methodName + "' was not found on the controller");
//	            }
//	            this.route(route, methodName, _.bind(method, controller));
//	        }, this);
//	    },
//	    /**
//	     * GlueJS.App에 설정된 Event와 Controller의 method를 연결한다.
//	     * @private
//	     * @param {object} controller Controller객체
//	     * @param {object} appEvents Evnet정보와 실행 될 Controller의 method
//	     * @returns {void}
//	     * @see GlueJS.App
//	     * @example
//	// #app.js
//	<b>appEvents</b>: {
//	    'click:#helloworld_btn': 'btn_click'
//	}
//	     * @example
//	// GlueJS.App이 초기화 되면서 자동으로 실행된다.
//	GlueJS.AppRouter.processAppEvents(controller, options.appEvents);
//	     */
//	    processAppEvents: function(controller, appEvents) {
//	        if(appEvents) {
//	            var body = $("body");
//	            var eventNames = _.keys(appEvents).reverse();
//	            _.each(eventNames, function(eventName) {
//	                var methodName = appEvents[eventName];
//	                var method = controller[methodName];
//	                if (!method) {
//	                    throw new Error("GlueJS.App appEvents method '" + methodName + "' was not found on the controller");
//	                }
//	                var eventInfo = eventName.split(":");
//	                body.on(eventInfo[0], eventInfo[1], method);
//	            });
//	        }
//	    }
//	});
//	
//	/**
//	 * 여러 Template을 사용할 수 있도록 Template Strategy를 제공하고
//	 * Model, Template과 연동하여 화면에 표시하는 과정을 자동화 한다.
//	 * @class 여러 Template을 사용할 수 있도록 Template Strategy를 제공하고
//	 * Model, Template과 연동하여 화면에 표시하는 과정을 자동화 한다.
//	 * @example
//	define(
//	    function() {
//	        var HelloWorldView = <b>GlueJS.View.extend</b>({
//	            el: '#home',
//	            template: GlueJS.loadModule('helloWorldTemplate'),
//	            model: GlueJS.loadModule('HelloWorldModel')
//	        });
//	        return HelloWorldView;
//	    }
//	);
//	
//	 */
//	GlueJS.View = Backbone.View.extend(/** @lends GlueJS.View# */{
//	    triggerMethod: GlueJS.triggerMethod,
//	    /**
//	     * 뷰의 el요소에 화면을 표시 할 때 기존내용의
//	     * 삭제여부를 판단한다. (html:삭제, append:추가)
//	     * @type string
//	     * @default html
//	     */
//	    method: "html",
//	    /**
//	     * 유효성 검사여부를 지정한다.
//	     * @type boolean
//	     * @default false
//	     */
//	    validation: false,
//	    /**
//	     * 뷰에서 템플릿을 처리할 모듈을 설정한다. 설정하지 않을 경우 GlueJS.templateStrategy에 설정된 모듈을 이용한다.
//	     * <br>* <b>underscore-template</b> : Underscore.js에서 제공하는 템플릿 모듈이며 GlueJS의 Default모듈
//	     * <br>* <b>underscore-selector-template</b> : selector를 이용하여 underscore-template을 로딩하는 템플릿 모듈
//	     * <br>* <b>handlebars-template</b> : Mustache를 기반으로 구현한 템플릿 모듈
//	     * <br>* <b>javascript-template</b> : View에 정의한 javascript를 로딩하는 템플릿 모듈
//	     * @type string
//	     * @default underscore-template
//	     * @see GlueJS.templateStrategy
//	     */
//	    templateStrategy: 'underscore-template',
//	    template: null,
//	    /*template: function(templateName) {
//	        var template = require(['text!templates/' + templateName +'.html']);
//	        GlueJS.MODULES[templateName] = template;
//	        console.log("already loaded");
//	    },*/
//	
//	    /**
//	     * 뷰의 render method를 실행하기 전에 실행한다.
//	     *
//	     * @function
//	     * @param
//	     * @returns {void}
//	     * @example
//	define(
//	    function() {
//	        var HelloWorldView = GlueJS.View.extend({
//	            el: '#home',
//	            template: GlueJS.loadModule('helloWorldTemplate'),
//	            <b>onBeforeRender</b>: function() {
//	                GlueJS.log('onBeforeRender');
//	            }
//	        });
//	        return HelloWorldView;
//	    }
//	);
//	     */
//	    onBeforeRender: null,
//	    /**
//	     * 뷰의 render method를 실행하고 실행한다.
//	     * @function
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     * @example
//	define(
//	    function() {
//	        var HelloWorldView = GlueJS.View.extend({
//	            el: '#home',
//	            template: GlueJS.loadModule('helloWorldTemplate'),
//	            <b>onAfterRender</b>: function() {
//	                GlueJS.log('onAfterRender');
//	            }
//	        });
//	        return HelloWorldView;
//	    }
//	);
//	     */
//	    onAfterRender: null,
//	    /**
//	     * 뷰의 화면처리가 끝난 후에 실행한다.
//	     * @function
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     * @example
//	define(
//	    function() {
//	        var HelloWorldView = GlueJS.View.extend({
//	            el: '#home',
//	            template: GlueJS.loadModule('helloWorldTemplate'),
//	            <b>onEndRender</b>: function() {
//	                GlueJS.log('onEndRender');
//	            }
//	        });
//	        return HelloWorldView;
//	    }
//	);
//	     */
//	    onEndRender: null,
//	    /**
//	     * 템플릿 Strategy에서 재정의 할 function 초기화
//	     * @private
//	     * @param {object} options 설정 option객체
//	     * @returns {string}
//	     */
//	    getTemplate: function() {
//	        return "";
//	    },
//	    /** 현재 뷰의 el 속성을 변경한다.
//	     * @param {string} element 화면의 요소명
//	     * @returns {void}
//	     */
//	    setEl: function(element) {
//	        this.$el = $(element);
//	    },
//	    /**
//	     * 현재 뷰 객체의 자원을 해제하고 이벤트 리스너를 제거한다.
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     */
//	    dispose: function(options) {
//	        this.triggerMethod("before:dispose", options);
//	        this.undelegateEvents();
//	        this.remove();
//	        this.triggerMethod("after:dispose", options);
//	        (function() {
//	            "use strict";
//	            return this;
//	        }).call(null);
//	    },
//	    /**
//	     * 설정된 템플릿 Strategy에 따라 템플릿을 가져오는 function을 재정의 한다.
//	     * @constructs
//	     * @private
//	     * @param {object} options 설정 option객체
//	     */
//	    constructor: function(options) {
//	        Backbone.View.prototype.constructor.apply(this, GlueJS.slice(arguments));
//	        if(options) {
//	            _.extend(this, _.pick(options, 'method'));
//	        }
//	
//	        var templateName = GlueJS.getOption(this, "template");
//	        var templateCopy = GlueJS.loadModule(templateName);
//	        var modelName = GlueJS.getOption(this, "model");
//	        var collectionName = GlueJS.getOption(this, "collection");
//	
//	        if(typeof modelName !== 'undefined'){
//	    		var model = GlueJS.loadModule(modelName);
//	    		this['model'] = model;
//	        } else if (typeof collectionName !== 'undefined') {
//	    		console.log(" ### collection name : ", collectionName);
//	    		var collection = GlueJS.loadModule(collectionName);
//	    		this['collection'] = collection;
//	        } else {
//	        	console.log("Alert! you need to set a model or a collection in the view");
//	        }
//	
//	        switch(this.templateStrategy || GlueJS.templateStrategy) {
//	            case "underscore-template" :
//	                this.getTemplate = function(data){
//	                    return _.template(templateCopy, data);
//	                };
//	            break;
//	            case "underscore-selector-template" :
//	                this.getTemplate = function(data){
//	                    return _.template($(templateCopy).html(), data);
//	                };
//	            break;
//	            case "handlebars-template" :
//	                this.getTemplate = function(data){
//	                    hb = Handlebars.compile(templateCopy);
//	                    return hb(data);
//	                };
//	            break;
//	            case "javascript-template" :
//	                switch (typeof templateOption) {
//	                    case "string" :
//	                    this.getTemplate = function(data){
//	                        return templateCopy;
//	                    };
//	                    break;
//	                    case "function" :
//	                    this.getTemplate = templateCopy;
//	                    break;
//	                }
//	            break;
//	        }
//	        var validation = GlueJS.getOption(this, "validation");
//	        if(validation) {
//	            Backbone.Validation.bind(this);
//	            if(this.onAfterRender){
//	                var tempFunc = this.onAfterRender;
//	                _.extend(this, {
//	                    onAfterRender: function() {
//	                        tempFunc();
//	                        this.stickit();
//	                    }
//	                });
//	            } else {
//	                _.extend(this, {
//	                    onAfterRender: function() {
//	                        this.stickit();
//	                    }
//	                });
//	            }
//	            if(this.remove){
//	                var tempFunc = this.remove;
//	                _.extend(this, {
//	                    remove: function() {
//	                        tempFunc();
//	                        Backbone.Validation.unbind(this);
//	                        return Backbone.View.prototype.remove.apply(this, arguments);
//	                    }
//	                });
//	            } else {
//	                _.extend(this, {
//	                    remove: function() {
//	                        Backbone.Validation.unbind(this);
//	                        return Backbone.View.prototype.remove.apply(this, arguments);
//	                    }
//	                });
//	            }
//	        }
//	    },
//	    /**
//	     * 뷰에 모델 또는 콜렉션 객체가 존재하면 데이터를 동기화하고 뷰의 render method를 실행한다.
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     * @example
//	GlueJS.loadModule('HelloWorldView').<b>show</b>();
//	     */
//	    show: function(options) {
//	        var options = options || {};
//	
//	        if(this.model && (this.model.url || this.model.urlRoot || this.model.localStorage)){
//	            var self = this;
//	            this.model.fetch(_.extend(options, {
//	                success: function() {
//	                    self.render(options);
//	                }
//	            }));
//	        } else if(this.collection && (this.collection.url || this.collection.urlRoot || this.collection.localStorage)){ // && typeof this.collection.url !== "function"
//	            var self = this;
//	            this.collection.fetch(_.extend(options, {
//	                success: function(){
//	                    self.render(options);
//	                }
//	            }));
//	        } else {
//	            this.render(options);
//	        }
//	    },
//	    /**
//	     * 설정된 템플릿, 템플릿 Strategy, 데이터를 처리하여 HTML을 화면에 표시한다.
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     * @example
//	GlueJS.loadModule('HelloWorldView').<b>render</b>();
//	     */
//	    render: function(options) {
//	        /*
//	         * 기존에 설정된 el이 있지만 현재 DOM속성에 없을 경우
//	         * View를 render할 때 el을 다시 설정하도록 하였다.
//	         */
//	        if(!this.el && this.$el.selector) {
//	            this.setEl(this.$el.selector);
//	        }
//	
//	        this.triggerMethod("before:render", options);
//	        this.triggerMethod("render", options);
//	        if(options && options.transition) {
//	            if(!$('#' + this.cid + '_home')[0]){
//	                this.$el = $('<div />');
//	                this.$el.attr('data-role', 'page');
//	                this.$el.attr('id', this.cid+'_home');
//	            }
//	        }
//	        switch (options && options.method || this.method) {
//	            case "html":
//	                this.$el.html(this.getTemplate(this.data || (this.model && {model: this.model.attributes}) || (this.collection && {collection: this.collection.models}) || null));
//	                break;
//	            case "append":
//	                this.$el.append(this.getTemplate(this.data || (this.model && {model: this.model.attributes}) || (this.collection && {collection: this.collection.models}) || null));
//	                break;
//	        }
//	
//	        this.triggerMethod("after:render", options);
//	
//	        if(this.childViews) {
//	            _.each(this.childViews, function(viewName) {
//	                GlueJS.loadModule(viewName).show();
//	            });
//	        }
//	        if(!GlueJS.notUsejQueryMobile){
//	            if(options && options.transition) {
//	                console.log('transition');
//	                $('body').append(this.$el);
//	                $.mobile.changePage(this.$el, {
//	                    changeHash: true,
//	                    transition: options.transition
//	                });
//	            }
//	            this.$el.trigger('create');
//	            $.mobile.resetActivePageHeight();
//	
//	            // select tag에 data-native-ment 속성이 false일 경우
//	            // jQuery Mobile에서 생성하는 id-button element를 찾아서
//	            // listbox popup을 여는 event를 등록한다.
//	            _.each($('select[data-native-menu$="false"]'), function(element){
//	                $('#' + element.id + '-button').click(function(e) {
//	                    e.preventDefault();
//	                    $('#' + element.id + '-listbox').popup('open', {
//	                        positionTo: e.target
//	                    });
//	                });
//	            });
//	            // table tag에 data-mode속성이 columntoggle일 경우
//	            // jQuery Mobile에서 생성하는 toggle button의 css를 찾아서
//	            // column toggle popup을 여는 event를 등록한다.
//	            _.each($('.ui-table-columntoggle-btn'), function(element){
//	                $(element).click(function(e) {
//	                    e.preventDefault();
//	                    $(e.target.hash).popup('open', {
//	                        positionTo: e.target
//	                    });
//	                });
//	            });
//	        }
//	        this.triggerMethod("end:render", options); // ###안전방재 배포
//	    }
//	});
//	
//	
//	var _set = Backbone.Collection.prototype.set;
//	
//	/**
//	 * Model의 정렬된 집합이며 service property가 있을 경우 Backbone.Service를 이용하여
//	 * url, targets를 조합하여 Collection의 method로 추가한다.
//	 * (RESTful방식을 지원하지 않는 서버에서 Backbone의 기능을 사용하도록 지원)
//	 * @class Model의 정렬된 집합이며 service property가 있을 경우 Backbone.Service를 이용하여
//	 * url, targets를 조합하여 Collection의 method로 추가한다.
//	 * (RESTful방식을 지원하지 않는 서버에서 Backbone의 기능을 사용하도록 지원)
//	 * @example
//	define(
//	    function() {
//	        var HelloWorldCollection = <b>GlueJS.Collection.extend</b>({
//	            url: 'js/models/HelloWorld.json',
//	            model: GlueJS.loadModule('HelloWorldModel', true)
//	        });
//	        return HelloWorldCollection;
//	    }
//	);
//	 */
//	
//	
//	GlueJS.Collection = Backbone.Collection.extend(/** @lends GlueJS.Collection# */{
//	    /**
//	     * Backbone.Service 객체 설정<br>
//	     * Backbone.Service는 서버가 RESTful방식을 제공하지 않을 경우에도
//	     * GlueJS의 Collection 또는 Model을 사용할 수 있도록 도와주는 Backbone.js의 플러그인이다.
//	     * @type object
//	     * @default null
//	     * @see <a target='_blank' href='https://github.com/mkuklis/backbone.service'>Backbone.Service</a>
//	     * @example
//	define([
//	    <b>'backbone.service'</b>
//	], function() {
//	    var BackboneServiceCollection = GlueJS.Collection.extend({
//	        <b>service</b>: {
//	            <b>url</b>: "http://localhost:8080/sample_webservice",
//	            <b>targets</b>: {
//	                deptList: "/json.do?ServiceName=ws-dept-service",
//	                deptInsert: ["/json.do?ServiceName=ws-dept-service&insert=1", "post"],
//	                deptModify: "/json.do?ServiceName=ws-dept-service&modify=1",
//	                deptDelete: ["/json.do?ServiceName=ws-dept-service&delete=1", "get"]
//	            }
//	        },
//	        comparator: 'DEPTNO'
//	    });
//	    return BackboneServiceCollection;
//	});
//	     */
//	
//	/*	// 추가
//		model: null,*/
//	
//	    service: null,
//	    /**
//	     * Backbone.localStorage 객체 설정<br>
//	     * Backbone.localStorage는 Browser의 Local Storage 영역에 데이터를 쉽게
//	     * 관리 할 수 있도록 도와주는 Backbone.js의 플러그인이다.
//	     * @type object
//	     * @default null
//	     * @example
//	define([
//	    <b>'backbone.localStorage'</b>
//	], function(LocalStorage) {
//	    var BackboneLocalStorageCollection = GlueJS.Collection.extend({
//	        model: GlueJS.loadModule('BackboneLocalStorageModel', false),
//	        <b>localStorage: new Backbone.LocalStorage("backbone-local")</b>,
//	        ......
//	        ......
//	    });
//	    return BackboneLocalStorageCollection;
//	});
//	     * @see <a target='_blank' href='https://github.com/jeromegn/Backbone.localStorage'>Backbone localStorage</a>
//	     */
//	    localStorage: null,
//	    /**
//	     * Backbone.Service를 이용 url, targets를 조합하여 Collection의 method로 추가한다.
//	     * @constructs
//	     * @private
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     */
//	    constructor: function(options) {
//	        Backbone.Collection.prototype.constructor.apply(this, GlueJS.slice(arguments));
//	        this.options = options;
//	
//	        // 3.27(월) 추가
//	//        console.log("this.model : ", this.model);
//	//        var templateCopy = GlueJS.loadModule(this.model);
//	//        console.log("templateCopy : ", templateCopy);
//	
//	        var modelName = GlueJS.getOption(this, "model");
//			console.log("model name : ", modelName);
//	
//			var model = GlueJS.loadModule(modelName, false);
//			this.model = model;
//	
//	
//	//		console.log("@@@@@@ GlueJS.loadModule(modelName, false) : ", GlueJS.loadModule(modelName, true).url);
//	        var service = GlueJS.getOption(this, "service");
//	        console.log("@@@ Service constructor : ", service);
//	        if(service) {
//	            if(!Backbone.emulateJSON) {
//	                Backbone.emulateJSON = true;
//	            }
//	            var backboneService = new Backbone.Service({
//	                url: service.url,
//	                targets: service.targets
//	            });
//	
//	            _.extend(this, backboneService);
//	        }
//	    },
//	    /**
//	     * collection의 model에 idAttributes 속성이 배열로 있을 경우
//	     * model에서 해당속성값을 조합하여 model의 id로 지정한다.
//	     * backbone-composite-keys 라이브러리를 사용하는 경우에는 collection안의
//	     * model들이 새로 생성되는 문제가 있어 참고하여 작성하였다.
//	     * @private
//	     * @param {array} models Model객체 배열
//	     * @param {object} options 설정 option객체
//	     * @returns {object} Backbone.Collection.prototype.set.apply 실행
//	     * @see <a target='_blank' href='https://github.com/caseywebdev/backbone-composite-keys'>backbone-composite-keys<a/>
//	     */
//	    set: function(models, options) {
//	        var idAttributes = this.model.prototype.idAttributes;
//	        if (idAttributes && idAttributes instanceof Array) {
//	            _.each(models, function(model) {
//	                _.extend(model, {
//	                    id: GlueJS.generateId(idAttributes, model)
//	                });
//	            });
//	        }
//	        return _set.apply(this, arguments);
//	    }
//	});
//	
//	/**
//	 * model에서 idAttributes에 해당하는 속성 값들을 '-'문자와 조합하여 반환한다.
//	 * @private
//	 * @param {array} idAttributes model에서 조합하는 속성명
//	 * @param {object} model 데이터 객체
//	 * @returns {string} 속성값1-속성값2-속성값n
//	 */
//	GlueJS.generateId = function(idAttributes, model) {
//	    var index, indexes, val, _i, _len;
//	    indexes = [];
//	    for (_i = 0, _len = idAttributes.length; _i < _len; _i++) {
//	        index = idAttributes[_i];
//	        if ((val = model[index]) == null) {
//	            return void 0;
//	        }
//	        indexes.push(val);
//	    }
//	    return indexes.join('-');
//	};
//	
//	/**
//	 * Application의 데이터 및 데이터와 관련된 로직을 담당하며
//	 * service property가 있을 경우 Backbone.Service를 이용하여 url, targets를 조합하여
//	 * Model의 method로 추가한다.
//	 * (RESTful방식을 지원하지 않는 서버에서 Backbone의 기능을 사용하도록 지원)
//	 * @class Application의 데이터 및 데이터와 관련된 로직을 담당하며
//	 * service property가 있을 경우 Backbone.Service를 이용하여 url, targets를 조합하여
//	 * Model의 method로 추가한다.
//	 * (RESTful방식을 지원하지 않는 서버에서 Backbone의 기능을 사용하도록 지원)
//	 * @example
//	define(
//	    function() {
//	        var HelloWorldModel = <b>GlueJS.Model.extend</b>({
//	            url: 'js/models/HelloWorld.json'
//	        });
//	        return HelloWorldModel;
//	    }
//	);
//	 */
//	GlueJS.Model = Backbone.Model.extend(/** @lends GlueJS.Model# */{
//	    /**
//	     * Backbone.Service 객체 설정<br>
//	     * Backbone.Service는 서버가 RESTful방식을 제공하지 않을 경우에도
//	     * GlueJS의 Collection 또는 Model을 사용할 수 있도록 도와주는 Backbone.js의 플러그인이다.
//	     * @type object
//	     * @default null
//	     * @see <a target='_blank' href='https://github.com/mkuklis/backbone.service'>Backbone.Service</a>
//	     * @example
//	define([
//	    <b>'backbone.service'</b>
//	], function() {
//	    var BackboneServiceModel = GlueJS.Model.extend({
//	        <b>service</b>: {
//	            <b>url</b>: "http://localhost:8080/sample_webservice",
//	            <b>targets</b>: {
//	                deptSelect: "/json.do?ServiceName=ws-dept-service",
//	                deptInsert: ["/json.do?ServiceName=ws-dept-service&insert=1", "post"],
//	                deptModify: "/json.do?ServiceName=ws-dept-service&modify=1",
//	                deptDelete: ["/json.do?ServiceName=ws-dept-service&delete=1", "get"]
//	            }
//	        }
//	    });
//	    return BackboneServiceModel;
//	});
//	     */
//	    service: false,
//	    /**
//	     * Backbone.localStorage 객체 설정<br>
//	     * Backbone.localStorage는 Browser의 Local Storage 영역에 데이터를 쉽게
//	     * 관리 할 수 있도록 도와주는 Backbone.js의 플러그인이다.
//	     * @type object
//	     * @default null
//	     * @example
//	define([
//	    <b>'backbone.localStorage'</b>
//	], function(LocalStorage) {
//	    var BackboneLocalStorageModel = GlueJS.Model.extend({
//	        <b>localStorage: new Backbone.LocalStorage("backbone-local")</b>,
//	        ......
//	        ......
//	    });
//	    return BackboneLocalStorageModel;
//	});
//	     * @see <a target='_blank' href='https://github.com/jeromegn/Backbone.localStorage'>Backbone localStorage</a>
//	     */
//	    localStorage: null,
//	    /**
//	     * Backbone.Service를 이용 url, targets를 조합하여 Model의 method로 추가한다.
//	     * @constructs
//	     * @private
//	     * @param {object} options 설정 option객체
//	     * @returns {void}
//	     */
//	    constructor: function(options) {
//	        Backbone.Model.prototype.constructor.apply(this, GlueJS.slice(arguments));
//	        this.options = options;
//	        var service = GlueJS.getOption(this, "service");
//	        if(service) {
//	            if(!Backbone.emulateJSON) {
//	                Backbone.emulateJSON = true;
//	            }
//	            var backboneService = new Backbone.Service({
//	                url: service.url,
//	                targets: service.targets
//	            });
//	            _.extend(this, backboneService);
//	        }
//	    }
//	});
//	
//	/**
//	 * backbone.validation 라이브러리의 error message를 초기화하고 validator 동작을 추가한다.<br>
//	 * Backbone.Validation은 form을 통하여 사용자가 입력한 내용을 Model 객체에 반영할 때
//	 * 입력한 값의 유효성을 검사할 수 있도록 도와주는 Backbone.js의 플러그인이다.
//	 * @class backbone.validation 라이브러리의 error message를 초기화하고 validator 동작을 추가한다.
//	 * @see GlueJS.validationInit
//	 * @see GlueJS.View#validation
//	 * @see <a target='_blank' href='https://github.com/thedersen/backbone.validation'>Backbone.Validation</a>
//	 */
//	GlueJS.Validation = function() {
//	    $.getJSON('js/libs/glue_validation.json')
//	    .done(function(data) {
//	        _.extend(Backbone.Validation.messages, data);
//	        GlueJS.log('Error messages of glue_validation.json file is applied.')
//	    }).fail(function() {
//	        GlueJS.debug('glue_validation.json file is not exist, default error messages use.');
//	    });
//	
//	    _.extend(Backbone.Validation.callbacks, {
//	        valid: function(view, attr, selector) {
//	            var $el = view.$('[name=' + attr + ']'),
//	                $group = $el.closest('div');
//	            $group.find("#error_"+attr).remove();
//	        },
//	        invalid: function(view, attr, error, selector) {
//	            var $el = view.$('[name=' + attr + ']');
//	            if($("#error_"+attr).length == 0) {
//	                $(_.last($el)).after($('<span id="error_'+attr+'">').addClass("help-block form-error").html(error));
//	            } else {
//	                $("#error_"+attr).html(error);
//	            }
//	        }
//	    });
//	};
//	
//	/**
//	 * 정의한 템플릿과 데이터를 가지고 임시 생성한 뷰를 이용하여 팝업을 화면에 표시한다.
//	 * @class 정의한 템플릿과 데이터를 가지고 임시 생성한 뷰를 이용하여 팝업을 화면에 표시한다.
//	 * @param {object} options 설정 option객체
//	 * @param {string} options.popupId popup div id
//	 * @param {string} options.template 화면에 나타나는 template html
//	 * @param {object} options.data 데이터
//	 * @param {string} options.transition transition
//	 * @example
//	<b>GlueJS.Popup</b>({
//	    popupId: 'hello_world_popup',
//	    template: GlueJS.loadModule('helloWorldTemplate'),
//	    data: GlueJS.loadModule('HelloWorldCollection').get(id).toJSON(),
//	    transition: 'slide'
//	});
//	 * @example
//	// Open
//	$('#hello_world_popup').popup('open');
//	// Close
//	$('#hello_world_popup').popup('close');
//	 */
//	GlueJS.Popup = function(options) {
//	    if(options.popupId && options.template) {
//	        $( "[id|='" + options.popupId + "']" ).remove();
//	
//	        if(!$('#glue_popup_place').length){
//	            $('body').append($('<div id="glue_popup_place"></div>'));
//	        }
//	
//	        var PopupView = GlueJS.View.extend({
//	            el: '#glue_popup_place',
//	            template: options.template,
//	            initialize: function(){
//	                this.data = {
//	                    data: options.data
//	                };
//	            }
//	        });
//	        var popupView = new PopupView();
//	        popupView.show();
//	        var popupOptions = {
//	            transition: options.transition || 'none'
//	        };
//	
//	        $('#' + options.popupId).popup('open', popupOptions);
//	        popupView.remove();
//	    } else {
//	        GlueJS.debug('popupId or template is not exist!');
//	    }
//	};

//}).call(this);
