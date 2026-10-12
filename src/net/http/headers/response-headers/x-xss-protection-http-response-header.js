'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `X-XSS-Protection`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XXssProtectionHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'X-XSS-Protection';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XXssProtectionHttpResponseHeader.NAME, value );
	}
}
