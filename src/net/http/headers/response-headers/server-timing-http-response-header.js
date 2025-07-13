'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Server-Timing`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ServerTimingHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Server-Timing';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ServerTimingHttpResponseHeader.NAME, value );
	}
}
