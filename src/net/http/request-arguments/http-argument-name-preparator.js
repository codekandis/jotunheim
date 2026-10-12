'use strict';

import { Abstract } from '../../../types/abstract.js';

/**
 * Represnte an HTTP argument name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpArgumentNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP argument name.
	 * @param {string} httpArgumentName The HTTP argument name to prepare.
	 * @returns {string} The prepared HTTP argument name.
	 */
	prepare( httpArgumentName )
	{
		return httpArgumentName.trim();
	}
}
