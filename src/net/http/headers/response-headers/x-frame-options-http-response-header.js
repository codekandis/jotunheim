'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `X-Frame-Options`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XFrameOptionsHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'X-Frame-Options';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XFrameOptionsHttpResponseHeader.NAME, value );
	}
}
