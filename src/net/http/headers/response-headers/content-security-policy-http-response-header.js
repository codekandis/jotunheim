'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Content-Security-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentSecurityPolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Content-Security-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ContentSecurityPolicyHttpResponseHeader.NAME, value );
	}
}
