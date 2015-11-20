define(function (require) {
	/**
	 * The Byline Prefix service.
	 */
	return function() {
		this.getBylinePrefixes = function() {
			return [ 'By', 'Photography By' ];
		}
	}
});