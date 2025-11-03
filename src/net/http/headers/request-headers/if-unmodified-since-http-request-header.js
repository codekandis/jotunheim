'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `If-Unmodified-Since`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfUnmodifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'If-Unmodified-Since';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfUnmodifiedSinceHttpRequestHeader.NAME, value );
	}
}
