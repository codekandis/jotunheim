/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Collections/Collection.js":
/*!***************************************!*\
  !*** ./src/Collections/Collection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _Types_Abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/Abstract.js */ "./src/Types/Abstract.js");
/* harmony import */ var _Types_InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/InvalidIndexException.js */ "./src/Types/InvalidIndexException.js");
/* harmony import */ var _Types_InvalidTypeException_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Types/InvalidTypeException.js */ "./src/Types/InvalidTypeException.js");






/**
 * Represents the handler of any collection item iteration.
 * @callback Collection_ItemIterationHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 */

/**
 * Represents the handler of any collection items comparison.
 * @callback Collection_ItemComparisonHandler
 * @param {*} item_1 The first item to compare.
 * @param {*} item_2 The second item to compare.
 * @returns {Number} -1 if the first item is lower than the second item, 0 if the first item is equal to the second item and 1 if the first item is greater than the second item.
 */

/**
 * Represents the handler of any collection item transformation.
 * @callback Collection_ItemTransformationHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 * @returns {*} The transformed item.
 */

/**
 * Represents the handler of any collection item determination.
 * @callback Collection_ItemPredicateHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 * @returns {Boolean} True if the iterated item matches the predicate, otherwise false.
 */

/**
 * Represents a collection of various items.
 * @author Christian Ramelow <info@codekandis.net>
 */
class Collection extends _Types_Abstract_js__WEBPACK_IMPORTED_MODULE_0__.Abstract
{
	/**
	 * Stores the items of the collection.
	 * @type {*[]}
	 */
	__items = [];

	/**
	 * Constructor method.
	 * @param {...*} items The initital items of the collection.
	 */
	constructor( ...items )
	{
		super();

		this.add( ...items );
	}

	/**
	 * Static constructor method.
	 * @param {...*[]} arrays The arrays to create the collection from.
	 * @returns {Collection<*>} The created collection.
	 * @throws {InvalidTypeException} The type of at least one of the passed arrays is not `array`.
	 * @constructor
	 */
	static fromArray( ...arrays )
	{
		arrays.forEach(
			( fetchedArray ) =>
			{
				if ( false === Array.isArray( fetchedArray ) )
				{
					throw _Types_InvalidTypeException_js__WEBPACK_IMPORTED_MODULE_2__.InvalidTypeException.with_type( 'array', typeof fetchedArray );
				}
			}
		);

		const collection = new Collection();
		arrays.forEach(
			( fetchedArray ) =>
			{
				collection.add( ...fetchedArray );
			}
		);

		return collection;
	}

	/**
	 * Gets the number of items in the collection.
	 * @returns {Number} The number of items in the collection.
	 */
	get length()
	{
		return this.__items.length;
	}

	/**
	 * Gets the iterator to iterate over any collection's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any collection's item.
	 */
	* #items()
	{
		const items = this.__items;
		for ( const item of items )
		{
			yield item;
		}
	}

	/**
	 * Gets the iterator to iterate over any collection's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any collection's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#items();
	}

	/**
	 * Invokes a specific iteration handler on every collection's item.
	 * @param {Collection_ItemIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#items()
			.forEach( iterationHandler );
	}

	/**
	 * Clears the collection.
	 */
	clear()
	{
		this.__items.length = 0;
	}

	/**
	 * Determines if the collection includes a specific item.
	 * @param {*} item The item to search for.
	 * @returns {Boolean} True if the items is included in the collection, otherwise false.
	 */
	includes( item )
	{
		return this.__items.includes( item );
	}

	/**
	 * Determines if the collection includes an item specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 * @returns {Boolean} True if the item is included in the collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return this.__items.includesBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of items to the collection.
	 * @param {...*} items The items to add.
	 */
	add( ...items )
	{
		this.__items.add( ...items );
	}

	/**
	 * Adds a variadic amount of items to the collection by a specific predicate handler.
	 * @param {Collection_ItemPredicateHandler} predicateHandler The predicate handler to determine the items to add.
	 * @param {...*} items The items to add.
	 */
	addBy( predicateHandler, ...items )
	{
		this.__items.add(
			...items.findAllBy( predicateHandler )
		);
	}

	/**
	 * Replaces all items in the collection specified by their indices.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...Number} indices The indices of the items to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( itemReplacement, ...indices )
	{
		this.__items.replaceAt( itemReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of items in the array with a specified item.
	 * @param {*} itemReplacement The new item to replace the item with.
	 * @param {...*} items The items which has to be replaced.
	 */
	replace( itemReplacement, ...items )
	{
		this.__items.replace( itemReplacement, items );
	}

	/**
	 * Replaces the first occurences of items in the array specified by a variadic amount of predicate handlers with a specified item.
	 * @param {*} itemReplacement The new item to replace the item with.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 */
	replaceBy( itemReplacement, ...predicateHandlers )
	{
		this.__items.replaceBy( itemReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of items in the array with a specified item.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...*} items The items which has to be replaced.
	 */
	replaceAll( itemReplacement, ...items )
	{
		this.__items.replaceAll( itemReplacement, ...items );
	}

	/**
	 * Replaces all occurences of an item in the array specified by a variadic amount of predicate handlers.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the items.
	 */
	replaceAllBy( itemReplacement, ...predicateHandlers )
	{
		this.__items.replaceAllBy( itemReplacement, ...predicateHandlers );
	}

	/**
	 * Removes items from the array specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the item to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		this.__items.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a variadic amount of items from the collection.
	 * @param {...*} items The items to remove.
	 */
	remove( ...items )
	{
		this.__items.remove( ...items );
	}

	/**
	 * Removes the first occurence of an item from the array specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 */
	removeBy( ...predicateHandlers )
	{
		this.__items.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes all occurences of a variadic amount of items from the array.
	 * @param {...*} items The items to remove.
	 */
	removeAll( ...items )
	{
		this.__items.removeAll( ...items );
	}

	/**
	 * Removes all occurences of items from the array specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the items.
	 */
	removeAllBy( ...predicateHandlers )
	{
		this.__items.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an item.
	 * @param {*} item The item to determine its first index.
	 * @returns {undefined|Number} The first index of the item, if found, otherwise undefined.
	 */
	findFirstIndexOf( item )
	{
		return this.__items.findFirstIndexOf( item );
	}

	/**
	 * Gets the first index of an item specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 * @returns {undefined|Number} The first index of the item, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return this.__items.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an item.
	 * @param {*} item The item to determine its last index.
	 * @returns {undefined|Number} The last index of the item, if found, otherwise undefined.
	 */
	findLastIndexOf( item )
	{
		return this.__items.findLastIndexOf( item );
	}

	/**
	 * Gets the last index of an item specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 * @returns {undefined|Number} The last index of the item, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return this.__items.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets all indices of specific items.
	 * @param {...*} items The items to determine their indices.
	 * @returns {Collection<Number>} The indices of the items, if found, otherwise an empty array.
	 */
	findAllIndicesOf( ...items )
	{
		return new Collection(
			...this.__items.findAllIndicesOf( ...items )
		);
	}

	/**
	 * Gets the indices of all occurences of any item specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the items.
	 * @returns {Collection<Number>} The indices of the items, if found, otherwise an empty array.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		return new Collection(
			...this.__items.findAllIndicesOfBy( ...predicateHandlers )
		);
	}

	/**
	 * Gets an item from the array specified by its index.
	 * @param {Number} index The index of the item.
	 * @returns {undefined|*} The item, if found.
	 */
	findAt( index )
	{
		return this.__items.findAt( index );
	}

	/**
	 * Gets the first item from the array specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 * @returns {undefined|*} The first item, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return this.__items.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last item from the array specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the item.
	 * @returns {undefined|*} The last item, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return this.__items.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets all items from the array specified by a variadic amount of predicate handlers.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers to determine the items.
	 * @returns {Collection<*>} The items, if found, otherwise an empty array.
	 */
	findAllBy( ...predicateHandlers )
	{
		return new Collection(
			...this.__items.findAllBy( ...predicateHandlers )
		);
	}

	/**
	 * Sorts the collection.
	 */
	sort()
	{
		this.__items.sort();
	}

	/**
	 * Sorts the collection specified by a comparison handler.
	 * @param {Collection_ItemComparisonHandler} comparisonHandler The comparison handler used to compare the items.
	 */
	sortBy( comparisonHandler )
	{
		this.__items.sort( comparisonHandler );
	}

	/**
	 * Maps all items of the collection into a new collection.
	 * @param {Collection_ItemTransformationHandler} transformationHandler The transformation handler used to map the collection.
	 * @returns {Collection<*>} The collection containing the transformed items.
	 */
	map( transformationHandler )
	{
		return new Collection(
			...this.__items.map( transformationHandler )
		);
	}

	/**
	 * Concatenates the items of the collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {String} delimiter The delimiter used to concatenate the mapped items.
	 * @param {...Collection_ItemTransformationHandler} transformationHandlers The transformation handlers used to transform the items.
	 * @returns {String} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return this.__items.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the items of the collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {String} delimiter The delimiter used to concatenate the items.
	 * @param {...Collection_ItemPredicateHandler} predicateHandlers The predicate handlers used to determine the items.
	 * @returns {String} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return this.__items.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the collection.
	 * @returns {*[]} The array representation of the collection.
	 */
	toArray()
	{
		return [ ...this ];
	}

	/**
	 * Gets the JSON representation of the collection.
	 * @returns {*[]} The JSON representation of the collection.
	 */
	toJSON()
	{
		return [ ...this ].toJSON();
	}
}


/***/ }),

/***/ "./src/Dom/AbstractDragEvent.js":
/*!**************************************!*\
  !*** ./src/Dom/AbstractDragEvent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDragEvent: () => (/* binding */ AbstractDragEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any drag event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractDragEvent extends DragEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Dom/AbstractFocusEvent.js":
/*!***************************************!*\
  !*** ./src/Dom/AbstractFocusEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractFocusEvent: () => (/* binding */ AbstractFocusEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any focus event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractFocusEvent extends FocusEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Dom/AbstractInputEvent.js":
/*!***************************************!*\
  !*** ./src/Dom/AbstractInputEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractInputEvent: () => (/* binding */ AbstractInputEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractInputEvent extends InputEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Dom/AbstractKeyboardEvent.js":
/*!******************************************!*\
  !*** ./src/Dom/AbstractKeyboardEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractKeyboardEvent: () => (/* binding */ AbstractKeyboardEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any keyboard event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractKeyboardEvent extends KeyboardEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Dom/AbstractMouseEvent.js":
/*!***************************************!*\
  !*** ./src/Dom/AbstractMouseEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractMouseEvent: () => (/* binding */ AbstractMouseEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any mouse event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractMouseEvent extends MouseEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Dom/BeforeInputEvent.js":
/*!*************************************!*\
  !*** ./src/Dom/BeforeInputEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeforeInputEvent: () => (/* binding */ BeforeInputEvent)
/* harmony export */ });
/* harmony import */ var _AbstractInputEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractInputEvent.js */ "./src/Dom/AbstractInputEvent.js");




/**
 * Represents a before input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class BeforeInputEvent extends _AbstractInputEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractInputEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'beforeinput';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BeforeInputEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/BlurEvent.js":
/*!******************************!*\
  !*** ./src/Dom/BlurEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlurEvent: () => (/* binding */ BlurEvent)
/* harmony export */ });
/* harmony import */ var _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFocusEvent.js */ "./src/Dom/AbstractFocusEvent.js");




/**
 * Represents a blur event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class BlurEvent extends _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'blur';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BlurEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/ChangeEvent.js":
/*!********************************!*\
  !*** ./src/Dom/ChangeEvent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeEvent: () => (/* binding */ ChangeEvent)
