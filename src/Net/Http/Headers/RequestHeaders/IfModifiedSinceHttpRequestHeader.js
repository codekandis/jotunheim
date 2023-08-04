'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `If-Modified-Since`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfModifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'If-Modified-Since';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfModifiedSinceHttpRequestHeader.NAME, value );
	}
}
