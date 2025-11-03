'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Access-Control-Expose-Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlExposeHeadersHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Access-Control-Expose-Headers';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlExposeHeadersHttpResponseHeader.NAME, value );
	}
}
