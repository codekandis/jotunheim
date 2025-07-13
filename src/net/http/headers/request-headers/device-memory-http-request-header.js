'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Device-Memory`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DeviceMemoryHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Device-Memory';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( DeviceMemoryHttpRequestHeader.NAME, value );
	}
}
