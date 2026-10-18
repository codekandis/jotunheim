'use strict';

/**
 * Represents an enumeration of MIME types.
 * @link https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
 * @version Rev. 1911155
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum MimeType
{
	/**
	 * Represents the content type `application/1d-interleaved-parityfec`.
	 */
	APPLICATION_1D_INTERLEAVED_PARITYFEC                                                 = 'application/1d-interleaved-parityfec',

	/**
	 * Represents the content type `application/3gpdash-qoe-report+xml`.
	 */
	APPLICATION_3GPDASH_QOE_REPORT_XML                                                   = 'application/3gpdash-qoe-report+xml',

	/**
	 * Represents the content type `application/3gpp-ims+xml`.
	 */
	APPLICATION_3GPP_IMS_XML                                                             = 'application/3gpp-ims+xml',

	/**
	 * Represents the content type `application/a2l`.
	 */
	APPLICATION_A2L                                                                      = 'application/a2l',

	/**
	 * Represents the content type `application/activemessage`.
	 */
	APPLICATION_ACTIVEMESSAGE                                                            = 'application/activemessage',

	/**
	 * Represents the content type `application/alto-costmap+json`.
	 */
	APPLICATION_ALTO_COSTMAP_JSON                                                        = 'application/alto-costmap+json',

	/**
	 * Represents the content type `application/alto-costmapfilter+json`.
	 */
	APPLICATION_ALTO_COSTMAPFILTER_JSON                                                  = 'application/alto-costmapfilter+json',

	/**
	 * Represents the content type `application/alto-directory+json`.
	 */
	APPLICATION_ALTO_DIRECTORY_JSON                                                      = 'application/alto-directory+json',

	/**
	 * Represents the content type `application/alto-endpointcost+json`.
	 */
	APPLICATION_ALTO_ENDPOINTCOST_JSON                                                   = 'application/alto-endpointcost+json',

	/**
	 * Represents the content type `application/alto-endpointcostparams+json`.
	 */
	APPLICATION_ALTO_ENDPOINTCOSTPARAMS_JSON                                             = 'application/alto-endpointcostparams+json',

	/**
	 * Represents the content type `application/alto-endpointprop+json`.
	 */
	APPLICATION_ALTO_ENDPOINTPROP_JSON                                                   = 'application/alto-endpointprop+json',

	/**
	 * Represents the content type `application/alto-endpointpropparams+json`.
	 */
	APPLICATION_ALTO_ENDPOINTPROPPARAMS_JSON                                             = 'application/alto-endpointpropparams+json',

	/**
	 * Represents the content type `application/alto-error+json`.
	 */
	APPLICATION_ALTO_ERROR_JSON                                                          = 'application/alto-error+json',

	/**
	 * Represents the content type `application/alto-networkmap+json`.
	 */
	APPLICATION_ALTO_NETWORKMAP_JSON                                                     = 'application/alto-networkmap+json',

	/**
	 * Represents the content type `application/alto-networkmapfilter+json`.
	 */
	APPLICATION_ALTO_NETWORKMAPFILTER_JSON                                               = 'application/alto-networkmapfilter+json',

	/**
	 * Represents the content type `application/aml`.
	 */
	APPLICATION_AML                                                                      = 'application/aml',

	/**
	 * Represents the content type `application/andrew-inset`.
	 */
	APPLICATION_ANDREW_INSET                                                             = 'application/andrew-inset',

	/**
	 * Represents the content type `application/applefile`.
	 */
	APPLICATION_APPLEFILE                                                                = 'application/applefile',

	/**
	 * Represents the content type `application/applixware`.
	 */
	APPLICATION_APPLIXWARE                                                               = 'application/applixware',

	/**
	 * Represents the content type `application/atf`.
	 */
	APPLICATION_ATF                                                                      = 'application/atf',

	/**
	 * Represents the content type `application/atfx`.
	 */
	APPLICATION_ATFX                                                                     = 'application/atfx',

	/**
	 * Represents the content type `application/atom+xml`.
	 */
	APPLICATION_ATOM_XML                                                                 = 'application/atom+xml',

	/**
	 * Represents the content type `application/atomcat+xml`.
	 */
	APPLICATION_ATOMCAT_XML                                                              = 'application/atomcat+xml',

	/**
	 * Represents the content type `application/atomdeleted+xml`.
	 */
	APPLICATION_ATOMDELETED_XML                                                          = 'application/atomdeleted+xml',

	/**
	 * Represents the content type `application/atomicmail`.
	 */
	APPLICATION_ATOMICMAIL                                                               = 'application/atomicmail',

	/**
	 * Represents the content type `application/atomsvc+xml`.
	 */
	APPLICATION_ATOMSVC_XML                                                              = 'application/atomsvc+xml',

	/**
	 * Represents the content type `application/atxml`.
	 */
	APPLICATION_ATXML                                                                    = 'application/atxml',

	/**
	 * Represents the content type `application/auth-policy+xml`.
	 */
	APPLICATION_AUTH_POLICY_XML                                                          = 'application/auth-policy+xml',

	/**
	 * Represents the content type `application/bacnet-xdd+zip`.
	 */
	APPLICATION_BACNET_XDD_ZIP                                                           = 'application/bacnet-xdd+zip',

	/**
	 * Represents the content type `application/batch-smtp`.
	 */
	APPLICATION_BATCH_SMTP                                                               = 'application/batch-smtp',

	/**
	 * Represents the content type `application/beep+xml`.
	 */
	APPLICATION_BEEP_XML                                                                 = 'application/beep+xml',

	/**
	 * Represents the content type `application/calendar+json`.
	 */
	APPLICATION_CALENDAR_JSON                                                            = 'application/calendar+json',

	/**
	 * Represents the content type `application/calendar+xml`.
	 */
	APPLICATION_CALENDAR_XML                                                             = 'application/calendar+xml',

	/**
	 * Represents the content type `application/call-completion`.
	 */
	APPLICATION_CALL_COMPLETION                                                          = 'application/call-completion',

	/**
	 * Represents the content type `application/cals-1840`.
	 */
	APPLICATION_CALS_1840                                                                = 'application/cals-1840',

	/**
	 * Represents the content type `application/cbor`.
	 */
	APPLICATION_CBOR                                                                     = 'application/cbor',

	/**
	 * Represents the content type `application/ccmp+xml`.
	 */
	APPLICATION_CCMP_XML                                                                 = 'application/ccmp+xml',

	/**
	 * Represents the content type `application/ccxml+xml`.
	 */
	APPLICATION_CCXML_XML                                                                = 'application/ccxml+xml',

	/**
	 * Represents the content type `application/cdfx+xml`.
	 */
	APPLICATION_CDFX_XML                                                                 = 'application/cdfx+xml',

	/**
	 * Represents the content type `application/cdmi-capability`.
	 */
	APPLICATION_CDMI_CAPABILITY                                                          = 'application/cdmi-capability',

	/**
	 * Represents the content type `application/cdmi-container`.
	 */
	APPLICATION_CDMI_CONTAINER                                                           = 'application/cdmi-container',

	/**
	 * Represents the content type `application/cdmi-domain`.
	 */
	APPLICATION_CDMI_DOMAIN                                                              = 'application/cdmi-domain',

	/**
	 * Represents the content type `application/cdmi-object`.
	 */
	APPLICATION_CDMI_OBJECT                                                              = 'application/cdmi-object',

	/**
	 * Represents the content type `application/cdmi-queue`.
	 */
	APPLICATION_CDMI_QUEUE                                                               = 'application/cdmi-queue',

	/**
	 * Represents the content type `application/cdni`.
	 */
	APPLICATION_CDNI                                                                     = 'application/cdni',

	/**
	 * Represents the content type `application/cea`.
	 */
	APPLICATION_CEA                                                                      = 'application/cea',

	/**
	 * Represents the content type `application/cea-2018+xml`.
	 */
	APPLICATION_CEA_2018_XML                                                             = 'application/cea-2018+xml',

	/**
	 * Represents the content type `application/cellml+xml`.
	 */
	APPLICATION_CELLML_XML                                                               = 'application/cellml+xml',

	/**
	 * Represents the content type `application/cfw`.
	 */
	APPLICATION_CFW                                                                      = 'application/cfw',

	/**
	 * Represents the content type `application/cms`.
	 */
	APPLICATION_CMS                                                                      = 'application/cms',

	/**
	 * Represents the content type `application/cnrp+xml`.
	 */
	APPLICATION_CNRP_XML                                                                 = 'application/cnrp+xml',

	/**
	 * Represents the content type `application/coap-group+json`.
	 */
	APPLICATION_COAP_GROUP_JSON                                                          = 'application/coap-group+json',

	/**
	 * Represents the content type `application/commonground`.
	 */
	APPLICATION_COMMONGROUND                                                             = 'application/commonground',

	/**
	 * Represents the content type `application/conference-info+xml`.
	 */
	APPLICATION_CONFERENCE_INFO_XML                                                      = 'application/conference-info+xml',

	/**
	 * Represents the content type `application/cpl+xml`.
	 */
	APPLICATION_CPL_XML                                                                  = 'application/cpl+xml',

	/**
	 * Represents the content type `application/csrattrs`.
	 */
	APPLICATION_CSRATTRS                                                                 = 'application/csrattrs',

	/**
	 * Represents the content type `application/csta+xml`.
	 */
	APPLICATION_CSTA_XML                                                                 = 'application/csta+xml',

	/**
	 * Represents the content type `application/cstadata+xml`.
	 */
	APPLICATION_CSTADATA_XML                                                             = 'application/cstadata+xml',

	/**
	 * Represents the content type `application/csvm+json`.
	 */
	APPLICATION_CSVM_JSON                                                                = 'application/csvm+json',

	/**
	 * Represents the content type `application/cu-seeme`.
	 */
	APPLICATION_CU_SEEME                                                                 = 'application/cu-seeme',

	/**
	 * Represents the content type `application/cybercash`.
	 */
	APPLICATION_CYBERCASH                                                                = 'application/cybercash',

	/**
	 * Represents the content type `application/dash+xml`.
	 */
	APPLICATION_DASH_XML                                                                 = 'application/dash+xml',

	/**
	 * Represents the content type `application/dashdelta`.
	 */
	APPLICATION_DASHDELTA                                                                = 'application/dashdelta',

	/**
	 * Represents the content type `application/davmount+xml`.
	 */
	APPLICATION_DAVMOUNT_XML                                                             = 'application/davmount+xml',

	/**
	 * Represents the content type `application/dca-rft`.
	 */
	APPLICATION_DCA_RFT                                                                  = 'application/dca-rft',

	/**
	 * Represents the content type `application/dcd`.
	 */
	APPLICATION_DCD                                                                      = 'application/dcd',

	/**
	 * Represents the content type `application/dec-dx`.
	 */
	APPLICATION_DEC_DX                                                                   = 'application/dec-dx',

	/**
	 * Represents the content type `application/dialog-info+xml`.
	 */
	APPLICATION_DIALOG_INFO_XML                                                          = 'application/dialog-info+xml',

	/**
	 * Represents the content type `application/dicom`.
	 */
	APPLICATION_DICOM                                                                    = 'application/dicom',

	/**
	 * Represents the content type `application/dii`.
	 */
	APPLICATION_DII                                                                      = 'application/dii',

	/**
	 * Represents the content type `application/dit`.
	 */
	APPLICATION_DIT                                                                      = 'application/dit',

	/**
	 * Represents the content type `application/dns`.
	 */
	APPLICATION_DNS                                                                      = 'application/dns',

	/**
	 * Represents the content type `application/docbook+xml`.
	 */
	APPLICATION_DOCBOOK_XML                                                              = 'application/docbook+xml',

	/**
	 * Represents the content type `application/dskpp+xml`.
	 */
	APPLICATION_DSKPP_XML                                                                = 'application/dskpp+xml',

	/**
	 * Represents the content type `application/dssc+der`.
	 */
	APPLICATION_DSSC_DER                                                                 = 'application/dssc+der',

	/**
	 * Represents the content type `application/dssc+xml`.
	 */
	APPLICATION_DSSC_XML                                                                 = 'application/dssc+xml',

	/**
	 * Represents the content type `application/dvcs`.
	 */
	APPLICATION_DVCS                                                                     = 'application/dvcs',

	/**
	 * Represents the content type `application/ecmascript`.
	 */
	APPLICATION_ECMASCRIPT                                                               = 'application/ecmascript',

	/**
	 * Represents the content type `application/edi-consent`.
	 */
	APPLICATION_EDI_CONSENT                                                              = 'application/edi-consent',

	/**
	 * Represents the content type `application/edi-x12`.
	 */
	APPLICATION_EDI_X12                                                                  = 'application/edi-x12',

	/**
	 * Represents the content type `application/edifact`.
	 */
	APPLICATION_EDIFACT                                                                  = 'application/edifact',

	/**
	 * Represents the content type `application/efi`.
	 */
	APPLICATION_EFI                                                                      = 'application/efi',

	/**
	 * Represents the content type `application/emergencycalldata.comment+xml`.
	 */
	APPLICATION_EMERGENCYCALLDATA_COMMENT_XML                                            = 'application/emergencycalldata.comment+xml',

	/**
	 * Represents the content type `application/emergencycalldata.deviceinfo+xml`.
	 */
	APPLICATION_EMERGENCYCALLDATA_DEVICEINFO_XML                                         = 'application/emergencycalldata.deviceinfo+xml',

	/**
	 * Represents the content type `application/emergencycalldata.providerinfo+xml`.
	 */
	APPLICATION_EMERGENCYCALLDATA_PROVIDERINFO_XML                                       = 'application/emergencycalldata.providerinfo+xml',

	/**
	 * Represents the content type `application/emergencycalldata.serviceinfo+xml`.
	 */
	APPLICATION_EMERGENCYCALLDATA_SERVICEINFO_XML                                        = 'application/emergencycalldata.serviceinfo+xml',

	/**
	 * Represents the content type `application/emergencycalldata.subscriberinfo+xml`.
	 */
	APPLICATION_EMERGENCYCALLDATA_SUBSCRIBERINFO_XML                                     = 'application/emergencycalldata.subscriberinfo+xml',

	/**
	 * Represents the content type `application/emma+xml`.
	 */
	APPLICATION_EMMA_XML                                                                 = 'application/emma+xml',

	/**
	 * Represents the content type `application/emotionml+xml`.
	 */
	APPLICATION_EMOTIONML_XML                                                            = 'application/emotionml+xml',

	/**
	 * Represents the content type `application/encaprtp`.
	 */
	APPLICATION_ENCAPRTP                                                                 = 'application/encaprtp',

	/**
	 * Represents the content type `application/epp+xml`.
	 */
	APPLICATION_EPP_XML                                                                  = 'application/epp+xml',

	/**
	 * Represents the content type `application/epub+zip`.
	 */
	APPLICATION_EPUB_ZIP                                                                 = 'application/epub+zip',

	/**
	 * Represents the content type `application/eshop`.
	 */
	APPLICATION_ESHOP                                                                    = 'application/eshop',

	/**
	 * Represents the content type `application/example`.
	 */
	APPLICATION_EXAMPLE                                                                  = 'application/example',

	/**
	 * Represents the content type `application/exi`.
	 */
	APPLICATION_EXI                                                                      = 'application/exi',

	/**
	 * Represents the content type `application/fastinfoset`.
	 */
	APPLICATION_FASTINFOSET                                                              = 'application/fastinfoset',

	/**
	 * Represents the content type `application/fastsoap`.
	 */
	APPLICATION_FASTSOAP                                                                 = 'application/fastsoap',

	/**
	 * Represents the content type `application/fdt+xml`.
	 */
	APPLICATION_FDT_XML                                                                  = 'application/fdt+xml',

	/**
	 * Represents the content type `application/fits`.
	 */
	APPLICATION_FITS                                                                     = 'application/fits',

	/**
	 * Represents the content type `application/font-tdpfr`.
	 */
	APPLICATION_FONT_TDPFR                                                               = 'application/font-tdpfr',

	/**
	 * Represents the content type `application/framework-attributes+xml`.
	 */
	APPLICATION_FRAMEWORK_ATTRIBUTES_XML                                                 = 'application/framework-attributes+xml',

	/**
	 * Represents the content type `application/geo+json`.
	 */
	APPLICATION_GEO_JSON                                                                 = 'application/geo+json',

	/**
	 * Represents the content type `application/gml+xml`.
	 */
	APPLICATION_GML_XML                                                                  = 'application/gml+xml',

	/**
	 * Represents the content type `application/gpx+xml`.
	 */
	APPLICATION_GPX_XML                                                                  = 'application/gpx+xml',

	/**
	 * Represents the content type `application/gxf`.
	 */
	APPLICATION_GXF                                                                      = 'application/gxf',

	/**
	 * Represents the content type `application/gzip`.
	 */
	APPLICATION_GZIP                                                                     = 'application/gzip',

	/**
	 * Represents the content type `application/h224`.
	 */
	APPLICATION_H224                                                                     = 'application/h224',

	/**
	 * Represents the content type `application/held+xml`.
	 */
	APPLICATION_HELD_XML                                                                 = 'application/held+xml',

	/**
	 * Represents the content type `application/http`.
	 */
	APPLICATION_HTTP                                                                     = 'application/http',

	/**
	 * Represents the content type `application/hyperstudio`.
	 */
	APPLICATION_HYPERSTUDIO                                                              = 'application/hyperstudio',

	/**
	 * Represents the content type `application/ibe-key-request+xml`.
	 */
	APPLICATION_IBE_KEY_REQUEST_XML                                                      = 'application/ibe-key-request+xml',

	/**
	 * Represents the content type `application/ibe-pkg-reply+xml`.
	 */
	APPLICATION_IBE_PKG_REPLY_XML                                                        = 'application/ibe-pkg-reply+xml',

	/**
	 * Represents the content type `application/ibe-pp-data`.
	 */
	APPLICATION_IBE_PP_DATA                                                              = 'application/ibe-pp-data',

	/**
	 * Represents the content type `application/iges`.
	 */
	APPLICATION_IGES                                                                     = 'application/iges',

	/**
	 * Represents the content type `application/im-iscomposing+xml`.
	 */
	APPLICATION_IM_ISCOMPOSING_XML                                                       = 'application/im-iscomposing+xml',

	/**
	 * Represents the content type `application/index`.
	 */
	APPLICATION_INDEX                                                                    = 'application/index',

	/**
	 * Represents the content type `application/index.cmd`.
	 */
	APPLICATION_INDEX_CMD                                                                = 'application/index.cmd',

	/**
	 * Represents the content type `application/index.obj`.
	 */
	APPLICATION_INDEX_OBJ                                                                = 'application/index.obj',

	/**
	 * Represents the content type `application/index.response`.
	 */
	APPLICATION_INDEX_RESPONSE                                                           = 'application/index.response',

	/**
	 * Represents the content type `application/index.vnd`.
	 */
	APPLICATION_INDEX_VND                                                                = 'application/index.vnd',

	/**
	 * Represents the content type `application/inkml+xml`.
	 */
	APPLICATION_INKML_XML                                                                = 'application/inkml+xml',

	/**
	 * Represents the content type `application/iotp`.
	 */
	APPLICATION_IOTP                                                                     = 'application/iotp',

	/**
	 * Represents the content type `application/ipfix`.
	 */
	APPLICATION_IPFIX                                                                    = 'application/ipfix',

	/**
	 * Represents the content type `application/ipp`.
	 */
	APPLICATION_IPP                                                                      = 'application/ipp',

	/**
	 * Represents the content type `application/isup`.
	 */
	APPLICATION_ISUP                                                                     = 'application/isup',

	/**
	 * Represents the content type `application/its+xml`.
	 */
	APPLICATION_ITS_XML                                                                  = 'application/its+xml',

	/**
	 * Represents the content type `application/java-archive`.
	 */
	APPLICATION_JAVA_ARCHIVE                                                             = 'application/java-archive',

	/**
	 * Represents the content type `application/java-serialized-object`.
	 */
	APPLICATION_JAVA_SERIALIZED_OBJECT                                                   = 'application/java-serialized-object',

	/**
	 * Represents the content type `application/java-vm`.
	 */
	APPLICATION_JAVA_VM                                                                  = 'application/java-vm',

	/**
	 * Represents the content type `application/javascript`.
	 */
	APPLICATION_JAVASCRIPT                                                               = 'application/javascript',

	/**
	 * Represents the content type `application/jose`.
	 */
	APPLICATION_JOSE                                                                     = 'application/jose',

	/**
	 * Represents the content type `application/jose+json`.
	 */
	APPLICATION_JOSE_JSON                                                                = 'application/jose+json',

	/**
	 * Represents the content type `application/jrd+json`.
	 */
	APPLICATION_JRD_JSON                                                                 = 'application/jrd+json',

	/**
	 * Represents the content type `application/json`.
	 */
	APPLICATION_JSON                                                                     = 'application/json',

	/**
	 * Represents the content type `application/json-patch+json`.
	 */
	APPLICATION_JSON_PATCH_JSON                                                          = 'application/json-patch+json',

	/**
	 * Represents the content type `application/json-seq`.
	 */
	APPLICATION_JSON_SEQ                                                                 = 'application/json-seq',

	/**
	 * Represents the content type `application/jsonml+json`.
	 */
	APPLICATION_JSONML_JSON                                                              = 'application/jsonml+json',

	/**
	 * Represents the content type `application/jwk+json`.
	 */
	APPLICATION_JWK_JSON                                                                 = 'application/jwk+json',

	/**
	 * Represents the content type `application/jwk-set+json`.
	 */
	APPLICATION_JWK_SET_JSON                                                             = 'application/jwk-set+json',

	/**
	 * Represents the content type `application/jwt`.
	 */
	APPLICATION_JWT                                                                      = 'application/jwt',

	/**
	 * Represents the content type `application/kpml-request+xml`.
	 */
	APPLICATION_KPML_REQUEST_XML                                                         = 'application/kpml-request+xml',

	/**
	 * Represents the content type `application/kpml-response+xml`.
	 */
	APPLICATION_KPML_RESPONSE_XML                                                        = 'application/kpml-response+xml',

	/**
	 * Represents the content type `application/ld+json`.
	 */
	APPLICATION_LD_JSON                                                                  = 'application/ld+json',

	/**
	 * Represents the content type `application/lgr+xml`.
	 */
	APPLICATION_LGR_XML                                                                  = 'application/lgr+xml',

	/**
	 * Represents the content type `application/link-format`.
	 */
	APPLICATION_LINK_FORMAT                                                              = 'application/link-format',

	/**
	 * Represents the content type `application/load-control+xml`.
	 */
	APPLICATION_LOAD_CONTROL_XML                                                         = 'application/load-control+xml',

	/**
	 * Represents the content type `application/lost+xml`.
	 */
	APPLICATION_LOST_XML                                                                 = 'application/lost+xml',

	/**
	 * Represents the content type `application/lostsync+xml`.
	 */
	APPLICATION_LOSTSYNC_XML                                                             = 'application/lostsync+xml',

	/**
	 * Represents the content type `application/lxf`.
	 */
	APPLICATION_LXF                                                                      = 'application/lxf',

	/**
	 * Represents the content type `application/mac-binhex40`.
	 */
	APPLICATION_MAC_BINHEX40                                                             = 'application/mac-binhex40',

	/**
	 * Represents the content type `application/mac-compactpro`.
	 */
	APPLICATION_MAC_COMPACTPRO                                                           = 'application/mac-compactpro',

	/**
	 * Represents the content type `application/macwriteii`.
	 */
	APPLICATION_MACWRITEII                                                               = 'application/macwriteii',

	/**
	 * Represents the content type `application/mads+xml`.
	 */
	APPLICATION_MADS_XML                                                                 = 'application/mads+xml',

	/**
	 * Represents the content type `application/marc`.
	 */
	APPLICATION_MARC                                                                     = 'application/marc',

	/**
	 * Represents the content type `application/marcxml+xml`.
	 */
	APPLICATION_MARCXML_XML                                                              = 'application/marcxml+xml',

	/**
	 * Represents the content type `application/mathematica`.
	 */
	APPLICATION_MATHEMATICA                                                              = 'application/mathematica',

	/**
	 * Represents the content type `application/mathml+xml`.
	 */
	APPLICATION_MATHML_XML                                                               = 'application/mathml+xml',

	/**
	 * Represents the content type `application/mathml-content+xml`.
	 */
	APPLICATION_MATHML_CONTENT_XML                                                       = 'application/mathml-content+xml',

	/**
	 * Represents the content type `application/mathml-presentation+xml`.
	 */
	APPLICATION_MATHML_PRESENTATION_XML                                                  = 'application/mathml-presentation+xml',

	/**
	 * Represents the content type `application/mbms-associated-procedure-description+xml`.
	 */
	APPLICATION_MBMS_ASSOCIATED_PROCEDURE_DESCRIPTION_XML                                = 'application/mbms-associated-procedure-description+xml',

	/**
	 * Represents the content type `application/mbms-deregister+xml`.
	 */
	APPLICATION_MBMS_DEREGISTER_XML                                                      = 'application/mbms-deregister+xml',

	/**
	 * Represents the content type `application/mbms-envelope+xml`.
	 */
	APPLICATION_MBMS_ENVELOPE_XML                                                        = 'application/mbms-envelope+xml',

	/**
	 * Represents the content type `application/mbms-msk+xml`.
	 */
	APPLICATION_MBMS_MSK_XML                                                             = 'application/mbms-msk+xml',

	/**
	 * Represents the content type `application/mbms-msk-response+xml`.
	 */
	APPLICATION_MBMS_MSK_RESPONSE_XML                                                    = 'application/mbms-msk-response+xml',

	/**
	 * Represents the content type `application/mbms-protection-description+xml`.
	 */
	APPLICATION_MBMS_PROTECTION_DESCRIPTION_XML                                          = 'application/mbms-protection-description+xml',

	/**
	 * Represents the content type `application/mbms-reception-report+xml`.
	 */
	APPLICATION_MBMS_RECEPTION_REPORT_XML                                                = 'application/mbms-reception-report+xml',

	/**
	 * Represents the content type `application/mbms-register+xml`.
	 */
	APPLICATION_MBMS_REGISTER_XML                                                        = 'application/mbms-register+xml',

	/**
	 * Represents the content type `application/mbms-register-response+xml`.
	 */
	APPLICATION_MBMS_REGISTER_RESPONSE_XML                                               = 'application/mbms-register-response+xml',

	/**
	 * Represents the content type `application/mbms-schedule+xml`.
	 */
	APPLICATION_MBMS_SCHEDULE_XML                                                        = 'application/mbms-schedule+xml',

	/**
	 * Represents the content type `application/mbms-user-service-description+xml`.
	 */
	APPLICATION_MBMS_USER_SERVICE_DESCRIPTION_XML                                        = 'application/mbms-user-service-description+xml',

	/**
	 * Represents the content type `application/mbox`.
	 */
	APPLICATION_MBOX                                                                     = 'application/mbox',

	/**
	 * Represents the content type `application/media-policy-dataset+xml`.
	 */
	APPLICATION_MEDIA_POLICY_DATASET_XML                                                 = 'application/media-policy-dataset+xml',

	/**
	 * Represents the content type `application/media_control+xml`.
	 */
	APPLICATION_MEDIA_CONTROL_XML                                                        = 'application/media_control+xml',

	/**
	 * Represents the content type `application/mediaservercontrol+xml`.
	 */
	APPLICATION_MEDIASERVERCONTROL_XML                                                   = 'application/mediaservercontrol+xml',

	/**
	 * Represents the content type `application/merge-patch+json`.
	 */
	APPLICATION_MERGE_PATCH_JSON                                                         = 'application/merge-patch+json',

	/**
	 * Represents the content type `application/metalink+xml`.
	 */
	APPLICATION_METALINK_XML                                                             = 'application/metalink+xml',

	/**
	 * Represents the content type `application/metalink4+xml`.
	 */
	APPLICATION_METALINK4_XML                                                            = 'application/metalink4+xml',

	/**
	 * Represents the content type `application/mets+xml`.
	 */
	APPLICATION_METS_XML                                                                 = 'application/mets+xml',

	/**
	 * Represents the content type `application/mf4`.
	 */
	APPLICATION_MF4                                                                      = 'application/mf4',

	/**
	 * Represents the content type `application/mikey`.
	 */
	APPLICATION_MIKEY                                                                    = 'application/mikey',

	/**
	 * Represents the content type `application/mods+xml`.
	 */
	APPLICATION_MODS_XML                                                                 = 'application/mods+xml',

	/**
	 * Represents the content type `application/moss-keys`.
	 */
	APPLICATION_MOSS_KEYS                                                                = 'application/moss-keys',

	/**
	 * Represents the content type `application/moss-signature`.
	 */
	APPLICATION_MOSS_SIGNATURE                                                           = 'application/moss-signature',

	/**
	 * Represents the content type `application/mosskey-data`.
	 */
	APPLICATION_MOSSKEY_DATA                                                             = 'application/mosskey-data',

	/**
	 * Represents the content type `application/mosskey-request`.
	 */
	APPLICATION_MOSSKEY_REQUEST                                                          = 'application/mosskey-request',

	/**
	 * Represents the content type `application/mp21`.
	 */
	APPLICATION_MP21                                                                     = 'application/mp21',

	/**
	 * Represents the content type `application/mp4`.
	 */
	APPLICATION_MP4                                                                      = 'application/mp4',

	/**
	 * Represents the content type `application/mpeg4-generic`.
	 */
	APPLICATION_MPEG4_GENERIC                                                            = 'application/mpeg4-generic',

	/**
	 * Represents the content type `application/mpeg4-iod`.
	 */
	APPLICATION_MPEG4_IOD                                                                = 'application/mpeg4-iod',

	/**
	 * Represents the content type `application/mpeg4-iod-xmt`.
	 */
	APPLICATION_MPEG4_IOD_XMT                                                            = 'application/mpeg4-iod-xmt',

	/**
	 * Represents the content type `application/mrb-consumer+xml`.
	 */
	APPLICATION_MRB_CONSUMER_XML                                                         = 'application/mrb-consumer+xml',

	/**
	 * Represents the content type `application/mrb-publish+xml`.
	 */
	APPLICATION_MRB_PUBLISH_XML                                                          = 'application/mrb-publish+xml',

	/**
	 * Represents the content type `application/msc-ivr+xml`.
	 */
	APPLICATION_MSC_IVR_XML                                                              = 'application/msc-ivr+xml',

	/**
	 * Represents the content type `application/msc-mixer+xml`.
	 */
	APPLICATION_MSC_MIXER_XML                                                            = 'application/msc-mixer+xml',

	/**
	 * Represents the content type `application/msword`.
	 */
	APPLICATION_MSWORD                                                                   = 'application/msword',

	/**
	 * Represents the content type `application/mxf`.
	 */
	APPLICATION_MXF                                                                      = 'application/mxf',

	/**
	 * Represents the content type `application/nasdata`.
	 */
	APPLICATION_NASDATA                                                                  = 'application/nasdata',

	/**
	 * Represents the content type `application/news-checkgroups`.
	 */
	APPLICATION_NEWS_CHECKGROUPS                                                         = 'application/news-checkgroups',

	/**
	 * Represents the content type `application/news-groupinfo`.
	 */
	APPLICATION_NEWS_GROUPINFO                                                           = 'application/news-groupinfo',

	/**
	 * Represents the content type `application/news-transmission`.
	 */
	APPLICATION_NEWS_TRANSMISSION                                                        = 'application/news-transmission',

	/**
	 * Represents the content type `application/nlsml+xml`.
	 */
	APPLICATION_NLSML_XML                                                                = 'application/nlsml+xml',

	/**
	 * Represents the content type `application/nss`.
	 */
	APPLICATION_NSS                                                                      = 'application/nss',

	/**
	 * Represents the content type `application/ocsp-request`.
	 */
	APPLICATION_OCSP_REQUEST                                                             = 'application/ocsp-request',

	/**
	 * Represents the content type `application/ocsp-response`.
	 */
	APPLICATION_OCSP_RESPONSE                                                            = 'application/ocsp-response',

	/**
	 * Represents the content type `application/octet-stream`.
	 */
	APPLICATION_OCTET_STREAM                                                             = 'application/octet-stream',

	/**
	 * Represents the content type `application/oda`.
	 */
	APPLICATION_ODA                                                                      = 'application/oda',

	/**
	 * Represents the content type `application/odx`.
	 */
	APPLICATION_ODX                                                                      = 'application/odx',

	/**
	 * Represents the content type `application/oebps-package+xml`.
	 */
	APPLICATION_OEBPS_PACKAGE_XML                                                        = 'application/oebps-package+xml',

	/**
	 * Represents the content type `application/ogg`.
	 */
	APPLICATION_OGG                                                                      = 'application/ogg',

	/**
	 * Represents the content type `application/omdoc+xml`.
	 */
	APPLICATION_OMDOC_XML                                                                = 'application/omdoc+xml',

	/**
	 * Represents the content type `application/onenote`.
	 */
	APPLICATION_ONENOTE                                                                  = 'application/onenote',

	/**
	 * Represents the content type `application/oxps`.
	 */
	APPLICATION_OXPS                                                                     = 'application/oxps',

	/**
	 * Represents the content type `application/p2p-overlay+xml`.
	 */
	APPLICATION_P2P_OVERLAY_XML                                                          = 'application/p2p-overlay+xml',

	/**
	 * Represents the content type `application/parityfec`.
	 */
	APPLICATION_PARITYFEC                                                                = 'application/parityfec',

	/**
	 * Represents the content type `application/patch-ops-error+xml`.
	 */
	APPLICATION_PATCH_OPS_ERROR_XML                                                      = 'application/patch-ops-error+xml',

	/**
	 * Represents the content type `application/pdf`.
	 */
	APPLICATION_PDF                                                                      = 'application/pdf',

	/**
	 * Represents the content type `application/pdx`.
	 */
	APPLICATION_PDX                                                                      = 'application/pdx',

	/**
	 * Represents the content type `application/pgp-encrypted`.
	 */
	APPLICATION_PGP_ENCRYPTED                                                            = 'application/pgp-encrypted',

	/**
	 * Represents the content type `application/pgp-keys`.
	 */
	APPLICATION_PGP_KEYS                                                                 = 'application/pgp-keys',

	/**
	 * Represents the content type `application/pgp-signature`.
	 */
	APPLICATION_PGP_SIGNATURE                                                            = 'application/pgp-signature',

	/**
	 * Represents the content type `application/pics-rules`.
	 */
	APPLICATION_PICS_RULES                                                               = 'application/pics-rules',

	/**
	 * Represents the content type `application/pidf+xml`.
	 */
	APPLICATION_PIDF_XML                                                                 = 'application/pidf+xml',

	/**
	 * Represents the content type `application/pidf-diff+xml`.
	 */
	APPLICATION_PIDF_DIFF_XML                                                            = 'application/pidf-diff+xml',

	/**
	 * Represents the content type `application/pkcs10`.
	 */
	APPLICATION_PKCS10                                                                   = 'application/pkcs10',

	/**
	 * Represents the content type `application/pkcs12`.
	 */
	APPLICATION_PKCS12                                                                   = 'application/pkcs12',

	/**
	 * Represents the content type `application/pkcs7-mime`.
	 */
	APPLICATION_PKCS7_MIME                                                               = 'application/pkcs7-mime',

	/**
	 * Represents the content type `application/pkcs7-signature`.
	 */
	APPLICATION_PKCS7_SIGNATURE                                                          = 'application/pkcs7-signature',

	/**
	 * Represents the content type `application/pkcs8`.
	 */
	APPLICATION_PKCS8                                                                    = 'application/pkcs8',

	/**
	 * Represents the content type `application/pkix-attr-cert`.
	 */
	APPLICATION_PKIX_ATTR_CERT                                                           = 'application/pkix-attr-cert',

	/**
	 * Represents the content type `application/pkix-cert`.
	 */
	APPLICATION_PKIX_CERT                                                                = 'application/pkix-cert',

	/**
	 * Represents the content type `application/pkix-crl`.
	 */
	APPLICATION_PKIX_CRL                                                                 = 'application/pkix-crl',

	/**
	 * Represents the content type `application/pkix-pkipath`.
	 */
	APPLICATION_PKIX_PKIPATH                                                             = 'application/pkix-pkipath',

	/**
	 * Represents the content type `application/pkixcmp`.
	 */
	APPLICATION_PKIXCMP                                                                  = 'application/pkixcmp',

	/**
	 * Represents the content type `application/pls+xml`.
	 */
	APPLICATION_PLS_XML                                                                  = 'application/pls+xml',

	/**
	 * Represents the content type `application/poc-settings+xml`.
	 */
	APPLICATION_POC_SETTINGS_XML                                                         = 'application/poc-settings+xml',

	/**
	 * Represents the content type `application/postscript`.
	 */
	APPLICATION_POSTSCRIPT                                                               = 'application/postscript',

	/**
	 * Represents the content type `application/ppsp-tracker+json`.
	 */
	APPLICATION_PPSP_TRACKER_JSON                                                        = 'application/ppsp-tracker+json',

	/**
	 * Represents the content type `application/problem+json`.
	 */
	APPLICATION_PROBLEM_JSON                                                             = 'application/problem+json',

	/**
	 * Represents the content type `application/problem+xml`.
	 */
	APPLICATION_PROBLEM_XML                                                              = 'application/problem+xml',

	/**
	 * Represents the content type `application/provenance+xml`.
	 */
	APPLICATION_PROVENANCE_XML                                                           = 'application/provenance+xml',

	/**
	 * Represents the content type `application/prs.alvestrand.titrax-sheet`.
	 */
	APPLICATION_PRS_ALVESTRAND_TITRAX_SHEET                                              = 'application/prs.alvestrand.titrax-sheet',

	/**
	 * Represents the content type `application/prs.cww`.
	 */
	APPLICATION_PRS_CWW                                                                  = 'application/prs.cww',

	/**
	 * Represents the content type `application/prs.hpub+zip`.
	 */
	APPLICATION_PRS_HPUB_ZIP                                                             = 'application/prs.hpub+zip',

	/**
	 * Represents the content type `application/prs.nprend`.
	 */
	APPLICATION_PRS_NPREND                                                               = 'application/prs.nprend',

	/**
	 * Represents the content type `application/prs.plucker`.
	 */
	APPLICATION_PRS_PLUCKER                                                              = 'application/prs.plucker',

	/**
	 * Represents the content type `application/prs.rdf-xml-crypt`.
	 */
	APPLICATION_PRS_RDF_XML_CRYPT                                                        = 'application/prs.rdf-xml-crypt',

	/**
	 * Represents the content type `application/prs.xsf+xml`.
	 */
	APPLICATION_PRS_XSF_XML                                                              = 'application/prs.xsf+xml',

	/**
	 * Represents the content type `application/pskc+xml`.
	 */
	APPLICATION_PSKC_XML                                                                 = 'application/pskc+xml',

	/**
	 * Represents the content type `application/qsig`.
	 */
	APPLICATION_QSIG                                                                     = 'application/qsig',

	/**
	 * Represents the content type `application/raptorfec`.
	 */
	APPLICATION_RAPTORFEC                                                                = 'application/raptorfec',

	/**
	 * Represents the content type `application/rdap+json`.
	 */
	APPLICATION_RDAP_JSON                                                                = 'application/rdap+json',

	/**
	 * Represents the content type `application/rdf+xml`.
	 */
	APPLICATION_RDF_XML                                                                  = 'application/rdf+xml',

	/**
	 * Represents the content type `application/reginfo+xml`.
	 */
	APPLICATION_REGINFO_XML                                                              = 'application/reginfo+xml',

	/**
	 * Represents the content type `application/relax-ng-compact-syntax`.
	 */
	APPLICATION_RELAX_NG_COMPACT_SYNTAX                                                  = 'application/relax-ng-compact-syntax',

	/**
	 * Represents the content type `application/remote-printing`.
	 */
	APPLICATION_REMOTE_PRINTING                                                          = 'application/remote-printing',

	/**
	 * Represents the content type `application/reputon+json`.
	 */
	APPLICATION_REPUTON_JSON                                                             = 'application/reputon+json',

	/**
	 * Represents the content type `application/resource-lists+xml`.
	 */
	APPLICATION_RESOURCE_LISTS_XML                                                       = 'application/resource-lists+xml',

	/**
	 * Represents the content type `application/resource-lists-diff+xml`.
	 */
	APPLICATION_RESOURCE_LISTS_DIFF_XML                                                  = 'application/resource-lists-diff+xml',

	/**
	 * Represents the content type `application/rfc+xml`.
	 */
	APPLICATION_RFC_XML                                                                  = 'application/rfc+xml',

	/**
	 * Represents the content type `application/riscos`.
	 */
	APPLICATION_RISCOS                                                                   = 'application/riscos',

	/**
	 * Represents the content type `application/rlmi+xml`.
	 */
	APPLICATION_RLMI_XML                                                                 = 'application/rlmi+xml',

	/**
	 * Represents the content type `application/rls-services+xml`.
	 */
	APPLICATION_RLS_SERVICES_XML                                                         = 'application/rls-services+xml',

	/**
	 * Represents the content type `application/rpki-ghostbusters`.
	 */
	APPLICATION_RPKI_GHOSTBUSTERS                                                        = 'application/rpki-ghostbusters',

	/**
	 * Represents the content type `application/rpki-manifest`.
	 */
	APPLICATION_RPKI_MANIFEST                                                            = 'application/rpki-manifest',

	/**
	 * Represents the content type `application/rpki-roa`.
	 */
	APPLICATION_RPKI_ROA                                                                 = 'application/rpki-roa',

	/**
	 * Represents the content type `application/rpki-updown`.
	 */
	APPLICATION_RPKI_UPDOWN                                                              = 'application/rpki-updown',

	/**
	 * Represents the content type `application/rsd+xml`.
	 */
	APPLICATION_RSD_XML                                                                  = 'application/rsd+xml',

	/**
	 * Represents the content type `application/rss+xml`.
	 */
	APPLICATION_RSS_XML                                                                  = 'application/rss+xml',

	/**
	 * Represents the content type `application/rtf`.
	 */
	APPLICATION_RTF                                                                      = 'application/rtf',

	/**
	 * Represents the content type `application/rtploopback`.
	 */
	APPLICATION_RTPLOOPBACK                                                              = 'application/rtploopback',

	/**
	 * Represents the content type `application/rtx`.
	 */
	APPLICATION_RTX                                                                      = 'application/rtx',

	/**
	 * Represents the content type `application/samlassertion+xml`.
	 */
	APPLICATION_SAMLASSERTION_XML                                                        = 'application/samlassertion+xml',

	/**
	 * Represents the content type `application/samlmetadata+xml`.
	 */
	APPLICATION_SAMLMETADATA_XML                                                         = 'application/samlmetadata+xml',

	/**
	 * Represents the content type `application/sbml+xml`.
	 */
	APPLICATION_SBML_XML                                                                 = 'application/sbml+xml',

	/**
	 * Represents the content type `application/scaip+xml`.
	 */
	APPLICATION_SCAIP_XML                                                                = 'application/scaip+xml',

	/**
	 * Represents the content type `application/scim+json`.
	 */
	APPLICATION_SCIM_JSON                                                                = 'application/scim+json',

	/**
	 * Represents the content type `application/scvp-cv-request`.
	 */
	APPLICATION_SCVP_CV_REQUEST                                                          = 'application/scvp-cv-request',

	/**
	 * Represents the content type `application/scvp-cv-response`.
	 */
	APPLICATION_SCVP_CV_RESPONSE                                                         = 'application/scvp-cv-response',

	/**
	 * Represents the content type `application/scvp-vp-request`.
	 */
	APPLICATION_SCVP_VP_REQUEST                                                          = 'application/scvp-vp-request',

	/**
	 * Represents the content type `application/scvp-vp-response`.
	 */
	APPLICATION_SCVP_VP_RESPONSE                                                         = 'application/scvp-vp-response',

	/**
	 * Represents the content type `application/sdp`.
	 */
	APPLICATION_SDP                                                                      = 'application/sdp',

	/**
	 * Represents the content type `application/sep+xml`.
	 */
	APPLICATION_SEP_XML                                                                  = 'application/sep+xml',

	/**
	 * Represents the content type `application/sep-exi`.
	 */
	APPLICATION_SEP_EXI                                                                  = 'application/sep-exi',

	/**
	 * Represents the content type `application/session-info`.
	 */
	APPLICATION_SESSION_INFO                                                             = 'application/session-info',

	/**
	 * Represents the content type `application/set-payment`.
	 */
	APPLICATION_SET_PAYMENT                                                              = 'application/set-payment',

	/**
	 * Represents the content type `application/set-payment-initiation`.
	 */
	APPLICATION_SET_PAYMENT_INITIATION                                                   = 'application/set-payment-initiation',

	/**
	 * Represents the content type `application/set-registration`.
	 */
	APPLICATION_SET_REGISTRATION                                                         = 'application/set-registration',

	/**
	 * Represents the content type `application/set-registration-initiation`.
	 */
	APPLICATION_SET_REGISTRATION_INITIATION                                              = 'application/set-registration-initiation',

	/**
	 * Represents the content type `application/sgml`.
	 */
	APPLICATION_SGML                                                                     = 'application/sgml',

	/**
	 * Represents the content type `application/sgml-open-catalog`.
	 */
	APPLICATION_SGML_OPEN_CATALOG                                                        = 'application/sgml-open-catalog',

	/**
	 * Represents the content type `application/shf+xml`.
	 */
	APPLICATION_SHF_XML                                                                  = 'application/shf+xml',

	/**
	 * Represents the content type `application/sieve`.
	 */
	APPLICATION_SIEVE                                                                    = 'application/sieve',

	/**
	 * Represents the content type `application/simple-filter+xml`.
	 */
	APPLICATION_SIMPLE_FILTER_XML                                                        = 'application/simple-filter+xml',

	/**
	 * Represents the content type `application/simple-message-summary`.
	 */
	APPLICATION_SIMPLE_MESSAGE_SUMMARY                                                   = 'application/simple-message-summary',

	/**
	 * Represents the content type `application/simplesymbolcontainer`.
	 */
	APPLICATION_SIMPLESYMBOLCONTAINER                                                    = 'application/simplesymbolcontainer',

	/**
	 * Represents the content type `application/slate`.
	 */
	APPLICATION_SLATE                                                                    = 'application/slate',

	/**
	 * Represents the content type `application/smil`.
	 */
	APPLICATION_SMIL                                                                     = 'application/smil',

	/**
	 * Represents the content type `application/smil+xml`.
	 */
	APPLICATION_SMIL_XML                                                                 = 'application/smil+xml',

	/**
	 * Represents the content type `application/smpte336m`.
	 */
	APPLICATION_SMPTE336M                                                                = 'application/smpte336m',

	/**
	 * Represents the content type `application/soap+fastinfoset`.
	 */
	APPLICATION_SOAP_FASTINFOSET                                                         = 'application/soap+fastinfoset',

	/**
	 * Represents the content type `application/soap+xml`.
	 */
	APPLICATION_SOAP_XML                                                                 = 'application/soap+xml',

	/**
	 * Represents the content type `application/sparql-query`.
	 */
	APPLICATION_SPARQL_QUERY                                                             = 'application/sparql-query',

	/**
	 * Represents the content type `application/sparql-results+xml`.
	 */
	APPLICATION_SPARQL_RESULTS_XML                                                       = 'application/sparql-results+xml',

	/**
	 * Represents the content type `application/spirits-event+xml`.
	 */
	APPLICATION_SPIRITS_EVENT_XML                                                        = 'application/spirits-event+xml',

	/**
	 * Represents the content type `application/sql`.
	 */
	APPLICATION_SQL                                                                      = 'application/sql',

	/**
	 * Represents the content type `application/srgs`.
	 */
	APPLICATION_SRGS                                                                     = 'application/srgs',

	/**
	 * Represents the content type `application/srgs+xml`.
	 */
	APPLICATION_SRGS_XML                                                                 = 'application/srgs+xml',

	/**
	 * Represents the content type `application/sru+xml`.
	 */
	APPLICATION_SRU_XML                                                                  = 'application/sru+xml',

	/**
	 * Represents the content type `application/ssdl+xml`.
	 */
	APPLICATION_SSDL_XML                                                                 = 'application/ssdl+xml',

	/**
	 * Represents the content type `application/ssml+xml`.
	 */
	APPLICATION_SSML_XML                                                                 = 'application/ssml+xml',

	/**
	 * Represents the content type `application/tamp-apex-update`.
	 */
	APPLICATION_TAMP_APEX_UPDATE                                                         = 'application/tamp-apex-update',

	/**
	 * Represents the content type `application/tamp-apex-update-confirm`.
	 */
	APPLICATION_TAMP_APEX_UPDATE_CONFIRM                                                 = 'application/tamp-apex-update-confirm',

	/**
	 * Represents the content type `application/tamp-community-update`.
	 */
	APPLICATION_TAMP_COMMUNITY_UPDATE                                                    = 'application/tamp-community-update',

	/**
	 * Represents the content type `application/tamp-community-update-confirm`.
	 */
	APPLICATION_TAMP_COMMUNITY_UPDATE_CONFIRM                                            = 'application/tamp-community-update-confirm',

	/**
	 * Represents the content type `application/tamp-error`.
	 */
	APPLICATION_TAMP_ERROR                                                               = 'application/tamp-error',

	/**
	 * Represents the content type `application/tamp-sequence-adjust`.
	 */
	APPLICATION_TAMP_SEQUENCE_ADJUST                                                     = 'application/tamp-sequence-adjust',

	/**
	 * Represents the content type `application/tamp-sequence-adjust-confirm`.
	 */
	APPLICATION_TAMP_SEQUENCE_ADJUST_CONFIRM                                             = 'application/tamp-sequence-adjust-confirm',

	/**
	 * Represents the content type `application/tamp-status-query`.
	 */
	APPLICATION_TAMP_STATUS_QUERY                                                        = 'application/tamp-status-query',

	/**
	 * Represents the content type `application/tamp-status-response`.
	 */
	APPLICATION_TAMP_STATUS_RESPONSE                                                     = 'application/tamp-status-response',

	/**
	 * Represents the content type `application/tamp-update`.
	 */
	APPLICATION_TAMP_UPDATE                                                              = 'application/tamp-update',

	/**
	 * Represents the content type `application/tamp-update-confirm`.
	 */
	APPLICATION_TAMP_UPDATE_CONFIRM                                                      = 'application/tamp-update-confirm',

	/**
	 * Represents the content type `application/tei+xml`.
	 */
	APPLICATION_TEI_XML                                                                  = 'application/tei+xml',

	/**
	 * Represents the content type `application/thraud+xml`.
	 */
	APPLICATION_THRAUD_XML                                                               = 'application/thraud+xml',

	/**
	 * Represents the content type `application/timestamp-query`.
	 */
	APPLICATION_TIMESTAMP_QUERY                                                          = 'application/timestamp-query',

	/**
	 * Represents the content type `application/timestamp-reply`.
	 */
	APPLICATION_TIMESTAMP_REPLY                                                          = 'application/timestamp-reply',

	/**
	 * Represents the content type `application/timestamped-data`.
	 */
	APPLICATION_TIMESTAMPED_DATA                                                         = 'application/timestamped-data',

	/**
	 * Represents the content type `application/ttml+xml`.
	 */
	APPLICATION_TTML_XML                                                                 = 'application/ttml+xml',

	/**
	 * Represents the content type `application/tve-trigger`.
	 */
	APPLICATION_TVE_TRIGGER                                                              = 'application/tve-trigger',

	/**
	 * Represents the content type `application/ulpfec`.
	 */
	APPLICATION_ULPFEC                                                                   = 'application/ulpfec',

	/**
	 * Represents the content type `application/urc-grpsheet+xml`.
	 */
	APPLICATION_URC_GRPSHEET_XML                                                         = 'application/urc-grpsheet+xml',

	/**
	 * Represents the content type `application/urc-ressheet+xml`.
	 */
	APPLICATION_URC_RESSHEET_XML                                                         = 'application/urc-ressheet+xml',

	/**
	 * Represents the content type `application/urc-targetdesc+xml`.
	 */
	APPLICATION_URC_TARGETDESC_XML                                                       = 'application/urc-targetdesc+xml',

	/**
	 * Represents the content type `application/urc-uisocketdesc+xml`.
	 */
	APPLICATION_URC_UISOCKETDESC_XML                                                     = 'application/urc-uisocketdesc+xml',

	/**
	 * Represents the content type `application/vcard+json`.
	 */
	APPLICATION_VCARD_JSON                                                               = 'application/vcard+json',

	/**
	 * Represents the content type `application/vcard+xml`.
	 */
	APPLICATION_VCARD_XML                                                                = 'application/vcard+xml',

	/**
	 * Represents the content type `application/vemmi`.
	 */
	APPLICATION_VEMMI                                                                    = 'application/vemmi',

	/**
	 * Represents the content type `application/vividence.scriptfile`.
	 */
	APPLICATION_VIVIDENCE_SCRIPTFILE                                                     = 'application/vividence.scriptfile',

	/**
	 * Represents the content type `application/vnd.3gpp-prose+xml`.
	 */
	APPLICATION_VND_3GPP_PROSE_XML                                                       = 'application/vnd.3gpp-prose+xml',

	/**
	 * Represents the content type `application/vnd.3gpp-prose-pc3ch+xml`.
	 */
	APPLICATION_VND_3GPP_PROSE_PC3CH_XML                                                 = 'application/vnd.3gpp-prose-pc3ch+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.access-transfer-events+xml`.
	 */
	APPLICATION_VND_3GPP_ACCESS_TRANSFER_EVENTS_XML                                      = 'application/vnd.3gpp.access-transfer-events+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.bsf+xml`.
	 */
	APPLICATION_VND_3GPP_BSF_XML                                                         = 'application/vnd.3gpp.bsf+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.mid-call+xml`.
	 */
	APPLICATION_VND_3GPP_MID_CALL_XML                                                    = 'application/vnd.3gpp.mid-call+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-large`.
	 */
	APPLICATION_VND_3GPP_PIC_BW_LARGE                                                    = 'application/vnd.3gpp.pic-bw-large',

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-small`.
	 */
	APPLICATION_VND_3GPP_PIC_BW_SMALL                                                    = 'application/vnd.3gpp.pic-bw-small',

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-var`.
	 */
	APPLICATION_VND_3GPP_PIC_BW_VAR                                                      = 'application/vnd.3gpp.pic-bw-var',

	/**
	 * Represents the content type `application/vnd.3gpp.sms`.
	 */
	APPLICATION_VND_3GPP_SMS                                                             = 'application/vnd.3gpp.sms',

	/**
	 * Represents the content type `application/vnd.3gpp.sms+xml`.
	 */
	APPLICATION_VND_3GPP_SMS_XML                                                         = 'application/vnd.3gpp.sms+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.srvcc-ext+xml`.
	 */
	APPLICATION_VND_3GPP_SRVCC_EXT_XML                                                   = 'application/vnd.3gpp.srvcc-ext+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.srvcc-info+xml`.
	 */
	APPLICATION_VND_3GPP_SRVCC_INFO_XML                                                  = 'application/vnd.3gpp.srvcc-info+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.state-and-event-info+xml`.
	 */
	APPLICATION_VND_3GPP_STATE_AND_EVENT_INFO_XML                                        = 'application/vnd.3gpp.state-and-event-info+xml',

	/**
	 * Represents the content type `application/vnd.3gpp.ussd+xml`.
	 */
	APPLICATION_VND_3GPP_USSD_XML                                                        = 'application/vnd.3gpp.ussd+xml',

	/**
	 * Represents the content type `application/vnd.3gpp2.bcmcsinfo+xml`.
	 */
	APPLICATION_VND_3GPP2_BCMCSINFO_XML                                                  = 'application/vnd.3gpp2.bcmcsinfo+xml',

	/**
	 * Represents the content type `application/vnd.3gpp2.sms`.
	 */
	APPLICATION_VND_3GPP2_SMS                                                            = 'application/vnd.3gpp2.sms',

	/**
	 * Represents the content type `application/vnd.3gpp2.tcap`.
	 */
	APPLICATION_VND_3GPP2_TCAP                                                           = 'application/vnd.3gpp2.tcap',

	/**
	 * Represents the content type `application/vnd.3lightssoftware.imagescal`.
	 */
	APPLICATION_VND_3LIGHTSSOFTWARE_IMAGESCAL                                            = 'application/vnd.3lightssoftware.imagescal',

	/**
	 * Represents the content type `application/vnd.3m.post-it-notes`.
	 */
	APPLICATION_VND_3M_POST_IT_NOTES                                                     = 'application/vnd.3m.post-it-notes',

	/**
	 * Represents the content type `application/vnd.accpac.simply.aso`.
	 */
	APPLICATION_VND_ACCPAC_SIMPLY_ASO                                                    = 'application/vnd.accpac.simply.aso',

	/**
	 * Represents the content type `application/vnd.accpac.simply.imp`.
	 */
	APPLICATION_VND_ACCPAC_SIMPLY_IMP                                                    = 'application/vnd.accpac.simply.imp',

	/**
	 * Represents the content type `application/vnd.acucobol`.
	 */
	APPLICATION_VND_ACUCOBOL                                                             = 'application/vnd.acucobol',

	/**
	 * Represents the content type `application/vnd.acucorp`.
	 */
	APPLICATION_VND_ACUCORP                                                              = 'application/vnd.acucorp',

	/**
	 * Represents the content type `application/vnd.adobe.air-application-installer-package+zip`.
	 */
	APPLICATION_VND_ADOBE_AIR_APPLICATION_INSTALLER_PACKAGE_ZIP                          = 'application/vnd.adobe.air-application-installer-package+zip',

	/**
	 * Represents the content type `application/vnd.adobe.flash.movie`.
	 */
	APPLICATION_VND_ADOBE_FLASH_MOVIE                                                    = 'application/vnd.adobe.flash.movie',

	/**
	 * Represents the content type `application/vnd.adobe.formscentral.fcdt`.
	 */
	APPLICATION_VND_ADOBE_FORMSCENTRAL_FCDT                                              = 'application/vnd.adobe.formscentral.fcdt',

	/**
	 * Represents the content type `application/vnd.adobe.fxp`.
	 */
	APPLICATION_VND_ADOBE_FXP                                                            = 'application/vnd.adobe.fxp',

	/**
	 * Represents the content type `application/vnd.adobe.partial-upload`.
	 */
	APPLICATION_VND_ADOBE_PARTIAL_UPLOAD                                                 = 'application/vnd.adobe.partial-upload',

	/**
	 * Represents the content type `application/vnd.adobe.xdp+xml`.
	 */
	APPLICATION_VND_ADOBE_XDP_XML                                                        = 'application/vnd.adobe.xdp+xml',

	/**
	 * Represents the content type `application/vnd.adobe.xfdf`.
	 */
	APPLICATION_VND_ADOBE_XFDF                                                           = 'application/vnd.adobe.xfdf',

	/**
	 * Represents the content type `application/vnd.aether.imp`.
	 */
	APPLICATION_VND_AETHER_IMP                                                           = 'application/vnd.aether.imp',

	/**
	 * Represents the content type `application/vnd.ah-barcode`.
	 */
	APPLICATION_VND_AH_BARCODE                                                           = 'application/vnd.ah-barcode',

	/**
	 * Represents the content type `application/vnd.ahead.space`.
	 */
	APPLICATION_VND_AHEAD_SPACE                                                          = 'application/vnd.ahead.space',

	/**
	 * Represents the content type `application/vnd.airzip.filesecure.azf`.
	 */
	APPLICATION_VND_AIRZIP_FILESECURE_AZF                                                = 'application/vnd.airzip.filesecure.azf',

	/**
	 * Represents the content type `application/vnd.airzip.filesecure.azs`.
	 */
	APPLICATION_VND_AIRZIP_FILESECURE_AZS                                                = 'application/vnd.airzip.filesecure.azs',

	/**
	 * Represents the content type `application/vnd.amazon.ebook`.
	 */
	APPLICATION_VND_AMAZON_EBOOK                                                         = 'application/vnd.amazon.ebook',

	/**
	 * Represents the content type `application/vnd.amazon.mobi8-ebook`.
	 */
	APPLICATION_VND_AMAZON_MOBI8_EBOOK                                                   = 'application/vnd.amazon.mobi8-ebook',

	/**
	 * Represents the content type `application/vnd.americandynamics.acc`.
	 */
	APPLICATION_VND_AMERICANDYNAMICS_ACC                                                 = 'application/vnd.americandynamics.acc',

	/**
	 * Represents the content type `application/vnd.amiga.ami`.
	 */
	APPLICATION_VND_AMIGA_AMI                                                            = 'application/vnd.amiga.ami',

	/**
	 * Represents the content type `application/vnd.amundsen.maze+xml`.
	 */
	APPLICATION_VND_AMUNDSEN_MAZE_XML                                                    = 'application/vnd.amundsen.maze+xml',

	/**
	 * Represents the content type `application/vnd.android.package-archive`.
	 */
	APPLICATION_VND_ANDROID_PACKAGE_ARCHIVE                                              = 'application/vnd.android.package-archive',

	/**
	 * Represents the content type `application/vnd.anki`.
	 */
	APPLICATION_VND_ANKI                                                                 = 'application/vnd.anki',

	/**
	 * Represents the content type `application/vnd.anser-web-certificate-issue-initiation`.
	 */
	APPLICATION_VND_ANSER_WEB_CERTIFICATE_ISSUE_INITIATION                               = 'application/vnd.anser-web-certificate-issue-initiation',

	/**
	 * Represents the content type `application/vnd.anser-web-funds-transfer-initiation`.
	 */
	APPLICATION_VND_ANSER_WEB_FUNDS_TRANSFER_INITIATION                                  = 'application/vnd.anser-web-funds-transfer-initiation',

	/**
	 * Represents the content type `application/vnd.antix.game-component`.
	 */
	APPLICATION_VND_ANTIX_GAME_COMPONENT                                                 = 'application/vnd.antix.game-component',

	/**
	 * Represents the content type `application/vnd.apache.thrift.binary`.
	 */
	APPLICATION_VND_APACHE_THRIFT_BINARY                                                 = 'application/vnd.apache.thrift.binary',

	/**
	 * Represents the content type `application/vnd.apache.thrift.compact`.
	 */
	APPLICATION_VND_APACHE_THRIFT_COMPACT                                                = 'application/vnd.apache.thrift.compact',

	/**
	 * Represents the content type `application/vnd.apache.thrift.json`.
	 */
	APPLICATION_VND_APACHE_THRIFT_JSON                                                   = 'application/vnd.apache.thrift.json',

	/**
	 * Represents the content type `application/vnd.api+json`.
	 */
	APPLICATION_VND_API_JSON                                                             = 'application/vnd.api+json',

	/**
	 * Represents the content type `application/vnd.apple.installer+xml`.
	 */
	APPLICATION_VND_APPLE_INSTALLER_XML                                                  = 'application/vnd.apple.installer+xml',

	/**
	 * Represents the content type `application/vnd.apple.mpegurl`.
	 */
	APPLICATION_VND_APPLE_MPEGURL                                                        = 'application/vnd.apple.mpegurl',

	/**
	 * Represents the content type `application/vnd.arastra.swi`.
	 */
	APPLICATION_VND_ARASTRA_SWI                                                          = 'application/vnd.arastra.swi',

	/**
	 * Represents the content type `application/vnd.aristanetworks.swi`.
	 */
	APPLICATION_VND_ARISTANETWORKS_SWI                                                   = 'application/vnd.aristanetworks.swi',

	/**
	 * Represents the content type `application/vnd.artsquare`.
	 */
	APPLICATION_VND_ARTSQUARE                                                            = 'application/vnd.artsquare',

	/**
	 * Represents the content type `application/vnd.astraea-software.iota`.
	 */
	APPLICATION_VND_ASTRAEA_SOFTWARE_IOTA                                                = 'application/vnd.astraea-software.iota',

	/**
	 * Represents the content type `application/vnd.audiograph`.
	 */
	APPLICATION_VND_AUDIOGRAPH                                                           = 'application/vnd.audiograph',

	/**
	 * Represents the content type `application/vnd.autopackage`.
	 */
	APPLICATION_VND_AUTOPACKAGE                                                          = 'application/vnd.autopackage',

	/**
	 * Represents the content type `application/vnd.avistar+xml`.
	 */
	APPLICATION_VND_AVISTAR_XML                                                          = 'application/vnd.avistar+xml',

	/**
	 * Represents the content type `application/vnd.balsamiq.bmml+xml`.
	 */
	APPLICATION_VND_BALSAMIQ_BMML_XML                                                    = 'application/vnd.balsamiq.bmml+xml',

	/**
	 * Represents the content type `application/vnd.balsamiq.bmpr`.
	 */
	APPLICATION_VND_BALSAMIQ_BMPR                                                        = 'application/vnd.balsamiq.bmpr',

	/**
	 * Represents the content type `application/vnd.bekitzur-stech+json`.
	 */
	APPLICATION_VND_BEKITZUR_STECH_JSON                                                  = 'application/vnd.bekitzur-stech+json',

	/**
	 * Represents the content type `application/vnd.biopax.rdf+xml`.
	 */
	APPLICATION_VND_BIOPAX_RDF_XML                                                       = 'application/vnd.biopax.rdf+xml',

	/**
	 * Represents the content type `application/vnd.blueice.multipass`.
	 */
	APPLICATION_VND_BLUEICE_MULTIPASS                                                    = 'application/vnd.blueice.multipass',

	/**
	 * Represents the content type `application/vnd.bluetooth.ep.oob`.
	 */
	APPLICATION_VND_BLUETOOTH_EP_OOB                                                     = 'application/vnd.bluetooth.ep.oob',

	/**
	 * Represents the content type `application/vnd.bluetooth.le.oob`.
	 */
	APPLICATION_VND_BLUETOOTH_LE_OOB                                                     = 'application/vnd.bluetooth.le.oob',

	/**
	 * Represents the content type `application/vnd.bmi`.
	 */
	APPLICATION_VND_BMI                                                                  = 'application/vnd.bmi',

	/**
	 * Represents the content type `application/vnd.businessobjects`.
	 */
	APPLICATION_VND_BUSINESSOBJECTS                                                      = 'application/vnd.businessobjects',

	/**
	 * Represents the content type `application/vnd.cab-jscript`.
	 */
	APPLICATION_VND_CAB_JSCRIPT                                                          = 'application/vnd.cab-jscript',

	/**
	 * Represents the content type `application/vnd.canon-cpdl`.
	 */
	APPLICATION_VND_CANON_CPDL                                                           = 'application/vnd.canon-cpdl',

	/**
	 * Represents the content type `application/vnd.canon-lips`.
	 */
	APPLICATION_VND_CANON_LIPS                                                           = 'application/vnd.canon-lips',

	/**
	 * Represents the content type `application/vnd.cendio.thinlinc.clientconf`.
	 */
	APPLICATION_VND_CENDIO_THINLINC_CLIENTCONF                                           = 'application/vnd.cendio.thinlinc.clientconf',

	/**
	 * Represents the content type `application/vnd.century-systems.tcp_stream`.
	 */
	APPLICATION_VND_CENTURY_SYSTEMS_TCP_STREAM                                           = 'application/vnd.century-systems.tcp_stream',

	/**
	 * Represents the content type `application/vnd.chemdraw+xml`.
	 */
	APPLICATION_VND_CHEMDRAW_XML                                                         = 'application/vnd.chemdraw+xml',

	/**
	 * Represents the content type `application/vnd.chess-pgn`.
	 */
	APPLICATION_VND_CHESS_PGN                                                            = 'application/vnd.chess-pgn',

	/**
	 * Represents the content type `application/vnd.chipnuts.karaoke-mmd`.
	 */
	APPLICATION_VND_CHIPNUTS_KARAOKE_MMD                                                 = 'application/vnd.chipnuts.karaoke-mmd',

	/**
	 * Represents the content type `application/vnd.cinderella`.
	 */
	APPLICATION_VND_CINDERELLA                                                           = 'application/vnd.cinderella',

	/**
	 * Represents the content type `application/vnd.cirpack.isdn-ext`.
	 */
	APPLICATION_VND_CIRPACK_ISDN_EXT                                                     = 'application/vnd.cirpack.isdn-ext',

	/**
	 * Represents the content type `application/vnd.citationstyles.style+xml`.
	 */
	APPLICATION_VND_CITATIONSTYLES_STYLE_XML                                             = 'application/vnd.citationstyles.style+xml',

	/**
	 * Represents the content type `application/vnd.claymore`.
	 */
	APPLICATION_VND_CLAYMORE                                                             = 'application/vnd.claymore',

	/**
	 * Represents the content type `application/vnd.cloanto.rp9`.
	 */
	APPLICATION_VND_CLOANTO_RP9                                                          = 'application/vnd.cloanto.rp9',

	/**
	 * Represents the content type `application/vnd.clonk.c4group`.
	 */
	APPLICATION_VND_CLONK_C4GROUP                                                        = 'application/vnd.clonk.c4group',

	/**
	 * Represents the content type `application/vnd.cluetrust.cartomobile-config`.
	 */
	APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG                                         = 'application/vnd.cluetrust.cartomobile-config',

	/**
	 * Represents the content type `application/vnd.cluetrust.cartomobile-config-pkg`.
	 */
	APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG_PKG                                     = 'application/vnd.cluetrust.cartomobile-config-pkg',

	/**
	 * Represents the content type `application/vnd.coffeescript`.
	 */
	APPLICATION_VND_COFFEESCRIPT                                                         = 'application/vnd.coffeescript',

	/**
	 * Represents the content type `application/vnd.collection+json`.
	 */
	APPLICATION_VND_COLLECTION_JSON                                                      = 'application/vnd.collection+json',

	/**
	 * Represents the content type `application/vnd.collection.doc+json`.
	 */
	APPLICATION_VND_COLLECTION_DOC_JSON                                                  = 'application/vnd.collection.doc+json',

	/**
	 * Represents the content type `application/vnd.collection.next+json`.
	 */
	APPLICATION_VND_COLLECTION_NEXT_JSON                                                 = 'application/vnd.collection.next+json',

	/**
	 * Represents the content type `application/vnd.comicbook+zip`.
	 */
	APPLICATION_VND_COMICBOOK_ZIP                                                        = 'application/vnd.comicbook+zip',

	/**
	 * Represents the content type `application/vnd.commerce-battelle`.
	 */
	APPLICATION_VND_COMMERCE_BATTELLE                                                    = 'application/vnd.commerce-battelle',

	/**
	 * Represents the content type `application/vnd.commonspace`.
	 */
	APPLICATION_VND_COMMONSPACE                                                          = 'application/vnd.commonspace',

	/**
	 * Represents the content type `application/vnd.contact.cmsg`.
	 */
	APPLICATION_VND_CONTACT_CMSG                                                         = 'application/vnd.contact.cmsg',

	/**
	 * Represents the content type `application/vnd.coreos.ignition+json`.
	 */
	APPLICATION_VND_COREOS_IGNITION_JSON                                                 = 'application/vnd.coreos.ignition+json',

	/**
	 * Represents the content type `application/vnd.cosmocaller`.
	 */
	APPLICATION_VND_COSMOCALLER                                                          = 'application/vnd.cosmocaller',

	/**
	 * Represents the content type `application/vnd.crick.clicker`.
	 */
	APPLICATION_VND_CRICK_CLICKER                                                        = 'application/vnd.crick.clicker',

	/**
	 * Represents the content type `application/vnd.crick.clicker.keyboard`.
	 */
	APPLICATION_VND_CRICK_CLICKER_KEYBOARD                                               = 'application/vnd.crick.clicker.keyboard',

	/**
	 * Represents the content type `application/vnd.crick.clicker.palette`.
	 */
	APPLICATION_VND_CRICK_CLICKER_PALETTE                                                = 'application/vnd.crick.clicker.palette',

	/**
	 * Represents the content type `application/vnd.crick.clicker.template`.
	 */
	APPLICATION_VND_CRICK_CLICKER_TEMPLATE                                               = 'application/vnd.crick.clicker.template',

	/**
	 * Represents the content type `application/vnd.crick.clicker.wordbank`.
	 */
	APPLICATION_VND_CRICK_CLICKER_WORDBANK                                               = 'application/vnd.crick.clicker.wordbank',

	/**
	 * Represents the content type `application/vnd.criticaltools.wbs+xml`.
	 */
	APPLICATION_VND_CRITICALTOOLS_WBS_XML                                                = 'application/vnd.criticaltools.wbs+xml',

	/**
	 * Represents the content type `application/vnd.ctc-posml`.
	 */
	APPLICATION_VND_CTC_POSML                                                            = 'application/vnd.ctc-posml',

	/**
	 * Represents the content type `application/vnd.ctct.ws+xml`.
	 */
	APPLICATION_VND_CTCT_WS_XML                                                          = 'application/vnd.ctct.ws+xml',

	/**
	 * Represents the content type `application/vnd.cups-pdf`.
	 */
	APPLICATION_VND_CUPS_PDF                                                             = 'application/vnd.cups-pdf',

	/**
	 * Represents the content type `application/vnd.cups-postscript`.
	 */
	APPLICATION_VND_CUPS_POSTSCRIPT                                                      = 'application/vnd.cups-postscript',

	/**
	 * Represents the content type `application/vnd.cups-ppd`.
	 */
	APPLICATION_VND_CUPS_PPD                                                             = 'application/vnd.cups-ppd',

	/**
	 * Represents the content type `application/vnd.cups-raster`.
	 */
	APPLICATION_VND_CUPS_RASTER                                                          = 'application/vnd.cups-raster',

	/**
	 * Represents the content type `application/vnd.cups-raw`.
	 */
	APPLICATION_VND_CUPS_RAW                                                             = 'application/vnd.cups-raw',

	/**
	 * Represents the content type `application/vnd.curl`.
	 */
	APPLICATION_VND_CURL                                                                 = 'application/vnd.curl',

	/**
	 * Represents the content type `application/vnd.curl.car`.
	 */
	APPLICATION_VND_CURL_CAR                                                             = 'application/vnd.curl.car',

	/**
	 * Represents the content type `application/vnd.curl.pcurl`.
	 */
	APPLICATION_VND_CURL_PCURL                                                           = 'application/vnd.curl.pcurl',

	/**
	 * Represents the content type `application/vnd.cyan.dean.root+xml`.
	 */
	APPLICATION_VND_CYAN_DEAN_ROOT_XML                                                   = 'application/vnd.cyan.dean.root+xml',

	/**
	 * Represents the content type `application/vnd.cybank`.
	 */
	APPLICATION_VND_CYBANK                                                               = 'application/vnd.cybank',

	/**
	 * Represents the content type `application/vnd.dart`.
	 */
	APPLICATION_VND_DART                                                                 = 'application/vnd.dart',

	/**
	 * Represents the content type `application/vnd.data-vision.rdz`.
	 */
	APPLICATION_VND_DATA_VISION_RDZ                                                      = 'application/vnd.data-vision.rdz',

	/**
	 * Represents the content type `application/vnd.debian.binary-package`.
	 */
	APPLICATION_VND_DEBIAN_BINARY_PACKAGE                                                = 'application/vnd.debian.binary-package',

	/**
	 * Represents the content type `application/vnd.dece.data`.
	 */
	APPLICATION_VND_DECE_DATA                                                            = 'application/vnd.dece.data',

	/**
	 * Represents the content type `application/vnd.dece.ttml+xml`.
	 */
	APPLICATION_VND_DECE_TTML_XML                                                        = 'application/vnd.dece.ttml+xml',

	/**
	 * Represents the content type `application/vnd.dece.unspecified`.
	 */
	APPLICATION_VND_DECE_UNSPECIFIED                                                     = 'application/vnd.dece.unspecified',

	/**
	 * Represents the content type `application/vnd.dece.zip`.
	 */
	APPLICATION_VND_DECE_ZIP                                                             = 'application/vnd.dece.zip',

	/**
	 * Represents the content type `application/vnd.denovo.fcselayout-link`.
	 */
	APPLICATION_VND_DENOVO_FCSELAYOUT_LINK                                               = 'application/vnd.denovo.fcselayout-link',

	/**
	 * Represents the content type `application/vnd.desmume.movie`.
	 */
	APPLICATION_VND_DESMUME_MOVIE                                                        = 'application/vnd.desmume.movie',

	/**
	 * Represents the content type `application/vnd.dir-bi.plate-dl-nosuffix`.
	 */
	APPLICATION_VND_DIR_BI_PLATE_DL_NOSUFFIX                                             = 'application/vnd.dir-bi.plate-dl-nosuffix',

	/**
	 * Represents the content type `application/vnd.dm.delegation+xml`.
	 */
	APPLICATION_VND_DM_DELEGATION_XML                                                    = 'application/vnd.dm.delegation+xml',

	/**
	 * Represents the content type `application/vnd.dna`.
	 */
	APPLICATION_VND_DNA                                                                  = 'application/vnd.dna',

	/**
	 * Represents the content type `application/vnd.document+json`.
	 */
	APPLICATION_VND_DOCUMENT_JSON                                                        = 'application/vnd.document+json',

	/**
	 * Represents the content type `application/vnd.dolby.mlp`.
	 */
	APPLICATION_VND_DOLBY_MLP                                                            = 'application/vnd.dolby.mlp',

	/**
	 * Represents the content type `application/vnd.dolby.mobile.1`.
	 */
	APPLICATION_VND_DOLBY_MOBILE_1                                                       = 'application/vnd.dolby.mobile.1',

	/**
	 * Represents the content type `application/vnd.dolby.mobile.2`.
	 */
	APPLICATION_VND_DOLBY_MOBILE_2                                                       = 'application/vnd.dolby.mobile.2',

	/**
	 * Represents the content type `application/vnd.doremir.scorecloud-binary-document`.
	 */
	APPLICATION_VND_DOREMIR_SCORECLOUD_BINARY_DOCUMENT                                   = 'application/vnd.doremir.scorecloud-binary-document',

	/**
	 * Represents the content type `application/vnd.dpgraph`.
	 */
	APPLICATION_VND_DPGRAPH                                                              = 'application/vnd.dpgraph',

	/**
	 * Represents the content type `application/vnd.dreamfactory`.
	 */
	APPLICATION_VND_DREAMFACTORY                                                         = 'application/vnd.dreamfactory',

	/**
	 * Represents the content type `application/vnd.drive+json`.
	 */
	APPLICATION_VND_DRIVE_JSON                                                           = 'application/vnd.drive+json',

	/**
	 * Represents the content type `application/vnd.ds-keypoint`.
	 */
	APPLICATION_VND_DS_KEYPOINT                                                          = 'application/vnd.ds-keypoint',

	/**
	 * Represents the content type `application/vnd.dtg.local`.
	 */
	APPLICATION_VND_DTG_LOCAL                                                            = 'application/vnd.dtg.local',

	/**
	 * Represents the content type `application/vnd.dtg.local.flash`.
	 */
	APPLICATION_VND_DTG_LOCAL_FLASH                                                      = 'application/vnd.dtg.local.flash',

	/**
	 * Represents the content type `application/vnd.dtg.local.html`.
	 */
	APPLICATION_VND_DTG_LOCAL_HTML                                                       = 'application/vnd.dtg.local.html',

	/**
	 * Represents the content type `application/vnd.dvb.ait`.
	 */
	APPLICATION_VND_DVB_AIT                                                              = 'application/vnd.dvb.ait',

	/**
	 * Represents the content type `application/vnd.dvb.dvbj`.
	 */
	APPLICATION_VND_DVB_DVBJ                                                             = 'application/vnd.dvb.dvbj',

	/**
	 * Represents the content type `application/vnd.dvb.esgcontainer`.
	 */
	APPLICATION_VND_DVB_ESGCONTAINER                                                     = 'application/vnd.dvb.esgcontainer',

	/**
	 * Represents the content type `application/vnd.dvb.ipdcdftnotifaccess`.
	 */
	APPLICATION_VND_DVB_IPDCDFTNOTIFACCESS                                               = 'application/vnd.dvb.ipdcdftnotifaccess',

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgaccess`.
	 */
	APPLICATION_VND_DVB_IPDCESGACCESS                                                    = 'application/vnd.dvb.ipdcesgaccess',

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgaccess2`.
	 */
	APPLICATION_VND_DVB_IPDCESGACCESS2                                                   = 'application/vnd.dvb.ipdcesgaccess2',

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgpdd`.
	 */
	APPLICATION_VND_DVB_IPDCESGPDD                                                       = 'application/vnd.dvb.ipdcesgpdd',

	/**
	 * Represents the content type `application/vnd.dvb.ipdcroaming`.
	 */
	APPLICATION_VND_DVB_IPDCROAMING                                                      = 'application/vnd.dvb.ipdcroaming',

	/**
	 * Represents the content type `application/vnd.dvb.iptv.alfec-base`.
	 */
	APPLICATION_VND_DVB_IPTV_ALFEC_BASE                                                  = 'application/vnd.dvb.iptv.alfec-base',

	/**
	 * Represents the content type `application/vnd.dvb.iptv.alfec-enhancement`.
	 */
	APPLICATION_VND_DVB_IPTV_ALFEC_ENHANCEMENT                                           = 'application/vnd.dvb.iptv.alfec-enhancement',

	/**
	 * Represents the content type `application/vnd.dvb.notif-aggregate-root+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_AGGREGATE_ROOT_XML                                         = 'application/vnd.dvb.notif-aggregate-root+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-container+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_CONTAINER_XML                                              = 'application/vnd.dvb.notif-container+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-generic+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_GENERIC_XML                                                = 'application/vnd.dvb.notif-generic+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-msglist+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_IA_MSGLIST_XML                                             = 'application/vnd.dvb.notif-ia-msglist+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-registration-request+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_REQUEST_XML                                = 'application/vnd.dvb.notif-ia-registration-request+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-registration-response+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_RESPONSE_XML                               = 'application/vnd.dvb.notif-ia-registration-response+xml',

	/**
	 * Represents the content type `application/vnd.dvb.notif-init+xml`.
	 */
	APPLICATION_VND_DVB_NOTIF_INIT_XML                                                   = 'application/vnd.dvb.notif-init+xml',

	/**
	 * Represents the content type `application/vnd.dvb.pfr`.
	 */
	APPLICATION_VND_DVB_PFR                                                              = 'application/vnd.dvb.pfr',

	/**
	 * Represents the content type `application/vnd.dvb.service`.
	 */
	APPLICATION_VND_DVB_SERVICE                                                          = 'application/vnd.dvb.service',

	/**
	 * Represents the content type `application/vnd.dxr`.
	 */
	APPLICATION_VND_DXR                                                                  = 'application/vnd.dxr',

	/**
	 * Represents the content type `application/vnd.dynageo`.
	 */
	APPLICATION_VND_DYNAGEO                                                              = 'application/vnd.dynageo',

	/**
	 * Represents the content type `application/vnd.dzr`.
	 */
	APPLICATION_VND_DZR                                                                  = 'application/vnd.dzr',

	/**
	 * Represents the content type `application/vnd.easykaraoke.cdgdownload`.
	 */
	APPLICATION_VND_EASYKARAOKE_CDGDOWNLOAD                                              = 'application/vnd.easykaraoke.cdgdownload',

	/**
	 * Represents the content type `application/vnd.ecdis-update`.
	 */
	APPLICATION_VND_ECDIS_UPDATE                                                         = 'application/vnd.ecdis-update',

	/**
	 * Represents the content type `application/vnd.ecowin.chart`.
	 */
	APPLICATION_VND_ECOWIN_CHART                                                         = 'application/vnd.ecowin.chart',

	/**
	 * Represents the content type `application/vnd.ecowin.filerequest`.
	 */
	APPLICATION_VND_ECOWIN_FILEREQUEST                                                   = 'application/vnd.ecowin.filerequest',

	/**
	 * Represents the content type `application/vnd.ecowin.fileupdate`.
	 */
	APPLICATION_VND_ECOWIN_FILEUPDATE                                                    = 'application/vnd.ecowin.fileupdate',

	/**
	 * Represents the content type `application/vnd.ecowin.series`.
	 */
	APPLICATION_VND_ECOWIN_SERIES                                                        = 'application/vnd.ecowin.series',

	/**
	 * Represents the content type `application/vnd.ecowin.seriesrequest`.
	 */
	APPLICATION_VND_ECOWIN_SERIESREQUEST                                                 = 'application/vnd.ecowin.seriesrequest',

	/**
	 * Represents the content type `application/vnd.ecowin.seriesupdate`.
	 */
	APPLICATION_VND_ECOWIN_SERIESUPDATE                                                  = 'application/vnd.ecowin.seriesupdate',

	/**
	 * Represents the content type `application/vnd.emclient.accessrequest+xml`.
	 */
	APPLICATION_VND_EMCLIENT_ACCESSREQUEST_XML                                           = 'application/vnd.emclient.accessrequest+xml',

	/**
	 * Represents the content type `application/vnd.enliven`.
	 */
	APPLICATION_VND_ENLIVEN                                                              = 'application/vnd.enliven',

	/**
	 * Represents the content type `application/vnd.enphase.envoy`.
	 */
	APPLICATION_VND_ENPHASE_ENVOY                                                        = 'application/vnd.enphase.envoy',

	/**
	 * Represents the content type `application/vnd.eprints.data+xml`.
	 */
	APPLICATION_VND_EPRINTS_DATA_XML                                                     = 'application/vnd.eprints.data+xml',

	/**
	 * Represents the content type `application/vnd.epson.esf`.
	 */
	APPLICATION_VND_EPSON_ESF                                                            = 'application/vnd.epson.esf',

	/**
	 * Represents the content type `application/vnd.epson.msf`.
	 */
	APPLICATION_VND_EPSON_MSF                                                            = 'application/vnd.epson.msf',

	/**
	 * Represents the content type `application/vnd.epson.quickanime`.
	 */
	APPLICATION_VND_EPSON_QUICKANIME                                                     = 'application/vnd.epson.quickanime',

	/**
	 * Represents the content type `application/vnd.epson.salt`.
	 */
	APPLICATION_VND_EPSON_SALT                                                           = 'application/vnd.epson.salt',

	/**
	 * Represents the content type `application/vnd.epson.ssf`.
	 */
	APPLICATION_VND_EPSON_SSF                                                            = 'application/vnd.epson.ssf',

	/**
	 * Represents the content type `application/vnd.ericsson.quickcall`.
	 */
	APPLICATION_VND_ERICSSON_QUICKCALL                                                   = 'application/vnd.ericsson.quickcall',

	/**
	 * Represents the content type `application/vnd.eszigno3+xml`.
	 */
	APPLICATION_VND_ESZIGNO3_XML                                                         = 'application/vnd.eszigno3+xml',

	/**
	 * Represents the content type `application/vnd.etsi.aoc+xml`.
	 */
	APPLICATION_VND_ETSI_AOC_XML                                                         = 'application/vnd.etsi.aoc+xml',

	/**
	 * Represents the content type `application/vnd.etsi.asic-e+zip`.
	 */
	APPLICATION_VND_ETSI_ASIC_E_ZIP                                                      = 'application/vnd.etsi.asic-e+zip',

	/**
	 * Represents the content type `application/vnd.etsi.asic-s+zip`.
	 */
	APPLICATION_VND_ETSI_ASIC_S_ZIP                                                      = 'application/vnd.etsi.asic-s+zip',

	/**
	 * Represents the content type `application/vnd.etsi.cug+xml`.
	 */
	APPLICATION_VND_ETSI_CUG_XML                                                         = 'application/vnd.etsi.cug+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvcommand+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVCOMMAND_XML                                                 = 'application/vnd.etsi.iptvcommand+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvdiscovery+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVDISCOVERY_XML                                               = 'application/vnd.etsi.iptvdiscovery+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvprofile+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVPROFILE_XML                                                 = 'application/vnd.etsi.iptvprofile+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-bc+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVSAD_BC_XML                                                  = 'application/vnd.etsi.iptvsad-bc+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-cod+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVSAD_COD_XML                                                 = 'application/vnd.etsi.iptvsad-cod+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-npvr+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVSAD_NPVR_XML                                                = 'application/vnd.etsi.iptvsad-npvr+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvservice+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVSERVICE_XML                                                 = 'application/vnd.etsi.iptvservice+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvsync+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVSYNC_XML                                                    = 'application/vnd.etsi.iptvsync+xml',

	/**
	 * Represents the content type `application/vnd.etsi.iptvueprofile+xml`.
	 */
	APPLICATION_VND_ETSI_IPTVUEPROFILE_XML                                               = 'application/vnd.etsi.iptvueprofile+xml',

	/**
	 * Represents the content type `application/vnd.etsi.mcid+xml`.
	 */
	APPLICATION_VND_ETSI_MCID_XML                                                        = 'application/vnd.etsi.mcid+xml',

	/**
	 * Represents the content type `application/vnd.etsi.mheg5`.
	 */
	APPLICATION_VND_ETSI_MHEG5                                                           = 'application/vnd.etsi.mheg5',

	/**
	 * Represents the content type `application/vnd.etsi.overload-control-policy-dataset+xml`.
	 */
	APPLICATION_VND_ETSI_OVERLOAD_CONTROL_POLICY_DATASET_XML                             = 'application/vnd.etsi.overload-control-policy-dataset+xml',

	/**
	 * Represents the content type `application/vnd.etsi.pstn+xml`.
	 */
	APPLICATION_VND_ETSI_PSTN_XML                                                        = 'application/vnd.etsi.pstn+xml',

	/**
	 * Represents the content type `application/vnd.etsi.sci+xml`.
	 */
	APPLICATION_VND_ETSI_SCI_XML                                                         = 'application/vnd.etsi.sci+xml',

	/**
	 * Represents the content type `application/vnd.etsi.simservs+xml`.
	 */
	APPLICATION_VND_ETSI_SIMSERVS_XML                                                    = 'application/vnd.etsi.simservs+xml',

	/**
	 * Represents the content type `application/vnd.etsi.timestamp-token`.
	 */
	APPLICATION_VND_ETSI_TIMESTAMP_TOKEN                                                 = 'application/vnd.etsi.timestamp-token',

	/**
	 * Represents the content type `application/vnd.etsi.tsl+xml`.
	 */
	APPLICATION_VND_ETSI_TSL_XML                                                         = 'application/vnd.etsi.tsl+xml',

	/**
	 * Represents the content type `application/vnd.etsi.tsl.der`.
	 */
	APPLICATION_VND_ETSI_TSL_DER                                                         = 'application/vnd.etsi.tsl.der',

	/**
	 * Represents the content type `application/vnd.eudora.data`.
	 */
	APPLICATION_VND_EUDORA_DATA                                                          = 'application/vnd.eudora.data',

	/**
	 * Represents the content type `application/vnd.ezpix-album`.
	 */
	APPLICATION_VND_EZPIX_ALBUM                                                          = 'application/vnd.ezpix-album',

	/**
	 * Represents the content type `application/vnd.ezpix-package`.
	 */
	APPLICATION_VND_EZPIX_PACKAGE                                                        = 'application/vnd.ezpix-package',

	/**
	 * Represents the content type `application/vnd.f-secure.mobile`.
	 */
	APPLICATION_VND_F_SECURE_MOBILE                                                      = 'application/vnd.f-secure.mobile',

	/**
	 * Represents the content type `application/vnd.fastcopy-disk-image`.
	 */
	APPLICATION_VND_FASTCOPY_DISK_IMAGE                                                  = 'application/vnd.fastcopy-disk-image',

	/**
	 * Represents the content type `application/vnd.fdf`.
	 */
	APPLICATION_VND_FDF                                                                  = 'application/vnd.fdf',

	/**
	 * Represents the content type `application/vnd.fdsn.mseed`.
	 */
	APPLICATION_VND_FDSN_MSEED                                                           = 'application/vnd.fdsn.mseed',

	/**
	 * Represents the content type `application/vnd.fdsn.seed`.
	 */
	APPLICATION_VND_FDSN_SEED                                                            = 'application/vnd.fdsn.seed',

	/**
	 * Represents the content type `application/vnd.ffsns`.
	 */
	APPLICATION_VND_FFSNS                                                                = 'application/vnd.ffsns',

	/**
	 * Represents the content type `application/vnd.filmit.zfc`.
	 */
	APPLICATION_VND_FILMIT_ZFC                                                           = 'application/vnd.filmit.zfc',

	/**
	 * Represents the content type `application/vnd.fints`.
	 */
	APPLICATION_VND_FINTS                                                                = 'application/vnd.fints',

	/**
	 * Represents the content type `application/vnd.firemonkeys.cloudcell`.
	 */
	APPLICATION_VND_FIREMONKEYS_CLOUDCELL                                                = 'application/vnd.firemonkeys.cloudcell',

	/**
	 * Represents the content type `application/vnd.flographit`.
	 */
	APPLICATION_VND_FLOGRAPHIT                                                           = 'application/vnd.flographit',

	/**
	 * Represents the content type `application/vnd.fluxtime.clip`.
	 */
	APPLICATION_VND_FLUXTIME_CLIP                                                        = 'application/vnd.fluxtime.clip',

	/**
	 * Represents the content type `application/vnd.font-fontforge-sfd`.
	 */
	APPLICATION_VND_FONT_FONTFORGE_SFD                                                   = 'application/vnd.font-fontforge-sfd',

	/**
	 * Represents the content type `application/vnd.framemaker`.
	 */
	APPLICATION_VND_FRAMEMAKER                                                           = 'application/vnd.framemaker',

	/**
	 * Represents the content type `application/vnd.frogans.fnc`.
	 */
	APPLICATION_VND_FROGANS_FNC                                                          = 'application/vnd.frogans.fnc',

	/**
	 * Represents the content type `application/vnd.frogans.ltf`.
	 */
	APPLICATION_VND_FROGANS_LTF                                                          = 'application/vnd.frogans.ltf',

	/**
	 * Represents the content type `application/vnd.fsc.weblaunch`.
	 */
	APPLICATION_VND_FSC_WEBLAUNCH                                                        = 'application/vnd.fsc.weblaunch',

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys`.
	 */
	APPLICATION_VND_FUJITSU_OASYS                                                        = 'application/vnd.fujitsu.oasys',

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys2`.
	 */
	APPLICATION_VND_FUJITSU_OASYS2                                                       = 'application/vnd.fujitsu.oasys2',

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys3`.
	 */
	APPLICATION_VND_FUJITSU_OASYS3                                                       = 'application/vnd.fujitsu.oasys3',

	/**
	 * Represents the content type `application/vnd.fujitsu.oasysgp`.
	 */
	APPLICATION_VND_FUJITSU_OASYSGP                                                      = 'application/vnd.fujitsu.oasysgp',

	/**
	 * Represents the content type `application/vnd.fujitsu.oasysprs`.
	 */
	APPLICATION_VND_FUJITSU_OASYSPRS                                                     = 'application/vnd.fujitsu.oasysprs',

	/**
	 * Represents the content type `application/vnd.fujixerox.art-ex`.
	 */
	APPLICATION_VND_FUJIXEROX_ART_EX                                                     = 'application/vnd.fujixerox.art-ex',

	/**
	 * Represents the content type `application/vnd.fujixerox.art4`.
	 */
	APPLICATION_VND_FUJIXEROX_ART4                                                       = 'application/vnd.fujixerox.art4',

	/**
	 * Represents the content type `application/vnd.fujixerox.ddd`.
	 */
	APPLICATION_VND_FUJIXEROX_DDD                                                        = 'application/vnd.fujixerox.ddd',

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks`.
	 */
	APPLICATION_VND_FUJIXEROX_DOCUWORKS                                                  = 'application/vnd.fujixerox.docuworks',

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks.binder`.
	 */
	APPLICATION_VND_FUJIXEROX_DOCUWORKS_BINDER                                           = 'application/vnd.fujixerox.docuworks.binder',

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks.container`.
	 */
	APPLICATION_VND_FUJIXEROX_DOCUWORKS_CONTAINER                                        = 'application/vnd.fujixerox.docuworks.container',

	/**
	 * Represents the content type `application/vnd.fujixerox.hbpl`.
	 */
	APPLICATION_VND_FUJIXEROX_HBPL                                                       = 'application/vnd.fujixerox.hbpl',

	/**
	 * Represents the content type `application/vnd.fut-misnet`.
	 */
	APPLICATION_VND_FUT_MISNET                                                           = 'application/vnd.fut-misnet',

	/**
	 * Represents the content type `application/vnd.fuzzysheet`.
	 */
	APPLICATION_VND_FUZZYSHEET                                                           = 'application/vnd.fuzzysheet',

	/**
	 * Represents the content type `application/vnd.genomatix.tuxedo`.
	 */
	APPLICATION_VND_GENOMATIX_TUXEDO                                                     = 'application/vnd.genomatix.tuxedo',

	/**
	 * Represents the content type `application/vnd.geo+json`.
	 */
	APPLICATION_VND_GEO_JSON                                                             = 'application/vnd.geo+json',

	/**
	 * Represents the content type `application/vnd.geocube+xml`.
	 */
	APPLICATION_VND_GEOCUBE_XML                                                          = 'application/vnd.geocube+xml',

	/**
	 * Represents the content type `application/vnd.geogebra.file`.
	 */
	APPLICATION_VND_GEOGEBRA_FILE                                                        = 'application/vnd.geogebra.file',

	/**
	 * Represents the content type `application/vnd.geogebra.slides`.
	 */
	APPLICATION_VND_GEOGEBRA_SLIDES                                                      = 'application/vnd.geogebra.slides',

	/**
	 * Represents the content type `application/vnd.geogebra.tool`.
	 */
	APPLICATION_VND_GEOGEBRA_TOOL                                                        = 'application/vnd.geogebra.tool',

	/**
	 * Represents the content type `application/vnd.geometry-explorer`.
	 */
	APPLICATION_VND_GEOMETRY_EXPLORER                                                    = 'application/vnd.geometry-explorer',

	/**
	 * Represents the content type `application/vnd.geonext`.
	 */
	APPLICATION_VND_GEONEXT                                                              = 'application/vnd.geonext',

	/**
	 * Represents the content type `application/vnd.geoplan`.
	 */
	APPLICATION_VND_GEOPLAN                                                              = 'application/vnd.geoplan',

	/**
	 * Represents the content type `application/vnd.geospace`.
	 */
	APPLICATION_VND_GEOSPACE                                                             = 'application/vnd.geospace',

	/**
	 * Represents the content type `application/vnd.gerber`.
	 */
	APPLICATION_VND_GERBER                                                               = 'application/vnd.gerber',

	/**
	 * Represents the content type `application/vnd.globalplatform.card-content-mgt`.
	 */
	APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT                                      = 'application/vnd.globalplatform.card-content-mgt',

	/**
	 * Represents the content type `application/vnd.globalplatform.card-content-mgt-response`.
	 */
	APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT_RESPONSE                             = 'application/vnd.globalplatform.card-content-mgt-response',

	/**
	 * Represents the content type `application/vnd.gmx`.
	 */
	APPLICATION_VND_GMX                                                                  = 'application/vnd.gmx',

	/**
	 * Represents the content type `application/vnd.google-earth.kml+xml`.
	 */
	APPLICATION_VND_GOOGLE_EARTH_KML_XML                                                 = 'application/vnd.google-earth.kml+xml',

	/**
	 * Represents the content type `application/vnd.google-earth.kmz`.
	 */
	APPLICATION_VND_GOOGLE_EARTH_KMZ                                                     = 'application/vnd.google-earth.kmz',

	/**
	 * Represents the content type `application/vnd.gov.sk.e-form+xml`.
	 */
	APPLICATION_VND_GOV_SK_E_FORM_XML                                                    = 'application/vnd.gov.sk.e-form+xml',

	/**
	 * Represents the content type `application/vnd.gov.sk.e-form+zip`.
	 */
	APPLICATION_VND_GOV_SK_E_FORM_ZIP                                                    = 'application/vnd.gov.sk.e-form+zip',

	/**
	 * Represents the content type `application/vnd.gov.sk.xmldatacontainer+xml`.
	 */
	APPLICATION_VND_GOV_SK_XMLDATACONTAINER_XML                                          = 'application/vnd.gov.sk.xmldatacontainer+xml',

	/**
	 * Represents the content type `application/vnd.grafeq`.
	 */
	APPLICATION_VND_GRAFEQ                                                               = 'application/vnd.grafeq',

	/**
	 * Represents the content type `application/vnd.gridmp`.
	 */
	APPLICATION_VND_GRIDMP                                                               = 'application/vnd.gridmp',

	/**
	 * Represents the content type `application/vnd.groove-account`.
	 */
	APPLICATION_VND_GROOVE_ACCOUNT                                                       = 'application/vnd.groove-account',

	/**
	 * Represents the content type `application/vnd.groove-help`.
	 */
	APPLICATION_VND_GROOVE_HELP                                                          = 'application/vnd.groove-help',

	/**
	 * Represents the content type `application/vnd.groove-identity-message`.
	 */
	APPLICATION_VND_GROOVE_IDENTITY_MESSAGE                                              = 'application/vnd.groove-identity-message',

	/**
	 * Represents the content type `application/vnd.groove-injector`.
	 */
	APPLICATION_VND_GROOVE_INJECTOR                                                      = 'application/vnd.groove-injector',

	/**
	 * Represents the content type `application/vnd.groove-tool-message`.
	 */
	APPLICATION_VND_GROOVE_TOOL_MESSAGE                                                  = 'application/vnd.groove-tool-message',

	/**
	 * Represents the content type `application/vnd.groove-tool-template`.
	 */
	APPLICATION_VND_GROOVE_TOOL_TEMPLATE                                                 = 'application/vnd.groove-tool-template',

	/**
	 * Represents the content type `application/vnd.groove-vcard`.
	 */
	APPLICATION_VND_GROOVE_VCARD                                                         = 'application/vnd.groove-vcard',

	/**
	 * Represents the content type `application/vnd.hal+json`.
	 */
	APPLICATION_VND_HAL_JSON                                                             = 'application/vnd.hal+json',

	/**
	 * Represents the content type `application/vnd.hal+xml`.
	 */
	APPLICATION_VND_HAL_XML                                                              = 'application/vnd.hal+xml',

	/**
	 * Represents the content type `application/vnd.handheld-entertainment+xml`.
	 */
	APPLICATION_VND_HANDHELD_ENTERTAINMENT_XML                                           = 'application/vnd.handheld-entertainment+xml',

	/**
	 * Represents the content type `application/vnd.hbci`.
	 */
	APPLICATION_VND_HBCI                                                                 = 'application/vnd.hbci',

	/**
	 * Represents the content type `application/vnd.hcl-bireports`.
	 */
	APPLICATION_VND_HCL_BIREPORTS                                                        = 'application/vnd.hcl-bireports',

	/**
	 * Represents the content type `application/vnd.hdt`.
	 */
	APPLICATION_VND_HDT                                                                  = 'application/vnd.hdt',

	/**
	 * Represents the content type `application/vnd.heroku+json`.
	 */
	APPLICATION_VND_HEROKU_JSON                                                          = 'application/vnd.heroku+json',

	/**
	 * Represents the content type `application/vnd.hhe.lesson-player`.
	 */
	APPLICATION_VND_HHE_LESSON_PLAYER                                                    = 'application/vnd.hhe.lesson-player',

	/**
	 * Represents the content type `application/vnd.hp-hpgl`.
	 */
	APPLICATION_VND_HP_HPGL                                                              = 'application/vnd.hp-hpgl',

	/**
	 * Represents the content type `application/vnd.hp-hpid`.
	 */
	APPLICATION_VND_HP_HPID                                                              = 'application/vnd.hp-hpid',

	/**
	 * Represents the content type `application/vnd.hp-hps`.
	 */
	APPLICATION_VND_HP_HPS                                                               = 'application/vnd.hp-hps',

	/**
	 * Represents the content type `application/vnd.hp-jlyt`.
	 */
	APPLICATION_VND_HP_JLYT                                                              = 'application/vnd.hp-jlyt',

	/**
	 * Represents the content type `application/vnd.hp-pcl`.
	 */
	APPLICATION_VND_HP_PCL                                                               = 'application/vnd.hp-pcl',

	/**
	 * Represents the content type `application/vnd.hp-pclxl`.
	 */
	APPLICATION_VND_HP_PCLXL                                                             = 'application/vnd.hp-pclxl',

	/**
	 * Represents the content type `application/vnd.httphone`.
	 */
	APPLICATION_VND_HTTPHONE                                                             = 'application/vnd.httphone',

	/**
	 * Represents the content type `application/vnd.hydrostatix.sof-data`.
	 */
	APPLICATION_VND_HYDROSTATIX_SOF_DATA                                                 = 'application/vnd.hydrostatix.sof-data',

	/**
	 * Represents the content type `application/vnd.hyperdrive+json`.
	 */
	APPLICATION_VND_HYPERDRIVE_JSON                                                      = 'application/vnd.hyperdrive+json',

	/**
	 * Represents the content type `application/vnd.hzn-3d-crossword`.
	 */
	APPLICATION_VND_HZN_3D_CROSSWORD                                                     = 'application/vnd.hzn-3d-crossword',

	/**
	 * Represents the content type `application/vnd.ibm.afplinedata`.
	 */
	APPLICATION_VND_IBM_AFPLINEDATA                                                      = 'application/vnd.ibm.afplinedata',

	/**
	 * Represents the content type `application/vnd.ibm.electronic-media`.
	 */
	APPLICATION_VND_IBM_ELECTRONIC_MEDIA                                                 = 'application/vnd.ibm.electronic-media',

	/**
	 * Represents the content type `application/vnd.ibm.minipay`.
	 */
	APPLICATION_VND_IBM_MINIPAY                                                          = 'application/vnd.ibm.minipay',

	/**
	 * Represents the content type `application/vnd.ibm.modcap`.
	 */
	APPLICATION_VND_IBM_MODCAP                                                           = 'application/vnd.ibm.modcap',

	/**
	 * Represents the content type `application/vnd.ibm.rights-management`.
	 */
	APPLICATION_VND_IBM_RIGHTS_MANAGEMENT                                                = 'application/vnd.ibm.rights-management',

	/**
	 * Represents the content type `application/vnd.ibm.secure-container`.
	 */
	APPLICATION_VND_IBM_SECURE_CONTAINER                                                 = 'application/vnd.ibm.secure-container',

	/**
	 * Represents the content type `application/vnd.iccprofile`.
	 */
	APPLICATION_VND_ICCPROFILE                                                           = 'application/vnd.iccprofile',

	/**
	 * Represents the content type `application/vnd.ieee.1905`.
	 */
	APPLICATION_VND_IEEE_1905                                                            = 'application/vnd.ieee.1905',

	/**
	 * Represents the content type `application/vnd.igloader`.
	 */
	APPLICATION_VND_IGLOADER                                                             = 'application/vnd.igloader',

	/**
	 * Represents the content type `application/vnd.immervision-ivp`.
	 */
	APPLICATION_VND_IMMERVISION_IVP                                                      = 'application/vnd.immervision-ivp',

	/**
	 * Represents the content type `application/vnd.immervision-ivu`.
	 */
	APPLICATION_VND_IMMERVISION_IVU                                                      = 'application/vnd.immervision-ivu',

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p1`.
	 */
	APPLICATION_VND_IMS_IMSCCV1P1                                                        = 'application/vnd.ims.imsccv1p1',

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p2`.
	 */
	APPLICATION_VND_IMS_IMSCCV1P2                                                        = 'application/vnd.ims.imsccv1p2',

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p3`.
	 */
	APPLICATION_VND_IMS_IMSCCV1P3                                                        = 'application/vnd.ims.imsccv1p3',

	/**
	 * Represents the content type `application/vnd.ims.lis.v2.result+json`.
	 */
	APPLICATION_VND_IMS_LIS_V2_RESULT_JSON                                               = 'application/vnd.ims.lis.v2.result+json',

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolconsumerprofile+json`.
	 */
	APPLICATION_VND_IMS_LTI_V2_TOOLCONSUMERPROFILE_JSON                                  = 'application/vnd.ims.lti.v2.toolconsumerprofile+json',

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolproxy+json`.
	 */
	APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_JSON                                            = 'application/vnd.ims.lti.v2.toolproxy+json',

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolproxy.id+json`.
	 */
	APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_ID_JSON                                         = 'application/vnd.ims.lti.v2.toolproxy.id+json',

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolsettings+json`.
	 */
	APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_JSON                                         = 'application/vnd.ims.lti.v2.toolsettings+json',

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolsettings.simple+json`.
	 */
	APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_SIMPLE_JSON                                  = 'application/vnd.ims.lti.v2.toolsettings.simple+json',

	/**
	 * Represents the content type `application/vnd.informedcontrol.rms+xml`.
	 */
	APPLICATION_VND_INFORMEDCONTROL_RMS_XML                                              = 'application/vnd.informedcontrol.rms+xml',

	/**
	 * Represents the content type `application/vnd.informix-visionary`.
	 */
	APPLICATION_VND_INFORMIX_VISIONARY                                                   = 'application/vnd.informix-visionary',

	/**
	 * Represents the content type `application/vnd.infotech.project`.
	 */
	APPLICATION_VND_INFOTECH_PROJECT                                                     = 'application/vnd.infotech.project',

	/**
	 * Represents the content type `application/vnd.infotech.project+xml`.
	 */
	APPLICATION_VND_INFOTECH_PROJECT_XML                                                 = 'application/vnd.infotech.project+xml',

	/**
	 * Represents the content type `application/vnd.innopath.wamp.notification`.
	 */
	APPLICATION_VND_INNOPATH_WAMP_NOTIFICATION                                           = 'application/vnd.innopath.wamp.notification',

	/**
	 * Represents the content type `application/vnd.insors.igm`.
	 */
	APPLICATION_VND_INSORS_IGM                                                           = 'application/vnd.insors.igm',

	/**
	 * Represents the content type `application/vnd.intercon.formnet`.
	 */
	APPLICATION_VND_INTERCON_FORMNET                                                     = 'application/vnd.intercon.formnet',

	/**
	 * Represents the content type `application/vnd.intergeo`.
	 */
	APPLICATION_VND_INTERGEO                                                             = 'application/vnd.intergeo',

	/**
	 * Represents the content type `application/vnd.intertrust.digibox`.
	 */
	APPLICATION_VND_INTERTRUST_DIGIBOX                                                   = 'application/vnd.intertrust.digibox',

	/**
	 * Represents the content type `application/vnd.intertrust.nncp`.
	 */
	APPLICATION_VND_INTERTRUST_NNCP                                                      = 'application/vnd.intertrust.nncp',

	/**
	 * Represents the content type `application/vnd.intu.qbo`.
	 */
	APPLICATION_VND_INTU_QBO                                                             = 'application/vnd.intu.qbo',

	/**
	 * Represents the content type `application/vnd.intu.qfx`.
	 */
	APPLICATION_VND_INTU_QFX                                                             = 'application/vnd.intu.qfx',

	/**
	 * Represents the content type `application/vnd.iptc.g2.catalogitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_CATALOGITEM_XML                                              = 'application/vnd.iptc.g2.catalogitem+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.conceptitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_CONCEPTITEM_XML                                              = 'application/vnd.iptc.g2.conceptitem+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.knowledgeitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_KNOWLEDGEITEM_XML                                            = 'application/vnd.iptc.g2.knowledgeitem+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.newsitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_NEWSITEM_XML                                                 = 'application/vnd.iptc.g2.newsitem+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.newsmessage+xml`.
	 */
	APPLICATION_VND_IPTC_G2_NEWSMESSAGE_XML                                              = 'application/vnd.iptc.g2.newsmessage+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.packageitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_PACKAGEITEM_XML                                              = 'application/vnd.iptc.g2.packageitem+xml',

	/**
	 * Represents the content type `application/vnd.iptc.g2.planningitem+xml`.
	 */
	APPLICATION_VND_IPTC_G2_PLANNINGITEM_XML                                             = 'application/vnd.iptc.g2.planningitem+xml',

	/**
	 * Represents the content type `application/vnd.ipunplugged.rcprofile`.
	 */
	APPLICATION_VND_IPUNPLUGGED_RCPROFILE                                                = 'application/vnd.ipunplugged.rcprofile',

	/**
	 * Represents the content type `application/vnd.irepository.package+xml`.
	 */
	APPLICATION_VND_IREPOSITORY_PACKAGE_XML                                              = 'application/vnd.irepository.package+xml',

	/**
	 * Represents the content type `application/vnd.is-xpr`.
	 */
	APPLICATION_VND_IS_XPR                                                               = 'application/vnd.is-xpr',

	/**
	 * Represents the content type `application/vnd.isac.fcs`.
	 */
	APPLICATION_VND_ISAC_FCS                                                             = 'application/vnd.isac.fcs',

	/**
	 * Represents the content type `application/vnd.jam`.
	 */
	APPLICATION_VND_JAM                                                                  = 'application/vnd.jam',

	/**
	 * Represents the content type `application/vnd.japannet-directory-service`.
	 */
	APPLICATION_VND_JAPANNET_DIRECTORY_SERVICE                                           = 'application/vnd.japannet-directory-service',

	/**
	 * Represents the content type `application/vnd.japannet-jpnstore-wakeup`.
	 */
	APPLICATION_VND_JAPANNET_JPNSTORE_WAKEUP                                             = 'application/vnd.japannet-jpnstore-wakeup',

	/**
	 * Represents the content type `application/vnd.japannet-payment-wakeup`.
	 */
	APPLICATION_VND_JAPANNET_PAYMENT_WAKEUP                                              = 'application/vnd.japannet-payment-wakeup',

	/**
	 * Represents the content type `application/vnd.japannet-registration`.
	 */
	APPLICATION_VND_JAPANNET_REGISTRATION                                                = 'application/vnd.japannet-registration',

	/**
	 * Represents the content type `application/vnd.japannet-registration-wakeup`.
	 */
	APPLICATION_VND_JAPANNET_REGISTRATION_WAKEUP                                         = 'application/vnd.japannet-registration-wakeup',

	/**
	 * Represents the content type `application/vnd.japannet-setstore-wakeup`.
	 */
	APPLICATION_VND_JAPANNET_SETSTORE_WAKEUP                                             = 'application/vnd.japannet-setstore-wakeup',

	/**
	 * Represents the content type `application/vnd.japannet-verification`.
	 */
	APPLICATION_VND_JAPANNET_VERIFICATION                                                = 'application/vnd.japannet-verification',

	/**
	 * Represents the content type `application/vnd.japannet-verification-wakeup`.
	 */
	APPLICATION_VND_JAPANNET_VERIFICATION_WAKEUP                                         = 'application/vnd.japannet-verification-wakeup',

	/**
	 * Represents the content type `application/vnd.jcp.javame.midlet-rms`.
	 */
	APPLICATION_VND_JCP_JAVAME_MIDLET_RMS                                                = 'application/vnd.jcp.javame.midlet-rms',

	/**
	 * Represents the content type `application/vnd.jisp`.
	 */
	APPLICATION_VND_JISP                                                                 = 'application/vnd.jisp',

	/**
	 * Represents the content type `application/vnd.joost.joda-archive`.
	 */
	APPLICATION_VND_JOOST_JODA_ARCHIVE                                                   = 'application/vnd.joost.joda-archive',

	/**
	 * Represents the content type `application/vnd.jsk.isdn-ngn`.
	 */
	APPLICATION_VND_JSK_ISDN_NGN                                                         = 'application/vnd.jsk.isdn-ngn',

	/**
	 * Represents the content type `application/vnd.kahootz`.
	 */
	APPLICATION_VND_KAHOOTZ                                                              = 'application/vnd.kahootz',

	/**
	 * Represents the content type `application/vnd.kde.karbon`.
	 */
	APPLICATION_VND_KDE_KARBON                                                           = 'application/vnd.kde.karbon',

	/**
	 * Represents the content type `application/vnd.kde.kchart`.
	 */
	APPLICATION_VND_KDE_KCHART                                                           = 'application/vnd.kde.kchart',

	/**
	 * Represents the content type `application/vnd.kde.kformula`.
	 */
	APPLICATION_VND_KDE_KFORMULA                                                         = 'application/vnd.kde.kformula',

	/**
	 * Represents the content type `application/vnd.kde.kivio`.
	 */
	APPLICATION_VND_KDE_KIVIO                                                            = 'application/vnd.kde.kivio',

	/**
	 * Represents the content type `application/vnd.kde.kontour`.
	 */
	APPLICATION_VND_KDE_KONTOUR                                                          = 'application/vnd.kde.kontour',

	/**
	 * Represents the content type `application/vnd.kde.kpresenter`.
	 */
	APPLICATION_VND_KDE_KPRESENTER                                                       = 'application/vnd.kde.kpresenter',

	/**
	 * Represents the content type `application/vnd.kde.kspread`.
	 */
	APPLICATION_VND_KDE_KSPREAD                                                          = 'application/vnd.kde.kspread',

	/**
	 * Represents the content type `application/vnd.kde.kword`.
	 */
	APPLICATION_VND_KDE_KWORD                                                            = 'application/vnd.kde.kword',

	/**
	 * Represents the content type `application/vnd.kenameaapp`.
	 */
	APPLICATION_VND_KENAMEAAPP                                                           = 'application/vnd.kenameaapp',

	/**
	 * Represents the content type `application/vnd.kidspiration`.
	 */
	APPLICATION_VND_KIDSPIRATION                                                         = 'application/vnd.kidspiration',

	/**
	 * Represents the content type `application/vnd.kinar`.
	 */
	APPLICATION_VND_KINAR                                                                = 'application/vnd.kinar',

	/**
	 * Represents the content type `application/vnd.koan`.
	 */
	APPLICATION_VND_KOAN                                                                 = 'application/vnd.koan',

	/**
	 * Represents the content type `application/vnd.kodak-descriptor`.
	 */
	APPLICATION_VND_KODAK_DESCRIPTOR                                                     = 'application/vnd.kodak-descriptor',

	/**
	 * Represents the content type `application/vnd.las.las+xml`.
	 */
	APPLICATION_VND_LAS_LAS_XML                                                          = 'application/vnd.las.las+xml',

	/**
	 * Represents the content type `application/vnd.liberty-request+xml`.
	 */
	APPLICATION_VND_LIBERTY_REQUEST_XML                                                  = 'application/vnd.liberty-request+xml',

	/**
	 * Represents the content type `application/vnd.llamagraphics.life-balance.desktop`.
	 */
	APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_DESKTOP                                   = 'application/vnd.llamagraphics.life-balance.desktop',

	/**
	 * Represents the content type `application/vnd.llamagraphics.life-balance.exchange+xml`.
	 */
	APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_EXCHANGE_XML                              = 'application/vnd.llamagraphics.life-balance.exchange+xml',

	/**
	 * Represents the content type `application/vnd.lotus-1-2-3`.
	 */
	APPLICATION_VND_LOTUS_1_2_3                                                          = 'application/vnd.lotus-1-2-3',

	/**
	 * Represents the content type `application/vnd.lotus-approach`.
	 */
	APPLICATION_VND_LOTUS_APPROACH                                                       = 'application/vnd.lotus-approach',

	/**
	 * Represents the content type `application/vnd.lotus-freelance`.
	 */
	APPLICATION_VND_LOTUS_FREELANCE                                                      = 'application/vnd.lotus-freelance',

	/**
	 * Represents the content type `application/vnd.lotus-notes`.
	 */
	APPLICATION_VND_LOTUS_NOTES                                                          = 'application/vnd.lotus-notes',

	/**
	 * Represents the content type `application/vnd.lotus-organizer`.
	 */
	APPLICATION_VND_LOTUS_ORGANIZER                                                      = 'application/vnd.lotus-organizer',

	/**
	 * Represents the content type `application/vnd.lotus-screencam`.
	 */
	APPLICATION_VND_LOTUS_SCREENCAM                                                      = 'application/vnd.lotus-screencam',

	/**
	 * Represents the content type `application/vnd.lotus-wordpro`.
	 */
	APPLICATION_VND_LOTUS_WORDPRO                                                        = 'application/vnd.lotus-wordpro',

	/**
	 * Represents the content type `application/vnd.macports.portpkg`.
	 */
	APPLICATION_VND_MACPORTS_PORTPKG                                                     = 'application/vnd.macports.portpkg',

	/**
	 * Represents the content type `application/vnd.mapbox-vector-tile`.
	 */
	APPLICATION_VND_MAPBOX_VECTOR_TILE                                                   = 'application/vnd.mapbox-vector-tile',

	/**
	 * Represents the content type `application/vnd.marlin.drm.actiontoken+xml`.
	 */
	APPLICATION_VND_MARLIN_DRM_ACTIONTOKEN_XML                                           = 'application/vnd.marlin.drm.actiontoken+xml',

	/**
	 * Represents the content type `application/vnd.marlin.drm.conftoken+xml`.
	 */
	APPLICATION_VND_MARLIN_DRM_CONFTOKEN_XML                                             = 'application/vnd.marlin.drm.conftoken+xml',

	/**
	 * Represents the content type `application/vnd.marlin.drm.license+xml`.
	 */
	APPLICATION_VND_MARLIN_DRM_LICENSE_XML                                               = 'application/vnd.marlin.drm.license+xml',

	/**
	 * Represents the content type `application/vnd.marlin.drm.mdcf`.
	 */
	APPLICATION_VND_MARLIN_DRM_MDCF                                                      = 'application/vnd.marlin.drm.mdcf',

	/**
	 * Represents the content type `application/vnd.mason+json`.
	 */
	APPLICATION_VND_MASON_JSON                                                           = 'application/vnd.mason+json',

	/**
	 * Represents the content type `application/vnd.maxmind.maxmind-db`.
	 */
	APPLICATION_VND_MAXMIND_MAXMIND_DB                                                   = 'application/vnd.maxmind.maxmind-db',

	/**
	 * Represents the content type `application/vnd.mcd`.
	 */
	APPLICATION_VND_MCD                                                                  = 'application/vnd.mcd',

	/**
	 * Represents the content type `application/vnd.medcalcdata`.
	 */
	APPLICATION_VND_MEDCALCDATA                                                          = 'application/vnd.medcalcdata',

	/**
	 * Represents the content type `application/vnd.mediastation.cdkey`.
	 */
	APPLICATION_VND_MEDIASTATION_CDKEY                                                   = 'application/vnd.mediastation.cdkey',

	/**
	 * Represents the content type `application/vnd.meridian-slingshot`.
	 */
	APPLICATION_VND_MERIDIAN_SLINGSHOT                                                   = 'application/vnd.meridian-slingshot',

	/**
	 * Represents the content type `application/vnd.mfer`.
	 */
	APPLICATION_VND_MFER                                                                 = 'application/vnd.mfer',

	/**
	 * Represents the content type `application/vnd.mfmp`.
	 */
	APPLICATION_VND_MFMP                                                                 = 'application/vnd.mfmp',

	/**
	 * Represents the content type `application/vnd.micro+json`.
	 */
	APPLICATION_VND_MICRO_JSON                                                           = 'application/vnd.micro+json',

	/**
	 * Represents the content type `application/vnd.micrografx.flo`.
	 */
	APPLICATION_VND_MICROGRAFX_FLO                                                       = 'application/vnd.micrografx.flo',

	/**
	 * Represents the content type `application/vnd.micrografx.igx`.
	 */
	APPLICATION_VND_MICROGRAFX_IGX                                                       = 'application/vnd.micrografx.igx',

	/**
	 * Represents the content type `application/vnd.microsoft.portable-executable`.
	 */
	APPLICATION_VND_MICROSOFT_PORTABLE_EXECUTABLE                                        = 'application/vnd.microsoft.portable-executable',

	/**
	 * Represents the content type `application/vnd.miele+json`.
	 */
	APPLICATION_VND_MIELE_JSON                                                           = 'application/vnd.miele+json',

	/**
	 * Represents the content type `application/vnd.mif`.
	 */
	APPLICATION_VND_MIF                                                                  = 'application/vnd.mif',

	/**
	 * Represents the content type `application/vnd.minisoft-hp3000-save`.
	 */
	APPLICATION_VND_MINISOFT_HP3000_SAVE                                                 = 'application/vnd.minisoft-hp3000-save',

	/**
	 * Represents the content type `application/vnd.mitsubishi.misty-guard.trustweb`.
	 */
	APPLICATION_VND_MITSUBISHI_MISTY_GUARD_TRUSTWEB                                      = 'application/vnd.mitsubishi.misty-guard.trustweb',

	/**
	 * Represents the content type `application/vnd.mobius.daf`.
	 */
	APPLICATION_VND_MOBIUS_DAF                                                           = 'application/vnd.mobius.daf',

	/**
	 * Represents the content type `application/vnd.mobius.dis`.
	 */
	APPLICATION_VND_MOBIUS_DIS                                                           = 'application/vnd.mobius.dis',

	/**
	 * Represents the content type `application/vnd.mobius.mbk`.
	 */
	APPLICATION_VND_MOBIUS_MBK                                                           = 'application/vnd.mobius.mbk',

	/**
	 * Represents the content type `application/vnd.mobius.mqy`.
	 */
	APPLICATION_VND_MOBIUS_MQY                                                           = 'application/vnd.mobius.mqy',

	/**
	 * Represents the content type `application/vnd.mobius.msl`.
	 */
	APPLICATION_VND_MOBIUS_MSL                                                           = 'application/vnd.mobius.msl',

	/**
	 * Represents the content type `application/vnd.mobius.plc`.
	 */
	APPLICATION_VND_MOBIUS_PLC                                                           = 'application/vnd.mobius.plc',

	/**
	 * Represents the content type `application/vnd.mobius.txf`.
	 */
	APPLICATION_VND_MOBIUS_TXF                                                           = 'application/vnd.mobius.txf',

	/**
	 * Represents the content type `application/vnd.mophun.application`.
	 */
	APPLICATION_VND_MOPHUN_APPLICATION                                                   = 'application/vnd.mophun.application',

	/**
	 * Represents the content type `application/vnd.mophun.certificate`.
	 */
	APPLICATION_VND_MOPHUN_CERTIFICATE                                                   = 'application/vnd.mophun.certificate',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE                                                   = 'application/vnd.motorola.flexsuite',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.adsi`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_ADSI                                              = 'application/vnd.motorola.flexsuite.adsi',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.fis`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_FIS                                               = 'application/vnd.motorola.flexsuite.fis',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.gotap`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_GOTAP                                             = 'application/vnd.motorola.flexsuite.gotap',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.kmr`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_KMR                                               = 'application/vnd.motorola.flexsuite.kmr',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.ttc`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_TTC                                               = 'application/vnd.motorola.flexsuite.ttc',

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.wem`.
	 */
	APPLICATION_VND_MOTOROLA_FLEXSUITE_WEM                                               = 'application/vnd.motorola.flexsuite.wem',

	/**
	 * Represents the content type `application/vnd.motorola.iprm`.
	 */
	APPLICATION_VND_MOTOROLA_IPRM                                                        = 'application/vnd.motorola.iprm',

	/**
	 * Represents the content type `application/vnd.mozilla.xul+xml`.
	 */
	APPLICATION_VND_MOZILLA_XUL_XML                                                      = 'application/vnd.mozilla.xul+xml',

	/**
	 * Represents the content type `application/vnd.ms-3mfdocument`.
	 */
	APPLICATION_VND_MS_3MFDOCUMENT                                                       = 'application/vnd.ms-3mfdocument',

	/**
	 * Represents the content type `application/vnd.ms-artgalry`.
	 */
	APPLICATION_VND_MS_ARTGALRY                                                          = 'application/vnd.ms-artgalry',

	/**
	 * Represents the content type `application/vnd.ms-asf`.
	 */
	APPLICATION_VND_MS_ASF                                                               = 'application/vnd.ms-asf',

	/**
	 * Represents the content type `application/vnd.ms-cab-compressed`.
	 */
	APPLICATION_VND_MS_CAB_COMPRESSED                                                    = 'application/vnd.ms-cab-compressed',

	/**
	 * Represents the content type `application/vnd.ms-color.iccprofile`.
	 */
	APPLICATION_VND_MS_COLOR_ICCPROFILE                                                  = 'application/vnd.ms-color.iccprofile',

	/**
	 * Represents the content type `application/vnd.ms-excel`.
	 */
	APPLICATION_VND_MS_EXCEL                                                             = 'application/vnd.ms-excel',

	/**
	 * Represents the content type `application/vnd.ms-excel.addin.macroenabled.12`.
	 */
	APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12                                       = 'application/vnd.ms-excel.addin.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-excel.sheet.binary.macroenabled.12`.
	 */
	APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12                                = 'application/vnd.ms-excel.sheet.binary.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-excel.sheet.macroenabled.12`.
	 */
	APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12                                       = 'application/vnd.ms-excel.sheet.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-excel.template.macroenabled.12`.
	 */
	APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12                                    = 'application/vnd.ms-excel.template.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-fontobject`.
	 */
	APPLICATION_VND_MS_FONTOBJECT                                                        = 'application/vnd.ms-fontobject',

	/**
	 * Represents the content type `application/vnd.ms-htmlhelp`.
	 */
	APPLICATION_VND_MS_HTMLHELP                                                          = 'application/vnd.ms-htmlhelp',

	/**
	 * Represents the content type `application/vnd.ms-ims`.
	 */
	APPLICATION_VND_MS_IMS                                                               = 'application/vnd.ms-ims',

	/**
	 * Represents the content type `application/vnd.ms-lrm`.
	 */
	APPLICATION_VND_MS_LRM                                                               = 'application/vnd.ms-lrm',

	/**
	 * Represents the content type `application/vnd.ms-office.activex+xml`.
	 */
	APPLICATION_VND_MS_OFFICE_ACTIVEX_XML                                                = 'application/vnd.ms-office.activex+xml',

	/**
	 * Represents the content type `application/vnd.ms-officetheme`.
	 */
	APPLICATION_VND_MS_OFFICETHEME                                                       = 'application/vnd.ms-officetheme',

	/**
	 * Represents the content type `application/vnd.ms-opentype`.
	 */
	APPLICATION_VND_MS_OPENTYPE                                                          = 'application/vnd.ms-opentype',

	/**
	 * Represents the content type `application/vnd.ms-package.obfuscated-opentype`.
	 */
	APPLICATION_VND_MS_PACKAGE_OBFUSCATED_OPENTYPE                                       = 'application/vnd.ms-package.obfuscated-opentype',

	/**
	 * Represents the content type `application/vnd.ms-pki.seccat`.
	 */
	APPLICATION_VND_MS_PKI_SECCAT                                                        = 'application/vnd.ms-pki.seccat',

	/**
	 * Represents the content type `application/vnd.ms-pki.stl`.
	 */
	APPLICATION_VND_MS_PKI_STL                                                           = 'application/vnd.ms-pki.stl',

	/**
	 * Represents the content type `application/vnd.ms-playready.initiator+xml`.
	 */
	APPLICATION_VND_MS_PLAYREADY_INITIATOR_XML                                           = 'application/vnd.ms-playready.initiator+xml',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint`.
	 */
	APPLICATION_VND_MS_POWERPOINT                                                        = 'application/vnd.ms-powerpoint',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.addin.macroenabled.12`.
	 */
	APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12                                  = 'application/vnd.ms-powerpoint.addin.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.presentation.macroenabled.12`.
	 */
	APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12                           = 'application/vnd.ms-powerpoint.presentation.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.slide.macroenabled.12`.
	 */
	APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12                                  = 'application/vnd.ms-powerpoint.slide.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.slideshow.macroenabled.12`.
	 */
	APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12                              = 'application/vnd.ms-powerpoint.slideshow.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.template.macroenabled.12`.
	 */
	APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12                               = 'application/vnd.ms-powerpoint.template.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-printdevicecapabilities+xml`.
	 */
	APPLICATION_VND_MS_PRINTDEVICECAPABILITIES_XML                                       = 'application/vnd.ms-printdevicecapabilities+xml',

	/**
	 * Represents the content type `application/vnd.ms-printing.printticket+xml`.
	 */
	APPLICATION_VND_MS_PRINTING_PRINTTICKET_XML                                          = 'application/vnd.ms-printing.printticket+xml',

	/**
	 * Represents the content type `application/vnd.ms-printschematicket+xml`.
	 */
	APPLICATION_VND_MS_PRINTSCHEMATICKET_XML                                             = 'application/vnd.ms-printschematicket+xml',

	/**
	 * Represents the content type `application/vnd.ms-project`.
	 */
	APPLICATION_VND_MS_PROJECT                                                           = 'application/vnd.ms-project',

	/**
	 * Represents the content type `application/vnd.ms-tnef`.
	 */
	APPLICATION_VND_MS_TNEF                                                              = 'application/vnd.ms-tnef',

	/**
	 * Represents the content type `application/vnd.ms-windows.devicepairing`.
	 */
	APPLICATION_VND_MS_WINDOWS_DEVICEPAIRING                                             = 'application/vnd.ms-windows.devicepairing',

	/**
	 * Represents the content type `application/vnd.ms-windows.nwprinting.oob`.
	 */
	APPLICATION_VND_MS_WINDOWS_NWPRINTING_OOB                                            = 'application/vnd.ms-windows.nwprinting.oob',

	/**
	 * Represents the content type `application/vnd.ms-windows.printerpairing`.
	 */
	APPLICATION_VND_MS_WINDOWS_PRINTERPAIRING                                            = 'application/vnd.ms-windows.printerpairing',

	/**
	 * Represents the content type `application/vnd.ms-windows.wsd.oob`.
	 */
	APPLICATION_VND_MS_WINDOWS_WSD_OOB                                                   = 'application/vnd.ms-windows.wsd.oob',

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.lic-chlg-req`.
	 */
	APPLICATION_VND_MS_WMDRM_LIC_CHLG_REQ                                                = 'application/vnd.ms-wmdrm.lic-chlg-req',

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.lic-resp`.
	 */
	APPLICATION_VND_MS_WMDRM_LIC_RESP                                                    = 'application/vnd.ms-wmdrm.lic-resp',

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.meter-chlg-req`.
	 */
	APPLICATION_VND_MS_WMDRM_METER_CHLG_REQ                                              = 'application/vnd.ms-wmdrm.meter-chlg-req',

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.meter-resp`.
	 */
	APPLICATION_VND_MS_WMDRM_METER_RESP                                                  = 'application/vnd.ms-wmdrm.meter-resp',

	/**
	 * Represents the content type `application/vnd.ms-word.document.macroenabled.12`.
	 */
	APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12                                     = 'application/vnd.ms-word.document.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-word.template.macroenabled.12`.
	 */
	APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12                                     = 'application/vnd.ms-word.template.macroenabled.12',

	/**
	 * Represents the content type `application/vnd.ms-works`.
	 */
	APPLICATION_VND_MS_WORKS                                                             = 'application/vnd.ms-works',

	/**
	 * Represents the content type `application/vnd.ms-wpl`.
	 */
	APPLICATION_VND_MS_WPL                                                               = 'application/vnd.ms-wpl',

	/**
	 * Represents the content type `application/vnd.ms-xpsdocument`.
	 */
	APPLICATION_VND_MS_XPSDOCUMENT                                                       = 'application/vnd.ms-xpsdocument',

	/**
	 * Represents the content type `application/vnd.msa-disk-image`.
	 */
	APPLICATION_VND_MSA_DISK_IMAGE                                                       = 'application/vnd.msa-disk-image',

	/**
	 * Represents the content type `application/vnd.mseq`.
	 */
	APPLICATION_VND_MSEQ                                                                 = 'application/vnd.mseq',

	/**
	 * Represents the content type `application/vnd.msign`.
	 */
	APPLICATION_VND_MSIGN                                                                = 'application/vnd.msign',

	/**
	 * Represents the content type `application/vnd.multiad.creator`.
	 */
	APPLICATION_VND_MULTIAD_CREATOR                                                      = 'application/vnd.multiad.creator',

	/**
	 * Represents the content type `application/vnd.multiad.creator.cif`.
	 */
	APPLICATION_VND_MULTIAD_CREATOR_CIF                                                  = 'application/vnd.multiad.creator.cif',

	/**
	 * Represents the content type `application/vnd.music-niff`.
	 */
	APPLICATION_VND_MUSIC_NIFF                                                           = 'application/vnd.music-niff',

	/**
	 * Represents the content type `application/vnd.musician`.
	 */
	APPLICATION_VND_MUSICIAN                                                             = 'application/vnd.musician',

	/**
	 * Represents the content type `application/vnd.muvee.style`.
	 */
	APPLICATION_VND_MUVEE_STYLE                                                          = 'application/vnd.muvee.style',

	/**
	 * Represents the content type `application/vnd.mynfc`.
	 */
	APPLICATION_VND_MYNFC                                                                = 'application/vnd.mynfc',

	/**
	 * Represents the content type `application/vnd.ncd.control`.
	 */
	APPLICATION_VND_NCD_CONTROL                                                          = 'application/vnd.ncd.control',

	/**
	 * Represents the content type `application/vnd.ncd.reference`.
	 */
	APPLICATION_VND_NCD_REFERENCE                                                        = 'application/vnd.ncd.reference',

	/**
	 * Represents the content type `application/vnd.nervana`.
	 */
	APPLICATION_VND_NERVANA                                                              = 'application/vnd.nervana',

	/**
	 * Represents the content type `application/vnd.netfpx`.
	 */
	APPLICATION_VND_NETFPX                                                               = 'application/vnd.netfpx',

	/**
	 * Represents the content type `application/vnd.neurolanguage.nlu`.
	 */
	APPLICATION_VND_NEUROLANGUAGE_NLU                                                    = 'application/vnd.neurolanguage.nlu',

	/**
	 * Represents the content type `application/vnd.nintendo.nitro.rom`.
	 */
	APPLICATION_VND_NINTENDO_NITRO_ROM                                                   = 'application/vnd.nintendo.nitro.rom',

	/**
	 * Represents the content type `application/vnd.nintendo.snes.rom`.
	 */
	APPLICATION_VND_NINTENDO_SNES_ROM                                                    = 'application/vnd.nintendo.snes.rom',

	/**
	 * Represents the content type `application/vnd.nitf`.
	 */
	APPLICATION_VND_NITF                                                                 = 'application/vnd.nitf',

	/**
	 * Represents the content type `application/vnd.noblenet-directory`.
	 */
	APPLICATION_VND_NOBLENET_DIRECTORY                                                   = 'application/vnd.noblenet-directory',

	/**
	 * Represents the content type `application/vnd.noblenet-sealer`.
	 */
	APPLICATION_VND_NOBLENET_SEALER                                                      = 'application/vnd.noblenet-sealer',

	/**
	 * Represents the content type `application/vnd.noblenet-web`.
	 */
	APPLICATION_VND_NOBLENET_WEB                                                         = 'application/vnd.noblenet-web',

	/**
	 * Represents the content type `application/vnd.nokia.catalogs`.
	 */
	APPLICATION_VND_NOKIA_CATALOGS                                                       = 'application/vnd.nokia.catalogs',

	/**
	 * Represents the content type `application/vnd.nokia.conml+wbxml`.
	 */
	APPLICATION_VND_NOKIA_CONML_WBXML                                                    = 'application/vnd.nokia.conml+wbxml',

	/**
	 * Represents the content type `application/vnd.nokia.conml+xml`.
	 */
	APPLICATION_VND_NOKIA_CONML_XML                                                      = 'application/vnd.nokia.conml+xml',

	/**
	 * Represents the content type `application/vnd.nokia.iptv.config+xml`.
	 */
	APPLICATION_VND_NOKIA_IPTV_CONFIG_XML                                                = 'application/vnd.nokia.iptv.config+xml',

	/**
	 * Represents the content type `application/vnd.nokia.isds-radio-presets`.
	 */
	APPLICATION_VND_NOKIA_ISDS_RADIO_PRESETS                                             = 'application/vnd.nokia.isds-radio-presets',

	/**
	 * Represents the content type `application/vnd.nokia.landmark+wbxml`.
	 */
	APPLICATION_VND_NOKIA_LANDMARK_WBXML                                                 = 'application/vnd.nokia.landmark+wbxml',

	/**
	 * Represents the content type `application/vnd.nokia.landmark+xml`.
	 */
	APPLICATION_VND_NOKIA_LANDMARK_XML                                                   = 'application/vnd.nokia.landmark+xml',

	/**
	 * Represents the content type `application/vnd.nokia.landmarkcollection+xml`.
	 */
	APPLICATION_VND_NOKIA_LANDMARKCOLLECTION_XML                                         = 'application/vnd.nokia.landmarkcollection+xml',

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.ac+xml`.
	 */
	APPLICATION_VND_NOKIA_N_GAGE_AC_XML                                                  = 'application/vnd.nokia.n-gage.ac+xml',

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.data`.
	 */
	APPLICATION_VND_NOKIA_N_GAGE_DATA                                                    = 'application/vnd.nokia.n-gage.data',

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.symbian.install`.
	 */
	APPLICATION_VND_NOKIA_N_GAGE_SYMBIAN_INSTALL                                         = 'application/vnd.nokia.n-gage.symbian.install',

	/**
	 * Represents the content type `application/vnd.nokia.ncd`.
	 */
	APPLICATION_VND_NOKIA_NCD                                                            = 'application/vnd.nokia.ncd',

	/**
	 * Represents the content type `application/vnd.nokia.pcd+wbxml`.
	 */
	APPLICATION_VND_NOKIA_PCD_WBXML                                                      = 'application/vnd.nokia.pcd+wbxml',

	/**
	 * Represents the content type `application/vnd.nokia.pcd+xml`.
	 */
	APPLICATION_VND_NOKIA_PCD_XML                                                        = 'application/vnd.nokia.pcd+xml',

	/**
	 * Represents the content type `application/vnd.nokia.radio-preset`.
	 */
	APPLICATION_VND_NOKIA_RADIO_PRESET                                                   = 'application/vnd.nokia.radio-preset',

	/**
	 * Represents the content type `application/vnd.nokia.radio-presets`.
	 */
	APPLICATION_VND_NOKIA_RADIO_PRESETS                                                  = 'application/vnd.nokia.radio-presets',

	/**
	 * Represents the content type `application/vnd.novadigm.edm`.
	 */
	APPLICATION_VND_NOVADIGM_EDM                                                         = 'application/vnd.novadigm.edm',

	/**
	 * Represents the content type `application/vnd.novadigm.edx`.
	 */
	APPLICATION_VND_NOVADIGM_EDX                                                         = 'application/vnd.novadigm.edx',

	/**
	 * Represents the content type `application/vnd.novadigm.ext`.
	 */
	APPLICATION_VND_NOVADIGM_EXT                                                         = 'application/vnd.novadigm.ext',

	/**
	 * Represents the content type `application/vnd.ntt-local.content-share`.
	 */
	APPLICATION_VND_NTT_LOCAL_CONTENT_SHARE                                              = 'application/vnd.ntt-local.content-share',

	/**
	 * Represents the content type `application/vnd.ntt-local.file-transfer`.
	 */
	APPLICATION_VND_NTT_LOCAL_FILE_TRANSFER                                              = 'application/vnd.ntt-local.file-transfer',

	/**
	 * Represents the content type `application/vnd.ntt-local.ogw_remote-access`.
	 */
	APPLICATION_VND_NTT_LOCAL_OGW_REMOTE_ACCESS                                          = 'application/vnd.ntt-local.ogw_remote-access',

	/**
	 * Represents the content type `application/vnd.ntt-local.sip-ta_remote`.
	 */
	APPLICATION_VND_NTT_LOCAL_SIP_TA_REMOTE                                              = 'application/vnd.ntt-local.sip-ta_remote',

	/**
	 * Represents the content type `application/vnd.ntt-local.sip-ta_tcp_stream`.
	 */
	APPLICATION_VND_NTT_LOCAL_SIP_TA_TCP_STREAM                                          = 'application/vnd.ntt-local.sip-ta_tcp_stream',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.chart`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_CHART                                             = 'application/vnd.oasis.opendocument.chart',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.chart-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_CHART_TEMPLATE                                    = 'application/vnd.oasis.opendocument.chart-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.database`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE                                          = 'application/vnd.oasis.opendocument.database',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.formula`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA                                           = 'application/vnd.oasis.opendocument.formula',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.formula-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA_TEMPLATE                                  = 'application/vnd.oasis.opendocument.formula-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.graphics`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS                                          = 'application/vnd.oasis.opendocument.graphics',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.graphics-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS_TEMPLATE                                 = 'application/vnd.oasis.opendocument.graphics-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.image`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE                                             = 'application/vnd.oasis.opendocument.image',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.image-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE_TEMPLATE                                    = 'application/vnd.oasis.opendocument.image-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.presentation`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION                                      = 'application/vnd.oasis.opendocument.presentation',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.presentation-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION_TEMPLATE                             = 'application/vnd.oasis.opendocument.presentation-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.spreadsheet`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET                                       = 'application/vnd.oasis.opendocument.spreadsheet',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.spreadsheet-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET_TEMPLATE                              = 'application/vnd.oasis.opendocument.spreadsheet-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT                                              = 'application/vnd.oasis.opendocument.text',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-master`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_MASTER                                       = 'application/vnd.oasis.opendocument.text-master',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-template`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_TEMPLATE                                     = 'application/vnd.oasis.opendocument.text-template',

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-web`.
	 */
	APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_WEB                                          = 'application/vnd.oasis.opendocument.text-web',

	/**
	 * Represents the content type `application/vnd.obn`.
	 */
	APPLICATION_VND_OBN                                                                  = 'application/vnd.obn',

	/**
	 * Represents the content type `application/vnd.oftn.l10n+json`.
	 */
	APPLICATION_VND_OFTN_L10N_JSON                                                       = 'application/vnd.oftn.l10n+json',

	/**
	 * Represents the content type `application/vnd.oipf.contentaccessdownload+xml`.
	 */
	APPLICATION_VND_OIPF_CONTENTACCESSDOWNLOAD_XML                                       = 'application/vnd.oipf.contentaccessdownload+xml',

	/**
	 * Represents the content type `application/vnd.oipf.contentaccessstreaming+xml`.
	 */
	APPLICATION_VND_OIPF_CONTENTACCESSSTREAMING_XML                                      = 'application/vnd.oipf.contentaccessstreaming+xml',

	/**
	 * Represents the content type `application/vnd.oipf.cspg-hexbinary`.
	 */
	APPLICATION_VND_OIPF_CSPG_HEXBINARY                                                  = 'application/vnd.oipf.cspg-hexbinary',

	/**
	 * Represents the content type `application/vnd.oipf.dae.svg+xml`.
	 */
	APPLICATION_VND_OIPF_DAE_SVG_XML                                                     = 'application/vnd.oipf.dae.svg+xml',

	/**
	 * Represents the content type `application/vnd.oipf.dae.xhtml+xml`.
	 */
	APPLICATION_VND_OIPF_DAE_XHTML_XML                                                   = 'application/vnd.oipf.dae.xhtml+xml',

	/**
	 * Represents the content type `application/vnd.oipf.mippvcontrolmessage+xml`.
	 */
	APPLICATION_VND_OIPF_MIPPVCONTROLMESSAGE_XML                                         = 'application/vnd.oipf.mippvcontrolmessage+xml',

	/**
	 * Represents the content type `application/vnd.oipf.pae.gem`.
	 */
	APPLICATION_VND_OIPF_PAE_GEM                                                         = 'application/vnd.oipf.pae.gem',

	/**
	 * Represents the content type `application/vnd.oipf.spdiscovery+xml`.
	 */
	APPLICATION_VND_OIPF_SPDISCOVERY_XML                                                 = 'application/vnd.oipf.spdiscovery+xml',

	/**
	 * Represents the content type `application/vnd.oipf.spdlist+xml`.
	 */
	APPLICATION_VND_OIPF_SPDLIST_XML                                                     = 'application/vnd.oipf.spdlist+xml',

	/**
	 * Represents the content type `application/vnd.oipf.ueprofile+xml`.
	 */
	APPLICATION_VND_OIPF_UEPROFILE_XML                                                   = 'application/vnd.oipf.ueprofile+xml',

	/**
	 * Represents the content type `application/vnd.oipf.userprofile+xml`.
	 */
	APPLICATION_VND_OIPF_USERPROFILE_XML                                                 = 'application/vnd.oipf.userprofile+xml',

	/**
	 * Represents the content type `application/vnd.olpc-sugar`.
	 */
	APPLICATION_VND_OLPC_SUGAR                                                           = 'application/vnd.olpc-sugar',

	/**
	 * Represents the content type `application/vnd.oma-scws-config`.
	 */
	APPLICATION_VND_OMA_SCWS_CONFIG                                                      = 'application/vnd.oma-scws-config',

	/**
	 * Represents the content type `application/vnd.oma-scws-http-request`.
	 */
	APPLICATION_VND_OMA_SCWS_HTTP_REQUEST                                                = 'application/vnd.oma-scws-http-request',

	/**
	 * Represents the content type `application/vnd.oma-scws-http-response`.
	 */
	APPLICATION_VND_OMA_SCWS_HTTP_RESPONSE                                               = 'application/vnd.oma-scws-http-response',

	/**
	 * Represents the content type `application/vnd.oma.bcast.associated-procedure-parameter+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_ASSOCIATED_PROCEDURE_PARAMETER_XML                         = 'application/vnd.oma.bcast.associated-procedure-parameter+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.drm-trigger+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_DRM_TRIGGER_XML                                            = 'application/vnd.oma.bcast.drm-trigger+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.imd+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_IMD_XML                                                    = 'application/vnd.oma.bcast.imd+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.ltkm`.
	 */
	APPLICATION_VND_OMA_BCAST_LTKM                                                       = 'application/vnd.oma.bcast.ltkm',

	/**
	 * Represents the content type `application/vnd.oma.bcast.notification+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_NOTIFICATION_XML                                           = 'application/vnd.oma.bcast.notification+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.provisioningtrigger`.
	 */
	APPLICATION_VND_OMA_BCAST_PROVISIONINGTRIGGER                                        = 'application/vnd.oma.bcast.provisioningtrigger',

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgboot`.
	 */
	APPLICATION_VND_OMA_BCAST_SGBOOT                                                     = 'application/vnd.oma.bcast.sgboot',

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgdd+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_SGDD_XML                                                   = 'application/vnd.oma.bcast.sgdd+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgdu`.
	 */
	APPLICATION_VND_OMA_BCAST_SGDU                                                       = 'application/vnd.oma.bcast.sgdu',

	/**
	 * Represents the content type `application/vnd.oma.bcast.simple-symbol-container`.
	 */
	APPLICATION_VND_OMA_BCAST_SIMPLE_SYMBOL_CONTAINER                                    = 'application/vnd.oma.bcast.simple-symbol-container',

	/**
	 * Represents the content type `application/vnd.oma.bcast.smartcard-trigger+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_SMARTCARD_TRIGGER_XML                                      = 'application/vnd.oma.bcast.smartcard-trigger+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.sprov+xml`.
	 */
	APPLICATION_VND_OMA_BCAST_SPROV_XML                                                  = 'application/vnd.oma.bcast.sprov+xml',

	/**
	 * Represents the content type `application/vnd.oma.bcast.stkm`.
	 */
	APPLICATION_VND_OMA_BCAST_STKM                                                       = 'application/vnd.oma.bcast.stkm',

	/**
	 * Represents the content type `application/vnd.oma.cab-address-book+xml`.
	 */
	APPLICATION_VND_OMA_CAB_ADDRESS_BOOK_XML                                             = 'application/vnd.oma.cab-address-book+xml',

	/**
	 * Represents the content type `application/vnd.oma.cab-feature-handler+xml`.
	 */
	APPLICATION_VND_OMA_CAB_FEATURE_HANDLER_XML                                          = 'application/vnd.oma.cab-feature-handler+xml',

	/**
	 * Represents the content type `application/vnd.oma.cab-pcc+xml`.
	 */
	APPLICATION_VND_OMA_CAB_PCC_XML                                                      = 'application/vnd.oma.cab-pcc+xml',

	/**
	 * Represents the content type `application/vnd.oma.cab-subs-invite+xml`.
	 */
	APPLICATION_VND_OMA_CAB_SUBS_INVITE_XML                                              = 'application/vnd.oma.cab-subs-invite+xml',

	/**
	 * Represents the content type `application/vnd.oma.cab-user-prefs+xml`.
	 */
	APPLICATION_VND_OMA_CAB_USER_PREFS_XML                                               = 'application/vnd.oma.cab-user-prefs+xml',

	/**
	 * Represents the content type `application/vnd.oma.dcd`.
	 */
	APPLICATION_VND_OMA_DCD                                                              = 'application/vnd.oma.dcd',

	/**
	 * Represents the content type `application/vnd.oma.dcdc`.
	 */
	APPLICATION_VND_OMA_DCDC                                                             = 'application/vnd.oma.dcdc',

	/**
	 * Represents the content type `application/vnd.oma.dd2+xml`.
	 */
	APPLICATION_VND_OMA_DD2_XML                                                          = 'application/vnd.oma.dd2+xml',

	/**
	 * Represents the content type `application/vnd.oma.drm.risd+xml`.
	 */
	APPLICATION_VND_OMA_DRM_RISD_XML                                                     = 'application/vnd.oma.drm.risd+xml',

	/**
	 * Represents the content type `application/vnd.oma.group-usage-list+xml`.
	 */
	APPLICATION_VND_OMA_GROUP_USAGE_LIST_XML                                             = 'application/vnd.oma.group-usage-list+xml',

	/**
	 * Represents the content type `application/vnd.oma.lwm2m+json`.
	 */
	APPLICATION_VND_OMA_LWM2M_JSON                                                       = 'application/vnd.oma.lwm2m+json',

	/**
	 * Represents the content type `application/vnd.oma.lwm2m+tlv`.
	 */
	APPLICATION_VND_OMA_LWM2M_TLV                                                        = 'application/vnd.oma.lwm2m+tlv',

	/**
	 * Represents the content type `application/vnd.oma.pal+xml`.
	 */
	APPLICATION_VND_OMA_PAL_XML                                                          = 'application/vnd.oma.pal+xml',

	/**
	 * Represents the content type `application/vnd.oma.poc.detailed-progress-report+xml`.
	 */
	APPLICATION_VND_OMA_POC_DETAILED_PROGRESS_REPORT_XML                                 = 'application/vnd.oma.poc.detailed-progress-report+xml',

	/**
	 * Represents the content type `application/vnd.oma.poc.final-report+xml`.
	 */
	APPLICATION_VND_OMA_POC_FINAL_REPORT_XML                                             = 'application/vnd.oma.poc.final-report+xml',

	/**
	 * Represents the content type `application/vnd.oma.poc.groups+xml`.
	 */
	APPLICATION_VND_OMA_POC_GROUPS_XML                                                   = 'application/vnd.oma.poc.groups+xml',

	/**
	 * Represents the content type `application/vnd.oma.poc.invocation-descriptor+xml`.
	 */
	APPLICATION_VND_OMA_POC_INVOCATION_DESCRIPTOR_XML                                    = 'application/vnd.oma.poc.invocation-descriptor+xml',

	/**
	 * Represents the content type `application/vnd.oma.poc.optimized-progress-report+xml`.
	 */
	APPLICATION_VND_OMA_POC_OPTIMIZED_PROGRESS_REPORT_XML                                = 'application/vnd.oma.poc.optimized-progress-report+xml',

	/**
	 * Represents the content type `application/vnd.oma.push`.
	 */
	APPLICATION_VND_OMA_PUSH                                                             = 'application/vnd.oma.push',

	/**
	 * Represents the content type `application/vnd.oma.scidm.messages+xml`.
	 */
	APPLICATION_VND_OMA_SCIDM_MESSAGES_XML                                               = 'application/vnd.oma.scidm.messages+xml',

	/**
	 * Represents the content type `application/vnd.oma.xcap-directory+xml`.
	 */
	APPLICATION_VND_OMA_XCAP_DIRECTORY_XML                                               = 'application/vnd.oma.xcap-directory+xml',

	/**
	 * Represents the content type `application/vnd.omads-email+xml`.
	 */
	APPLICATION_VND_OMADS_EMAIL_XML                                                      = 'application/vnd.omads-email+xml',

	/**
	 * Represents the content type `application/vnd.omads-file+xml`.
	 */
	APPLICATION_VND_OMADS_FILE_XML                                                       = 'application/vnd.omads-file+xml',

	/**
	 * Represents the content type `application/vnd.omads-folder+xml`.
	 */
	APPLICATION_VND_OMADS_FOLDER_XML                                                     = 'application/vnd.omads-folder+xml',

	/**
	 * Represents the content type `application/vnd.omaloc-supl-init`.
	 */
	APPLICATION_VND_OMALOC_SUPL_INIT                                                     = 'application/vnd.omaloc-supl-init',

	/**
	 * Represents the content type `application/vnd.onepager`.
	 */
	APPLICATION_VND_ONEPAGER                                                             = 'application/vnd.onepager',

	/**
	 * Represents the content type `application/vnd.openblox.game+xml`.
	 */
	APPLICATION_VND_OPENBLOX_GAME_XML                                                    = 'application/vnd.openblox.game+xml',

	/**
	 * Represents the content type `application/vnd.openblox.game-binary`.
	 */
	APPLICATION_VND_OPENBLOX_GAME_BINARY                                                 = 'application/vnd.openblox.game-binary',

	/**
	 * Represents the content type `application/vnd.openeye.oeb`.
	 */
	APPLICATION_VND_OPENEYE_OEB                                                          = 'application/vnd.openeye.oeb',

	/**
	 * Represents the content type `application/vnd.openofficeorg.extension`.
	 */
	APPLICATION_VND_OPENOFFICEORG_EXTENSION                                              = 'application/vnd.openofficeorg.extension',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.custom-properties+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOM_PROPERTIES_XML                  = 'application/vnd.openxmlformats-officedocument.custom-properties+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.customxmlproperties+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOMXMLPROPERTIES_XML                = 'application/vnd.openxmlformats-officedocument.customxmlproperties+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawing+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWING_XML                            = 'application/vnd.openxmlformats-officedocument.drawing+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.chart+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHART_XML                    = 'application/vnd.openxmlformats-officedocument.drawingml.chart+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHARTSHAPES_XML              = 'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMCOLORS_XML            = 'application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMDATA_XML              = 'application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMLAYOUT_XML            = 'application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMSTYLE_XML             = 'application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.extended-properties+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_EXTENDED_PROPERTIES_XML                = 'application/vnd.openxmlformats-officedocument.extended-properties+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTAUTHORS_XML      = 'application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.comments+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTS_XML            = 'application/vnd.openxmlformats-officedocument.presentationml.comments+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_HANDOUTMASTER_XML       = 'application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESMASTER_XML         = 'application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESSLIDE_XML          = 'application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presentation`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION            = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION_MAIN_XML   = 'application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presprops+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESPROPS_XML           = 'application/vnd.openxmlformats-officedocument.presentationml.presprops+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slide`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE                   = 'application/vnd.openxmlformats-officedocument.presentationml.slide',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slide+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE_XML               = 'application/vnd.openxmlformats-officedocument.presentationml.slide+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDELAYOUT_XML         = 'application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEMASTER_XML         = 'application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideshow`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW               = 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW_MAIN_XML      = 'application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEUPDATEINFO_XML     = 'application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TABLESTYLES_XML         = 'application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.tags+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TAGS_XML                = 'application/vnd.openxmlformats-officedocument.presentationml.tags+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.template`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE                = 'application/vnd.openxmlformats-officedocument.presentationml.template',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.template.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE_MAIN_XML       = 'application/vnd.openxmlformats-officedocument.presentationml.template.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_VIEWPROPS_XML           = 'application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CALCCHAIN_XML            = 'application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CHARTSHEET_XML           = 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_COMMENTS_XML             = 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CONNECTIONS_XML          = 'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_DIALOGSHEET_XML          = 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_EXTERNALLINK_XML         = 'application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHEDEFINITION_XML = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHERECORDS_XML    = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTTABLE_XML           = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_QUERYTABLE_XML           = 'application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONHEADERS_XML      = 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONLOG_XML          = 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHAREDSTRINGS_XML        = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET                    = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET_MAIN_XML           = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEETMETADATA_XML        = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_STYLES_XML               = 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLE_XML                = 'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLESINGLECELLS_XML     = 'application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.template`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE                 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE_MAIN_XML        = 'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_USERNAMES_XML            = 'application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_VOLATILEDEPENDENCIES_XML = 'application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_WORKSHEET_XML            = 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.theme+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEME_XML                              = 'application/vnd.openxmlformats-officedocument.theme+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.themeoverride+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEMEOVERRIDE_XML                      = 'application/vnd.openxmlformats-officedocument.themeoverride+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.vmldrawing`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_VMLDRAWING                             = 'application/vnd.openxmlformats-officedocument.vmldrawing',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_COMMENTS_XML          = 'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT              = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_GLOSSARY_XML = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_MAIN_XML     = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_ENDNOTES_XML          = 'application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FONTTABLE_XML         = 'application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTER_XML            = 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTNOTES_XML         = 'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_NUMBERING_XML         = 'application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_SETTINGS_XML          = 'application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_STYLES_XML            = 'application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.template`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE              = 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE_MAIN_XML     = 'application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_WEBSETTINGS_XML       = 'application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.core-properties+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_PACKAGE_CORE_PROPERTIES_XML                           = 'application/vnd.openxmlformats-package.core-properties+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_PACKAGE_DIGITAL_SIGNATURE_XMLSIGNATURE_XML            = 'application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml',

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.relationships+xml`.
	 */
	APPLICATION_VND_OPENXMLFORMATS_PACKAGE_RELATIONSHIPS_XML                             = 'application/vnd.openxmlformats-package.relationships+xml',

	/**
	 * Represents the content type `application/vnd.oracle.resource+json`.
	 */
	APPLICATION_VND_ORACLE_RESOURCE_JSON                                                 = 'application/vnd.oracle.resource+json',

	/**
	 * Represents the content type `application/vnd.orange.indata`.
	 */
	APPLICATION_VND_ORANGE_INDATA                                                        = 'application/vnd.orange.indata',

	/**
	 * Represents the content type `application/vnd.osa.netdeploy`.
	 */
	APPLICATION_VND_OSA_NETDEPLOY                                                        = 'application/vnd.osa.netdeploy',

	/**
	 * Represents the content type `application/vnd.osgeo.mapguide.package`.
	 */
	APPLICATION_VND_OSGEO_MAPGUIDE_PACKAGE                                               = 'application/vnd.osgeo.mapguide.package',

	/**
	 * Represents the content type `application/vnd.osgi.bundle`.
	 */
	APPLICATION_VND_OSGI_BUNDLE                                                          = 'application/vnd.osgi.bundle',

	/**
	 * Represents the content type `application/vnd.osgi.dp`.
	 */
	APPLICATION_VND_OSGI_DP                                                              = 'application/vnd.osgi.dp',

	/**
	 * Represents the content type `application/vnd.osgi.subsystem`.
	 */
	APPLICATION_VND_OSGI_SUBSYSTEM                                                       = 'application/vnd.osgi.subsystem',

	/**
	 * Represents the content type `application/vnd.otps.ct-kip+xml`.
	 */
	APPLICATION_VND_OTPS_CT_KIP_XML                                                      = 'application/vnd.otps.ct-kip+xml',

	/**
	 * Represents the content type `application/vnd.oxli.countgraph`.
	 */
	APPLICATION_VND_OXLI_COUNTGRAPH                                                      = 'application/vnd.oxli.countgraph',

	/**
	 * Represents the content type `application/vnd.pagerduty+json`.
	 */
	APPLICATION_VND_PAGERDUTY_JSON                                                       = 'application/vnd.pagerduty+json',

	/**
	 * Represents the content type `application/vnd.palm`.
	 */
	APPLICATION_VND_PALM                                                                 = 'application/vnd.palm',

	/**
	 * Represents the content type `application/vnd.panoply`.
	 */
	APPLICATION_VND_PANOPLY                                                              = 'application/vnd.panoply',

	/**
	 * Represents the content type `application/vnd.paos.xml`.
	 */
	APPLICATION_VND_PAOS_XML                                                             = 'application/vnd.paos.xml',

	/**
	 * Represents the content type `application/vnd.pawaafile`.
	 */
	APPLICATION_VND_PAWAAFILE                                                            = 'application/vnd.pawaafile',

	/**
	 * Represents the content type `application/vnd.pcos`.
	 */
	APPLICATION_VND_PCOS                                                                 = 'application/vnd.pcos',

	/**
	 * Represents the content type `application/vnd.pg.format`.
	 */
	APPLICATION_VND_PG_FORMAT                                                            = 'application/vnd.pg.format',

	/**
	 * Represents the content type `application/vnd.pg.osasli`.
	 */
	APPLICATION_VND_PG_OSASLI                                                            = 'application/vnd.pg.osasli',

	/**
	 * Represents the content type `application/vnd.piaccess.application-licence`.
	 */
	APPLICATION_VND_PIACCESS_APPLICATION_LICENCE                                         = 'application/vnd.piaccess.application-licence',

	/**
	 * Represents the content type `application/vnd.picsel`.
	 */
	APPLICATION_VND_PICSEL                                                               = 'application/vnd.picsel',

	/**
	 * Represents the content type `application/vnd.pmi.widget`.
	 */
	APPLICATION_VND_PMI_WIDGET                                                           = 'application/vnd.pmi.widget',

	/**
	 * Represents the content type `application/vnd.poc.group-advertisement+xml`.
	 */
	APPLICATION_VND_POC_GROUP_ADVERTISEMENT_XML                                          = 'application/vnd.poc.group-advertisement+xml',

	/**
	 * Represents the content type `application/vnd.pocketlearn`.
	 */
	APPLICATION_VND_POCKETLEARN                                                          = 'application/vnd.pocketlearn',

	/**
	 * Represents the content type `application/vnd.powerbuilder6`.
	 */
	APPLICATION_VND_POWERBUILDER6                                                        = 'application/vnd.powerbuilder6',

	/**
	 * Represents the content type `application/vnd.powerbuilder6-s`.
	 */
	APPLICATION_VND_POWERBUILDER6_S                                                      = 'application/vnd.powerbuilder6-s',

	/**
	 * Represents the content type `application/vnd.powerbuilder7`.
	 */
	APPLICATION_VND_POWERBUILDER7                                                        = 'application/vnd.powerbuilder7',

	/**
	 * Represents the content type `application/vnd.powerbuilder7-s`.
	 */
	APPLICATION_VND_POWERBUILDER7_S                                                      = 'application/vnd.powerbuilder7-s',

	/**
	 * Represents the content type `application/vnd.powerbuilder75`.
	 */
	APPLICATION_VND_POWERBUILDER75                                                       = 'application/vnd.powerbuilder75',

	/**
	 * Represents the content type `application/vnd.powerbuilder75-s`.
	 */
	APPLICATION_VND_POWERBUILDER75_S                                                     = 'application/vnd.powerbuilder75-s',

	/**
	 * Represents the content type `application/vnd.preminet`.
	 */
	APPLICATION_VND_PREMINET                                                             = 'application/vnd.preminet',

	/**
	 * Represents the content type `application/vnd.previewsystems.box`.
	 */
	APPLICATION_VND_PREVIEWSYSTEMS_BOX                                                   = 'application/vnd.previewsystems.box',

	/**
	 * Represents the content type `application/vnd.proteus.magazine`.
	 */
	APPLICATION_VND_PROTEUS_MAGAZINE                                                     = 'application/vnd.proteus.magazine',

	/**
	 * Represents the content type `application/vnd.publishare-delta-tree`.
	 */
	APPLICATION_VND_PUBLISHARE_DELTA_TREE                                                = 'application/vnd.publishare-delta-tree',

	/**
	 * Represents the content type `application/vnd.pvi.ptid1`.
	 */
	APPLICATION_VND_PVI_PTID1                                                            = 'application/vnd.pvi.ptid1',

	/**
	 * Represents the content type `application/vnd.pwg-multiplexed`.
	 */
	APPLICATION_VND_PWG_MULTIPLEXED                                                      = 'application/vnd.pwg-multiplexed',

	/**
	 * Represents the content type `application/vnd.pwg-xhtml-print+xml`.
	 */
	APPLICATION_VND_PWG_XHTML_PRINT_XML                                                  = 'application/vnd.pwg-xhtml-print+xml',

	/**
	 * Represents the content type `application/vnd.qualcomm.brew-app-res`.
	 */
	APPLICATION_VND_QUALCOMM_BREW_APP_RES                                                = 'application/vnd.qualcomm.brew-app-res',

	/**
	 * Represents the content type `application/vnd.quarantainenet`.
	 */
	APPLICATION_VND_QUARANTAINENET                                                       = 'application/vnd.quarantainenet',

	/**
	 * Represents the content type `application/vnd.quark.quarkxpress`.
	 */
	APPLICATION_VND_QUARK_QUARKXPRESS                                                    = 'application/vnd.quark.quarkxpress',

	/**
	 * Represents the content type `application/vnd.quobject-quoxdocument`.
	 */
	APPLICATION_VND_QUOBJECT_QUOXDOCUMENT                                                = 'application/vnd.quobject-quoxdocument',

	/**
	 * Represents the content type `application/vnd.radisys.moml+xml`.
	 */
	APPLICATION_VND_RADISYS_MOML_XML                                                     = 'application/vnd.radisys.moml+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_XML                                                     = 'application/vnd.radisys.msml+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_AUDIT_XML                                               = 'application/vnd.radisys.msml-audit+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-conf+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_AUDIT_CONF_XML                                          = 'application/vnd.radisys.msml-audit-conf+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-conn+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_AUDIT_CONN_XML                                          = 'application/vnd.radisys.msml-audit-conn+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-dialog+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_AUDIT_DIALOG_XML                                        = 'application/vnd.radisys.msml-audit-dialog+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-stream+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_AUDIT_STREAM_XML                                        = 'application/vnd.radisys.msml-audit-stream+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-conf+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_CONF_XML                                                = 'application/vnd.radisys.msml-conf+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_XML                                              = 'application/vnd.radisys.msml-dialog+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-base+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_BASE_XML                                         = 'application/vnd.radisys.msml-dialog-base+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-fax-detect+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_DETECT_XML                                   = 'application/vnd.radisys.msml-dialog-fax-detect+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-fax-sendrecv+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_SENDRECV_XML                                 = 'application/vnd.radisys.msml-dialog-fax-sendrecv+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-group+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_GROUP_XML                                        = 'application/vnd.radisys.msml-dialog-group+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-speech+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_SPEECH_XML                                       = 'application/vnd.radisys.msml-dialog-speech+xml',

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-transform+xml`.
	 */
	APPLICATION_VND_RADISYS_MSML_DIALOG_TRANSFORM_XML                                    = 'application/vnd.radisys.msml-dialog-transform+xml',

	/**
	 * Represents the content type `application/vnd.rainstor.data`.
	 */
	APPLICATION_VND_RAINSTOR_DATA                                                        = 'application/vnd.rainstor.data',

	/**
	 * Represents the content type `application/vnd.rapid`.
	 */
	APPLICATION_VND_RAPID                                                                = 'application/vnd.rapid',

	/**
	 * Represents the content type `application/vnd.rar`.
	 */
	APPLICATION_VND_RAR                                                                  = 'application/vnd.rar',

	/**
	 * Represents the content type `application/vnd.realvnc.bed`.
	 */
	APPLICATION_VND_REALVNC_BED                                                          = 'application/vnd.realvnc.bed',

	/**
	 * Represents the content type `application/vnd.recordare.musicxml`.
	 */
	APPLICATION_VND_RECORDARE_MUSICXML                                                   = 'application/vnd.recordare.musicxml',

	/**
	 * Represents the content type `application/vnd.recordare.musicxml+xml`.
	 */
	APPLICATION_VND_RECORDARE_MUSICXML_XML                                               = 'application/vnd.recordare.musicxml+xml',

	/**
	 * Represents the content type `application/vnd.renlearn.rlprint`.
	 */
	APPLICATION_VND_RENLEARN_RLPRINT                                                     = 'application/vnd.renlearn.rlprint',

	/**
	 * Represents the content type `application/vnd.rig.cryptonote`.
	 */
	APPLICATION_VND_RIG_CRYPTONOTE                                                       = 'application/vnd.rig.cryptonote',

	/**
	 * Represents the content type `application/vnd.rim.cod`.
	 */
	APPLICATION_VND_RIM_COD                                                              = 'application/vnd.rim.cod',

	/**
	 * Represents the content type `application/vnd.rn-realmedia`.
	 */
	APPLICATION_VND_RN_REALMEDIA                                                         = 'application/vnd.rn-realmedia',

	/**
	 * Represents the content type `application/vnd.rn-realmedia-vbr`.
	 */
	APPLICATION_VND_RN_REALMEDIA_VBR                                                     = 'application/vnd.rn-realmedia-vbr',

	/**
	 * Represents the content type `application/vnd.route66.link66+xml`.
	 */
	APPLICATION_VND_ROUTE66_LINK66_XML                                                   = 'application/vnd.route66.link66+xml',

	/**
	 * Represents the content type `application/vnd.rs-274x`.
	 */
	APPLICATION_VND_RS_274X                                                              = 'application/vnd.rs-274x',

	/**
	 * Represents the content type `application/vnd.ruckus.download`.
	 */
	APPLICATION_VND_RUCKUS_DOWNLOAD                                                      = 'application/vnd.ruckus.download',

	/**
	 * Represents the content type `application/vnd.s3sms`.
	 */
	APPLICATION_VND_S3SMS                                                                = 'application/vnd.s3sms',

	/**
	 * Represents the content type `application/vnd.sailingtracker.track`.
	 */
	APPLICATION_VND_SAILINGTRACKER_TRACK                                                 = 'application/vnd.sailingtracker.track',

	/**
	 * Represents the content type `application/vnd.sbm.cid`.
	 */
	APPLICATION_VND_SBM_CID                                                              = 'application/vnd.sbm.cid',

	/**
	 * Represents the content type `application/vnd.sbm.mid2`.
	 */
	APPLICATION_VND_SBM_MID2                                                             = 'application/vnd.sbm.mid2',

	/**
	 * Represents the content type `application/vnd.scribus`.
	 */
	APPLICATION_VND_SCRIBUS                                                              = 'application/vnd.scribus',

	/**
	 * Represents the content type `application/vnd.sealed.3df`.
	 */
	APPLICATION_VND_SEALED_3DF                                                           = 'application/vnd.sealed.3df',

	/**
	 * Represents the content type `application/vnd.sealed.csf`.
	 */
	APPLICATION_VND_SEALED_CSF                                                           = 'application/vnd.sealed.csf',

	/**
	 * Represents the content type `application/vnd.sealed.doc`.
	 */
	APPLICATION_VND_SEALED_DOC                                                           = 'application/vnd.sealed.doc',

	/**
	 * Represents the content type `application/vnd.sealed.eml`.
	 */
	APPLICATION_VND_SEALED_EML                                                           = 'application/vnd.sealed.eml',

	/**
	 * Represents the content type `application/vnd.sealed.mht`.
	 */
	APPLICATION_VND_SEALED_MHT                                                           = 'application/vnd.sealed.mht',

	/**
	 * Represents the content type `application/vnd.sealed.net`.
	 */
	APPLICATION_VND_SEALED_NET                                                           = 'application/vnd.sealed.net',

	/**
	 * Represents the content type `application/vnd.sealed.ppt`.
	 */
	APPLICATION_VND_SEALED_PPT                                                           = 'application/vnd.sealed.ppt',

	/**
	 * Represents the content type `application/vnd.sealed.tiff`.
	 */
	APPLICATION_VND_SEALED_TIFF                                                          = 'application/vnd.sealed.tiff',

	/**
	 * Represents the content type `application/vnd.sealed.xls`.
	 */
	APPLICATION_VND_SEALED_XLS                                                           = 'application/vnd.sealed.xls',

	/**
	 * Represents the content type `application/vnd.sealedmedia.softseal.html`.
	 */
	APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_HTML                                            = 'application/vnd.sealedmedia.softseal.html',

	/**
	 * Represents the content type `application/vnd.sealedmedia.softseal.pdf`.
	 */
	APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_PDF                                             = 'application/vnd.sealedmedia.softseal.pdf',

	/**
	 * Represents the content type `application/vnd.seemail`.
	 */
	APPLICATION_VND_SEEMAIL                                                              = 'application/vnd.seemail',

	/**
	 * Represents the content type `application/vnd.sema`.
	 */
	APPLICATION_VND_SEMA                                                                 = 'application/vnd.sema',

	/**
	 * Represents the content type `application/vnd.semd`.
	 */
	APPLICATION_VND_SEMD                                                                 = 'application/vnd.semd',

	/**
	 * Represents the content type `application/vnd.semf`.
	 */
	APPLICATION_VND_SEMF                                                                 = 'application/vnd.semf',

	/**
	 * Represents the content type `application/vnd.shana.informed.formdata`.
	 */
	APPLICATION_VND_SHANA_INFORMED_FORMDATA                                              = 'application/vnd.shana.informed.formdata',

	/**
	 * Represents the content type `application/vnd.shana.informed.formtemplate`.
	 */
	APPLICATION_VND_SHANA_INFORMED_FORMTEMPLATE                                          = 'application/vnd.shana.informed.formtemplate',

	/**
	 * Represents the content type `application/vnd.shana.informed.interchange`.
	 */
	APPLICATION_VND_SHANA_INFORMED_INTERCHANGE                                           = 'application/vnd.shana.informed.interchange',

	/**
	 * Represents the content type `application/vnd.shana.informed.package`.
	 */
	APPLICATION_VND_SHANA_INFORMED_PACKAGE                                               = 'application/vnd.shana.informed.package',

	/**
	 * Represents the content type `application/vnd.simtech-mindmapper`.
	 */
	APPLICATION_VND_SIMTECH_MINDMAPPER                                                   = 'application/vnd.simtech-mindmapper',

	/**
	 * Represents the content type `application/vnd.siren+json`.
	 */
	APPLICATION_VND_SIREN_JSON                                                           = 'application/vnd.siren+json',

	/**
	 * Represents the content type `application/vnd.smaf`.
	 */
	APPLICATION_VND_SMAF                                                                 = 'application/vnd.smaf',

	/**
	 * Represents the content type `application/vnd.smart.notebook`.
	 */
	APPLICATION_VND_SMART_NOTEBOOK                                                       = 'application/vnd.smart.notebook',

	/**
	 * Represents the content type `application/vnd.smart.teacher`.
	 */
	APPLICATION_VND_SMART_TEACHER                                                        = 'application/vnd.smart.teacher',

	/**
	 * Represents the content type `application/vnd.software602.filler.form+xml`.
	 */
	APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML                                          = 'application/vnd.software602.filler.form+xml',

	/**
	 * Represents the content type `application/vnd.software602.filler.form-xml-zip`.
	 */
	APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML_ZIP                                      = 'application/vnd.software602.filler.form-xml-zip',

	/**
	 * Represents the content type `application/vnd.solent.sdkm+xml`.
	 */
	APPLICATION_VND_SOLENT_SDKM_XML                                                      = 'application/vnd.solent.sdkm+xml',

	/**
	 * Represents the content type `application/vnd.spotfire.dxp`.
	 */
	APPLICATION_VND_SPOTFIRE_DXP                                                         = 'application/vnd.spotfire.dxp',

	/**
	 * Represents the content type `application/vnd.spotfire.sfs`.
	 */
	APPLICATION_VND_SPOTFIRE_SFS                                                         = 'application/vnd.spotfire.sfs',

	/**
	 * Represents the content type `application/vnd.sss-cod`.
	 */
	APPLICATION_VND_SSS_COD                                                              = 'application/vnd.sss-cod',

	/**
	 * Represents the content type `application/vnd.sss-dtf`.
	 */
	APPLICATION_VND_SSS_DTF                                                              = 'application/vnd.sss-dtf',

	/**
	 * Represents the content type `application/vnd.sss-ntf`.
	 */
	APPLICATION_VND_SSS_NTF                                                              = 'application/vnd.sss-ntf',

	/**
	 * Represents the content type `application/vnd.stardivision.calc`.
	 */
	APPLICATION_VND_STARDIVISION_CALC                                                    = 'application/vnd.stardivision.calc',

	/**
	 * Represents the content type `application/vnd.stardivision.draw`.
	 */
	APPLICATION_VND_STARDIVISION_DRAW                                                    = 'application/vnd.stardivision.draw',

	/**
	 * Represents the content type `application/vnd.stardivision.impress`.
	 */
	APPLICATION_VND_STARDIVISION_IMPRESS                                                 = 'application/vnd.stardivision.impress',

	/**
	 * Represents the content type `application/vnd.stardivision.math`.
	 */
	APPLICATION_VND_STARDIVISION_MATH                                                    = 'application/vnd.stardivision.math',

	/**
	 * Represents the content type `application/vnd.stardivision.writer`.
	 */
	APPLICATION_VND_STARDIVISION_WRITER                                                  = 'application/vnd.stardivision.writer',

	/**
	 * Represents the content type `application/vnd.stardivision.writer-global`.
	 */
	APPLICATION_VND_STARDIVISION_WRITER_GLOBAL                                           = 'application/vnd.stardivision.writer-global',

	/**
	 * Represents the content type `application/vnd.stepmania.package`.
	 */
	APPLICATION_VND_STEPMANIA_PACKAGE                                                    = 'application/vnd.stepmania.package',

	/**
	 * Represents the content type `application/vnd.stepmania.stepchart`.
	 */
	APPLICATION_VND_STEPMANIA_STEPCHART                                                  = 'application/vnd.stepmania.stepchart',

	/**
	 * Represents the content type `application/vnd.street-stream`.
	 */
	APPLICATION_VND_STREET_STREAM                                                        = 'application/vnd.street-stream',

	/**
	 * Represents the content type `application/vnd.sun.wadl+xml`.
	 */
	APPLICATION_VND_SUN_WADL_XML                                                         = 'application/vnd.sun.wadl+xml',

	/**
	 * Represents the content type `application/vnd.sun.xml.calc`.
	 */
	APPLICATION_VND_SUN_XML_CALC                                                         = 'application/vnd.sun.xml.calc',

	/**
	 * Represents the content type `application/vnd.sun.xml.calc.template`.
	 */
	APPLICATION_VND_SUN_XML_CALC_TEMPLATE                                                = 'application/vnd.sun.xml.calc.template',

	/**
	 * Represents the content type `application/vnd.sun.xml.draw`.
	 */
	APPLICATION_VND_SUN_XML_DRAW                                                         = 'application/vnd.sun.xml.draw',

	/**
	 * Represents the content type `application/vnd.sun.xml.draw.template`.
	 */
	APPLICATION_VND_SUN_XML_DRAW_TEMPLATE                                                = 'application/vnd.sun.xml.draw.template',

	/**
	 * Represents the content type `application/vnd.sun.xml.impress`.
	 */
	APPLICATION_VND_SUN_XML_IMPRESS                                                      = 'application/vnd.sun.xml.impress',

	/**
	 * Represents the content type `application/vnd.sun.xml.impress.template`.
	 */
	APPLICATION_VND_SUN_XML_IMPRESS_TEMPLATE                                             = 'application/vnd.sun.xml.impress.template',

	/**
	 * Represents the content type `application/vnd.sun.xml.math`.
	 */
	APPLICATION_VND_SUN_XML_MATH                                                         = 'application/vnd.sun.xml.math',

	/**
	 * Represents the content type `application/vnd.sun.xml.writer`.
	 */
	APPLICATION_VND_SUN_XML_WRITER                                                       = 'application/vnd.sun.xml.writer',

	/**
	 * Represents the content type `application/vnd.sun.xml.writer.global`.
	 */
	APPLICATION_VND_SUN_XML_WRITER_GLOBAL                                                = 'application/vnd.sun.xml.writer.global',

	/**
	 * Represents the content type `application/vnd.sun.xml.writer.template`.
	 */
	APPLICATION_VND_SUN_XML_WRITER_TEMPLATE                                              = 'application/vnd.sun.xml.writer.template',

	/**
	 * Represents the content type `application/vnd.sus-calendar`.
	 */
	APPLICATION_VND_SUS_CALENDAR                                                         = 'application/vnd.sus-calendar',

	/**
	 * Represents the content type `application/vnd.svd`.
	 */
	APPLICATION_VND_SVD                                                                  = 'application/vnd.svd',

	/**
	 * Represents the content type `application/vnd.swiftview-ics`.
	 */
	APPLICATION_VND_SWIFTVIEW_ICS                                                        = 'application/vnd.swiftview-ics',

	/**
	 * Represents the content type `application/vnd.symbian.install`.
	 */
	APPLICATION_VND_SYMBIAN_INSTALL                                                      = 'application/vnd.symbian.install',

	/**
	 * Represents the content type `application/vnd.syncml+xml`.
	 */
	APPLICATION_VND_SYNCML_XML                                                           = 'application/vnd.syncml+xml',

	/**
	 * Represents the content type `application/vnd.syncml.dm+wbxml`.
	 */
	APPLICATION_VND_SYNCML_DM_WBXML                                                      = 'application/vnd.syncml.dm+wbxml',

	/**
	 * Represents the content type `application/vnd.syncml.dm+xml`.
	 */
	APPLICATION_VND_SYNCML_DM_XML                                                        = 'application/vnd.syncml.dm+xml',

	/**
	 * Represents the content type `application/vnd.syncml.dm.notification`.
	 */
	APPLICATION_VND_SYNCML_DM_NOTIFICATION                                               = 'application/vnd.syncml.dm.notification',

	/**
	 * Represents the content type `application/vnd.syncml.dmddf+wbxml`.
	 */
	APPLICATION_VND_SYNCML_DMDDF_WBXML                                                   = 'application/vnd.syncml.dmddf+wbxml',

	/**
	 * Represents the content type `application/vnd.syncml.dmddf+xml`.
	 */
	APPLICATION_VND_SYNCML_DMDDF_XML                                                     = 'application/vnd.syncml.dmddf+xml',

	/**
	 * Represents the content type `application/vnd.syncml.dmtnds+wbxml`.
	 */
	APPLICATION_VND_SYNCML_DMTNDS_WBXML                                                  = 'application/vnd.syncml.dmtnds+wbxml',

	/**
	 * Represents the content type `application/vnd.syncml.dmtnds+xml`.
	 */
	APPLICATION_VND_SYNCML_DMTNDS_XML                                                    = 'application/vnd.syncml.dmtnds+xml',

	/**
	 * Represents the content type `application/vnd.syncml.ds.notification`.
	 */
	APPLICATION_VND_SYNCML_DS_NOTIFICATION                                               = 'application/vnd.syncml.ds.notification',

	/**
	 * Represents the content type `application/vnd.tao.intent-module-archive`.
	 */
	APPLICATION_VND_TAO_INTENT_MODULE_ARCHIVE                                            = 'application/vnd.tao.intent-module-archive',

	/**
	 * Represents the content type `application/vnd.tcpdump.pcap`.
	 */
	APPLICATION_VND_TCPDUMP_PCAP                                                         = 'application/vnd.tcpdump.pcap',

	/**
	 * Represents the content type `application/vnd.tmd.mediaflex.api+xml`.
	 */
	APPLICATION_VND_TMD_MEDIAFLEX_API_XML                                                = 'application/vnd.tmd.mediaflex.api+xml',

	/**
	 * Represents the content type `application/vnd.tml`.
	 */
	APPLICATION_VND_TML                                                                  = 'application/vnd.tml',

	/**
	 * Represents the content type `application/vnd.tmobile-livetv`.
	 */
	APPLICATION_VND_TMOBILE_LIVETV                                                       = 'application/vnd.tmobile-livetv',

	/**
	 * Represents the content type `application/vnd.trid.tpt`.
	 */
	APPLICATION_VND_TRID_TPT                                                             = 'application/vnd.trid.tpt',

	/**
	 * Represents the content type `application/vnd.triscape.mxs`.
	 */
	APPLICATION_VND_TRISCAPE_MXS                                                         = 'application/vnd.triscape.mxs',

	/**
	 * Represents the content type `application/vnd.trueapp`.
	 */
	APPLICATION_VND_TRUEAPP                                                              = 'application/vnd.trueapp',

	/**
	 * Represents the content type `application/vnd.truedoc`.
	 */
	APPLICATION_VND_TRUEDOC                                                              = 'application/vnd.truedoc',

	/**
	 * Represents the content type `application/vnd.ubisoft.webplayer`.
	 */
	APPLICATION_VND_UBISOFT_WEBPLAYER                                                    = 'application/vnd.ubisoft.webplayer',

	/**
	 * Represents the content type `application/vnd.ufdl`.
	 */
	APPLICATION_VND_UFDL                                                                 = 'application/vnd.ufdl',

	/**
	 * Represents the content type `application/vnd.uiq.theme`.
	 */
	APPLICATION_VND_UIQ_THEME                                                            = 'application/vnd.uiq.theme',

	/**
	 * Represents the content type `application/vnd.umajin`.
	 */
	APPLICATION_VND_UMAJIN                                                               = 'application/vnd.umajin',

	/**
	 * Represents the content type `application/vnd.unity`.
	 */
	APPLICATION_VND_UNITY                                                                = 'application/vnd.unity',

	/**
	 * Represents the content type `application/vnd.uoml+xml`.
	 */
	APPLICATION_VND_UOML_XML                                                             = 'application/vnd.uoml+xml',

	/**
	 * Represents the content type `application/vnd.uplanet.alert`.
	 */
	APPLICATION_VND_UPLANET_ALERT                                                        = 'application/vnd.uplanet.alert',

	/**
	 * Represents the content type `application/vnd.uplanet.alert-wbxml`.
	 */
	APPLICATION_VND_UPLANET_ALERT_WBXML                                                  = 'application/vnd.uplanet.alert-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.bearer-choice`.
	 */
	APPLICATION_VND_UPLANET_BEARER_CHOICE                                                = 'application/vnd.uplanet.bearer-choice',

	/**
	 * Represents the content type `application/vnd.uplanet.bearer-choice-wbxml`.
	 */
	APPLICATION_VND_UPLANET_BEARER_CHOICE_WBXML                                          = 'application/vnd.uplanet.bearer-choice-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.cacheop`.
	 */
	APPLICATION_VND_UPLANET_CACHEOP                                                      = 'application/vnd.uplanet.cacheop',

	/**
	 * Represents the content type `application/vnd.uplanet.cacheop-wbxml`.
	 */
	APPLICATION_VND_UPLANET_CACHEOP_WBXML                                                = 'application/vnd.uplanet.cacheop-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.channel`.
	 */
	APPLICATION_VND_UPLANET_CHANNEL                                                      = 'application/vnd.uplanet.channel',

	/**
	 * Represents the content type `application/vnd.uplanet.channel-wbxml`.
	 */
	APPLICATION_VND_UPLANET_CHANNEL_WBXML                                                = 'application/vnd.uplanet.channel-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.list`.
	 */
	APPLICATION_VND_UPLANET_LIST                                                         = 'application/vnd.uplanet.list',

	/**
	 * Represents the content type `application/vnd.uplanet.list-wbxml`.
	 */
	APPLICATION_VND_UPLANET_LIST_WBXML                                                   = 'application/vnd.uplanet.list-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.listcmd`.
	 */
	APPLICATION_VND_UPLANET_LISTCMD                                                      = 'application/vnd.uplanet.listcmd',

	/**
	 * Represents the content type `application/vnd.uplanet.listcmd-wbxml`.
	 */
	APPLICATION_VND_UPLANET_LISTCMD_WBXML                                                = 'application/vnd.uplanet.listcmd-wbxml',

	/**
	 * Represents the content type `application/vnd.uplanet.signal`.
	 */
	APPLICATION_VND_UPLANET_SIGNAL                                                       = 'application/vnd.uplanet.signal',

	/**
	 * Represents the content type `application/vnd.uri-map`.
	 */
	APPLICATION_VND_URI_MAP                                                              = 'application/vnd.uri-map',

	/**
	 * Represents the content type `application/vnd.valve.source.material`.
	 */
	APPLICATION_VND_VALVE_SOURCE_MATERIAL                                                = 'application/vnd.valve.source.material',

	/**
	 * Represents the content type `application/vnd.vcx`.
	 */
	APPLICATION_VND_VCX                                                                  = 'application/vnd.vcx',

	/**
	 * Represents the content type `application/vnd.vd-study`.
	 */
	APPLICATION_VND_VD_STUDY                                                             = 'application/vnd.vd-study',

	/**
	 * Represents the content type `application/vnd.vectorworks`.
	 */
	APPLICATION_VND_VECTORWORKS                                                          = 'application/vnd.vectorworks',

	/**
	 * Represents the content type `application/vnd.vel+json`.
	 */
	APPLICATION_VND_VEL_JSON                                                             = 'application/vnd.vel+json',

	/**
	 * Represents the content type `application/vnd.verimatrix.vcas`.
	 */
	APPLICATION_VND_VERIMATRIX_VCAS                                                      = 'application/vnd.verimatrix.vcas',

	/**
	 * Represents the content type `application/vnd.vidsoft.vidconference`.
	 */
	APPLICATION_VND_VIDSOFT_VIDCONFERENCE                                                = 'application/vnd.vidsoft.vidconference',

	/**
	 * Represents the content type `application/vnd.visio`.
	 */
	APPLICATION_VND_VISIO                                                                = 'application/vnd.visio',

	/**
	 * Represents the content type `application/vnd.visionary`.
	 */
	APPLICATION_VND_VISIONARY                                                            = 'application/vnd.visionary',

	/**
	 * Represents the content type `application/vnd.vividence.scriptfile`.
	 */
	APPLICATION_VND_VIVIDENCE_SCRIPTFILE                                                 = 'application/vnd.vividence.scriptfile',

	/**
	 * Represents the content type `application/vnd.vsf`.
	 */
	APPLICATION_VND_VSF                                                                  = 'application/vnd.vsf',

	/**
	 * Represents the content type `application/vnd.wap.sic`.
	 */
	APPLICATION_VND_WAP_SIC                                                              = 'application/vnd.wap.sic',

	/**
	 * Represents the content type `application/vnd.wap.slc`.
	 */
	APPLICATION_VND_WAP_SLC                                                              = 'application/vnd.wap.slc',

	/**
	 * Represents the content type `application/vnd.wap.wbxml`.
	 */
	APPLICATION_VND_WAP_WBXML                                                            = 'application/vnd.wap.wbxml',

	/**
	 * Represents the content type `application/vnd.wap.wmlc`.
	 */
	APPLICATION_VND_WAP_WMLC                                                             = 'application/vnd.wap.wmlc',

	/**
	 * Represents the content type `application/vnd.wap.wmlscriptc`.
	 */
	APPLICATION_VND_WAP_WMLSCRIPTC                                                       = 'application/vnd.wap.wmlscriptc',

	/**
	 * Represents the content type `application/vnd.webturbo`.
	 */
	APPLICATION_VND_WEBTURBO                                                             = 'application/vnd.webturbo',

	/**
	 * Represents the content type `application/vnd.wfa.p2p`.
	 */
	APPLICATION_VND_WFA_P2P                                                              = 'application/vnd.wfa.p2p',

	/**
	 * Represents the content type `application/vnd.wfa.wsc`.
	 */
	APPLICATION_VND_WFA_WSC                                                              = 'application/vnd.wfa.wsc',

	/**
	 * Represents the content type `application/vnd.windows.devicepairing`.
	 */
	APPLICATION_VND_WINDOWS_DEVICEPAIRING                                                = 'application/vnd.windows.devicepairing',

	/**
	 * Represents the content type `application/vnd.wmc`.
	 */
	APPLICATION_VND_WMC                                                                  = 'application/vnd.wmc',

	/**
	 * Represents the content type `application/vnd.wmf.bootstrap`.
	 */
	APPLICATION_VND_WMF_BOOTSTRAP                                                        = 'application/vnd.wmf.bootstrap',

	/**
	 * Represents the content type `application/vnd.wolfram.mathematica`.
	 */
	APPLICATION_VND_WOLFRAM_MATHEMATICA                                                  = 'application/vnd.wolfram.mathematica',

	/**
	 * Represents the content type `application/vnd.wolfram.mathematica.package`.
	 */
	APPLICATION_VND_WOLFRAM_MATHEMATICA_PACKAGE                                          = 'application/vnd.wolfram.mathematica.package',

	/**
	 * Represents the content type `application/vnd.wolfram.player`.
	 */
	APPLICATION_VND_WOLFRAM_PLAYER                                                       = 'application/vnd.wolfram.player',

	/**
	 * Represents the content type `application/vnd.wordperfect`.
	 */
	APPLICATION_VND_WORDPERFECT                                                          = 'application/vnd.wordperfect',

	/**
	 * Represents the content type `application/vnd.wqd`.
	 */
	APPLICATION_VND_WQD                                                                  = 'application/vnd.wqd',

	/**
	 * Represents the content type `application/vnd.wrq-hp3000-labelled`.
	 */
	APPLICATION_VND_WRQ_HP3000_LABELLED                                                  = 'application/vnd.wrq-hp3000-labelled',

	/**
	 * Represents the content type `application/vnd.wt.stf`.
	 */
	APPLICATION_VND_WT_STF                                                               = 'application/vnd.wt.stf',

	/**
	 * Represents the content type `application/vnd.wv.csp+wbxml`.
	 */
	APPLICATION_VND_WV_CSP_WBXML                                                         = 'application/vnd.wv.csp+wbxml',

	/**
	 * Represents the content type `application/vnd.wv.csp+xml`.
	 */
	APPLICATION_VND_WV_CSP_XML                                                           = 'application/vnd.wv.csp+xml',

	/**
	 * Represents the content type `application/vnd.wv.ssp+xml`.
	 */
	APPLICATION_VND_WV_SSP_XML                                                           = 'application/vnd.wv.ssp+xml',

	/**
	 * Represents the content type `application/vnd.xacml+json`.
	 */
	APPLICATION_VND_XACML_JSON                                                           = 'application/vnd.xacml+json',

	/**
	 * Represents the content type `application/vnd.xara`.
	 */
	APPLICATION_VND_XARA                                                                 = 'application/vnd.xara',

	/**
	 * Represents the content type `application/vnd.xfdl`.
	 */
	APPLICATION_VND_XFDL                                                                 = 'application/vnd.xfdl',

	/**
	 * Represents the content type `application/vnd.xfdl.webform`.
	 */
	APPLICATION_VND_XFDL_WEBFORM                                                         = 'application/vnd.xfdl.webform',

	/**
	 * Represents the content type `application/vnd.xmi+xml`.
	 */
	APPLICATION_VND_XMI_XML                                                              = 'application/vnd.xmi+xml',

	/**
	 * Represents the content type `application/vnd.xmpie.cpkg`.
	 */
	APPLICATION_VND_XMPIE_CPKG                                                           = 'application/vnd.xmpie.cpkg',

	/**
	 * Represents the content type `application/vnd.xmpie.dpkg`.
	 */
	APPLICATION_VND_XMPIE_DPKG                                                           = 'application/vnd.xmpie.dpkg',

	/**
	 * Represents the content type `application/vnd.xmpie.plan`.
	 */
	APPLICATION_VND_XMPIE_PLAN                                                           = 'application/vnd.xmpie.plan',

	/**
	 * Represents the content type `application/vnd.xmpie.ppkg`.
	 */
	APPLICATION_VND_XMPIE_PPKG                                                           = 'application/vnd.xmpie.ppkg',

	/**
	 * Represents the content type `application/vnd.xmpie.xlim`.
	 */
	APPLICATION_VND_XMPIE_XLIM                                                           = 'application/vnd.xmpie.xlim',

	/**
	 * Represents the content type `application/vnd.yamaha.hv-dic`.
	 */
	APPLICATION_VND_YAMAHA_HV_DIC                                                        = 'application/vnd.yamaha.hv-dic',

	/**
	 * Represents the content type `application/vnd.yamaha.hv-script`.
	 */
	APPLICATION_VND_YAMAHA_HV_SCRIPT                                                     = 'application/vnd.yamaha.hv-script',

	/**
	 * Represents the content type `application/vnd.yamaha.hv-voice`.
	 */
	APPLICATION_VND_YAMAHA_HV_VOICE                                                      = 'application/vnd.yamaha.hv-voice',

	/**
	 * Represents the content type `application/vnd.yamaha.openscoreformat`.
	 */
	APPLICATION_VND_YAMAHA_OPENSCOREFORMAT                                               = 'application/vnd.yamaha.openscoreformat',

	/**
	 * Represents the content type `application/vnd.yamaha.openscoreformat.osfpvg+xml`.
	 */
	APPLICATION_VND_YAMAHA_OPENSCOREFORMAT_OSFPVG_XML                                    = 'application/vnd.yamaha.openscoreformat.osfpvg+xml',

	/**
	 * Represents the content type `application/vnd.yamaha.remote-setup`.
	 */
	APPLICATION_VND_YAMAHA_REMOTE_SETUP                                                  = 'application/vnd.yamaha.remote-setup',

	/**
	 * Represents the content type `application/vnd.yamaha.smaf-audio`.
	 */
	APPLICATION_VND_YAMAHA_SMAF_AUDIO                                                    = 'application/vnd.yamaha.smaf-audio',

	/**
	 * Represents the content type `application/vnd.yamaha.smaf-phrase`.
	 */
	APPLICATION_VND_YAMAHA_SMAF_PHRASE                                                   = 'application/vnd.yamaha.smaf-phrase',

	/**
	 * Represents the content type `application/vnd.yamaha.through-ngn`.
	 */
	APPLICATION_VND_YAMAHA_THROUGH_NGN                                                   = 'application/vnd.yamaha.through-ngn',

	/**
	 * Represents the content type `application/vnd.yamaha.tunnel-udpencap`.
	 */
	APPLICATION_VND_YAMAHA_TUNNEL_UDPENCAP                                               = 'application/vnd.yamaha.tunnel-udpencap',

	/**
	 * Represents the content type `application/vnd.yaoweme`.
	 */
	APPLICATION_VND_YAOWEME                                                              = 'application/vnd.yaoweme',

	/**
	 * Represents the content type `application/vnd.yellowriver-custom-menu`.
	 */
	APPLICATION_VND_YELLOWRIVER_CUSTOM_MENU                                              = 'application/vnd.yellowriver-custom-menu',

	/**
	 * Represents the content type `application/vnd.zul`.
	 */
	APPLICATION_VND_ZUL                                                                  = 'application/vnd.zul',

	/**
	 * Represents the content type `application/vnd.zzazz.deck+xml`.
	 */
	APPLICATION_VND_ZZAZZ_DECK_XML                                                       = 'application/vnd.zzazz.deck+xml',

	/**
	 * Represents the content type `application/voicexml+xml`.
	 */
	APPLICATION_VOICEXML_XML                                                             = 'application/voicexml+xml',

	/**
	 * Represents the content type `application/vq-rtcpxr`.
	 */
	APPLICATION_VQ_RTCPXR                                                                = 'application/vq-rtcpxr',

	/**
	 * Represents the content type `application/wasm`.
	 */
	APPLICATION_WASM                                                                     = 'application/wasm',

	/**
	 * Represents the content type `application/watcherinfo+xml`.
	 */
	APPLICATION_WATCHERINFO_XML                                                          = 'application/watcherinfo+xml',

	/**
	 * Represents the content type `application/whoispp-query`.
	 */
	APPLICATION_WHOISPP_QUERY                                                            = 'application/whoispp-query',

	/**
	 * Represents the content type `application/whoispp-response`.
	 */
	APPLICATION_WHOISPP_RESPONSE                                                         = 'application/whoispp-response',

	/**
	 * Represents the content type `application/widget`.
	 */
	APPLICATION_WIDGET                                                                   = 'application/widget',

	/**
	 * Represents the content type `application/winhlp`.
	 */
	APPLICATION_WINHLP                                                                   = 'application/winhlp',

	/**
	 * Represents the content type `application/wita`.
	 */
	APPLICATION_WITA                                                                     = 'application/wita',

	/**
	 * Represents the content type `application/wordperfect5.1`.
	 */
	APPLICATION_WORDPERFECT5_1                                                           = 'application/wordperfect5.1',

	/**
	 * Represents the content type `application/wsdl+xml`.
	 */
	APPLICATION_WSDL_XML                                                                 = 'application/wsdl+xml',

	/**
	 * Represents the content type `application/wspolicy+xml`.
	 */
	APPLICATION_WSPOLICY_XML                                                             = 'application/wspolicy+xml',

	/**
	 * Represents the content type `application/x-7z-compressed`.
	 */
	APPLICATION_X_7Z_COMPRESSED                                                          = 'application/x-7z-compressed',

	/**
	 * Represents the content type `application/x-abiword`.
	 */
	APPLICATION_X_ABIWORD                                                                = 'application/x-abiword',

	/**
	 * Represents the content type `application/x-ace-compressed`.
	 */
	APPLICATION_X_ACE_COMPRESSED                                                         = 'application/x-ace-compressed',

	/**
	 * Represents the content type `application/x-amf`.
	 */
	APPLICATION_X_AMF                                                                    = 'application/x-amf',

	/**
	 * Represents the content type `application/x-apple-diskimage`.
	 */
	APPLICATION_X_APPLE_DISKIMAGE                                                        = 'application/x-apple-diskimage',

	/**
	 * Represents the content type `application/x-authorware-bin`.
	 */
	APPLICATION_X_AUTHORWARE_BIN                                                         = 'application/x-authorware-bin',

	/**
	 * Represents the content type `application/x-authorware-map`.
	 */
	APPLICATION_X_AUTHORWARE_MAP                                                         = 'application/x-authorware-map',

	/**
	 * Represents the content type `application/x-authorware-seg`.
	 */
	APPLICATION_X_AUTHORWARE_SEG                                                         = 'application/x-authorware-seg',

	/**
	 * Represents the content type `application/x-bcpio`.
	 */
	APPLICATION_X_BCPIO                                                                  = 'application/x-bcpio',

	/**
	 * Represents the content type `application/x-bittorrent`.
	 */
	APPLICATION_X_BITTORRENT                                                             = 'application/x-bittorrent',

	/**
	 * Represents the content type `application/x-blorb`.
	 */
	APPLICATION_X_BLORB                                                                  = 'application/x-blorb',

	/**
	 * Represents the content type `application/x-bzip`.
	 */
	APPLICATION_X_BZIP                                                                   = 'application/x-bzip',

	/**
	 * Represents the content type `application/x-bzip2`.
	 */
	APPLICATION_X_BZIP2                                                                  = 'application/x-bzip2',

	/**
	 * Represents the content type `application/x-cbr`.
	 */
	APPLICATION_X_CBR                                                                    = 'application/x-cbr',

	/**
	 * Represents the content type `application/x-cdlink`.
	 */
	APPLICATION_X_CDLINK                                                                 = 'application/x-cdlink',

	/**
	 * Represents the content type `application/x-cfs-compressed`.
	 */
	APPLICATION_X_CFS_COMPRESSED                                                         = 'application/x-cfs-compressed',

	/**
	 * Represents the content type `application/x-chat`.
	 */
	APPLICATION_X_CHAT                                                                   = 'application/x-chat',

	/**
	 * Represents the content type `application/x-chess-pgn`.
	 */
	APPLICATION_X_CHESS_PGN                                                              = 'application/x-chess-pgn',

	/**
	 * Represents the content type `application/x-compress`.
	 */
	APPLICATION_X_COMPRESS                                                               = 'application/x-compress',

	/**
	 * Represents the content type `application/x-conference`.
	 */
	APPLICATION_X_CONFERENCE                                                             = 'application/x-conference',

	/**
	 * Represents the content type `application/x-cpio`.
	 */
	APPLICATION_X_CPIO                                                                   = 'application/x-cpio',

	/**
	 * Represents the content type `application/x-csh`.
	 */
	APPLICATION_X_CSH                                                                    = 'application/x-csh',

	/**
	 * Represents the content type `application/x-debian-package`.
	 */
	APPLICATION_X_DEBIAN_PACKAGE                                                         = 'application/x-debian-package',

	/**
	 * Represents the content type `application/x-dgc-compressed`.
	 */
	APPLICATION_X_DGC_COMPRESSED                                                         = 'application/x-dgc-compressed',

	/**
	 * Represents the content type `application/x-director`.
	 */
	APPLICATION_X_DIRECTOR                                                               = 'application/x-director',

	/**
	 * Represents the content type `application/x-doom`.
	 */
	APPLICATION_X_DOOM                                                                   = 'application/x-doom',

	/**
	 * Represents the content type `application/x-dtbncx+xml`.
	 */
	APPLICATION_X_DTBNCX_XML                                                             = 'application/x-dtbncx+xml',

	/**
	 * Represents the content type `application/x-dtbook+xml`.
	 */
	APPLICATION_X_DTBOOK_XML                                                             = 'application/x-dtbook+xml',

	/**
	 * Represents the content type `application/x-dtbresource+xml`.
	 */
	APPLICATION_X_DTBRESOURCE_XML                                                        = 'application/x-dtbresource+xml',

	/**
	 * Represents the content type `application/x-dvi`.
	 */
	APPLICATION_X_DVI                                                                    = 'application/x-dvi',

	/**
	 * Represents the content type `application/x-envoy`.
	 */
	APPLICATION_X_ENVOY                                                                  = 'application/x-envoy',

	/**
	 * Represents the content type `application/x-eva`.
	 */
	APPLICATION_X_EVA                                                                    = 'application/x-eva',

	/**
	 * Represents the content type `application/x-font-bdf`.
	 */
	APPLICATION_X_FONT_BDF                                                               = 'application/x-font-bdf',

	/**
	 * Represents the content type `application/x-font-dos`.
	 */
	APPLICATION_X_FONT_DOS                                                               = 'application/x-font-dos',

	/**
	 * Represents the content type `application/x-font-framemaker`.
	 */
	APPLICATION_X_FONT_FRAMEMAKER                                                        = 'application/x-font-framemaker',

	/**
	 * Represents the content type `application/x-font-ghostscript`.
	 */
	APPLICATION_X_FONT_GHOSTSCRIPT                                                       = 'application/x-font-ghostscript',

	/**
	 * Represents the content type `application/x-font-libgrx`.
	 */
	APPLICATION_X_FONT_LIBGRX                                                            = 'application/x-font-libgrx',

	/**
	 * Represents the content type `application/x-font-linux-psf`.
	 */
	APPLICATION_X_FONT_LINUX_PSF                                                         = 'application/x-font-linux-psf',

	/**
	 * Represents the content type `application/x-font-pcf`.
	 */
	APPLICATION_X_FONT_PCF                                                               = 'application/x-font-pcf',

	/**
	 * Represents the content type `application/x-font-snf`.
	 */
	APPLICATION_X_FONT_SNF                                                               = 'application/x-font-snf',

	/**
	 * Represents the content type `application/x-font-speedo`.
	 */
	APPLICATION_X_FONT_SPEEDO                                                            = 'application/x-font-speedo',

	/**
	 * Represents the content type `application/x-font-sunos-news`.
	 */
	APPLICATION_X_FONT_SUNOS_NEWS                                                        = 'application/x-font-sunos-news',

	/**
	 * Represents the content type `application/x-font-type1`.
	 */
	APPLICATION_X_FONT_TYPE1                                                             = 'application/x-font-type1',

	/**
	 * Represents the content type `application/x-font-vfont`.
	 */
	APPLICATION_X_FONT_VFONT                                                             = 'application/x-font-vfont',

	/**
	 * Represents the content type `application/x-freearc`.
	 */
	APPLICATION_X_FREEARC                                                                = 'application/x-freearc',

	/**
	 * Represents the content type `application/x-futuresplash`.
	 */
	APPLICATION_X_FUTURESPLASH                                                           = 'application/x-futuresplash',

	/**
	 * Represents the content type `application/x-gca-compressed`.
	 */
	APPLICATION_X_GCA_COMPRESSED                                                         = 'application/x-gca-compressed',

	/**
	 * Represents the content type `application/x-glulx`.
	 */
	APPLICATION_X_GLULX                                                                  = 'application/x-glulx',

	/**
	 * Represents the content type `application/x-gnumeric`.
	 */
	APPLICATION_X_GNUMERIC                                                               = 'application/x-gnumeric',

	/**
	 * Represents the content type `application/x-gramps-xml`.
	 */
	APPLICATION_X_GRAMPS_XML                                                             = 'application/x-gramps-xml',

	/**
	 * Represents the content type `application/x-gtar`.
	 */
	APPLICATION_X_GTAR                                                                   = 'application/x-gtar',

	/**
	 * Represents the content type `application/x-gzip`.
	 */
	APPLICATION_X_GZIP                                                                   = 'application/x-gzip',

	/**
	 * Represents the content type `application/x-hdf`.
	 */
	APPLICATION_X_HDF                                                                    = 'application/x-hdf',

	/**
	 * Represents the content type `application/x-install-instructions`.
	 */
	APPLICATION_X_INSTALL_INSTRUCTIONS                                                   = 'application/x-install-instructions',

	/**
	 * Represents the content type `application/x-iso9660-image`.
	 */
	APPLICATION_X_ISO9660_IMAGE                                                          = 'application/x-iso9660-image',

	/**
	 * Represents the content type `application/x-java-jnlp-file`.
	 */
	APPLICATION_X_JAVA_JNLP_FILE                                                         = 'application/x-java-jnlp-file',

	/**
	 * Represents the content type `application/x-latex`.
	 */
	APPLICATION_X_LATEX                                                                  = 'application/x-latex',

	/**
	 * Represents the content type `application/x-lzh-compressed`.
	 */
	APPLICATION_X_LZH_COMPRESSED                                                         = 'application/x-lzh-compressed',

	/**
	 * Represents the content type `application/x-mie`.
	 */
	APPLICATION_X_MIE                                                                    = 'application/x-mie',

	/**
	 * Represents the content type `application/x-mobipocket-ebook`.
	 */
	APPLICATION_X_MOBIPOCKET_EBOOK                                                       = 'application/x-mobipocket-ebook',

	/**
	 * Represents the content type `application/x-ms-application`.
	 */
	APPLICATION_X_MS_APPLICATION                                                         = 'application/x-ms-application',

	/**
	 * Represents the content type `application/x-ms-shortcut`.
	 */
	APPLICATION_X_MS_SHORTCUT                                                            = 'application/x-ms-shortcut',

	/**
	 * Represents the content type `application/x-ms-wmd`.
	 */
	APPLICATION_X_MS_WMD                                                                 = 'application/x-ms-wmd',

	/**
	 * Represents the content type `application/x-ms-wmz`.
	 */
	APPLICATION_X_MS_WMZ                                                                 = 'application/x-ms-wmz',

	/**
	 * Represents the content type `application/x-ms-xbap`.
	 */
	APPLICATION_X_MS_XBAP                                                                = 'application/x-ms-xbap',

	/**
	 * Represents the content type `application/x-msaccess`.
	 */
	APPLICATION_X_MSACCESS                                                               = 'application/x-msaccess',

	/**
	 * Represents the content type `application/x-msbinder`.
	 */
	APPLICATION_X_MSBINDER                                                               = 'application/x-msbinder',

	/**
	 * Represents the content type `application/x-mscardfile`.
	 */
	APPLICATION_X_MSCARDFILE                                                             = 'application/x-mscardfile',

	/**
	 * Represents the content type `application/x-msclip`.
	 */
	APPLICATION_X_MSCLIP                                                                 = 'application/x-msclip',

	/**
	 * Represents the content type `application/x-msdownload`.
	 */
	APPLICATION_X_MSDOWNLOAD                                                             = 'application/x-msdownload',

	/**
	 * Represents the content type `application/x-msmediaview`.
	 */
	APPLICATION_X_MSMEDIAVIEW                                                            = 'application/x-msmediaview',

	/**
	 * Represents the content type `application/x-msmetafile`.
	 */
	APPLICATION_X_MSMETAFILE                                                             = 'application/x-msmetafile',

	/**
	 * Represents the content type `application/x-msmoney`.
	 */
	APPLICATION_X_MSMONEY                                                                = 'application/x-msmoney',

	/**
	 * Represents the content type `application/x-mspublisher`.
	 */
	APPLICATION_X_MSPUBLISHER                                                            = 'application/x-mspublisher',

	/**
	 * Represents the content type `application/x-msschedule`.
	 */
	APPLICATION_X_MSSCHEDULE                                                             = 'application/x-msschedule',

	/**
	 * Represents the content type `application/x-msterminal`.
	 */
	APPLICATION_X_MSTERMINAL                                                             = 'application/x-msterminal',

	/**
	 * Represents the content type `application/x-mswrite`.
	 */
	APPLICATION_X_MSWRITE                                                                = 'application/x-mswrite',

	/**
	 * Represents the content type `application/x-netcdf`.
	 */
	APPLICATION_X_NETCDF                                                                 = 'application/x-netcdf',

	/**
	 * Represents the content type `application/x-nzb`.
	 */
	APPLICATION_X_NZB                                                                    = 'application/x-nzb',

	/**
	 * Represents the content type `application/x-pkcs12`.
	 */
	APPLICATION_X_PKCS12                                                                 = 'application/x-pkcs12',

	/**
	 * Represents the content type `application/x-pkcs7-certificates`.
	 */
	APPLICATION_X_PKCS7_CERTIFICATES                                                     = 'application/x-pkcs7-certificates',

	/**
	 * Represents the content type `application/x-pkcs7-certreqresp`.
	 */
	APPLICATION_X_PKCS7_CERTREQRESP                                                      = 'application/x-pkcs7-certreqresp',

	/**
	 * Represents the content type `application/x-rar-compressed`.
	 */
	APPLICATION_X_RAR_COMPRESSED                                                         = 'application/x-rar-compressed',

	/**
	 * Represents the content type `application/x-research-info-systems`.
	 */
	APPLICATION_X_RESEARCH_INFO_SYSTEMS                                                  = 'application/x-research-info-systems',

	/**
	 * Represents the content type `application/x-sh`.
	 */
	APPLICATION_X_SH                                                                     = 'application/x-sh',

	/**
	 * Represents the content type `application/x-shar`.
	 */
	APPLICATION_X_SHAR                                                                   = 'application/x-shar',

	/**
	 * Represents the content type `application/x-shockwave-flash`.
	 */
	APPLICATION_X_SHOCKWAVE_FLASH                                                        = 'application/x-shockwave-flash',

	/**
	 * Represents the content type `application/x-silverlight-app`.
	 */
	APPLICATION_X_SILVERLIGHT_APP                                                        = 'application/x-silverlight-app',

	/**
	 * Represents the content type `application/x-sql`.
	 */
	APPLICATION_X_SQL                                                                    = 'application/x-sql',

	/**
	 * Represents the content type `application/x-stuffit`.
	 */
	APPLICATION_X_STUFFIT                                                                = 'application/x-stuffit',

	/**
	 * Represents the content type `application/x-stuffitx`.
	 */
	APPLICATION_X_STUFFITX                                                               = 'application/x-stuffitx',

	/**
	 * Represents the content type `application/x-subrip`.
	 */
	APPLICATION_X_SUBRIP                                                                 = 'application/x-subrip',

	/**
	 * Represents the content type `application/x-sv4cpio`.
	 */
	APPLICATION_X_SV4CPIO                                                                = 'application/x-sv4cpio',

	/**
	 * Represents the content type `application/x-sv4crc`.
	 */
	APPLICATION_X_SV4CRC                                                                 = 'application/x-sv4crc',

	/**
	 * Represents the content type `application/x-t3vm-image`.
	 */
	APPLICATION_X_T3VM_IMAGE                                                             = 'application/x-t3vm-image',

	/**
	 * Represents the content type `application/x-tads`.
	 */
	APPLICATION_X_TADS                                                                   = 'application/x-tads',

	/**
	 * Represents the content type `application/x-tar`.
	 */
	APPLICATION_X_TAR                                                                    = 'application/x-tar',

	/**
	 * Represents the content type `application/x-tcl`.
	 */
	APPLICATION_X_TCL                                                                    = 'application/x-tcl',

	/**
	 * Represents the content type `application/x-tex`.
	 */
	APPLICATION_X_TEX                                                                    = 'application/x-tex',

	/**
	 * Represents the content type `application/x-tex-tfm`.
	 */
	APPLICATION_X_TEX_TFM                                                                = 'application/x-tex-tfm',

	/**
	 * Represents the content type `application/x-texinfo`.
	 */
	APPLICATION_X_TEXINFO                                                                = 'application/x-texinfo',

	/**
	 * Represents the content type `application/x-tgif`.
	 */
	APPLICATION_X_TGIF                                                                   = 'application/x-tgif',

	/**
	 * Represents the content type `application/x-ustar`.
	 */
	APPLICATION_X_USTAR                                                                  = 'application/x-ustar',

	/**
	 * Represents the content type `application/x-wais-source`.
	 */
	APPLICATION_X_WAIS_SOURCE                                                            = 'application/x-wais-source',

	/**
	 * Represents the content type `application/x-www-form-urlencoded`.
	 */
	APPLICATION_X_WWW_FORM_URLENCODED                                                    = 'application/x-www-form-urlencoded',

	/**
	 * Represents the content type `application/x-x509-ca-cert`.
	 */
	APPLICATION_X_X509_CA_CERT                                                           = 'application/x-x509-ca-cert',

	/**
	 * Represents the content type `application/x-xfig`.
	 */
	APPLICATION_X_XFIG                                                                   = 'application/x-xfig',

	/**
	 * Represents the content type `application/x-xliff+xml`.
	 */
	APPLICATION_X_XLIFF_XML                                                              = 'application/x-xliff+xml',

	/**
	 * Represents the content type `application/x-xpinstall`.
	 */
	APPLICATION_X_XPINSTALL                                                              = 'application/x-xpinstall',

	/**
	 * Represents the content type `application/x-xz`.
	 */
	APPLICATION_X_XZ                                                                     = 'application/x-xz',

	/**
	 * Represents the content type `application/x-zmachine`.
	 */
	APPLICATION_X_ZMACHINE                                                               = 'application/x-zmachine',

	/**
	 * Represents the content type `application/x400-bp`.
	 */
	APPLICATION_X400_BP                                                                  = 'application/x400-bp',

	/**
	 * Represents the content type `application/xacml+xml`.
	 */
	APPLICATION_XACML_XML                                                                = 'application/xacml+xml',

	/**
	 * Represents the content type `application/xaml+xml`.
	 */
	APPLICATION_XAML_XML                                                                 = 'application/xaml+xml',

	/**
	 * Represents the content type `application/xcap-att+xml`.
	 */
	APPLICATION_XCAP_ATT_XML                                                             = 'application/xcap-att+xml',

	/**
	 * Represents the content type `application/xcap-caps+xml`.
	 */
	APPLICATION_XCAP_CAPS_XML                                                            = 'application/xcap-caps+xml',

	/**
	 * Represents the content type `application/xcap-diff+xml`.
	 */
	APPLICATION_XCAP_DIFF_XML                                                            = 'application/xcap-diff+xml',

	/**
	 * Represents the content type `application/xcap-el+xml`.
	 */
	APPLICATION_XCAP_EL_XML                                                              = 'application/xcap-el+xml',

	/**
	 * Represents the content type `application/xcap-error+xml`.
	 */
	APPLICATION_XCAP_ERROR_XML                                                           = 'application/xcap-error+xml',

	/**
	 * Represents the content type `application/xcap-ns+xml`.
	 */
	APPLICATION_XCAP_NS_XML                                                              = 'application/xcap-ns+xml',

	/**
	 * Represents the content type `application/xcon-conference-info+xml`.
	 */
	APPLICATION_XCON_CONFERENCE_INFO_XML                                                 = 'application/xcon-conference-info+xml',

	/**
	 * Represents the content type `application/xcon-conference-info-diff+xml`.
	 */
	APPLICATION_XCON_CONFERENCE_INFO_DIFF_XML                                            = 'application/xcon-conference-info-diff+xml',

	/**
	 * Represents the content type `application/xenc+xml`.
	 */
	APPLICATION_XENC_XML                                                                 = 'application/xenc+xml',

	/**
	 * Represents the content type `application/xhtml+xml`.
	 */
	APPLICATION_XHTML_XML                                                                = 'application/xhtml+xml',

	/**
	 * Represents the content type `application/xhtml-voice+xml`.
	 */
	APPLICATION_XHTML_VOICE_XML                                                          = 'application/xhtml-voice+xml',

	/**
	 * Represents the content type `application/xml`.
	 */
	APPLICATION_XML                                                                      = 'application/xml',

	/**
	 * Represents the content type `application/xml-dtd`.
	 */
	APPLICATION_XML_DTD                                                                  = 'application/xml-dtd',

	/**
	 * Represents the content type `application/xml-external-parsed-entity`.
	 */
	APPLICATION_XML_EXTERNAL_PARSED_ENTITY                                               = 'application/xml-external-parsed-entity',

	/**
	 * Represents the content type `application/xml-patch+xml`.
	 */
	APPLICATION_XML_PATCH_XML                                                            = 'application/xml-patch+xml',

	/**
	 * Represents the content type `application/xmpp+xml`.
	 */
	APPLICATION_XMPP_XML                                                                 = 'application/xmpp+xml',

	/**
	 * Represents the content type `application/xop+xml`.
	 */
	APPLICATION_XOP_XML                                                                  = 'application/xop+xml',

	/**
	 * Represents the content type `application/xproc+xml`.
	 */
	APPLICATION_XPROC_XML                                                                = 'application/xproc+xml',

	/**
	 * Represents the content type `application/xslt+xml`.
	 */
	APPLICATION_XSLT_XML                                                                 = 'application/xslt+xml',

	/**
	 * Represents the content type `application/xspf+xml`.
	 */
	APPLICATION_XSPF_XML                                                                 = 'application/xspf+xml',

	/**
	 * Represents the content type `application/xv+xml`.
	 */
	APPLICATION_XV_XML                                                                   = 'application/xv+xml',

	/**
	 * Represents the content type `application/yang`.
	 */
	APPLICATION_YANG                                                                     = 'application/yang',

	/**
	 * Represents the content type `application/yin+xml`.
	 */
	APPLICATION_YIN_XML                                                                  = 'application/yin+xml',

	/**
	 * Represents the content type `application/zip`.
	 */
	APPLICATION_ZIP                                                                      = 'application/zip',

	/**
	 * Represents the content type `application/zlib`.
	 */
	APPLICATION_ZLIB                                                                     = 'application/zlib',

	/**
	 * Represents the content type `audio/1d-interleaved-parityfec`.
	 */
	AUDIO_1D_INTERLEAVED_PARITYFEC                                                       = 'audio/1d-interleaved-parityfec',

	/**
	 * Represents the content type `audio/32kadpcm`.
	 */
	AUDIO_32KADPCM                                                                       = 'audio/32kadpcm',

	/**
	 * Represents the content type `audio/3gpp`.
	 */
	AUDIO_3GPP                                                                           = 'audio/3gpp',

	/**
	 * Represents the content type `audio/3gpp2`.
	 */
	AUDIO_3GPP2                                                                          = 'audio/3gpp2',

	/**
	 * Represents the content type `audio/ac3`.
	 */
	AUDIO_AC3                                                                            = 'audio/ac3',

	/**
	 * Represents the content type `audio/adpcm`.
	 */
	AUDIO_ADPCM                                                                          = 'audio/adpcm',

	/**
	 * Represents the content type `audio/amr`.
	 */
	AUDIO_AMR                                                                            = 'audio/amr',

	/**
	 * Represents the content type `audio/amr-wb`.
	 */
	AUDIO_AMR_WB                                                                         = 'audio/amr-wb',

	/**
	 * Represents the content type `audio/amr-wb+`.
	 */
	AUDIO_AMR_WB_                                                                        = 'audio/amr-wb+',

	/**
	 * Represents the content type `audio/aptx`.
	 */
	AUDIO_APTX                                                                           = 'audio/aptx',

	/**
	 * Represents the content type `audio/asc`.
	 */
	AUDIO_ASC                                                                            = 'audio/asc',

	/**
	 * Represents the content type `audio/atrac-advanced-lossless`.
	 */
	AUDIO_ATRAC_ADVANCED_LOSSLESS                                                        = 'audio/atrac-advanced-lossless',

	/**
	 * Represents the content type `audio/atrac-x`.
	 */
	AUDIO_ATRAC_X                                                                        = 'audio/atrac-x',

	/**
	 * Represents the content type `audio/atrac3`.
	 */
	AUDIO_ATRAC3                                                                         = 'audio/atrac3',

	/**
	 * Represents the content type `audio/basic`.
	 */
	AUDIO_BASIC                                                                          = 'audio/basic',

	/**
	 * Represents the content type `audio/bv16`.
	 */
	AUDIO_BV16                                                                           = 'audio/bv16',

	/**
	 * Represents the content type `audio/bv32`.
	 */
	AUDIO_BV32                                                                           = 'audio/bv32',

	/**
	 * Represents the content type `audio/clearmode`.
	 */
	AUDIO_CLEARMODE                                                                      = 'audio/clearmode',

	/**
	 * Represents the content type `audio/cn`.
	 */
	AUDIO_CN                                                                             = 'audio/cn',

	/**
	 * Represents the content type `audio/dat12`.
	 */
	AUDIO_DAT12                                                                          = 'audio/dat12',

	/**
	 * Represents the content type `audio/dls`.
	 */
	AUDIO_DLS                                                                            = 'audio/dls',

	/**
	 * Represents the content type `audio/dsr-es201108`.
	 */
	AUDIO_DSR_ES201108                                                                   = 'audio/dsr-es201108',

	/**
	 * Represents the content type `audio/dsr-es202050`.
	 */
	AUDIO_DSR_ES202050                                                                   = 'audio/dsr-es202050',

	/**
	 * Represents the content type `audio/dsr-es202211`.
	 */
	AUDIO_DSR_ES202211                                                                   = 'audio/dsr-es202211',

	/**
	 * Represents the content type `audio/dsr-es202212`.
	 */
	AUDIO_DSR_ES202212                                                                   = 'audio/dsr-es202212',

	/**
	 * Represents the content type `audio/dv`.
	 */
	AUDIO_DV                                                                             = 'audio/dv',

	/**
	 * Represents the content type `audio/dvi4`.
	 */
	AUDIO_DVI4                                                                           = 'audio/dvi4',

	/**
	 * Represents the content type `audio/eac3`.
	 */
	AUDIO_EAC3                                                                           = 'audio/eac3',

	/**
	 * Represents the content type `audio/encaprtp`.
	 */
	AUDIO_ENCAPRTP                                                                       = 'audio/encaprtp',

	/**
	 * Represents the content type `audio/evrc`.
	 */
	AUDIO_EVRC                                                                           = 'audio/evrc',

	/**
	 * Represents the content type `audio/evrc-qcp`.
	 */
	AUDIO_EVRC_QCP                                                                       = 'audio/evrc-qcp',

	/**
	 * Represents the content type `audio/evrc0`.
	 */
	AUDIO_EVRC0                                                                          = 'audio/evrc0',

	/**
	 * Represents the content type `audio/evrc1`.
	 */
	AUDIO_EVRC1                                                                          = 'audio/evrc1',

	/**
	 * Represents the content type `audio/evrcb`.
	 */
	AUDIO_EVRCB                                                                          = 'audio/evrcb',

	/**
	 * Represents the content type `audio/evrcb0`.
	 */
	AUDIO_EVRCB0                                                                         = 'audio/evrcb0',

	/**
	 * Represents the content type `audio/evrcb1`.
	 */
	AUDIO_EVRCB1                                                                         = 'audio/evrcb1',

	/**
	 * Represents the content type `audio/evrcnw`.
	 */
	AUDIO_EVRCNW                                                                         = 'audio/evrcnw',

	/**
	 * Represents the content type `audio/evrcnw0`.
	 */
	AUDIO_EVRCNW0                                                                        = 'audio/evrcnw0',

	/**
	 * Represents the content type `audio/evrcnw1`.
	 */
	AUDIO_EVRCNW1                                                                        = 'audio/evrcnw1',

	/**
	 * Represents the content type `audio/evrcwb`.
	 */
	AUDIO_EVRCWB                                                                         = 'audio/evrcwb',

	/**
	 * Represents the content type `audio/evrcwb0`.
	 */
	AUDIO_EVRCWB0                                                                        = 'audio/evrcwb0',

	/**
	 * Represents the content type `audio/evrcwb1`.
	 */
	AUDIO_EVRCWB1                                                                        = 'audio/evrcwb1',

	/**
	 * Represents the content type `audio/evs`.
	 */
	AUDIO_EVS                                                                            = 'audio/evs',

	/**
	 * Represents the content type `audio/example`.
	 */
	AUDIO_EXAMPLE                                                                        = 'audio/example',

	/**
	 * Represents the content type `audio/fwdred`.
	 */
	AUDIO_FWDRED                                                                         = 'audio/fwdred',

	/**
	 * Represents the content type `audio/g711-0`.
	 */
	AUDIO_G711_0                                                                         = 'audio/g711-0',

	/**
	 * Represents the content type `audio/g719`.
	 */
	AUDIO_G719                                                                           = 'audio/g719',

	/**
	 * Represents the content type `audio/g722`.
	 */
	AUDIO_G722                                                                           = 'audio/g722',

	/**
	 * Represents the content type `audio/g7221`.
	 */
	AUDIO_G7221                                                                          = 'audio/g7221',

	/**
	 * Represents the content type `audio/g723`.
	 */
	AUDIO_G723                                                                           = 'audio/g723',

	/**
	 * Represents the content type `audio/g726-16`.
	 */
	AUDIO_G726_16                                                                        = 'audio/g726-16',

	/**
	 * Represents the content type `audio/g726-24`.
	 */
	AUDIO_G726_24                                                                        = 'audio/g726-24',

	/**
	 * Represents the content type `audio/g726-32`.
	 */
	AUDIO_G726_32                                                                        = 'audio/g726-32',

	/**
	 * Represents the content type `audio/g726-40`.
	 */
	AUDIO_G726_40                                                                        = 'audio/g726-40',

	/**
	 * Represents the content type `audio/g728`.
	 */
	AUDIO_G728                                                                           = 'audio/g728',

	/**
	 * Represents the content type `audio/g729`.
	 */
	AUDIO_G729                                                                           = 'audio/g729',

	/**
	 * Represents the content type `audio/g7291`.
	 */
	AUDIO_G7291                                                                          = 'audio/g7291',

	/**
	 * Represents the content type `audio/g729d`.
	 */
	AUDIO_G729D                                                                          = 'audio/g729d',

	/**
	 * Represents the content type `audio/g729e`.
	 */
	AUDIO_G729E                                                                          = 'audio/g729e',

	/**
	 * Represents the content type `audio/gsm`.
	 */
	AUDIO_GSM                                                                            = 'audio/gsm',

	/**
	 * Represents the content type `audio/gsm-efr`.
	 */
	AUDIO_GSM_EFR                                                                        = 'audio/gsm-efr',

	/**
	 * Represents the content type `audio/gsm-hr-08`.
	 */
	AUDIO_GSM_HR_08                                                                      = 'audio/gsm-hr-08',

	/**
	 * Represents the content type `audio/ilbc`.
	 */
	AUDIO_ILBC                                                                           = 'audio/ilbc',

	/**
	 * Represents the content type `audio/ip-mr_v2.5`.
	 */
	AUDIO_IP_MR_V2_5                                                                     = 'audio/ip-mr_v2.5',

	/**
	 * Represents the content type `audio/isac`.
	 */
	AUDIO_ISAC                                                                           = 'audio/isac',

	/**
	 * Represents the content type `audio/l16`.
	 */
	AUDIO_L16                                                                            = 'audio/l16',

	/**
	 * Represents the content type `audio/l20`.
	 */
	AUDIO_L20                                                                            = 'audio/l20',

	/**
	 * Represents the content type `audio/l24`.
	 */
	AUDIO_L24                                                                            = 'audio/l24',

	/**
	 * Represents the content type `audio/l8`.
	 */
	AUDIO_L8                                                                             = 'audio/l8',

	/**
	 * Represents the content type `audio/lpc`.
	 */
	AUDIO_LPC                                                                            = 'audio/lpc',

	/**
	 * Represents the content type `audio/midi`.
	 */
	AUDIO_MIDI                                                                           = 'audio/midi',

	/**
	 * Represents the content type `audio/mobile-xmf`.
	 */
	AUDIO_MOBILE_XMF                                                                     = 'audio/mobile-xmf',

	/**
	 * Represents the content type `audio/mp4`.
	 */
	AUDIO_MP4                                                                            = 'audio/mp4',

	/**
	 * Represents the content type `audio/mp4a-latm`.
	 */
	AUDIO_MP4A_LATM                                                                      = 'audio/mp4a-latm',

	/**
	 * Represents the content type `audio/mpa`.
	 */
	AUDIO_MPA                                                                            = 'audio/mpa',

	/**
	 * Represents the content type `audio/mpa-robust`.
	 */
	AUDIO_MPA_ROBUST                                                                     = 'audio/mpa-robust',

	/**
	 * Represents the content type `audio/mpeg`.
	 */
	AUDIO_MPEG                                                                           = 'audio/mpeg',

	/**
	 * Represents the content type `audio/mpeg4-generic`.
	 */
	AUDIO_MPEG4_GENERIC                                                                  = 'audio/mpeg4-generic',

	/**
	 * Represents the content type `audio/musepack`.
	 */
	AUDIO_MUSEPACK                                                                       = 'audio/musepack',

	/**
	 * Represents the content type `audio/ogg`.
	 */
	AUDIO_OGG                                                                            = 'audio/ogg',

	/**
	 * Represents the content type `audio/opus`.
	 */
	AUDIO_OPUS                                                                           = 'audio/opus',

	/**
	 * Represents the content type `audio/parityfec`.
	 */
	AUDIO_PARITYFEC                                                                      = 'audio/parityfec',

	/**
	 * Represents the content type `audio/pcma`.
	 */
	AUDIO_PCMA                                                                           = 'audio/pcma',

	/**
	 * Represents the content type `audio/pcma-wb`.
	 */
	AUDIO_PCMA_WB                                                                        = 'audio/pcma-wb',

	/**
	 * Represents the content type `audio/pcmu`.
	 */
	AUDIO_PCMU                                                                           = 'audio/pcmu',

	/**
	 * Represents the content type `audio/pcmu-wb`.
	 */
	AUDIO_PCMU_WB                                                                        = 'audio/pcmu-wb',

	/**
	 * Represents the content type `audio/prs.sid`.
	 */
	AUDIO_PRS_SID                                                                        = 'audio/prs.sid',

	/**
	 * Represents the content type `audio/qcelp`.
	 */
	AUDIO_QCELP                                                                          = 'audio/qcelp',

	/**
	 * Represents the content type `audio/raptorfec`.
	 */
	AUDIO_RAPTORFEC                                                                      = 'audio/raptorfec',

	/**
	 * Represents the content type `audio/red`.
	 */
	AUDIO_RED                                                                            = 'audio/red',

	/**
	 * Represents the content type `audio/rtp-enc-aescm128`.
	 */
	AUDIO_RTP_ENC_AESCM128                                                               = 'audio/rtp-enc-aescm128',

	/**
	 * Represents the content type `audio/rtp-midi`.
	 */
	AUDIO_RTP_MIDI                                                                       = 'audio/rtp-midi',

	/**
	 * Represents the content type `audio/rtploopback`.
	 */
	AUDIO_RTPLOOPBACK                                                                    = 'audio/rtploopback',

	/**
	 * Represents the content type `audio/rtx`.
	 */
	AUDIO_RTX                                                                            = 'audio/rtx',

	/**
	 * Represents the content type `audio/s3m`.
	 */
	AUDIO_S3M                                                                            = 'audio/s3m',

	/**
	 * Represents the content type `audio/silk`.
	 */
	AUDIO_SILK                                                                           = 'audio/silk',

	/**
	 * Represents the content type `audio/smv`.
	 */
	AUDIO_SMV                                                                            = 'audio/smv',

	/**
	 * Represents the content type `audio/smv-qcp`.
	 */
	AUDIO_SMV_QCP                                                                        = 'audio/smv-qcp',

	/**
	 * Represents the content type `audio/smv0`.
	 */
	AUDIO_SMV0                                                                           = 'audio/smv0',

	/**
	 * Represents the content type `audio/sp-midi`.
	 */
	AUDIO_SP_MIDI                                                                        = 'audio/sp-midi',

	/**
	 * Represents the content type `audio/speex`.
	 */
	AUDIO_SPEEX                                                                          = 'audio/speex',

	/**
	 * Represents the content type `audio/t140c`.
	 */
	AUDIO_T140C                                                                          = 'audio/t140c',

	/**
	 * Represents the content type `audio/t38`.
	 */
	AUDIO_T38                                                                            = 'audio/t38',

	/**
	 * Represents the content type `audio/telephone-event`.
	 */
	AUDIO_TELEPHONE_EVENT                                                                = 'audio/telephone-event',

	/**
	 * Represents the content type `audio/tone`.
	 */
	AUDIO_TONE                                                                           = 'audio/tone',

	/**
	 * Represents the content type `audio/uemclip`.
	 */
	AUDIO_UEMCLIP                                                                        = 'audio/uemclip',

	/**
	 * Represents the content type `audio/ulpfec`.
	 */
	AUDIO_ULPFEC                                                                         = 'audio/ulpfec',

	/**
	 * Represents the content type `audio/vdvi`.
	 */
	AUDIO_VDVI                                                                           = 'audio/vdvi',

	/**
	 * Represents the content type `audio/vmr-wb`.
	 */
	AUDIO_VMR_WB                                                                         = 'audio/vmr-wb',

	/**
	 * Represents the content type `audio/vnd.3gpp.iufp`.
	 */
	AUDIO_VND_3GPP_IUFP                                                                  = 'audio/vnd.3gpp.iufp',

	/**
	 * Represents the content type `audio/vnd.4sb`.
	 */
	AUDIO_VND_4SB                                                                        = 'audio/vnd.4sb',

	/**
	 * Represents the content type `audio/vnd.audiokoz`.
	 */
	AUDIO_VND_AUDIOKOZ                                                                   = 'audio/vnd.audiokoz',

	/**
	 * Represents the content type `audio/vnd.celp`.
	 */
	AUDIO_VND_CELP                                                                       = 'audio/vnd.celp',

	/**
	 * Represents the content type `audio/vnd.cisco.nse`.
	 */
	AUDIO_VND_CISCO_NSE                                                                  = 'audio/vnd.cisco.nse',

	/**
	 * Represents the content type `audio/vnd.cmles.radio-events`.
	 */
	AUDIO_VND_CMLES_RADIO_EVENTS                                                         = 'audio/vnd.cmles.radio-events',

	/**
	 * Represents the content type `audio/vnd.cns.anp1`.
	 */
	AUDIO_VND_CNS_ANP1                                                                   = 'audio/vnd.cns.anp1',

	/**
	 * Represents the content type `audio/vnd.cns.inf1`.
	 */
	AUDIO_VND_CNS_INF1                                                                   = 'audio/vnd.cns.inf1',

	/**
	 * Represents the content type `audio/vnd.dece.audio`.
	 */
	AUDIO_VND_DECE_AUDIO                                                                 = 'audio/vnd.dece.audio',

	/**
	 * Represents the content type `audio/vnd.digital-winds`.
	 */
	AUDIO_VND_DIGITAL_WINDS                                                              = 'audio/vnd.digital-winds',

	/**
	 * Represents the content type `audio/vnd.dlna.adts`.
	 */
	AUDIO_VND_DLNA_ADTS                                                                  = 'audio/vnd.dlna.adts',

	/**
	 * Represents the content type `audio/vnd.dolby.heaac.1`.
	 */
	AUDIO_VND_DOLBY_HEAAC_1                                                              = 'audio/vnd.dolby.heaac.1',

	/**
	 * Represents the content type `audio/vnd.dolby.heaac.2`.
	 */
	AUDIO_VND_DOLBY_HEAAC_2                                                              = 'audio/vnd.dolby.heaac.2',

	/**
	 * Represents the content type `audio/vnd.dolby.mlp`.
	 */
	AUDIO_VND_DOLBY_MLP                                                                  = 'audio/vnd.dolby.mlp',

	/**
	 * Represents the content type `audio/vnd.dolby.mps`.
	 */
	AUDIO_VND_DOLBY_MPS                                                                  = 'audio/vnd.dolby.mps',

	/**
	 * Represents the content type `audio/vnd.dolby.pl2`.
	 */
	AUDIO_VND_DOLBY_PL2                                                                  = 'audio/vnd.dolby.pl2',

	/**
	 * Represents the content type `audio/vnd.dolby.pl2x`.
	 */
	AUDIO_VND_DOLBY_PL2X                                                                 = 'audio/vnd.dolby.pl2x',

	/**
	 * Represents the content type `audio/vnd.dolby.pl2z`.
	 */
	AUDIO_VND_DOLBY_PL2Z                                                                 = 'audio/vnd.dolby.pl2z',

	/**
	 * Represents the content type `audio/vnd.dolby.pulse.1`.
	 */
	AUDIO_VND_DOLBY_PULSE_1                                                              = 'audio/vnd.dolby.pulse.1',

	/**
	 * Represents the content type `audio/vnd.dra`.
	 */
	AUDIO_VND_DRA                                                                        = 'audio/vnd.dra',

	/**
	 * Represents the content type `audio/vnd.dts`.
	 */
	AUDIO_VND_DTS                                                                        = 'audio/vnd.dts',

	/**
	 * Represents the content type `audio/vnd.dts.hd`.
	 */
	AUDIO_VND_DTS_HD                                                                     = 'audio/vnd.dts.hd',

	/**
	 * Represents the content type `audio/vnd.dvb.file`.
	 */
	AUDIO_VND_DVB_FILE                                                                   = 'audio/vnd.dvb.file',

	/**
	 * Represents the content type `audio/vnd.everad.plj`.
	 */
	AUDIO_VND_EVERAD_PLJ                                                                 = 'audio/vnd.everad.plj',

	/**
	 * Represents the content type `audio/vnd.hns.audio`.
	 */
	AUDIO_VND_HNS_AUDIO                                                                  = 'audio/vnd.hns.audio',

	/**
	 * Represents the content type `audio/vnd.lucent.voice`.
	 */
	AUDIO_VND_LUCENT_VOICE                                                               = 'audio/vnd.lucent.voice',

	/**
	 * Represents the content type `audio/vnd.ms-playready.media.pya`.
	 */
	AUDIO_VND_MS_PLAYREADY_MEDIA_PYA                                                     = 'audio/vnd.ms-playready.media.pya',

	/**
	 * Represents the content type `audio/vnd.nokia.mobile-xmf`.
	 */
	AUDIO_VND_NOKIA_MOBILE_XMF                                                           = 'audio/vnd.nokia.mobile-xmf',

	/**
	 * Represents the content type `audio/vnd.nortel.vbk`.
	 */
	AUDIO_VND_NORTEL_VBK                                                                 = 'audio/vnd.nortel.vbk',

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp4800`.
	 */
	AUDIO_VND_NUERA_ECELP4800                                                            = 'audio/vnd.nuera.ecelp4800',

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp7470`.
	 */
	AUDIO_VND_NUERA_ECELP7470                                                            = 'audio/vnd.nuera.ecelp7470',

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp9600`.
	 */
	AUDIO_VND_NUERA_ECELP9600                                                            = 'audio/vnd.nuera.ecelp9600',

	/**
	 * Represents the content type `audio/vnd.octel.sbc`.
	 */
	AUDIO_VND_OCTEL_SBC                                                                  = 'audio/vnd.octel.sbc',

	/**
	 * Represents the content type `audio/vnd.qcelp`.
	 */
	AUDIO_VND_QCELP                                                                      = 'audio/vnd.qcelp',

	/**
	 * Represents the content type `audio/vnd.rhetorex.32kadpcm`.
	 */
	AUDIO_VND_RHETOREX_32KADPCM                                                          = 'audio/vnd.rhetorex.32kadpcm',

	/**
	 * Represents the content type `audio/vnd.rip`.
	 */
	AUDIO_VND_RIP                                                                        = 'audio/vnd.rip',

	/**
	 * Represents the content type `audio/vnd.sealedmedia.softseal.mpeg`.
	 */
	AUDIO_VND_SEALEDMEDIA_SOFTSEAL_MPEG                                                  = 'audio/vnd.sealedmedia.softseal.mpeg',

	/**
	 * Represents the content type `audio/vnd.vmx.cvsd`.
	 */
	AUDIO_VND_VMX_CVSD                                                                   = 'audio/vnd.vmx.cvsd',

	/**
	 * Represents the content type `audio/vorbis`.
	 */
	AUDIO_VORBIS                                                                         = 'audio/vorbis',

	/**
	 * Represents the content type `audio/vorbis-config`.
	 */
	AUDIO_VORBIS_CONFIG                                                                  = 'audio/vorbis-config',

	/**
	 * Represents the content type `audio/webm`.
	 */
	AUDIO_WEBM                                                                           = 'audio/webm',

	/**
	 * Represents the content type `audio/x-aac`.
	 */
	AUDIO_X_AAC                                                                          = 'audio/x-aac',

	/**
	 * Represents the content type `audio/x-aiff`.
	 */
	AUDIO_X_AIFF                                                                         = 'audio/x-aiff',

	/**
	 * Represents the content type `audio/x-caf`.
	 */
	AUDIO_X_CAF                                                                          = 'audio/x-caf',

	/**
	 * Represents the content type `audio/x-flac`.
	 */
	AUDIO_X_FLAC                                                                         = 'audio/x-flac',

	/**
	 * Represents the content type `audio/x-matroska`.
	 */
	AUDIO_X_MATROSKA                                                                     = 'audio/x-matroska',

	/**
	 * Represents the content type `audio/x-mpegurl`.
	 */
	AUDIO_X_MPEGURL                                                                      = 'audio/x-mpegurl',

	/**
	 * Represents the content type `audio/x-ms-wax`.
	 */
	AUDIO_X_MS_WAX                                                                       = 'audio/x-ms-wax',

	/**
	 * Represents the content type `audio/x-ms-wma`.
	 */
	AUDIO_X_MS_WMA                                                                       = 'audio/x-ms-wma',

	/**
	 * Represents the content type `audio/x-pn-realaudio`.
	 */
	AUDIO_X_PN_REALAUDIO                                                                 = 'audio/x-pn-realaudio',

	/**
	 * Represents the content type `audio/x-pn-realaudio-plugin`.
	 */
	AUDIO_X_PN_REALAUDIO_PLUGIN                                                          = 'audio/x-pn-realaudio-plugin',

	/**
	 * Represents the content type `audio/x-tta`.
	 */
	AUDIO_X_TTA                                                                          = 'audio/x-tta',

	/**
	 * Represents the content type `audio/x-wav`.
	 */
	AUDIO_X_WAV                                                                          = 'audio/x-wav',

	/**
	 * Represents the content type `audio/xm`.
	 */
	AUDIO_XM                                                                             = 'audio/xm',

	/**
	 * Represents the content type `chemical/x-cdx`.
	 */
	CHEMICAL_X_CDX                                                                       = 'chemical/x-cdx',

	/**
	 * Represents the content type `chemical/x-cif`.
	 */
	CHEMICAL_X_CIF                                                                       = 'chemical/x-cif',

	/**
	 * Represents the content type `chemical/x-cmdf`.
	 */
	CHEMICAL_X_CMDF                                                                      = 'chemical/x-cmdf',

	/**
	 * Represents the content type `chemical/x-cml`.
	 */
	CHEMICAL_X_CML                                                                       = 'chemical/x-cml',

	/**
	 * Represents the content type `chemical/x-csml`.
	 */
	CHEMICAL_X_CSML                                                                      = 'chemical/x-csml',

	/**
	 * Represents the content type `chemical/x-pdb`.
	 */
	CHEMICAL_X_PDB                                                                       = 'chemical/x-pdb',

	/**
	 * Represents the content type `chemical/x-xyz`.
	 */
	CHEMICAL_X_XYZ                                                                       = 'chemical/x-xyz',

	/**
	 * Represents the content type `font/collection`.
	 */
	FONT_COLLECTION                                                                      = 'font/collection',

	/**
	 * Represents the content type `font/otf`.
	 */
	FONT_OTF                                                                             = 'font/otf',

	/**
	 * Represents the content type `font/sfnt`.
	 */
	FONT_SFNT                                                                            = 'font/sfnt',

	/**
	 * Represents the content type `font/ttf`.
	 */
	FONT_TTF                                                                             = 'font/ttf',

	/**
	 * Represents the content type `font/woff`.
	 */
	FONT_WOFF                                                                            = 'font/woff',

	/**
	 * Represents the content type `font/woff2`.
	 */
	FONT_WOFF2                                                                           = 'font/woff2',

	/**
	 * Represents the content type `image/bmp`.
	 */
	IMAGE_BMP                                                                            = 'image/bmp',

	/**
	 * Represents the content type `image/cgm`.
	 */
	IMAGE_CGM                                                                            = 'image/cgm',

	/**
	 * Represents the content type `image/dicom-rle`.
	 */
	IMAGE_DICOM_RLE                                                                      = 'image/dicom-rle',

	/**
	 * Represents the content type `image/emf`.
	 */
	IMAGE_EMF                                                                            = 'image/emf',

	/**
	 * Represents the content type `image/example`.
	 */
	IMAGE_EXAMPLE                                                                        = 'image/example',

	/**
	 * Represents the content type `image/fits`.
	 */
	IMAGE_FITS                                                                           = 'image/fits',

	/**
	 * Represents the content type `image/g3fax`.
	 */
	IMAGE_G3FAX                                                                          = 'image/g3fax',

	/**
	 * Represents the content type `image/gif`.
	 */
	IMAGE_GIF                                                                            = 'image/gif',

	/**
	 * Represents the content type `image/ief`.
	 */
	IMAGE_IEF                                                                            = 'image/ief',

	/**
	 * Represents the content type `image/jls`.
	 */
	IMAGE_JLS                                                                            = 'image/jls',

	/**
	 * Represents the content type `image/jp2`.
	 */
	IMAGE_JP2                                                                            = 'image/jp2',

	/**
	 * Represents the content type `image/jpeg`.
	 */
	IMAGE_JPEG                                                                           = 'image/jpeg',

	/**
	 * Represents the content type `image/jpm`.
	 */
	IMAGE_JPM                                                                            = 'image/jpm',

	/**
	 * Represents the content type `image/jpx`.
	 */
	IMAGE_JPX                                                                            = 'image/jpx',

	/**
	 * Represents the content type `image/ktx`.
	 */
	IMAGE_KTX                                                                            = 'image/ktx',

	/**
	 * Represents the content type `image/naplps`.
	 */
	IMAGE_NAPLPS                                                                         = 'image/naplps',

	/**
	 * Represents the content type `image/png`.
	 */
	IMAGE_PNG                                                                            = 'image/png',

	/**
	 * Represents the content type `image/prs.btif`.
	 */
	IMAGE_PRS_BTIF                                                                       = 'image/prs.btif',

	/**
	 * Represents the content type `image/prs.pti`.
	 */
	IMAGE_PRS_PTI                                                                        = 'image/prs.pti',

	/**
	 * Represents the content type `image/pwg-raster`.
	 */
	IMAGE_PWG_RASTER                                                                     = 'image/pwg-raster',

	/**
	 * Represents the content type `image/sgi`.
	 */
	IMAGE_SGI                                                                            = 'image/sgi',

	/**
	 * Represents the content type `image/svg+xml`.
	 */
	IMAGE_SVG_XML                                                                        = 'image/svg+xml',

	/**
	 * Represents the content type `image/t38`.
	 */
	IMAGE_T38                                                                            = 'image/t38',

	/**
	 * Represents the content type `image/tiff`.
	 */
	IMAGE_TIFF                                                                           = 'image/tiff',

	/**
	 * Represents the content type `image/tiff-fx`.
	 */
	IMAGE_TIFF_FX                                                                        = 'image/tiff-fx',

	/**
	 * Represents the content type `image/vnd.adobe.photoshop`.
	 */
	IMAGE_VND_ADOBE_PHOTOSHOP                                                            = 'image/vnd.adobe.photoshop',

	/**
	 * Represents the content type `image/vnd.airzip.accelerator.azv`.
	 */
	IMAGE_VND_AIRZIP_ACCELERATOR_AZV                                                     = 'image/vnd.airzip.accelerator.azv',

	/**
	 * Represents the content type `image/vnd.cns.inf2`.
	 */
	IMAGE_VND_CNS_INF2                                                                   = 'image/vnd.cns.inf2',

	/**
	 * Represents the content type `image/vnd.dece.graphic`.
	 */
	IMAGE_VND_DECE_GRAPHIC                                                               = 'image/vnd.dece.graphic',

	/**
	 * Represents the content type `image/vnd.djvu`.
	 */
	IMAGE_VND_DJVU                                                                       = 'image/vnd.djvu',

	/**
	 * Represents the content type `image/vnd.dvb.subtitle`.
	 */
	IMAGE_VND_DVB_SUBTITLE                                                               = 'image/vnd.dvb.subtitle',

	/**
	 * Represents the content type `image/vnd.dwg`.
	 */
	IMAGE_VND_DWG                                                                        = 'image/vnd.dwg',

	/**
	 * Represents the content type `image/vnd.dxf`.
	 */
	IMAGE_VND_DXF                                                                        = 'image/vnd.dxf',

	/**
	 * Represents the content type `image/vnd.fastbidsheet`.
	 */
	IMAGE_VND_FASTBIDSHEET                                                               = 'image/vnd.fastbidsheet',

	/**
	 * Represents the content type `image/vnd.fpx`.
	 */
	IMAGE_VND_FPX                                                                        = 'image/vnd.fpx',

	/**
	 * Represents the content type `image/vnd.fst`.
	 */
	IMAGE_VND_FST                                                                        = 'image/vnd.fst',

	/**
	 * Represents the content type `image/vnd.fujixerox.edmics-mmr`.
	 */
	IMAGE_VND_FUJIXEROX_EDMICS_MMR                                                       = 'image/vnd.fujixerox.edmics-mmr',

	/**
	 * Represents the content type `image/vnd.fujixerox.edmics-rlc`.
	 */
	IMAGE_VND_FUJIXEROX_EDMICS_RLC                                                       = 'image/vnd.fujixerox.edmics-rlc',

	/**
	 * Represents the content type `image/vnd.globalgraphics.pgb`.
	 */
	IMAGE_VND_GLOBALGRAPHICS_PGB                                                         = 'image/vnd.globalgraphics.pgb',

	/**
	 * Represents the content type `image/vnd.microsoft.icon`.
	 */
	IMAGE_VND_MICROSOFT_ICON                                                             = 'image/vnd.microsoft.icon',

	/**
	 * Represents the content type `image/vnd.mix`.
	 */
	IMAGE_VND_MIX                                                                        = 'image/vnd.mix',

	/**
	 * Represents the content type `image/vnd.mozilla.apng`.
	 */
	IMAGE_VND_MOZILLA_APNG                                                               = 'image/vnd.mozilla.apng',

	/**
	 * Represents the content type `image/vnd.ms-modi`.
	 */
	IMAGE_VND_MS_MODI                                                                    = 'image/vnd.ms-modi',

	/**
	 * Represents the content type `image/vnd.ms-photo`.
	 */
	IMAGE_VND_MS_PHOTO                                                                   = 'image/vnd.ms-photo',

	/**
	 * Represents the content type `image/vnd.net-fpx`.
	 */
	IMAGE_VND_NET_FPX                                                                    = 'image/vnd.net-fpx',

	/**
	 * Represents the content type `image/vnd.radiance`.
	 */
	IMAGE_VND_RADIANCE                                                                   = 'image/vnd.radiance',

	/**
	 * Represents the content type `image/vnd.sealed.png`.
	 */
	IMAGE_VND_SEALED_PNG                                                                 = 'image/vnd.sealed.png',

	/**
	 * Represents the content type `image/vnd.sealedmedia.softseal.gif`.
	 */
	IMAGE_VND_SEALEDMEDIA_SOFTSEAL_GIF                                                   = 'image/vnd.sealedmedia.softseal.gif',

	/**
	 * Represents the content type `image/vnd.sealedmedia.softseal.jpg`.
	 */
	IMAGE_VND_SEALEDMEDIA_SOFTSEAL_JPG                                                   = 'image/vnd.sealedmedia.softseal.jpg',

	/**
	 * Represents the content type `image/vnd.svf`.
	 */
	IMAGE_VND_SVF                                                                        = 'image/vnd.svf',

	/**
	 * Represents the content type `image/vnd.tencent.tap`.
	 */
	IMAGE_VND_TENCENT_TAP                                                                = 'image/vnd.tencent.tap',

	/**
	 * Represents the content type `image/vnd.valve.source.texture`.
	 */
	IMAGE_VND_VALVE_SOURCE_TEXTURE                                                       = 'image/vnd.valve.source.texture',

	/**
	 * Represents the content type `image/vnd.wap.wbmp`.
	 */
	IMAGE_VND_WAP_WBMP                                                                   = 'image/vnd.wap.wbmp',

	/**
	 * Represents the content type `image/vnd.xiff`.
	 */
	IMAGE_VND_XIFF                                                                       = 'image/vnd.xiff',

	/**
	 * Represents the content type `image/vnd.zbrush.pcx`.
	 */
	IMAGE_VND_ZBRUSH_PCX                                                                 = 'image/vnd.zbrush.pcx',

	/**
	 * Represents the content type `image/webp`.
	 */
	IMAGE_WEBP                                                                           = 'image/webp',

	/**
	 * Represents the content type `image/wmf`.
	 */
	IMAGE_WMF                                                                            = 'image/wmf',

	/**
	 * Represents the content type `image/x-3ds`.
	 */
	IMAGE_X_3DS                                                                          = 'image/x-3ds',

	/**
	 * Represents the content type `image/x-cmu-raster`.
	 */
	IMAGE_X_CMU_RASTER                                                                   = 'image/x-cmu-raster',

	/**
	 * Represents the content type `image/x-cmx`.
	 */
	IMAGE_X_CMX                                                                          = 'image/x-cmx',

	/**
	 * Represents the content type `image/x-freehand`.
	 */
	IMAGE_X_FREEHAND                                                                     = 'image/x-freehand',

	/**
	 * Represents the content type `image/x-icon`.
	 */
	IMAGE_X_ICON                                                                         = 'image/x-icon',

	/**
	 * Represents the content type `image/x-mrsid-image`.
	 */
	IMAGE_X_MRSID_IMAGE                                                                  = 'image/x-mrsid-image',

	/**
	 * Represents the content type `image/x-pcx`.
	 */
	IMAGE_X_PCX                                                                          = 'image/x-pcx',

	/**
	 * Represents the content type `image/x-pict`.
	 */
	IMAGE_X_PICT                                                                         = 'image/x-pict',

	/**
	 * Represents the content type `image/x-portable-anymap`.
	 */
	IMAGE_X_PORTABLE_ANYMAP                                                              = 'image/x-portable-anymap',

	/**
	 * Represents the content type `image/x-portable-bitmap`.
	 */
	IMAGE_X_PORTABLE_BITMAP                                                              = 'image/x-portable-bitmap',

	/**
	 * Represents the content type `image/x-portable-graymap`.
	 */
	IMAGE_X_PORTABLE_GRAYMAP                                                             = 'image/x-portable-graymap',

	/**
	 * Represents the content type `image/x-portable-pixmap`.
	 */
	IMAGE_X_PORTABLE_PIXMAP                                                              = 'image/x-portable-pixmap',

	/**
	 * Represents the content type `image/x-rgb`.
	 */
	IMAGE_X_RGB                                                                          = 'image/x-rgb',

	/**
	 * Represents the content type `image/x-tga`.
	 */
	IMAGE_X_TGA                                                                          = 'image/x-tga',

	/**
	 * Represents the content type `image/x-xbitmap`.
	 */
	IMAGE_X_XBITMAP                                                                      = 'image/x-xbitmap',

	/**
	 * Represents the content type `image/x-xpixmap`.
	 */
	IMAGE_X_XPIXMAP                                                                      = 'image/x-xpixmap',

	/**
	 * Represents the content type `image/x-xwindowdump`.
	 */
	IMAGE_X_XWINDOWDUMP                                                                  = 'image/x-xwindowdump',

	/**
	 * Represents the content type `message/cpim`.
	 */
	MESSAGE_CPIM                                                                         = 'message/cpim',

	/**
	 * Represents the content type `message/delivery-status`.
	 */
	MESSAGE_DELIVERY_STATUS                                                              = 'message/delivery-status',

	/**
	 * Represents the content type `message/disposition-notification`.
	 */
	MESSAGE_DISPOSITION_NOTIFICATION                                                     = 'message/disposition-notification',

	/**
	 * Represents the content type `message/example`.
	 */
	MESSAGE_EXAMPLE                                                                      = 'message/example',

	/**
	 * Represents the content type `message/external-body`.
	 */
	MESSAGE_EXTERNAL_BODY                                                                = 'message/external-body',

	/**
	 * Represents the content type `message/feedback-report`.
	 */
	MESSAGE_FEEDBACK_REPORT                                                              = 'message/feedback-report',

	/**
	 * Represents the content type `message/global`.
	 */
	MESSAGE_GLOBAL                                                                       = 'message/global',

	/**
	 * Represents the content type `message/global-delivery-status`.
	 */
	MESSAGE_GLOBAL_DELIVERY_STATUS                                                       = 'message/global-delivery-status',

	/**
	 * Represents the content type `message/global-disposition-notification`.
	 */
	MESSAGE_GLOBAL_DISPOSITION_NOTIFICATION                                              = 'message/global-disposition-notification',

	/**
	 * Represents the content type `message/global-headers`.
	 */
	MESSAGE_GLOBAL_HEADERS                                                               = 'message/global-headers',

	/**
	 * Represents the content type `message/http`.
	 */
	MESSAGE_HTTP                                                                         = 'message/http',

	/**
	 * Represents the content type `message/imdn+xml`.
	 */
	MESSAGE_IMDN_XML                                                                     = 'message/imdn+xml',

	/**
	 * Represents the content type `message/news`.
	 */
	MESSAGE_NEWS                                                                         = 'message/news',

	/**
	 * Represents the content type `message/partial`.
	 */
	MESSAGE_PARTIAL                                                                      = 'message/partial',

	/**
	 * Represents the content type `message/rfc822`.
	 */
	MESSAGE_RFC822                                                                       = 'message/rfc822',

	/**
	 * Represents the content type `message/s-http`.
	 */
	MESSAGE_S_HTTP                                                                       = 'message/s-http',

	/**
	 * Represents the content type `message/sip`.
	 */
	MESSAGE_SIP                                                                          = 'message/sip',

	/**
	 * Represents the content type `message/sipfrag`.
	 */
	MESSAGE_SIPFRAG                                                                      = 'message/sipfrag',

	/**
	 * Represents the content type `message/tracking-status`.
	 */
	MESSAGE_TRACKING_STATUS                                                              = 'message/tracking-status',

	/**
	 * Represents the content type `message/vnd.si.simp`.
	 */
	MESSAGE_VND_SI_SIMP                                                                  = 'message/vnd.si.simp',

	/**
	 * Represents the content type `message/vnd.wfa.wsc`.
	 */
	MESSAGE_VND_WFA_WSC                                                                  = 'message/vnd.wfa.wsc',

	/**
	 * Represents the content type `model/example`.
	 */
	MODEL_EXAMPLE                                                                        = 'model/example',

	/**
	 * Represents the content type `model/gltf+json`.
	 */
	MODEL_GLTF_JSON                                                                      = 'model/gltf+json',

	/**
	 * Represents the content type `model/iges`.
	 */
	MODEL_IGES                                                                           = 'model/iges',

	/**
	 * Represents the content type `model/mesh`.
	 */
	MODEL_MESH                                                                           = 'model/mesh',

	/**
	 * Represents the content type `model/vnd.collada+xml`.
	 */
	MODEL_VND_COLLADA_XML                                                                = 'model/vnd.collada+xml',

	/**
	 * Represents the content type `model/vnd.dwf`.
	 */
	MODEL_VND_DWF                                                                        = 'model/vnd.dwf',

	/**
	 * Represents the content type `model/vnd.flatland.3dml`.
	 */
	MODEL_VND_FLATLAND_3DML                                                              = 'model/vnd.flatland.3dml',

	/**
	 * Represents the content type `model/vnd.gdl`.
	 */
	MODEL_VND_GDL                                                                        = 'model/vnd.gdl',

	/**
	 * Represents the content type `model/vnd.gs-gdl`.
	 */
	MODEL_VND_GS_GDL_1                                                                   = 'model/vnd.gs-gdl',

	/**
	 * Represents the content type `model/vnd.gs.gdl`.
	 */
	MODEL_VND_GS_GDL_2                                                                   = 'model/vnd.gs.gdl',

	/**
	 * Represents the content type `model/vnd.gtw`.
	 */
	MODEL_VND_GTW                                                                        = 'model/vnd.gtw',

	/**
	 * Represents the content type `model/vnd.moml+xml`.
	 */
	MODEL_VND_MOML_XML                                                                   = 'model/vnd.moml+xml',

	/**
	 * Represents the content type `model/vnd.mts`.
	 */
	MODEL_VND_MTS                                                                        = 'model/vnd.mts',

	/**
	 * Represents the content type `model/vnd.opengex`.
	 */
	MODEL_VND_OPENGEX                                                                    = 'model/vnd.opengex',

	/**
	 * Represents the content type `model/vnd.parasolid.transmit.binary`.
	 */
	MODEL_VND_PARASOLID_TRANSMIT_BINARY                                                  = 'model/vnd.parasolid.transmit.binary',

	/**
	 * Represents the content type `model/vnd.parasolid.transmit.text`.
	 */
	MODEL_VND_PARASOLID_TRANSMIT_TEXT                                                    = 'model/vnd.parasolid.transmit.text',

	/**
	 * Represents the content type `model/vnd.rosette.annotated-data-model`.
	 */
	MODEL_VND_ROSETTE_ANNOTATED_DATA_MODEL                                               = 'model/vnd.rosette.annotated-data-model',

	/**
	 * Represents the content type `model/vnd.valve.source.compiled-map`.
	 */
	MODEL_VND_VALVE_SOURCE_COMPILED_MAP                                                  = 'model/vnd.valve.source.compiled-map',

	/**
	 * Represents the content type `model/vnd.vtu`.
	 */
	MODEL_VND_VTU                                                                        = 'model/vnd.vtu',

	/**
	 * Represents the content type `model/vrml`.
	 */
	MODEL_VRML                                                                           = 'model/vrml',

	/**
	 * Represents the content type `model/x3d+binary`.
	 */
	MODEL_X3D_BINARY                                                                     = 'model/x3d+binary',

	/**
	 * Represents the content type `model/x3d+fastinfoset`.
	 */
	MODEL_X3D_FASTINFOSET                                                                = 'model/x3d+fastinfoset',

	/**
	 * Represents the content type `model/x3d+vrml`.
	 */
	MODEL_X3D_VRML_1                                                                     = 'model/x3d+vrml',

	/**
	 * Represents the content type `model/x3d-vrml`.
	 */
	MODEL_X3D_VRML_2                                                                     = 'model/x3d-vrml',

	/**
	 * Represents the content type `model/x3d+xml`.
	 */
	MODEL_X3D_XML                                                                        = 'model/x3d+xml',

	/**
	 * Represents the content type `multipart/alternative`.
	 */
	MULTIPART_ALTERNATIVE                                                                = 'multipart/alternative',

	/**
	 * Represents the content type `multipart/appledouble`.
	 */
	MULTIPART_APPLEDOUBLE                                                                = 'multipart/appledouble',

	/**
	 * Represents the content type `multipart/byteranges`.
	 */
	MULTIPART_BYTERANGES                                                                 = 'multipart/byteranges',

	/**
	 * Represents the content type `multipart/digest`.
	 */
	MULTIPART_DIGEST                                                                     = 'multipart/digest',

	/**
	 * Represents the content type `multipart/encrypted`.
	 */
	MULTIPART_ENCRYPTED                                                                  = 'multipart/encrypted',

	/**
	 * Represents the content type `multipart/example`.
	 */
	MULTIPART_EXAMPLE                                                                    = 'multipart/example',

	/**
	 * Represents the content type `multipart/form-data`.
	 */
	MULTIPART_FORM_DATA                                                                  = 'multipart/form-data',

	/**
	 * Represents the content type `multipart/header-set`.
	 */
	MULTIPART_HEADER_SET                                                                 = 'multipart/header-set',

	/**
	 * Represents the content type `multipart/mixed`.
	 */
	MULTIPART_MIXED                                                                      = 'multipart/mixed',

	/**
	 * Represents the content type `multipart/parallel`.
	 */
	MULTIPART_PARALLEL                                                                   = 'multipart/parallel',

	/**
	 * Represents the content type `multipart/related`.
	 */
	MULTIPART_RELATED                                                                    = 'multipart/related',

	/**
	 * Represents the content type `multipart/report`.
	 */
	MULTIPART_REPORT                                                                     = 'multipart/report',

	/**
	 * Represents the content type `multipart/signed`.
	 */
	MULTIPART_SIGNED                                                                     = 'multipart/signed',

	/**
	 * Represents the content type `multipart/voice-message`.
	 */
	MULTIPART_VOICE_MESSAGE                                                              = 'multipart/voice-message',

	/**
	 * Represents the content type `multipart/x-mixed-replace`.
	 */
	MULTIPART_X_MIXED_REPLACE                                                            = 'multipart/x-mixed-replace',

	/**
	 * Represents the content type `text/1d-interleaved-parityfec`.
	 */
	TEXT_1D_INTERLEAVED_PARITYFEC                                                        = 'text/1d-interleaved-parityfec',

	/**
	 * Represents the content type `text/cache-manifest`.
	 */
	TEXT_CACHE_MANIFEST                                                                  = 'text/cache-manifest',

	/**
	 * Represents the content type `text/calendar`.
	 */
	TEXT_CALENDAR                                                                        = 'text/calendar',

	/**
	 * Represents the content type `text/css`.
	 */
	TEXT_CSS                                                                             = 'text/css',

	/**
	 * Represents the content type `text/csv`.
	 */
	TEXT_CSV                                                                             = 'text/csv',

	/**
	 * Represents the content type `text/csv-schema`.
	 */
	TEXT_CSV_SCHEMA                                                                      = 'text/csv-schema',

	/**
	 * Represents the content type `text/directory`.
	 */
	TEXT_DIRECTORY                                                                       = 'text/directory',

	/**
	 * Represents the content type `text/dns`.
	 */
	TEXT_DNS                                                                             = 'text/dns',

	/**
	 * Represents the content type `text/ecmascript`.
	 */
	TEXT_ECMASCRIPT                                                                      = 'text/ecmascript',

	/**
	 * Represents the content type `text/encaprtp`.
	 */
	TEXT_ENCAPRTP                                                                        = 'text/encaprtp',

	/**
	 * Represents the content type `text/enriched`.
	 */
	TEXT_ENRICHED                                                                        = 'text/enriched',

	/**
	 * Represents the content type `text/example`.
	 */
	TEXT_EXAMPLE                                                                         = 'text/example',

	/**
	 * Represents the content type `text/fwdred`.
	 */
	TEXT_FWDRED                                                                          = 'text/fwdred',

	/**
	 * Represents the content type `text/grammar-ref-list`.
	 */
	TEXT_GRAMMAR_REF_LIST                                                                = 'text/grammar-ref-list',

	/**
	 * Represents the content type `text/html`.
	 */
	TEXT_HTML                                                                            = 'text/html',

	/**
	 * Represents the content type `text/javascript`.
	 */
	TEXT_JAVASCRIPT                                                                      = 'text/javascript',

	/**
	 * Represents the content type `text/jcr-cnd`.
	 */
	TEXT_JCR_CND                                                                         = 'text/jcr-cnd',

	/**
	 * Represents the content type `text/markdown`.
	 */
	TEXT_MARKDOWN                                                                        = 'text/markdown',

	/**
	 * Represents the content type `text/mizar`.
	 */
	TEXT_MIZAR                                                                           = 'text/mizar',

	/**
	 * Represents the content type `text/n3`.
	 */
	TEXT_N3                                                                              = 'text/n3',

	/**
	 * Represents the content type `text/parameters`.
	 */
	TEXT_PARAMETERS                                                                      = 'text/parameters',

	/**
	 * Represents the content type `text/parityfec`.
	 */
	TEXT_PARITYFEC                                                                       = 'text/parityfec',

	/**
	 * Represents the content type `text/plain`.
	 */
	TEXT_PLAIN                                                                           = 'text/plain',

	/**
	 * Represents the content type `text/provenance-notation`.
	 */
	TEXT_PROVENANCE_NOTATION                                                             = 'text/provenance-notation',

	/**
	 * Represents the content type `text/prs.fallenstein.rst`.
	 */
	TEXT_PRS_FALLENSTEIN_RST                                                             = 'text/prs.fallenstein.rst',

	/**
	 * Represents the content type `text/prs.lines.tag`.
	 */
	TEXT_PRS_LINES_TAG                                                                   = 'text/prs.lines.tag',

	/**
	 * Represents the content type `text/prs.prop.logic`.
	 */
	TEXT_PRS_PROP_LOGIC                                                                  = 'text/prs.prop.logic',

	/**
	 * Represents the content type `text/raptorfec`.
	 */
	TEXT_RAPTORFEC                                                                       = 'text/raptorfec',

	/**
	 * Represents the content type `text/red`.
	 */
	TEXT_RED                                                                             = 'text/red',

	/**
	 * Represents the content type `text/rfc822-headers`.
	 */
	TEXT_RFC822_HEADERS                                                                  = 'text/rfc822-headers',

	/**
	 * Represents the content type `text/richtext`.
	 */
	TEXT_RICHTEXT                                                                        = 'text/richtext',

	/**
	 * Represents the content type `text/rtf`.
	 */
	TEXT_RTF                                                                             = 'text/rtf',

	/**
	 * Represents the content type `text/rtp-enc-aescm128`.
	 */
	TEXT_RTP_ENC_AESCM128                                                                = 'text/rtp-enc-aescm128',

	/**
	 * Represents the content type `text/rtploopback`.
	 */
	TEXT_RTPLOOPBACK                                                                     = 'text/rtploopback',

	/**
	 * Represents the content type `text/rtx`.
	 */
	TEXT_RTX                                                                             = 'text/rtx',

	/**
	 * Represents the content type `text/sgml`.
	 */
	TEXT_SGML                                                                            = 'text/sgml',

	/**
	 * Represents the content type `text/t140`.
	 */
	TEXT_T140                                                                            = 'text/t140',

	/**
	 * Represents the content type `text/tab-separated-values`.
	 */
	TEXT_TAB_SEPARATED_VALUES                                                            = 'text/tab-separated-values',

	/**
	 * Represents the content type `text/troff`.
	 */
	TEXT_TROFF                                                                           = 'text/troff',

	/**
	 * Represents the content type `text/turtle`.
	 */
	TEXT_TURTLE                                                                          = 'text/turtle',

	/**
	 * Represents the content type `text/ulpfec`.
	 */
	TEXT_ULPFEC                                                                          = 'text/ulpfec',

	/**
	 * Represents the content type `text/uri-list`.
	 */
	TEXT_URI_LIST                                                                        = 'text/uri-list',

	/**
	 * Represents the content type `text/vcard`.
	 */
	TEXT_VCARD                                                                           = 'text/vcard',

	/**
	 * Represents the content type `text/vnd.a`.
	 */
	TEXT_VND_A                                                                           = 'text/vnd.a',

	/**
	 * Represents the content type `text/vnd.abc`.
	 */
	TEXT_VND_ABC                                                                         = 'text/vnd.abc',

	/**
	 * Represents the content type `text/vnd.curl`.
	 */
	TEXT_VND_CURL                                                                        = 'text/vnd.curl',

	/**
	 * Represents the content type `text/vnd.curl.dcurl`.
	 */
	TEXT_VND_CURL_DCURL                                                                  = 'text/vnd.curl.dcurl',

	/**
	 * Represents the content type `text/vnd.curl.mcurl`.
	 */
	TEXT_VND_CURL_MCURL                                                                  = 'text/vnd.curl.mcurl',

	/**
	 * Represents the content type `text/vnd.curl.scurl`.
	 */
	TEXT_VND_CURL_SCURL                                                                  = 'text/vnd.curl.scurl',

	/**
	 * Represents the content type `text/vnd.debian.copyright`.
	 */
	TEXT_VND_DEBIAN_COPYRIGHT                                                            = 'text/vnd.debian.copyright',

	/**
	 * Represents the content type `text/vnd.dmclientscript`.
	 */
	TEXT_VND_DMCLIENTSCRIPT                                                              = 'text/vnd.dmclientscript',

	/**
	 * Represents the content type `text/vnd.dvb.subtitle`.
	 */
	TEXT_VND_DVB_SUBTITLE                                                                = 'text/vnd.dvb.subtitle',

	/**
	 * Represents the content type `text/vnd.esmertec.theme-descriptor`.
	 */
	TEXT_VND_ESMERTEC_THEME_DESCRIPTOR                                                   = 'text/vnd.esmertec.theme-descriptor',

	/**
	 * Represents the content type `text/vnd.fly`.
	 */
	TEXT_VND_FLY                                                                         = 'text/vnd.fly',

	/**
	 * Represents the content type `text/vnd.fmi.flexstor`.
	 */
	TEXT_VND_FMI_FLEXSTOR                                                                = 'text/vnd.fmi.flexstor',

	/**
	 * Represents the content type `text/vnd.graphviz`.
	 */
	TEXT_VND_GRAPHVIZ                                                                    = 'text/vnd.graphviz',

	/**
	 * Represents the content type `text/vnd.in3d.3dml`.
	 */
	TEXT_VND_IN3D_3DML                                                                   = 'text/vnd.in3d.3dml',

	/**
	 * Represents the content type `text/vnd.in3d.spot`.
	 */
	TEXT_VND_IN3D_SPOT                                                                   = 'text/vnd.in3d.spot',

	/**
	 * Represents the content type `text/vnd.iptc.newsml`.
	 */
	TEXT_VND_IPTC_NEWSML                                                                 = 'text/vnd.iptc.newsml',

	/**
	 * Represents the content type `text/vnd.iptc.nitf`.
	 */
	TEXT_VND_IPTC_NITF                                                                   = 'text/vnd.iptc.nitf',

	/**
	 * Represents the content type `text/vnd.latex-z`.
	 */
	TEXT_VND_LATEX_Z                                                                     = 'text/vnd.latex-z',

	/**
	 * Represents the content type `text/vnd.motorola.reflex`.
	 */
	TEXT_VND_MOTOROLA_REFLEX                                                             = 'text/vnd.motorola.reflex',

	/**
	 * Represents the content type `text/vnd.ms-mediapackage`.
	 */
	TEXT_VND_MS_MEDIAPACKAGE                                                             = 'text/vnd.ms-mediapackage',

	/**
	 * Represents the content type `text/vnd.net2phone.commcenter.command`.
	 */
	TEXT_VND_NET2PHONE_COMMCENTER_COMMAND                                                = 'text/vnd.net2phone.commcenter.command',

	/**
	 * Represents the content type `text/vnd.radisys.msml-basic-layout`.
	 */
	TEXT_VND_RADISYS_MSML_BASIC_LAYOUT                                                   = 'text/vnd.radisys.msml-basic-layout',

	/**
	 * Represents the content type `text/vnd.si.uricatalogue`.
	 */
	TEXT_VND_SI_URICATALOGUE                                                             = 'text/vnd.si.uricatalogue',

	/**
	 * Represents the content type `text/vnd.sun.j2me.app-descriptor`.
	 */
	TEXT_VND_SUN_J2ME_APP_DESCRIPTOR                                                     = 'text/vnd.sun.j2me.app-descriptor',

	/**
	 * Represents the content type `text/vnd.trolltech.linguist`.
	 */
	TEXT_VND_TROLLTECH_LINGUIST                                                          = 'text/vnd.trolltech.linguist',

	/**
	 * Represents the content type `text/vnd.wap.si`.
	 */
	TEXT_VND_WAP_SI                                                                      = 'text/vnd.wap.si',

	/**
	 * Represents the content type `text/vnd.wap.sl`.
	 */
	TEXT_VND_WAP_SL                                                                      = 'text/vnd.wap.sl',

	/**
	 * Represents the content type `text/vnd.wap.wml`.
	 */
	TEXT_VND_WAP_WML                                                                     = 'text/vnd.wap.wml',

	/**
	 * Represents the content type `text/vnd.wap.wmlscript`.
	 */
	TEXT_VND_WAP_WMLSCRIPT                                                               = 'text/vnd.wap.wmlscript',

	/**
	 * Represents the content type `text/x-asm`.
	 */
	TEXT_X_ASM                                                                           = 'text/x-asm',

	/**
	 * Represents the content type `text/x-c`.
	 */
	TEXT_X_C                                                                             = 'text/x-c',

	/**
	 * Represents the content type `text/x-fortran`.
	 */
	TEXT_X_FORTRAN                                                                       = 'text/x-fortran',

	/**
	 * Represents the content type `text/x-java-source`.
	 */
	TEXT_X_JAVA_SOURCE                                                                   = 'text/x-java-source',

	/**
	 * Represents the content type `text/x-nfo`.
	 */
	TEXT_X_NFO                                                                           = 'text/x-nfo',

	/**
	 * Represents the content type `text/x-opml`.
	 */
	TEXT_X_OPML                                                                          = 'text/x-opml',

	/**
	 * Represents the content type `text/x-pascal`.
	 */
	TEXT_X_PASCAL                                                                        = 'text/x-pascal',

	/**
	 * Represents the content type `text/x-setext`.
	 */
	TEXT_X_SETEXT                                                                        = 'text/x-setext',

	/**
	 * Represents the content type `text/x-sfv`.
	 */
	TEXT_X_SFV                                                                           = 'text/x-sfv',

	/**
	 * Represents the content type `text/x-uuencode`.
	 */
	TEXT_X_UUENCODE                                                                      = 'text/x-uuencode',

	/**
	 * Represents the content type `text/x-vcalendar`.
	 */
	TEXT_X_VCALENDAR                                                                     = 'text/x-vcalendar',

	/**
	 * Represents the content type `text/x-vcard`.
	 */
	TEXT_X_VCARD                                                                         = 'text/x-vcard',

	/**
	 * Represents the content type `text/xml`.
	 */
	TEXT_XML                                                                             = 'text/xml',

	/**
	 * Represents the content type `text/xml-external-parsed-entity`.
	 */
	TEXT_XML_EXTERNAL_PARSED_ENTITY                                                      = 'text/xml-external-parsed-entity',

	/**
	 * Represents the content type `video/1d-interleaved-parityfec`.
	 */
	VIDEO_1D_INTERLEAVED_PARITYFEC                                                       = 'video/1d-interleaved-parityfec',

	/**
	 * Represents the content type `video/3gpp`.
	 */
	VIDEO_3GPP                                                                           = 'video/3gpp',

	/**
	 * Represents the content type `video/3gpp-tt`.
	 */
	VIDEO_3GPP_TT                                                                        = 'video/3gpp-tt',

	/**
	 * Represents the content type `video/3gpp2`.
	 */
	VIDEO_3GPP2                                                                          = 'video/3gpp2',

	/**
	 * Represents the content type `video/bmpeg`.
	 */
	VIDEO_BMPEG                                                                          = 'video/bmpeg',

	/**
	 * Represents the content type `video/bt656`.
	 */
	VIDEO_BT656                                                                          = 'video/bt656',

	/**
	 * Represents the content type `video/celb`.
	 */
	VIDEO_CELB                                                                           = 'video/celb',

	/**
	 * Represents the content type `video/dv`.
	 */
	VIDEO_DV                                                                             = 'video/dv',

	/**
	 * Represents the content type `video/encaprtp`.
	 */
	VIDEO_ENCAPRTP                                                                       = 'video/encaprtp',

	/**
	 * Represents the content type `video/example`.
	 */
	VIDEO_EXAMPLE                                                                        = 'video/example',

	/**
	 * Represents the content type `video/h261`.
	 */
	VIDEO_H261                                                                           = 'video/h261',

	/**
	 * Represents the content type `video/h263`.
	 */
	VIDEO_H263                                                                           = 'video/h263',

	/**
	 * Represents the content type `video/h263-1998`.
	 */
	VIDEO_H263_1998                                                                      = 'video/h263-1998',

	/**
	 * Represents the content type `video/h263-2000`.
	 */
	VIDEO_H263_2000                                                                      = 'video/h263-2000',

	/**
	 * Represents the content type `video/h264`.
	 */
	VIDEO_H264                                                                           = 'video/h264',

	/**
	 * Represents the content type `video/h264-rcdo`.
	 */
	VIDEO_H264_RCDO                                                                      = 'video/h264-rcdo',

	/**
	 * Represents the content type `video/h264-svc`.
	 */
	VIDEO_H264_SVC                                                                       = 'video/h264-svc',

	/**
	 * Represents the content type `video/h265`.
	 */
	VIDEO_H265                                                                           = 'video/h265',

	/**
	 * Represents the content type `video/iso.segment`.
	 */
	VIDEO_ISO_SEGMENT                                                                    = 'video/iso.segment',

	/**
	 * Represents the content type `video/jpeg`.
	 */
	VIDEO_JPEG                                                                           = 'video/jpeg',

	/**
	 * Represents the content type `video/jpeg2000`.
	 */
	VIDEO_JPEG2000                                                                       = 'video/jpeg2000',

	/**
	 * Represents the content type `video/jpm`.
	 */
	VIDEO_JPM                                                                            = 'video/jpm',

	/**
	 * Represents the content type `video/mj2`.
	 */
	VIDEO_MJ2                                                                            = 'video/mj2',

	/**
	 * Represents the content type `video/mp1s`.
	 */
	VIDEO_MP1S                                                                           = 'video/mp1s',

	/**
	 * Represents the content type `video/mp2p`.
	 */
	VIDEO_MP2P                                                                           = 'video/mp2p',

	/**
	 * Represents the content type `video/mp2t`.
	 */
	VIDEO_MP2T                                                                           = 'video/mp2t',

	/**
	 * Represents the content type `video/mp4`.
	 */
	VIDEO_MP4                                                                            = 'video/mp4',

	/**
	 * Represents the content type `video/mp4v-es`.
	 */
	VIDEO_MP4V_ES                                                                        = 'video/mp4v-es',

	/**
	 * Represents the content type `video/mpeg`.
	 */
	VIDEO_MPEG                                                                           = 'video/mpeg',

	/**
	 * Represents the content type `video/mpeg4-generic`.
	 */
	VIDEO_MPEG4_GENERIC                                                                  = 'video/mpeg4-generic',

	/**
	 * Represents the content type `video/mpv`.
	 */
	VIDEO_MPV                                                                            = 'video/mpv',

	/**
	 * Represents the content type `video/nv`.
	 */
	VIDEO_NV                                                                             = 'video/nv',

	/**
	 * Represents the content type `video/ogg`.
	 */
	VIDEO_OGG                                                                            = 'video/ogg',

	/**
	 * Represents the content type `video/parityfec`.
	 */
	VIDEO_PARITYFEC                                                                      = 'video/parityfec',

	/**
	 * Represents the content type `video/pointer`.
	 */
	VIDEO_POINTER                                                                        = 'video/pointer',

	/**
	 * Represents the content type `video/quicktime`.
	 */
	VIDEO_QUICKTIME                                                                      = 'video/quicktime',

	/**
	 * Represents the content type `video/raptorfec`.
	 */
	VIDEO_RAPTORFEC                                                                      = 'video/raptorfec',

	/**
	 * Represents the content type `video/raw`.
	 */
	VIDEO_RAW                                                                            = 'video/raw',

	/**
	 * Represents the content type `video/rtp-enc-aescm128`.
	 */
	VIDEO_RTP_ENC_AESCM128                                                               = 'video/rtp-enc-aescm128',

	/**
	 * Represents the content type `video/rtploopback`.
	 */
	VIDEO_RTPLOOPBACK                                                                    = 'video/rtploopback',

	/**
	 * Represents the content type `video/rtx`.
	 */
	VIDEO_RTX                                                                            = 'video/rtx',

	/**
	 * Represents the content type `video/smpte292m`.
	 */
	VIDEO_SMPTE292M                                                                      = 'video/smpte292m',

	/**
	 * Represents the content type `video/ulpfec`.
	 */
	VIDEO_ULPFEC                                                                         = 'video/ulpfec',

	/**
	 * Represents the content type `video/vc1`.
	 */
	VIDEO_VC1                                                                            = 'video/vc1',

	/**
	 * Represents the content type `video/vnd.cctv`.
	 */
	VIDEO_VND_CCTV                                                                       = 'video/vnd.cctv',

	/**
	 * Represents the content type `video/vnd.dece.hd`.
	 */
	VIDEO_VND_DECE_HD                                                                    = 'video/vnd.dece.hd',

	/**
	 * Represents the content type `video/vnd.dece.mobile`.
	 */
	VIDEO_VND_DECE_MOBILE                                                                = 'video/vnd.dece.mobile',

	/**
	 * Represents the content type `video/vnd.dece.mp4`.
	 */
	VIDEO_VND_DECE_MP4                                                                   = 'video/vnd.dece.mp4',

	/**
	 * Represents the content type `video/vnd.dece.pd`.
	 */
	VIDEO_VND_DECE_PD                                                                    = 'video/vnd.dece.pd',

	/**
	 * Represents the content type `video/vnd.dece.sd`.
	 */
	VIDEO_VND_DECE_SD                                                                    = 'video/vnd.dece.sd',

	/**
	 * Represents the content type `video/vnd.dece.video`.
	 */
	VIDEO_VND_DECE_VIDEO                                                                 = 'video/vnd.dece.video',

	/**
	 * Represents the content type `video/vnd.directv.mpeg`.
	 */
	VIDEO_VND_DIRECTV_MPEG                                                               = 'video/vnd.directv.mpeg',

	/**
	 * Represents the content type `video/vnd.directv.mpeg-tts`.
	 */
	VIDEO_VND_DIRECTV_MPEG_TTS                                                           = 'video/vnd.directv.mpeg-tts',

	/**
	 * Represents the content type `video/vnd.dlna.mpeg-tts`.
	 */
	VIDEO_VND_DLNA_MPEG_TTS                                                              = 'video/vnd.dlna.mpeg-tts',

	/**
	 * Represents the content type `video/vnd.dvb.file`.
	 */
	VIDEO_VND_DVB_FILE                                                                   = 'video/vnd.dvb.file',

	/**
	 * Represents the content type `video/vnd.fvt`.
	 */
	VIDEO_VND_FVT                                                                        = 'video/vnd.fvt',

	/**
	 * Represents the content type `video/vnd.hns.video`.
	 */
	VIDEO_VND_HNS_VIDEO                                                                  = 'video/vnd.hns.video',

	/**
	 * Represents the content type `video/vnd.iptvforum.1dparityfec-1010`.
	 */
	VIDEO_VND_IPTVFORUM_1DPARITYFEC_1010                                                 = 'video/vnd.iptvforum.1dparityfec-1010',

	/**
	 * Represents the content type `video/vnd.iptvforum.1dparityfec-2005`.
	 */
	VIDEO_VND_IPTVFORUM_1DPARITYFEC_2005                                                 = 'video/vnd.iptvforum.1dparityfec-2005',

	/**
	 * Represents the content type `video/vnd.iptvforum.2dparityfec-1010`.
	 */
	VIDEO_VND_IPTVFORUM_2DPARITYFEC_1010                                                 = 'video/vnd.iptvforum.2dparityfec-1010',

	/**
	 * Represents the content type `video/vnd.iptvforum.2dparityfec-2005`.
	 */
	VIDEO_VND_IPTVFORUM_2DPARITYFEC_2005                                                 = 'video/vnd.iptvforum.2dparityfec-2005',

	/**
	 * Represents the content type `video/vnd.iptvforum.ttsavc`.
	 */
	VIDEO_VND_IPTVFORUM_TTSAVC                                                           = 'video/vnd.iptvforum.ttsavc',

	/**
	 * Represents the content type `video/vnd.iptvforum.ttsmpeg2`.
	 */
	VIDEO_VND_IPTVFORUM_TTSMPEG2                                                         = 'video/vnd.iptvforum.ttsmpeg2',

	/**
	 * Represents the content type `video/vnd.motorola.video`.
	 */
	VIDEO_VND_MOTOROLA_VIDEO                                                             = 'video/vnd.motorola.video',

	/**
	 * Represents the content type `video/vnd.motorola.videop`.
	 */
	VIDEO_VND_MOTOROLA_VIDEOP                                                            = 'video/vnd.motorola.videop',

	/**
	 * Represents the content type `video/vnd.mpegurl`.
	 */
	VIDEO_VND_MPEGURL                                                                    = 'video/vnd.mpegurl',

	/**
	 * Represents the content type `video/vnd.ms-playready.media.pyv`.
	 */
	VIDEO_VND_MS_PLAYREADY_MEDIA_PYV                                                     = 'video/vnd.ms-playready.media.pyv',

	/**
	 * Represents the content type `video/vnd.nokia.interleaved-multimedia`.
	 */
	VIDEO_VND_NOKIA_INTERLEAVED_MULTIMEDIA                                               = 'video/vnd.nokia.interleaved-multimedia',

	/**
	 * Represents the content type `video/vnd.nokia.videovoip`.
	 */
	VIDEO_VND_NOKIA_VIDEOVOIP                                                            = 'video/vnd.nokia.videovoip',

	/**
	 * Represents the content type `video/vnd.objectvideo`.
	 */
	VIDEO_VND_OBJECTVIDEO                                                                = 'video/vnd.objectvideo',

	/**
	 * Represents the content type `video/vnd.radgamettools.bink`.
	 */
	VIDEO_VND_RADGAMETTOOLS_BINK                                                         = 'video/vnd.radgamettools.bink',

	/**
	 * Represents the content type `video/vnd.radgamettools.smacker`.
	 */
	VIDEO_VND_RADGAMETTOOLS_SMACKER                                                      = 'video/vnd.radgamettools.smacker',

	/**
	 * Represents the content type `video/vnd.sealed.mpeg1`.
	 */
	VIDEO_VND_SEALED_MPEG1                                                               = 'video/vnd.sealed.mpeg1',

	/**
	 * Represents the content type `video/vnd.sealed.mpeg4`.
	 */
	VIDEO_VND_SEALED_MPEG4                                                               = 'video/vnd.sealed.mpeg4',

	/**
	 * Represents the content type `video/vnd.sealed.swf`.
	 */
	VIDEO_VND_SEALED_SWF                                                                 = 'video/vnd.sealed.swf',

	/**
	 * Represents the content type `video/vnd.sealedmedia.softseal.mov`.
	 */
	VIDEO_VND_SEALEDMEDIA_SOFTSEAL_MOV                                                   = 'video/vnd.sealedmedia.softseal.mov',

	/**
	 * Represents the content type `video/vnd.uvvu.mp4`.
	 */
	VIDEO_VND_UVVU_MP4                                                                   = 'video/vnd.uvvu.mp4',

	/**
	 * Represents the content type `video/vnd.vivo`.
	 */
	VIDEO_VND_VIVO                                                                       = 'video/vnd.vivo',

	/**
	 * Represents the content type `video/vp8`.
	 */
	VIDEO_VP8                                                                            = 'video/vp8',

	/**
	 * Represents the content type `video/webm`.
	 */
	VIDEO_WEBM                                                                           = 'video/webm',

	/**
	 * Represents the content type `video/x-f4v`.
	 */
	VIDEO_X_F4V                                                                          = 'video/x-f4v',

	/**
	 * Represents the content type `video/x-fli`.
	 */
	VIDEO_X_FLI                                                                          = 'video/x-fli',

	/**
	 * Represents the content type `video/x-flv`.
	 */
	VIDEO_X_FLV                                                                          = 'video/x-flv',

	/**
	 * Represents the content type `video/x-m4v`.
	 */
	VIDEO_X_M4V                                                                          = 'video/x-m4v',

	/**
	 * Represents the content type `video/x-matroska`.
	 */
	VIDEO_X_MATROSKA                                                                     = 'video/x-matroska',

	/**
	 * Represents the content type `video/x-mng`.
	 */
	VIDEO_X_MNG                                                                          = 'video/x-mng',

	/**
	 * Represents the content type `video/x-ms-asf`.
	 */
	VIDEO_X_MS_ASF                                                                       = 'video/x-ms-asf',

	/**
	 * Represents the content type `video/x-ms-vob`.
	 */
	VIDEO_X_MS_VOB                                                                       = 'video/x-ms-vob',

	/**
	 * Represents the content type `video/x-ms-wm`.
	 */
	VIDEO_X_MS_WM                                                                        = 'video/x-ms-wm',

	/**
	 * Represents the content type `video/x-ms-wmv`.
	 */
	VIDEO_X_MS_WMV                                                                       = 'video/x-ms-wmv',

	/**
	 * Represents the content type `video/x-ms-wmx`.
	 */
	VIDEO_X_MS_WMX                                                                       = 'video/x-ms-wmx',

	/**
	 * Represents the content type `video/x-ms-wvx`.
	 */
	VIDEO_X_MS_WVX                                                                       = 'video/x-ms-wvx',

	/**
	 * Represents the content type `video/x-msvideo`.
	 */
	VIDEO_X_MSVIDEO                                                                      = 'video/x-msvideo',

	/**
	 * Represents the content type `video/x-sgi-movie`.
	 */
	VIDEO_X_SGI_MOVIE                                                                    = 'video/x-sgi-movie',

	/**
	 * Represents the content type `video/x-smv`.
	 */
	VIDEO_X_SMV                                                                          = 'video/x-smv',

	/**
	 * Represents the content type `x-conference/x-cooltalk`.
	 */
	X_CONFERENCE_X_COOLTALK                                                              = 'x-conference/x-cooltalk'
}
