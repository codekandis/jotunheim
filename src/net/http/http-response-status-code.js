'use strict';

import { AbstractStatic } from '../../types/abstract-static.js';

/**
 * Represents an enumeration of HTTP response status codes.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponseStatusCode extends AbstractStatic
{
	/**
	 * Represents the HTTP response status code of the HTTP response status `100 Continue`.
	 * @type {number}
	 */
	static get CONTINUE()
	{
		return 100;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `101 Switching Protocols`.
	 * @type {number}
	 */
	static get SWITCHING_PROTOCOLS()
	{
		return 101;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `102 Processing`.
	 * @type {number}
	 */
	static get PROCESSING()
	{
		return 102;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `103 Early Hints`.
	 * @type {number}
	 */
	static get EARLY_HINTS()
	{
		return 103;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `200 Ok`.
	 * @type {number}
	 */
	static get OK()
	{
		return 200;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `201 Created`.
	 * @type {number}
	 */
	static get CREATED()
	{
		return 201;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `202 Accepted`.
	 * @type {number}
	 */
	static get ACCEPTED()
	{
		return 202;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `203 Non-Authoritative Information`.
	 * @type {number}
	 */
	static get NON_AUTHORITATIVE_INFORMATION()
	{
		return 203;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `204 No Content`.
	 * @type {number}
	 */
	static get NO_CONTENT()
	{
		return 204;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `205 Reset Content`.
	 * @type {number}
	 */
	static get RESET_CONTENT()
	{
		return 205;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `206 Partial Content`.
	 * @type {number}
	 */
	static get PARTIAL_CONTENT()
	{
		return 206;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `207 Multi-Status`.
	 * @type {number}
	 */
	static get MULTI_STATUS()
	{
		return 207;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `208 Already Sorted`.
	 * @type {number}
	 */
	static get ALREADY_SORTED()
	{
		return 208;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `226 Im Used`.
	 * @type {number}
	 */
	static get IM_USED()
	{
		return 226;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `300 Multiple Choices`.
	 * @type {number}
	 */
	static get MULTIPLE_CHOICES()
	{
		return 300;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `301 Moved Permanently`.
	 * @type {number}
	 */
	static get MOVED_PERMANENTLY()
	{
		return 301;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `302 Found`.
	 * @type {number}
	 */
	static get FOUND()
	{
		return 302;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `303 See Other`.
	 * @type {number}
	 */
	static get SEE_OTHER()
	{
		return 303;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `304 Not Modified`.
	 * @type {number}
	 */
	static get NOT_MODIFIED()
	{
		return 304;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `305 Use Proxy`.
	 * @type {number}
	 */
	static get USE_PROXY()
	{
		return 305;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `306 Switch Proxy`.
	 * @type {number}
	 */
	static get SWITCH_PROXY()
	{
		return 306;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `307 Temporary Redirect`.
	 * @type {number}
	 */
	static get TEMPORARY_REDIRECT()
	{
		return 307;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `308 Permanent Redirect`.
	 * @type {number}
	 */
	static get PERMANENT_REDIRECT()
	{
		return 308;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `400 Bad Request`.
	 * @type {number}
	 */
	static get BAD_REQUEST()
	{
		return 400;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `401 Unauthorized`.
	 * @type {number}
	 */
	static get UNAUTHORIZED()
	{
		return 401;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `402 Payment Required`.
	 * @type {number}
	 */
	static get PAYMENT_REQUIRED()
	{
		return 402;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `403 Forbidden`.
	 * @type {number}
	 */
	static get FORBIDDEN()
	{
		return 403;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `404 Not Found`.
	 * @type {number}
	 */
	static get NOT_FOUND()
	{
		return 404;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `405 Method_Not Allowed`.
	 * @type {number}
	 */
	static get METHOD_NOT_ALLOWED()
	{
		return 405;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `406 Not Acceptable`.
	 * @type {number}
	 */
	static get NOT_ACCEPTABLE()
	{
		return 406;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `407 Proxy_Authentication Required`.
	 * @type {number}
	 */
	static get PROXY_AUTHENTICATION_REQUIRED()
	{
		return 407;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `408 Request Timeout`.
	 * @type {number}
	 */
	static get REQUEST_TIMEOUT()
	{
		return 408;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `409 Conflict`.
	 * @type {number}
	 */
	static get CONFLICT()
	{
		return 409;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `410 Gone`.
	 * @type {number}
	 */
	static get GONE()
	{
		return 410;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `411 Length Required`.
	 * @type {number}
	 */
	static get LENGTH_REQUIRED()
	{
		return 411;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `412 Precondition Failed`.
	 * @type {number}
	 */
	static get PRECONDITION_FAILED()
	{
		return 412;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `413 Request_Entity_Too Large`.
	 * @type {number}
	 */
	static get REQUEST_ENTITY_TOO_LARGE()
	{
		return 413;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `414 Uri_Too Long`.
	 * @type {number}
	 */
	static get URI_TOO_LONG()
	{
		return 414;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `415 Unsupported_Media Type`.
	 * @type {number}
	 */
	static get UNSUPPORTED_MEDIA_TYPE()
	{
		return 415;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `416 Requested_Range_Not Satisfiable`.
	 * @type {number}
	 */
	static get REQUESTED_RANGE_NOT_SATISFIABLE()
	{
		return 416;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `417 Expectation Failed`.
	 * @type {number}
	 */
	static get EXPECTATION_FAILED()
	{
		return 417;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `418 Im Ateapot`.
	 * @type {number}
	 */
	static get IM_ATEAPOT()
	{
		return 418;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `420 Policy_Not Fulfilled`.
	 * @type {number}
	 */
	static get POLICY_NOT_FULFILLED()
	{
		return 420;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `421 Misdirected Request`.
	 * @type {number}
	 */
	static get MISDIRECTED_REQUEST()
	{
		return 421;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `422 Unprocessable Entity`.
	 * @type {number}
	 */
	static get UNPROCESSABLE_ENTITY()
	{
		return 422;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `423 Locked`.
	 * @type {number}
	 */
	static get LOCKED()
	{
		return 423;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `424 Failed Dependency`.
	 * @type {number}
	 */
	static get FAILED_DEPENDENCY()
	{
		return 424;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `425 Unordered Collection`.
	 * @type {number}
	 */
	static get UNORDERED_COLLECTION()
	{
		return 425;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `426 Upgrade Required`.
	 * @type {number}
	 */
	static get UPGRADE_REQUIRED()
	{
		return 426;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `428 Precondition Required`.
	 * @type {number}
	 */
	static get PRECONDITION_REQUIRED()
	{
		return 428;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `429 Too_Many Requests`.
	 * @type {number}
	 */
	static get TOO_MANY_REQUESTS()
	{
		return 429;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `431 Request_Header_Fields_Too Large`.
	 * @type {number}
	 */
	static get REQUEST_HEADER_FIELDS_TOO_LARGE()
	{
		return 431;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `444 No Response`.
	 * @type {number}
	 */
	static get NO_RESPONSE()
	{
		return 444;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `449 The_Request_Should_Be_Retried_After_Doing_The_Appropriate Action`.
	 * @type {number}
	 */
	static get THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION()
	{
		return 449;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `451 Unavailable_For_Legal Reasons`.
	 * @type {number}
	 */
	static get UNAVAILABLE_FOR_LEGAL_REASONS()
	{
		return 451;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `499 Client_Closed Request`.
	 * @type {number}
	 */
	static get CLIENT_CLOSED_REQUEST()
	{
		return 499;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `500 Internal_Server Error`.
	 * @type {number}
	 */
	static get INTERNAL_SERVER_ERROR()
	{
		return 500;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `501 Not Implemented`.
	 * @type {number}
	 */
	static get NOT_IMPLEMENTED()
	{
		return 501;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `502 Bad Gateway`.
	 * @type {number}
	 */
	static get BAD_GATEWAY()
	{
		return 502;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `503 Service Unavailable`.
	 * @type {number}
	 */
	static get SERVICE_UNAVAILABLE()
	{
		return 503;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `504 Gateway Timeout`.
	 * @type {number}
	 */
	static get GATEWAY_TIMEOUT()
	{
		return 504;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `505 Http_Version_Not Supported`.
	 * @type {number}
	 */
	static get HTTP_VERSION_NOT_SUPPORTED()
	{
		return 505;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `506 Variant_Also Negotiates`.
	 * @type {number}
	 */
	static get VARIANT_ALSO_NEGOTIATES()
	{
		return 506;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `507 Insufficient Storage`.
	 * @type {number}
	 */
	static get INSUFFICIENT_STORAGE()
	{
		return 507;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `508 Loop Detected`.
	 * @type {number}
	 */
	static get LOOP_DETECTED()
	{
		return 508;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `509 Bandwidth_Limit Exceeded`.
	 * @type {number}
	 */
	static get BANDWIDTH_LIMIT_EXCEEDED()
	{
		return 509;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `510 Not Extended`.
	 * @type {number}
	 */
	static get NOT_EXTENDED()
	{
		return 510;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `511 Network_Authentication Required`.
	 * @type {number}
	 */
	static get NETWORK_AUTHENTICATION_REQUIRED()
	{
		return 511;
	}
}
