'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Upgrade`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class UpgradeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Upgrade';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( UpgradeHttpResponseHeader.NAME, value );
	}
}
