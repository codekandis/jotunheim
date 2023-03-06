'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Content-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentEncodingHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Content-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ContentEncodingHttpRequestHeader.NAME, value );
	}
}
