define(function (require) {
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