'use strict';

import { AbstractStatic } from '../types/abstract-static.js';
import { DebugMode } from './debug-mode.js';
import { InvalidDebugModeException } from './invalid-debug-mode-exception.js';

/**
 * Represents a debugger.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Debugger extends AbstractStatic
{
	/**
	 * Stores the debug mode.
	 */
	static #_mode: DebugMode = DebugMode.DISABLED;

	/**
	 * Gets the debug mode.
	 * @returns The debug mode.
	 */
	static get mode(): DebugMode
	{
		return this.#_mode;
	}

	/**
	 * Sets the debug mode.
	 * @param value The debug mode.
	 */
	static set mode( value: DebugMode )
	{
		if ( false === Object.values( DebugMode ).includes( value ) )
		{
			throw InvalidDebugModeException.with_debugMode( value );
		}

		this.#_mode = value;
	}

	/**
	 * Disables debugging.
	 */
	static disable(): void
	{
		this.mode = DebugMode.DISABLED;
	}

	/**
	 * Enables debugging.
	 */
	static enable(): void
	{
		this.mode = DebugMode.ENABLED;
	}

	/**
	 * Logs a variadic amount of values.
	 * @param values The values to log.
	 */
	static log( ...values: unknown[] ): void
	{
		if ( DebugMode.ENABLED === this.mode )
		{
			if ( 0 === values.length )
			{
				console.log();

				return;
			}

			values.forEach(
				( value ) =>
				{
					console.log( value );
				}
			);
		}
	}
}
