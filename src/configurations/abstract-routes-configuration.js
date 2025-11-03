'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents the base class of any routes configuration.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractRoutesConfiguration extends Abstract
{
	/**
	 * Stores the base route of the application.
	 * @type {string}
	 */
	__baseRoute = '';

	/**
	 * Stores the routes of the application.
	 * @type {Record<string, Class>}
	 */
	__routes = {};

	/**
	 * Gets the base route of the application.
	 * @returns {string} The base route of the application.
	 */
	get baseRoute()
	{
		return this.__baseRoute;
	}

	/**
	 * Gets the routes of the application.
	 * @returns {Record<string, Class>} The routes of the application.
	 */
	get routes()
	{
		return this.__routes;
	}
}
