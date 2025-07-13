'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Access-Control-Allow-Methods`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlAllowMethodsHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Access-Control-Allow-Methods';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlAllowMethodsHttpResponseHeader.NAME, value );
	}
}