/* harmony export */ });
/* harmony import */ var _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractEvent.js */ "./src/Types/AbstractEvent.js");




/**
 * Represents a change event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class ChangeEvent extends _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'change';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ChangeEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/ClickEvent.js":
/*!*******************************!*\
  !*** ./src/Dom/ClickEvent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickEvent: () => (/* binding */ ClickEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a click event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class ClickEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'click';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ClickEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/Document.js":
/*!*****************************!*\
  !*** ./src/Dom/Document.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/EventManager.js */ "./src/Types/EventManager.js");
/* harmony import */ var _DomContentLoadedEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomContentLoadedEvent.js */ "./src/Dom/DomContentLoadedEvent.js");


/**
 * Represents prototype extensions and JSDoc types of the class `Document`.
 * @author Christian Ramelow <info@codekandis.net>
 */




/**
 * Gets the DOM content loaded event.
 * @property {Function} domContentLoadedEvent
 * @memberOf Document.prototype
 * @type {Function}
 */
Object.defineProperty(
	Document.prototype,
	'domContentLoadedEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DomContentLoadedEvent_js__WEBPACK_IMPORTED_MODULE_1__.DomContentLoadedEvent, this );
		}
	}
);


/***/ }),

/***/ "./src/Dom/DomContentLoadedEvent.js":
/*!******************************************!*\
  !*** ./src/Dom/DomContentLoadedEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomContentLoadedEvent: () => (/* binding */ DomContentLoadedEvent)
/* harmony export */ });
/* harmony import */ var _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractEvent.js */ "./src/Types/AbstractEvent.js");




/**
 * Represents a DOM content loaded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DomContentLoadedEvent extends _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'DOMContentLoaded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DomContentLoadedEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DomElementNotFoundException.js":
/*!************************************************!*\
  !*** ./src/Dom/DomElementNotFoundException.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomElementNotFoundException: () => (/* binding */ DomElementNotFoundException)
/* harmony export */ });
/* harmony import */ var _Types_LogicException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/LogicException.js */ "./src/Types/LogicException.js");




/**
 * Represents an exception if an element does not exist in the DOM.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DomElementNotFoundException extends _Types_LogicException_js__WEBPACK_IMPORTED_MODULE_0__.LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} selector The selector which cannot be resolved.
	 * @returns {DomElementNotFoundException}
	 * @constructor
	 */
	static with_unresolvableSelector( selector )
	{
		return new this(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}

	/**
	 * Static constructor method.
	 * @param {HTMLElement} element The element which does not exist.
	 * @returns {DomElementNotFoundException}
	 * @constructor
	 */
	static with_element( element )
	{
		return new this(
			String.format`The element \`${ 0 }\` does not exist.`( element )
		);
	}
}


/***/ }),

/***/ "./src/Dom/DomHelper.js":
/*!******************************!*\
  !*** ./src/Dom/DomHelper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomHelper: () => (/* binding */ DomHelper)
/* harmony export */ });
/* harmony import */ var _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractStatic.js */ "./src/Types/AbstractStatic.js");
/* harmony import */ var _DomElementNotFoundException_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomElementNotFoundException.js */ "./src/Dom/DomElementNotFoundException.js");
/* harmony import */ var _DomInsertPosition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomInsertPosition.js */ "./src/Dom/DomInsertPosition.js");
/* harmony import */ var _DomSelectorNotResolvableException_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomSelectorNotResolvableException.js */ "./src/Dom/DomSelectorNotResolvableException.js");







/**
 * Represents a DOM helper providing various methods to iterate and manipulate the DOM.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DomHelper extends _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__.AbstractStatic
{
	/**
	 * Gets the proper context.
	 * @param {?Document|?HTMLElement} context The document or HTML element to use as context, null if no context has been specified.
	 * @returns {Document|HTMLElement} The specified context, document if no context has been specified.
	 */
	static #getContext( context )
	{
		return null === context
			? document
			: context;
	}

	/**
	 * Determines if the document contains a specific HTML element.
	 * @param  {HTMLElement} element The HTML element to determine if it exists.
	 * @returns {Boolean} True if the document contains the HTML element, otherwise false.
	 */
	static contains( element )
	{
		return document.contains( element );
	}

	/**
	 * Queries the first HTML element specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML element to query.
	 * @param {?Document|?HTMLElement} context The document or HTML element the queried HTML element must be a child of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 * @returns {?HTMLElement} The HTML element, if found, otherwise null.
	 * @throws {DomElementNotFoundException} The HTML element has not been found.
	 */
	static querySelector( selector, context = null, throwExceptions = true )
	{
		const element = this
			.#getContext( context )
			.querySelector( selector );

		if ( true === throwExceptions && null === element )
		{
			throw _DomElementNotFoundException_js__WEBPACK_IMPORTED_MODULE_1__.DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return element;
	}

	/**
	 * Queries all HTML elements matching a given CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to query.
	 * @param {?Document|?HTMLElement} context The document or HTML element the queried HTML elements must be children of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML elements has been found, otherwise false.
	 * @returns {HTMLElement[]} The HTML elements, if found, otherwise an empty array.
	 * @throws {DomElementNotFoundException} No HTML element has been found.
	 */
	static querySelectorAll( selector, context = null, throwExceptions = true )
	{
		const elements = this
			.#getContext( context )
			.querySelectorAll( selector );

		if ( true === throwExceptions && 0 === elements.length )
		{
			throw _DomElementNotFoundException_js__WEBPACK_IMPORTED_MODULE_1__.DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return elements;
	}

	/**
	 * Creates an HTML element from an HTML string. If the HTML string contains multiple HTML element only the first one will be returned.
	 * @param {String} htmlString The HTML string to create the HTML element from.
	 * @param {String} id The ID of the HTML element.
	 * @param {String} classNames The class names of the HTML element.
	 * @returns {HTMLElement} The created HTML element.
	 */
	static createElementFromString( htmlString, id = null, classNames = null )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();
		const element       = /** @type {HTMLElement} */ container.firstChild;

		if ( null !== id )
		{
			element.setAttribute( 'id', id );
		}
		if ( null !== classNames )
		{
			element.setAttribute( 'class', classNames );
		}

		return element;
	}

	/**
	 * Creates multiple HTML elements from an HTML string.
	 * @param {String} htmlString The HTML string to create the HTML elements from.
	 * @returns {NodeList} The created HTML elements.
	 */
	static createElementsFromString( htmlString )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();

		return container.childNodes;
	}

	/**
	 * Removes a specific HTML element.
	 * @param {HTMLElement} element The HTML element to remove.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 * @throws {DomElementNotFoundException} The HTML element does not exist in the document.
	 */
	static remove( element, throwExceptions = true )
	{
		const elementExists = DomHelper.contains( element );

		if ( false === throwExceptions && false === elementExists )
		{
			throw _DomElementNotFoundException_js__WEBPACK_IMPORTED_MODULE_1__.DomElementNotFoundException.with_element( element );
		}

		element.remove();
	}

	/**
	 * Removes all HTML elements specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to query.
	 * @param {?Document|?HTMLElement} context The node the queried HTML element must be a child of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 */
	static removeBySelector( selector, context = null, throwExceptions = true )
	{
		const elements = this
			.#getContext( context )
			.querySelectorAll( selector );

		if ( true === throwExceptions && 0 === elements.length )
		{
			throw _DomSelectorNotResolvableException_js__WEBPACK_IMPORTED_MODULE_3__.DomSelectorNotResolvableException.with_selector( selector );
		}

		elements.forEach(
			( element ) =>
			{
				element.remove();
			}
		);
	}

	/**
	 * Adds an event handler to an HTML element.
	 * @param {Object} element The HTML element to add the event handler to.
	 * @param {String} eventName The name of the event to add the event handler to.
	 * @param {Event_EventHandler} eventHandler The event handler to add.
	 */
	static addEventHandler( element, eventName, eventHandler )
	{
		element.addEventListener( eventName, eventHandler );
	}

	/**
	 * Adds event handlers to events of an HTML element specified by a variadic amount of event handler mappings.
	 * @param {Object} element The HTML element to add the event handlers to.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static addEventHandlers( element, ...eventHandlerMappings )
	{
		eventHandlerMappings.forEach(
			( eventHandlerMapping ) =>
			{
				eventHandlerMapping.eventHandlers.forEach(
					( eventHandler ) =>
					{
						DomHelper.addEventHandler( element, eventHandlerMapping.eventName, eventHandler );
					}
				);
			}
		);
	}

	/**
	 * Adds an event handler to all HTML elements specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to add the event handlers to.
	 * @param {String} eventName The name of the event to add the event handler to.
	 * @param {Event_EventHandler} eventHandler The event handler to add.
	 */
	static addEventHandlerBySelector( selector, eventName, eventHandler )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandler( element, eventName, eventHandler );
				}
			);
	}

	/**
	 * Adds event handlers to events of an HTML element specified by a CSS selector and by a variadic amount of event handler mappings.
	 * @param {String} selector The CSS selector specifying the HTML elements to add the event handlers to.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static addEventHandlersBySelector( selector, ...eventHandlerMappings )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandlers( element, ...eventHandlerMappings );
				}
			);
	}

	/**
	 * Removes an event handler from an HTML element.
	 * @param {Object} element The HTML element to remove the event handler from.
	 * @param {String} eventName The name of the event to remove the event handler from.
	 * @param {Event_EventHandler} eventHandler The event handler to remove.
	 */
	static removeEventHandler( element, eventName, eventHandler )
	{
		element.removeEventListener( eventName, eventHandler );
	}

	/**
	 * Removes event handlers from events of an HTML element specified by a variadic amount of event handler mappings.
	 * @param {Object} element The HTML element to remove the event handlers from.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static removeEventHandlers( element, ...eventHandlerMappings )
	{
		eventHandlerMappings.forEach(
			( eventHandlerMapping ) =>
			{
				eventHandlerMapping.eventHandlers.forEach(
					( eventHandler ) =>
					{
						DomHelper.removeEventHandler( element, eventHandlerMapping.eventName, eventHandler );
					}
				);
			}
		);
	}

	/**
	 * Removes an event handler from all HTML elements specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to remove the event handlers from.
	 * @param {String} eventName The name of the event to remove the event handler from.
	 * @param {Event_EventHandler} eventHandler The event handler to remove.
	 */
	static removeEventHandlerBySelector( selector, eventName, eventHandler )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.removeEventHandler( element, eventName, eventHandler );
				}
			);
	}

	/**
	 * Removes event handlers from events of an HTML element specified by a CSS selector and by a variadic amount of event handler mappings.
	 * @param {String} selector The CSS selector specifying the HTML elements to remove the event handlers from.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static removeEventHandlersBySelector( selector, ...eventHandlerMappings )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.removeEventHandlers( element, ...eventHandlerMappings );
				}
			);
	}

	/**
	 * Appends a variadic amount of children to an HTML element's child nodes.
	 * @param {HTMLElement} element The HTML element to append the children to.
	 * @param {...HTMLElement} children The children to append.
	 */
	static appendChildren( element, ...children )
	{
		children.forEach(
			( child ) =>
			{
				element.appendChild( child );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements before a specified HTML element.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements before.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insertBefore( element, ...insertions )
	{
		insertions.forEach(
			( insertion ) =>
			{
				element.parentNode.insertBefore( insertion, element );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements after a specified HTML element.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements after.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insertAfter( element, ...insertions )
	{
		insertions.forEach(
			( insertion ) =>
			{
				element.parentNode.insertBefore( insertion, element.nextSibling );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements before or after an HTML element specified by its position.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements befor or after.
	 * @param {String} position The position of the inserted HTML elements.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insert( element, position, ...insertions )
	{
		switch ( position )
		{
			case _DomInsertPosition_js__WEBPACK_IMPORTED_MODULE_2__.DomInsertPosition.BEFORE:
			{
				DomHelper.insertBefore( element, ...insertions );

				break;
			}
			case _DomInsertPosition_js__WEBPACK_IMPORTED_MODULE_2__.DomInsertPosition.AFTER:
			{
				DomHelper.insertAfter( element, ...insertions );

				break;
			}
		}
	}

	/**
	 * Replaces an HTML element with a specified variadic amount of HTML elements.
	 * @param {HTMLElement} element The HTML element to replace.
	 * @param {...HTMLElement} elementReplacements The new HTML elements to replace the HTML element with.
	 */
	static replaceWith( element, ...elementReplacements )
	{
		DomHelper.insertBefore( element, ...elementReplacements );
		element.remove();
	}
}


/***/ }),

/***/ "./src/Dom/DomInsertPosition.js":
/*!**************************************!*\
  !*** ./src/Dom/DomInsertPosition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomInsertPosition: () => (/* binding */ DomInsertPosition)
/* harmony export */ });
/* harmony import */ var _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractStatic.js */ "./src/Types/AbstractStatic.js");




/**
 * Represents an enumeration of DOM insert positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DomInsertPosition extends _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__.AbstractStatic
{
	/**
	 * Specifies that new elements must be inserted before an element.
	 * @type {String}
	 */
	static get BEFORE()
	{
		return 'BEFORE';
	}

	/**
	 * Specifies that new elements must be inserted after an element.
	 * @type {String}
	 */
	static get AFTER()
	{
		return 'AFTER';
	}
}


/***/ }),

