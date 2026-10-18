'use strict';

/**
 * Represents an enumeration of initial data binding directions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum DataBindingInitializationDirection
{
	/**
	 * Specifies that the binder's property is the initial value.
	 */
	BINDER   = 'BINDER',

	/**
	 * Specifies that the bindable's property is the initial value.
	 */
	BINDABLE = 'BINDABLE'
}
