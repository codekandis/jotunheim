'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Accept-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AcceptEncodingHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Accept-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AcceptEncodingHttpRequestHeader.NAME, value );
	}
}
