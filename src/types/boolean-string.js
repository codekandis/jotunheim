'use strict';

import { AbstractStatic } from './abstract-static.js';

/**
 * Represents en enumeration of boolean strings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BooleanString extends AbstractStatic
{
	/**
	 * Represents the string representation of the boolean value `false`.
	 * @type {string}
	 */
	static get FALSE()
	{
		return 'FALSE';
	}

	/**
	 * Represents the string representation of the boolean value `true`.
	 * @type {string}
	 */
	static get TRUE()
	{
		return 'TRUE';
	}
}
