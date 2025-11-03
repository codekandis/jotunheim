'use strict';

import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Represents a randomizer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Randomizer extends AbstractStatic
{
	/**
	 * Gets a cryptographically secure random number `0 <= n < 1`.
	 * @return {number} The cryptographically secure random number `0 <= n < 1`.
	 */
	static randomNumber()
	{
		return crypto.getRandomValues(
			new Uint32Array( 1 )
		)[ 0 ] / 2 ** 32;
	}
}
