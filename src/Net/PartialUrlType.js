'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';

/**
 * Represents an enumeration of partial URL types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PartialUrlType extends AbstractStatic
{
	/**
	 * Specifies the protocol of the URL.
	 * @type {String}
	 */
	static get PROTOCOL()
	{
		return 'PROTOCOL';
	}

	/**
	 * Specifies the username of the URL.
	 * @type {String}
	 */
	static get USERNAME()
	{
		return 'USERNAME';
	}

	/**
	 * Specifies the password of the URL.
	 * @type {String}
	 */
	static get PASSWORD()
	{
		return 'PASSWORD';
	}

	/**
	 * Specifies the host name of the URL.
	 * @type {String}
	 */
	static get HOSTNAME()
	{
		return 'HOSTNAME';
	}

	/**
	 * Specifies the port of the URL.
	 * @type {String}
	 */
	static get PORT()
	{
		return 'PORT';
	}

	/**
	 * Specifies the path name of the URL.
	 * @type {String}
	 */
	static get PATHNAME()
	{
		return 'PATHNAME';
	}

	/**
	 * Specifies the query string of the URL.
	 * @type {String}
	 */
	static get SEARCH()
	{
		return 'SEARCH';
	}

	/**
	 * Specifies the hash of the URL.
	 * @type {String}
	 */
	static get HASH()
	{
		return 'HASH';
	}
}