/***/ "./src/Dom/DomSelectorNotResolvableException.js":
/*!******************************************************!*\
  !*** ./src/Dom/DomSelectorNotResolvableException.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomSelectorNotResolvableException: () => (/* binding */ DomSelectorNotResolvableException)
/* harmony export */ });
/* harmony import */ var _Types_Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/Exception.js */ "./src/Types/Exception.js");




/**
 * Represents an exception if a selector cannot be resolved.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DomSelectorNotResolvableException extends _Types_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception
{
	/**
	 * Static constructor method.
	 * @param {String} selector The selector which cannot be resolved.
	 * @returns {DomSelectorNotResolvableException}
	 * @constructor
	 */
	static with_selector( selector )
	{
		return new this(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}
}


/***/ }),

/***/ "./src/Dom/DoubleClickEvent.js":
/*!*************************************!*\
  !*** ./src/Dom/DoubleClickEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleClickEvent: () => (/* binding */ DoubleClickEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a double click event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DoubleClickEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dblclick';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DoubleClickEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragEndEvent.js":
/*!*********************************!*\
  !*** ./src/Dom/DragEndEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragEndEvent: () => (/* binding */ DragEndEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragEndEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragend';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEndEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragEnterEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/DragEnterEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragEnterEvent: () => (/* binding */ DragEnterEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag enter event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragEnterEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragenter';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEnterEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragEvent.js":
/*!******************************!*\
  !*** ./src/Dom/DragEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragEvent: () => (/* binding */ DragEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'drag';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragLeaveEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/DragLeaveEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragLeaveEvent: () => (/* binding */ DragLeaveEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragLeaveEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragleave';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragLeaveEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragOverEvent.js":
/*!**********************************!*\
  !*** ./src/Dom/DragOverEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragOverEvent: () => (/* binding */ DragOverEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag over event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragOverEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragover';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragOverEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DragStartEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/DragStartEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragStartEvent: () => (/* binding */ DragStartEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drag start event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DragStartEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragstart';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragStartEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/DropEvent.js":
/*!******************************!*\
  !*** ./src/Dom/DropEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropEvent: () => (/* binding */ DropEvent)
/* harmony export */ });
/* harmony import */ var _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDragEvent.js */ "./src/Dom/AbstractDragEvent.js");




/**
 * Represents a drop event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DropEvent extends _AbstractDragEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'drop';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DropEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/FocusEvent.js":
/*!*******************************!*\
  !*** ./src/Dom/FocusEvent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusEvent: () => (/* binding */ FocusEvent)
/* harmony export */ });
/* harmony import */ var _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFocusEvent.js */ "./src/Dom/AbstractFocusEvent.js");




/**
 * Represents a focus event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class FocusEvent extends _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focus';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/FocusInEvent.js":
/*!*********************************!*\
  !*** ./src/Dom/FocusInEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusInEvent: () => (/* binding */ FocusInEvent)
/* harmony export */ });
/* harmony import */ var _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFocusEvent.js */ "./src/Dom/AbstractFocusEvent.js");




/**
 * Represents a focus in event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class FocusInEvent extends _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusin';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusInEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/FocusOutEvent.js":
/*!**********************************!*\
  !*** ./src/Dom/FocusOutEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusOutEvent: () => (/* binding */ FocusOutEvent)
/* harmony export */ });
/* harmony import */ var _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFocusEvent.js */ "./src/Dom/AbstractFocusEvent.js");




/**
 * Represents a focus out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class FocusOutEvent extends _AbstractFocusEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusout';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusOutEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/HtmlElement.js":
/*!********************************!*\
  !*** ./src/Dom/HtmlElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/EventManager.js */ "./src/Types/EventManager.js");
/* harmony import */ var _BeforeInputEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeforeInputEvent.js */ "./src/Dom/BeforeInputEvent.js");
/* harmony import */ var _BlurEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlurEvent.js */ "./src/Dom/BlurEvent.js");
/* harmony import */ var _ChangeEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChangeEvent.js */ "./src/Dom/ChangeEvent.js");
/* harmony import */ var _ClickEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClickEvent.js */ "./src/Dom/ClickEvent.js");
/* harmony import */ var _DoubleClickEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DoubleClickEvent.js */ "./src/Dom/DoubleClickEvent.js");
/* harmony import */ var _DragEndEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DragEndEvent.js */ "./src/Dom/DragEndEvent.js");
/* harmony import */ var _DragEnterEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DragEnterEvent.js */ "./src/Dom/DragEnterEvent.js");
/* harmony import */ var _DragEvent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DragEvent.js */ "./src/Dom/DragEvent.js");
/* harmony import */ var _DragLeaveEvent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DragLeaveEvent.js */ "./src/Dom/DragLeaveEvent.js");
/* harmony import */ var _DragOverEvent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DragOverEvent.js */ "./src/Dom/DragOverEvent.js");
/* harmony import */ var _DragStartEvent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DragStartEvent.js */ "./src/Dom/DragStartEvent.js");
/* harmony import */ var _DropEvent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DropEvent.js */ "./src/Dom/DropEvent.js");
/* harmony import */ var _FocusEvent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FocusEvent.js */ "./src/Dom/FocusEvent.js");
/* harmony import */ var _FocusInEvent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FocusInEvent.js */ "./src/Dom/FocusInEvent.js");
/* harmony import */ var _FocusOutEvent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FocusOutEvent.js */ "./src/Dom/FocusOutEvent.js");
/* harmony import */ var _InputEvent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./InputEvent.js */ "./src/Dom/InputEvent.js");
/* harmony import */ var _KeyDownEvent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./KeyDownEvent.js */ "./src/Dom/KeyDownEvent.js");
/* harmony import */ var _KeyUpEvent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./KeyUpEvent.js */ "./src/Dom/KeyUpEvent.js");
/* harmony import */ var _MouseDownEvent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MouseDownEvent.js */ "./src/Dom/MouseDownEvent.js");
/* harmony import */ var _MouseEnterEvent_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MouseEnterEvent.js */ "./src/Dom/MouseEnterEvent.js");
/* harmony import */ var _MouseLeaveEvent_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MouseLeaveEvent.js */ "./src/Dom/MouseLeaveEvent.js");
/* harmony import */ var _MouseMoveEvent_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MouseMoveEvent.js */ "./src/Dom/MouseMoveEvent.js");
/* harmony import */ var _MouseOutEvent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./MouseOutEvent.js */ "./src/Dom/MouseOutEvent.js");
/* harmony import */ var _MouseOverEvent_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MouseOverEvent.js */ "./src/Dom/MouseOverEvent.js");
/* harmony import */ var _MouseUpEvent_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MouseUpEvent.js */ "./src/Dom/MouseUpEvent.js");


/**
 * Represents prototype extensions and JSDoc types of the class `HTMLElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */




























/**
 * Stores arbitrary data related to the HTML element.
 * @property {*} #_data
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'data',
	{
		value:    null,
		writable: true
	}
);

/**
 * Removes all child nodes from the HTML element.
 * @method empty
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'empty',
	{
		value: function ()
		       {
			       this.replaceChildren();
		       }
	}
);

/**
 * Hides an HTML element.
 * @method hide
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'hide',
	{
		value: function ()
		       {
			       this.styles.display = 'none';
		       }
	}
);

/**
 * Shows an HTML element.
 * @method show
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'show',
	{
		value: function ()
		       {
			       this.styles.display = '';
		       }
	}
);

/**
 * Gets the before input event.
 * @property {Function} beforeInputEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'beforeInputEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _BeforeInputEvent_js__WEBPACK_IMPORTED_MODULE_1__.BeforeInputEvent, this );
		}
	}
);

/**
 * Gets the input event.
 * @property {Function} inputEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'inputEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _InputEvent_js__WEBPACK_IMPORTED_MODULE_16__.InputEvent, this );
		}
	}
);

/**
 * Gets the change event.
 * @property {Function} changeEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'changeEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _ChangeEvent_js__WEBPACK_IMPORTED_MODULE_3__.ChangeEvent, this );
		}
	}
);

/**
 * Gets the drag end event.
 * @property {Function} dragEndEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEndEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragEndEvent_js__WEBPACK_IMPORTED_MODULE_6__.DragEndEvent, this );
		}
	}
);

/**
 * Gets the drag enter event.
 * @property {Function} dragEnterEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEnterEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragEnterEvent_js__WEBPACK_IMPORTED_MODULE_7__.DragEnterEvent, this );
		}
	}
);

/**
 * Gets the drag event.
 * @property {Function} dragEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragEvent_js__WEBPACK_IMPORTED_MODULE_8__.DragEvent, this );
		}
	}
);

/**
 * Gets the drag leave event.
 * @property {Function} dragLeaveEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragLeaveEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragLeaveEvent_js__WEBPACK_IMPORTED_MODULE_9__.DragLeaveEvent, this );
		}
	}
);

/**
 * Gets the drag over event.
 * @property {Function} dragOverEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragOverEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragOverEvent_js__WEBPACK_IMPORTED_MODULE_10__.DragOverEvent, this );
		}
	}
);

/**
 * Gets the drag start event.
 * @property {Function} dragStartEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragStartEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DragStartEvent_js__WEBPACK_IMPORTED_MODULE_11__.DragStartEvent, this );
		}
	}
);

/**
 * Gets the drop event.
 * @property {Function} dropEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dropEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DropEvent_js__WEBPACK_IMPORTED_MODULE_12__.DropEvent, this );
		}
	}
);

/**
 * Gets the blur event.
 * @property {Function} blurEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'blurEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _BlurEvent_js__WEBPACK_IMPORTED_MODULE_2__.BlurEvent, this );
		}
	}
);

/**
 * Gets the focus event.
 * @property {Function} focusEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _FocusEvent_js__WEBPACK_IMPORTED_MODULE_13__.FocusEvent, this );
		}
	}
);

/**
 * Gets the focus in event.
 * @property {Function} focusInEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusInEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _FocusInEvent_js__WEBPACK_IMPORTED_MODULE_14__.FocusInEvent, this );
		}
	}
);

/**
 * Gets the focus out event.
 * @property {Function} focusOutEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusOutEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _FocusOutEvent_js__WEBPACK_IMPORTED_MODULE_15__.FocusOutEvent, this );
		}
	}
);

/**
 * Gets the key down event.
 * @property {Function} keyDownEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'keyDownEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _KeyDownEvent_js__WEBPACK_IMPORTED_MODULE_17__.KeyDownEvent, this );
		}
	}
);

/**
 * Gets the key up event.
 * @property {Function} keyUpEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'keyUpEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _KeyUpEvent_js__WEBPACK_IMPORTED_MODULE_18__.KeyUpEvent, this );
		}
	}
);

/**
 * Gets the click event.
 * @property {Function} clickEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'clickEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _ClickEvent_js__WEBPACK_IMPORTED_MODULE_4__.ClickEvent, this );
		}
	}
);

/**
 * Gets the double click event.
 * @property {Function} doubleClickEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'doubleClickEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _DoubleClickEvent_js__WEBPACK_IMPORTED_MODULE_5__.DoubleClickEvent, this );
		}
	}
);

/**
 * Gets the mouse down event.
 * @property {Function} mouseDownEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseDownEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseDownEvent_js__WEBPACK_IMPORTED_MODULE_19__.MouseDownEvent, this );
		}
	}
);

/**
 * Gets the mouse up event.
 * @property {Function} mouseUpEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseUpEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseUpEvent_js__WEBPACK_IMPORTED_MODULE_25__.MouseUpEvent, this );
		}
	}
);

/**
 * Gets the mouse enter event.
 * @property {Function} mouseEnterEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseEnterEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseEnterEvent_js__WEBPACK_IMPORTED_MODULE_20__.MouseEnterEvent, this );
		}
	}
);

/**
 * Gets the mouse move event.
 * @property {Function} mouseMoveEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseMoveEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseMoveEvent_js__WEBPACK_IMPORTED_MODULE_22__.MouseMoveEvent, this );
		}
	}
);

/**
 * Gets the mouse leave event.
 * @property {Function} mouseLeaveEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseLeaveEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseLeaveEvent_js__WEBPACK_IMPORTED_MODULE_21__.MouseLeaveEvent, this );
		}
	}
);

/**
 * Gets the mouse over event.
 * @property {Function} mouseOverEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseOverEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseOverEvent_js__WEBPACK_IMPORTED_MODULE_24__.MouseOverEvent, this );
		}
	}
);

/**
 * Gets the mouse out event.
 * @property {Function} mouseOutEvent
 * @memberOf HTMLElement.prototype
 * @type {Function}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseOutEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.EventManager( _MouseOutEvent_js__WEBPACK_IMPORTED_MODULE_23__.MouseOutEvent, this );
		}
	}
);


/***/ }),

