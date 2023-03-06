'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Connection`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ConnectionHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Connection';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ConnectionHttpResponseHeader.NAME, value );
	}
}
