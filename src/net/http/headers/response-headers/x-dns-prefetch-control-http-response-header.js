'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `X-DNS-Prefetch-Control`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XDnsPrefetchControlHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'X-DNS-Prefetch-Control';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XDnsPrefetchControlHttpResponseHeader.NAME, value );
	}
}