/***/ "./src/Dom/InputEvent.js":
/*!*******************************!*\
  !*** ./src/Dom/InputEvent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputEvent: () => (/* binding */ InputEvent)
/* harmony export */ });
/* harmony import */ var _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractEvent.js */ "./src/Types/AbstractEvent.js");




/**
 * Represents an input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class InputEvent extends _Types_AbstractEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'input';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( InputEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/KeyDownEvent.js":
/*!*********************************!*\
  !*** ./src/Dom/KeyDownEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyDownEvent: () => (/* binding */ KeyDownEvent)
/* harmony export */ });
/* harmony import */ var _AbstractKeyboardEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractKeyboardEvent.js */ "./src/Dom/AbstractKeyboardEvent.js");




/**
 * Represents a key down event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class KeyDownEvent extends _AbstractKeyboardEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractKeyboardEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'keydown';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( KeyDownEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/KeyUpEvent.js":
/*!*******************************!*\
  !*** ./src/Dom/KeyUpEvent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyUpEvent: () => (/* binding */ KeyUpEvent)
/* harmony export */ });
/* harmony import */ var _AbstractKeyboardEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractKeyboardEvent.js */ "./src/Dom/AbstractKeyboardEvent.js");




/**
 * Represents a key up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class KeyUpEvent extends _AbstractKeyboardEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractKeyboardEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'keyup';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( KeyUpEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/KeyboardEvent.js":
/*!**********************************!*\
  !*** ./src/Dom/KeyboardEvent.js ***!
  \**********************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `KeyboardEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Determines if any modifier key has been pressed.
 * @property {Function} beforeInputEvent
 * @memberOf KeyboardEvent.prototype
 * @returns {Boolean} True if any modifier key has been pressed, otherwise false.
 */
Object.defineProperty(
	KeyboardEvent.prototype,
	'isModified',
	{
		get()
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);


/***/ }),

/***/ "./src/Dom/MouseDownEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/MouseDownEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseDownEvent: () => (/* binding */ MouseDownEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse down event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseDownEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mousedown';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseDownEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseEnterEvent.js":
/*!************************************!*\
  !*** ./src/Dom/MouseEnterEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseEnterEvent: () => (/* binding */ MouseEnterEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse enter event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseEnterEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseenter';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseEnterEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseEvent.js":
/*!*******************************!*\
  !*** ./src/Dom/MouseEvent.js ***!
  \*******************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `MouseEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Determines if any modifier key has been pressed.
 * @property {Function} beforeInputEvent
 * @memberOf MouseEvent.prototype
 * @returns {Boolean} True if any modifier key has been pressed, otherwise false.
 */
Object.defineProperty(
	MouseEvent.prototype,
	'isModified',
	{
		get()
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);


/***/ }),

/***/ "./src/Dom/MouseLeaveEvent.js":
/*!************************************!*\
  !*** ./src/Dom/MouseLeaveEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseLeaveEvent: () => (/* binding */ MouseLeaveEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseLeaveEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseleave';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseLeaveEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseMoveEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/MouseMoveEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseMoveEvent: () => (/* binding */ MouseMoveEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse move event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseMoveEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mousemove';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseMoveEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseOutEvent.js":
/*!**********************************!*\
  !*** ./src/Dom/MouseOutEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseOutEvent: () => (/* binding */ MouseOutEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseOutEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseout';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseOutEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseOverEvent.js":
/*!***********************************!*\
  !*** ./src/Dom/MouseOverEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseOverEvent: () => (/* binding */ MouseOverEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse over event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseOverEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseover';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseOverEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/MouseUpEvent.js":
/*!*********************************!*\
  !*** ./src/Dom/MouseUpEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseUpEvent: () => (/* binding */ MouseUpEvent)
/* harmony export */ });
/* harmony import */ var _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractMouseEvent.js */ "./src/Dom/AbstractMouseEvent.js");




/**
 * Represents a mouse up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class MouseUpEvent extends _AbstractMouseEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseup';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseUpEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Dom/NodeList.js":
/*!*****************************!*\
  !*** ./src/Dom/NodeList.js ***!
  \*****************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `NodeList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any node list node iteration.
 * @callback NodeList_NodeIterationHandler
 * @param {Node} nodeValue The value of the currently iterated node.
 * @param {Number} nodeIndex The index of the currently iterated node.
 */

/**
 * Invokes a specific iteration handler on every node list's node.
 * @method map
 * @memberOf NodeList.prototype
 * @param {NodeList_NodeIterationHandler} iterationHandler The iteration handler to invoke.
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


/***/ }),

/***/ "./src/Io/File.js":
/*!************************!*\
  !*** ./src/Io/File.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileNotReadableException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileNotReadableException.js */ "./src/Io/FileNotReadableException.js");


/**
 * Represents prototype extensions and JSDoc types of the class `File`.
 * @author Christian Ramelow <info@codekandis.net>
 */



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
								       _FileNotReadableException_js__WEBPACK_IMPORTED_MODULE_0__.FileNotReadableException.with_file( this )
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


/***/ }),

/***/ "./src/Io/FileList.js":
/*!****************************!*\
  !*** ./src/Io/FileList.js ***!
  \****************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `FileList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any file iteration.
 * @callback FileList_FileIterationHandler
 * @param {File} file The currently iterated file.
 * @param {Number} fileIndex The index of the currently iterated file.
 */

/**
 * Represents the handler of any file comparison.
 * @callback FileList_FileComparisonHandler
 * @param {File} file_1 The first file to compare.
 * @param {File} file_2 The second file to compare.
 * @returns {Number} -1 if the first file is lower than the second file, 0 if the first file is equal to the second file and 1 if the first file is greater than the second file.
 */

/**
 * Represents the handler of any file transformation.
 * @callback FileList_FileTransformationHandler
 * @param {File} file The currently iterated file.
 * @param {Number} fileIndex The index of the currently iterated file.
 * @returns {*} The transformed file.
 */

/**
 * Invokes a specific iteration handler on every file.
 * @method forEach
 * @memberOf FileList.prototype
 * @param {FileList_FileIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	FileList.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
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

/**
 * Invokes a specific transformation handler on every file of the file list.
 * @method map
 * @memberOf FileList.prototype
 * @param {FileList_FileTransformationHandler} transformationHandler The transformation handler used to map the files.
 * @returns {*[]} The array containing the transformed files.
 */
Object.defineProperty(
	FileList.prototype,
	'map',
	{
		value: function ( transformationHandler )
		       {
			       const mappedFileList = [];
			       let fetchedFileIndex = 0;

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


/***/ }),

/***/ "./src/Io/FileNotReadableException.js":
/*!********************************************!*\
  !*** ./src/Io/FileNotReadableException.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileNotReadableException: () => (/* binding */ FileNotReadableException)
/* harmony export */ });
/* harmony import */ var _IoException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IoException.js */ "./src/Io/IoException.js");




/**
 * Represents an exception if a file is not readable.
 * @author Christian Ramelow <info@codekandis.net>
 */
class FileNotReadableException extends _IoException_js__WEBPACK_IMPORTED_MODULE_0__.IoException
{
	/**
	 * Static constructor method.
	 * @param {File} file The file which is not readable.
	 * @returns {FileNotReadableException}
	 * @constructor
	 */
	static with_file( file )
	{
		return new this(
			String.format`The file \`${ 0 }\` is not readable.`( file.name )
		);
	}
}


/***/ }),

/***/ "./src/Io/FileReader.js":
/*!******************************!*\
  !*** ./src/Io/FileReader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Processes_AbortEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Processes/AbortEvent.js */ "./src/Processes/AbortEvent.js");
/* harmony import */ var _Processes_ErrorEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processes/ErrorEvent.js */ "./src/Processes/ErrorEvent.js");
/* harmony import */ var _Processes_LoadEndEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Processes/LoadEndEvent.js */ "./src/Processes/LoadEndEvent.js");
/* harmony import */ var _Processes_LoadEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Processes/LoadEvent.js */ "./src/Processes/LoadEvent.js");
/* harmony import */ var _Processes_LoadStartEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Processes/LoadStartEvent.js */ "./src/Processes/LoadStartEvent.js");
/* harmony import */ var _Processes_ProgressEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Processes/ProgressEvent.js */ "./src/Processes/ProgressEvent.js");
/* harmony import */ var _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Types/EventManager.js */ "./src/Types/EventManager.js");


/**
 * Represents prototype extensions and JSDoc types of the class `FileReader`.
 * @author Christian Ramelow <info@codekandis.net>
 */









