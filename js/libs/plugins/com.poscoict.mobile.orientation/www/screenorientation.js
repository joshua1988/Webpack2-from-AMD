cordova.define("com.poscoict.mobile.orientation", function(require, exports, module) {
	var exec = require('cordova/exec');
	module.exports = {
		//	    screenOrientation = {};
		setOrientation: function(orientation) {
			exec(null, null, "GlueOrientation", "screenOrientation", ['set', orientation]);
		}
	};
});