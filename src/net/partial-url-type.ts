'use strict';

/**
 * Represents an enumeration of partial URL types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum PartialUrlType
{
	/**
	 * Specifies the protocol of the URL.
	 */
	PROTOCOL = 'PROTOCOL',

	/**
	 * Specifies the username of the URL.
	 */
	USERNAME = 'USERNAME',

	/**
	 * Specifies the password of the URL.
	 */
	PASSWORD = 'PASSWORD',

	/**
	 * Specifies the hostname of the URL.
	 */
	HOSTNAME = 'HOSTNAME',

	/**
	 * Specifies the port of the URL.
	 */
	PORT     = 'PORT',

	/**
	 * Specifies the pathname of the URL.
	 */
	PATHNAME = 'PATHNAME',

	/**
	 * Specifies the query string of the URL.
	 */
	SEARCH   = 'SEARCH',

	/**
	 * Specifies the hash of the URL.
	 */
	HASH     = 'HASH'
}
