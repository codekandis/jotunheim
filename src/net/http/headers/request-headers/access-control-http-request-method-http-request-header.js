'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Access-Control-HttpRequest-Method`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlHttpRequestMethodHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Access-Control-HttpRequest-Method';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AccessControlHttpRequestMethodHttpRequestHeader.NAME, value );
	}
}
