'use strict';

/**
 * Represents an enumeration of HTTP response status messages.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum HttpResponseStatusMessage
{
	/**
	 * Represents the HTTP response status message for `100 Continue`.
	 */
	CONTINUE                                                         = 'Continue',

	/**
	 * Represents the HTTP response status message for `101 Switching Protocols`.
	 */
	SWITCHING_PROTOCOLS                                              = 'Switching Protocols',

	/**
	 * Represents the HTTP response status message for `102 Processing`.
	 */
	PROCESSING                                                       = 'Processing',

	/**
	 * Represents the HTTP response status message for `103 Early Hints`.
	 */
	EARLY_HINTS                                                      = 'Early Hints',

	/**
	 * Represents the HTTP response status message for `200 OK`.
	 */
	OK                                                               = 'OK',

	/**
	 * Represents the HTTP response status message for `201 Created`.
	 */
	CREATED                                                          = 'Created',

	/**
	 * Represents the HTTP response status message for `202 Accepted`.
	 */
	ACCEPTED                                                         = 'Accepted',

	/**
	 * Represents the HTTP response status message for `203 Non-Authoritative Information`.
	 */
	NON_AUTHORITATIVE_INFORMATION                                    = 'Non-Authoritative Information',

	/**
	 * Represents the HTTP response status message for `204 No Content`.
	 */
	NO_CONTENT                                                       = 'No Content',

	/**
	 * Represents the HTTP response status message for `205 Reset Content`.
	 */
	RESET_CONTENT                                                    = 'Reset Content',

	/**
	 * Represents the HTTP response status message for `206 Partial Content`.
	 */
	PARTIAL_CONTENT                                                  = 'Partial Content',

	/**
	 * Represents the HTTP response status message for `207 Multi-Status`.
	 */
	MULTI_STATUS                                                     = 'Multi-Status',

	/**
	 * Represents the HTTP response status message for `208 Already Reported`.
	 */
	ALREADY_REPORTED                                                 = 'Already Reported',

	/**
	 * Represents the HTTP response status message for `226 IM Used`.
	 */
	IM_USED                                                          = 'IM Used',

	/**
	 * Represents the HTTP response status message for `300 Multiple Choices`.
	 */
	MULTIPLE_CHOICES                                                 = 'Multiple Choices',

	/**
	 * Represents the HTTP response status message for `301 Moved Permanently`.
	 */
	MOVED_PERMANENTLY                                                = 'Moved Permanently',

	/**
	 * Represents the HTTP response status message for `302 Found`.
	 */
	FOUND                                                            = 'Found',

	/**
	 * Represents the HTTP response status message for `303 See Other`.
	 */
	SEE_OTHER                                                        = 'See Other',

	/**
	 * Represents the HTTP response status message for `304 Not Modified`.
	 */
	NOT_MODIFIED                                                     = 'Not Modified',

	/**
	 * Represents the HTTP response status message for `305 Use Proxy`.
	 */
	USE_PROXY                                                        = 'Use Proxy',

	/**
	 * Represents the HTTP response status message for `306 Switch Proxy`.
	 */
	SWITCH_PROXY                                                     = 'Switch Proxy',

	/**
	 * Represents the HTTP response status message for `307 Temporary Redirect`.
	 */
	TEMPORARY_REDIRECT                                               = 'Temporary Redirect',

	/**
	 * Represents the HTTP response status message for `308 Permanent Redirect`.
	 */
	PERMANENT_REDIRECT                                               = 'Permanent Redirect',

	/**
	 * Represents the HTTP response status message for `400 Bad Request`.
	 */
	BAD_REQUEST                                                      = 'Bad Request',

	/**
	 * Represents the HTTP response status message for `401 Unauthorized`.
	 */
	UNAUTHORIZED                                                     = 'Unauthorized',

	/**
	 * Represents the HTTP response status message for `402 Payment Required`.
	 */
	PAYMENT_REQUIRED                                                 = 'Payment Required',

	/**
	 * Represents the HTTP response status message for `403 Forbidden`.
	 */
	FORBIDDEN                                                        = 'Forbidden',

	/**
	 * Represents the HTTP response status message for `404 Not Found`.
	 */
	NOT_FOUND                                                        = 'Not Found',

	/**
	 * Represents the HTTP response status message for `405 Method Not Allowed`.
	 */
	METHOD_NOT_ALLOWED                                               = 'Method Not Allowed',

	/**
	 * Represents the HTTP response status message for `406 Not Acceptable`.
	 */
	NOT_ACCEPTABLE                                                   = 'Not Acceptable',

	/**
	 * Represents the HTTP response status message for `407 Proxy Authentication Required`.
	 */
	PROXY_AUTHENTICATION_REQUIRED                                    = 'Proxy Authentication Required',

	/**
	 * Represents the HTTP response status message for `408 Request Timeout`.
	 */
	REQUEST_TIMEOUT                                                  = 'Request Timeout',

	/**
	 * Represents the HTTP response status message for `409 Conflict`.
	 */
	CONFLICT                                                         = 'Conflict',

	/**
	 * Represents the HTTP response status message for `410 Gone`.
	 */
	GONE                                                             = 'Gone',

	/**
	 * Represents the HTTP response status message for `411 Length Required`.
	 */
	LENGTH_REQUIRED                                                  = 'Length Required',

	/**
	 * Represents the HTTP response status message for `412 Precondition Failed`.
	 */
	PRECONDITION_FAILED                                              = 'Precondition Failed',

	/**
	 * Represents the HTTP response status message for `413 Request Entity Too Large`.
	 */
	REQUEST_ENTITY_TOO_LARGE                                         = 'Request Entity Too Large',

	/**
	 * Represents the HTTP response status message for `414 URI Too Long`.
	 */
	URI_TOO_LONG                                                     = 'URI Too Long',

	/**
	 * Represents the HTTP response status message for `415 Unsupported Media Type`.
	 */
	UNSUPPORTED_MEDIA_TYPE                                           = 'Unsupported Media Type',

	/**
	 * Represents the HTTP response status message for `416 Requested range not satisfiable`.
	 */
	REQUESTED_RANGE_NOT_SATISFIABLE                                  = 'Requested range not satisfiable',

	/**
	 * Represents the HTTP response status message for `417 Expectation Failed`.
	 */
	EXPECTATION_FAILED                                               = 'Expectation Failed',

	/**
	 * Represents the HTTP response status message for `418`.
	 */
	IM_A_TEAPOT                                                      = 'I\'m a teapot',

	/**
	 * Represents the HTTP response status message for `420 Policy Not Fulfilled`.
	 */
	POLICY_NOT_FULFILLED                                             = 'Policy Not Fulfilled',

	/**
	 * Represents the HTTP response status message for `421 Misdirected Request`.
	 */
	MISDIRECTED_REQUEST                                              = 'Misdirected Request',

	/**
	 * Represents the HTTP response status message for `422 Unprocessable Entity`.
	 */
	UNPROCESSABLE_ENTITY                                             = 'Unprocessable Entity',

	/**
	 * Represents the HTTP response status message for `423 Locked`.
	 */
	LOCKED                                                           = 'Locked',

	/**
	 * Represents the HTTP response status message for `424 Failed Dependency`.
	 */
	FAILED_DEPENDENCY                                                = 'Failed Dependency',

	/**
	 * Represents the HTTP response status message for `425 Unordered Collection`.
	 */
	UNORDERED_COLLECTION                                             = 'Unordered Collection',

	/**
	 * Represents the HTTP response status message for `426 Upgrade Required`.
	 */
	UPGRADE_REQUIRED                                                 = 'Upgrade Required',

	/**
	 * Represents the HTTP response status message for `428 Precondition Required`.
	 */
	PRECONDITION_REQUIRED                                            = 'Precondition Required',

	/**
	 * Represents the HTTP response status message for `429 Too Many Requests`.
	 */
	TOO_MANY_REQUESTS                                                = 'Too Many Requests',

	/**
	 * Represents the HTTP response status message for `431 Request Header Fields Too Large`.
	 */
	REQUEST_HEADER_FIELDS_TOO_LARGE                                  = 'Request Header Fields Too Large',

	/**
	 * Represents the HTTP response status message for `444 No Response`.
	 */
	NO_RESPONSE                                                      = 'No Response',

	/**
	 * Represents the HTTP response status message for `449 The request should be retried after doing the appropriate action`.
	 */
	THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION = 'The request should be retried after doing the appropriate action',

	/**
	 * Represents the HTTP response status message for `451 Unavailable For Legal Reasons`.
	 */
	UNAVAILABLE_FOR_LEGAL_REASONS                                    = 'Unavailable For Legal Reasons',

	/**
	 * Represents the HTTP response status message for `499 Client Closed Request`.
	 */
	CLIENT_CLOSED_REQUEST                                            = 'Client Closed Request',

	/**
	 * Represents the HTTP response status message for `500 Internal Server Error`.
	 */
	INTERNAL_SERVER_ERROR                                            = 'Internal Server Error',

	/**
	 * Represents the HTTP response status message for `501 Not Implemented`.
	 */
	NOT_IMPLEMENTED                                                  = 'Not Implemented',

	/**
	 * Represents the HTTP response status message for `502 Bad Gateway`.
	 */
	BAD_GATEWAY                                                      = 'Bad Gateway',

	/**
	 * Represents the HTTP response status message for `503 Service Unavailable`.
	 */
	SERVICE_UNAVAILABLE                                              = 'Service Unavailable',

	/**
	 * Represents the HTTP response status message for `504 Gateway Timeout`.
	 */
	GATEWAY_TIMEOUT                                                  = 'Gateway Timeout',

	/**
	 * Represents the HTTP response status message for `505 HTTP Version not supported`.
	 */
	HTTP_VERSION_NOT_SUPPORTED                                       = 'HTTP Version not supported',

	/**
	 * Represents the HTTP response status message for `506 Variant Also Negotiates`.
	 */
	VARIANT_ALSO_NEGOTIATES                                          = 'Variant Also Negotiates',

	/**
	 * Represents the HTTP response status message for `507 Insufficient Storage`.
	 */
	INSUFFICIENT_STORAGE                                             = 'Insufficient Storage',

	/**
	 * Represents the HTTP response status message for `508 Loop Detected`.
	 */
	LOOP_DETECTED                                                    = 'Loop Detected',

	/**
	 * Represents the HTTP response status message for `509 Bandwidth Limit Exceeded`.
	 */
	BANDWIDTH_LIMIT_EXCEEDED                                         = 'Bandwidth Limit Exceeded',

	/**
	 * Represents the HTTP response status message for `510 Not Extended`.
	 */
	NOT_EXTENDED                                                     = 'Not Extended',

	/**
	 * Represents the HTTP response status message for `511 Network Authentication Required`.
	 */
	NETWORK_AUTHENTICATION_REQUIRED                                  = 'Network Authentication Required'
}
