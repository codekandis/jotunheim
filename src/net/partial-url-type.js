'use strict';

import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Represents an enumeration of partial URL types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PartialUrlType extends AbstractStatic
{
	/**
	 * Specifies the protocol of the URL.
	 * @type {string}
	 */
	static get PROTOCOL()
	{
		return 'PROTOCOL';
	}

	/**
	 * Specifies the username of the URL.
	 * @type {string}
	 */
	static get USERNAME()
	{
		return 'USERNAME';
	}

	/**
	 * Specifies the password of the URL.
	 * @type {string}
	 */
	static get PASSWORD()
	{
		return 'PASSWORD';
	}

	/**
	 * Specifies the host name of the URL.
	 * @type {string}
	 */
	static get HOSTNAME()
	{
		return 'HOSTNAME';
	}

	/**
	 * Specifies the port of the URL.
	 * @type {string}
	 */
	static get PORT()
	{
		return 'PORT';
	}

	/**
	 * Specifies the path name of the URL.
	 * @type {string}
	 */
	static get PATHNAME()
	{
		return 'PATHNAME';
	}

	/**
	 * Specifies the query string of the URL.
	 * @type {string}
	 */
	static get SEARCH()
	{
		return 'SEARCH';
	}

	/**
	 * Specifies the hash of the URL.
	 * @type {string}
	 */
	static get HASH()
	{
		return 'HASH';
	}
}
