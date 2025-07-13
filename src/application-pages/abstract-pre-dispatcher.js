'use strict';

import { Abstract } from '../types/abstract.js';
import { MethodIsAbstractException } from '../types/method-is-abstract-exception.js';

/**
 * Represents the base class of any pre-dispatcher.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractPreDispatcher extends Abstract
{
	/**
	 * Executes the pre-dispatcher.
	 * @param {URL} requestedUri The reuqested URI of the client.
	 * @param {PreDispatchmentState} dispatchmentState The dispatchment state.
	 */
	preDispatch( requestedUri, dispatchmentState )
	{
		throw MethodIsAbstractException.with_objectAndMethod( this, this.preDispatch );
	}
}