/**
 * Gets the abort event.
 * @property {Function} abortEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'abortEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_AbortEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbortEvent, this );
		}
	}
);

/**
 * Gets the error event.
 * @property {Function} errorEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'errorEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_ErrorEvent_js__WEBPACK_IMPORTED_MODULE_1__.ErrorEvent, this );
		}
	}
);

/**
 * Gets the load event.
 * @property {Function} loadEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_LoadEvent_js__WEBPACK_IMPORTED_MODULE_3__.LoadEvent, this );
		}
	}
);

/**
 * Gets the load end event.
 * @property {Function} loadEndEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadEndEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_LoadEndEvent_js__WEBPACK_IMPORTED_MODULE_2__.LoadEndEvent, this );
		}
	}
);

/**
 * Gets the load start event.
 * @property {Function} loadStartEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadStartEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_LoadStartEvent_js__WEBPACK_IMPORTED_MODULE_4__.LoadStartEvent, this );
		}
	}
);

/**
 * Gets the progress event.
 * @property {Function} progressEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'progressEvent',
	{
		get()
		{
			return new _Types_EventManager_js__WEBPACK_IMPORTED_MODULE_6__.EventManager( _Processes_ProgressEvent_js__WEBPACK_IMPORTED_MODULE_5__.ProgressEvent, this );
		}
	}
);


/***/ }),

/***/ "./src/Io/IoException.js":
/*!*******************************!*\
  !*** ./src/Io/IoException.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IoException: () => (/* binding */ IoException)
/* harmony export */ });
/* harmony import */ var _Types_RuntimeException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/RuntimeException.js */ "./src/Types/RuntimeException.js");




/**
 * Represents an IO exception.
 * @author Christian Ramelow <info@codekandis.net>
 */
class IoException extends _Types_RuntimeException_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeException
{
}


/***/ }),

/***/ "./src/Net/Http/Headers/Headers.js":
/*!*****************************************!*\
  !*** ./src/Net/Http/Headers/Headers.js ***!
  \*****************************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any header iteration.
 * @callback Headers_HeaderIterationHandler
 * @param {String} headerName The name of the currently iterated header.
 * @param {String} headerValue The value of the currently iterated header.
 * @param {Number} headerIndex The index of the currently iterated header.
 */

/**
 * Represents the handler of any header comparison.
 * @callback Headers_HeaderComparisonHandler
 * @param {Array.<String, String>} header_1 The first header to compare.
 * @param {Array.<String, String>} header_2 The second header to compare.
 * @returns {Number} -1 if the first header is lower than the second header, 0 if the first header is equal to the second header and 1 if the first header is greater than the second header.
 */

/**
 * Represents the handler of any header transformation.
 * @callback Headers_HeaderTransformationHandler
 * @param {String} headerName The name of the currently iterated header.
 * @param {String} headerValue The value of the currently iterated header.
 * @param {Number} headerIndex The index of the currently iterated header.
 * @returns {*} The transformed header.
 */

/**
 * Invokes a specific iteration handler on every header.
 * @method forEach
 * @memberOf Headers.prototype
 * @param {Headers_HeaderIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	Headers.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
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

/**
 * Transforms all headers into an array.
 * @method map
 * @memberOf Headers.prototype
 * @param {Headers_HeaderTransformationHandler} transformationHandler The transformation handler used to map the headers.
 * @returns {*[]} The array containing the transformed headers.
 */
Object.defineProperty(
	Headers.prototype,
	'map',
	{
		value: function ( transformationHandler )
		       {
			       const mappedHeaders    = [];
			       let fetchedHeaderIndex = 0;

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


/***/ }),

/***/ "./src/Net/PartialUrlType.js":
/*!***********************************!*\
  !*** ./src/Net/PartialUrlType.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartialUrlType: () => (/* binding */ PartialUrlType)
/* harmony export */ });
/* harmony import */ var _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/AbstractStatic.js */ "./src/Types/AbstractStatic.js");




/**
 * Represents an enumeration of partial URL types.
 * @author Christian Ramelow <info@codekandis.net>
 */
class PartialUrlType extends _Types_AbstractStatic_js__WEBPACK_IMPORTED_MODULE_0__.AbstractStatic
{
	/**
	 * Specifies the protocol of the URL.
	 * @type {String}
	 */
	static get PROTOCOL()
	{
		return 'PROTOCOL';
	}

	/**
	 * Specifies the username of the URL.
	 * @type {String}
	 */
	static get USERNAME()
	{
		return 'USERNAME';
	}

	/**
	 * Specifies the password of the URL.
	 * @type {String}
	 */
	static get PASSWORD()
	{
		return 'PASSWORD';
	}

	/**
	 * Specifies the host name of the URL.
	 * @type {String}
	 */
	static get HOSTNAME()
	{
		return 'HOSTNAME';
	}

	/**
	 * Specifies the port of the URL.
	 * @type {String}
	 */
	static get PORT()
	{
		return 'PORT';
	}

	/**
	 * Specifies the path name of the URL.
	 * @type {String}
	 */
	static get PATHNAME()
	{
		return 'PATHNAME';
	}

	/**
	 * Specifies the query string of the URL.
	 * @type {String}
	 */
	static get SEARCH()
	{
		return 'SEARCH';
	}

	/**
	 * Specifies the hash of the URL.
	 * @type {String}
	 */
	static get HASH()
	{
		return 'HASH';
	}
}


/***/ }),

/***/ "./src/Net/UnknownPartialUrlTypeException.js":
/*!***************************************************!*\
  !*** ./src/Net/UnknownPartialUrlTypeException.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnknownPartialUrlTypeException: () => (/* binding */ UnknownPartialUrlTypeException)
/* harmony export */ });
/* harmony import */ var _Types_LogicException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/LogicException.js */ "./src/Types/LogicException.js");




/**
 * Represents the exception if a partial URL type is unknown.
 * @author Christian Ramelow <info@codekandis.net>
 */
class UnknownPartialUrlTypeException extends _Types_LogicException_js__WEBPACK_IMPORTED_MODULE_0__.LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} partialUrlType The partial URL type which is invalid.
	 * @returns {UnknownPartialUrlTypeException}
	 * @constructor
	 */
	static with_partialUrlType( partialUrlType )
	{
		return new this(
			String.format`The partial URL \`${ 0 }\` is invalid.`( partialUrlType )
		);
	}
}


/***/ }),

/***/ "./src/Net/Url.js":
/*!************************!*\
  !*** ./src/Net/Url.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartialUrlType.js */ "./src/Net/PartialUrlType.js");
/* harmony import */ var _UnknownPartialUrlTypeException_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnknownPartialUrlTypeException.js */ "./src/Net/UnknownPartialUrlTypeException.js");





/**
 * Represents JSDoc types and prototype extensions of the class `URL`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Gets a specified portion of the URL.
 * @memberOf URL.prototype
 * @param {String} partialUrlType The end of the URL portion to return.
 * @returns {String} The extraced partial URL.
 * @throws {UnknownPartialUrlTypeException} The partial URL is invalid.
 */
Object.defineProperty(
	URL.prototype,
	'getLeftPart',
	{
		value: function ( partialUrlType )
		       {
			       switch ( partialUrlType )
			       {
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PROTOCOL:
				       {
					       return String.format`${ 0 }`
					       ( this.protocol );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.USERNAME:
				       {
					       return String.format`${ 0 }//${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PROTOCOL ),
						       this.username
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PASSWORD:
				       {
					       if ( String.empty === this.password )
					       {
						       return this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.USERNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.USERNAME ),
						       this.password
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.HOSTNAME:
				       {
					       if ( String.empty === this.username && String.empty === this.password )
					       {
						       return String.format`${ 0 }${ 1 }`
						       (
							       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PASSWORD ),
							       this.hostname
						       );
					       }

					       return String.format`${ 0 }@${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PASSWORD ),
						       this.hostname
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PORT:
				       {
					       if ( String.empty === this.port )
					       {
						       return this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.HOSTNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.HOSTNAME ),
						       this.port
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PATHNAME:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PORT ),
						       this.pathname
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.SEARCH:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.PATHNAME ),
						       this.search
					       );
				       }
				       case _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.HASH:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( _PartialUrlType_js__WEBPACK_IMPORTED_MODULE_0__.PartialUrlType.SEARCH ),
						       this.hash
					       );
				       }
			       }

			       throw _UnknownPartialUrlTypeException_js__WEBPACK_IMPORTED_MODULE_1__.UnknownPartialUrlTypeException.with_partialUrlType( partialUrlType );
		       }
	}
);


/***/ }),

/***/ "./src/Processes/AbortEvent.js":
/*!*************************************!*\
  !*** ./src/Processes/AbortEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortEvent: () => (/* binding */ AbortEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents an abort event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbortEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'abort';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( AbortEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Processes/AbstractProgressEvent.js":
/*!************************************************!*\
  !*** ./src/Processes/AbstractProgressEvent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractProgressEvent: () => (/* binding */ AbstractProgressEvent)
/* harmony export */ });
/* harmony import */ var _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any progress event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractProgressEvent extends MouseEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _Types_DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Processes/ErrorEvent.js":
/*!*************************************!*\
  !*** ./src/Processes/ErrorEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorEvent: () => (/* binding */ ErrorEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents an error event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class ErrorEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'error';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ErrorEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Processes/LoadEndEvent.js":
/*!***************************************!*\
  !*** ./src/Processes/LoadEndEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadEndEvent: () => (/* binding */ LoadEndEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents a load end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class LoadEndEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'loadend';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadEndEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Processes/LoadEvent.js":
/*!************************************!*\
  !*** ./src/Processes/LoadEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadEvent: () => (/* binding */ LoadEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents a load event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class LoadEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'load';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Processes/LoadStartEvent.js":
/*!*****************************************!*\
  !*** ./src/Processes/LoadStartEvent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStartEvent: () => (/* binding */ LoadStartEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents a load start event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class LoadStartEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'loadstart';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadStartEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Processes/ProgressEvent.js":
/*!****************************************!*\
  !*** ./src/Processes/ProgressEvent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressEvent: () => (/* binding */ ProgressEvent)
/* harmony export */ });
/* harmony import */ var _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractProgressEvent.js */ "./src/Processes/AbstractProgressEvent.js");




/**
 * Represents a progress event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class ProgressEvent extends _AbstractProgressEvent_js__WEBPACK_IMPORTED_MODULE_0__.AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'progress';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ProgressEvent.EVENT_NAME, sender );
	}
}


/***/ }),

/***/ "./src/Types/Abstract.js":
/*!*******************************!*\
  !*** ./src/Types/Abstract.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Abstract: () => (/* binding */ Abstract)
/* harmony export */ });


/**
 * Represents the base class of any instantiable class.
 * @author Christian Ramelow <info@codekandis.net>
 */
class Abstract extends EventTarget
{
	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();
	}
}


/***/ }),

/***/ "./src/Types/AbstractEvent.js":
/*!************************************!*\
  !*** ./src/Types/AbstractEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractEvent: () => (/* binding */ AbstractEvent)
/* harmony export */ });
/* harmony import */ var _DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultEventDetails.js */ "./src/Types/DefaultEventDetails.js");




/**
 * Represents the base class of any event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractEvent extends Event
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which will dispatch the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new _DefaultEventDetails_js__WEBPACK_IMPORTED_MODULE_0__.DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}


/***/ }),

/***/ "./src/Types/AbstractStatic.js":
/*!*************************************!*\
  !*** ./src/Types/AbstractStatic.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStatic: () => (/* binding */ AbstractStatic)
/* harmony export */ });
/* harmony import */ var _InvalidStaticClassInstantiationException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvalidStaticClassInstantiationException.js */ "./src/Types/InvalidStaticClassInstantiationException.js");




/**
 * Represents the base class of any static class.
 * @author Christian Ramelow <info@codekandis.net>
 */
class AbstractStatic
{
	/**
	 * Constructor method.
	 * @throws {InvalidStaticClassInstantiationException} The nonstatic class must not be instantiated.
	 */
	constructor()
	{
		throw _InvalidStaticClassInstantiationException_js__WEBPACK_IMPORTED_MODULE_0__.InvalidStaticClassInstantiationException.with_object( this );
	}
}


/***/ }),

/***/ "./src/Types/Array.js":
/*!****************************!*\
  !*** ./src/Types/Array.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvalidIndexException.js */ "./src/Types/InvalidIndexException.js");


