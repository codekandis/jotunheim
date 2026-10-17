'use strict';

/**
 * Represents prototype extensions and types of the class `NodeList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of the node list.
	 */
	interface NodeList
	{
		/**
		 * Maps a specific transformation handler over every node in the node list.
		 * @param iterationHandler The transformation handler to invoke.
		 * @returns The array containing the transformed nodes.
		 */
		map<TResult>( iterationHandler: ( nodeValue: Node, nodeIndex: number ) => TResult ): TResult[];
	}

	/**
	 * Represents extensions of a typed node list.
	 */
	interface NodeListOf<TNode extends Node>
	{
		/**
		 * Maps a specific transformation handler over every node in the node list.
		 * @param iterationHandler The transformation handler to invoke.
		 * @returns The array containing the transformed nodes.
		 */
		map<TResult>( iterationHandler: ( nodeValue: TNode, nodeIndex: number ) => TResult ): TResult[];
	}
}

Object.defineProperty(
	NodeList.prototype,
	'map',
	{
		/**
		 * Maps a specific transformation handler over every node in the node list.
		 * @param iterationHandler The transformation handler to invoke.
		 * @returns The array containing the transformed nodes.
		 */
		value: function <TResult>( this: NodeList, iterationHandler: ( nodeValue: Node, nodeIndex: number ) => TResult ): TResult[]
		       {
			       return [ ...this ]
				       .map( iterationHandler );
		       }
	}
);
