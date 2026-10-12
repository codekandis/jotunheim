'use strict';

import { AbstractStatic } from '../../../types/abstract-static.js';

/**
 * Represents the CSS selectors of the tab control.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TabControlSelector extends AbstractStatic
{
	/**
	 * Gets the CSS selector of the tab control.
	 * @type {string}
	 */
	static get TAB_CONTROL()
	{
		return '[data-control-type=\'TAB_CONTROL\']';
	}

	/**
	 * Gets the CSS selector of the tab control headers section.
	 * @type {string}
	 */
	static get TAB_CONTROL_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_HEADERS']`( this.TAB_CONTROL );
	}

	/**
	 * Gets the CSS selector of the tab control pages section.
	 * @type {string}
	 */
	static get TAB_CONTROL_PAGES()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGES']`( this.TAB_CONTROL );
	}

	/**
	 * Gets the CSS selector of the tab control pages.
	 * @type {string}
	 */
	static get TAB_CONTROL_PAGE()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE']`( this.TAB_CONTROL_PAGES );
	}

	/**
	 * Gets the CSS selector of the tab control uninitialized headers.
	 * @type {string}
	 */
	static get TAB_CONTROL_UNINITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_HEADER']`( this.TAB_CONTROL_PAGE );
	}

	/**
	 * Gets the CSS selector of the tab control initialized headers.
	 * @type {string}
	 */
	static get TAB_CONTROL_INITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_HEADER']`( this.TAB_CONTROL_HEADERS );
	}

	/**
	 * Gets the CSS selector of the tab control initialized and activated headers.
	 * @type {string}
	 */
	static get TAB_CONTROL_INITIALIZED_ACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='TRUE']`( this.TAB_CONTROL_INITIALIZED_HEADERS );
	}

	/**
	 * Gets the CSS selector of the tab control initialized and deactivated headers.
	 * @type {string}
	 */
	static get TAB_CONTROL_INITIALIZED_DEACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='FALSE']`( this.TAB_CONTROL_INITIALIZED_HEADERS );
	}

	/**
	 * Gets the CSS selector of the tab control activators.
	 * @type {string}
	 */
	static get TAB_CONTROL_ACTIVATORS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_ACTIVATOR']`( this.TAB_CONTROL_PAGE );
	}

	/**
	 * Gets the CSS selector of the tab control unchecked activators.
	 * @type {string}
	 */
	static get TAB_CONTROL_UNCHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:not(:checked)`( this.TAB_CONTROL_ACTIVATORS );
	}

	/**
	 * Gets the CSS selector of the tab control checked activators.
	 * @type {string}
	 */
	static get TAB_CONTROL_CHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:checked`( this.TAB_CONTROL_ACTIVATORS );
	}

	/**
	 * Gets the CSS selector of the tab control content.
	 * @type {string}
	 */
	static get TAB_CONTROL_CONTENT()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_CONTENT']`( this.TAB_CONTROL_PAGE );
	}
}