/**
 * Represents prototype extensions and JSDoc types of the class `Array`.
 * @author Christian Ramelow <info@codekandis.net>
 */



/**
 * Represents the handler of any array element iteration.
 * @callback Array_ElementIterationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 */

/**
 * Represents the handler of any array elements comparison.
 * @callback Array_ElementComparisonHandler
 * @param {*} element_1 The first element to compare.
 * @param {*} element_2 The second element to compare.
 * @returns {Number} -1 if the first element is lower than the second element, 0 if the first element is equal to the second element and 1 if the first element is greater than the second element.
 */

/**
 * Represents the handler of any array element transformation.
 * @callback Array_ElementTransformationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 * @returns {*} The transformed element.
 */

/**
 * Represents the handler of any array element determination.
 * @callback Array_ElementPredicateHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 * @returns {Boolean} True if the currently iterated element matches the predicate, otherwise false.
 */

/**
 * Determines if the array includes an element specified by a variadic amount of predicate handlers.
 * @method includesBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 * @returns {Boolean} True if the element is included in the array, otherwise false.
 */
Object.defineProperty(
	Array.prototype,
	'includesBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       let isValid = false;

			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       return !isValid;
				       }
			       );

			       return isValid;
		       }
	}
);

/**
 * Adds a variadic amount of elements to the array.
 * @method add
 * @memberOf Array.prototype
 * @param {...*} elements The elements to add.
 */
Object.defineProperty(
	Array.prototype,
	'add',
	{
		value: function ( ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       this[ this.length ] = fetchedElement;
				       }
			       );
		       }
	}
);

/**
 * Adds a variadic amount of elements to the array by a specific predicate handler.
 * @method addBy
 * @memberOf Array.prototype
 * @param {Array_ElementPredicateHandler} predicateHandler The predicate handler to determine the elements to add.
 * @param {...*} elements The elements to add.
 */
Object.defineProperty(
	Array.prototype,
	'addBy',
	{
		value: function ( predicateHandler, ...elements )
		       {
			       this.add(
				       ...elements.findAllBy( predicateHandler )
			       );
		       }
	}
);

/**
 * Replaces all elements in the array specified by their indices.
 * @method replaceAt
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...Number} indices The indices of the elements to replace.
 * @throws {InvalidIndexException} An index is invalid.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAt',
	{
		value: function ( elementReplacement, ...indices )
		       {
			       indices.forEach(
				       ( fetchedIndex ) =>
				       {
					       if ( 0 > fetchedIndex || 0 === this.length )
					       {
						       throw _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__.InvalidIndexException.with_index( fetchedIndex );
					       }

					       this[ fetchedIndex ] = elementReplacement;
				       }
			       );
		       }
	}
);

/**
 * Replaces the first occurences of a variadic amount of elements in the array with a specified element.
 * @method replace
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the element with.
 * @param {...*} elements The elements which has to be replaced.
 */
Object.defineProperty(
	Array.prototype,
	'replace',
	{
		value: function ( elementReplacement, ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const index = this.findFirstIndexOf( fetchedElement );

					       if ( undefined !== index )
					       {
						       this.replaceAt( elementReplacement, index );
					       }
				       }
			       );
		       }
	}
);

/**
 * Replaces the first occurences of elements in the array specified by a variadic amount of predicate handlers with a specified element.
 * @method replaceBy
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the element with.
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 */
Object.defineProperty(
	Array.prototype,
	'replaceBy',
	{
		value: function ( elementReplacement, ...predicateHandlers )
		       {
			       const index = this.findFirstIndexOfBy( ...predicateHandlers );

			       if ( undefined !== index )
			       {
				       this.replaceAt( elementReplacement, index );
			       }
		       }
	}
);

/**
 * Replaces a variadic amount of elements in the array with a specified element.
 * @method replaceAll
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...*} elements The elements which has to be replaced.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAll',
	{
		value: function ( elementReplacement, ...elements )
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOf( ...elements )
			       );
		       }
	}
);

/**
 * Replaces all occurences of an element in the array specified by a variadic amount of predicate handlers.
 * @method replaceAllBy
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the elements.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAllBy',
	{
		value: function ( elementReplacement, ...predicateHandlers )
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOfBy( ...predicateHandlers )
			       );
		       }
	}
);

/**
 * Removes elements from the array specified by a variadic amount of their indices.
 * @method removeAt
 * @memberOf Array.prototype
 * @param {...Number} indices The index of the element to remove.
 * @throws {InvalidIndexException} An index is invalid.
 */
Object.defineProperty(
	Array.prototype,
	'removeAt',
	{
		value: function ( ...indices )
		       {
			       let correctiveElementIndexOffset = 0;

			       indices
				       .sortNumeric()
				       .forEach(
					       ( fetchedIndex ) =>
					       {
						       if ( 0 > fetchedIndex || 0 === this.length )
						       {
							       throw _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__.InvalidIndexException.with_index( fetchedIndex );
						       }

						       this.splice( fetchedIndex - correctiveElementIndexOffset, 1 );
						       correctiveElementIndexOffset++;
					       }
				       );
		       }
	}
);

/**
 * Removes the first occurences of a variadic amount of elements from the array.
 * @method remove
 * @memberOf Array.prototype
 * @param {...*} elements The elements to remove.
 */
Object.defineProperty(
	Array.prototype,
	'remove',
	{
		value: function ( ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const elementIndex = this.indexOf( fetchedElement );

					       if ( -1 === elementIndex )
					       {
						       return;
					       }

					       this.removeAt( elementIndex );
				       }
			       );
		       }
	}
);

/**
 * Removes the first occurence of an element from the array specified by a variadic amount of predicate handlers.
 * @method removeBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 */
Object.defineProperty(
	Array.prototype,
	'removeBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       this.remove( fetchedElement );
					       }

					       return !isValid;
				       }
			       );
		       }
	}
);

/**
 * Removes all occurences of a variadic amount of elements from the array.
 * @method removeAll
 * @memberOf Array.prototype
 * @param {...*} elements The elements to remove.
 */
Object.defineProperty(
	Array.prototype,
	'removeAll',
	{
		value: function ( ...elements )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = elements.includes( fetchedElement );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

/**
 * Removes all occurences of elements from the array specified by a variadic amount of predicate handlers.
 * @method removeAllBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the elements.
 */
Object.defineProperty(
	Array.prototype,
	'removeAllBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

/**
 * Gets the first index of an element.
 * @method findFirstIndexOf
 * @memberOf Array.prototype
 * @param {*} element The element to determine its first index.
 * @returns {undefined|Number} The first index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstIndexOf',
	{
		value: function ( element )
		       {
			       const index = this.indexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the first index of an element specified by a variadic amount of predicate handlers.
 * @method findFirstIndexOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 * @returns {undefined|Number} The first index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstIndexOfBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the last index of an element.
 * @method findLastIndexOf
 * @memberOf Array.prototype
 * @param {*} element The element to determine its last index.
 * @returns {undefined|Number} The last index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastIndexOf',
	{
		value: function ( element )
		       {
			       const index = this.lastIndexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the last index of an element specified by a variadic amount of predicate handlers.
 * @method findLastIndexOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 * @returns {undefined|Number} The last index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastIndexOfBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets all indices of specific elements.
 * @method findAllIndicesOf
 * @memberOf Array.prototype
 * @param {...*} elements The elements to determine their indices.
 * @returns {Number[]} The indices of the elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllIndicesOf',
	{
		value: function ( ...elements )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedIndex ) =>
				       {
					       if ( true === elements.includes( fetchedElement ) )
					       {
						       indices[ indices.length ] = fetchedIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

/**
 * Gets the indices of all occurences of any element specified by a variadic amount of predicate handlers.
 * @method findAllIndicesOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the elements.
 * @returns {Number[]} The indices of the elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllIndicesOfBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

/**
 * Gets an element from the array specified by its index.
 * @method findAt
 * @memberOf Array.prototype
 * @param {Number} index The index of the element.
 * @returns {undefined|*} The element, if found.
 */
Object.defineProperty(
	Array.prototype,
	'findAt',
	{
		value: function ( index )
		       {
			       if ( 0 > index )
			       {
				       throw  _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__.InvalidIndexException.with_index( index );
			       }

			       return 0 === this.length
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets the first element from the array specified by a variadic amount of predicate handlers.
 * @method findFirstOrUndefinedBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 * @returns {undefined|*} The first element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstOrUndefinedBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets the last element from the array specified by a variadic amount of predicate handlers.
 * @method findLastOrUndefinedBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the element.
 * @returns {undefined|*} The last element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastOrUndefinedBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets all elements from the array specified by a variadic amount of predicate handlers.
 * @method findAllBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers to determine the elements.
 * @returns {*[]} The elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllBy',
	{
		value: function ( ...predicateHandlers )
		       {
			       const elements = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       elements[ elements.length ] = fetchedElement;
					       }
				       }
			       );

			       return elements;
		       }
	}
);

/**
 * Sorts the numeric array by natural numeric order. The array will not be sorted in place.
 * @method sortNumeric
 * @memberOf Array.prototype
 * @returns {Number[]} The sorted array.
 */
Object.defineProperty(
	Array.prototype,
	'sortNumeric',
	{
		value: function ()
		       {
			       return [ ...this ].sort(
				       ( element_1, element_2 ) =>
				       {
					       return element_1 - element_2;
				       }
			       );
		       }
	}
);

/**
 * Sorts the array specified by a comparison handler. The array will not be sorted in place.
 * @method sortBy
 * @memberOf Array.prototype
 * @param {Array_ElementComparisonHandler} comparisonHandler The comparison handler used to compare the elements.
 * @returns {*[]} The sorted array.
 */
Object.defineProperty(
	Array.prototype,
	'sortBy',
	{
		value: function ( comparisonHandler )
		       {
			       return [ ...this ].sort( comparisonHandler );
		       }
	}
);

/**
 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of transformation handlers.
 * @method joinMapped
 * @memberOf Array.prototype
 * @param {String} delimiter The delimiter used to concatenate the mapped elements.
 * @param {...Array_ElementTransformationHandler} transformationHandlers The transformation handlers used to transform the elements.
 * @returns {String} The concatenated string.
 */
Object.defineProperty(
	Array.prototype,
	'joinMapped',
	{
		value: function ( delimiter, ...transformationHandlers )
		       {
			       let transformedArray = this;
			       transformationHandlers.forEach(
				       ( fetchedTransformationHandler ) =>
				       {
					       transformedArray = transformedArray.map( fetchedTransformationHandler );
				       }
			       );

			       return transformedArray.join( delimiter );
		       }
	}
);

/**
 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of predicate handlers.
 * @method joinBy
 * @memberOf Array.prototype
 * @param {String} delimiter The delimiter used to concatenate the elements.
 * @param {...Array_ElementPredicateHandler} predicateHandlers The predicate handlers used to determine the elements.
 * @returns {String} The concatenated string.
 */
Object.defineProperty(
	Array.prototype,
	'joinBy',
	{
		value: function ( delimiter, ...predicateHandlers )
		       {
			       return this
				       .findAllBy( ...predicateHandlers )
				       .join( delimiter );
		       }
	}
);

/**
 * Gets the JSON representation of the array.
 * @method toJSON
 * @memberOf Array.prototype
 * @returns {*[]} The JSON representation of the array.
 */
Object.defineProperty(
	Array.prototype,
	'toJSON',
	{
		value: function ()
		       {
			       return [ ...this ]
				       .map(
					       ( fetchedItem ) =>
					       {
						       return false === fetchedItem.hasMethod( 'toJSON' )
							       ? fetchedItem
							       : fetchedItem.toJSON();
					       }
				       );
		       }
	}
);


/***/ }),

