'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Width`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WidthHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Width';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( WidthHttpRequestHeader.NAME, value );
	}
}
