'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Age`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AgeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Age';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AgeHttpResponseHeader.NAME, value );
	}
}
