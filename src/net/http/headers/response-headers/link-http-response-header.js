'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Link`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LinkHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Link';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( LinkHttpResponseHeader.NAME, value );
	}
}
