'use strict';

/**
 * Represents an enumeration of HTTP response status codes.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum HttpResponseStatusCode
{
	/**
	 * Represents the HTTP response status code for `100 Continue`.
	 */
	CONTINUE                                                         = 100,

	/**
	 * Represents the HTTP response status code for `101 Switching Protocols`.
	 */
	SWITCHING_PROTOCOLS                                              = 101,

	/**
	 * Represents the HTTP response status code for `102 Processing`.
	 */
	PROCESSING                                                       = 102,

	/**
	 * Represents the HTTP response status code for `103 Early Hints`.
	 */
	EARLY_HINTS                                                      = 103,

	/**
	 * Represents the HTTP response status code for `200 OK`.
	 */
	OK                                                               = 200,

	/**
	 * Represents the HTTP response status code for `201 Created`.
	 */
	CREATED                                                          = 201,

	/**
	 * Represents the HTTP response status code for `202 Accepted`.
	 */
	ACCEPTED                                                         = 202,

	/**
	 * Represents the HTTP response status code for `203 Non-Authoritative Information`.
	 */
	NON_AUTHORITATIVE_INFORMATION                                    = 203,

	/**
	 * Represents the HTTP response status code for `204 No Content`.
	 */
	NO_CONTENT                                                       = 204,

	/**
	 * Represents the HTTP response status code for `205 Reset Content`.
	 */
	RESET_CONTENT                                                    = 205,

	/**
	 * Represents the HTTP response status code for `206 Partial Content`.
	 */
	PARTIAL_CONTENT                                                  = 206,

	/**
	 * Represents the HTTP response status code for `207 Multi-Status`.
	 */
	MULTI_STATUS                                                     = 207,

	/**
	 * Represents the HTTP response status code for `208 Already Reported`.
	 */
	ALREADY_REPORTED                                                 = 208,

	/**
	 * Represents the HTTP response status code for `226 IM Used`.
	 */
	IM_USED                                                          = 226,

	/**
	 * Represents the HTTP response status code for `300 Multiple Choices`.
	 */
	MULTIPLE_CHOICES                                                 = 300,

	/**
	 * Represents the HTTP response status code for `301 Moved Permanently`.
	 */
	MOVED_PERMANENTLY                                                = 301,

	/**
	 * Represents the HTTP response status code for `302 Found`.
	 */
	FOUND                                                            = 302,

	/**
	 * Represents the HTTP response status code for `303 See Other`.
	 */
	SEE_OTHER                                                        = 303,

	/**
	 * Represents the HTTP response status code for `304 Not Modified`.
	 */
	NOT_MODIFIED                                                     = 304,

	/**
	 * Represents the HTTP response status code for `305 Use Proxy`.
	 */
	USE_PROXY                                                        = 305,

	/**
	 * Represents the HTTP response status code for `306 Switch Proxy`.
	 */
	SWITCH_PROXY                                                     = 306,

	/**
	 * Represents the HTTP response status code for `307 Temporary Redirect`.
	 */
	TEMPORARY_REDIRECT                                               = 307,

	/**
	 * Represents the HTTP response status code for `308 Permanent Redirect`.
	 */
	PERMANENT_REDIRECT                                               = 308,

	/**
	 * Represents the HTTP response status code for `400 Bad Request`.
	 */
	BAD_REQUEST                                                      = 400,

	/**
	 * Represents the HTTP response status code for `401 Unauthorized`.
	 */
	UNAUTHORIZED                                                     = 401,

	/**
	 * Represents the HTTP response status code for `402 Payment Required`.
	 */
	PAYMENT_REQUIRED                                                 = 402,

	/**
	 * Represents the HTTP response status code for `403 Forbidden`.
	 */
	FORBIDDEN                                                        = 403,

	/**
	 * Represents the HTTP response status code for `404 Not Found`.
	 */
	NOT_FOUND                                                        = 404,

	/**
	 * Represents the HTTP response status code for `405 Method Not Allowed`.
	 */
	METHOD_NOT_ALLOWED                                               = 405,

	/**
	 * Represents the HTTP response status code for `406 Not Acceptable`.
	 */
	NOT_ACCEPTABLE                                                   = 406,

	/**
	 * Represents the HTTP response status code for `407 Proxy Authentication Required`.
	 */
	PROXY_AUTHENTICATION_REQUIRED                                    = 407,

	/**
	 * Represents the HTTP response status code for `408 Request Timeout`.
	 */
	REQUEST_TIMEOUT                                                  = 408,

	/**
	 * Represents the HTTP response status code for `409 Conflict`.
	 */
	CONFLICT                                                         = 409,

	/**
	 * Represents the HTTP response status code for `410 Gone`.
	 */
	GONE                                                             = 410,

	/**
	 * Represents the HTTP response status code for `411 Length Required`.
	 */
	LENGTH_REQUIRED                                                  = 411,

	/**
	 * Represents the HTTP response status code for `412 Precondition Failed`.
	 */
	PRECONDITION_FAILED                                              = 412,

	/**
	 * Represents the HTTP response status code for `413 Request Entity Too Large`.
	 */
	REQUEST_ENTITY_TOO_LARGE                                         = 413,

	/**
	 * Represents the HTTP response status code for `414 URI Too Long`.
	 */
	URI_TOO_LONG                                                     = 414,

	/**
	 * Represents the HTTP response status code for `415 Unsupported Media Type`.
	 */
	UNSUPPORTED_MEDIA_TYPE                                           = 415,

	/**
	 * Represents the HTTP response status code for `416 Requested range not satisfiable`.
	 */
	REQUESTED_RANGE_NOT_SATISFIABLE                                  = 416,

	/**
	 * Represents the HTTP response status code for `417 Expectation Failed`.
	 */
	EXPECTATION_FAILED                                               = 417,

	/**
	 * Represents the HTTP response status code for `418`.
	 */
	IM_A_TEAPOT                                                      = 418,

	/**
	 * Represents the HTTP response status code for `420 Policy Not Fulfilled`.
	 */
	POLICY_NOT_FULFILLED                                             = 420,

	/**
	 * Represents the HTTP response status code for `421 Misdirected Request`.
	 */
	MISDIRECTED_REQUEST                                              = 421,

	/**
	 * Represents the HTTP response status code for `422 Unprocessable Entity`.
	 */
	UNPROCESSABLE_ENTITY                                             = 422,

	/**
	 * Represents the HTTP response status code for `423 Locked`.
	 */
	LOCKED                                                           = 423,

	/**
	 * Represents the HTTP response status code for `424 Failed Dependency`.
	 */
	FAILED_DEPENDENCY                                                = 424,

	/**
	 * Represents the HTTP response status code for `425 Unordered Collection`.
	 */
	UNORDERED_COLLECTION                                             = 425,

	/**
	 * Represents the HTTP response status code for `426 Upgrade Required`.
	 */
	UPGRADE_REQUIRED                                                 = 426,

	/**
	 * Represents the HTTP response status code for `428 Precondition Required`.
	 */
	PRECONDITION_REQUIRED                                            = 428,

	/**
	 * Represents the HTTP response status code for `429 Too Many Requests`.
	 */
	TOO_MANY_REQUESTS                                                = 429,

	/**
	 * Represents the HTTP response status code for `431 Request Header Fields Too Large`.
	 */
	REQUEST_HEADER_FIELDS_TOO_LARGE                                  = 431,

	/**
	 * Represents the HTTP response status code for `444 No Response`.
	 */
	NO_RESPONSE                                                      = 444,

	/**
	 * Represents the HTTP response status code for `449 The request should be retried after doing the appropriate action`.
	 */
	THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION = 449,

	/**
	 * Represents the HTTP response status code for `451 Unavailable For Legal Reasons`.
	 */
	UNAVAILABLE_FOR_LEGAL_REASONS                                    = 451,

	/**
	 * Represents the HTTP response status code for `499 Client Closed Request`.
	 */
	CLIENT_CLOSED_REQUEST                                            = 499,

	/**
	 * Represents the HTTP response status code for `500 Internal Server Error`.
	 */
	INTERNAL_SERVER_ERROR                                            = 500,

	/**
	 * Represents the HTTP response status code for `501 Not Implemented`.
	 */
	NOT_IMPLEMENTED                                                  = 501,

	/**
	 * Represents the HTTP response status code for `502 Bad Gateway`.
	 */
	BAD_GATEWAY                                                      = 502,

	/**
	 * Represents the HTTP response status code for `503 Service Unavailable`.
	 */
	SERVICE_UNAVAILABLE                                              = 503,

	/**
	 * Represents the HTTP response status code for `504 Gateway Timeout`.
	 */
	GATEWAY_TIMEOUT                                                  = 504,

	/**
	 * Represents the HTTP response status code for `505 HTTP Version not supported`.
	 */
	HTTP_VERSION_NOT_SUPPORTED                                       = 505,

	/**
	 * Represents the HTTP response status code for `506 Variant Also Negotiates`.
	 */
	VARIANT_ALSO_NEGOTIATES                                          = 506,

	/**
	 * Represents the HTTP response status code for `507 Insufficient Storage`.
	 */
	INSUFFICIENT_STORAGE                                             = 507,

	/**
	 * Represents the HTTP response status code for `508 Loop Detected`.
	 */
	LOOP_DETECTED                                                    = 508,

	/**
	 * Represents the HTTP response status code for `509 Bandwidth Limit Exceeded`.
	 */
	BANDWIDTH_LIMIT_EXCEEDED                                         = 509,

	/**
	 * Represents the HTTP response status code for `510 Not Extended`.
	 */
	NOT_EXTENDED                                                     = 510,

	/**
	 * Represents the HTTP response status code for `511 Network Authentication Required`.
	 */
	NETWORK_AUTHENTICATION_REQUIRED                                  = 511
}