/***/ "./src/Types/Date.js":
/*!***************************!*\
  !*** ./src/Types/Date.js ***!
  \***************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `Date`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Compares two dates.
 * @method compare
 * @memberOf Date
 * @param {Date} date_1 The first date to compare.
 * @param {Date} date_2 The second date to compare.
 * @returns {Number} -1 if the first date is lower than the second date, 0 if both dates are equal, 1 if the first date is greater than the second date.
 * @static
 */
Object.defineProperty(
	Date,
	'compare',
	{
		value: function ( date_1, date_2 )
		       {
			       const time_1 = date_1.getTime();
			       const time_2 = date_2.getTime();
			       if ( time_1 < time_2 )
			       {
				       return -1;
			       }
			       if ( time_1 === time_2 )
			       {
				       return 0;
			       }
			       if ( time_1 > time_2 )
			       {
				       return 1;
			       }
		       }
	}
);

/**
 * Creates a date from a JSON date object.
 * @method fromJSON
 * @memberOf Date
 * @param {Object} data The JSON object to create the date from.
 * @returns {Date} The created date.
 * @static
 */
Object.defineProperty(
	Date,
	'fromJSON',
	{
		value: function ( data )
		       {
			       return undefined === data || null === data
				       ? null
				       : new Date( data.date );
		       }
	}
);

/**
 * Compares the date with another specific date.
 * @method compareWith
 * @memberOf Date.prototype
 * @param {Date} date The date to compare with.
 * @returns {Number} -1 if the date is lower than the passed date, 0 if both dates are equal, 1 if the date is greater than the passed date.
 */
Object.defineProperty(
	Date.prototype,
	'compareWith',
	{
		value: function ( date )
		       {
			       return Date.compare( this, date );
		       }
	}
);


/***/ }),

/***/ "./src/Types/DefaultEventDetails.js":
/*!******************************************!*\
  !*** ./src/Types/DefaultEventDetails.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultEventDetails: () => (/* binding */ DefaultEventDetails)
/* harmony export */ });
/* harmony import */ var _EventArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventArguments.js */ "./src/Types/EventArguments.js");
/* harmony import */ var _EventDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDetails.js */ "./src/Types/EventDetails.js");





/**
 * Represents the default event details.
 * @author Christian Ramelow <info@codekandis.net>
 */
class DefaultEventDetails extends _EventDetails_js__WEBPACK_IMPORTED_MODULE_1__.EventDetails
{
	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super( sender, new _EventArguments_js__WEBPACK_IMPORTED_MODULE_0__.EventArguments() );
	}
}


/***/ }),

/***/ "./src/Types/Event.js":
/*!****************************!*\
  !*** ./src/Types/Event.js ***!
  \****************************/
/***/ (() => {



/**
 * Represents JSDoc types of the class `Event`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents an event handler.
 * @callback Event_EventHandler
 * @param {Event} event The event the handler is attached to.
 */


/***/ }),

/***/ "./src/Types/EventArguments.js":
/*!*************************************!*\
  !*** ./src/Types/EventArguments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventArguments: () => (/* binding */ EventArguments)
/* harmony export */ });
/* harmony import */ var _Abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstract.js */ "./src/Types/Abstract.js");




/**
 * Represents the default event arguments.
 * @author Christian Ramelow <info@codekandis.net>
 */
class EventArguments extends _Abstract_js__WEBPACK_IMPORTED_MODULE_0__.Abstract
{
}


/***/ }),

/***/ "./src/Types/EventDetails.js":
/*!***********************************!*\
  !*** ./src/Types/EventDetails.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventDetails: () => (/* binding */ EventDetails)
/* harmony export */ });
/* harmony import */ var _Abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstract.js */ "./src/Types/Abstract.js");




/**
 * Represents event details.
 * @author Christian Ramelow <info@codekandis.net>
 */
class EventDetails extends _Abstract_js__WEBPACK_IMPORTED_MODULE_0__.Abstract
{
	/**
	 * Stores the object which dispatched the event.
	 * @type {Object}
	 */
	#_sender;

	/**
	 * Stores the arguments of the event.
	 * @type {EventArguments}
	 */
	#_eventArguments;

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {EventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super();

		this.#_sender         = sender;
		this.#_eventArguments = eventArguments;
	}

	/**
	 * Gets the object which dispatched the event.
	 * @returns {Object} The object which dispatched the event.
	 */
	get sender()
	{
		return this.#_sender;
	}

	/**
	 * Gets the arguments of the event.
	 * @returns {EventArguments} The arguments of the event.
	 */
	get eventArguments()
	{
		return this.#_eventArguments;
	}
}


/***/ }),

/***/ "./src/Types/EventHandlerMapping.js":
/*!******************************************!*\
  !*** ./src/Types/EventHandlerMapping.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventHandlerMapping: () => (/* binding */ EventHandlerMapping)
/* harmony export */ });
/* harmony import */ var _Collections_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collections/Collection.js */ "./src/Collections/Collection.js");
/* harmony import */ var _Abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Abstract.js */ "./src/Types/Abstract.js");





/**
 * Represents a mapping of an event name and event handlers.
 * @author Christian Ramelow <info@codekandis.net>
 */
class EventHandlerMapping extends _Abstract_js__WEBPACK_IMPORTED_MODULE_1__.Abstract
{
	/**
	 * Stores the event name.
	 * @type {String}
	 */
	#_eventName;

	/**
	 * Stores the event handlers.
	 * @type {Collection<Event_EventHandler>}
	 */
	#_eventHandlers;

	/**
	 * Constructor method.
	 * @param {String} eventName The event name.
	 * @param {...Event_EventHandler} eventHandlers The event handlers.
	 */
	constructor( eventName, ...eventHandlers )
	{
		super();

		this.#_eventName     = eventName;
		this.#_eventHandlers = new _Collections_Collection_js__WEBPACK_IMPORTED_MODULE_0__.Collection( ...eventHandlers );
	}

	/**
	 * Gets the event name.
	 * @returns {String} The event name.
	 */
	get eventName()
	{
		return this.#_eventName;
	}

	/**
	 * Gets the event handlers.
	 * @returns {Collection<Event_EventHandler>} The event handlers.
	 */
	get eventHandlers()
	{
		return this.#_eventHandlers;
	}
}


/***/ }),

/***/ "./src/Types/EventManager.js":
/*!***********************************!*\
  !*** ./src/Types/EventManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventManager: () => (/* binding */ EventManager)
/* harmony export */ });
/* harmony import */ var _Dom_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dom/DomHelper.js */ "./src/Dom/DomHelper.js");
/* harmony import */ var _Abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Abstract.js */ "./src/Types/Abstract.js");
/* harmony import */ var _EventHandlerMapping_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandlerMapping.js */ "./src/Types/EventHandlerMapping.js");






/**
 * Represents an event manager managing event handlers for a specific event.
 * @author Christian Ramelow <info@codekandis.net>
 */
class EventManager extends _Abstract_js__WEBPACK_IMPORTED_MODULE_1__.Abstract
{
	/**
	 * Stores the class reference of the managed event.
	 * @type {Function} The class reference of the managed event.
	 */
	#_eventClass;

	/**
	 * Stores the object which will dispatch the event.
	 * @type {Object}
	 */
	#_sender;

	/**
	 * Constructor method.
	 * @param {Function} eventClass The class of the managed event.
	 * @param {Object} sender The object which will dispatch the event.
	 * @returns {Function} The event managing function.
	 */
	constructor( eventClass, sender )
	{
		super();

		this.#_eventClass = eventClass;
		this.#_sender     = sender;

		this.#initialize();

		return this.#addEventHandlers;
	}

	/**
	 * Initializes the event manager.
	 */
	#initialize()
	{
		this.#addEventHandlers.dispatch = this.#dispatch;
		this.#addEventHandlers.remove   = this.#remove;
	}

	/**
	 * Adds a variadic amount of event handlers to the managed event.
	 * @param {...Function<Event>} eventHandlers The event handlers to add.
	 */
	#addEventHandlers = ( ...eventHandlers ) =>
	{
		_Dom_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.DomHelper.addEventHandlers(
			this.#_sender,
			new _EventHandlerMapping_js__WEBPACK_IMPORTED_MODULE_2__.EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Removes a variadic amount of event handlers from a managed event.
	 * @param {...Function<Event>} eventHandlers The event handlers to remove.
	 */
	#remove = ( ...eventHandlers ) =>
	{
		_Dom_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.DomHelper.removeEventHandlers(
			this.#_sender,
			new _EventHandlerMapping_js__WEBPACK_IMPORTED_MODULE_2__.EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Dispatches the managed event.
	 * @param {?EventArguments} eventArguments The arguments of the managed event.
	 */
	#dispatch = ( eventArguments ) =>
	{
		( new this.#_eventClass( this.#_sender, eventArguments ) )
			.dispatch();
	}
}


/***/ }),

/***/ "./src/Types/Exception.js":
/*!********************************!*\
  !*** ./src/Types/Exception.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exception: () => (/* binding */ Exception)
/* harmony export */ });


/**
 * Represents the base class of any exception.
 * @author Christian Ramelow <info@codekandis.net>
 */
class Exception extends Error
{
	/**
	 * Stores the message of the exception.
	 * @type {String}
	 */
	#_message;

	/**
	 * Constructor method.
	 * @param {String} message The message of the exception.
	 */
	constructor( message )
	{
		super( message );

		this.#_message = message;
	}
}


/***/ }),

/***/ "./src/Types/Generator.js":
/*!********************************!*\
  !*** ./src/Types/Generator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Generator: () => (/* binding */ Generator)
/* harmony export */ });


/**
 * Represents prototype extensions and JSDoc types of the class `Generator`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any generator element iteration.
 * @callback Generator_ElementIterationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 */

/**
 * Stores the prototype of any generator.
 * @type {Object}
 */
const Generator = Object.getPrototypeOf(
	function* ()
	{
	}
);

/**
 * Invokes a specific iteration handler on every object's property.
 * @method forEach
 * @memberOf Generator.prototype
 * @param {Generator_ElementIterationHandler} iterationHandler
 */
Object.defineProperty(
	Generator.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       let elementIndex = 0;
			       for ( const elementValue of this )
			       {
				       iterationHandler( elementValue, elementIndex++ );
			       }
		       }
	}
);


/***/ }),

/***/ "./src/Types/InvalidIndexException.js":
/*!********************************************!*\
  !*** ./src/Types/InvalidIndexException.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidIndexException: () => (/* binding */ InvalidIndexException)
/* harmony export */ });
/* harmony import */ var _LogicException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicException.js */ "./src/Types/LogicException.js");




/**
 * Represents an exception if an index is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
class InvalidIndexException extends _LogicException_js__WEBPACK_IMPORTED_MODULE_0__.LogicException
{
	/**
	 * Static constructor method.
	 * @param {Number|String} index The index which is invalid.
	 * @returns {InvalidIndexException}
	 * @constructor
	 */
	static with_index( index )
	{
		return new this(
			String.format`The index \`${ 0 }\` is invalid.`( index )
		);
	}
}


/***/ }),

/***/ "./src/Types/InvalidStaticClassInstantiationException.js":
/*!***************************************************************!*\
  !*** ./src/Types/InvalidStaticClassInstantiationException.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidStaticClassInstantiationException: () => (/* binding */ InvalidStaticClassInstantiationException)
/* harmony export */ });
/* harmony import */ var _LogicException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicException.js */ "./src/Types/LogicException.js");




/**
 * Represents the exception if an attempt to instanciate a static class has been made.
 * @author Christian Ramelow <info@codekandis.net>
 */
