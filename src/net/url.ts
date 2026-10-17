'use strict';

/**
 * Represents prototype extensions and types of the class `URL`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { PartialUrlType } from './partial-url-type.js';
import { UnknownPartialUrlTypeException } from './unknown-partial-url-type-exception.js';

declare global
{
	/**
	 * Represents extensions of the URL.
	 */
	interface URL
	{
		/**
		 * Gets the URL prefix up to and including a specified component.
		 * @param partialUrlType The component at which the URL prefix ends.
		 * @returns The URL prefix ending at the specified component.
		 * @throws {UnknownPartialUrlTypeException} The specified URL component type is unknown.
		 */
		getLeftPart( partialUrlType: string ): string;
	}
}

Object.defineProperty(
	URL.prototype,
	'getLeftPart',
	{
		/**
		 * Gets the URL prefix up to and including a specified component.
		 * @param partialUrlType The component at which the URL prefix ends.
		 * @returns The URL prefix ending at the specified component.
		 * @throws {UnknownPartialUrlTypeException} The specified URL component type is unknown.
		 */
		value: function ( this: URL, partialUrlType: string ): string
		       {
			       switch ( partialUrlType )
			       {
				       case PartialUrlType.PROTOCOL:
				       {
					       return String.format`${ 0 }`( this.protocol );
				       }
				       case PartialUrlType.USERNAME:
				       {
					       return String.format`${ 0 }//${ 1 }`(
						       this.getLeftPart( PartialUrlType.PROTOCOL ),
						       this.username
					       );
				       }
				       case PartialUrlType.PASSWORD:
				       {
					       if ( String.empty === this.password )
					       {
						       return this.getLeftPart( PartialUrlType.USERNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`(
						       this.getLeftPart( PartialUrlType.USERNAME ),
						       this.password
					       );
				       }
				       case PartialUrlType.HOSTNAME:
				       {
					       if ( String.empty === this.username && String.empty === this.password )
					       {
						       return String.format`${ 0 }${ 1 }`(
							       this.getLeftPart( PartialUrlType.PASSWORD ),
							       this.hostname
						       );
					       }

					       return String.format`${ 0 }@${ 1 }`(
						       this.getLeftPart( PartialUrlType.PASSWORD ),
						       this.hostname
					       );
				       }
				       case PartialUrlType.PORT:
				       {
					       if ( String.empty === this.port )
					       {
						       return this.getLeftPart( PartialUrlType.HOSTNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`(
						       this.getLeftPart( PartialUrlType.HOSTNAME ),
						       this.port
					       );
				       }
				       case PartialUrlType.PATHNAME:
				       {
					       return String.format`${ 0 }${ 1 }`(
						       this.getLeftPart( PartialUrlType.PORT ),
						       this.pathname
					       );
				       }
				       case PartialUrlType.SEARCH:
				       {
					       return String.format`${ 0 }${ 1 }`(
						       this.getLeftPart( PartialUrlType.PATHNAME ),
						       this.search
					       );
				       }
				       case PartialUrlType.HASH:
				       {
					       return String.format`${ 0 }${ 1 }`(
						       this.getLeftPart( PartialUrlType.SEARCH ),
						       this.hash
					       );
				       }
			       }

			       throw UnknownPartialUrlTypeException.with_partialUrlType( partialUrlType );
		       }
	}
);
