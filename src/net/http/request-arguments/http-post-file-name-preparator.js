'use strict';

import { Abstract } from '../../../types/abstract.js';

/**
 * Represents an HTTP POST file name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostFileNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP POST file name.
	 * @param {string} name The HTTP POST file name to prepare.
	 * @returns {string} The prepared HTTP POST file name.
	 */
	prepare( name )
	{
		return name.trim();
	}
}
