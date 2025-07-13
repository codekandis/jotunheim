'use strict';

import { Abstract } from '../../../types/abstract.js';
import { BooleanString } from '../../../types/boolean-string.js';
import { DomHelper } from '../../dom-helper.js';
import { TabControlSelector } from './tab-control-selector.js';

/**
 * Represents a tab control preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TabControlPreparator extends Abstract
{
	/**
	 * Stores the tab controls.
	 * @type {HTMLElement[]}
	 */
	#_tabControls;

	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();

		this.#initialize();
	}

	/**
	 * Initializes the tab control preparator.
	 */
	#initialize()
	{
		this.#_tabControls = DomHelper.querySelectorAll( TabControlSelector.TAB_CONTROL, null, false );
	}

	/**
	 * Initilizes a tab control header.
	 * @param {HTMLElement} header The header to initialize.
	 */
	#initializeHeader( header )
	{
		const isHeaderActivated = header.getAttribute( 'data-is-activated' );
		if ( BooleanString.FALSE !== isHeaderActivated && BooleanString.TRUE !== isHeaderActivated )
		{
			header.setAttribute( 'data-is-activated', BooleanString.FALSE );
		}

		header.clickEvent(
			( event ) =>
			{
				DomHelper
					.querySelectorAll( TabControlSelector.TAB_CONTROL_INITIALIZED_HEADERS, event.target.parentElement, false )
					.forEach(
						( header ) =>
						{
							header.setAttribute(
								'data-is-activated',
								header !== event.target
									? BooleanString.FALSE
									: BooleanString.TRUE
							);
						}
					)
			}
		);
	}

	/**
	 * Initializes all tab control headers.
	 */
	#initializeHeaders()
	{
		this.#_tabControls.forEach(
			( tabControl ) =>
			{
				const headersSection = DomHelper.querySelector( TabControlSelector.TAB_CONTROL_HEADERS, tabControl, false );
				if ( null === headersSection )
				{
					return null;
				}

				const uninitializedHeaders = DomHelper.querySelectorAll( TabControlSelector.TAB_CONTROL_UNINITIALIZED_HEADERS, tabControl, false );
				uninitializedHeaders.forEach(
					( uninitializedHeader ) =>
					{
						this.#initializeHeader( uninitializedHeader );

						DomHelper.appendChildren( headersSection, uninitializedHeader );
					}
				);
			}
		);
	}

	/**
	 * Selects the first tab control pages.
	 */
	#selectFirstTabControlPages()
	{
		this.#_tabControls.forEach(
			( tabControl ) =>
			{
				const activatedHeader = DomHelper.querySelector( TabControlSelector.TAB_CONTROL_INITIALIZED_ACTIVATED_HEADERS, tabControl, false );
				if ( null !== activatedHeader )
				{
					activatedHeader.click();

					return;
				}

				const deactivatedHeader = DomHelper.querySelector( TabControlSelector.TAB_CONTROL_INITIALIZED_DEACTIVATED_HEADERS, tabControl, false );
				if ( null !== deactivatedHeader )
				{
					deactivatedHeader.click();
				}
			}
		);
	}

	/**
	 * Prepares all tab controls.
	 */
	prepare()
	{
		this.#initializeHeaders();
		this.#selectFirstTabControlPages();
	}
}
