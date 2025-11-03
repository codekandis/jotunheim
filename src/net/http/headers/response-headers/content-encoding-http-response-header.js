'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Content-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentEncodingHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Content-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ContentEncodingHttpResponseHeader.NAME, value );
	}
}
