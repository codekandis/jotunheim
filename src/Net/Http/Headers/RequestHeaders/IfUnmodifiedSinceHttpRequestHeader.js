'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `If-Unmodified-Since`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfUnmodifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'If-Unmodified-Since';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfUnmodifiedSinceHttpRequestHeader.NAME, value );
	}
}
