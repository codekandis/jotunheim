'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Connection`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ConnectionHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Connection';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ConnectionHttpResponseHeader.NAME, value );
	}
}
