'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Transfer-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TransferEncodingHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Transfer-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( TransferEncodingHttpRequestHeader.NAME, value );
	}
}
