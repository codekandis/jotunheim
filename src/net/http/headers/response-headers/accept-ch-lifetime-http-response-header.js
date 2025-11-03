'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Accept-CH-Lifetime`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AcceptChLifetimeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Accept-CH-Lifetime';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AcceptChLifetimeHttpResponseHeader.NAME, value );
	}
}
