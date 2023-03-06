'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Strict-Transport-Security`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class StrictTransportSecurityHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Strict-Transport-Security';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( StrictTransportSecurityHttpResponseHeader.NAME, value );
	}
}
