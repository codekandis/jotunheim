'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `X-Forwarded-For`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XForwardedForHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'X-Forwarded-For';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( XForwardedForHttpRequestHeader.NAME, value );
	}
}
