'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if a value is not a class.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValueIsNotAClassException extends LogicException
{
	/**
	 * @inheritdoc
	 */
	constructor()
	{
		super( 'The value is not a class.' );
	}
}
