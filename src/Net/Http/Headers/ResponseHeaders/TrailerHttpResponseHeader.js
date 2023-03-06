'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Trailer`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TrailerHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Trailer';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( TrailerHttpResponseHeader.NAME, value );
	}
}
