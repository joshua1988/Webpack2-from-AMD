cordova.define("com.poscoict.mobile.stt", function(require, exports, module) {
	var exec = require('cordova/exec');
	module.exports = {
		startSTT: function(resultCallback, errorCallback, language, prompt) {
			var _language = (language || "ko-KR");
			var _prompt = (prompt || "Say!");
			exec(resultCallback, errorCallback, "STT", "startSTT", [_language, _prompt]);
		}
	};
});