class InvalidStaticClassInstantiationException extends _LogicException_js__WEBPACK_IMPORTED_MODULE_0__.LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} className The name of the class which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 * @constructor
	 */
	static with_className( className )
	{
		return new this(
			String.format`The static class \`${ 0 }\` cannot be instantiated.`( className )
		);
	}

	/**
	 * Static constructor method.
	 * @param {Object} object The object which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 * @constructor
	 */
	static with_object( object )
	{
		return this.with_className( object.__proto__.constructor.name );
	}
}


/***/ }),

/***/ "./src/Types/InvalidTypeException.js":
/*!*******************************************!*\
  !*** ./src/Types/InvalidTypeException.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidTypeException: () => (/* binding */ InvalidTypeException)
/* harmony export */ });
/* harmony import */ var _LogicException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicException.js */ "./src/Types/LogicException.js");




/**
 * Represents the exception if a type is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
class InvalidTypeException extends _LogicException_js__WEBPACK_IMPORTED_MODULE_0__.LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} expectedType The expected type.
	 * @param {String} type The type which is invalid.
	 * @returns {InvalidTypeException}
	 * @constructor
	 */
	static with_type( expectedType, type )
	{
		return new this(
			String.format`The type \`${ 1 }\` is invalid. \`${ 0 }\` expected.`( expectedType, type )
		);
	}
}


/***/ }),

/***/ "./src/Types/LogicException.js":
/*!*************************************!*\
  !*** ./src/Types/LogicException.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogicException: () => (/* binding */ LogicException)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exception.js */ "./src/Types/Exception.js");




/**
 * Represents the base class of any exception if a logic error occured.
 * @author Christian Ramelow <info@codekandis.net>
 */
class LogicException extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception
{
}


/***/ }),

/***/ "./src/Types/Object.js":
/*!*****************************!*\
  !*** ./src/Types/Object.js ***!
  \*****************************/
/***/ (() => {



/**
 * Represents prototype extensions and JSDoc types of the class `Object`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any object property iteration.
 * @callback Object_PropertyIterationHandler
 * @param {*} propertyValue The value of the currently iterated property.
 * @param {String} propertyName The name of the currently iterated property.
 */

/**
 * Represents the predicate of any object property determination.
 * @callback Object_PropertyPredicate
 * @param {*} propertyValue The value of the currently iterated property.
 * @param {String} propertyName The name of the currently iterated property.
 * @returns {Boolean} True if the currently iterated property matches the predicate, otherwise false.
 */

/**
 * Determines if a property exists in the object. The determination is based on the type of the given member. The type must not be `symbol`, `function` and `undefined`.
 * @method hasProperty
 * @memberOf Object.prototype
 * @param {String} name The name of the property.
 * @returns {Boolean} True if the property exists, otherwise false.
 */
Object.defineProperty(
	Object.prototype,
	'hasProperty',
	{
		value: function ( name )
		       {
			       const invalidTypes = [
				       'function',
				       'symbol'
			       ];

			       return false === invalidTypes.includes( name in this || typeof this[ name ] );
		       }
	}
);

/**
 * Determines if a method exists in the object. The determination is based on the type of the given member. The type must be `function`.
 * @method hasMethod
 * @memberOf Object.prototype
 * @param {String} name The name of the method.
 * @returns {Boolean} True if the method exists, otherwise false.
 */
Object.defineProperty(
	Object.prototype,
	'hasMethod',
	{
		value: function ( name )
		       {
			       return 'function' === typeof this[ name ];
		       }
	}
);

/**
 * Gets the keys of the object.
 * @method keys
 * @memberOf Object.prototype
 * @returns {String[]} The keys of the object.
 */
Object.defineProperty(
	Object.prototype,
	'keys',
	{
		value: function ()
		       {
			       return Object.keys( this );
		       }
	}
);

/**
 * Gets the values of the object's properties.
 * @method values
 * @memberOf Object.prototype
 * @returns {*[]} The values of the object's properties.
 */
Object.defineProperty(
	Object.prototype,
	'values',
	{
		value: function ()
		       {
			       return Object.values( this );
		       }
	}
);

/**
 * Invokes a specific iteration handler on every object's property.
 * @method forEach
 * @memberOf Object.prototype
 * @param {Object_PropertyIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	Object.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       iterationHandler( fetchedPropertyValue, fetchedPropertyName );
			       }
		       }
	}
);

/**
 * Determines if a specific predicate returns true on every object's property.
 * @method every
 * @memberOf Object.prototype
 * @param {Object_PropertyPredicate} predicate The predicate to invoke.
 * @returns {Boolean} True if the predicate returns true on every object's property, otherwise false.
 */
Object.defineProperty(
	Object.prototype,
	'every',
	{
		value: function ( predicate )
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       if ( false === predicate( fetchedPropertyValue, fetchedPropertyName ) )
				       {
					       return false;
				       }
			       }

			       return true;
		       }
	}
);

/**
 * Binds the object to a specific function / method.
 * @method bindTo
 * @memberOf Object.prototype
 * @param {Function} method The function / method to bind the object to.
 * @returns {Function} The bound function / method.
 */
Object.defineProperty(
	Object.prototype,
	'bindTo',
	{
		value: function ( method )
		       {
			       return method.bind( this );
		       }
	}
);

/**
 * Binds the object to a variadic amount of functions / methods.
 * @method bindToAll
 * @memberOf Object.prototype
 * @param {Function[]} methods The functions / methods to bind the object to.
 * @returns {Function[]}} The bound functions / methods.
 */
Object.defineProperty(
	Object.prototype,
	'bindToAll',
	{
		value: function ( methods )
		       {
			       return methods.map(
				       ( fetchedMethod ) =>
				       {
					       return fetchedMethod.bind( this );
				       }
			       );
		       }
	}
);

/**
 * Merges a variadic amount of objects into the object. The object itself will be mutated.
 * @method merge
 * @memberOf Object.prototype
 * @param {...Object} objects The objects to merge.
 * @returns {this} The merged object.
 */
Object.defineProperty(
	Object.prototype,
	'merge',
	{
		value: function ( ...objects )
		       {
			       objects.forEach(
				       ( fetchedObject ) =>
				       {
					       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( fetchedObject ) )
					       {
						       this[ fetchedPropertyName ] = fetchedPropertyValue;
					       }
				       }
			       );

			       return this;
		       }
	}
);


/***/ }),

/***/ "./src/Types/RuntimeException.js":
/*!***************************************!*\
  !*** ./src/Types/RuntimeException.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuntimeException: () => (/* binding */ RuntimeException)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exception.js */ "./src/Types/Exception.js");




/**
 * Represents the base class of any exception if a runtime error occured.
 * @author Christian Ramelow <info@codekandis.net>
 */
class RuntimeException extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception
{
}


/***/ }),

/***/ "./src/Types/String.js":
/*!*****************************!*\
  !*** ./src/Types/String.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvalidIndexException.js */ "./src/Types/InvalidIndexException.js");


/**
 * Represents prototype extensions and JSDoc types of the class `String`.
 * @author Christian Ramelow <info@codekandis.net>
 */



/**
 * Represents the replacement handler of the format method.
 * @callback String_ReplacementHandler
 * @param {...String} replacements The replacements to replace the placeholders with.
 * @returns {String} A new string with the placeholders replaced.
 * @throws {InvalidIndexException} A specific placeholder is invalid.
 */

/**
 * Stores an empty string.
 * @property {String} empty Stores an empty string
 * @memberOf String
 * @static
 */
Object.defineProperty(
	String,
	'empty',
	{
		value: ''
	}
);

/**
 * Formats a string with a variadic amount of placeholders and their respective replacements.
 * @method format
 * @memberOf String
 * @static
 * @param {String} template The template with the placeholders to format.
 * @param {...String} placeholders The placeholders to replace.
 * @returns {String_ReplacementHandler} The replacement handler.
 */
Object.defineProperty(
	String,
	'format',
	{
		value: function ( template, ...placeholders )
		       {
			       return ( ...replacements ) =>
			       {
				       const result = [ template[ 0 ] ];

				       placeholders.forEach(
					       ( fetchedPlaceholderValue, fetchedPlaceholderIndex ) =>
					       {
						       if ( false === Number.isSafeInteger( fetchedPlaceholderValue ) )
						       {
							       throw _InvalidIndexException_js__WEBPACK_IMPORTED_MODULE_0__.InvalidIndexException.with_index( fetchedPlaceholderValue );
						       }

						       result.add( replacements[ fetchedPlaceholderValue ], template[ fetchedPlaceholderIndex + 1 ] );
					       }
				       );

				       return result.join( String.empty );
			       };
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start and end of the string.
 * @method trimStrings
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStrings',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       )
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromStart
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromStart',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromEnd
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromEnd',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Replaces all HTML special characters with their HTML equivalents.
 * @method replaceHtmlSpecialChars
 * @memberOf String.prototype
 * @returns {String} The string with the HTML special characters replaced.
 */
Object.defineProperty(
	String.prototype,
	'replaceHtmlSpecialChars',
	{
		value: function ()
		       {
			       const map = {
				       '&': '&amp;',
				       '<': '&lt;',
				       '>': '&gt;',
				       '"': '&quot;',
				       "'": '&#039;'
			       };

			       return this.replace(
				       /[&<>"']/g,
				       function ( match )
				       {
					       return map[ match ];
				       }
			       );
		       }
	}
);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/Jotunheim.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jotunheim: () => (/* binding */ Jotunheim)
/* harmony export */ });
/* harmony import */ var _Dom_Document_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom/Document.js */ "./src/Dom/Document.js");
/* harmony import */ var _Dom_HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom/HtmlElement.js */ "./src/Dom/HtmlElement.js");
/* harmony import */ var _Dom_KeyboardEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom/KeyboardEvent.js */ "./src/Dom/KeyboardEvent.js");
/* harmony import */ var _Dom_KeyboardEvent_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dom_KeyboardEvent_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dom_MouseEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dom/MouseEvent.js */ "./src/Dom/MouseEvent.js");
/* harmony import */ var _Dom_MouseEvent_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dom_MouseEvent_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dom_NodeList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dom/NodeList.js */ "./src/Dom/NodeList.js");
/* harmony import */ var _Dom_NodeList_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Dom_NodeList_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Io_File_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Io/File.js */ "./src/Io/File.js");
/* harmony import */ var _Io_FileList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Io/FileList.js */ "./src/Io/FileList.js");
/* harmony import */ var _Io_FileList_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Io_FileList_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Io_FileReader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Io/FileReader.js */ "./src/Io/FileReader.js");
/* harmony import */ var _Net_Http_Headers_Headers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Net/Http/Headers/Headers.js */ "./src/Net/Http/Headers/Headers.js");
/* harmony import */ var _Net_Http_Headers_Headers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Net_Http_Headers_Headers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Net_Url_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Net/Url.js */ "./src/Net/Url.js");
/* harmony import */ var _Types_Abstract_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Types/Abstract.js */ "./src/Types/Abstract.js");
/* harmony import */ var _Types_Array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Types/Array.js */ "./src/Types/Array.js");
/* harmony import */ var _Types_Date_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Types/Date.js */ "./src/Types/Date.js");
/* harmony import */ var _Types_Date_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Types_Date_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Types_Event_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Types/Event.js */ "./src/Types/Event.js");
/* harmony import */ var _Types_Event_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Types_Event_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Types_Generator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Types/Generator.js */ "./src/Types/Generator.js");
/* harmony import */ var _Types_Object_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Types/Object.js */ "./src/Types/Object.js");
/* harmony import */ var _Types_Object_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Types_Object_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Types_String_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Types/String.js */ "./src/Types/String.js");




















/**
 * Represents the bootstrap class of the library.
 * @author Christian Ramelow <info@codekandis.net>
 */
class Jotunheim extends _Types_Abstract_js__WEBPACK_IMPORTED_MODULE_10__.Abstract
{
	/**
	 * Loads the library.
	 */
	load()
	{
	}
}

})();

/******/ })()
;