'use strict';

/**
 * Represents prototype extensions and types of the class `Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of the HTTP headers.
	 */
	interface Headers
	{
		/**
		 * Invokes a specific iteration handler on every header.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		forEach( iterationHandler: ( headerName: string, headerValue: string, headerIndex: number ) => void ): void;

		/**
		 * Invokes a specific transformation handler on every header.
		 * @param transformationHandler The transformation handler used to map the headers.
		 * @returns The array containing the transformed headers.
		 */
		map<TResult>( transformationHandler: ( headerName: string, headerValue: string, headerIndex: number ) => TResult ): TResult[];
	}
}

Object.defineProperty(
	Headers.prototype,
	'forEach',
	{
		/**
		 * Invokes a specific iteration handler on every header.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		value: function ( this: Headers, iterationHandler: ( headerName: string, headerValue: string, headerIndex: number ) => void ): void
		       {
			       let fetchedHeaderIndex = 0;

			       for ( const fetchedHeader of this )
			       {
				       iterationHandler( fetchedHeader[ 0 ], fetchedHeader[ 1 ], fetchedHeaderIndex );
			       }

			       fetchedHeaderIndex++;
		       }
	}
);

Object.defineProperty(
	Headers.prototype,
	'map',
	{
		/**
		 * Invokes a specific transformation handler on every header.
		 * @param transformationHandler The transformation handler used to map the headers.
		 * @returns The array containing the transformed headers.
		 */
		value: function <TResult>( this: Headers, transformationHandler: ( headerName: string, headerValue: string, headerIndex: number ) => TResult ): TResult[]
		       {
			       const mappedHeaders: TResult[] = [];
			       let fetchedHeaderIndex         = 0;

			       for ( const fetchedHeader of this )
			       {
				       mappedHeaders.push(
					       transformationHandler( fetchedHeader[ 0 ], fetchedHeader[ 1 ], fetchedHeaderIndex )
				       );

				       fetchedHeaderIndex++;
			       }

			       return mappedHeaders;
		       }
	}
);
