'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents the base class of any URI builder.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractUriBuilder extends Abstract
{
	/**
	 * Stores the URI mappings used to build any URI.
	 * @type {AbstractUriMappings}
	 */
	#_uriMappings;

	/**
	 * Constructor method.
	 * @param {AbstractUriMappings} uriMappings The URI mappings used to build any URI.
	 */
	constructor( uriMappings )
	{
		super();

		this.#_uriMappings = uriMappings;
	}

	/**
	 * Builds an absolute URI specified by the name of a relative URI.
	 * @param {string} uriName The name of the relative URI.
	 * @param {...string} replacements The additional replacements of the URI.
	 * @returns {URL} The build absolute URI.
	 */
	build( uriName, ...replacements )
	{
		return new URL(
			String.format`${ 0 }://${ 1 }:${ 2 }${ 3 }${ 4 }`(
				this.#_uriMappings.schema,
				this.#_uriMappings.host,
				this.#_uriMappings.port,
				this.#_uriMappings.baseUri,
				this.#_uriMappings.getRelativeUriTemplate( uriName )( ...replacements )
			)
		);
	}
}
