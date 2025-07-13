'use strict';

import { AbstractStatic } from '../types/abstract-static.js';
import { InvalidDebugModeException } from './invalid-debug-mode-exception.js';

/**
 * Represents an enumeration of debug modes.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DebugMode extends AbstractStatic
{
	/**
	 * Represents the debug mode `DISABLED`.
	 * @type {String}
	 */
	static get DISABLED()
	{
		return 'DISABLED';
	}

	/**
	 * Represents the debug mode `ENABLED`.
	 * @type {String}
	 */
	static get ENABLED()
	{
		return 'ENABLED';
	}

	/**
	 * Stores the debug mode.
	 * @type {String}
	 */
	static #_mode = this.DISABLED;

	/**
	 * Stores any valid debug mode.
	 * @type {String[]}
	 */
	static #_validDebugModes = [
		this.DISABLED,
		this.ENABLED
	];

	/**
	 * Gets the debug mode.
	 * @returns {String} The debug mode.
	 */
	static get mode()
	{
		return this.#_mode;
	}

	/**
	 * Sets the debug mode.
	 * @param {String} value The debug mode.
	 */
	static set mode( value )
	{
		if ( false === this.#_validDebugModes.includes( value ) )
		{
			throw InvalidDebugModeException.with_debugMode( value );
		}

		this.#_mode = value;
	}

	/**
	 * Disables debugging.
	 */
	static disable()
	{
		this.mode = this.DISABLED;
	}

	/**
	 * Enables debugging.
	 */
	static enable()
	{
		this.mode = this.ENABLED;
	}
}
