(function(factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	} else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	} else {
		/* jshint sub:true */
		window["collapsedMargin"] = factory();
	}
})(function() {
	"use strict";
	// https://www.sitepoint.com/collapsing-margins/

	/**
	 * Returns the hypothetical vertical margin between two elements, which will automatically be "collapsed" by CSS
	 * @param  {HTMLElement} el1       The first element, on the top
	 * @param  {HTMLElement} el2       The second element, on the bottom
	 * @return {Number}                The collapsed margin between the two elements
	 */
	function collapsedMargin(el1, el2) {
		var el1CSS = getComputedStyle(el1),
			el2CSS = getComputedStyle(el2),
			el1Margin2 = parseInt(el1CSS.marginBottom),
			el2Margin1 = parseInt(el2CSS.marginTop);

		if (el1 && el2
			&& el1.parentNode === el2.parentNode
			&& el1CSS.float === 'none'
			&& el2CSS.float === 'none'

			&& el1CSS.display !== 'inline-block'
			&& el2CSS.display !== 'inline-block'

			&& el1CSS.position !== 'absolute'
			&& el2CSS.position !== 'absolute'

			&& (el1Margin2 > 0 && el2Margin1 > 0 || el1Margin2 < 0 && el2Margin1 < 0)) {
			return Math.abs(el1Margin2) > Math.abs(el2Margin1) ? el1Margin2 : el2Margin1;
		} else {
			return (el1 ? el1Margin2 : 0) + (el2 ? el2Margin1 : 0);
		}
	}


	return collapsedMargin;
});
