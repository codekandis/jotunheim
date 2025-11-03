'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `WWW-Authenticate`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WwwAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'WWW-Authenticate';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( WwwAuthenticateHttpResponseHeader.NAME, value );
	}
}
