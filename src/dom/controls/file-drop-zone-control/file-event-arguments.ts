'use strict';

import { EventArguments } from '../../../types/event-arguments.js';

/**
 * Represents the event arguments of any file related event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileEventArguments extends EventArguments
{
	/**
	 * Stores the file which is affected.
	 */
	#_file: File;

	/**
	 * Constructor method.
	 * @param file The file which is affected.
	 */
	constructor( file: File )
	{
		super();

		this.#_file = file;
	}

	/**
	 * Gets the file which is affected.
	 * @returns The file which is affected.
	 */
	get file(): File
	{
		return this.#_file;
	}
}
