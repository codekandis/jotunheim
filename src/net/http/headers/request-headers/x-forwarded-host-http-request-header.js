'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `X-Forwarded-Host`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XForwardedHostHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'X-Forwarded-Host';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( XForwardedHostHttpRequestHeader.NAME, value );
	}
}
