'use strict';

/**
 * Represents prototype extensions and types of the class `File`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { FileNotReadableException } from './file-not-readable-exception.js';

declare global
{
	/**
	 * Represents extensions of the file.
	 */
	interface File
	{
		/**
		 * Gets the Base64 data URI representation of the file content.
		 * @returns The Base64 encoded data URI.
		 */
		toBase64DataUri(): Promise<string>;

		/**
		 * Gets the Base64 representation of the file content.
		 * @returns The Base64 encoded file content.
		 */
		toBase64(): Promise<string>;
	}
}

Object.defineProperty(
	File.prototype,
	'toBase64DataUri',
	{
		/**
		 * Gets the Base64 data URI representation of the file content.
		 * @returns The Base64 encoded data URI.
		 */
		value: async function ( this: File ): Promise<string>
		       {
			       return await new Promise<string>(
				       ( resolve, reject ) =>
				       {
					       const fileReader = new FileReader();
					       fileReader.loadEvent.add(
						       () =>
						       {
							       resolve( fileReader.result as string );
						       }
					       );
					       fileReader.errorEvent.add(
						       () =>
						       {
							       reject(
								       FileNotReadableException.with_file( this )
							       );
						       }
					       );
					       fileReader.readAsDataURL( this );
				       }
			       );
		       }
	}
);

Object.defineProperty(
	File.prototype,
	'toBase64',
	{
		/**
		 * Gets the Base64 representation of the file content.
		 * @returns The Base64 encoded file content.
		 */
		value: async function ( this: File ): Promise<string>
		       {
			       const base64DataUri = await this.toBase64DataUri();

			       return base64DataUri.substring(
				       base64DataUri.indexOf( ',' ) + 1
			       );
		       }
	}
);
