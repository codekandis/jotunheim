'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Pragma`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PragmaHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Pragma';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( PragmaHttpResponseHeader.NAME, value );
	}
}
