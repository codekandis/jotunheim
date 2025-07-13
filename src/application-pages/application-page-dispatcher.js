'use strict';

import { Abstract } from '../types/abstract.js';
import { PreDispatchmentState } from './pre-dispatchment-state.js';

/**
 * Represents an application page dispatcher.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApplicationPageDispatcher extends Abstract
{
	/**
	 * Stores the routes configuration.
	 * @type {AbstractRoutesConfiguration}
	 */
	#_routesConfiguration;

	/**
	 * Stores the pre-dispatcher of the application page dispatcher.
	 * @type {?AbstractPreDispatcher}
	 */
	#_preDispatcher;

	/**
	 * Stores the requested URI.
	 * @type {URL}
	 */
	#_requestedUri;

	/**
	 * Stores the requested route.
	 * @type {String}
	 */
	#_requestedRoute;

	/**
	 * Constructor method.
	 * @param {AbstractRoutesConfiguration} routesConfiguration The routes configuration of the application page dispatcher.
	 * @param {?AbstractPreDispatcher} preDispatcher The pre-dispatcher of the application page dispatcher.
	 */
	constructor( routesConfiguration, preDispatcher = null )
	{
		super();

		this.#_routesConfiguration = routesConfiguration;
		this.#_preDispatcher       = preDispatcher;
		this.#_requestedUri        = new URL( document.location.href );
		this.#_requestedRoute      = this.#_requestedUri.pathname;
	}

	/**
	 * Decodes the application page arguments from the requested URI.
	 * @param {Object<String, String>} encodedApplicationPageArguments The encoded application page arguments.
	 * @returns {Object<String, String>} matches The decoded application page arguments.
	 */
	#decodeApplicationPageArguments( encodedApplicationPageArguments )
	{
		const decodedApplicationPageArguments = {};

		for ( const [ encodedApplicationPageArgumentIndex, encodedApplicationPageArgumentValue ] of Object.entries( encodedApplicationPageArguments ) )
		{
			decodedApplicationPageArguments[ encodedApplicationPageArgumentIndex ] = decodeURIComponent( encodedApplicationPageArgumentValue );
		}

		return decodedApplicationPageArguments;
	}

	/**
	 * Dispatches a request to an application page.
	 */
	dispatch()
	{
		if ( null !== this.#_preDispatcher )
		{
			const preDispatchmentState = new PreDispatchmentState();
			this.#_preDispatcher.preDispatch( this.#_requestedUri, preDispatchmentState );
			if ( true === preDispatchmentState.preventDispatchment )
			{
				return;
			}
		}

		const baseRoute              = this.#_routesConfiguration.baseRoute;
		let applicationPageClass     = null;
		let applicationPageArguments = {};

		this.#_routesConfiguration.routes.every(
			( configuredActionClass, configuredRoute ) =>
			{
				const requestedRouteMatches = this.#_requestedRoute.match(
					new RegExp(
						String.format`^${ 0 }${ 1 }$`( baseRoute, configuredRoute )
					)
				);

				if ( null !== requestedRouteMatches )
				{
					applicationPageClass = configuredActionClass;

					if ( undefined !== requestedRouteMatches.groups )
					{
						applicationPageArguments = this.#decodeApplicationPageArguments( requestedRouteMatches.groups );
					}

					return false;
				}
			}
		);

		if ( null !== applicationPageClass )
		{
			( new applicationPageClass( applicationPageArguments ) )
				.execute();
		}
	}
}
