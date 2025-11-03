'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Transfer-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TransferEncodingHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Transfer-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( TransferEncodingHttpRequestHeader.NAME, value );
	}
}
