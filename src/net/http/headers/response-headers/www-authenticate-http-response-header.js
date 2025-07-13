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
	 * @type {String}
	 */
	static get NAME()
	{
		return 'WWW-Authenticate';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( WwwAuthenticateHttpResponseHeader.NAME, value );
	}
}
