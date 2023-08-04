'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents an HTTP redirector redirecting to URLs.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRedirector extends Abstract
{
	/**
	 * Stores the URI to redirect to.
	 * @type {URL}
	 */
	#_uri;

	/**
	 * Constructor method.
	 * @param uri The URI to redirect to.
	 */
	constructor( uri )
	{
		super();

		this.#_uri = uri;
	}

	/**
	 * Redirects to the URI.
	 */
	redirect()
	{
		window.location = this.#_uri;
	}
}
