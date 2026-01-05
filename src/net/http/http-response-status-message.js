'use strict';
import { AbstractStatic } from '../../types/abstract-static.js';

/**
 * Represents an enumeration of HTTP response status messages.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponseStatusMessage extends AbstractStatic
{
	/**
	 * Represents the HTTP response status message of `100 Continue`.
	 * @type {string}
	 */
	static get CONTINUE()
	{
		return 'Continue';
	}

	/**
	 * Represents the HTTP response status message of `101 Switching Protocols`.
	 * @type {string}
	 */
	static get SWITCHING_PROTOCOLS()
	{
		return 'Switching Protocols';
	}

	/**
	 * Represents the HTTP response status message of `102 Processing`.
	 * @type {string}
	 */
	static get PROCESSING()
	{
		return 'Processing';
	}

	/**
	 * Represents the HTTP response status message of `103 Early Hints`.
	 * @type {string}
	 */
	static get EARLY_HINTS()
	{
		return 'Early Hints';
	}

	/**
	 * Represents the HTTP response status message of `200 OK`.
	 * @type {string}
	 */
	static get OK()
	{
		return 'OK';
	}

	/**
	 * Represents the HTTP response status message of `201 Created`.
	 * @type {string}
	 */
	static get CREATED()
	{
		return 'Created';
	}

	/**
	 * Represents the HTTP response status message of `202 Accepted`.
	 * @type {string}
	 */
	static get ACCEPTED()
	{
		return 'Accepted';
	}

	/**
	 * Represents the HTTP response status message of `203 Non-Authoritative Information`.
	 * @type {string}
	 */
	static get NON_AUTHORITATIVE_INFORMATION()
	{
		return 'Non-Authoritative Information';
	}

	/**
	 * Represents the HTTP response status message of `204 No Content`.
	 * @type {string}
	 */
	static get NO_CONTENT()
	{
		return 'No Content';
	}

	/**
	 * Represents the HTTP response status message of `205 Reset Content`.
	 * @type {string}
	 */
	static get RESET_CONTENT()
	{
		return 'Reset Content';
	}

	/**
	 * Represents the HTTP response status message of `206 Partial Content`.
	 * @type {string}
	 */
	static get PARTIAL_CONTENT()
	{
		return 'Partial Content';
	}

	/**
	 * Represents the HTTP response status message of `207 Multi-Status`.
	 * @type {string}
	 */
	static get MULTI_STATUS()
	{
		return 'Multi-Status';
	}

	/**
	 * Represents the HTTP response status message of `208 Already Reported`.
	 * @type {string}
	 */
	static get ALREADY_REPORTED()
	{
		return 'Already Reported';
	}

	/**
	 * Represents the HTTP response status message of `226 IM Used`.
	 * @type {string}
	 */
	static get IM_USED()
	{
		return 'IM Used';
	}

	/**
	 * Represents the HTTP response status message of `300 Multiple Choices`.
	 * @type {string}
	 */
	static get MULTIPLE_CHOICES()
	{
		return 'Multiple Choices';
	}

	/**
	 * Represents the HTTP response status message of `301 Moved Permanently`.
	 * @type {string}
	 */
	static get MOVED_PERMANENTLY()
	{
		return 'Moved Permanently';
	}

	/**
	 * Represents the HTTP response status message of `302 Found`.
	 * @type {string}
	 */
	static get FOUND()
	{
		return 'Found';
	}

	/**
	 * Represents the HTTP response status message of `303 See Other`.
	 * @type {string}
	 */
	static get SEE_OTHER()
	{
		return 'See Other';
	}

	/**
	 * Represents the HTTP response status message of `304 Not Modified`.
	 * @type {string}
	 */
	static get NOT_MODIFIED()
	{
		return 'Not Modified';
	}

	/**
	 * Represents the HTTP response status message of `305 Use Proxy`.
	 * @type {string}
	 */
	static get USE_PROXY()
	{
		return 'Use Proxy';
	}

	/**
	 * Represents the HTTP response status message of `306 Switch Proxy`.
	 * @type {string}
	 */
	static get SWITCH_PROXY()
	{
		return 'Switch Proxy';
	}

	/**
	 * Represents the HTTP response status message of `307 Temporary Redirect`.
	 * @type {string}
	 */
	static get TEMPORARY_REDIRECT()
	{
		return 'Temporary Redirect';
	}

	/**
	 * Represents the HTTP response status message of `308 Permanent Redirect`.
	 * @type {string}
	 */
	static get PERMANENT_REDIRECT()
	{
		return 'Permanent Redirect';
	}

	/**
	 * Represents the HTTP response status message of `400 Bad Request`.
	 * @type {string}
	 */
	static get BAD_REQUEST()
	{
		return 'Bad Request';
	}

	/**
	 * Represents the HTTP response status message of `401 Unauthorized`.
	 * @type {string}
	 */
	static get UNAUTHORIZED()
	{
		return 'Unauthorized';
	}

	/**
	 * Represents the HTTP response status message of `402 Payment Required`.
	 * @type {string}
	 */
	static get PAYMENT_REQUIRED()
	{
		return 'Payment Required';
	}

	/**
	 * Represents the HTTP response status message of `403 Forbidden`.
	 * @type {string}
	 */
	static get FORBIDDEN()
	{
		return 'Forbidden';
	}

	/**
	 * Represents the HTTP response status message of `404 Not Found`.
	 * @type {string}
	 */
	static get NOT_FOUND()
	{
		return 'Not Found';
	}

	/**
	 * Represents the HTTP response status message of `405 Method Not Allowed`.
	 * @type {string}
	 */
	static get METHOD_NOT_ALLOWED()
	{
		return 'Method Not Allowed';
	}

	/**
	 * Represents the HTTP response status message of `406 Not Acceptable`.
	 * @type {string}
	 */
	static get NOT_ACCEPTABLE()
	{
		return 'Not Acceptable';
	}

	/**
	 * Represents the HTTP response status message of `407 Proxy Authentication Required`.
	 * @type {string}
	 */
	static get PROXY_AUTHENTICATION_REQUIRED()
	{
		return 'Proxy Authentication Required';
	}

	/**
	 * Represents the HTTP response status message of `408 Request Timeout`.
	 * @type {string}
	 */
	static get REQUEST_TIMEOUT()
	{
		return 'Request Timeout';
	}

	/**
	 * Represents the HTTP response status message of `409 Conflict`.
	 * @type {string}
	 */
	static get CONFLICT()
	{
		return 'Conflict';
	}

	/**
	 * Represents the HTTP response status message of `410 Gone`.
	 * @type {string}
	 */
	static get GONE()
	{
		return 'Gone';
	}

	/**
	 * Represents the HTTP response status message of `411 Length Required`.
	 * @type {string}
	 */
	static get LENGTH_REQUIRED()
	{
		return 'Length Required';
	}

	/**
	 * Represents the HTTP response status message of `412 Precondition Failed`.
	 * @type {string}
	 */
	static get PRECONDITION_FAILED()
	{
		return 'Precondition Failed';
	}

	/**
	 * Represents the HTTP response status message of `413 Request Entity Too Large`.
	 * @type {string}
	 */
	static get REQUEST_ENTITY_TOO_LARGE()
	{
		return 'Request Entity Too Large';
	}

	/**
	 * Represents the HTTP response status message of `414 URI Too Long`.
	 * @type {string}
	 */
	static get URI_TOO_LONG()
	{
		return 'URI Too Long';
	}

	/**
	 * Represents the HTTP response status message of `415 Unsupported Media Type`.
	 * @type {string}
	 */
	static get UNSUPPORTED_MEDIA_TYPE()
	{
		return 'Unsupported Media Type';
	}

	/**
	 * Represents the HTTP response status message of `416 Requested range not satisfiable`.
	 * @type {string}
	 */
	static get REQUESTED_RANGE_NOT_SATISFIABLE()
	{
		return 'Requested range not satisfiable';
	}

	/**
	 * Represents the HTTP response status message of `417 Expectation Failed`.
	 * @type {string}
	 */
	static get EXPECTATION_FAILED()
	{
		return 'Expectation Failed';
	}

	/**
	 * Represents the HTTP response status message of `418`.
	 * @type {string}
	 */
	static get IM_A_TEAPOT()
	{
		return 'I\'m a teapot';
	}

	/**
	 * Represents the HTTP response status message of `420 Policy Not Fulfilled`.
	 * @type {string}
	 */
	static get POLICY_NOT_FULFILLED()
	{
		return 'Policy Not Fulfilled';
	}

	/**
	 * Represents the HTTP response status message of `421 Misdirected Request`.
	 * @type {string}
	 */
	static get MISDIRECTED_REQUEST()
	{
		return 'Misdirected Request';
	}

	/**
	 * Represents the HTTP response status message of `422 Unprocessable Entity`.
	 * @type {string}
	 */
	static get UNPROCESSABLE_ENTITY()
	{
		return 'Unprocessable Entity';
	}

	/**
	 * Represents the HTTP response status message of `423 Locked`.
	 * @type {string}
	 */
	static get LOCKED()
	{
		return 'Locked';
	}

	/**
	 * Represents the HTTP response status message of `424 Failed Dependency`.
	 * @type {string}
	 */
	static get FAILED_DEPENDENCY()
	{
		return 'Failed Dependency';
	}

	/**
	 * Represents the HTTP response status message of `425 Unordered Collection`.
	 * @type {string}
	 */
	static get UNORDERED_COLLECTION()
	{
		return 'Unordered Collection';
	}

	/**
	 * Represents the HTTP response status message of `426 Upgrade Required`.
	 * @type {string}
	 */
	static get UPGRADE_REQUIRED()
	{
		return 'Upgrade Required';
	}

	/**
	 * Represents the HTTP response status message of `428 Precondition Required`.
	 * @type {string}
	 */
	static get PRECONDITION_REQUIRED()
	{
		return 'Precondition Required';
	}

	/**
	 * Represents the HTTP response status message of `429 Too Many Requests`.
	 * @type {string}
	 */
	static get TOO_MANY_REQUESTS()
	{
		return 'Too Many Requests';
	}

	/**
	 * Represents the HTTP response status message of `431 Request Header Fields Too Large`.
	 * @type {string}
	 */
	static get REQUEST_HEADER_FIELDS_TOO_LARGE()
	{
		return 'Request Header Fields Too Large';
	}

	/**
	 * Represents the HTTP response status message of `444 No Response`.
	 * @type {string}
	 */
	static get NO_RESPONSE()
	{
		return 'No Response';
	}

	/**
	 * Represents the HTTP response status message of `449 The request should be retried after doing the appropriate action`.
	 * @type {string}
	 */
	static get THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION()
	{
		return 'The request should be retried after doing the appropriate action';
	}

	/**
	 * Represents the HTTP response status message of `451 Unavailable For Legal Reasons`.
	 * @type {string}
	 */
	static get UNAVAILABLE_FOR_LEGAL_REASONS()
	{
		return 'Unavailable For Legal Reasons';
	}

	/**
	 * Represents the HTTP response status message of `499 Client Closed Request`.
	 * @type {string}
	 */
	static get CLIENT_CLOSED_REQUEST()
	{
		return 'Client Closed Request';
	}

	/**
	 * Represents the HTTP response status message of `500 Internal Server Error`.
	 * @type {string}
	 */
	static get INTERNAL_SERVER_ERROR()
	{
		return 'Internal Server Error';
	}

	/**
	 * Represents the HTTP response status message of `501 Not Implemented`.
	 * @type {string}
	 */
	static get NOT_IMPLEMENTED()
	{
		return 'Not Implemented';
	}

	/**
	 * Represents the HTTP response status message of `502 Bad Gateway`.
	 * @type {string}
	 */
	static get BAD_GATEWAY()
	{
		return 'Bad Gateway';
	}

	/**
	 * Represents the HTTP response status message of `503 Service Unavailable`.
	 * @type {string}
	 */
	static get SERVICE_UNAVAILABLE()
	{
		return 'Service Unavailable';
	}

	/**
	 * Represents the HTTP response status message of `504 Gateway Timeout`.
	 * @type {string}
	 */
	static get GATEWAY_TIMEOUT()
	{
		return 'Gateway Timeout';
	}

	/**
	 * Represents the HTTP response status message of `505 HTTP Version not supported`.
	 * @type {string}
	 */
	static get HTTP_VERSION_NOT_SUPPORTED()
	{
		return 'HTTP Version not supported';
	}

	/**
	 * Represents the HTTP response status message of `506 Variant Also Negotiates`.
	 * @type {string}
	 */
	static get VARIANT_ALSO_NEGOTIATES()
	{
		return 'Variant Also Negotiates';
	}

	/**
	 * Represents the HTTP response status message of `507 Insufficient Storage`.
	 * @type {string}
	 */
	static get INSUFFICIENT_STORAGE()
	{
		return 'Insufficient Storage';
	}

	/**
	 * Represents the HTTP response status message of `508 Loop Detected`.
	 * @type {string}
	 */
	static get LOOP_DETECTED()
	{
		return 'Loop Detected';
	}

	/**
	 * Represents the HTTP response status message of `509 Bandwidth Limit Exceeded`.
	 * @type {string}
	 */
	static get BANDWIDTH_LIMIT_EXCEEDED()
	{
		return 'Bandwidth Limit Exceeded';
	}

	/**
	 * Represents the HTTP response status message of `510 Not Extended`.
	 * @type {string}
	 */
	static get NOT_EXTENDED()
	{
		return 'Not Extended';
	}

	/**
	 * Represents the HTTP response status message of `511 Network Authentication Required`.
	 * @type {string}
	 */
	static get NETWORK_AUTHENTICATION_REQUIRED()
	{
		return 'Network Authentication Required';
	}
}
