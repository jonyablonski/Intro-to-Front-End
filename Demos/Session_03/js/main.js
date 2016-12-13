(function ( window, document, undefined ) {

	'use strict';


	/**
	 * Selectors
	 */

	var elem = document.querySelector('.main-carousel');


	/**
	 * Methods
	 */


	/**
	 * Events/APIs/init
	 */

	// Initialize Flickity
	var flkty = new Flickity( elem, {
		contain: true
	});


})( window, document );