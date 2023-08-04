'use strict';

import { AbstractStatic } from './AbstractStatic.js';

/**
 * Represents en enumeration of boolean strings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BooleanString extends AbstractStatic
{
	/**
	 * Represents the string representation of the boolean value `false`.
	 * @type {String}
	 */
	static get FALSE()
	{
		return 'FALSE';
	}

	/**
	 * Represents the string representation of the boolean value `true`.
	 * @type {String}
	 */
	static get TRUE()
	{
		return 'TRUE';
	}
}
