'use strict';

import { AbstractBindable } from './abstract-bindable.js';

/**
 * Represents the callback of any bindable proxy instantiation.
 * @param bindableProxy The instantiated bindable proxy.
 */
export type BindableProxy_InstantiationCallack = ( bindableProxy: BindableProxy ) => void;

/**
 * Represents a bindable proxy.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableProxy extends AbstractBindable
{
	/**
	 * Stores the delegated object which is proxied.
	 */
	#_delegatedObject: object;

	/**
	 * Stores the proxy to the delegated object.
	 */
	#_proxy: BindableProxy;

	/**
	 * Constructor method.
	 * @param object The object to proxy.
	 * @param initializingCallback The callback to invoke after instantiation.
	 */
	constructor( object: object, initializingCallback: BindableProxy_InstantiationCallack )
	{
		super();

		this.#_delegatedObject = object;
		this.#_proxy           = new Proxy(
			this,
			{
				get: this.#proxy_getHandler,
				set: this.#proxy_setHandler
			}
		);

		initializingCallback( this );

		return this.#_proxy;
	}

	/**
	 * Gets the delegated object which is proxied.
	 * @returns The delegated object which is proxied.
	 */
	get delegatedObject(): object
	{
		return this.#_delegatedObject;
	}

	/**
	 * Gets the proxy to the delegated object.
	 * @returns The proxy to the delegated object.
	 */
	get proxy(): BindableProxy
	{
		return this.#_proxy;
	}

	/**
	 * Determines if a property exists in the object. The determination is based on the type of the given member. The type must not be `symbol`, `function` and `undefined`.
	 * @param name The name of the property.
	 * @returns True if the property exists, otherwise false.
	 */
	override hasProperty( name: string ): boolean
	{
		return this.#_delegatedObject.hasProperty( name );
	}

	/**
	 * Determines if a method exists in the object. The determination is based on the type of the given member. The type must be `function`.
	 * @param name The name of the method.
	 * @returns True if the method exists, otherwise false.
	 */
	override hasMethod( name: string ): boolean
	{
		return this.#_delegatedObject.hasMethod( name );
	}

	/**
	 * Gets the value of the bindable proxy's or the proxied delegate's member specified by their member name.
	 * @param _bindableProxy The bindable proxy.
	 * @param memberName The name of the member to get its value.
	 * @returns The value of the bindable proxy's member, if it exists, otherwise the proxied delegate's value will be returned.
	 */
	#proxy_getHandler = ( _bindableProxy: BindableProxy, memberName: string | symbol ): unknown =>
	{
		const proxyValue = this[ memberName ];

		if ( 'function' === typeof proxyValue )
		{
			return proxyValue.bind( this );
		}

		if ( undefined !== proxyValue )
		{
			return proxyValue;
		}

		const targetValue = this.#_delegatedObject[ memberName ];

		if ( 'function' === typeof targetValue )
		{
			return targetValue.bind( this.#_delegatedObject );
		}

		return targetValue;
	};

	/**
	 * Sets the value of the bindable proxy's or the proxied delegate's member specified by their member name.
	 * @param _bindableProxy The bindable proxy.
	 * @param memberName The name of the member to get its value.
	 * @param memberValue The value of the bindable proxy's member.
	 * @returns True!
	 */
	#proxy_setHandler = ( _bindableProxy: BindableProxy, memberName: string | symbol, memberValue: unknown ): boolean =>
	{
		this.#_delegatedObject[ memberName ] = memberValue;
		this._dispatchPropertyChangedEvent( memberName, this.#_proxy );

		return true;
	};
}
