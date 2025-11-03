'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Timing-Allow-Origin`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TimingAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Timing-Allow-Origin';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( TimingAllowOriginHttpResponseHeader.NAME, value );
	}
}
