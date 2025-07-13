'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Large-Allocation`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LargeAllocationHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Large-Allocation';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( LargeAllocationHttpResponseHeader.NAME, value );
	}
}
