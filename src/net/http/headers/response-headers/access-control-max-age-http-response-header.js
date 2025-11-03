'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Access-Control-Max-Age`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlMaxAgeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Access-Control-Max-Age';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlMaxAgeHttpResponseHeader.NAME, value );
	}
}
