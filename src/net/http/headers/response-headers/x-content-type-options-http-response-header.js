'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `X-Content-Type-Options`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XContentTypeOptionsHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'X-Content-Type-Options';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XContentTypeOptionsHttpResponseHeader.NAME, value );
	}
}
