'use strict';

import { Abstract } from '../../../types/abstract.js';

/**
 * Represents an HTTP header name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeaderNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP header name.
	 * @param {string} httpHeaderName The HTTP header name to prepare.
	 * @returns {string} The prepared HTTP header name.
	 */
	prepare( httpHeaderName )
	{
		return httpHeaderName
			.trim()
			.toLowerCase();
	}
}
