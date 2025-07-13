'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Expect-CT`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ExpectCtHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Expect-CT';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ExpectCtHttpResponseHeader.NAME, value );
	}
}
