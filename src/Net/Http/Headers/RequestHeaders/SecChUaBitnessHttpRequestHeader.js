'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-CH-UA-Bitness`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaBitnessHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Sec-CH-UA-Bitness';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaBitnessHttpRequestHeader.NAME, value );
	}
}
