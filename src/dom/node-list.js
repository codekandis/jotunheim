'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `NodeList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any node list node transformation.
 * @callback NodeList_NodeTransformationHandler
 * @param {Node} nodeValue The value of the currently iterated node.
 * @param {number} nodeIndex The index of the currently iterated node.
 * @returns {any} The transformed node.
 */

/**
 * Maps a specific transformation handler over every node in the node list.
 * @method map
 * @memberOf NodeList.prototype
 * @param {NodeList_NodeTransformationHandler} iterationHandler The transformation handler to invoke.
 * @returns {Array< any >} The array containing the transformed nodes.
 */
Object.defineProperty(
	NodeList.prototype,
	'map',
	{
		value: function ( iterationHandler )
		       {
			       return [ ...this ]
				       .map( iterationHandler );
		       }
	}
);
