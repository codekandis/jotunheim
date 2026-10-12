'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Content-Range`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentRangeHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Content-Range';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ContentRangeHttpRequestHeader.NAME, value );
	}
}
