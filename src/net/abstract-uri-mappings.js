'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents the base class of any URI Mappings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractUriMappings extends Abstract
{
	/**
	 * Stores the schema of the mapped URI.
	 * @type {String}
	 */
	__schema = String.empty;

	/**
	 * Stores the host name of the mapped URI.
	 * @type {String}
	 */
	__host = String.empty;

	/**
	 * Stores the port of the mapped URI.
	 * @type {Number}
	 */
	__port = 0;

	/**
	 * Stores the base URI of the mapped URI.
	 * @type {String}
	 */
	__baseUri = String.empty;

	/**
	 * Stores the relative URI templates of the mapped URIs.
	 * @type {Object<String, String_ReplacementHandler>}
	 */
	__relativeUriTemplates = {};

	/**
	 * Gets the schema of the mapped URI.
	 * @returns {String} The schema of the mapped URI.
	 */
	get schema()
	{
		return this.__schema;
	}

	/**
	 * Gets the host name of the mapped URI.
	 * @returns {String} The host name of the mapped URI.
	 */
	get host()
	{
		return this.__host;
	}

	/**
	 * Gets the port of the mapped URI.
	 * @returns {Number} The port of the mapped URI.
	 */
	get port()
	{
		return this.__port;
	}

	/**
	 * Gets the base URI of the mapped URI.
	 * @returns {String} The base URI of the mapped URI.
	 */
	get baseUri()
	{
		return this.__baseUri;
	}

	/**
	 * Gets the relative URI templates of the mapped URIs.
	 * @returns {Object<String, String_ReplacementHandler>} The relative URI templates of the mapped URIs.
	 */
	get relativeUriTemplates()
	{
		return this.__relativeUriTemplates;
	}

	/**
	 * Gets a relative URI template specified by its name.
	 * @param {String} uriName The name of the relative URI template.
	 * @returns {String_ReplacementHandler} The relative URI template.
	 */
	getRelativeUriTemplate( uriName )
	{
		return this.__relativeUriTemplates[ uriName ];
	}
}
