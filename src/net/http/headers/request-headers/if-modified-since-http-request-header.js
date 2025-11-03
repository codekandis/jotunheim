'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `If-Modified-Since`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfModifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'If-Modified-Since';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfModifiedSinceHttpRequestHeader.NAME, value );
	}
}
