'use strict';

/**
 * Represents prototype extensions and types of the class `FileList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of the file list.
	 */
	interface FileList
	{
		/**
		 * Invokes a specific iteration handler on every file.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		forEach( iterationHandler: ( file: File, fileIndex: number ) => void ): void;

		/**
		 * Invokes a specific transformation handler on every file of the file list.
		 * @param transformationHandler The transformation handler used to map the files.
		 * @returns The array containing the transformed files.
		 */
		map<TResult>( transformationHandler: ( file: File, fileIndex: number ) => TResult ): TResult[];
	}
}

Object.defineProperty(
	FileList.prototype,
	'forEach',
	{
		/**
		 * Invokes a specific iteration handler on every file.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		value: function ( this: FileList, iterationHandler: ( file: File, fileIndex: number ) => void ): void
		       {
			       let fetchedFileIndex = 0;

			       for ( const fetchedFile of this )
			       {
				       iterationHandler( fetchedFile, fetchedFileIndex );
			       }

			       fetchedFileIndex++;
		       }
	}
);

Object.defineProperty(
	FileList.prototype,
	'map',
	{
		/**
		 * Invokes a specific transformation handler on every file of the file list.
		 * @param transformationHandler The transformation handler used to map the files.
		 * @returns The array containing the transformed files.
		 */
		value: function <TResult>( this: FileList, transformationHandler: ( file: File, fileIndex: number ) => TResult ): TResult[]
		       {
			       const mappedFileList: TResult[] = [];
			       let fetchedFileIndex            = 0;

			       for ( const fetchedFile of this )
			       {
				       mappedFileList.push(
					       transformationHandler( fetchedFile, fetchedFileIndex )
				       );

				       fetchedFileIndex++;
			       }

			       return mappedFileList;
		       }
	}
);
