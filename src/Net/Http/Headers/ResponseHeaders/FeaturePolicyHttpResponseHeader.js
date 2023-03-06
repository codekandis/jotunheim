'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Feature-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FeaturePolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Feature-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( FeaturePolicyHttpResponseHeader.NAME, value );
	}
}
