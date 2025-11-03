'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Accept-Ranges`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AcceptRangesHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Accept-Ranges';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AcceptRangesHttpResponseHeader.NAME, value );
	}
}
