'use strict';

import { AbstractStatic } from '../../types/abstract-static.js';

/**
 * Represents a flagable enumeration of bindable HTML element proxy events.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableHtmlElementProxyEvents extends AbstractStatic
{
	/**
	 * Specifies that the binding must occur via all events of the HTML element.
	 * @type {Number}
	 */
	static get ALL()
	{
		return BindableHtmlElementProxyEvents.INPUT | BindableHtmlElementProxyEvents.CHANGE;
	}

	/**
	 * Specifies that the binding must occur via the `input` event of the HTML element.
	 * @type {Number}
	 */
	static get INPUT()
	{
		return 1;
	}

	/**
	 * Specifies that the binding must occur via the `change` event of the HTML element.
	 * @type {Number}
	 */
	static get CHANGE()
	{
		return 2;
	}
}
