define('prefixService/prefixService.js',['require'],function (require) {
	/**
	 * The Byline Prefix service.
	 */
	return function() {
		this.getBylinePrefixes = function() {
			return [ 'By', 'Photography By' ];
		}
	}
});
define('Block/BylineBlock',['require','prefixService/prefixService.js'],function (require) {
	/**
	 * The Byline Block.
	 */
	var PrefixService = require( 'prefixService/prefixService.js' );
	var prefixService = new PrefixService();
	var prefixes = prefixService.getBylinePrefixes();
	return function() {
		this.getBylinePrefixes = function() {
			return prefixes;
		}
	}
});
requirejs.config({
	baseUrl: 'scripts'
});
require(["Block/BylineBlock"], function(Block) {
	//This function is called when scripts/helper/util.js is loaded.
	//If util.js calls define(), then this function is not fired until
	//util's dependencies have loaded, and the util argument will hold
	//the module value for "helper/util".
	// require( '.js' );
	var block = new Block();
	debugger;
});
define("main.js", function(){});

