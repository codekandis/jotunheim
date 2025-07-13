'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Viewport-Width`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ViewportWidthHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Viewport-Width';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ViewportWidthHttpRequestHeader.NAME, value );
	}
}
