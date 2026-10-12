'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Content-Type`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentTypeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Content-Type';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ContentTypeHttpResponseHeader.NAME, value );
	}
}
