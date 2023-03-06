'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Access-Control-Allow-Origin`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Access-Control-Allow-Origin';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlAllowOriginHttpResponseHeader.NAME, value );
	}
}
