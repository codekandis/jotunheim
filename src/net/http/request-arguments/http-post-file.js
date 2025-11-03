'use strict';

import { Abstract } from '../../../types/abstract.js';
import { HttpPostFileNamePreparator } from './http-post-file-name-preparator.js';

/**
 * Represents an HTTP POST file.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostFile extends Abstract
{
	/**
	 * Stores the name of the HTTP argument.
	 * @var {string}
	 */
	#_name;

	/**
	 * Stores the filename of the HTTP argument.
	 * @var {string}
	 */
	#_filename;

	/**
	 * Stores the file of the HTTP argument.
	 * @var {File}
	 */
	#_file;

	/**
	 * Constructor method.
	 * @param {string} name The name of the HTTP argument.
	 * @param {string} filename The filename of the HTTP argument.
	 * @param {File} file The file of the HTTP argument.
	 */
	constructor( name, filename, file )
	{
		super();

		this.#_name     = ( new HttpPostFileNamePreparator() )
			.prepare( name );
		this.#_filename = filename;
		this.#_file     = file;
	}

	/**
	 * Static constructor method.
	 * @param {HttpPostFile} httpPostFile The HTTP POST file to create the HTTP POST file from.
	 * @returns {HttpPostFile}
	 * @constructor
	 */
	static fromHttpPostFile( httpPostFile )
	{
		return new this( httpPostFile.name, httpPostFile.filename, httpPostFile.file )
	}

	/**
	 * Gets the name of the HTTP POST file.
	 * @returns {string} The name of the HTTP POST file.
	 */
	get name()
	{
		return this.#_name;
	}

	/**
	 * Gets the filename of the HTTP POST file.
	 * @returns {string} The filename of the HTTP POST file.
	 */
	get filename()
	{
		return this.#_filename;
	}

	/**
	 * Gets the file of the HTTP POST file.
	 * @returns {File} The file of the HTTP POST file.
	 */
	get file()
	{
		return this.#_file;
	}
}
