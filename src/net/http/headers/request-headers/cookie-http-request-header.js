'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Cookie`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CookieHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Cookie';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( CookieHttpRequestHeader.NAME, value );
	}
}
