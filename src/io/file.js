'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `File`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { FileNotReadableException } from './file-not-readable-exception.js';

/**
 * Gets the Base64 data URI representation of the file content.
 * @method toBase64DataUri
 * @memberOf File.prototype
 * @returns {String} The Base64 encoded data URI.
 */
Object.defineProperty(
	File.prototype,
	'toBase64DataUri',
	{
		value: async function ()
		       {
			       return await new Promise(
				       ( resolve, reject ) =>
				       {
					       const fileReader = new FileReader();
					       fileReader.loadEvent(
						       ( event ) =>
						       {
							       resolve( fileReader.result );
						       }
					       );
					       fileReader.errorEvent(
						       ( event ) =>
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

/**
 * Gets the Base64 representation of the file content.
 * @method toBase64
 * @memberOf File.prototype
 * @returns {String} The Base64 encoded file content.
 */
Object.defineProperty(
	File.prototype,
	'toBase64',
	{
		value: async function ()
		       {
			       const base64DataUri = await this.toBase64DataUri();

			       return base64DataUri.substring(
				       base64DataUri.indexOf( ',' ) + 1
			       );
		       }
	}
);
