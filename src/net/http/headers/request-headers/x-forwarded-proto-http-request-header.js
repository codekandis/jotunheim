'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `X-Forwarded-Proto`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XForwardedProtoHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'X-Forwarded-Proto';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( XForwardedProtoHttpRequestHeader.NAME, value );
	}
}
