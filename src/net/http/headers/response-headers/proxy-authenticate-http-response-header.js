'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Proxy-Authenticate`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ProxyAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Proxy-Authenticate';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ProxyAuthenticateHttpResponseHeader.NAME, value );
	}
}
