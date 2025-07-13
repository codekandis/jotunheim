'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Access-Control-HttpRequest-Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlHttpRequestHeadersHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Access-Control-HttpRequest-Headers';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AccessControlHttpRequestHeadersHttpRequestHeader.NAME, value );
	}
}
