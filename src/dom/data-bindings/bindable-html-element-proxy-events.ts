'use strict';

/**
 * Represents a flag-based enumeration of bindable HTML element proxy events.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum BindableHtmlElementProxyEvents
{
	/**
	 * Specifies that the binding must occur via the `input` event of the HTML element.
	 */
	INPUT  = 1,

	/**
	 * Specifies that the binding must occur via the `change` event of the HTML element.
	 */
	CHANGE = 2,

	/**
	 * Specifies that binding occurs on both the `input` and `change` events of the HTML element.
	 */
	ALL    = INPUT | CHANGE
}
