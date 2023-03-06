'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Transfer-Encoding`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TransferEncodingHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Transfer-Encoding';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( TransferEncodingHttpResponseHeader.NAME, value );
	}
}
