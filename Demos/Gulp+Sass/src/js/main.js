// Avoid `console` errors in browsers that lack a console.
 (function() {
     var method;
     var noop = function () {};
     var methods = [
         'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
         'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
         'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
         'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
     ];
     var length = methods.length;
     var console = (window.console = window.console || {});

     while (length--) {
         method = methods[length];

         // Only stub undefined methods.
         if (!console[method]) {
             console[method] = noop;
         }
     }
 }());
(function ( window, document, undefined ) {

	'use strict';


	/**
	 * Selectors
	 */


	/**
	 * Methods
	 */


	/**
	 * Events/APIs/init
	 */


})( window, document );
//# sourceMappingURL=maps/main.js.map
