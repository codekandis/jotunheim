'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Access-Control-Allow-Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlAllowHeadersHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Access-Control-Allow-Headers';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlAllowHeadersHttpResponseHeader.NAME, value );
	}
}
