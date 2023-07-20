'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';
import { InvalidCharSetException } from '../Text/InvalidCharSetException.js';

/**
 * Represents an enumeration of MIME types.
 * @link https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
 * @version Rev. 1911155
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MimeType extends AbstractStatic
{
	/**
	 * Represents the error message if a charset is empty.
	 * @type {String}
	 */
	static get _ERROR_MESSAGE_CHARSET_IS_EMPTY()
	{
		return 'The charset is empty.';
	}

	/**
	 * Represents the content type `application/1d-interleaved-parityfec`.
	 * @type {String}
	 */
	static get APPLICATION_1D_INTERLEAVED_PARITYFEC()
	{
		return 'application/1d-interleaved-parityfec';
	}

	/**
	 * Represents the content type `application/3gpdash-qoe-report+xml`.
	 * @type {String}
	 */
	static get APPLICATION_3GPDASH_QOE_REPORT_XML()
	{
		return 'application/3gpdash-qoe-report+xml';
	}

	/**
	 * Represents the content type `application/3gpp-ims+xml`.
	 * @type {String}
	 */
	static get APPLICATION_3GPP_IMS_XML()
	{
		return 'application/3gpp-ims+xml';
	}

	/**
	 * Represents the content type `application/a2l`.
	 * @type {String}
	 */
	static get APPLICATION_A2L()
	{
		return 'application/a2l';
	}

	/**
	 * Represents the content type `application/activemessage`.
	 * @type {String}
	 */
	static get APPLICATION_ACTIVEMESSAGE()
	{
		return 'application/activemessage';
	}

	/**
	 * Represents the content type `application/alto-costmap+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_COSTMAP_JSON()
	{
		return 'application/alto-costmap+json';
	}

	/**
	 * Represents the content type `application/alto-costmapfilter+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_COSTMAPFILTER_JSON()
	{
		return 'application/alto-costmapfilter+json';
	}

	/**
	 * Represents the content type `application/alto-directory+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_DIRECTORY_JSON()
	{
		return 'application/alto-directory+json';
	}

	/**
	 * Represents the content type `application/alto-endpointcost+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_ENDPOINTCOST_JSON()
	{
		return 'application/alto-endpointcost+json';
	}

	/**
	 * Represents the content type `application/alto-endpointcostparams+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_ENDPOINTCOSTPARAMS_JSON()
	{
		return 'application/alto-endpointcostparams+json';
	}

	/**
	 * Represents the content type `application/alto-endpointprop+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_ENDPOINTPROP_JSON()
	{
		return 'application/alto-endpointprop+json';
	}

	/**
	 * Represents the content type `application/alto-endpointpropparams+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_ENDPOINTPROPPARAMS_JSON()
	{
		return 'application/alto-endpointpropparams+json';
	}

	/**
	 * Represents the content type `application/alto-error+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_ERROR_JSON()
	{
		return 'application/alto-error+json';
	}

	/**
	 * Represents the content type `application/alto-networkmap+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_NETWORKMAP_JSON()
	{
		return 'application/alto-networkmap+json';
	}

	/**
	 * Represents the content type `application/alto-networkmapfilter+json`.
	 * @type {String}
	 */
	static get APPLICATION_ALTO_NETWORKMAPFILTER_JSON()
	{
		return 'application/alto-networkmapfilter+json';
	}

	/**
	 * Represents the content type `application/aml`.
	 * @type {String}
	 */
	static get APPLICATION_AML()
	{
		return 'application/aml';
	}

	/**
	 * Represents the content type `application/andrew-inset`.
	 * @type {String}
	 */
	static get APPLICATION_ANDREW_INSET()
	{
		return 'application/andrew-inset';
	}

	/**
	 * Represents the content type `application/applefile`.
	 * @type {String}
	 */
	static get APPLICATION_APPLEFILE()
	{
		return 'application/applefile';
	}

	/**
	 * Represents the content type `application/applixware`.
	 * @type {String}
	 */
	static get APPLICATION_APPLIXWARE()
	{
		return 'application/applixware';
	}

	/**
	 * Represents the content type `application/atf`.
	 * @type {String}
	 */
	static get APPLICATION_ATF()
	{
		return 'application/atf';
	}

	/**
	 * Represents the content type `application/atfx`.
	 * @type {String}
	 */
	static get APPLICATION_ATFX()
	{
		return 'application/atfx';
	}

	/**
	 * Represents the content type `application/atom+xml`.
	 * @type {String}
	 */
	static get APPLICATION_ATOM_XML()
	{
		return 'application/atom+xml';
	}

	/**
	 * Represents the content type `application/atomcat+xml`.
	 * @type {String}
	 */
	static get APPLICATION_ATOMCAT_XML()
	{
		return 'application/atomcat+xml';
	}

	/**
	 * Represents the content type `application/atomdeleted+xml`.
	 * @type {String}
	 */
	static get APPLICATION_ATOMDELETED_XML()
	{
		return 'application/atomdeleted+xml';
	}

	/**
	 * Represents the content type `application/atomicmail`.
	 * @type {String}
	 */
	static get APPLICATION_ATOMICMAIL()
	{
		return 'application/atomicmail';
	}

	/**
	 * Represents the content type `application/atomsvc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_ATOMSVC_XML()
	{
		return 'application/atomsvc+xml';
	}

	/**
	 * Represents the content type `application/atxml`.
	 * @type {String}
	 */
	static get APPLICATION_ATXML()
	{
		return 'application/atxml';
	}

	/**
	 * Represents the content type `application/auth-policy+xml`.
	 * @type {String}
	 */
	static get APPLICATION_AUTH_POLICY_XML()
	{
		return 'application/auth-policy+xml';
	}

	/**
	 * Represents the content type `application/bacnet-xdd+zip`.
	 * @type {String}
	 */
	static get APPLICATION_BACNET_XDD_ZIP()
	{
		return 'application/bacnet-xdd+zip';
	}

	/**
	 * Represents the content type `application/batch-smtp`.
	 * @type {String}
	 */
	static get APPLICATION_BATCH_SMTP()
	{
		return 'application/batch-smtp';
	}

	/**
	 * Represents the content type `application/beep+xml`.
	 * @type {String}
	 */
	static get APPLICATION_BEEP_XML()
	{
		return 'application/beep+xml';
	}

	/**
	 * Represents the content type `application/calendar+json`.
	 * @type {String}
	 */
	static get APPLICATION_CALENDAR_JSON()
	{
		return 'application/calendar+json';
	}

	/**
	 * Represents the content type `application/calendar+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CALENDAR_XML()
	{
		return 'application/calendar+xml';
	}

	/**
	 * Represents the content type `application/call-completion`.
	 * @type {String}
	 */
	static get APPLICATION_CALL_COMPLETION()
	{
		return 'application/call-completion';
	}

	/**
	 * Represents the content type `application/cals-1840`.
	 * @type {String}
	 */
	static get APPLICATION_CALS_1840()
	{
		return 'application/cals-1840';
	}

	/**
	 * Represents the content type `application/cbor`.
	 * @type {String}
	 */
	static get APPLICATION_CBOR()
	{
		return 'application/cbor';
	}

	/**
	 * Represents the content type `application/ccmp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CCMP_XML()
	{
		return 'application/ccmp+xml';
	}

	/**
	 * Represents the content type `application/ccxml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CCXML_XML()
	{
		return 'application/ccxml+xml';
	}

	/**
	 * Represents the content type `application/cdfx+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CDFX_XML()
	{
		return 'application/cdfx+xml';
	}

	/**
	 * Represents the content type `application/cdmi-capability`.
	 * @type {String}
	 */
	static get APPLICATION_CDMI_CAPABILITY()
	{
		return 'application/cdmi-capability';
	}

	/**
	 * Represents the content type `application/cdmi-container`.
	 * @type {String}
	 */
	static get APPLICATION_CDMI_CONTAINER()
	{
		return 'application/cdmi-container';
	}

	/**
	 * Represents the content type `application/cdmi-domain`.
	 * @type {String}
	 */
	static get APPLICATION_CDMI_DOMAIN()
	{
		return 'application/cdmi-domain';
	}

	/**
	 * Represents the content type `application/cdmi-object`.
	 * @type {String}
	 */
	static get APPLICATION_CDMI_OBJECT()
	{
		return 'application/cdmi-object';
	}

	/**
	 * Represents the content type `application/cdmi-queue`.
	 * @type {String}
	 */
	static get APPLICATION_CDMI_QUEUE()
	{
		return 'application/cdmi-queue';
	}

	/**
	 * Represents the content type `application/cdni`.
	 * @type {String}
	 */
	static get APPLICATION_CDNI()
	{
		return 'application/cdni';
	}

	/**
	 * Represents the content type `application/cea`.
	 * @type {String}
	 */
	static get APPLICATION_CEA()
	{
		return 'application/cea';
	}

	/**
	 * Represents the content type `application/cea-2018+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CEA_2018_XML()
	{
		return 'application/cea-2018+xml';
	}

	/**
	 * Represents the content type `application/cellml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CELLML_XML()
	{
		return 'application/cellml+xml';
	}

	/**
	 * Represents the content type `application/cfw`.
	 * @type {String}
	 */
	static get APPLICATION_CFW()
	{
		return 'application/cfw';
	}

	/**
	 * Represents the content type `application/cms`.
	 * @type {String}
	 */
	static get APPLICATION_CMS()
	{
		return 'application/cms';
	}

	/**
	 * Represents the content type `application/cnrp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CNRP_XML()
	{
		return 'application/cnrp+xml';
	}

	/**
	 * Represents the content type `application/coap-group+json`.
	 * @type {String}
	 */
	static get APPLICATION_COAP_GROUP_JSON()
	{
		return 'application/coap-group+json';
	}

	/**
	 * Represents the content type `application/commonground`.
	 * @type {String}
	 */
	static get APPLICATION_COMMONGROUND()
	{
		return 'application/commonground';
	}

	/**
	 * Represents the content type `application/conference-info+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CONFERENCE_INFO_XML()
	{
		return 'application/conference-info+xml';
	}

	/**
	 * Represents the content type `application/cpl+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CPL_XML()
	{
		return 'application/cpl+xml';
	}

	/**
	 * Represents the content type `application/csrattrs`.
	 * @type {String}
	 */
	static get APPLICATION_CSRATTRS()
	{
		return 'application/csrattrs';
	}

	/**
	 * Represents the content type `application/csta+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CSTA_XML()
	{
		return 'application/csta+xml';
	}

	/**
	 * Represents the content type `application/cstadata+xml`.
	 * @type {String}
	 */
	static get APPLICATION_CSTADATA_XML()
	{
		return 'application/cstadata+xml';
	}

	/**
	 * Represents the content type `application/csvm+json`.
	 * @type {String}
	 */
	static get APPLICATION_CSVM_JSON()
	{
		return 'application/csvm+json';
	}

	/**
	 * Represents the content type `application/cu-seeme`.
	 * @type {String}
	 */
	static get APPLICATION_CU_SEEME()
	{
		return 'application/cu-seeme';
	}

	/**
	 * Represents the content type `application/cybercash`.
	 * @type {String}
	 */
	static get APPLICATION_CYBERCASH()
	{
		return 'application/cybercash';
	}

	/**
	 * Represents the content type `application/dash+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DASH_XML()
	{
		return 'application/dash+xml';
	}

	/**
	 * Represents the content type `application/dashdelta`.
	 * @type {String}
	 */
	static get APPLICATION_DASHDELTA()
	{
		return 'application/dashdelta';
	}

	/**
	 * Represents the content type `application/davmount+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DAVMOUNT_XML()
	{
		return 'application/davmount+xml';
	}

	/**
	 * Represents the content type `application/dca-rft`.
	 * @type {String}
	 */
	static get APPLICATION_DCA_RFT()
	{
		return 'application/dca-rft';
	}

	/**
	 * Represents the content type `application/dcd`.
	 * @type {String}
	 */
	static get APPLICATION_DCD()
	{
		return 'application/dcd';
	}

	/**
	 * Represents the content type `application/dec-dx`.
	 * @type {String}
	 */
	static get APPLICATION_DEC_DX()
	{
		return 'application/dec-dx';
	}

	/**
	 * Represents the content type `application/dialog-info+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DIALOG_INFO_XML()
	{
		return 'application/dialog-info+xml';
	}

	/**
	 * Represents the content type `application/dicom`.
	 * @type {String}
	 */
	static get APPLICATION_DICOM()
	{
		return 'application/dicom';
	}

	/**
	 * Represents the content type `application/dii`.
	 * @type {String}
	 */
	static get APPLICATION_DII()
	{
		return 'application/dii';
	}

	/**
	 * Represents the content type `application/dit`.
	 * @type {String}
	 */
	static get APPLICATION_DIT()
	{
		return 'application/dit';
	}

	/**
	 * Represents the content type `application/dns`.
	 * @type {String}
	 */
	static get APPLICATION_DNS()
	{
		return 'application/dns';
	}

	/**
	 * Represents the content type `application/docbook+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DOCBOOK_XML()
	{
		return 'application/docbook+xml';
	}

	/**
	 * Represents the content type `application/dskpp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DSKPP_XML()
	{
		return 'application/dskpp+xml';
	}

	/**
	 * Represents the content type `application/dssc+der`.
	 * @type {String}
	 */
	static get APPLICATION_DSSC_DER()
	{
		return 'application/dssc+der';
	}

	/**
	 * Represents the content type `application/dssc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_DSSC_XML()
	{
		return 'application/dssc+xml';
	}

	/**
	 * Represents the content type `application/dvcs`.
	 * @type {String}
	 */
	static get APPLICATION_DVCS()
	{
		return 'application/dvcs';
	}

	/**
	 * Represents the content type `application/ecmascript`.
	 * @type {String}
	 */
	static get APPLICATION_ECMASCRIPT()
	{
		return 'application/ecmascript';
	}

	/**
	 * Represents the content type `application/edi-consent`.
	 * @type {String}
	 */
	static get APPLICATION_EDI_CONSENT()
	{
		return 'application/edi-consent';
	}

	/**
	 * Represents the content type `application/edi-x12`.
	 * @type {String}
	 */
	static get APPLICATION_EDI_X12()
	{
		return 'application/edi-x12';
	}

	/**
	 * Represents the content type `application/edifact`.
	 * @type {String}
	 */
	static get APPLICATION_EDIFACT()
	{
		return 'application/edifact';
	}

	/**
	 * Represents the content type `application/efi`.
	 * @type {String}
	 */
	static get APPLICATION_EFI()
	{
		return 'application/efi';
	}

	/**
	 * Represents the content type `application/emergencycalldata.comment+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMERGENCYCALLDATA_COMMENT_XML()
	{
		return 'application/emergencycalldata.comment+xml';
	}

	/**
	 * Represents the content type `application/emergencycalldata.deviceinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMERGENCYCALLDATA_DEVICEINFO_XML()
	{
		return 'application/emergencycalldata.deviceinfo+xml';
	}

	/**
	 * Represents the content type `application/emergencycalldata.providerinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMERGENCYCALLDATA_PROVIDERINFO_XML()
	{
		return 'application/emergencycalldata.providerinfo+xml';
	}

	/**
	 * Represents the content type `application/emergencycalldata.serviceinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMERGENCYCALLDATA_SERVICEINFO_XML()
	{
		return 'application/emergencycalldata.serviceinfo+xml';
	}

	/**
	 * Represents the content type `application/emergencycalldata.subscriberinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMERGENCYCALLDATA_SUBSCRIBERINFO_XML()
	{
		return 'application/emergencycalldata.subscriberinfo+xml';
	}

	/**
	 * Represents the content type `application/emma+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMMA_XML()
	{
		return 'application/emma+xml';
	}

	/**
	 * Represents the content type `application/emotionml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EMOTIONML_XML()
	{
		return 'application/emotionml+xml';
	}

	/**
	 * Represents the content type `application/encaprtp`.
	 * @type {String}
	 */
	static get APPLICATION_ENCAPRTP()
	{
		return 'application/encaprtp';
	}

	/**
	 * Represents the content type `application/epp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_EPP_XML()
	{
		return 'application/epp+xml';
	}

	/**
	 * Represents the content type `application/epub+zip`.
	 * @type {String}
	 */
	static get APPLICATION_EPUB_ZIP()
	{
		return 'application/epub+zip';
	}

	/**
	 * Represents the content type `application/eshop`.
	 * @type {String}
	 */
	static get APPLICATION_ESHOP()
	{
		return 'application/eshop';
	}

	/**
	 * Represents the content type `application/example`.
	 * @type {String}
	 */
	static get APPLICATION_EXAMPLE()
	{
		return 'application/example';
	}

	/**
	 * Represents the content type `application/exi`.
	 * @type {String}
	 */
	static get APPLICATION_EXI()
	{
		return 'application/exi';
	}

	/**
	 * Represents the content type `application/fastinfoset`.
	 * @type {String}
	 */
	static get APPLICATION_FASTINFOSET()
	{
		return 'application/fastinfoset';
	}

	/**
	 * Represents the content type `application/fastsoap`.
	 * @type {String}
	 */
	static get APPLICATION_FASTSOAP()
	{
		return 'application/fastsoap';
	}

	/**
	 * Represents the content type `application/fdt+xml`.
	 * @type {String}
	 */
	static get APPLICATION_FDT_XML()
	{
		return 'application/fdt+xml';
	}

	/**
	 * Represents the content type `application/fits`.
	 * @type {String}
	 */
	static get APPLICATION_FITS()
	{
		return 'application/fits';
	}

	/**
	 * Represents the content type `application/font-tdpfr`.
	 * @type {String}
	 */
	static get APPLICATION_FONT_TDPFR()
	{
		return 'application/font-tdpfr';
	}

	/**
	 * Represents the content type `application/framework-attributes+xml`.
	 * @type {String}
	 */
	static get APPLICATION_FRAMEWORK_ATTRIBUTES_XML()
	{
		return 'application/framework-attributes+xml';
	}

	/**
	 * Represents the content type `application/geo+json`.
	 * @type {String}
	 */
	static get APPLICATION_GEO_JSON()
	{
		return 'application/geo+json';
	}

	/**
	 * Represents the content type `application/gml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_GML_XML()
	{
		return 'application/gml+xml';
	}

	/**
	 * Represents the content type `application/gpx+xml`.
	 * @type {String}
	 */
	static get APPLICATION_GPX_XML()
	{
		return 'application/gpx+xml';
	}

	/**
	 * Represents the content type `application/gxf`.
	 * @type {String}
	 */
	static get APPLICATION_GXF()
	{
		return 'application/gxf';
	}

	/**
	 * Represents the content type `application/gzip`.
	 * @type {String}
	 */
	static get APPLICATION_GZIP()
	{
		return 'application/gzip';
	}

	/**
	 * Represents the content type `application/h224`.
	 * @type {String}
	 */
	static get APPLICATION_H224()
	{
		return 'application/h224';
	}

	/**
	 * Represents the content type `application/held+xml`.
	 * @type {String}
	 */
	static get APPLICATION_HELD_XML()
	{
		return 'application/held+xml';
	}

	/**
	 * Represents the content type `application/http`.
	 * @type {String}
	 */
	static get APPLICATION_HTTP()
	{
		return 'application/http';
	}

	/**
	 * Represents the content type `application/hyperstudio`.
	 * @type {String}
	 */
	static get APPLICATION_HYPERSTUDIO()
	{
		return 'application/hyperstudio';
	}

	/**
	 * Represents the content type `application/ibe-key-request+xml`.
	 * @type {String}
	 */
	static get APPLICATION_IBE_KEY_REQUEST_XML()
	{
		return 'application/ibe-key-request+xml';
	}

	/**
	 * Represents the content type `application/ibe-pkg-reply+xml`.
	 * @type {String}
	 */
	static get APPLICATION_IBE_PKG_REPLY_XML()
	{
		return 'application/ibe-pkg-reply+xml';
	}

	/**
	 * Represents the content type `application/ibe-pp-data`.
	 * @type {String}
	 */
	static get APPLICATION_IBE_PP_DATA()
	{
		return 'application/ibe-pp-data';
	}

	/**
	 * Represents the content type `application/iges`.
	 * @type {String}
	 */
	static get APPLICATION_IGES()
	{
		return 'application/iges';
	}

	/**
	 * Represents the content type `application/im-iscomposing+xml`.
	 * @type {String}
	 */
	static get APPLICATION_IM_ISCOMPOSING_XML()
	{
		return 'application/im-iscomposing+xml';
	}

	/**
	 * Represents the content type `application/index`.
	 * @type {String}
	 */
	static get APPLICATION_INDEX()
	{
		return 'application/index';
	}

	/**
	 * Represents the content type `application/index.cmd`.
	 * @type {String}
	 */
	static get APPLICATION_INDEX_CMD()
	{
		return 'application/index.cmd';
	}

	/**
	 * Represents the content type `application/index.obj`.
	 * @type {String}
	 */
	static get APPLICATION_INDEX_OBJ()
	{
		return 'application/index.obj';
	}

	/**
	 * Represents the content type `application/index.response`.
	 * @type {String}
	 */
	static get APPLICATION_INDEX_RESPONSE()
	{
		return 'application/index.response';
	}

	/**
	 * Represents the content type `application/index.vnd`.
	 * @type {String}
	 */
	static get APPLICATION_INDEX_VND()
	{
		return 'application/index.vnd';
	}

	/**
	 * Represents the content type `application/inkml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_INKML_XML()
	{
		return 'application/inkml+xml';
	}

	/**
	 * Represents the content type `application/iotp`.
	 * @type {String}
	 */
	static get APPLICATION_IOTP()
	{
		return 'application/iotp';
	}

	/**
	 * Represents the content type `application/ipfix`.
	 * @type {String}
	 */
	static get APPLICATION_IPFIX()
	{
		return 'application/ipfix';
	}

	/**
	 * Represents the content type `application/ipp`.
	 * @type {String}
	 */
	static get APPLICATION_IPP()
	{
		return 'application/ipp';
	}

	/**
	 * Represents the content type `application/isup`.
	 * @type {String}
	 */
	static get APPLICATION_ISUP()
	{
		return 'application/isup';
	}

	/**
	 * Represents the content type `application/its+xml`.
	 * @type {String}
	 */
	static get APPLICATION_ITS_XML()
	{
		return 'application/its+xml';
	}

	/**
	 * Represents the content type `application/java-archive`.
	 * @type {String}
	 */
	static get APPLICATION_JAVA_ARCHIVE()
	{
		return 'application/java-archive';
	}

	/**
	 * Represents the content type `application/java-serialized-object`.
	 * @type {String}
	 */
	static get APPLICATION_JAVA_SERIALIZED_OBJECT()
	{
		return 'application/java-serialized-object';
	}

	/**
	 * Represents the content type `application/java-vm`.
	 * @type {String}
	 */
	static get APPLICATION_JAVA_VM()
	{
		return 'application/java-vm';
	}

	/**
	 * Represents the content type `application/javascript`.
	 * @type {String}
	 */
	static get APPLICATION_JAVASCRIPT()
	{
		return 'application/javascript';
	}

	/**
	 * Represents the content type `application/jose`.
	 * @type {String}
	 */
	static get APPLICATION_JOSE()
	{
		return 'application/jose';
	}

	/**
	 * Represents the content type `application/jose+json`.
	 * @type {String}
	 */
	static get APPLICATION_JOSE_JSON()
	{
		return 'application/jose+json';
	}

	/**
	 * Represents the content type `application/jrd+json`.
	 * @type {String}
	 */
	static get APPLICATION_JRD_JSON()
	{
		return 'application/jrd+json';
	}

	/**
	 * Represents the content type `application/json`.
	 * @type {String}
	 */
	static get APPLICATION_JSON()
	{
		return 'application/json';
	}

	/**
	 * Represents the content type `application/json-patch+json`.
	 * @type {String}
	 */
	static get APPLICATION_JSON_PATCH_JSON()
	{
		return 'application/json-patch+json';
	}

	/**
	 * Represents the content type `application/json-seq`.
	 * @type {String}
	 */
	static get APPLICATION_JSON_SEQ()
	{
		return 'application/json-seq';
	}

	/**
	 * Represents the content type `application/jsonml+json`.
	 * @type {String}
	 */
	static get APPLICATION_JSONML_JSON()
	{
		return 'application/jsonml+json';
	}

	/**
	 * Represents the content type `application/jwk+json`.
	 * @type {String}
	 */
	static get APPLICATION_JWK_JSON()
	{
		return 'application/jwk+json';
	}

	/**
	 * Represents the content type `application/jwk-set+json`.
	 * @type {String}
	 */
	static get APPLICATION_JWK_SET_JSON()
	{
		return 'application/jwk-set+json';
	}

	/**
	 * Represents the content type `application/jwt`.
	 * @type {String}
	 */
	static get APPLICATION_JWT()
	{
		return 'application/jwt';
	}

	/**
	 * Represents the content type `application/kpml-request+xml`.
	 * @type {String}
	 */
	static get APPLICATION_KPML_REQUEST_XML()
	{
		return 'application/kpml-request+xml';
	}

	/**
	 * Represents the content type `application/kpml-response+xml`.
	 * @type {String}
	 */
	static get APPLICATION_KPML_RESPONSE_XML()
	{
		return 'application/kpml-response+xml';
	}

	/**
	 * Represents the content type `application/ld+json`.
	 * @type {String}
	 */
	static get APPLICATION_LD_JSON()
	{
		return 'application/ld+json';
	}

	/**
	 * Represents the content type `application/lgr+xml`.
	 * @type {String}
	 */
	static get APPLICATION_LGR_XML()
	{
		return 'application/lgr+xml';
	}

	/**
	 * Represents the content type `application/link-format`.
	 * @type {String}
	 */
	static get APPLICATION_LINK_FORMAT()
	{
		return 'application/link-format';
	}

	/**
	 * Represents the content type `application/load-control+xml`.
	 * @type {String}
	 */
	static get APPLICATION_LOAD_CONTROL_XML()
	{
		return 'application/load-control+xml';
	}

	/**
	 * Represents the content type `application/lost+xml`.
	 * @type {String}
	 */
	static get APPLICATION_LOST_XML()
	{
		return 'application/lost+xml';
	}

	/**
	 * Represents the content type `application/lostsync+xml`.
	 * @type {String}
	 */
	static get APPLICATION_LOSTSYNC_XML()
	{
		return 'application/lostsync+xml';
	}

	/**
	 * Represents the content type `application/lxf`.
	 * @type {String}
	 */
	static get APPLICATION_LXF()
	{
		return 'application/lxf';
	}

	/**
	 * Represents the content type `application/mac-binhex40`.
	 * @type {String}
	 */
	static get APPLICATION_MAC_BINHEX40()
	{
		return 'application/mac-binhex40';
	}

	/**
	 * Represents the content type `application/mac-compactpro`.
	 * @type {String}
	 */
	static get APPLICATION_MAC_COMPACTPRO()
	{
		return 'application/mac-compactpro';
	}

	/**
	 * Represents the content type `application/macwriteii`.
	 * @type {String}
	 */
	static get APPLICATION_MACWRITEII()
	{
		return 'application/macwriteii';
	}

	/**
	 * Represents the content type `application/mads+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MADS_XML()
	{
		return 'application/mads+xml';
	}

	/**
	 * Represents the content type `application/marc`.
	 * @type {String}
	 */
	static get APPLICATION_MARC()
	{
		return 'application/marc';
	}

	/**
	 * Represents the content type `application/marcxml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MARCXML_XML()
	{
		return 'application/marcxml+xml';
	}

	/**
	 * Represents the content type `application/mathematica`.
	 * @type {String}
	 */
	static get APPLICATION_MATHEMATICA()
	{
		return 'application/mathematica';
	}

	/**
	 * Represents the content type `application/mathml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MATHML_XML()
	{
		return 'application/mathml+xml';
	}

	/**
	 * Represents the content type `application/mathml-content+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MATHML_CONTENT_XML()
	{
		return 'application/mathml-content+xml';
	}

	/**
	 * Represents the content type `application/mathml-presentation+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MATHML_PRESENTATION_XML()
	{
		return 'application/mathml-presentation+xml';
	}

	/**
	 * Represents the content type `application/mbms-associated-procedure-description+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_ASSOCIATED_PROCEDURE_DESCRIPTION_XML()
	{
		return 'application/mbms-associated-procedure-description+xml';
	}

	/**
	 * Represents the content type `application/mbms-deregister+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_DEREGISTER_XML()
	{
		return 'application/mbms-deregister+xml';
	}

	/**
	 * Represents the content type `application/mbms-envelope+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_ENVELOPE_XML()
	{
		return 'application/mbms-envelope+xml';
	}

	/**
	 * Represents the content type `application/mbms-msk+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_MSK_XML()
	{
		return 'application/mbms-msk+xml';
	}

	/**
	 * Represents the content type `application/mbms-msk-response+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_MSK_RESPONSE_XML()
	{
		return 'application/mbms-msk-response+xml';
	}

	/**
	 * Represents the content type `application/mbms-protection-description+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_PROTECTION_DESCRIPTION_XML()
	{
		return 'application/mbms-protection-description+xml';
	}

	/**
	 * Represents the content type `application/mbms-reception-report+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_RECEPTION_REPORT_XML()
	{
		return 'application/mbms-reception-report+xml';
	}

	/**
	 * Represents the content type `application/mbms-register+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_REGISTER_XML()
	{
		return 'application/mbms-register+xml';
	}

	/**
	 * Represents the content type `application/mbms-register-response+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_REGISTER_RESPONSE_XML()
	{
		return 'application/mbms-register-response+xml';
	}

	/**
	 * Represents the content type `application/mbms-schedule+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_SCHEDULE_XML()
	{
		return 'application/mbms-schedule+xml';
	}

	/**
	 * Represents the content type `application/mbms-user-service-description+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MBMS_USER_SERVICE_DESCRIPTION_XML()
	{
		return 'application/mbms-user-service-description+xml';
	}

	/**
	 * Represents the content type `application/mbox`.
	 * @type {String}
	 */
	static get APPLICATION_MBOX()
	{
		return 'application/mbox';
	}

	/**
	 * Represents the content type `application/media-policy-dataset+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MEDIA_POLICY_DATASET_XML()
	{
		return 'application/media-policy-dataset+xml';
	}

	/**
	 * Represents the content type `application/media_control+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MEDIA_CONTROL_XML()
	{
		return 'application/media_control+xml';
	}

	/**
	 * Represents the content type `application/mediaservercontrol+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MEDIASERVERCONTROL_XML()
	{
		return 'application/mediaservercontrol+xml';
	}

	/**
	 * Represents the content type `application/merge-patch+json`.
	 * @type {String}
	 */
	static get APPLICATION_MERGE_PATCH_JSON()
	{
		return 'application/merge-patch+json';
	}

	/**
	 * Represents the content type `application/metalink+xml`.
	 * @type {String}
	 */
	static get APPLICATION_METALINK_XML()
	{
		return 'application/metalink+xml';
	}

	/**
	 * Represents the content type `application/metalink4+xml`.
	 * @type {String}
	 */
	static get APPLICATION_METALINK4_XML()
	{
		return 'application/metalink4+xml';
	}

	/**
	 * Represents the content type `application/mets+xml`.
	 * @type {String}
	 */
	static get APPLICATION_METS_XML()
	{
		return 'application/mets+xml';
	}

	/**
	 * Represents the content type `application/mf4`.
	 * @type {String}
	 */
	static get APPLICATION_MF4()
	{
		return 'application/mf4';
	}

	/**
	 * Represents the content type `application/mikey`.
	 * @type {String}
	 */
	static get APPLICATION_MIKEY()
	{
		return 'application/mikey';
	}

	/**
	 * Represents the content type `application/mods+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MODS_XML()
	{
		return 'application/mods+xml';
	}

	/**
	 * Represents the content type `application/moss-keys`.
	 * @type {String}
	 */
	static get APPLICATION_MOSS_KEYS()
	{
		return 'application/moss-keys';
	}

	/**
	 * Represents the content type `application/moss-signature`.
	 * @type {String}
	 */
	static get APPLICATION_MOSS_SIGNATURE()
	{
		return 'application/moss-signature';
	}

	/**
	 * Represents the content type `application/mosskey-data`.
	 * @type {String}
	 */
	static get APPLICATION_MOSSKEY_DATA()
	{
		return 'application/mosskey-data';
	}

	/**
	 * Represents the content type `application/mosskey-request`.
	 * @type {String}
	 */
	static get APPLICATION_MOSSKEY_REQUEST()
	{
		return 'application/mosskey-request';
	}

	/**
	 * Represents the content type `application/mp21`.
	 * @type {String}
	 */
	static get APPLICATION_MP21()
	{
		return 'application/mp21';
	}

	/**
	 * Represents the content type `application/mp4`.
	 * @type {String}
	 */
	static get APPLICATION_MP4()
	{
		return 'application/mp4';
	}

	/**
	 * Represents the content type `application/mpeg4-generic`.
	 * @type {String}
	 */
	static get APPLICATION_MPEG4_GENERIC()
	{
		return 'application/mpeg4-generic';
	}

	/**
	 * Represents the content type `application/mpeg4-iod`.
	 * @type {String}
	 */
	static get APPLICATION_MPEG4_IOD()
	{
		return 'application/mpeg4-iod';
	}

	/**
	 * Represents the content type `application/mpeg4-iod-xmt`.
	 * @type {String}
	 */
	static get APPLICATION_MPEG4_IOD_XMT()
	{
		return 'application/mpeg4-iod-xmt';
	}

	/**
	 * Represents the content type `application/mrb-consumer+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MRB_CONSUMER_XML()
	{
		return 'application/mrb-consumer+xml';
	}

	/**
	 * Represents the content type `application/mrb-publish+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MRB_PUBLISH_XML()
	{
		return 'application/mrb-publish+xml';
	}

	/**
	 * Represents the content type `application/msc-ivr+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MSC_IVR_XML()
	{
		return 'application/msc-ivr+xml';
	}

	/**
	 * Represents the content type `application/msc-mixer+xml`.
	 * @type {String}
	 */
	static get APPLICATION_MSC_MIXER_XML()
	{
		return 'application/msc-mixer+xml';
	}

	/**
	 * Represents the content type `application/msword`.
	 * @type {String}
	 */
	static get APPLICATION_MSWORD()
	{
		return 'application/msword';
	}

	/**
	 * Represents the content type `application/mxf`.
	 * @type {String}
	 */
	static get APPLICATION_MXF()
	{
		return 'application/mxf';
	}

	/**
	 * Represents the content type `application/nasdata`.
	 * @type {String}
	 */
	static get APPLICATION_NASDATA()
	{
		return 'application/nasdata';
	}

	/**
	 * Represents the content type `application/news-checkgroups`.
	 * @type {String}
	 */
	static get APPLICATION_NEWS_CHECKGROUPS()
	{
		return 'application/news-checkgroups';
	}

	/**
	 * Represents the content type `application/news-groupinfo`.
	 * @type {String}
	 */
	static get APPLICATION_NEWS_GROUPINFO()
	{
		return 'application/news-groupinfo';
	}

	/**
	 * Represents the content type `application/news-transmission`.
	 * @type {String}
	 */
	static get APPLICATION_NEWS_TRANSMISSION()
	{
		return 'application/news-transmission';
	}

	/**
	 * Represents the content type `application/nlsml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_NLSML_XML()
	{
		return 'application/nlsml+xml';
	}

	/**
	 * Represents the content type `application/nss`.
	 * @type {String}
	 */
	static get APPLICATION_NSS()
	{
		return 'application/nss';
	}

	/**
	 * Represents the content type `application/ocsp-request`.
	 * @type {String}
	 */
	static get APPLICATION_OCSP_REQUEST()
	{
		return 'application/ocsp-request';
	}

	/**
	 * Represents the content type `application/ocsp-response`.
	 * @type {String}
	 */
	static get APPLICATION_OCSP_RESPONSE()
	{
		return 'application/ocsp-response';
	}

	/**
	 * Represents the content type `application/octet-stream`.
	 * @type {String}
	 */
	static get APPLICATION_OCTET_STREAM()
	{
		return 'application/octet-stream';
	}

	/**
	 * Represents the content type `application/oda`.
	 * @type {String}
	 */
	static get APPLICATION_ODA()
	{
		return 'application/oda';
	}

	/**
	 * Represents the content type `application/odx`.
	 * @type {String}
	 */
	static get APPLICATION_ODX()
	{
		return 'application/odx';
	}

	/**
	 * Represents the content type `application/oebps-package+xml`.
	 * @type {String}
	 */
	static get APPLICATION_OEBPS_PACKAGE_XML()
	{
		return 'application/oebps-package+xml';
	}

	/**
	 * Represents the content type `application/ogg`.
	 * @type {String}
	 */
	static get APPLICATION_OGG()
	{
		return 'application/ogg';
	}

	/**
	 * Represents the content type `application/omdoc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_OMDOC_XML()
	{
		return 'application/omdoc+xml';
	}

	/**
	 * Represents the content type `application/onenote`.
	 * @type {String}
	 */
	static get APPLICATION_ONENOTE()
	{
		return 'application/onenote';
	}

	/**
	 * Represents the content type `application/oxps`.
	 * @type {String}
	 */
	static get APPLICATION_OXPS()
	{
		return 'application/oxps';
	}

	/**
	 * Represents the content type `application/p2p-overlay+xml`.
	 * @type {String}
	 */
	static get APPLICATION_P2P_OVERLAY_XML()
	{
		return 'application/p2p-overlay+xml';
	}

	/**
	 * Represents the content type `application/parityfec`.
	 * @type {String}
	 */
	static get APPLICATION_PARITYFEC()
	{
		return 'application/parityfec';
	}

	/**
	 * Represents the content type `application/patch-ops-error+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PATCH_OPS_ERROR_XML()
	{
		return 'application/patch-ops-error+xml';
	}

	/**
	 * Represents the content type `application/pdf`.
	 * @type {String}
	 */
	static get APPLICATION_PDF()
	{
		return 'application/pdf';
	}

	/**
	 * Represents the content type `application/pdx`.
	 * @type {String}
	 */
	static get APPLICATION_PDX()
	{
		return 'application/pdx';
	}

	/**
	 * Represents the content type `application/pgp-encrypted`.
	 * @type {String}
	 */
	static get APPLICATION_PGP_ENCRYPTED()
	{
		return 'application/pgp-encrypted';
	}

	/**
	 * Represents the content type `application/pgp-keys`.
	 * @type {String}
	 */
	static get APPLICATION_PGP_KEYS()
	{
		return 'application/pgp-keys';
	}

	/**
	 * Represents the content type `application/pgp-signature`.
	 * @type {String}
	 */
	static get APPLICATION_PGP_SIGNATURE()
	{
		return 'application/pgp-signature';
	}

	/**
	 * Represents the content type `application/pics-rules`.
	 * @type {String}
	 */
	static get APPLICATION_PICS_RULES()
	{
		return 'application/pics-rules';
	}

	/**
	 * Represents the content type `application/pidf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PIDF_XML()
	{
		return 'application/pidf+xml';
	}

	/**
	 * Represents the content type `application/pidf-diff+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PIDF_DIFF_XML()
	{
		return 'application/pidf-diff+xml';
	}

	/**
	 * Represents the content type `application/pkcs10`.
	 * @type {String}
	 */
	static get APPLICATION_PKCS10()
	{
		return 'application/pkcs10';
	}

	/**
	 * Represents the content type `application/pkcs12`.
	 * @type {String}
	 */
	static get APPLICATION_PKCS12()
	{
		return 'application/pkcs12';
	}

	/**
	 * Represents the content type `application/pkcs7-mime`.
	 * @type {String}
	 */
	static get APPLICATION_PKCS7_MIME()
	{
		return 'application/pkcs7-mime';
	}

	/**
	 * Represents the content type `application/pkcs7-signature`.
	 * @type {String}
	 */
	static get APPLICATION_PKCS7_SIGNATURE()
	{
		return 'application/pkcs7-signature';
	}

	/**
	 * Represents the content type `application/pkcs8`.
	 * @type {String}
	 */
	static get APPLICATION_PKCS8()
	{
		return 'application/pkcs8';
	}

	/**
	 * Represents the content type `application/pkix-attr-cert`.
	 * @type {String}
	 */
	static get APPLICATION_PKIX_ATTR_CERT()
	{
		return 'application/pkix-attr-cert';
	}

	/**
	 * Represents the content type `application/pkix-cert`.
	 * @type {String}
	 */
	static get APPLICATION_PKIX_CERT()
	{
		return 'application/pkix-cert';
	}

	/**
	 * Represents the content type `application/pkix-crl`.
	 * @type {String}
	 */
	static get APPLICATION_PKIX_CRL()
	{
		return 'application/pkix-crl';
	}

	/**
	 * Represents the content type `application/pkix-pkipath`.
	 * @type {String}
	 */
	static get APPLICATION_PKIX_PKIPATH()
	{
		return 'application/pkix-pkipath';
	}

	/**
	 * Represents the content type `application/pkixcmp`.
	 * @type {String}
	 */
	static get APPLICATION_PKIXCMP()
	{
		return 'application/pkixcmp';
	}

	/**
	 * Represents the content type `application/pls+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PLS_XML()
	{
		return 'application/pls+xml';
	}

	/**
	 * Represents the content type `application/poc-settings+xml`.
	 * @type {String}
	 */
	static get APPLICATION_POC_SETTINGS_XML()
	{
		return 'application/poc-settings+xml';
	}

	/**
	 * Represents the content type `application/postscript`.
	 * @type {String}
	 */
	static get APPLICATION_POSTSCRIPT()
	{
		return 'application/postscript';
	}

	/**
	 * Represents the content type `application/ppsp-tracker+json`.
	 * @type {String}
	 */
	static get APPLICATION_PPSP_TRACKER_JSON()
	{
		return 'application/ppsp-tracker+json';
	}

	/**
	 * Represents the content type `application/problem+json`.
	 * @type {String}
	 */
	static get APPLICATION_PROBLEM_JSON()
	{
		return 'application/problem+json';
	}

	/**
	 * Represents the content type `application/problem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PROBLEM_XML()
	{
		return 'application/problem+xml';
	}

	/**
	 * Represents the content type `application/provenance+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PROVENANCE_XML()
	{
		return 'application/provenance+xml';
	}

	/**
	 * Represents the content type `application/prs.alvestrand.titrax-sheet`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_ALVESTRAND_TITRAX_SHEET()
	{
		return 'application/prs.alvestrand.titrax-sheet';
	}

	/**
	 * Represents the content type `application/prs.cww`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_CWW()
	{
		return 'application/prs.cww';
	}

	/**
	 * Represents the content type `application/prs.hpub+zip`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_HPUB_ZIP()
	{
		return 'application/prs.hpub+zip';
	}

	/**
	 * Represents the content type `application/prs.nprend`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_NPREND()
	{
		return 'application/prs.nprend';
	}

	/**
	 * Represents the content type `application/prs.plucker`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_PLUCKER()
	{
		return 'application/prs.plucker';
	}

	/**
	 * Represents the content type `application/prs.rdf-xml-crypt`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_RDF_XML_CRYPT()
	{
		return 'application/prs.rdf-xml-crypt';
	}

	/**
	 * Represents the content type `application/prs.xsf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PRS_XSF_XML()
	{
		return 'application/prs.xsf+xml';
	}

	/**
	 * Represents the content type `application/pskc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_PSKC_XML()
	{
		return 'application/pskc+xml';
	}

	/**
	 * Represents the content type `application/qsig`.
	 * @type {String}
	 */
	static get APPLICATION_QSIG()
	{
		return 'application/qsig';
	}

	/**
	 * Represents the content type `application/raptorfec`.
	 * @type {String}
	 */
	static get APPLICATION_RAPTORFEC()
	{
		return 'application/raptorfec';
	}

	/**
	 * Represents the content type `application/rdap+json`.
	 * @type {String}
	 */
	static get APPLICATION_RDAP_JSON()
	{
		return 'application/rdap+json';
	}

	/**
	 * Represents the content type `application/rdf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RDF_XML()
	{
		return 'application/rdf+xml';
	}

	/**
	 * Represents the content type `application/reginfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_REGINFO_XML()
	{
		return 'application/reginfo+xml';
	}

	/**
	 * Represents the content type `application/relax-ng-compact-syntax`.
	 * @type {String}
	 */
	static get APPLICATION_RELAX_NG_COMPACT_SYNTAX()
	{
		return 'application/relax-ng-compact-syntax';
	}

	/**
	 * Represents the content type `application/remote-printing`.
	 * @type {String}
	 */
	static get APPLICATION_REMOTE_PRINTING()
	{
		return 'application/remote-printing';
	}

	/**
	 * Represents the content type `application/reputon+json`.
	 * @type {String}
	 */
	static get APPLICATION_REPUTON_JSON()
	{
		return 'application/reputon+json';
	}

	/**
	 * Represents the content type `application/resource-lists+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RESOURCE_LISTS_XML()
	{
		return 'application/resource-lists+xml';
	}

	/**
	 * Represents the content type `application/resource-lists-diff+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RESOURCE_LISTS_DIFF_XML()
	{
		return 'application/resource-lists-diff+xml';
	}

	/**
	 * Represents the content type `application/rfc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RFC_XML()
	{
		return 'application/rfc+xml';
	}

	/**
	 * Represents the content type `application/riscos`.
	 * @type {String}
	 */
	static get APPLICATION_RISCOS()
	{
		return 'application/riscos';
	}

	/**
	 * Represents the content type `application/rlmi+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RLMI_XML()
	{
		return 'application/rlmi+xml';
	}

	/**
	 * Represents the content type `application/rls-services+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RLS_SERVICES_XML()
	{
		return 'application/rls-services+xml';
	}

	/**
	 * Represents the content type `application/rpki-ghostbusters`.
	 * @type {String}
	 */
	static get APPLICATION_RPKI_GHOSTBUSTERS()
	{
		return 'application/rpki-ghostbusters';
	}

	/**
	 * Represents the content type `application/rpki-manifest`.
	 * @type {String}
	 */
	static get APPLICATION_RPKI_MANIFEST()
	{
		return 'application/rpki-manifest';
	}

	/**
	 * Represents the content type `application/rpki-roa`.
	 * @type {String}
	 */
	static get APPLICATION_RPKI_ROA()
	{
		return 'application/rpki-roa';
	}

	/**
	 * Represents the content type `application/rpki-updown`.
	 * @type {String}
	 */
	static get APPLICATION_RPKI_UPDOWN()
	{
		return 'application/rpki-updown';
	}

	/**
	 * Represents the content type `application/rsd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RSD_XML()
	{
		return 'application/rsd+xml';
	}

	/**
	 * Represents the content type `application/rss+xml`.
	 * @type {String}
	 */
	static get APPLICATION_RSS_XML()
	{
		return 'application/rss+xml';
	}

	/**
	 * Represents the content type `application/rtf`.
	 * @type {String}
	 */
	static get APPLICATION_RTF()
	{
		return 'application/rtf';
	}

	/**
	 * Represents the content type `application/rtploopback`.
	 * @type {String}
	 */
	static get APPLICATION_RTPLOOPBACK()
	{
		return 'application/rtploopback';
	}

	/**
	 * Represents the content type `application/rtx`.
	 * @type {String}
	 */
	static get APPLICATION_RTX()
	{
		return 'application/rtx';
	}

	/**
	 * Represents the content type `application/samlassertion+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SAMLASSERTION_XML()
	{
		return 'application/samlassertion+xml';
	}

	/**
	 * Represents the content type `application/samlmetadata+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SAMLMETADATA_XML()
	{
		return 'application/samlmetadata+xml';
	}

	/**
	 * Represents the content type `application/sbml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SBML_XML()
	{
		return 'application/sbml+xml';
	}

	/**
	 * Represents the content type `application/scaip+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SCAIP_XML()
	{
		return 'application/scaip+xml';
	}

	/**
	 * Represents the content type `application/scim+json`.
	 * @type {String}
	 */
	static get APPLICATION_SCIM_JSON()
	{
		return 'application/scim+json';
	}

	/**
	 * Represents the content type `application/scvp-cv-request`.
	 * @type {String}
	 */
	static get APPLICATION_SCVP_CV_REQUEST()
	{
		return 'application/scvp-cv-request';
	}

	/**
	 * Represents the content type `application/scvp-cv-response`.
	 * @type {String}
	 */
	static get APPLICATION_SCVP_CV_RESPONSE()
	{
		return 'application/scvp-cv-response';
	}

	/**
	 * Represents the content type `application/scvp-vp-request`.
	 * @type {String}
	 */
	static get APPLICATION_SCVP_VP_REQUEST()
	{
		return 'application/scvp-vp-request';
	}

	/**
	 * Represents the content type `application/scvp-vp-response`.
	 * @type {String}
	 */
	static get APPLICATION_SCVP_VP_RESPONSE()
	{
		return 'application/scvp-vp-response';
	}

	/**
	 * Represents the content type `application/sdp`.
	 * @type {String}
	 */
	static get APPLICATION_SDP()
	{
		return 'application/sdp';
	}

	/**
	 * Represents the content type `application/sep+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SEP_XML()
	{
		return 'application/sep+xml';
	}

	/**
	 * Represents the content type `application/sep-exi`.
	 * @type {String}
	 */
	static get APPLICATION_SEP_EXI()
	{
		return 'application/sep-exi';
	}

	/**
	 * Represents the content type `application/session-info`.
	 * @type {String}
	 */
	static get APPLICATION_SESSION_INFO()
	{
		return 'application/session-info';
	}

	/**
	 * Represents the content type `application/set-payment`.
	 * @type {String}
	 */
	static get APPLICATION_SET_PAYMENT()
	{
		return 'application/set-payment';
	}

	/**
	 * Represents the content type `application/set-payment-initiation`.
	 * @type {String}
	 */
	static get APPLICATION_SET_PAYMENT_INITIATION()
	{
		return 'application/set-payment-initiation';
	}

	/**
	 * Represents the content type `application/set-registration`.
	 * @type {String}
	 */
	static get APPLICATION_SET_REGISTRATION()
	{
		return 'application/set-registration';
	}

	/**
	 * Represents the content type `application/set-registration-initiation`.
	 * @type {String}
	 */
	static get APPLICATION_SET_REGISTRATION_INITIATION()
	{
		return 'application/set-registration-initiation';
	}

	/**
	 * Represents the content type `application/sgml`.
	 * @type {String}
	 */
	static get APPLICATION_SGML()
	{
		return 'application/sgml';
	}

	/**
	 * Represents the content type `application/sgml-open-catalog`.
	 * @type {String}
	 */
	static get APPLICATION_SGML_OPEN_CATALOG()
	{
		return 'application/sgml-open-catalog';
	}

	/**
	 * Represents the content type `application/shf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SHF_XML()
	{
		return 'application/shf+xml';
	}

	/**
	 * Represents the content type `application/sieve`.
	 * @type {String}
	 */
	static get APPLICATION_SIEVE()
	{
		return 'application/sieve';
	}

	/**
	 * Represents the content type `application/simple-filter+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SIMPLE_FILTER_XML()
	{
		return 'application/simple-filter+xml';
	}

	/**
	 * Represents the content type `application/simple-message-summary`.
	 * @type {String}
	 */
	static get APPLICATION_SIMPLE_MESSAGE_SUMMARY()
	{
		return 'application/simple-message-summary';
	}

	/**
	 * Represents the content type `application/simplesymbolcontainer`.
	 * @type {String}
	 */
	static get APPLICATION_SIMPLESYMBOLCONTAINER()
	{
		return 'application/simplesymbolcontainer';
	}

	/**
	 * Represents the content type `application/slate`.
	 * @type {String}
	 */
	static get APPLICATION_SLATE()
	{
		return 'application/slate';
	}

	/**
	 * Represents the content type `application/smil`.
	 * @type {String}
	 */
	static get APPLICATION_SMIL()
	{
		return 'application/smil';
	}

	/**
	 * Represents the content type `application/smil+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SMIL_XML()
	{
		return 'application/smil+xml';
	}

	/**
	 * Represents the content type `application/smpte336m`.
	 * @type {String}
	 */
	static get APPLICATION_SMPTE336M()
	{
		return 'application/smpte336m';
	}

	/**
	 * Represents the content type `application/soap+fastinfoset`.
	 * @type {String}
	 */
	static get APPLICATION_SOAP_FASTINFOSET()
	{
		return 'application/soap+fastinfoset';
	}

	/**
	 * Represents the content type `application/soap+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SOAP_XML()
	{
		return 'application/soap+xml';
	}

	/**
	 * Represents the content type `application/sparql-query`.
	 * @type {String}
	 */
	static get APPLICATION_SPARQL_QUERY()
	{
		return 'application/sparql-query';
	}

	/**
	 * Represents the content type `application/sparql-results+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SPARQL_RESULTS_XML()
	{
		return 'application/sparql-results+xml';
	}

	/**
	 * Represents the content type `application/spirits-event+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SPIRITS_EVENT_XML()
	{
		return 'application/spirits-event+xml';
	}

	/**
	 * Represents the content type `application/sql`.
	 * @type {String}
	 */
	static get APPLICATION_SQL()
	{
		return 'application/sql';
	}

	/**
	 * Represents the content type `application/srgs`.
	 * @type {String}
	 */
	static get APPLICATION_SRGS()
	{
		return 'application/srgs';
	}

	/**
	 * Represents the content type `application/srgs+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SRGS_XML()
	{
		return 'application/srgs+xml';
	}

	/**
	 * Represents the content type `application/sru+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SRU_XML()
	{
		return 'application/sru+xml';
	}

	/**
	 * Represents the content type `application/ssdl+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SSDL_XML()
	{
		return 'application/ssdl+xml';
	}

	/**
	 * Represents the content type `application/ssml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_SSML_XML()
	{
		return 'application/ssml+xml';
	}

	/**
	 * Represents the content type `application/tamp-apex-update`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_APEX_UPDATE()
	{
		return 'application/tamp-apex-update';
	}

	/**
	 * Represents the content type `application/tamp-apex-update-confirm`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_APEX_UPDATE_CONFIRM()
	{
		return 'application/tamp-apex-update-confirm';
	}

	/**
	 * Represents the content type `application/tamp-community-update`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_COMMUNITY_UPDATE()
	{
		return 'application/tamp-community-update';
	}

	/**
	 * Represents the content type `application/tamp-community-update-confirm`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_COMMUNITY_UPDATE_CONFIRM()
	{
		return 'application/tamp-community-update-confirm';
	}

	/**
	 * Represents the content type `application/tamp-error`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_ERROR()
	{
		return 'application/tamp-error';
	}

	/**
	 * Represents the content type `application/tamp-sequence-adjust`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_SEQUENCE_ADJUST()
	{
		return 'application/tamp-sequence-adjust';
	}

	/**
	 * Represents the content type `application/tamp-sequence-adjust-confirm`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_SEQUENCE_ADJUST_CONFIRM()
	{
		return 'application/tamp-sequence-adjust-confirm';
	}

	/**
	 * Represents the content type `application/tamp-status-query`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_STATUS_QUERY()
	{
		return 'application/tamp-status-query';
	}

	/**
	 * Represents the content type `application/tamp-status-response`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_STATUS_RESPONSE()
	{
		return 'application/tamp-status-response';
	}

	/**
	 * Represents the content type `application/tamp-update`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_UPDATE()
	{
		return 'application/tamp-update';
	}

	/**
	 * Represents the content type `application/tamp-update-confirm`.
	 * @type {String}
	 */
	static get APPLICATION_TAMP_UPDATE_CONFIRM()
	{
		return 'application/tamp-update-confirm';
	}

	/**
	 * Represents the content type `application/tei+xml`.
	 * @type {String}
	 */
	static get APPLICATION_TEI_XML()
	{
		return 'application/tei+xml';
	}

	/**
	 * Represents the content type `application/thraud+xml`.
	 * @type {String}
	 */
	static get APPLICATION_THRAUD_XML()
	{
		return 'application/thraud+xml';
	}

	/**
	 * Represents the content type `application/timestamp-query`.
	 * @type {String}
	 */
	static get APPLICATION_TIMESTAMP_QUERY()
	{
		return 'application/timestamp-query';
	}

	/**
	 * Represents the content type `application/timestamp-reply`.
	 * @type {String}
	 */
	static get APPLICATION_TIMESTAMP_REPLY()
	{
		return 'application/timestamp-reply';
	}

	/**
	 * Represents the content type `application/timestamped-data`.
	 * @type {String}
	 */
	static get APPLICATION_TIMESTAMPED_DATA()
	{
		return 'application/timestamped-data';
	}

	/**
	 * Represents the content type `application/ttml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_TTML_XML()
	{
		return 'application/ttml+xml';
	}

	/**
	 * Represents the content type `application/tve-trigger`.
	 * @type {String}
	 */
	static get APPLICATION_TVE_TRIGGER()
	{
		return 'application/tve-trigger';
	}

	/**
	 * Represents the content type `application/ulpfec`.
	 * @type {String}
	 */
	static get APPLICATION_ULPFEC()
	{
		return 'application/ulpfec';
	}

	/**
	 * Represents the content type `application/urc-grpsheet+xml`.
	 * @type {String}
	 */
	static get APPLICATION_URC_GRPSHEET_XML()
	{
		return 'application/urc-grpsheet+xml';
	}

	/**
	 * Represents the content type `application/urc-ressheet+xml`.
	 * @type {String}
	 */
	static get APPLICATION_URC_RESSHEET_XML()
	{
		return 'application/urc-ressheet+xml';
	}

	/**
	 * Represents the content type `application/urc-targetdesc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_URC_TARGETDESC_XML()
	{
		return 'application/urc-targetdesc+xml';
	}

	/**
	 * Represents the content type `application/urc-uisocketdesc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_URC_UISOCKETDESC_XML()
	{
		return 'application/urc-uisocketdesc+xml';
	}

	/**
	 * Represents the content type `application/vcard+json`.
	 * @type {String}
	 */
	static get APPLICATION_VCARD_JSON()
	{
		return 'application/vcard+json';
	}

	/**
	 * Represents the content type `application/vcard+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VCARD_XML()
	{
		return 'application/vcard+xml';
	}

	/**
	 * Represents the content type `application/vemmi`.
	 * @type {String}
	 */
	static get APPLICATION_VEMMI()
	{
		return 'application/vemmi';
	}

	/**
	 * Represents the content type `application/vividence.scriptfile`.
	 * @type {String}
	 */
	static get APPLICATION_VIVIDENCE_SCRIPTFILE()
	{
		return 'application/vividence.scriptfile';
	}

	/**
	 * Represents the content type `application/vnd.3gpp-prose+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_PROSE_XML()
	{
		return 'application/vnd.3gpp-prose+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp-prose-pc3ch+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_PROSE_PC3CH_XML()
	{
		return 'application/vnd.3gpp-prose-pc3ch+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.access-transfer-events+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_ACCESS_TRANSFER_EVENTS_XML()
	{
		return 'application/vnd.3gpp.access-transfer-events+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.bsf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_BSF_XML()
	{
		return 'application/vnd.3gpp.bsf+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.mid-call+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_MID_CALL_XML()
	{
		return 'application/vnd.3gpp.mid-call+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-large`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_PIC_BW_LARGE()
	{
		return 'application/vnd.3gpp.pic-bw-large';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-small`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_PIC_BW_SMALL()
	{
		return 'application/vnd.3gpp.pic-bw-small';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.pic-bw-var`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_PIC_BW_VAR()
	{
		return 'application/vnd.3gpp.pic-bw-var';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.sms`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_SMS()
	{
		return 'application/vnd.3gpp.sms';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.sms+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_SMS_XML()
	{
		return 'application/vnd.3gpp.sms+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.srvcc-ext+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_SRVCC_EXT_XML()
	{
		return 'application/vnd.3gpp.srvcc-ext+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.srvcc-info+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_SRVCC_INFO_XML()
	{
		return 'application/vnd.3gpp.srvcc-info+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.state-and-event-info+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_STATE_AND_EVENT_INFO_XML()
	{
		return 'application/vnd.3gpp.state-and-event-info+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp.ussd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP_USSD_XML()
	{
		return 'application/vnd.3gpp.ussd+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp2.bcmcsinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP2_BCMCSINFO_XML()
	{
		return 'application/vnd.3gpp2.bcmcsinfo+xml';
	}

	/**
	 * Represents the content type `application/vnd.3gpp2.sms`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP2_SMS()
	{
		return 'application/vnd.3gpp2.sms';
	}

	/**
	 * Represents the content type `application/vnd.3gpp2.tcap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3GPP2_TCAP()
	{
		return 'application/vnd.3gpp2.tcap';
	}

	/**
	 * Represents the content type `application/vnd.3lightssoftware.imagescal`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3LIGHTSSOFTWARE_IMAGESCAL()
	{
		return 'application/vnd.3lightssoftware.imagescal';
	}

	/**
	 * Represents the content type `application/vnd.3m.post-it-notes`.
	 * @type {String}
	 */
	static get APPLICATION_VND_3M_POST_IT_NOTES()
	{
		return 'application/vnd.3m.post-it-notes';
	}

	/**
	 * Represents the content type `application/vnd.accpac.simply.aso`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ACCPAC_SIMPLY_ASO()
	{
		return 'application/vnd.accpac.simply.aso';
	}

	/**
	 * Represents the content type `application/vnd.accpac.simply.imp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ACCPAC_SIMPLY_IMP()
	{
		return 'application/vnd.accpac.simply.imp';
	}

	/**
	 * Represents the content type `application/vnd.acucobol`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ACUCOBOL()
	{
		return 'application/vnd.acucobol';
	}

	/**
	 * Represents the content type `application/vnd.acucorp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ACUCORP()
	{
		return 'application/vnd.acucorp';
	}

	/**
	 * Represents the content type `application/vnd.adobe.air-application-installer-package+zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_AIR_APPLICATION_INSTALLER_PACKAGE_ZIP()
	{
		return 'application/vnd.adobe.air-application-installer-package+zip';
	}

	/**
	 * Represents the content type `application/vnd.adobe.flash.movie`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_FLASH_MOVIE()
	{
		return 'application/vnd.adobe.flash.movie';
	}

	/**
	 * Represents the content type `application/vnd.adobe.formscentral.fcdt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_FORMSCENTRAL_FCDT()
	{
		return 'application/vnd.adobe.formscentral.fcdt';
	}

	/**
	 * Represents the content type `application/vnd.adobe.fxp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_FXP()
	{
		return 'application/vnd.adobe.fxp';
	}

	/**
	 * Represents the content type `application/vnd.adobe.partial-upload`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_PARTIAL_UPLOAD()
	{
		return 'application/vnd.adobe.partial-upload';
	}

	/**
	 * Represents the content type `application/vnd.adobe.xdp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_XDP_XML()
	{
		return 'application/vnd.adobe.xdp+xml';
	}

	/**
	 * Represents the content type `application/vnd.adobe.xfdf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ADOBE_XFDF()
	{
		return 'application/vnd.adobe.xfdf';
	}

	/**
	 * Represents the content type `application/vnd.aether.imp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AETHER_IMP()
	{
		return 'application/vnd.aether.imp';
	}

	/**
	 * Represents the content type `application/vnd.ah-barcode`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AH_BARCODE()
	{
		return 'application/vnd.ah-barcode';
	}

	/**
	 * Represents the content type `application/vnd.ahead.space`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AHEAD_SPACE()
	{
		return 'application/vnd.ahead.space';
	}

	/**
	 * Represents the content type `application/vnd.airzip.filesecure.azf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AIRZIP_FILESECURE_AZF()
	{
		return 'application/vnd.airzip.filesecure.azf';
	}

	/**
	 * Represents the content type `application/vnd.airzip.filesecure.azs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AIRZIP_FILESECURE_AZS()
	{
		return 'application/vnd.airzip.filesecure.azs';
	}

	/**
	 * Represents the content type `application/vnd.amazon.ebook`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AMAZON_EBOOK()
	{
		return 'application/vnd.amazon.ebook';
	}

	/**
	 * Represents the content type `application/vnd.amazon.mobi8-ebook`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AMAZON_MOBI8_EBOOK()
	{
		return 'application/vnd.amazon.mobi8-ebook';
	}

	/**
	 * Represents the content type `application/vnd.americandynamics.acc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AMERICANDYNAMICS_ACC()
	{
		return 'application/vnd.americandynamics.acc';
	}

	/**
	 * Represents the content type `application/vnd.amiga.ami`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AMIGA_AMI()
	{
		return 'application/vnd.amiga.ami';
	}

	/**
	 * Represents the content type `application/vnd.amundsen.maze+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AMUNDSEN_MAZE_XML()
	{
		return 'application/vnd.amundsen.maze+xml';
	}

	/**
	 * Represents the content type `application/vnd.android.package-archive`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ANDROID_PACKAGE_ARCHIVE()
	{
		return 'application/vnd.android.package-archive';
	}

	/**
	 * Represents the content type `application/vnd.anki`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ANKI()
	{
		return 'application/vnd.anki';
	}

	/**
	 * Represents the content type `application/vnd.anser-web-certificate-issue-initiation`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ANSER_WEB_CERTIFICATE_ISSUE_INITIATION()
	{
		return 'application/vnd.anser-web-certificate-issue-initiation';
	}

	/**
	 * Represents the content type `application/vnd.anser-web-funds-transfer-initiation`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ANSER_WEB_FUNDS_TRANSFER_INITIATION()
	{
		return 'application/vnd.anser-web-funds-transfer-initiation';
	}

	/**
	 * Represents the content type `application/vnd.antix.game-component`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ANTIX_GAME_COMPONENT()
	{
		return 'application/vnd.antix.game-component';
	}

	/**
	 * Represents the content type `application/vnd.apache.thrift.binary`.
	 * @type {String}
	 */
	static get APPLICATION_VND_APACHE_THRIFT_BINARY()
	{
		return 'application/vnd.apache.thrift.binary';
	}

	/**
	 * Represents the content type `application/vnd.apache.thrift.compact`.
	 * @type {String}
	 */
	static get APPLICATION_VND_APACHE_THRIFT_COMPACT()
	{
		return 'application/vnd.apache.thrift.compact';
	}

	/**
	 * Represents the content type `application/vnd.apache.thrift.json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_APACHE_THRIFT_JSON()
	{
		return 'application/vnd.apache.thrift.json';
	}

	/**
	 * Represents the content type `application/vnd.api+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_API_JSON()
	{
		return 'application/vnd.api+json';
	}

	/**
	 * Represents the content type `application/vnd.apple.installer+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_APPLE_INSTALLER_XML()
	{
		return 'application/vnd.apple.installer+xml';
	}

	/**
	 * Represents the content type `application/vnd.apple.mpegurl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_APPLE_MPEGURL()
	{
		return 'application/vnd.apple.mpegurl';
	}

	/**
	 * Represents the content type `application/vnd.arastra.swi`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ARASTRA_SWI()
	{
		return 'application/vnd.arastra.swi';
	}

	/**
	 * Represents the content type `application/vnd.aristanetworks.swi`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ARISTANETWORKS_SWI()
	{
		return 'application/vnd.aristanetworks.swi';
	}

	/**
	 * Represents the content type `application/vnd.artsquare`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ARTSQUARE()
	{
		return 'application/vnd.artsquare';
	}

	/**
	 * Represents the content type `application/vnd.astraea-software.iota`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ASTRAEA_SOFTWARE_IOTA()
	{
		return 'application/vnd.astraea-software.iota';
	}

	/**
	 * Represents the content type `application/vnd.audiograph`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AUDIOGRAPH()
	{
		return 'application/vnd.audiograph';
	}

	/**
	 * Represents the content type `application/vnd.autopackage`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AUTOPACKAGE()
	{
		return 'application/vnd.autopackage';
	}

	/**
	 * Represents the content type `application/vnd.avistar+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_AVISTAR_XML()
	{
		return 'application/vnd.avistar+xml';
	}

	/**
	 * Represents the content type `application/vnd.balsamiq.bmml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BALSAMIQ_BMML_XML()
	{
		return 'application/vnd.balsamiq.bmml+xml';
	}

	/**
	 * Represents the content type `application/vnd.balsamiq.bmpr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BALSAMIQ_BMPR()
	{
		return 'application/vnd.balsamiq.bmpr';
	}

	/**
	 * Represents the content type `application/vnd.bekitzur-stech+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BEKITZUR_STECH_JSON()
	{
		return 'application/vnd.bekitzur-stech+json';
	}

	/**
	 * Represents the content type `application/vnd.biopax.rdf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BIOPAX_RDF_XML()
	{
		return 'application/vnd.biopax.rdf+xml';
	}

	/**
	 * Represents the content type `application/vnd.blueice.multipass`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BLUEICE_MULTIPASS()
	{
		return 'application/vnd.blueice.multipass';
	}

	/**
	 * Represents the content type `application/vnd.bluetooth.ep.oob`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BLUETOOTH_EP_OOB()
	{
		return 'application/vnd.bluetooth.ep.oob';
	}

	/**
	 * Represents the content type `application/vnd.bluetooth.le.oob`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BLUETOOTH_LE_OOB()
	{
		return 'application/vnd.bluetooth.le.oob';
	}

	/**
	 * Represents the content type `application/vnd.bmi`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BMI()
	{
		return 'application/vnd.bmi';
	}

	/**
	 * Represents the content type `application/vnd.businessobjects`.
	 * @type {String}
	 */
	static get APPLICATION_VND_BUSINESSOBJECTS()
	{
		return 'application/vnd.businessobjects';
	}

	/**
	 * Represents the content type `application/vnd.cab-jscript`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CAB_JSCRIPT()
	{
		return 'application/vnd.cab-jscript';
	}

	/**
	 * Represents the content type `application/vnd.canon-cpdl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CANON_CPDL()
	{
		return 'application/vnd.canon-cpdl';
	}

	/**
	 * Represents the content type `application/vnd.canon-lips`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CANON_LIPS()
	{
		return 'application/vnd.canon-lips';
	}

	/**
	 * Represents the content type `application/vnd.cendio.thinlinc.clientconf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CENDIO_THINLINC_CLIENTCONF()
	{
		return 'application/vnd.cendio.thinlinc.clientconf';
	}

	/**
	 * Represents the content type `application/vnd.century-systems.tcp_stream`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CENTURY_SYSTEMS_TCP_STREAM()
	{
		return 'application/vnd.century-systems.tcp_stream';
	}

	/**
	 * Represents the content type `application/vnd.chemdraw+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CHEMDRAW_XML()
	{
		return 'application/vnd.chemdraw+xml';
	}

	/**
	 * Represents the content type `application/vnd.chess-pgn`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CHESS_PGN()
	{
		return 'application/vnd.chess-pgn';
	}

	/**
	 * Represents the content type `application/vnd.chipnuts.karaoke-mmd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CHIPNUTS_KARAOKE_MMD()
	{
		return 'application/vnd.chipnuts.karaoke-mmd';
	}

	/**
	 * Represents the content type `application/vnd.cinderella`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CINDERELLA()
	{
		return 'application/vnd.cinderella';
	}

	/**
	 * Represents the content type `application/vnd.cirpack.isdn-ext`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CIRPACK_ISDN_EXT()
	{
		return 'application/vnd.cirpack.isdn-ext';
	}

	/**
	 * Represents the content type `application/vnd.citationstyles.style+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CITATIONSTYLES_STYLE_XML()
	{
		return 'application/vnd.citationstyles.style+xml';
	}

	/**
	 * Represents the content type `application/vnd.claymore`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CLAYMORE()
	{
		return 'application/vnd.claymore';
	}

	/**
	 * Represents the content type `application/vnd.cloanto.rp9`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CLOANTO_RP9()
	{
		return 'application/vnd.cloanto.rp9';
	}

	/**
	 * Represents the content type `application/vnd.clonk.c4group`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CLONK_C4GROUP()
	{
		return 'application/vnd.clonk.c4group';
	}

	/**
	 * Represents the content type `application/vnd.cluetrust.cartomobile-config`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG()
	{
		return 'application/vnd.cluetrust.cartomobile-config';
	}

	/**
	 * Represents the content type `application/vnd.cluetrust.cartomobile-config-pkg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG_PKG()
	{
		return 'application/vnd.cluetrust.cartomobile-config-pkg';
	}

	/**
	 * Represents the content type `application/vnd.coffeescript`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COFFEESCRIPT()
	{
		return 'application/vnd.coffeescript';
	}

	/**
	 * Represents the content type `application/vnd.collection+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COLLECTION_JSON()
	{
		return 'application/vnd.collection+json';
	}

	/**
	 * Represents the content type `application/vnd.collection.doc+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COLLECTION_DOC_JSON()
	{
		return 'application/vnd.collection.doc+json';
	}

	/**
	 * Represents the content type `application/vnd.collection.next+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COLLECTION_NEXT_JSON()
	{
		return 'application/vnd.collection.next+json';
	}

	/**
	 * Represents the content type `application/vnd.comicbook+zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COMICBOOK_ZIP()
	{
		return 'application/vnd.comicbook+zip';
	}

	/**
	 * Represents the content type `application/vnd.commerce-battelle`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COMMERCE_BATTELLE()
	{
		return 'application/vnd.commerce-battelle';
	}

	/**
	 * Represents the content type `application/vnd.commonspace`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COMMONSPACE()
	{
		return 'application/vnd.commonspace';
	}

	/**
	 * Represents the content type `application/vnd.contact.cmsg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CONTACT_CMSG()
	{
		return 'application/vnd.contact.cmsg';
	}

	/**
	 * Represents the content type `application/vnd.coreos.ignition+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COREOS_IGNITION_JSON()
	{
		return 'application/vnd.coreos.ignition+json';
	}

	/**
	 * Represents the content type `application/vnd.cosmocaller`.
	 * @type {String}
	 */
	static get APPLICATION_VND_COSMOCALLER()
	{
		return 'application/vnd.cosmocaller';
	}

	/**
	 * Represents the content type `application/vnd.crick.clicker`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRICK_CLICKER()
	{
		return 'application/vnd.crick.clicker';
	}

	/**
	 * Represents the content type `application/vnd.crick.clicker.keyboard`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRICK_CLICKER_KEYBOARD()
	{
		return 'application/vnd.crick.clicker.keyboard';
	}

	/**
	 * Represents the content type `application/vnd.crick.clicker.palette`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRICK_CLICKER_PALETTE()
	{
		return 'application/vnd.crick.clicker.palette';
	}

	/**
	 * Represents the content type `application/vnd.crick.clicker.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRICK_CLICKER_TEMPLATE()
	{
		return 'application/vnd.crick.clicker.template';
	}

	/**
	 * Represents the content type `application/vnd.crick.clicker.wordbank`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRICK_CLICKER_WORDBANK()
	{
		return 'application/vnd.crick.clicker.wordbank';
	}

	/**
	 * Represents the content type `application/vnd.criticaltools.wbs+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CRITICALTOOLS_WBS_XML()
	{
		return 'application/vnd.criticaltools.wbs+xml';
	}

	/**
	 * Represents the content type `application/vnd.ctc-posml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CTC_POSML()
	{
		return 'application/vnd.ctc-posml';
	}

	/**
	 * Represents the content type `application/vnd.ctct.ws+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CTCT_WS_XML()
	{
		return 'application/vnd.ctct.ws+xml';
	}

	/**
	 * Represents the content type `application/vnd.cups-pdf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CUPS_PDF()
	{
		return 'application/vnd.cups-pdf';
	}

	/**
	 * Represents the content type `application/vnd.cups-postscript`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CUPS_POSTSCRIPT()
	{
		return 'application/vnd.cups-postscript';
	}

	/**
	 * Represents the content type `application/vnd.cups-ppd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CUPS_PPD()
	{
		return 'application/vnd.cups-ppd';
	}

	/**
	 * Represents the content type `application/vnd.cups-raster`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CUPS_RASTER()
	{
		return 'application/vnd.cups-raster';
	}

	/**
	 * Represents the content type `application/vnd.cups-raw`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CUPS_RAW()
	{
		return 'application/vnd.cups-raw';
	}

	/**
	 * Represents the content type `application/vnd.curl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CURL()
	{
		return 'application/vnd.curl';
	}

	/**
	 * Represents the content type `application/vnd.curl.car`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CURL_CAR()
	{
		return 'application/vnd.curl.car';
	}

	/**
	 * Represents the content type `application/vnd.curl.pcurl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CURL_PCURL()
	{
		return 'application/vnd.curl.pcurl';
	}

	/**
	 * Represents the content type `application/vnd.cyan.dean.root+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CYAN_DEAN_ROOT_XML()
	{
		return 'application/vnd.cyan.dean.root+xml';
	}

	/**
	 * Represents the content type `application/vnd.cybank`.
	 * @type {String}
	 */
	static get APPLICATION_VND_CYBANK()
	{
		return 'application/vnd.cybank';
	}

	/**
	 * Represents the content type `application/vnd.dart`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DART()
	{
		return 'application/vnd.dart';
	}

	/**
	 * Represents the content type `application/vnd.data-vision.rdz`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DATA_VISION_RDZ()
	{
		return 'application/vnd.data-vision.rdz';
	}

	/**
	 * Represents the content type `application/vnd.debian.binary-package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DEBIAN_BINARY_PACKAGE()
	{
		return 'application/vnd.debian.binary-package';
	}

	/**
	 * Represents the content type `application/vnd.dece.data`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DECE_DATA()
	{
		return 'application/vnd.dece.data';
	}

	/**
	 * Represents the content type `application/vnd.dece.ttml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DECE_TTML_XML()
	{
		return 'application/vnd.dece.ttml+xml';
	}

	/**
	 * Represents the content type `application/vnd.dece.unspecified`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DECE_UNSPECIFIED()
	{
		return 'application/vnd.dece.unspecified';
	}

	/**
	 * Represents the content type `application/vnd.dece.zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DECE_ZIP()
	{
		return 'application/vnd.dece.zip';
	}

	/**
	 * Represents the content type `application/vnd.denovo.fcselayout-link`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DENOVO_FCSELAYOUT_LINK()
	{
		return 'application/vnd.denovo.fcselayout-link';
	}

	/**
	 * Represents the content type `application/vnd.desmume.movie`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DESMUME_MOVIE()
	{
		return 'application/vnd.desmume.movie';
	}

	/**
	 * Represents the content type `application/vnd.dir-bi.plate-dl-nosuffix`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DIR_BI_PLATE_DL_NOSUFFIX()
	{
		return 'application/vnd.dir-bi.plate-dl-nosuffix';
	}

	/**
	 * Represents the content type `application/vnd.dm.delegation+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DM_DELEGATION_XML()
	{
		return 'application/vnd.dm.delegation+xml';
	}

	/**
	 * Represents the content type `application/vnd.dna`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DNA()
	{
		return 'application/vnd.dna';
	}

	/**
	 * Represents the content type `application/vnd.document+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DOCUMENT_JSON()
	{
		return 'application/vnd.document+json';
	}

	/**
	 * Represents the content type `application/vnd.dolby.mlp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DOLBY_MLP()
	{
		return 'application/vnd.dolby.mlp';
	}

	/**
	 * Represents the content type `application/vnd.dolby.mobile.1`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DOLBY_MOBILE_1()
	{
		return 'application/vnd.dolby.mobile.1';
	}

	/**
	 * Represents the content type `application/vnd.dolby.mobile.2`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DOLBY_MOBILE_2()
	{
		return 'application/vnd.dolby.mobile.2';
	}

	/**
	 * Represents the content type `application/vnd.doremir.scorecloud-binary-document`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DOREMIR_SCORECLOUD_BINARY_DOCUMENT()
	{
		return 'application/vnd.doremir.scorecloud-binary-document';
	}

	/**
	 * Represents the content type `application/vnd.dpgraph`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DPGRAPH()
	{
		return 'application/vnd.dpgraph';
	}

	/**
	 * Represents the content type `application/vnd.dreamfactory`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DREAMFACTORY()
	{
		return 'application/vnd.dreamfactory';
	}

	/**
	 * Represents the content type `application/vnd.drive+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DRIVE_JSON()
	{
		return 'application/vnd.drive+json';
	}

	/**
	 * Represents the content type `application/vnd.ds-keypoint`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DS_KEYPOINT()
	{
		return 'application/vnd.ds-keypoint';
	}

	/**
	 * Represents the content type `application/vnd.dtg.local`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DTG_LOCAL()
	{
		return 'application/vnd.dtg.local';
	}

	/**
	 * Represents the content type `application/vnd.dtg.local.flash`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DTG_LOCAL_FLASH()
	{
		return 'application/vnd.dtg.local.flash';
	}

	/**
	 * Represents the content type `application/vnd.dtg.local.html`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DTG_LOCAL_HTML()
	{
		return 'application/vnd.dtg.local.html';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ait`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_AIT()
	{
		return 'application/vnd.dvb.ait';
	}

	/**
	 * Represents the content type `application/vnd.dvb.dvbj`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_DVBJ()
	{
		return 'application/vnd.dvb.dvbj';
	}

	/**
	 * Represents the content type `application/vnd.dvb.esgcontainer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_ESGCONTAINER()
	{
		return 'application/vnd.dvb.esgcontainer';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ipdcdftnotifaccess`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPDCDFTNOTIFACCESS()
	{
		return 'application/vnd.dvb.ipdcdftnotifaccess';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgaccess`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPDCESGACCESS()
	{
		return 'application/vnd.dvb.ipdcesgaccess';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgaccess2`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPDCESGACCESS2()
	{
		return 'application/vnd.dvb.ipdcesgaccess2';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ipdcesgpdd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPDCESGPDD()
	{
		return 'application/vnd.dvb.ipdcesgpdd';
	}

	/**
	 * Represents the content type `application/vnd.dvb.ipdcroaming`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPDCROAMING()
	{
		return 'application/vnd.dvb.ipdcroaming';
	}

	/**
	 * Represents the content type `application/vnd.dvb.iptv.alfec-base`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPTV_ALFEC_BASE()
	{
		return 'application/vnd.dvb.iptv.alfec-base';
	}

	/**
	 * Represents the content type `application/vnd.dvb.iptv.alfec-enhancement`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_IPTV_ALFEC_ENHANCEMENT()
	{
		return 'application/vnd.dvb.iptv.alfec-enhancement';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-aggregate-root+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_AGGREGATE_ROOT_XML()
	{
		return 'application/vnd.dvb.notif-aggregate-root+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-container+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_CONTAINER_XML()
	{
		return 'application/vnd.dvb.notif-container+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-generic+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_GENERIC_XML()
	{
		return 'application/vnd.dvb.notif-generic+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-msglist+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_IA_MSGLIST_XML()
	{
		return 'application/vnd.dvb.notif-ia-msglist+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-registration-request+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_REQUEST_XML()
	{
		return 'application/vnd.dvb.notif-ia-registration-request+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-ia-registration-response+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_RESPONSE_XML()
	{
		return 'application/vnd.dvb.notif-ia-registration-response+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.notif-init+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_NOTIF_INIT_XML()
	{
		return 'application/vnd.dvb.notif-init+xml';
	}

	/**
	 * Represents the content type `application/vnd.dvb.pfr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_PFR()
	{
		return 'application/vnd.dvb.pfr';
	}

	/**
	 * Represents the content type `application/vnd.dvb.service`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DVB_SERVICE()
	{
		return 'application/vnd.dvb.service';
	}

	/**
	 * Represents the content type `application/vnd.dxr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DXR()
	{
		return 'application/vnd.dxr';
	}

	/**
	 * Represents the content type `application/vnd.dynageo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DYNAGEO()
	{
		return 'application/vnd.dynageo';
	}

	/**
	 * Represents the content type `application/vnd.dzr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_DZR()
	{
		return 'application/vnd.dzr';
	}

	/**
	 * Represents the content type `application/vnd.easykaraoke.cdgdownload`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EASYKARAOKE_CDGDOWNLOAD()
	{
		return 'application/vnd.easykaraoke.cdgdownload';
	}

	/**
	 * Represents the content type `application/vnd.ecdis-update`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECDIS_UPDATE()
	{
		return 'application/vnd.ecdis-update';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.chart`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_CHART()
	{
		return 'application/vnd.ecowin.chart';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.filerequest`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_FILEREQUEST()
	{
		return 'application/vnd.ecowin.filerequest';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.fileupdate`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_FILEUPDATE()
	{
		return 'application/vnd.ecowin.fileupdate';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.series`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_SERIES()
	{
		return 'application/vnd.ecowin.series';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.seriesrequest`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_SERIESREQUEST()
	{
		return 'application/vnd.ecowin.seriesrequest';
	}

	/**
	 * Represents the content type `application/vnd.ecowin.seriesupdate`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ECOWIN_SERIESUPDATE()
	{
		return 'application/vnd.ecowin.seriesupdate';
	}

	/**
	 * Represents the content type `application/vnd.emclient.accessrequest+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EMCLIENT_ACCESSREQUEST_XML()
	{
		return 'application/vnd.emclient.accessrequest+xml';
	}

	/**
	 * Represents the content type `application/vnd.enliven`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ENLIVEN()
	{
		return 'application/vnd.enliven';
	}

	/**
	 * Represents the content type `application/vnd.enphase.envoy`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ENPHASE_ENVOY()
	{
		return 'application/vnd.enphase.envoy';
	}

	/**
	 * Represents the content type `application/vnd.eprints.data+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPRINTS_DATA_XML()
	{
		return 'application/vnd.eprints.data+xml';
	}

	/**
	 * Represents the content type `application/vnd.epson.esf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPSON_ESF()
	{
		return 'application/vnd.epson.esf';
	}

	/**
	 * Represents the content type `application/vnd.epson.msf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPSON_MSF()
	{
		return 'application/vnd.epson.msf';
	}

	/**
	 * Represents the content type `application/vnd.epson.quickanime`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPSON_QUICKANIME()
	{
		return 'application/vnd.epson.quickanime';
	}

	/**
	 * Represents the content type `application/vnd.epson.salt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPSON_SALT()
	{
		return 'application/vnd.epson.salt';
	}

	/**
	 * Represents the content type `application/vnd.epson.ssf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EPSON_SSF()
	{
		return 'application/vnd.epson.ssf';
	}

	/**
	 * Represents the content type `application/vnd.ericsson.quickcall`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ERICSSON_QUICKCALL()
	{
		return 'application/vnd.ericsson.quickcall';
	}

	/**
	 * Represents the content type `application/vnd.eszigno3+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ESZIGNO3_XML()
	{
		return 'application/vnd.eszigno3+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.aoc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_AOC_XML()
	{
		return 'application/vnd.etsi.aoc+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.asic-e+zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_ASIC_E_ZIP()
	{
		return 'application/vnd.etsi.asic-e+zip';
	}

	/**
	 * Represents the content type `application/vnd.etsi.asic-s+zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_ASIC_S_ZIP()
	{
		return 'application/vnd.etsi.asic-s+zip';
	}

	/**
	 * Represents the content type `application/vnd.etsi.cug+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_CUG_XML()
	{
		return 'application/vnd.etsi.cug+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvcommand+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVCOMMAND_XML()
	{
		return 'application/vnd.etsi.iptvcommand+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvdiscovery+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVDISCOVERY_XML()
	{
		return 'application/vnd.etsi.iptvdiscovery+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvprofile+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVPROFILE_XML()
	{
		return 'application/vnd.etsi.iptvprofile+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-bc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVSAD_BC_XML()
	{
		return 'application/vnd.etsi.iptvsad-bc+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-cod+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVSAD_COD_XML()
	{
		return 'application/vnd.etsi.iptvsad-cod+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvsad-npvr+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVSAD_NPVR_XML()
	{
		return 'application/vnd.etsi.iptvsad-npvr+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvservice+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVSERVICE_XML()
	{
		return 'application/vnd.etsi.iptvservice+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvsync+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVSYNC_XML()
	{
		return 'application/vnd.etsi.iptvsync+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.iptvueprofile+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_IPTVUEPROFILE_XML()
	{
		return 'application/vnd.etsi.iptvueprofile+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.mcid+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_MCID_XML()
	{
		return 'application/vnd.etsi.mcid+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.mheg5`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_MHEG5()
	{
		return 'application/vnd.etsi.mheg5';
	}

	/**
	 * Represents the content type `application/vnd.etsi.overload-control-policy-dataset+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_OVERLOAD_CONTROL_POLICY_DATASET_XML()
	{
		return 'application/vnd.etsi.overload-control-policy-dataset+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.pstn+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_PSTN_XML()
	{
		return 'application/vnd.etsi.pstn+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.sci+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_SCI_XML()
	{
		return 'application/vnd.etsi.sci+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.simservs+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_SIMSERVS_XML()
	{
		return 'application/vnd.etsi.simservs+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.timestamp-token`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_TIMESTAMP_TOKEN()
	{
		return 'application/vnd.etsi.timestamp-token';
	}

	/**
	 * Represents the content type `application/vnd.etsi.tsl+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_TSL_XML()
	{
		return 'application/vnd.etsi.tsl+xml';
	}

	/**
	 * Represents the content type `application/vnd.etsi.tsl.der`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ETSI_TSL_DER()
	{
		return 'application/vnd.etsi.tsl.der';
	}

	/**
	 * Represents the content type `application/vnd.eudora.data`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EUDORA_DATA()
	{
		return 'application/vnd.eudora.data';
	}

	/**
	 * Represents the content type `application/vnd.ezpix-album`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EZPIX_ALBUM()
	{
		return 'application/vnd.ezpix-album';
	}

	/**
	 * Represents the content type `application/vnd.ezpix-package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_EZPIX_PACKAGE()
	{
		return 'application/vnd.ezpix-package';
	}

	/**
	 * Represents the content type `application/vnd.f-secure.mobile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_F_SECURE_MOBILE()
	{
		return 'application/vnd.f-secure.mobile';
	}

	/**
	 * Represents the content type `application/vnd.fastcopy-disk-image`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FASTCOPY_DISK_IMAGE()
	{
		return 'application/vnd.fastcopy-disk-image';
	}

	/**
	 * Represents the content type `application/vnd.fdf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FDF()
	{
		return 'application/vnd.fdf';
	}

	/**
	 * Represents the content type `application/vnd.fdsn.mseed`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FDSN_MSEED()
	{
		return 'application/vnd.fdsn.mseed';
	}

	/**
	 * Represents the content type `application/vnd.fdsn.seed`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FDSN_SEED()
	{
		return 'application/vnd.fdsn.seed';
	}

	/**
	 * Represents the content type `application/vnd.ffsns`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FFSNS()
	{
		return 'application/vnd.ffsns';
	}

	/**
	 * Represents the content type `application/vnd.filmit.zfc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FILMIT_ZFC()
	{
		return 'application/vnd.filmit.zfc';
	}

	/**
	 * Represents the content type `application/vnd.fints`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FINTS()
	{
		return 'application/vnd.fints';
	}

	/**
	 * Represents the content type `application/vnd.firemonkeys.cloudcell`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FIREMONKEYS_CLOUDCELL()
	{
		return 'application/vnd.firemonkeys.cloudcell';
	}

	/**
	 * Represents the content type `application/vnd.flographit`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FLOGRAPHIT()
	{
		return 'application/vnd.flographit';
	}

	/**
	 * Represents the content type `application/vnd.fluxtime.clip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FLUXTIME_CLIP()
	{
		return 'application/vnd.fluxtime.clip';
	}

	/**
	 * Represents the content type `application/vnd.font-fontforge-sfd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FONT_FONTFORGE_SFD()
	{
		return 'application/vnd.font-fontforge-sfd';
	}

	/**
	 * Represents the content type `application/vnd.framemaker`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FRAMEMAKER()
	{
		return 'application/vnd.framemaker';
	}

	/**
	 * Represents the content type `application/vnd.frogans.fnc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FROGANS_FNC()
	{
		return 'application/vnd.frogans.fnc';
	}

	/**
	 * Represents the content type `application/vnd.frogans.ltf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FROGANS_LTF()
	{
		return 'application/vnd.frogans.ltf';
	}

	/**
	 * Represents the content type `application/vnd.fsc.weblaunch`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FSC_WEBLAUNCH()
	{
		return 'application/vnd.fsc.weblaunch';
	}

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJITSU_OASYS()
	{
		return 'application/vnd.fujitsu.oasys';
	}

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys2`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJITSU_OASYS2()
	{
		return 'application/vnd.fujitsu.oasys2';
	}

	/**
	 * Represents the content type `application/vnd.fujitsu.oasys3`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJITSU_OASYS3()
	{
		return 'application/vnd.fujitsu.oasys3';
	}

	/**
	 * Represents the content type `application/vnd.fujitsu.oasysgp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJITSU_OASYSGP()
	{
		return 'application/vnd.fujitsu.oasysgp';
	}

	/**
	 * Represents the content type `application/vnd.fujitsu.oasysprs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJITSU_OASYSPRS()
	{
		return 'application/vnd.fujitsu.oasysprs';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.art-ex`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_ART_EX()
	{
		return 'application/vnd.fujixerox.art-ex';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.art4`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_ART4()
	{
		return 'application/vnd.fujixerox.art4';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.ddd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_DDD()
	{
		return 'application/vnd.fujixerox.ddd';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_DOCUWORKS()
	{
		return 'application/vnd.fujixerox.docuworks';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks.binder`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_DOCUWORKS_BINDER()
	{
		return 'application/vnd.fujixerox.docuworks.binder';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.docuworks.container`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_DOCUWORKS_CONTAINER()
	{
		return 'application/vnd.fujixerox.docuworks.container';
	}

	/**
	 * Represents the content type `application/vnd.fujixerox.hbpl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUJIXEROX_HBPL()
	{
		return 'application/vnd.fujixerox.hbpl';
	}

	/**
	 * Represents the content type `application/vnd.fut-misnet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUT_MISNET()
	{
		return 'application/vnd.fut-misnet';
	}

	/**
	 * Represents the content type `application/vnd.fuzzysheet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_FUZZYSHEET()
	{
		return 'application/vnd.fuzzysheet';
	}

	/**
	 * Represents the content type `application/vnd.genomatix.tuxedo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GENOMATIX_TUXEDO()
	{
		return 'application/vnd.genomatix.tuxedo';
	}

	/**
	 * Represents the content type `application/vnd.geo+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEO_JSON()
	{
		return 'application/vnd.geo+json';
	}

	/**
	 * Represents the content type `application/vnd.geocube+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOCUBE_XML()
	{
		return 'application/vnd.geocube+xml';
	}

	/**
	 * Represents the content type `application/vnd.geogebra.file`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOGEBRA_FILE()
	{
		return 'application/vnd.geogebra.file';
	}

	/**
	 * Represents the content type `application/vnd.geogebra.slides`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOGEBRA_SLIDES()
	{
		return 'application/vnd.geogebra.slides';
	}

	/**
	 * Represents the content type `application/vnd.geogebra.tool`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOGEBRA_TOOL()
	{
		return 'application/vnd.geogebra.tool';
	}

	/**
	 * Represents the content type `application/vnd.geometry-explorer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOMETRY_EXPLORER()
	{
		return 'application/vnd.geometry-explorer';
	}

	/**
	 * Represents the content type `application/vnd.geonext`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEONEXT()
	{
		return 'application/vnd.geonext';
	}

	/**
	 * Represents the content type `application/vnd.geoplan`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOPLAN()
	{
		return 'application/vnd.geoplan';
	}

	/**
	 * Represents the content type `application/vnd.geospace`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GEOSPACE()
	{
		return 'application/vnd.geospace';
	}

	/**
	 * Represents the content type `application/vnd.gerber`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GERBER()
	{
		return 'application/vnd.gerber';
	}

	/**
	 * Represents the content type `application/vnd.globalplatform.card-content-mgt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT()
	{
		return 'application/vnd.globalplatform.card-content-mgt';
	}

	/**
	 * Represents the content type `application/vnd.globalplatform.card-content-mgt-response`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT_RESPONSE()
	{
		return 'application/vnd.globalplatform.card-content-mgt-response';
	}

	/**
	 * Represents the content type `application/vnd.gmx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GMX()
	{
		return 'application/vnd.gmx';
	}

	/**
	 * Represents the content type `application/vnd.google-earth.kml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GOOGLE_EARTH_KML_XML()
	{
		return 'application/vnd.google-earth.kml+xml';
	}

	/**
	 * Represents the content type `application/vnd.google-earth.kmz`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GOOGLE_EARTH_KMZ()
	{
		return 'application/vnd.google-earth.kmz';
	}

	/**
	 * Represents the content type `application/vnd.gov.sk.e-form+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GOV_SK_E_FORM_XML()
	{
		return 'application/vnd.gov.sk.e-form+xml';
	}

	/**
	 * Represents the content type `application/vnd.gov.sk.e-form+zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GOV_SK_E_FORM_ZIP()
	{
		return 'application/vnd.gov.sk.e-form+zip';
	}

	/**
	 * Represents the content type `application/vnd.gov.sk.xmldatacontainer+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GOV_SK_XMLDATACONTAINER_XML()
	{
		return 'application/vnd.gov.sk.xmldatacontainer+xml';
	}

	/**
	 * Represents the content type `application/vnd.grafeq`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GRAFEQ()
	{
		return 'application/vnd.grafeq';
	}

	/**
	 * Represents the content type `application/vnd.gridmp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GRIDMP()
	{
		return 'application/vnd.gridmp';
	}

	/**
	 * Represents the content type `application/vnd.groove-account`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_ACCOUNT()
	{
		return 'application/vnd.groove-account';
	}

	/**
	 * Represents the content type `application/vnd.groove-help`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_HELP()
	{
		return 'application/vnd.groove-help';
	}

	/**
	 * Represents the content type `application/vnd.groove-identity-message`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_IDENTITY_MESSAGE()
	{
		return 'application/vnd.groove-identity-message';
	}

	/**
	 * Represents the content type `application/vnd.groove-injector`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_INJECTOR()
	{
		return 'application/vnd.groove-injector';
	}

	/**
	 * Represents the content type `application/vnd.groove-tool-message`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_TOOL_MESSAGE()
	{
		return 'application/vnd.groove-tool-message';
	}

	/**
	 * Represents the content type `application/vnd.groove-tool-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_TOOL_TEMPLATE()
	{
		return 'application/vnd.groove-tool-template';
	}

	/**
	 * Represents the content type `application/vnd.groove-vcard`.
	 * @type {String}
	 */
	static get APPLICATION_VND_GROOVE_VCARD()
	{
		return 'application/vnd.groove-vcard';
	}

	/**
	 * Represents the content type `application/vnd.hal+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HAL_JSON()
	{
		return 'application/vnd.hal+json';
	}

	/**
	 * Represents the content type `application/vnd.hal+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HAL_XML()
	{
		return 'application/vnd.hal+xml';
	}

	/**
	 * Represents the content type `application/vnd.handheld-entertainment+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HANDHELD_ENTERTAINMENT_XML()
	{
		return 'application/vnd.handheld-entertainment+xml';
	}

	/**
	 * Represents the content type `application/vnd.hbci`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HBCI()
	{
		return 'application/vnd.hbci';
	}

	/**
	 * Represents the content type `application/vnd.hcl-bireports`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HCL_BIREPORTS()
	{
		return 'application/vnd.hcl-bireports';
	}

	/**
	 * Represents the content type `application/vnd.hdt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HDT()
	{
		return 'application/vnd.hdt';
	}

	/**
	 * Represents the content type `application/vnd.heroku+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HEROKU_JSON()
	{
		return 'application/vnd.heroku+json';
	}

	/**
	 * Represents the content type `application/vnd.hhe.lesson-player`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HHE_LESSON_PLAYER()
	{
		return 'application/vnd.hhe.lesson-player';
	}

	/**
	 * Represents the content type `application/vnd.hp-hpgl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_HPGL()
	{
		return 'application/vnd.hp-hpgl';
	}

	/**
	 * Represents the content type `application/vnd.hp-hpid`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_HPID()
	{
		return 'application/vnd.hp-hpid';
	}

	/**
	 * Represents the content type `application/vnd.hp-hps`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_HPS()
	{
		return 'application/vnd.hp-hps';
	}

	/**
	 * Represents the content type `application/vnd.hp-jlyt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_JLYT()
	{
		return 'application/vnd.hp-jlyt';
	}

	/**
	 * Represents the content type `application/vnd.hp-pcl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_PCL()
	{
		return 'application/vnd.hp-pcl';
	}

	/**
	 * Represents the content type `application/vnd.hp-pclxl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HP_PCLXL()
	{
		return 'application/vnd.hp-pclxl';
	}

	/**
	 * Represents the content type `application/vnd.httphone`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HTTPHONE()
	{
		return 'application/vnd.httphone';
	}

	/**
	 * Represents the content type `application/vnd.hydrostatix.sof-data`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HYDROSTATIX_SOF_DATA()
	{
		return 'application/vnd.hydrostatix.sof-data';
	}

	/**
	 * Represents the content type `application/vnd.hyperdrive+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HYPERDRIVE_JSON()
	{
		return 'application/vnd.hyperdrive+json';
	}

	/**
	 * Represents the content type `application/vnd.hzn-3d-crossword`.
	 * @type {String}
	 */
	static get APPLICATION_VND_HZN_3D_CROSSWORD()
	{
		return 'application/vnd.hzn-3d-crossword';
	}

	/**
	 * Represents the content type `application/vnd.ibm.afplinedata`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_AFPLINEDATA()
	{
		return 'application/vnd.ibm.afplinedata';
	}

	/**
	 * Represents the content type `application/vnd.ibm.electronic-media`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_ELECTRONIC_MEDIA()
	{
		return 'application/vnd.ibm.electronic-media';
	}

	/**
	 * Represents the content type `application/vnd.ibm.minipay`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_MINIPAY()
	{
		return 'application/vnd.ibm.minipay';
	}

	/**
	 * Represents the content type `application/vnd.ibm.modcap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_MODCAP()
	{
		return 'application/vnd.ibm.modcap';
	}

	/**
	 * Represents the content type `application/vnd.ibm.rights-management`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_RIGHTS_MANAGEMENT()
	{
		return 'application/vnd.ibm.rights-management';
	}

	/**
	 * Represents the content type `application/vnd.ibm.secure-container`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IBM_SECURE_CONTAINER()
	{
		return 'application/vnd.ibm.secure-container';
	}

	/**
	 * Represents the content type `application/vnd.iccprofile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ICCPROFILE()
	{
		return 'application/vnd.iccprofile';
	}

	/**
	 * Represents the content type `application/vnd.ieee.1905`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IEEE_1905()
	{
		return 'application/vnd.ieee.1905';
	}

	/**
	 * Represents the content type `application/vnd.igloader`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IGLOADER()
	{
		return 'application/vnd.igloader';
	}

	/**
	 * Represents the content type `application/vnd.immervision-ivp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMMERVISION_IVP()
	{
		return 'application/vnd.immervision-ivp';
	}

	/**
	 * Represents the content type `application/vnd.immervision-ivu`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMMERVISION_IVU()
	{
		return 'application/vnd.immervision-ivu';
	}

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p1`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_IMSCCV1P1()
	{
		return 'application/vnd.ims.imsccv1p1';
	}

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p2`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_IMSCCV1P2()
	{
		return 'application/vnd.ims.imsccv1p2';
	}

	/**
	 * Represents the content type `application/vnd.ims.imsccv1p3`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_IMSCCV1P3()
	{
		return 'application/vnd.ims.imsccv1p3';
	}

	/**
	 * Represents the content type `application/vnd.ims.lis.v2.result+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LIS_V2_RESULT_JSON()
	{
		return 'application/vnd.ims.lis.v2.result+json';
	}

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolconsumerprofile+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LTI_V2_TOOLCONSUMERPROFILE_JSON()
	{
		return 'application/vnd.ims.lti.v2.toolconsumerprofile+json';
	}

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolproxy+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_JSON()
	{
		return 'application/vnd.ims.lti.v2.toolproxy+json';
	}

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolproxy.id+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_ID_JSON()
	{
		return 'application/vnd.ims.lti.v2.toolproxy.id+json';
	}

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolsettings+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_JSON()
	{
		return 'application/vnd.ims.lti.v2.toolsettings+json';
	}

	/**
	 * Represents the content type `application/vnd.ims.lti.v2.toolsettings.simple+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_SIMPLE_JSON()
	{
		return 'application/vnd.ims.lti.v2.toolsettings.simple+json';
	}

	/**
	 * Represents the content type `application/vnd.informedcontrol.rms+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INFORMEDCONTROL_RMS_XML()
	{
		return 'application/vnd.informedcontrol.rms+xml';
	}

	/**
	 * Represents the content type `application/vnd.informix-visionary`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INFORMIX_VISIONARY()
	{
		return 'application/vnd.informix-visionary';
	}

	/**
	 * Represents the content type `application/vnd.infotech.project`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INFOTECH_PROJECT()
	{
		return 'application/vnd.infotech.project';
	}

	/**
	 * Represents the content type `application/vnd.infotech.project+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INFOTECH_PROJECT_XML()
	{
		return 'application/vnd.infotech.project+xml';
	}

	/**
	 * Represents the content type `application/vnd.innopath.wamp.notification`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INNOPATH_WAMP_NOTIFICATION()
	{
		return 'application/vnd.innopath.wamp.notification';
	}

	/**
	 * Represents the content type `application/vnd.insors.igm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INSORS_IGM()
	{
		return 'application/vnd.insors.igm';
	}

	/**
	 * Represents the content type `application/vnd.intercon.formnet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTERCON_FORMNET()
	{
		return 'application/vnd.intercon.formnet';
	}

	/**
	 * Represents the content type `application/vnd.intergeo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTERGEO()
	{
		return 'application/vnd.intergeo';
	}

	/**
	 * Represents the content type `application/vnd.intertrust.digibox`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTERTRUST_DIGIBOX()
	{
		return 'application/vnd.intertrust.digibox';
	}

	/**
	 * Represents the content type `application/vnd.intertrust.nncp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTERTRUST_NNCP()
	{
		return 'application/vnd.intertrust.nncp';
	}

	/**
	 * Represents the content type `application/vnd.intu.qbo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTU_QBO()
	{
		return 'application/vnd.intu.qbo';
	}

	/**
	 * Represents the content type `application/vnd.intu.qfx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_INTU_QFX()
	{
		return 'application/vnd.intu.qfx';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.catalogitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_CATALOGITEM_XML()
	{
		return 'application/vnd.iptc.g2.catalogitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.conceptitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_CONCEPTITEM_XML()
	{
		return 'application/vnd.iptc.g2.conceptitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.knowledgeitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_KNOWLEDGEITEM_XML()
	{
		return 'application/vnd.iptc.g2.knowledgeitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.newsitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_NEWSITEM_XML()
	{
		return 'application/vnd.iptc.g2.newsitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.newsmessage+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_NEWSMESSAGE_XML()
	{
		return 'application/vnd.iptc.g2.newsmessage+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.packageitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_PACKAGEITEM_XML()
	{
		return 'application/vnd.iptc.g2.packageitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.iptc.g2.planningitem+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPTC_G2_PLANNINGITEM_XML()
	{
		return 'application/vnd.iptc.g2.planningitem+xml';
	}

	/**
	 * Represents the content type `application/vnd.ipunplugged.rcprofile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IPUNPLUGGED_RCPROFILE()
	{
		return 'application/vnd.ipunplugged.rcprofile';
	}

	/**
	 * Represents the content type `application/vnd.irepository.package+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IREPOSITORY_PACKAGE_XML()
	{
		return 'application/vnd.irepository.package+xml';
	}

	/**
	 * Represents the content type `application/vnd.is-xpr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_IS_XPR()
	{
		return 'application/vnd.is-xpr';
	}

	/**
	 * Represents the content type `application/vnd.isac.fcs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ISAC_FCS()
	{
		return 'application/vnd.isac.fcs';
	}

	/**
	 * Represents the content type `application/vnd.jam`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAM()
	{
		return 'application/vnd.jam';
	}

	/**
	 * Represents the content type `application/vnd.japannet-directory-service`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_DIRECTORY_SERVICE()
	{
		return 'application/vnd.japannet-directory-service';
	}

	/**
	 * Represents the content type `application/vnd.japannet-jpnstore-wakeup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_JPNSTORE_WAKEUP()
	{
		return 'application/vnd.japannet-jpnstore-wakeup';
	}

	/**
	 * Represents the content type `application/vnd.japannet-payment-wakeup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_PAYMENT_WAKEUP()
	{
		return 'application/vnd.japannet-payment-wakeup';
	}

	/**
	 * Represents the content type `application/vnd.japannet-registration`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_REGISTRATION()
	{
		return 'application/vnd.japannet-registration';
	}

	/**
	 * Represents the content type `application/vnd.japannet-registration-wakeup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_REGISTRATION_WAKEUP()
	{
		return 'application/vnd.japannet-registration-wakeup';
	}

	/**
	 * Represents the content type `application/vnd.japannet-setstore-wakeup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_SETSTORE_WAKEUP()
	{
		return 'application/vnd.japannet-setstore-wakeup';
	}

	/**
	 * Represents the content type `application/vnd.japannet-verification`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_VERIFICATION()
	{
		return 'application/vnd.japannet-verification';
	}

	/**
	 * Represents the content type `application/vnd.japannet-verification-wakeup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JAPANNET_VERIFICATION_WAKEUP()
	{
		return 'application/vnd.japannet-verification-wakeup';
	}

	/**
	 * Represents the content type `application/vnd.jcp.javame.midlet-rms`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JCP_JAVAME_MIDLET_RMS()
	{
		return 'application/vnd.jcp.javame.midlet-rms';
	}

	/**
	 * Represents the content type `application/vnd.jisp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JISP()
	{
		return 'application/vnd.jisp';
	}

	/**
	 * Represents the content type `application/vnd.joost.joda-archive`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JOOST_JODA_ARCHIVE()
	{
		return 'application/vnd.joost.joda-archive';
	}

	/**
	 * Represents the content type `application/vnd.jsk.isdn-ngn`.
	 * @type {String}
	 */
	static get APPLICATION_VND_JSK_ISDN_NGN()
	{
		return 'application/vnd.jsk.isdn-ngn';
	}

	/**
	 * Represents the content type `application/vnd.kahootz`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KAHOOTZ()
	{
		return 'application/vnd.kahootz';
	}

	/**
	 * Represents the content type `application/vnd.kde.karbon`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KARBON()
	{
		return 'application/vnd.kde.karbon';
	}

	/**
	 * Represents the content type `application/vnd.kde.kchart`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KCHART()
	{
		return 'application/vnd.kde.kchart';
	}

	/**
	 * Represents the content type `application/vnd.kde.kformula`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KFORMULA()
	{
		return 'application/vnd.kde.kformula';
	}

	/**
	 * Represents the content type `application/vnd.kde.kivio`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KIVIO()
	{
		return 'application/vnd.kde.kivio';
	}

	/**
	 * Represents the content type `application/vnd.kde.kontour`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KONTOUR()
	{
		return 'application/vnd.kde.kontour';
	}

	/**
	 * Represents the content type `application/vnd.kde.kpresenter`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KPRESENTER()
	{
		return 'application/vnd.kde.kpresenter';
	}

	/**
	 * Represents the content type `application/vnd.kde.kspread`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KSPREAD()
	{
		return 'application/vnd.kde.kspread';
	}

	/**
	 * Represents the content type `application/vnd.kde.kword`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KDE_KWORD()
	{
		return 'application/vnd.kde.kword';
	}

	/**
	 * Represents the content type `application/vnd.kenameaapp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KENAMEAAPP()
	{
		return 'application/vnd.kenameaapp';
	}

	/**
	 * Represents the content type `application/vnd.kidspiration`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KIDSPIRATION()
	{
		return 'application/vnd.kidspiration';
	}

	/**
	 * Represents the content type `application/vnd.kinar`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KINAR()
	{
		return 'application/vnd.kinar';
	}

	/**
	 * Represents the content type `application/vnd.koan`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KOAN()
	{
		return 'application/vnd.koan';
	}

	/**
	 * Represents the content type `application/vnd.kodak-descriptor`.
	 * @type {String}
	 */
	static get APPLICATION_VND_KODAK_DESCRIPTOR()
	{
		return 'application/vnd.kodak-descriptor';
	}

	/**
	 * Represents the content type `application/vnd.las.las+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LAS_LAS_XML()
	{
		return 'application/vnd.las.las+xml';
	}

	/**
	 * Represents the content type `application/vnd.liberty-request+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LIBERTY_REQUEST_XML()
	{
		return 'application/vnd.liberty-request+xml';
	}

	/**
	 * Represents the content type `application/vnd.llamagraphics.life-balance.desktop`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_DESKTOP()
	{
		return 'application/vnd.llamagraphics.life-balance.desktop';
	}

	/**
	 * Represents the content type `application/vnd.llamagraphics.life-balance.exchange+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_EXCHANGE_XML()
	{
		return 'application/vnd.llamagraphics.life-balance.exchange+xml';
	}

	/**
	 * Represents the content type `application/vnd.lotus-1-2-3`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_1_2_3()
	{
		return 'application/vnd.lotus-1-2-3';
	}

	/**
	 * Represents the content type `application/vnd.lotus-approach`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_APPROACH()
	{
		return 'application/vnd.lotus-approach';
	}

	/**
	 * Represents the content type `application/vnd.lotus-freelance`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_FREELANCE()
	{
		return 'application/vnd.lotus-freelance';
	}

	/**
	 * Represents the content type `application/vnd.lotus-notes`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_NOTES()
	{
		return 'application/vnd.lotus-notes';
	}

	/**
	 * Represents the content type `application/vnd.lotus-organizer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_ORGANIZER()
	{
		return 'application/vnd.lotus-organizer';
	}

	/**
	 * Represents the content type `application/vnd.lotus-screencam`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_SCREENCAM()
	{
		return 'application/vnd.lotus-screencam';
	}

	/**
	 * Represents the content type `application/vnd.lotus-wordpro`.
	 * @type {String}
	 */
	static get APPLICATION_VND_LOTUS_WORDPRO()
	{
		return 'application/vnd.lotus-wordpro';
	}

	/**
	 * Represents the content type `application/vnd.macports.portpkg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MACPORTS_PORTPKG()
	{
		return 'application/vnd.macports.portpkg';
	}

	/**
	 * Represents the content type `application/vnd.mapbox-vector-tile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MAPBOX_VECTOR_TILE()
	{
		return 'application/vnd.mapbox-vector-tile';
	}

	/**
	 * Represents the content type `application/vnd.marlin.drm.actiontoken+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MARLIN_DRM_ACTIONTOKEN_XML()
	{
		return 'application/vnd.marlin.drm.actiontoken+xml';
	}

	/**
	 * Represents the content type `application/vnd.marlin.drm.conftoken+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MARLIN_DRM_CONFTOKEN_XML()
	{
		return 'application/vnd.marlin.drm.conftoken+xml';
	}

	/**
	 * Represents the content type `application/vnd.marlin.drm.license+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MARLIN_DRM_LICENSE_XML()
	{
		return 'application/vnd.marlin.drm.license+xml';
	}

	/**
	 * Represents the content type `application/vnd.marlin.drm.mdcf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MARLIN_DRM_MDCF()
	{
		return 'application/vnd.marlin.drm.mdcf';
	}

	/**
	 * Represents the content type `application/vnd.mason+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MASON_JSON()
	{
		return 'application/vnd.mason+json';
	}

	/**
	 * Represents the content type `application/vnd.maxmind.maxmind-db`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MAXMIND_MAXMIND_DB()
	{
		return 'application/vnd.maxmind.maxmind-db';
	}

	/**
	 * Represents the content type `application/vnd.mcd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MCD()
	{
		return 'application/vnd.mcd';
	}

	/**
	 * Represents the content type `application/vnd.medcalcdata`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MEDCALCDATA()
	{
		return 'application/vnd.medcalcdata';
	}

	/**
	 * Represents the content type `application/vnd.mediastation.cdkey`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MEDIASTATION_CDKEY()
	{
		return 'application/vnd.mediastation.cdkey';
	}

	/**
	 * Represents the content type `application/vnd.meridian-slingshot`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MERIDIAN_SLINGSHOT()
	{
		return 'application/vnd.meridian-slingshot';
	}

	/**
	 * Represents the content type `application/vnd.mfer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MFER()
	{
		return 'application/vnd.mfer';
	}

	/**
	 * Represents the content type `application/vnd.mfmp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MFMP()
	{
		return 'application/vnd.mfmp';
	}

	/**
	 * Represents the content type `application/vnd.micro+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MICRO_JSON()
	{
		return 'application/vnd.micro+json';
	}

	/**
	 * Represents the content type `application/vnd.micrografx.flo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MICROGRAFX_FLO()
	{
		return 'application/vnd.micrografx.flo';
	}

	/**
	 * Represents the content type `application/vnd.micrografx.igx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MICROGRAFX_IGX()
	{
		return 'application/vnd.micrografx.igx';
	}

	/**
	 * Represents the content type `application/vnd.microsoft.portable-executable`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MICROSOFT_PORTABLE_EXECUTABLE()
	{
		return 'application/vnd.microsoft.portable-executable';
	}

	/**
	 * Represents the content type `application/vnd.miele+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MIELE_JSON()
	{
		return 'application/vnd.miele+json';
	}

	/**
	 * Represents the content type `application/vnd.mif`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MIF()
	{
		return 'application/vnd.mif';
	}

	/**
	 * Represents the content type `application/vnd.minisoft-hp3000-save`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MINISOFT_HP3000_SAVE()
	{
		return 'application/vnd.minisoft-hp3000-save';
	}

	/**
	 * Represents the content type `application/vnd.mitsubishi.misty-guard.trustweb`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MITSUBISHI_MISTY_GUARD_TRUSTWEB()
	{
		return 'application/vnd.mitsubishi.misty-guard.trustweb';
	}

	/**
	 * Represents the content type `application/vnd.mobius.daf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_DAF()
	{
		return 'application/vnd.mobius.daf';
	}

	/**
	 * Represents the content type `application/vnd.mobius.dis`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_DIS()
	{
		return 'application/vnd.mobius.dis';
	}

	/**
	 * Represents the content type `application/vnd.mobius.mbk`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_MBK()
	{
		return 'application/vnd.mobius.mbk';
	}

	/**
	 * Represents the content type `application/vnd.mobius.mqy`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_MQY()
	{
		return 'application/vnd.mobius.mqy';
	}

	/**
	 * Represents the content type `application/vnd.mobius.msl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_MSL()
	{
		return 'application/vnd.mobius.msl';
	}

	/**
	 * Represents the content type `application/vnd.mobius.plc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_PLC()
	{
		return 'application/vnd.mobius.plc';
	}

	/**
	 * Represents the content type `application/vnd.mobius.txf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOBIUS_TXF()
	{
		return 'application/vnd.mobius.txf';
	}

	/**
	 * Represents the content type `application/vnd.mophun.application`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOPHUN_APPLICATION()
	{
		return 'application/vnd.mophun.application';
	}

	/**
	 * Represents the content type `application/vnd.mophun.certificate`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOPHUN_CERTIFICATE()
	{
		return 'application/vnd.mophun.certificate';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE()
	{
		return 'application/vnd.motorola.flexsuite';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.adsi`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_ADSI()
	{
		return 'application/vnd.motorola.flexsuite.adsi';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.fis`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_FIS()
	{
		return 'application/vnd.motorola.flexsuite.fis';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.gotap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_GOTAP()
	{
		return 'application/vnd.motorola.flexsuite.gotap';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.kmr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_KMR()
	{
		return 'application/vnd.motorola.flexsuite.kmr';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.ttc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_TTC()
	{
		return 'application/vnd.motorola.flexsuite.ttc';
	}

	/**
	 * Represents the content type `application/vnd.motorola.flexsuite.wem`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_FLEXSUITE_WEM()
	{
		return 'application/vnd.motorola.flexsuite.wem';
	}

	/**
	 * Represents the content type `application/vnd.motorola.iprm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOTOROLA_IPRM()
	{
		return 'application/vnd.motorola.iprm';
	}

	/**
	 * Represents the content type `application/vnd.mozilla.xul+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MOZILLA_XUL_XML()
	{
		return 'application/vnd.mozilla.xul+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-3mfdocument`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_3MFDOCUMENT()
	{
		return 'application/vnd.ms-3mfdocument';
	}

	/**
	 * Represents the content type `application/vnd.ms-artgalry`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_ARTGALRY()
	{
		return 'application/vnd.ms-artgalry';
	}

	/**
	 * Represents the content type `application/vnd.ms-asf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_ASF()
	{
		return 'application/vnd.ms-asf';
	}

	/**
	 * Represents the content type `application/vnd.ms-cab-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_CAB_COMPRESSED()
	{
		return 'application/vnd.ms-cab-compressed';
	}

	/**
	 * Represents the content type `application/vnd.ms-color.iccprofile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_COLOR_ICCPROFILE()
	{
		return 'application/vnd.ms-color.iccprofile';
	}

	/**
	 * Represents the content type `application/vnd.ms-excel`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_EXCEL()
	{
		return 'application/vnd.ms-excel';
	}

	/**
	 * Represents the content type `application/vnd.ms-excel.addin.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12()
	{
		return 'application/vnd.ms-excel.addin.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-excel.sheet.binary.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12()
	{
		return 'application/vnd.ms-excel.sheet.binary.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-excel.sheet.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12()
	{
		return 'application/vnd.ms-excel.sheet.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-excel.template.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12()
	{
		return 'application/vnd.ms-excel.template.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-fontobject`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_FONTOBJECT()
	{
		return 'application/vnd.ms-fontobject';
	}

	/**
	 * Represents the content type `application/vnd.ms-htmlhelp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_HTMLHELP()
	{
		return 'application/vnd.ms-htmlhelp';
	}

	/**
	 * Represents the content type `application/vnd.ms-ims`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_IMS()
	{
		return 'application/vnd.ms-ims';
	}

	/**
	 * Represents the content type `application/vnd.ms-lrm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_LRM()
	{
		return 'application/vnd.ms-lrm';
	}

	/**
	 * Represents the content type `application/vnd.ms-office.activex+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_OFFICE_ACTIVEX_XML()
	{
		return 'application/vnd.ms-office.activex+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-officetheme`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_OFFICETHEME()
	{
		return 'application/vnd.ms-officetheme';
	}

	/**
	 * Represents the content type `application/vnd.ms-opentype`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_OPENTYPE()
	{
		return 'application/vnd.ms-opentype';
	}

	/**
	 * Represents the content type `application/vnd.ms-package.obfuscated-opentype`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PACKAGE_OBFUSCATED_OPENTYPE()
	{
		return 'application/vnd.ms-package.obfuscated-opentype';
	}

	/**
	 * Represents the content type `application/vnd.ms-pki.seccat`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PKI_SECCAT()
	{
		return 'application/vnd.ms-pki.seccat';
	}

	/**
	 * Represents the content type `application/vnd.ms-pki.stl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PKI_STL()
	{
		return 'application/vnd.ms-pki.stl';
	}

	/**
	 * Represents the content type `application/vnd.ms-playready.initiator+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PLAYREADY_INITIATOR_XML()
	{
		return 'application/vnd.ms-playready.initiator+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT()
	{
		return 'application/vnd.ms-powerpoint';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.addin.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12()
	{
		return 'application/vnd.ms-powerpoint.addin.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.presentation.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12()
	{
		return 'application/vnd.ms-powerpoint.presentation.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.slide.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12()
	{
		return 'application/vnd.ms-powerpoint.slide.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.slideshow.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12()
	{
		return 'application/vnd.ms-powerpoint.slideshow.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-powerpoint.template.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12()
	{
		return 'application/vnd.ms-powerpoint.template.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-printdevicecapabilities+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PRINTDEVICECAPABILITIES_XML()
	{
		return 'application/vnd.ms-printdevicecapabilities+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-printing.printticket+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PRINTING_PRINTTICKET_XML()
	{
		return 'application/vnd.ms-printing.printticket+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-printschematicket+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PRINTSCHEMATICKET_XML()
	{
		return 'application/vnd.ms-printschematicket+xml';
	}

	/**
	 * Represents the content type `application/vnd.ms-project`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_PROJECT()
	{
		return 'application/vnd.ms-project';
	}

	/**
	 * Represents the content type `application/vnd.ms-tnef`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_TNEF()
	{
		return 'application/vnd.ms-tnef';
	}

	/**
	 * Represents the content type `application/vnd.ms-windows.devicepairing`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WINDOWS_DEVICEPAIRING()
	{
		return 'application/vnd.ms-windows.devicepairing';
	}

	/**
	 * Represents the content type `application/vnd.ms-windows.nwprinting.oob`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WINDOWS_NWPRINTING_OOB()
	{
		return 'application/vnd.ms-windows.nwprinting.oob';
	}

	/**
	 * Represents the content type `application/vnd.ms-windows.printerpairing`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WINDOWS_PRINTERPAIRING()
	{
		return 'application/vnd.ms-windows.printerpairing';
	}

	/**
	 * Represents the content type `application/vnd.ms-windows.wsd.oob`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WINDOWS_WSD_OOB()
	{
		return 'application/vnd.ms-windows.wsd.oob';
	}

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.lic-chlg-req`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WMDRM_LIC_CHLG_REQ()
	{
		return 'application/vnd.ms-wmdrm.lic-chlg-req';
	}

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.lic-resp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WMDRM_LIC_RESP()
	{
		return 'application/vnd.ms-wmdrm.lic-resp';
	}

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.meter-chlg-req`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WMDRM_METER_CHLG_REQ()
	{
		return 'application/vnd.ms-wmdrm.meter-chlg-req';
	}

	/**
	 * Represents the content type `application/vnd.ms-wmdrm.meter-resp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WMDRM_METER_RESP()
	{
		return 'application/vnd.ms-wmdrm.meter-resp';
	}

	/**
	 * Represents the content type `application/vnd.ms-word.document.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12()
	{
		return 'application/vnd.ms-word.document.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-word.template.macroenabled.12`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12()
	{
		return 'application/vnd.ms-word.template.macroenabled.12';
	}

	/**
	 * Represents the content type `application/vnd.ms-works`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WORKS()
	{
		return 'application/vnd.ms-works';
	}

	/**
	 * Represents the content type `application/vnd.ms-wpl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_WPL()
	{
		return 'application/vnd.ms-wpl';
	}

	/**
	 * Represents the content type `application/vnd.ms-xpsdocument`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MS_XPSDOCUMENT()
	{
		return 'application/vnd.ms-xpsdocument';
	}

	/**
	 * Represents the content type `application/vnd.msa-disk-image`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MSA_DISK_IMAGE()
	{
		return 'application/vnd.msa-disk-image';
	}

	/**
	 * Represents the content type `application/vnd.mseq`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MSEQ()
	{
		return 'application/vnd.mseq';
	}

	/**
	 * Represents the content type `application/vnd.msign`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MSIGN()
	{
		return 'application/vnd.msign';
	}

	/**
	 * Represents the content type `application/vnd.multiad.creator`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MULTIAD_CREATOR()
	{
		return 'application/vnd.multiad.creator';
	}

	/**
	 * Represents the content type `application/vnd.multiad.creator.cif`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MULTIAD_CREATOR_CIF()
	{
		return 'application/vnd.multiad.creator.cif';
	}

	/**
	 * Represents the content type `application/vnd.music-niff`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MUSIC_NIFF()
	{
		return 'application/vnd.music-niff';
	}

	/**
	 * Represents the content type `application/vnd.musician`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MUSICIAN()
	{
		return 'application/vnd.musician';
	}

	/**
	 * Represents the content type `application/vnd.muvee.style`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MUVEE_STYLE()
	{
		return 'application/vnd.muvee.style';
	}

	/**
	 * Represents the content type `application/vnd.mynfc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_MYNFC()
	{
		return 'application/vnd.mynfc';
	}

	/**
	 * Represents the content type `application/vnd.ncd.control`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NCD_CONTROL()
	{
		return 'application/vnd.ncd.control';
	}

	/**
	 * Represents the content type `application/vnd.ncd.reference`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NCD_REFERENCE()
	{
		return 'application/vnd.ncd.reference';
	}

	/**
	 * Represents the content type `application/vnd.nervana`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NERVANA()
	{
		return 'application/vnd.nervana';
	}

	/**
	 * Represents the content type `application/vnd.netfpx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NETFPX()
	{
		return 'application/vnd.netfpx';
	}

	/**
	 * Represents the content type `application/vnd.neurolanguage.nlu`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NEUROLANGUAGE_NLU()
	{
		return 'application/vnd.neurolanguage.nlu';
	}

	/**
	 * Represents the content type `application/vnd.nintendo.nitro.rom`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NINTENDO_NITRO_ROM()
	{
		return 'application/vnd.nintendo.nitro.rom';
	}

	/**
	 * Represents the content type `application/vnd.nintendo.snes.rom`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NINTENDO_SNES_ROM()
	{
		return 'application/vnd.nintendo.snes.rom';
	}

	/**
	 * Represents the content type `application/vnd.nitf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NITF()
	{
		return 'application/vnd.nitf';
	}

	/**
	 * Represents the content type `application/vnd.noblenet-directory`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOBLENET_DIRECTORY()
	{
		return 'application/vnd.noblenet-directory';
	}

	/**
	 * Represents the content type `application/vnd.noblenet-sealer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOBLENET_SEALER()
	{
		return 'application/vnd.noblenet-sealer';
	}

	/**
	 * Represents the content type `application/vnd.noblenet-web`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOBLENET_WEB()
	{
		return 'application/vnd.noblenet-web';
	}

	/**
	 * Represents the content type `application/vnd.nokia.catalogs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_CATALOGS()
	{
		return 'application/vnd.nokia.catalogs';
	}

	/**
	 * Represents the content type `application/vnd.nokia.conml+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_CONML_WBXML()
	{
		return 'application/vnd.nokia.conml+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.conml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_CONML_XML()
	{
		return 'application/vnd.nokia.conml+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.iptv.config+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_IPTV_CONFIG_XML()
	{
		return 'application/vnd.nokia.iptv.config+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.isds-radio-presets`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_ISDS_RADIO_PRESETS()
	{
		return 'application/vnd.nokia.isds-radio-presets';
	}

	/**
	 * Represents the content type `application/vnd.nokia.landmark+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_LANDMARK_WBXML()
	{
		return 'application/vnd.nokia.landmark+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.landmark+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_LANDMARK_XML()
	{
		return 'application/vnd.nokia.landmark+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.landmarkcollection+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_LANDMARKCOLLECTION_XML()
	{
		return 'application/vnd.nokia.landmarkcollection+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.ac+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_N_GAGE_AC_XML()
	{
		return 'application/vnd.nokia.n-gage.ac+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.data`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_N_GAGE_DATA()
	{
		return 'application/vnd.nokia.n-gage.data';
	}

	/**
	 * Represents the content type `application/vnd.nokia.n-gage.symbian.install`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_N_GAGE_SYMBIAN_INSTALL()
	{
		return 'application/vnd.nokia.n-gage.symbian.install';
	}

	/**
	 * Represents the content type `application/vnd.nokia.ncd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_NCD()
	{
		return 'application/vnd.nokia.ncd';
	}

	/**
	 * Represents the content type `application/vnd.nokia.pcd+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_PCD_WBXML()
	{
		return 'application/vnd.nokia.pcd+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.pcd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_PCD_XML()
	{
		return 'application/vnd.nokia.pcd+xml';
	}

	/**
	 * Represents the content type `application/vnd.nokia.radio-preset`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_RADIO_PRESET()
	{
		return 'application/vnd.nokia.radio-preset';
	}

	/**
	 * Represents the content type `application/vnd.nokia.radio-presets`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOKIA_RADIO_PRESETS()
	{
		return 'application/vnd.nokia.radio-presets';
	}

	/**
	 * Represents the content type `application/vnd.novadigm.edm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOVADIGM_EDM()
	{
		return 'application/vnd.novadigm.edm';
	}

	/**
	 * Represents the content type `application/vnd.novadigm.edx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOVADIGM_EDX()
	{
		return 'application/vnd.novadigm.edx';
	}

	/**
	 * Represents the content type `application/vnd.novadigm.ext`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NOVADIGM_EXT()
	{
		return 'application/vnd.novadigm.ext';
	}

	/**
	 * Represents the content type `application/vnd.ntt-local.content-share`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NTT_LOCAL_CONTENT_SHARE()
	{
		return 'application/vnd.ntt-local.content-share';
	}

	/**
	 * Represents the content type `application/vnd.ntt-local.file-transfer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NTT_LOCAL_FILE_TRANSFER()
	{
		return 'application/vnd.ntt-local.file-transfer';
	}

	/**
	 * Represents the content type `application/vnd.ntt-local.ogw_remote-access`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NTT_LOCAL_OGW_REMOTE_ACCESS()
	{
		return 'application/vnd.ntt-local.ogw_remote-access';
	}

	/**
	 * Represents the content type `application/vnd.ntt-local.sip-ta_remote`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NTT_LOCAL_SIP_TA_REMOTE()
	{
		return 'application/vnd.ntt-local.sip-ta_remote';
	}

	/**
	 * Represents the content type `application/vnd.ntt-local.sip-ta_tcp_stream`.
	 * @type {String}
	 */
	static get APPLICATION_VND_NTT_LOCAL_SIP_TA_TCP_STREAM()
	{
		return 'application/vnd.ntt-local.sip-ta_tcp_stream';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.chart`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_CHART()
	{
		return 'application/vnd.oasis.opendocument.chart';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.chart-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_CHART_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.chart-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.database`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE()
	{
		return 'application/vnd.oasis.opendocument.database';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.formula`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA()
	{
		return 'application/vnd.oasis.opendocument.formula';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.formula-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.formula-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.graphics`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS()
	{
		return 'application/vnd.oasis.opendocument.graphics';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.graphics-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.graphics-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.image`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE()
	{
		return 'application/vnd.oasis.opendocument.image';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.image-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.image-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.presentation`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION()
	{
		return 'application/vnd.oasis.opendocument.presentation';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.presentation-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.presentation-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.spreadsheet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET()
	{
		return 'application/vnd.oasis.opendocument.spreadsheet';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.spreadsheet-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.spreadsheet-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT()
	{
		return 'application/vnd.oasis.opendocument.text';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-master`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_MASTER()
	{
		return 'application/vnd.oasis.opendocument.text-master';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_TEMPLATE()
	{
		return 'application/vnd.oasis.opendocument.text-template';
	}

	/**
	 * Represents the content type `application/vnd.oasis.opendocument.text-web`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_WEB()
	{
		return 'application/vnd.oasis.opendocument.text-web';
	}

	/**
	 * Represents the content type `application/vnd.obn`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OBN()
	{
		return 'application/vnd.obn';
	}

	/**
	 * Represents the content type `application/vnd.oftn.l10n+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OFTN_L10N_JSON()
	{
		return 'application/vnd.oftn.l10n+json';
	}

	/**
	 * Represents the content type `application/vnd.oipf.contentaccessdownload+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_CONTENTACCESSDOWNLOAD_XML()
	{
		return 'application/vnd.oipf.contentaccessdownload+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.contentaccessstreaming+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_CONTENTACCESSSTREAMING_XML()
	{
		return 'application/vnd.oipf.contentaccessstreaming+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.cspg-hexbinary`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_CSPG_HEXBINARY()
	{
		return 'application/vnd.oipf.cspg-hexbinary';
	}

	/**
	 * Represents the content type `application/vnd.oipf.dae.svg+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_DAE_SVG_XML()
	{
		return 'application/vnd.oipf.dae.svg+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.dae.xhtml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_DAE_XHTML_XML()
	{
		return 'application/vnd.oipf.dae.xhtml+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.mippvcontrolmessage+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_MIPPVCONTROLMESSAGE_XML()
	{
		return 'application/vnd.oipf.mippvcontrolmessage+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.pae.gem`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_PAE_GEM()
	{
		return 'application/vnd.oipf.pae.gem';
	}

	/**
	 * Represents the content type `application/vnd.oipf.spdiscovery+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_SPDISCOVERY_XML()
	{
		return 'application/vnd.oipf.spdiscovery+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.spdlist+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_SPDLIST_XML()
	{
		return 'application/vnd.oipf.spdlist+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.ueprofile+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_UEPROFILE_XML()
	{
		return 'application/vnd.oipf.ueprofile+xml';
	}

	/**
	 * Represents the content type `application/vnd.oipf.userprofile+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OIPF_USERPROFILE_XML()
	{
		return 'application/vnd.oipf.userprofile+xml';
	}

	/**
	 * Represents the content type `application/vnd.olpc-sugar`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OLPC_SUGAR()
	{
		return 'application/vnd.olpc-sugar';
	}

	/**
	 * Represents the content type `application/vnd.oma-scws-config`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_SCWS_CONFIG()
	{
		return 'application/vnd.oma-scws-config';
	}

	/**
	 * Represents the content type `application/vnd.oma-scws-http-request`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_SCWS_HTTP_REQUEST()
	{
		return 'application/vnd.oma-scws-http-request';
	}

	/**
	 * Represents the content type `application/vnd.oma-scws-http-response`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_SCWS_HTTP_RESPONSE()
	{
		return 'application/vnd.oma-scws-http-response';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.associated-procedure-parameter+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_ASSOCIATED_PROCEDURE_PARAMETER_XML()
	{
		return 'application/vnd.oma.bcast.associated-procedure-parameter+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.drm-trigger+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_DRM_TRIGGER_XML()
	{
		return 'application/vnd.oma.bcast.drm-trigger+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.imd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_IMD_XML()
	{
		return 'application/vnd.oma.bcast.imd+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.ltkm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_LTKM()
	{
		return 'application/vnd.oma.bcast.ltkm';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.notification+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_NOTIFICATION_XML()
	{
		return 'application/vnd.oma.bcast.notification+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.provisioningtrigger`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_PROVISIONINGTRIGGER()
	{
		return 'application/vnd.oma.bcast.provisioningtrigger';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgboot`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SGBOOT()
	{
		return 'application/vnd.oma.bcast.sgboot';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgdd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SGDD_XML()
	{
		return 'application/vnd.oma.bcast.sgdd+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.sgdu`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SGDU()
	{
		return 'application/vnd.oma.bcast.sgdu';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.simple-symbol-container`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SIMPLE_SYMBOL_CONTAINER()
	{
		return 'application/vnd.oma.bcast.simple-symbol-container';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.smartcard-trigger+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SMARTCARD_TRIGGER_XML()
	{
		return 'application/vnd.oma.bcast.smartcard-trigger+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.sprov+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_SPROV_XML()
	{
		return 'application/vnd.oma.bcast.sprov+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.bcast.stkm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_BCAST_STKM()
	{
		return 'application/vnd.oma.bcast.stkm';
	}

	/**
	 * Represents the content type `application/vnd.oma.cab-address-book+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_CAB_ADDRESS_BOOK_XML()
	{
		return 'application/vnd.oma.cab-address-book+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.cab-feature-handler+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_CAB_FEATURE_HANDLER_XML()
	{
		return 'application/vnd.oma.cab-feature-handler+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.cab-pcc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_CAB_PCC_XML()
	{
		return 'application/vnd.oma.cab-pcc+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.cab-subs-invite+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_CAB_SUBS_INVITE_XML()
	{
		return 'application/vnd.oma.cab-subs-invite+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.cab-user-prefs+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_CAB_USER_PREFS_XML()
	{
		return 'application/vnd.oma.cab-user-prefs+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.dcd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_DCD()
	{
		return 'application/vnd.oma.dcd';
	}

	/**
	 * Represents the content type `application/vnd.oma.dcdc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_DCDC()
	{
		return 'application/vnd.oma.dcdc';
	}

	/**
	 * Represents the content type `application/vnd.oma.dd2+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_DD2_XML()
	{
		return 'application/vnd.oma.dd2+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.drm.risd+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_DRM_RISD_XML()
	{
		return 'application/vnd.oma.drm.risd+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.group-usage-list+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_GROUP_USAGE_LIST_XML()
	{
		return 'application/vnd.oma.group-usage-list+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.lwm2m+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_LWM2M_JSON()
	{
		return 'application/vnd.oma.lwm2m+json';
	}

	/**
	 * Represents the content type `application/vnd.oma.lwm2m+tlv`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_LWM2M_TLV()
	{
		return 'application/vnd.oma.lwm2m+tlv';
	}

	/**
	 * Represents the content type `application/vnd.oma.pal+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_PAL_XML()
	{
		return 'application/vnd.oma.pal+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.poc.detailed-progress-report+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_POC_DETAILED_PROGRESS_REPORT_XML()
	{
		return 'application/vnd.oma.poc.detailed-progress-report+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.poc.final-report+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_POC_FINAL_REPORT_XML()
	{
		return 'application/vnd.oma.poc.final-report+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.poc.groups+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_POC_GROUPS_XML()
	{
		return 'application/vnd.oma.poc.groups+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.poc.invocation-descriptor+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_POC_INVOCATION_DESCRIPTOR_XML()
	{
		return 'application/vnd.oma.poc.invocation-descriptor+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.poc.optimized-progress-report+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_POC_OPTIMIZED_PROGRESS_REPORT_XML()
	{
		return 'application/vnd.oma.poc.optimized-progress-report+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.push`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_PUSH()
	{
		return 'application/vnd.oma.push';
	}

	/**
	 * Represents the content type `application/vnd.oma.scidm.messages+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_SCIDM_MESSAGES_XML()
	{
		return 'application/vnd.oma.scidm.messages+xml';
	}

	/**
	 * Represents the content type `application/vnd.oma.xcap-directory+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMA_XCAP_DIRECTORY_XML()
	{
		return 'application/vnd.oma.xcap-directory+xml';
	}

	/**
	 * Represents the content type `application/vnd.omads-email+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMADS_EMAIL_XML()
	{
		return 'application/vnd.omads-email+xml';
	}

	/**
	 * Represents the content type `application/vnd.omads-file+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMADS_FILE_XML()
	{
		return 'application/vnd.omads-file+xml';
	}

	/**
	 * Represents the content type `application/vnd.omads-folder+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMADS_FOLDER_XML()
	{
		return 'application/vnd.omads-folder+xml';
	}

	/**
	 * Represents the content type `application/vnd.omaloc-supl-init`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OMALOC_SUPL_INIT()
	{
		return 'application/vnd.omaloc-supl-init';
	}

	/**
	 * Represents the content type `application/vnd.onepager`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ONEPAGER()
	{
		return 'application/vnd.onepager';
	}

	/**
	 * Represents the content type `application/vnd.openblox.game+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENBLOX_GAME_XML()
	{
		return 'application/vnd.openblox.game+xml';
	}

	/**
	 * Represents the content type `application/vnd.openblox.game-binary`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENBLOX_GAME_BINARY()
	{
		return 'application/vnd.openblox.game-binary';
	}

	/**
	 * Represents the content type `application/vnd.openeye.oeb`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENEYE_OEB()
	{
		return 'application/vnd.openeye.oeb';
	}

	/**
	 * Represents the content type `application/vnd.openofficeorg.extension`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENOFFICEORG_EXTENSION()
	{
		return 'application/vnd.openofficeorg.extension';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.custom-properties+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOM_PROPERTIES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.custom-properties+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.customxmlproperties+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOMXMLPROPERTIES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.customxmlproperties+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawing+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWING_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawing+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.chart+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHART_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.chart+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHARTSHAPES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMCOLORS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMDATA_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMLAYOUT_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMSTYLE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.extended-properties+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_EXTENDED_PROPERTIES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.extended-properties+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTAUTHORS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.comments+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.comments+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_HANDOUTMASTER_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESMASTER_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESSLIDE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presentation`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.presprops+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESPROPS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.presprops+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slide`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slide';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slide+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slide+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDELAYOUT_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEMASTER_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideshow`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slideshow';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEUPDATEINFO_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TABLESTYLES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.tags+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TAGS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.tags+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.template';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.template.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.template.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_VIEWPROPS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CALCCHAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CHARTSHEET_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_COMMENTS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CONNECTIONS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_DIALOGSHEET_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_EXTERNALLINK_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHEDEFINITION_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHERECORDS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTTABLE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_QUERYTABLE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONHEADERS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONLOG_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHAREDSTRINGS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEETMETADATA_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_STYLES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLESINGLECELLS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.template';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_USERNAMES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_VOLATILEDEPENDENCIES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_WORKSHEET_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.theme+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEME_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.theme+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.themeoverride+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEMEOVERRIDE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.themeoverride+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.vmldrawing`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_VMLDRAWING()
	{
		return 'application/vnd.openxmlformats-officedocument.vmldrawing';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_COMMENTS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_GLOSSARY_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_ENDNOTES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FONTTABLE_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTER_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTNOTES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_NUMBERING_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_SETTINGS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_STYLES_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.template';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE_MAIN_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_WEBSETTINGS_XML()
	{
		return 'application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.core-properties+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_PACKAGE_CORE_PROPERTIES_XML()
	{
		return 'application/vnd.openxmlformats-package.core-properties+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_PACKAGE_DIGITAL_SIGNATURE_XMLSIGNATURE_XML()
	{
		return 'application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml';
	}

	/**
	 * Represents the content type `application/vnd.openxmlformats-package.relationships+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OPENXMLFORMATS_PACKAGE_RELATIONSHIPS_XML()
	{
		return 'application/vnd.openxmlformats-package.relationships+xml';
	}

	/**
	 * Represents the content type `application/vnd.oracle.resource+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ORACLE_RESOURCE_JSON()
	{
		return 'application/vnd.oracle.resource+json';
	}

	/**
	 * Represents the content type `application/vnd.orange.indata`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ORANGE_INDATA()
	{
		return 'application/vnd.orange.indata';
	}

	/**
	 * Represents the content type `application/vnd.osa.netdeploy`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OSA_NETDEPLOY()
	{
		return 'application/vnd.osa.netdeploy';
	}

	/**
	 * Represents the content type `application/vnd.osgeo.mapguide.package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OSGEO_MAPGUIDE_PACKAGE()
	{
		return 'application/vnd.osgeo.mapguide.package';
	}

	/**
	 * Represents the content type `application/vnd.osgi.bundle`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OSGI_BUNDLE()
	{
		return 'application/vnd.osgi.bundle';
	}

	/**
	 * Represents the content type `application/vnd.osgi.dp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OSGI_DP()
	{
		return 'application/vnd.osgi.dp';
	}

	/**
	 * Represents the content type `application/vnd.osgi.subsystem`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OSGI_SUBSYSTEM()
	{
		return 'application/vnd.osgi.subsystem';
	}

	/**
	 * Represents the content type `application/vnd.otps.ct-kip+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OTPS_CT_KIP_XML()
	{
		return 'application/vnd.otps.ct-kip+xml';
	}

	/**
	 * Represents the content type `application/vnd.oxli.countgraph`.
	 * @type {String}
	 */
	static get APPLICATION_VND_OXLI_COUNTGRAPH()
	{
		return 'application/vnd.oxli.countgraph';
	}

	/**
	 * Represents the content type `application/vnd.pagerduty+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PAGERDUTY_JSON()
	{
		return 'application/vnd.pagerduty+json';
	}

	/**
	 * Represents the content type `application/vnd.palm`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PALM()
	{
		return 'application/vnd.palm';
	}

	/**
	 * Represents the content type `application/vnd.panoply`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PANOPLY()
	{
		return 'application/vnd.panoply';
	}

	/**
	 * Represents the content type `application/vnd.paos.xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PAOS_XML()
	{
		return 'application/vnd.paos.xml';
	}

	/**
	 * Represents the content type `application/vnd.pawaafile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PAWAAFILE()
	{
		return 'application/vnd.pawaafile';
	}

	/**
	 * Represents the content type `application/vnd.pcos`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PCOS()
	{
		return 'application/vnd.pcos';
	}

	/**
	 * Represents the content type `application/vnd.pg.format`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PG_FORMAT()
	{
		return 'application/vnd.pg.format';
	}

	/**
	 * Represents the content type `application/vnd.pg.osasli`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PG_OSASLI()
	{
		return 'application/vnd.pg.osasli';
	}

	/**
	 * Represents the content type `application/vnd.piaccess.application-licence`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PIACCESS_APPLICATION_LICENCE()
	{
		return 'application/vnd.piaccess.application-licence';
	}

	/**
	 * Represents the content type `application/vnd.picsel`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PICSEL()
	{
		return 'application/vnd.picsel';
	}

	/**
	 * Represents the content type `application/vnd.pmi.widget`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PMI_WIDGET()
	{
		return 'application/vnd.pmi.widget';
	}

	/**
	 * Represents the content type `application/vnd.poc.group-advertisement+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POC_GROUP_ADVERTISEMENT_XML()
	{
		return 'application/vnd.poc.group-advertisement+xml';
	}

	/**
	 * Represents the content type `application/vnd.pocketlearn`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POCKETLEARN()
	{
		return 'application/vnd.pocketlearn';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder6`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER6()
	{
		return 'application/vnd.powerbuilder6';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder6-s`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER6_S()
	{
		return 'application/vnd.powerbuilder6-s';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder7`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER7()
	{
		return 'application/vnd.powerbuilder7';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder7-s`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER7_S()
	{
		return 'application/vnd.powerbuilder7-s';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder75`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER75()
	{
		return 'application/vnd.powerbuilder75';
	}

	/**
	 * Represents the content type `application/vnd.powerbuilder75-s`.
	 * @type {String}
	 */
	static get APPLICATION_VND_POWERBUILDER75_S()
	{
		return 'application/vnd.powerbuilder75-s';
	}

	/**
	 * Represents the content type `application/vnd.preminet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PREMINET()
	{
		return 'application/vnd.preminet';
	}

	/**
	 * Represents the content type `application/vnd.previewsystems.box`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PREVIEWSYSTEMS_BOX()
	{
		return 'application/vnd.previewsystems.box';
	}

	/**
	 * Represents the content type `application/vnd.proteus.magazine`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PROTEUS_MAGAZINE()
	{
		return 'application/vnd.proteus.magazine';
	}

	/**
	 * Represents the content type `application/vnd.publishare-delta-tree`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PUBLISHARE_DELTA_TREE()
	{
		return 'application/vnd.publishare-delta-tree';
	}

	/**
	 * Represents the content type `application/vnd.pvi.ptid1`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PVI_PTID1()
	{
		return 'application/vnd.pvi.ptid1';
	}

	/**
	 * Represents the content type `application/vnd.pwg-multiplexed`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PWG_MULTIPLEXED()
	{
		return 'application/vnd.pwg-multiplexed';
	}

	/**
	 * Represents the content type `application/vnd.pwg-xhtml-print+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_PWG_XHTML_PRINT_XML()
	{
		return 'application/vnd.pwg-xhtml-print+xml';
	}

	/**
	 * Represents the content type `application/vnd.qualcomm.brew-app-res`.
	 * @type {String}
	 */
	static get APPLICATION_VND_QUALCOMM_BREW_APP_RES()
	{
		return 'application/vnd.qualcomm.brew-app-res';
	}

	/**
	 * Represents the content type `application/vnd.quarantainenet`.
	 * @type {String}
	 */
	static get APPLICATION_VND_QUARANTAINENET()
	{
		return 'application/vnd.quarantainenet';
	}

	/**
	 * Represents the content type `application/vnd.quark.quarkxpress`.
	 * @type {String}
	 */
	static get APPLICATION_VND_QUARK_QUARKXPRESS()
	{
		return 'application/vnd.quark.quarkxpress';
	}

	/**
	 * Represents the content type `application/vnd.quobject-quoxdocument`.
	 * @type {String}
	 */
	static get APPLICATION_VND_QUOBJECT_QUOXDOCUMENT()
	{
		return 'application/vnd.quobject-quoxdocument';
	}

	/**
	 * Represents the content type `application/vnd.radisys.moml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MOML_XML()
	{
		return 'application/vnd.radisys.moml+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_XML()
	{
		return 'application/vnd.radisys.msml+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_AUDIT_XML()
	{
		return 'application/vnd.radisys.msml-audit+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-conf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_AUDIT_CONF_XML()
	{
		return 'application/vnd.radisys.msml-audit-conf+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-conn+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_AUDIT_CONN_XML()
	{
		return 'application/vnd.radisys.msml-audit-conn+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-dialog+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_AUDIT_DIALOG_XML()
	{
		return 'application/vnd.radisys.msml-audit-dialog+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-audit-stream+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_AUDIT_STREAM_XML()
	{
		return 'application/vnd.radisys.msml-audit-stream+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-conf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_CONF_XML()
	{
		return 'application/vnd.radisys.msml-conf+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_XML()
	{
		return 'application/vnd.radisys.msml-dialog+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-base+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_BASE_XML()
	{
		return 'application/vnd.radisys.msml-dialog-base+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-fax-detect+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_DETECT_XML()
	{
		return 'application/vnd.radisys.msml-dialog-fax-detect+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-fax-sendrecv+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_SENDRECV_XML()
	{
		return 'application/vnd.radisys.msml-dialog-fax-sendrecv+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-group+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_GROUP_XML()
	{
		return 'application/vnd.radisys.msml-dialog-group+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-speech+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_SPEECH_XML()
	{
		return 'application/vnd.radisys.msml-dialog-speech+xml';
	}

	/**
	 * Represents the content type `application/vnd.radisys.msml-dialog-transform+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RADISYS_MSML_DIALOG_TRANSFORM_XML()
	{
		return 'application/vnd.radisys.msml-dialog-transform+xml';
	}

	/**
	 * Represents the content type `application/vnd.rainstor.data`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RAINSTOR_DATA()
	{
		return 'application/vnd.rainstor.data';
	}

	/**
	 * Represents the content type `application/vnd.rapid`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RAPID()
	{
		return 'application/vnd.rapid';
	}

	/**
	 * Represents the content type `application/vnd.rar`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RAR()
	{
		return 'application/vnd.rar';
	}

	/**
	 * Represents the content type `application/vnd.realvnc.bed`.
	 * @type {String}
	 */
	static get APPLICATION_VND_REALVNC_BED()
	{
		return 'application/vnd.realvnc.bed';
	}

	/**
	 * Represents the content type `application/vnd.recordare.musicxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RECORDARE_MUSICXML()
	{
		return 'application/vnd.recordare.musicxml';
	}

	/**
	 * Represents the content type `application/vnd.recordare.musicxml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RECORDARE_MUSICXML_XML()
	{
		return 'application/vnd.recordare.musicxml+xml';
	}

	/**
	 * Represents the content type `application/vnd.renlearn.rlprint`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RENLEARN_RLPRINT()
	{
		return 'application/vnd.renlearn.rlprint';
	}

	/**
	 * Represents the content type `application/vnd.rig.cryptonote`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RIG_CRYPTONOTE()
	{
		return 'application/vnd.rig.cryptonote';
	}

	/**
	 * Represents the content type `application/vnd.rim.cod`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RIM_COD()
	{
		return 'application/vnd.rim.cod';
	}

	/**
	 * Represents the content type `application/vnd.rn-realmedia`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RN_REALMEDIA()
	{
		return 'application/vnd.rn-realmedia';
	}

	/**
	 * Represents the content type `application/vnd.rn-realmedia-vbr`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RN_REALMEDIA_VBR()
	{
		return 'application/vnd.rn-realmedia-vbr';
	}

	/**
	 * Represents the content type `application/vnd.route66.link66+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ROUTE66_LINK66_XML()
	{
		return 'application/vnd.route66.link66+xml';
	}

	/**
	 * Represents the content type `application/vnd.rs-274x`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RS_274X()
	{
		return 'application/vnd.rs-274x';
	}

	/**
	 * Represents the content type `application/vnd.ruckus.download`.
	 * @type {String}
	 */
	static get APPLICATION_VND_RUCKUS_DOWNLOAD()
	{
		return 'application/vnd.ruckus.download';
	}

	/**
	 * Represents the content type `application/vnd.s3sms`.
	 * @type {String}
	 */
	static get APPLICATION_VND_S3SMS()
	{
		return 'application/vnd.s3sms';
	}

	/**
	 * Represents the content type `application/vnd.sailingtracker.track`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SAILINGTRACKER_TRACK()
	{
		return 'application/vnd.sailingtracker.track';
	}

	/**
	 * Represents the content type `application/vnd.sbm.cid`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SBM_CID()
	{
		return 'application/vnd.sbm.cid';
	}

	/**
	 * Represents the content type `application/vnd.sbm.mid2`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SBM_MID2()
	{
		return 'application/vnd.sbm.mid2';
	}

	/**
	 * Represents the content type `application/vnd.scribus`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SCRIBUS()
	{
		return 'application/vnd.scribus';
	}

	/**
	 * Represents the content type `application/vnd.sealed.3df`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_3DF()
	{
		return 'application/vnd.sealed.3df';
	}

	/**
	 * Represents the content type `application/vnd.sealed.csf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_CSF()
	{
		return 'application/vnd.sealed.csf';
	}

	/**
	 * Represents the content type `application/vnd.sealed.doc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_DOC()
	{
		return 'application/vnd.sealed.doc';
	}

	/**
	 * Represents the content type `application/vnd.sealed.eml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_EML()
	{
		return 'application/vnd.sealed.eml';
	}

	/**
	 * Represents the content type `application/vnd.sealed.mht`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_MHT()
	{
		return 'application/vnd.sealed.mht';
	}

	/**
	 * Represents the content type `application/vnd.sealed.net`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_NET()
	{
		return 'application/vnd.sealed.net';
	}

	/**
	 * Represents the content type `application/vnd.sealed.ppt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_PPT()
	{
		return 'application/vnd.sealed.ppt';
	}

	/**
	 * Represents the content type `application/vnd.sealed.tiff`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_TIFF()
	{
		return 'application/vnd.sealed.tiff';
	}

	/**
	 * Represents the content type `application/vnd.sealed.xls`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALED_XLS()
	{
		return 'application/vnd.sealed.xls';
	}

	/**
	 * Represents the content type `application/vnd.sealedmedia.softseal.html`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_HTML()
	{
		return 'application/vnd.sealedmedia.softseal.html';
	}

	/**
	 * Represents the content type `application/vnd.sealedmedia.softseal.pdf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_PDF()
	{
		return 'application/vnd.sealedmedia.softseal.pdf';
	}

	/**
	 * Represents the content type `application/vnd.seemail`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEEMAIL()
	{
		return 'application/vnd.seemail';
	}

	/**
	 * Represents the content type `application/vnd.sema`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEMA()
	{
		return 'application/vnd.sema';
	}

	/**
	 * Represents the content type `application/vnd.semd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEMD()
	{
		return 'application/vnd.semd';
	}

	/**
	 * Represents the content type `application/vnd.semf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SEMF()
	{
		return 'application/vnd.semf';
	}

	/**
	 * Represents the content type `application/vnd.shana.informed.formdata`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SHANA_INFORMED_FORMDATA()
	{
		return 'application/vnd.shana.informed.formdata';
	}

	/**
	 * Represents the content type `application/vnd.shana.informed.formtemplate`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SHANA_INFORMED_FORMTEMPLATE()
	{
		return 'application/vnd.shana.informed.formtemplate';
	}

	/**
	 * Represents the content type `application/vnd.shana.informed.interchange`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SHANA_INFORMED_INTERCHANGE()
	{
		return 'application/vnd.shana.informed.interchange';
	}

	/**
	 * Represents the content type `application/vnd.shana.informed.package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SHANA_INFORMED_PACKAGE()
	{
		return 'application/vnd.shana.informed.package';
	}

	/**
	 * Represents the content type `application/vnd.simtech-mindmapper`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SIMTECH_MINDMAPPER()
	{
		return 'application/vnd.simtech-mindmapper';
	}

	/**
	 * Represents the content type `application/vnd.siren+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SIREN_JSON()
	{
		return 'application/vnd.siren+json';
	}

	/**
	 * Represents the content type `application/vnd.smaf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SMAF()
	{
		return 'application/vnd.smaf';
	}

	/**
	 * Represents the content type `application/vnd.smart.notebook`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SMART_NOTEBOOK()
	{
		return 'application/vnd.smart.notebook';
	}

	/**
	 * Represents the content type `application/vnd.smart.teacher`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SMART_TEACHER()
	{
		return 'application/vnd.smart.teacher';
	}

	/**
	 * Represents the content type `application/vnd.software602.filler.form+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML()
	{
		return 'application/vnd.software602.filler.form+xml';
	}

	/**
	 * Represents the content type `application/vnd.software602.filler.form-xml-zip`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML_ZIP()
	{
		return 'application/vnd.software602.filler.form-xml-zip';
	}

	/**
	 * Represents the content type `application/vnd.solent.sdkm+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SOLENT_SDKM_XML()
	{
		return 'application/vnd.solent.sdkm+xml';
	}

	/**
	 * Represents the content type `application/vnd.spotfire.dxp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SPOTFIRE_DXP()
	{
		return 'application/vnd.spotfire.dxp';
	}

	/**
	 * Represents the content type `application/vnd.spotfire.sfs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SPOTFIRE_SFS()
	{
		return 'application/vnd.spotfire.sfs';
	}

	/**
	 * Represents the content type `application/vnd.sss-cod`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SSS_COD()
	{
		return 'application/vnd.sss-cod';
	}

	/**
	 * Represents the content type `application/vnd.sss-dtf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SSS_DTF()
	{
		return 'application/vnd.sss-dtf';
	}

	/**
	 * Represents the content type `application/vnd.sss-ntf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SSS_NTF()
	{
		return 'application/vnd.sss-ntf';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.calc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_CALC()
	{
		return 'application/vnd.stardivision.calc';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.draw`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_DRAW()
	{
		return 'application/vnd.stardivision.draw';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.impress`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_IMPRESS()
	{
		return 'application/vnd.stardivision.impress';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.math`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_MATH()
	{
		return 'application/vnd.stardivision.math';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.writer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_WRITER()
	{
		return 'application/vnd.stardivision.writer';
	}

	/**
	 * Represents the content type `application/vnd.stardivision.writer-global`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STARDIVISION_WRITER_GLOBAL()
	{
		return 'application/vnd.stardivision.writer-global';
	}

	/**
	 * Represents the content type `application/vnd.stepmania.package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STEPMANIA_PACKAGE()
	{
		return 'application/vnd.stepmania.package';
	}

	/**
	 * Represents the content type `application/vnd.stepmania.stepchart`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STEPMANIA_STEPCHART()
	{
		return 'application/vnd.stepmania.stepchart';
	}

	/**
	 * Represents the content type `application/vnd.street-stream`.
	 * @type {String}
	 */
	static get APPLICATION_VND_STREET_STREAM()
	{
		return 'application/vnd.street-stream';
	}

	/**
	 * Represents the content type `application/vnd.sun.wadl+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_WADL_XML()
	{
		return 'application/vnd.sun.wadl+xml';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.calc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_CALC()
	{
		return 'application/vnd.sun.xml.calc';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.calc.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_CALC_TEMPLATE()
	{
		return 'application/vnd.sun.xml.calc.template';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.draw`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_DRAW()
	{
		return 'application/vnd.sun.xml.draw';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.draw.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_DRAW_TEMPLATE()
	{
		return 'application/vnd.sun.xml.draw.template';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.impress`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_IMPRESS()
	{
		return 'application/vnd.sun.xml.impress';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.impress.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_IMPRESS_TEMPLATE()
	{
		return 'application/vnd.sun.xml.impress.template';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.math`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_MATH()
	{
		return 'application/vnd.sun.xml.math';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.writer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_WRITER()
	{
		return 'application/vnd.sun.xml.writer';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.writer.global`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_WRITER_GLOBAL()
	{
		return 'application/vnd.sun.xml.writer.global';
	}

	/**
	 * Represents the content type `application/vnd.sun.xml.writer.template`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUN_XML_WRITER_TEMPLATE()
	{
		return 'application/vnd.sun.xml.writer.template';
	}

	/**
	 * Represents the content type `application/vnd.sus-calendar`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SUS_CALENDAR()
	{
		return 'application/vnd.sus-calendar';
	}

	/**
	 * Represents the content type `application/vnd.svd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SVD()
	{
		return 'application/vnd.svd';
	}

	/**
	 * Represents the content type `application/vnd.swiftview-ics`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SWIFTVIEW_ICS()
	{
		return 'application/vnd.swiftview-ics';
	}

	/**
	 * Represents the content type `application/vnd.symbian.install`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYMBIAN_INSTALL()
	{
		return 'application/vnd.symbian.install';
	}

	/**
	 * Represents the content type `application/vnd.syncml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_XML()
	{
		return 'application/vnd.syncml+xml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dm+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DM_WBXML()
	{
		return 'application/vnd.syncml.dm+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dm+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DM_XML()
	{
		return 'application/vnd.syncml.dm+xml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dm.notification`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DM_NOTIFICATION()
	{
		return 'application/vnd.syncml.dm.notification';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dmddf+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DMDDF_WBXML()
	{
		return 'application/vnd.syncml.dmddf+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dmddf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DMDDF_XML()
	{
		return 'application/vnd.syncml.dmddf+xml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dmtnds+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DMTNDS_WBXML()
	{
		return 'application/vnd.syncml.dmtnds+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.dmtnds+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DMTNDS_XML()
	{
		return 'application/vnd.syncml.dmtnds+xml';
	}

	/**
	 * Represents the content type `application/vnd.syncml.ds.notification`.
	 * @type {String}
	 */
	static get APPLICATION_VND_SYNCML_DS_NOTIFICATION()
	{
		return 'application/vnd.syncml.ds.notification';
	}

	/**
	 * Represents the content type `application/vnd.tao.intent-module-archive`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TAO_INTENT_MODULE_ARCHIVE()
	{
		return 'application/vnd.tao.intent-module-archive';
	}

	/**
	 * Represents the content type `application/vnd.tcpdump.pcap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TCPDUMP_PCAP()
	{
		return 'application/vnd.tcpdump.pcap';
	}

	/**
	 * Represents the content type `application/vnd.tmd.mediaflex.api+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TMD_MEDIAFLEX_API_XML()
	{
		return 'application/vnd.tmd.mediaflex.api+xml';
	}

	/**
	 * Represents the content type `application/vnd.tml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TML()
	{
		return 'application/vnd.tml';
	}

	/**
	 * Represents the content type `application/vnd.tmobile-livetv`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TMOBILE_LIVETV()
	{
		return 'application/vnd.tmobile-livetv';
	}

	/**
	 * Represents the content type `application/vnd.trid.tpt`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TRID_TPT()
	{
		return 'application/vnd.trid.tpt';
	}

	/**
	 * Represents the content type `application/vnd.triscape.mxs`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TRISCAPE_MXS()
	{
		return 'application/vnd.triscape.mxs';
	}

	/**
	 * Represents the content type `application/vnd.trueapp`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TRUEAPP()
	{
		return 'application/vnd.trueapp';
	}

	/**
	 * Represents the content type `application/vnd.truedoc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_TRUEDOC()
	{
		return 'application/vnd.truedoc';
	}

	/**
	 * Represents the content type `application/vnd.ubisoft.webplayer`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UBISOFT_WEBPLAYER()
	{
		return 'application/vnd.ubisoft.webplayer';
	}

	/**
	 * Represents the content type `application/vnd.ufdl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UFDL()
	{
		return 'application/vnd.ufdl';
	}

	/**
	 * Represents the content type `application/vnd.uiq.theme`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UIQ_THEME()
	{
		return 'application/vnd.uiq.theme';
	}

	/**
	 * Represents the content type `application/vnd.umajin`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UMAJIN()
	{
		return 'application/vnd.umajin';
	}

	/**
	 * Represents the content type `application/vnd.unity`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UNITY()
	{
		return 'application/vnd.unity';
	}

	/**
	 * Represents the content type `application/vnd.uoml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UOML_XML()
	{
		return 'application/vnd.uoml+xml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.alert`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_ALERT()
	{
		return 'application/vnd.uplanet.alert';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.alert-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_ALERT_WBXML()
	{
		return 'application/vnd.uplanet.alert-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.bearer-choice`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_BEARER_CHOICE()
	{
		return 'application/vnd.uplanet.bearer-choice';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.bearer-choice-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_BEARER_CHOICE_WBXML()
	{
		return 'application/vnd.uplanet.bearer-choice-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.cacheop`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_CACHEOP()
	{
		return 'application/vnd.uplanet.cacheop';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.cacheop-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_CACHEOP_WBXML()
	{
		return 'application/vnd.uplanet.cacheop-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.channel`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_CHANNEL()
	{
		return 'application/vnd.uplanet.channel';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.channel-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_CHANNEL_WBXML()
	{
		return 'application/vnd.uplanet.channel-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.list`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_LIST()
	{
		return 'application/vnd.uplanet.list';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.list-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_LIST_WBXML()
	{
		return 'application/vnd.uplanet.list-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.listcmd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_LISTCMD()
	{
		return 'application/vnd.uplanet.listcmd';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.listcmd-wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_LISTCMD_WBXML()
	{
		return 'application/vnd.uplanet.listcmd-wbxml';
	}

	/**
	 * Represents the content type `application/vnd.uplanet.signal`.
	 * @type {String}
	 */
	static get APPLICATION_VND_UPLANET_SIGNAL()
	{
		return 'application/vnd.uplanet.signal';
	}

	/**
	 * Represents the content type `application/vnd.uri-map`.
	 * @type {String}
	 */
	static get APPLICATION_VND_URI_MAP()
	{
		return 'application/vnd.uri-map';
	}

	/**
	 * Represents the content type `application/vnd.valve.source.material`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VALVE_SOURCE_MATERIAL()
	{
		return 'application/vnd.valve.source.material';
	}

	/**
	 * Represents the content type `application/vnd.vcx`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VCX()
	{
		return 'application/vnd.vcx';
	}

	/**
	 * Represents the content type `application/vnd.vd-study`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VD_STUDY()
	{
		return 'application/vnd.vd-study';
	}

	/**
	 * Represents the content type `application/vnd.vectorworks`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VECTORWORKS()
	{
		return 'application/vnd.vectorworks';
	}

	/**
	 * Represents the content type `application/vnd.vel+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VEL_JSON()
	{
		return 'application/vnd.vel+json';
	}

	/**
	 * Represents the content type `application/vnd.verimatrix.vcas`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VERIMATRIX_VCAS()
	{
		return 'application/vnd.verimatrix.vcas';
	}

	/**
	 * Represents the content type `application/vnd.vidsoft.vidconference`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VIDSOFT_VIDCONFERENCE()
	{
		return 'application/vnd.vidsoft.vidconference';
	}

	/**
	 * Represents the content type `application/vnd.visio`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VISIO()
	{
		return 'application/vnd.visio';
	}

	/**
	 * Represents the content type `application/vnd.visionary`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VISIONARY()
	{
		return 'application/vnd.visionary';
	}

	/**
	 * Represents the content type `application/vnd.vividence.scriptfile`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VIVIDENCE_SCRIPTFILE()
	{
		return 'application/vnd.vividence.scriptfile';
	}

	/**
	 * Represents the content type `application/vnd.vsf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_VSF()
	{
		return 'application/vnd.vsf';
	}

	/**
	 * Represents the content type `application/vnd.wap.sic`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WAP_SIC()
	{
		return 'application/vnd.wap.sic';
	}

	/**
	 * Represents the content type `application/vnd.wap.slc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WAP_SLC()
	{
		return 'application/vnd.wap.slc';
	}

	/**
	 * Represents the content type `application/vnd.wap.wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WAP_WBXML()
	{
		return 'application/vnd.wap.wbxml';
	}

	/**
	 * Represents the content type `application/vnd.wap.wmlc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WAP_WMLC()
	{
		return 'application/vnd.wap.wmlc';
	}

	/**
	 * Represents the content type `application/vnd.wap.wmlscriptc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WAP_WMLSCRIPTC()
	{
		return 'application/vnd.wap.wmlscriptc';
	}

	/**
	 * Represents the content type `application/vnd.webturbo`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WEBTURBO()
	{
		return 'application/vnd.webturbo';
	}

	/**
	 * Represents the content type `application/vnd.wfa.p2p`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WFA_P2P()
	{
		return 'application/vnd.wfa.p2p';
	}

	/**
	 * Represents the content type `application/vnd.wfa.wsc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WFA_WSC()
	{
		return 'application/vnd.wfa.wsc';
	}

	/**
	 * Represents the content type `application/vnd.windows.devicepairing`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WINDOWS_DEVICEPAIRING()
	{
		return 'application/vnd.windows.devicepairing';
	}

	/**
	 * Represents the content type `application/vnd.wmc`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WMC()
	{
		return 'application/vnd.wmc';
	}

	/**
	 * Represents the content type `application/vnd.wmf.bootstrap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WMF_BOOTSTRAP()
	{
		return 'application/vnd.wmf.bootstrap';
	}

	/**
	 * Represents the content type `application/vnd.wolfram.mathematica`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WOLFRAM_MATHEMATICA()
	{
		return 'application/vnd.wolfram.mathematica';
	}

	/**
	 * Represents the content type `application/vnd.wolfram.mathematica.package`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WOLFRAM_MATHEMATICA_PACKAGE()
	{
		return 'application/vnd.wolfram.mathematica.package';
	}

	/**
	 * Represents the content type `application/vnd.wolfram.player`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WOLFRAM_PLAYER()
	{
		return 'application/vnd.wolfram.player';
	}

	/**
	 * Represents the content type `application/vnd.wordperfect`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WORDPERFECT()
	{
		return 'application/vnd.wordperfect';
	}

	/**
	 * Represents the content type `application/vnd.wqd`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WQD()
	{
		return 'application/vnd.wqd';
	}

	/**
	 * Represents the content type `application/vnd.wrq-hp3000-labelled`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WRQ_HP3000_LABELLED()
	{
		return 'application/vnd.wrq-hp3000-labelled';
	}

	/**
	 * Represents the content type `application/vnd.wt.stf`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WT_STF()
	{
		return 'application/vnd.wt.stf';
	}

	/**
	 * Represents the content type `application/vnd.wv.csp+wbxml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WV_CSP_WBXML()
	{
		return 'application/vnd.wv.csp+wbxml';
	}

	/**
	 * Represents the content type `application/vnd.wv.csp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WV_CSP_XML()
	{
		return 'application/vnd.wv.csp+xml';
	}

	/**
	 * Represents the content type `application/vnd.wv.ssp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_WV_SSP_XML()
	{
		return 'application/vnd.wv.ssp+xml';
	}

	/**
	 * Represents the content type `application/vnd.xacml+json`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XACML_JSON()
	{
		return 'application/vnd.xacml+json';
	}

	/**
	 * Represents the content type `application/vnd.xara`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XARA()
	{
		return 'application/vnd.xara';
	}

	/**
	 * Represents the content type `application/vnd.xfdl`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XFDL()
	{
		return 'application/vnd.xfdl';
	}

	/**
	 * Represents the content type `application/vnd.xfdl.webform`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XFDL_WEBFORM()
	{
		return 'application/vnd.xfdl.webform';
	}

	/**
	 * Represents the content type `application/vnd.xmi+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMI_XML()
	{
		return 'application/vnd.xmi+xml';
	}

	/**
	 * Represents the content type `application/vnd.xmpie.cpkg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMPIE_CPKG()
	{
		return 'application/vnd.xmpie.cpkg';
	}

	/**
	 * Represents the content type `application/vnd.xmpie.dpkg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMPIE_DPKG()
	{
		return 'application/vnd.xmpie.dpkg';
	}

	/**
	 * Represents the content type `application/vnd.xmpie.plan`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMPIE_PLAN()
	{
		return 'application/vnd.xmpie.plan';
	}

	/**
	 * Represents the content type `application/vnd.xmpie.ppkg`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMPIE_PPKG()
	{
		return 'application/vnd.xmpie.ppkg';
	}

	/**
	 * Represents the content type `application/vnd.xmpie.xlim`.
	 * @type {String}
	 */
	static get APPLICATION_VND_XMPIE_XLIM()
	{
		return 'application/vnd.xmpie.xlim';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.hv-dic`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_HV_DIC()
	{
		return 'application/vnd.yamaha.hv-dic';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.hv-script`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_HV_SCRIPT()
	{
		return 'application/vnd.yamaha.hv-script';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.hv-voice`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_HV_VOICE()
	{
		return 'application/vnd.yamaha.hv-voice';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.openscoreformat`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_OPENSCOREFORMAT()
	{
		return 'application/vnd.yamaha.openscoreformat';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.openscoreformat.osfpvg+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_OPENSCOREFORMAT_OSFPVG_XML()
	{
		return 'application/vnd.yamaha.openscoreformat.osfpvg+xml';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.remote-setup`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_REMOTE_SETUP()
	{
		return 'application/vnd.yamaha.remote-setup';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.smaf-audio`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_SMAF_AUDIO()
	{
		return 'application/vnd.yamaha.smaf-audio';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.smaf-phrase`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_SMAF_PHRASE()
	{
		return 'application/vnd.yamaha.smaf-phrase';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.through-ngn`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_THROUGH_NGN()
	{
		return 'application/vnd.yamaha.through-ngn';
	}

	/**
	 * Represents the content type `application/vnd.yamaha.tunnel-udpencap`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAMAHA_TUNNEL_UDPENCAP()
	{
		return 'application/vnd.yamaha.tunnel-udpencap';
	}

	/**
	 * Represents the content type `application/vnd.yaoweme`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YAOWEME()
	{
		return 'application/vnd.yaoweme';
	}

	/**
	 * Represents the content type `application/vnd.yellowriver-custom-menu`.
	 * @type {String}
	 */
	static get APPLICATION_VND_YELLOWRIVER_CUSTOM_MENU()
	{
		return 'application/vnd.yellowriver-custom-menu';
	}

	/**
	 * Represents the content type `application/vnd.zul`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ZUL()
	{
		return 'application/vnd.zul';
	}

	/**
	 * Represents the content type `application/vnd.zzazz.deck+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VND_ZZAZZ_DECK_XML()
	{
		return 'application/vnd.zzazz.deck+xml';
	}

	/**
	 * Represents the content type `application/voicexml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_VOICEXML_XML()
	{
		return 'application/voicexml+xml';
	}

	/**
	 * Represents the content type `application/vq-rtcpxr`.
	 * @type {String}
	 */
	static get APPLICATION_VQ_RTCPXR()
	{
		return 'application/vq-rtcpxr';
	}

	/**
	 * Represents the content type `application/wasm`.
	 * @type {String}
	 */
	static get APPLICATION_WASM()
	{
		return 'application/wasm';
	}

	/**
	 * Represents the content type `application/watcherinfo+xml`.
	 * @type {String}
	 */
	static get APPLICATION_WATCHERINFO_XML()
	{
		return 'application/watcherinfo+xml';
	}

	/**
	 * Represents the content type `application/whoispp-query`.
	 * @type {String}
	 */
	static get APPLICATION_WHOISPP_QUERY()
	{
		return 'application/whoispp-query';
	}

	/**
	 * Represents the content type `application/whoispp-response`.
	 * @type {String}
	 */
	static get APPLICATION_WHOISPP_RESPONSE()
	{
		return 'application/whoispp-response';
	}

	/**
	 * Represents the content type `application/widget`.
	 * @type {String}
	 */
	static get APPLICATION_WIDGET()
	{
		return 'application/widget';
	}

	/**
	 * Represents the content type `application/winhlp`.
	 * @type {String}
	 */
	static get APPLICATION_WINHLP()
	{
		return 'application/winhlp';
	}

	/**
	 * Represents the content type `application/wita`.
	 * @type {String}
	 */
	static get APPLICATION_WITA()
	{
		return 'application/wita';
	}

	/**
	 * Represents the content type `application/wordperfect5.1`.
	 * @type {String}
	 */
	static get APPLICATION_WORDPERFECT5_1()
	{
		return 'application/wordperfect5.1';
	}

	/**
	 * Represents the content type `application/wsdl+xml`.
	 * @type {String}
	 */
	static get APPLICATION_WSDL_XML()
	{
		return 'application/wsdl+xml';
	}

	/**
	 * Represents the content type `application/wspolicy+xml`.
	 * @type {String}
	 */
	static get APPLICATION_WSPOLICY_XML()
	{
		return 'application/wspolicy+xml';
	}

	/**
	 * Represents the content type `application/x-7z-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_7Z_COMPRESSED()
	{
		return 'application/x-7z-compressed';
	}

	/**
	 * Represents the content type `application/x-abiword`.
	 * @type {String}
	 */
	static get APPLICATION_X_ABIWORD()
	{
		return 'application/x-abiword';
	}

	/**
	 * Represents the content type `application/x-ace-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_ACE_COMPRESSED()
	{
		return 'application/x-ace-compressed';
	}

	/**
	 * Represents the content type `application/x-amf`.
	 * @type {String}
	 */
	static get APPLICATION_X_AMF()
	{
		return 'application/x-amf';
	}

	/**
	 * Represents the content type `application/x-apple-diskimage`.
	 * @type {String}
	 */
	static get APPLICATION_X_APPLE_DISKIMAGE()
	{
		return 'application/x-apple-diskimage';
	}

	/**
	 * Represents the content type `application/x-authorware-bin`.
	 * @type {String}
	 */
	static get APPLICATION_X_AUTHORWARE_BIN()
	{
		return 'application/x-authorware-bin';
	}

	/**
	 * Represents the content type `application/x-authorware-map`.
	 * @type {String}
	 */
	static get APPLICATION_X_AUTHORWARE_MAP()
	{
		return 'application/x-authorware-map';
	}

	/**
	 * Represents the content type `application/x-authorware-seg`.
	 * @type {String}
	 */
	static get APPLICATION_X_AUTHORWARE_SEG()
	{
		return 'application/x-authorware-seg';
	}

	/**
	 * Represents the content type `application/x-bcpio`.
	 * @type {String}
	 */
	static get APPLICATION_X_BCPIO()
	{
		return 'application/x-bcpio';
	}

	/**
	 * Represents the content type `application/x-bittorrent`.
	 * @type {String}
	 */
	static get APPLICATION_X_BITTORRENT()
	{
		return 'application/x-bittorrent';
	}

	/**
	 * Represents the content type `application/x-blorb`.
	 * @type {String}
	 */
	static get APPLICATION_X_BLORB()
	{
		return 'application/x-blorb';
	}

	/**
	 * Represents the content type `application/x-bzip`.
	 * @type {String}
	 */
	static get APPLICATION_X_BZIP()
	{
		return 'application/x-bzip';
	}

	/**
	 * Represents the content type `application/x-bzip2`.
	 * @type {String}
	 */
	static get APPLICATION_X_BZIP2()
	{
		return 'application/x-bzip2';
	}

	/**
	 * Represents the content type `application/x-cbr`.
	 * @type {String}
	 */
	static get APPLICATION_X_CBR()
	{
		return 'application/x-cbr';
	}

	/**
	 * Represents the content type `application/x-cdlink`.
	 * @type {String}
	 */
	static get APPLICATION_X_CDLINK()
	{
		return 'application/x-cdlink';
	}

	/**
	 * Represents the content type `application/x-cfs-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_CFS_COMPRESSED()
	{
		return 'application/x-cfs-compressed';
	}

	/**
	 * Represents the content type `application/x-chat`.
	 * @type {String}
	 */
	static get APPLICATION_X_CHAT()
	{
		return 'application/x-chat';
	}

	/**
	 * Represents the content type `application/x-chess-pgn`.
	 * @type {String}
	 */
	static get APPLICATION_X_CHESS_PGN()
	{
		return 'application/x-chess-pgn';
	}

	/**
	 * Represents the content type `application/x-compress`.
	 * @type {String}
	 */
	static get APPLICATION_X_COMPRESS()
	{
		return 'application/x-compress';
	}

	/**
	 * Represents the content type `application/x-conference`.
	 * @type {String}
	 */
	static get APPLICATION_X_CONFERENCE()
	{
		return 'application/x-conference';
	}

	/**
	 * Represents the content type `application/x-cpio`.
	 * @type {String}
	 */
	static get APPLICATION_X_CPIO()
	{
		return 'application/x-cpio';
	}

	/**
	 * Represents the content type `application/x-csh`.
	 * @type {String}
	 */
	static get APPLICATION_X_CSH()
	{
		return 'application/x-csh';
	}

	/**
	 * Represents the content type `application/x-debian-package`.
	 * @type {String}
	 */
	static get APPLICATION_X_DEBIAN_PACKAGE()
	{
		return 'application/x-debian-package';
	}

	/**
	 * Represents the content type `application/x-dgc-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_DGC_COMPRESSED()
	{
		return 'application/x-dgc-compressed';
	}

	/**
	 * Represents the content type `application/x-director`.
	 * @type {String}
	 */
	static get APPLICATION_X_DIRECTOR()
	{
		return 'application/x-director';
	}

	/**
	 * Represents the content type `application/x-doom`.
	 * @type {String}
	 */
	static get APPLICATION_X_DOOM()
	{
		return 'application/x-doom';
	}

	/**
	 * Represents the content type `application/x-dtbncx+xml`.
	 * @type {String}
	 */
	static get APPLICATION_X_DTBNCX_XML()
	{
		return 'application/x-dtbncx+xml';
	}

	/**
	 * Represents the content type `application/x-dtbook+xml`.
	 * @type {String}
	 */
	static get APPLICATION_X_DTBOOK_XML()
	{
		return 'application/x-dtbook+xml';
	}

	/**
	 * Represents the content type `application/x-dtbresource+xml`.
	 * @type {String}
	 */
	static get APPLICATION_X_DTBRESOURCE_XML()
	{
		return 'application/x-dtbresource+xml';
	}

	/**
	 * Represents the content type `application/x-dvi`.
	 * @type {String}
	 */
	static get APPLICATION_X_DVI()
	{
		return 'application/x-dvi';
	}

	/**
	 * Represents the content type `application/x-envoy`.
	 * @type {String}
	 */
	static get APPLICATION_X_ENVOY()
	{
		return 'application/x-envoy';
	}

	/**
	 * Represents the content type `application/x-eva`.
	 * @type {String}
	 */
	static get APPLICATION_X_EVA()
	{
		return 'application/x-eva';
	}

	/**
	 * Represents the content type `application/x-font-bdf`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_BDF()
	{
		return 'application/x-font-bdf';
	}

	/**
	 * Represents the content type `application/x-font-dos`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_DOS()
	{
		return 'application/x-font-dos';
	}

	/**
	 * Represents the content type `application/x-font-framemaker`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_FRAMEMAKER()
	{
		return 'application/x-font-framemaker';
	}

	/**
	 * Represents the content type `application/x-font-ghostscript`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_GHOSTSCRIPT()
	{
		return 'application/x-font-ghostscript';
	}

	/**
	 * Represents the content type `application/x-font-libgrx`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_LIBGRX()
	{
		return 'application/x-font-libgrx';
	}

	/**
	 * Represents the content type `application/x-font-linux-psf`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_LINUX_PSF()
	{
		return 'application/x-font-linux-psf';
	}

	/**
	 * Represents the content type `application/x-font-pcf`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_PCF()
	{
		return 'application/x-font-pcf';
	}

	/**
	 * Represents the content type `application/x-font-snf`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_SNF()
	{
		return 'application/x-font-snf';
	}

	/**
	 * Represents the content type `application/x-font-speedo`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_SPEEDO()
	{
		return 'application/x-font-speedo';
	}

	/**
	 * Represents the content type `application/x-font-sunos-news`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_SUNOS_NEWS()
	{
		return 'application/x-font-sunos-news';
	}

	/**
	 * Represents the content type `application/x-font-type1`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_TYPE1()
	{
		return 'application/x-font-type1';
	}

	/**
	 * Represents the content type `application/x-font-vfont`.
	 * @type {String}
	 */
	static get APPLICATION_X_FONT_VFONT()
	{
		return 'application/x-font-vfont';
	}

	/**
	 * Represents the content type `application/x-freearc`.
	 * @type {String}
	 */
	static get APPLICATION_X_FREEARC()
	{
		return 'application/x-freearc';
	}

	/**
	 * Represents the content type `application/x-futuresplash`.
	 * @type {String}
	 */
	static get APPLICATION_X_FUTURESPLASH()
	{
		return 'application/x-futuresplash';
	}

	/**
	 * Represents the content type `application/x-gca-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_GCA_COMPRESSED()
	{
		return 'application/x-gca-compressed';
	}

	/**
	 * Represents the content type `application/x-glulx`.
	 * @type {String}
	 */
	static get APPLICATION_X_GLULX()
	{
		return 'application/x-glulx';
	}

	/**
	 * Represents the content type `application/x-gnumeric`.
	 * @type {String}
	 */
	static get APPLICATION_X_GNUMERIC()
	{
		return 'application/x-gnumeric';
	}

	/**
	 * Represents the content type `application/x-gramps-xml`.
	 * @type {String}
	 */
	static get APPLICATION_X_GRAMPS_XML()
	{
		return 'application/x-gramps-xml';
	}

	/**
	 * Represents the content type `application/x-gtar`.
	 * @type {String}
	 */
	static get APPLICATION_X_GTAR()
	{
		return 'application/x-gtar';
	}

	/**
	 * Represents the content type `application/x-gzip`.
	 * @type {String}
	 */
	static get APPLICATION_X_GZIP()
	{
		return 'application/x-gzip';
	}

	/**
	 * Represents the content type `application/x-hdf`.
	 * @type {String}
	 */
	static get APPLICATION_X_HDF()
	{
		return 'application/x-hdf';
	}

	/**
	 * Represents the content type `application/x-install-instructions`.
	 * @type {String}
	 */
	static get APPLICATION_X_INSTALL_INSTRUCTIONS()
	{
		return 'application/x-install-instructions';
	}

	/**
	 * Represents the content type `application/x-iso9660-image`.
	 * @type {String}
	 */
	static get APPLICATION_X_ISO9660_IMAGE()
	{
		return 'application/x-iso9660-image';
	}

	/**
	 * Represents the content type `application/x-java-jnlp-file`.
	 * @type {String}
	 */
	static get APPLICATION_X_JAVA_JNLP_FILE()
	{
		return 'application/x-java-jnlp-file';
	}

	/**
	 * Represents the content type `application/x-latex`.
	 * @type {String}
	 */
	static get APPLICATION_X_LATEX()
	{
		return 'application/x-latex';
	}

	/**
	 * Represents the content type `application/x-lzh-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_LZH_COMPRESSED()
	{
		return 'application/x-lzh-compressed';
	}

	/**
	 * Represents the content type `application/x-mie`.
	 * @type {String}
	 */
	static get APPLICATION_X_MIE()
	{
		return 'application/x-mie';
	}

	/**
	 * Represents the content type `application/x-mobipocket-ebook`.
	 * @type {String}
	 */
	static get APPLICATION_X_MOBIPOCKET_EBOOK()
	{
		return 'application/x-mobipocket-ebook';
	}

	/**
	 * Represents the content type `application/x-ms-application`.
	 * @type {String}
	 */
	static get APPLICATION_X_MS_APPLICATION()
	{
		return 'application/x-ms-application';
	}

	/**
	 * Represents the content type `application/x-ms-shortcut`.
	 * @type {String}
	 */
	static get APPLICATION_X_MS_SHORTCUT()
	{
		return 'application/x-ms-shortcut';
	}

	/**
	 * Represents the content type `application/x-ms-wmd`.
	 * @type {String}
	 */
	static get APPLICATION_X_MS_WMD()
	{
		return 'application/x-ms-wmd';
	}

	/**
	 * Represents the content type `application/x-ms-wmz`.
	 * @type {String}
	 */
	static get APPLICATION_X_MS_WMZ()
	{
		return 'application/x-ms-wmz';
	}

	/**
	 * Represents the content type `application/x-ms-xbap`.
	 * @type {String}
	 */
	static get APPLICATION_X_MS_XBAP()
	{
		return 'application/x-ms-xbap';
	}

	/**
	 * Represents the content type `application/x-msaccess`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSACCESS()
	{
		return 'application/x-msaccess';
	}

	/**
	 * Represents the content type `application/x-msbinder`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSBINDER()
	{
		return 'application/x-msbinder';
	}

	/**
	 * Represents the content type `application/x-mscardfile`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSCARDFILE()
	{
		return 'application/x-mscardfile';
	}

	/**
	 * Represents the content type `application/x-msclip`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSCLIP()
	{
		return 'application/x-msclip';
	}

	/**
	 * Represents the content type `application/x-msdownload`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSDOWNLOAD()
	{
		return 'application/x-msdownload';
	}

	/**
	 * Represents the content type `application/x-msmediaview`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSMEDIAVIEW()
	{
		return 'application/x-msmediaview';
	}

	/**
	 * Represents the content type `application/x-msmetafile`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSMETAFILE()
	{
		return 'application/x-msmetafile';
	}

	/**
	 * Represents the content type `application/x-msmoney`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSMONEY()
	{
		return 'application/x-msmoney';
	}

	/**
	 * Represents the content type `application/x-mspublisher`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSPUBLISHER()
	{
		return 'application/x-mspublisher';
	}

	/**
	 * Represents the content type `application/x-msschedule`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSSCHEDULE()
	{
		return 'application/x-msschedule';
	}

	/**
	 * Represents the content type `application/x-msterminal`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSTERMINAL()
	{
		return 'application/x-msterminal';
	}

	/**
	 * Represents the content type `application/x-mswrite`.
	 * @type {String}
	 */
	static get APPLICATION_X_MSWRITE()
	{
		return 'application/x-mswrite';
	}

	/**
	 * Represents the content type `application/x-netcdf`.
	 * @type {String}
	 */
	static get APPLICATION_X_NETCDF()
	{
		return 'application/x-netcdf';
	}

	/**
	 * Represents the content type `application/x-nzb`.
	 * @type {String}
	 */
	static get APPLICATION_X_NZB()
	{
		return 'application/x-nzb';
	}

	/**
	 * Represents the content type `application/x-pkcs12`.
	 * @type {String}
	 */
	static get APPLICATION_X_PKCS12()
	{
		return 'application/x-pkcs12';
	}

	/**
	 * Represents the content type `application/x-pkcs7-certificates`.
	 * @type {String}
	 */
	static get APPLICATION_X_PKCS7_CERTIFICATES()
	{
		return 'application/x-pkcs7-certificates';
	}

	/**
	 * Represents the content type `application/x-pkcs7-certreqresp`.
	 * @type {String}
	 */
	static get APPLICATION_X_PKCS7_CERTREQRESP()
	{
		return 'application/x-pkcs7-certreqresp';
	}

	/**
	 * Represents the content type `application/x-rar-compressed`.
	 * @type {String}
	 */
	static get APPLICATION_X_RAR_COMPRESSED()
	{
		return 'application/x-rar-compressed';
	}

	/**
	 * Represents the content type `application/x-research-info-systems`.
	 * @type {String}
	 */
	static get APPLICATION_X_RESEARCH_INFO_SYSTEMS()
	{
		return 'application/x-research-info-systems';
	}

	/**
	 * Represents the content type `application/x-sh`.
	 * @type {String}
	 */
	static get APPLICATION_X_SH()
	{
		return 'application/x-sh';
	}

	/**
	 * Represents the content type `application/x-shar`.
	 * @type {String}
	 */
	static get APPLICATION_X_SHAR()
	{
		return 'application/x-shar';
	}

	/**
	 * Represents the content type `application/x-shockwave-flash`.
	 * @type {String}
	 */
	static get APPLICATION_X_SHOCKWAVE_FLASH()
	{
		return 'application/x-shockwave-flash';
	}

	/**
	 * Represents the content type `application/x-silverlight-app`.
	 * @type {String}
	 */
	static get APPLICATION_X_SILVERLIGHT_APP()
	{
		return 'application/x-silverlight-app';
	}

	/**
	 * Represents the content type `application/x-sql`.
	 * @type {String}
	 */
	static get APPLICATION_X_SQL()
	{
		return 'application/x-sql';
	}

	/**
	 * Represents the content type `application/x-stuffit`.
	 * @type {String}
	 */
	static get APPLICATION_X_STUFFIT()
	{
		return 'application/x-stuffit';
	}

	/**
	 * Represents the content type `application/x-stuffitx`.
	 * @type {String}
	 */
	static get APPLICATION_X_STUFFITX()
	{
		return 'application/x-stuffitx';
	}

	/**
	 * Represents the content type `application/x-subrip`.
	 * @type {String}
	 */
	static get APPLICATION_X_SUBRIP()
	{
		return 'application/x-subrip';
	}

	/**
	 * Represents the content type `application/x-sv4cpio`.
	 * @type {String}
	 */
	static get APPLICATION_X_SV4CPIO()
	{
		return 'application/x-sv4cpio';
	}

	/**
	 * Represents the content type `application/x-sv4crc`.
	 * @type {String}
	 */
	static get APPLICATION_X_SV4CRC()
	{
		return 'application/x-sv4crc';
	}

	/**
	 * Represents the content type `application/x-t3vm-image`.
	 * @type {String}
	 */
	static get APPLICATION_X_T3VM_IMAGE()
	{
		return 'application/x-t3vm-image';
	}

	/**
	 * Represents the content type `application/x-tads`.
	 * @type {String}
	 */
	static get APPLICATION_X_TADS()
	{
		return 'application/x-tads';
	}

	/**
	 * Represents the content type `application/x-tar`.
	 * @type {String}
	 */
	static get APPLICATION_X_TAR()
	{
		return 'application/x-tar';
	}

	/**
	 * Represents the content type `application/x-tcl`.
	 * @type {String}
	 */
	static get APPLICATION_X_TCL()
	{
		return 'application/x-tcl';
	}

	/**
	 * Represents the content type `application/x-tex`.
	 * @type {String}
	 */
	static get APPLICATION_X_TEX()
	{
		return 'application/x-tex';
	}

	/**
	 * Represents the content type `application/x-tex-tfm`.
	 * @type {String}
	 */
	static get APPLICATION_X_TEX_TFM()
	{
		return 'application/x-tex-tfm';
	}

	/**
	 * Represents the content type `application/x-texinfo`.
	 * @type {String}
	 */
	static get APPLICATION_X_TEXINFO()
	{
		return 'application/x-texinfo';
	}

	/**
	 * Represents the content type `application/x-tgif`.
	 * @type {String}
	 */
	static get APPLICATION_X_TGIF()
	{
		return 'application/x-tgif';
	}

	/**
	 * Represents the content type `application/x-ustar`.
	 * @type {String}
	 */
	static get APPLICATION_X_USTAR()
	{
		return 'application/x-ustar';
	}

	/**
	 * Represents the content type `application/x-wais-source`.
	 * @type {String}
	 */
	static get APPLICATION_X_WAIS_SOURCE()
	{
		return 'application/x-wais-source';
	}

	/**
	 * Represents the content type `application/x-www-form-urlencoded`.
	 * @type {String}
	 */
	static get APPLICATION_X_WWW_FORM_URLENCODED()
	{
		return 'application/x-www-form-urlencoded';
	}

	/**
	 * Represents the content type `application/x-x509-ca-cert`.
	 * @type {String}
	 */
	static get APPLICATION_X_X509_CA_CERT()
	{
		return 'application/x-x509-ca-cert';
	}

	/**
	 * Represents the content type `application/x-xfig`.
	 * @type {String}
	 */
	static get APPLICATION_X_XFIG()
	{
		return 'application/x-xfig';
	}

	/**
	 * Represents the content type `application/x-xliff+xml`.
	 * @type {String}
	 */
	static get APPLICATION_X_XLIFF_XML()
	{
		return 'application/x-xliff+xml';
	}

	/**
	 * Represents the content type `application/x-xpinstall`.
	 * @type {String}
	 */
	static get APPLICATION_X_XPINSTALL()
	{
		return 'application/x-xpinstall';
	}

	/**
	 * Represents the content type `application/x-xz`.
	 * @type {String}
	 */
	static get APPLICATION_X_XZ()
	{
		return 'application/x-xz';
	}

	/**
	 * Represents the content type `application/x-zmachine`.
	 * @type {String}
	 */
	static get APPLICATION_X_ZMACHINE()
	{
		return 'application/x-zmachine';
	}

	/**
	 * Represents the content type `application/x400-bp`.
	 * @type {String}
	 */
	static get APPLICATION_X400_BP()
	{
		return 'application/x400-bp';
	}

	/**
	 * Represents the content type `application/xacml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XACML_XML()
	{
		return 'application/xacml+xml';
	}

	/**
	 * Represents the content type `application/xaml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XAML_XML()
	{
		return 'application/xaml+xml';
	}

	/**
	 * Represents the content type `application/xcap-att+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_ATT_XML()
	{
		return 'application/xcap-att+xml';
	}

	/**
	 * Represents the content type `application/xcap-caps+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_CAPS_XML()
	{
		return 'application/xcap-caps+xml';
	}

	/**
	 * Represents the content type `application/xcap-diff+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_DIFF_XML()
	{
		return 'application/xcap-diff+xml';
	}

	/**
	 * Represents the content type `application/xcap-el+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_EL_XML()
	{
		return 'application/xcap-el+xml';
	}

	/**
	 * Represents the content type `application/xcap-error+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_ERROR_XML()
	{
		return 'application/xcap-error+xml';
	}

	/**
	 * Represents the content type `application/xcap-ns+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCAP_NS_XML()
	{
		return 'application/xcap-ns+xml';
	}

	/**
	 * Represents the content type `application/xcon-conference-info+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCON_CONFERENCE_INFO_XML()
	{
		return 'application/xcon-conference-info+xml';
	}

	/**
	 * Represents the content type `application/xcon-conference-info-diff+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XCON_CONFERENCE_INFO_DIFF_XML()
	{
		return 'application/xcon-conference-info-diff+xml';
	}

	/**
	 * Represents the content type `application/xenc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XENC_XML()
	{
		return 'application/xenc+xml';
	}

	/**
	 * Represents the content type `application/xhtml+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XHTML_XML()
	{
		return 'application/xhtml+xml';
	}

	/**
	 * Represents the content type `application/xhtml-voice+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XHTML_VOICE_XML()
	{
		return 'application/xhtml-voice+xml';
	}

	/**
	 * Represents the content type `application/xml`.
	 * @type {String}
	 */
	static get APPLICATION_XML()
	{
		return 'application/xml';
	}

	/**
	 * Represents the content type `application/xml-dtd`.
	 * @type {String}
	 */
	static get APPLICATION_XML_DTD()
	{
		return 'application/xml-dtd';
	}

	/**
	 * Represents the content type `application/xml-external-parsed-entity`.
	 * @type {String}
	 */
	static get APPLICATION_XML_EXTERNAL_PARSED_ENTITY()
	{
		return 'application/xml-external-parsed-entity';
	}

	/**
	 * Represents the content type `application/xml-patch+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XML_PATCH_XML()
	{
		return 'application/xml-patch+xml';
	}

	/**
	 * Represents the content type `application/xmpp+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XMPP_XML()
	{
		return 'application/xmpp+xml';
	}

	/**
	 * Represents the content type `application/xop+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XOP_XML()
	{
		return 'application/xop+xml';
	}

	/**
	 * Represents the content type `application/xproc+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XPROC_XML()
	{
		return 'application/xproc+xml';
	}

	/**
	 * Represents the content type `application/xslt+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XSLT_XML()
	{
		return 'application/xslt+xml';
	}

	/**
	 * Represents the content type `application/xspf+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XSPF_XML()
	{
		return 'application/xspf+xml';
	}

	/**
	 * Represents the content type `application/xv+xml`.
	 * @type {String}
	 */
	static get APPLICATION_XV_XML()
	{
		return 'application/xv+xml';
	}

	/**
	 * Represents the content type `application/yang`.
	 * @type {String}
	 */
	static get APPLICATION_YANG()
	{
		return 'application/yang';
	}

	/**
	 * Represents the content type `application/yin+xml`.
	 * @type {String}
	 */
	static get APPLICATION_YIN_XML()
	{
		return 'application/yin+xml';
	}

	/**
	 * Represents the content type `application/zip`.
	 * @type {String}
	 */
	static get APPLICATION_ZIP()
	{
		return 'application/zip';
	}

	/**
	 * Represents the content type `application/zlib`.
	 * @type {String}
	 */
	static get APPLICATION_ZLIB()
	{
		return 'application/zlib';
	}

	/**
	 * Represents the content type `audio/1d-interleaved-parityfec`.
	 * @type {String}
	 */
	static get AUDIO_1D_INTERLEAVED_PARITYFEC()
	{
		return 'audio/1d-interleaved-parityfec';
	}

	/**
	 * Represents the content type `audio/32kadpcm`.
	 * @type {String}
	 */
	static get AUDIO_32KADPCM()
	{
		return 'audio/32kadpcm';
	}

	/**
	 * Represents the content type `audio/3gpp`.
	 * @type {String}
	 */
	static get AUDIO_3GPP()
	{
		return 'audio/3gpp';
	}

	/**
	 * Represents the content type `audio/3gpp2`.
	 * @type {String}
	 */
	static get AUDIO_3GPP2()
	{
		return 'audio/3gpp2';
	}

	/**
	 * Represents the content type `audio/ac3`.
	 * @type {String}
	 */
	static get AUDIO_AC3()
	{
		return 'audio/ac3';
	}

	/**
	 * Represents the content type `audio/adpcm`.
	 * @type {String}
	 */
	static get AUDIO_ADPCM()
	{
		return 'audio/adpcm';
	}

	/**
	 * Represents the content type `audio/amr`.
	 * @type {String}
	 */
	static get AUDIO_AMR()
	{
		return 'audio/amr';
	}

	/**
	 * Represents the content type `audio/amr-wb`.
	 * @type {String}
	 */
	static get AUDIO_AMR_WB()
	{
		return 'audio/amr-wb';
	}

	/**
	 * Represents the content type `audio/amr-wb+`.
	 * @type {String}
	 */
	static get AUDIO_AMR_WB_()
	{
		return 'audio/amr-wb+';
	}

	/**
	 * Represents the content type `audio/aptx`.
	 * @type {String}
	 */
	static get AUDIO_APTX()
	{
		return 'audio/aptx';
	}

	/**
	 * Represents the content type `audio/asc`.
	 * @type {String}
	 */
	static get AUDIO_ASC()
	{
		return 'audio/asc';
	}

	/**
	 * Represents the content type `audio/atrac-advanced-lossless`.
	 * @type {String}
	 */
	static get AUDIO_ATRAC_ADVANCED_LOSSLESS()
	{
		return 'audio/atrac-advanced-lossless';
	}

	/**
	 * Represents the content type `audio/atrac-x`.
	 * @type {String}
	 */
	static get AUDIO_ATRAC_X()
	{
		return 'audio/atrac-x';
	}

	/**
	 * Represents the content type `audio/atrac3`.
	 * @type {String}
	 */
	static get AUDIO_ATRAC3()
	{
		return 'audio/atrac3';
	}

	/**
	 * Represents the content type `audio/basic`.
	 * @type {String}
	 */
	static get AUDIO_BASIC()
	{
		return 'audio/basic';
	}

	/**
	 * Represents the content type `audio/bv16`.
	 * @type {String}
	 */
	static get AUDIO_BV16()
	{
		return 'audio/bv16';
	}

	/**
	 * Represents the content type `audio/bv32`.
	 * @type {String}
	 */
	static get AUDIO_BV32()
	{
		return 'audio/bv32';
	}

	/**
	 * Represents the content type `audio/clearmode`.
	 * @type {String}
	 */
	static get AUDIO_CLEARMODE()
	{
		return 'audio/clearmode';
	}

	/**
	 * Represents the content type `audio/cn`.
	 * @type {String}
	 */
	static get AUDIO_CN()
	{
		return 'audio/cn';
	}

	/**
	 * Represents the content type `audio/dat12`.
	 * @type {String}
	 */
	static get AUDIO_DAT12()
	{
		return 'audio/dat12';
	}

	/**
	 * Represents the content type `audio/dls`.
	 * @type {String}
	 */
	static get AUDIO_DLS()
	{
		return 'audio/dls';
	}

	/**
	 * Represents the content type `audio/dsr-es201108`.
	 * @type {String}
	 */
	static get AUDIO_DSR_ES201108()
	{
		return 'audio/dsr-es201108';
	}

	/**
	 * Represents the content type `audio/dsr-es202050`.
	 * @type {String}
	 */
	static get AUDIO_DSR_ES202050()
	{
		return 'audio/dsr-es202050';
	}

	/**
	 * Represents the content type `audio/dsr-es202211`.
	 * @type {String}
	 */
	static get AUDIO_DSR_ES202211()
	{
		return 'audio/dsr-es202211';
	}

	/**
	 * Represents the content type `audio/dsr-es202212`.
	 * @type {String}
	 */
	static get AUDIO_DSR_ES202212()
	{
		return 'audio/dsr-es202212';
	}

	/**
	 * Represents the content type `audio/dv`.
	 * @type {String}
	 */
	static get AUDIO_DV()
	{
		return 'audio/dv';
	}

	/**
	 * Represents the content type `audio/dvi4`.
	 * @type {String}
	 */
	static get AUDIO_DVI4()
	{
		return 'audio/dvi4';
	}

	/**
	 * Represents the content type `audio/eac3`.
	 * @type {String}
	 */
	static get AUDIO_EAC3()
	{
		return 'audio/eac3';
	}

	/**
	 * Represents the content type `audio/encaprtp`.
	 * @type {String}
	 */
	static get AUDIO_ENCAPRTP()
	{
		return 'audio/encaprtp';
	}

	/**
	 * Represents the content type `audio/evrc`.
	 * @type {String}
	 */
	static get AUDIO_EVRC()
	{
		return 'audio/evrc';
	}

	/**
	 * Represents the content type `audio/evrc-qcp`.
	 * @type {String}
	 */
	static get AUDIO_EVRC_QCP()
	{
		return 'audio/evrc-qcp';
	}

	/**
	 * Represents the content type `audio/evrc0`.
	 * @type {String}
	 */
	static get AUDIO_EVRC0()
	{
		return 'audio/evrc0';
	}

	/**
	 * Represents the content type `audio/evrc1`.
	 * @type {String}
	 */
	static get AUDIO_EVRC1()
	{
		return 'audio/evrc1';
	}

	/**
	 * Represents the content type `audio/evrcb`.
	 * @type {String}
	 */
	static get AUDIO_EVRCB()
	{
		return 'audio/evrcb';
	}

	/**
	 * Represents the content type `audio/evrcb0`.
	 * @type {String}
	 */
	static get AUDIO_EVRCB0()
	{
		return 'audio/evrcb0';
	}

	/**
	 * Represents the content type `audio/evrcb1`.
	 * @type {String}
	 */
	static get AUDIO_EVRCB1()
	{
		return 'audio/evrcb1';
	}

	/**
	 * Represents the content type `audio/evrcnw`.
	 * @type {String}
	 */
	static get AUDIO_EVRCNW()
	{
		return 'audio/evrcnw';
	}

	/**
	 * Represents the content type `audio/evrcnw0`.
	 * @type {String}
	 */
	static get AUDIO_EVRCNW0()
	{
		return 'audio/evrcnw0';
	}

	/**
	 * Represents the content type `audio/evrcnw1`.
	 * @type {String}
	 */
	static get AUDIO_EVRCNW1()
	{
		return 'audio/evrcnw1';
	}

	/**
	 * Represents the content type `audio/evrcwb`.
	 * @type {String}
	 */
	static get AUDIO_EVRCWB()
	{
		return 'audio/evrcwb';
	}

	/**
	 * Represents the content type `audio/evrcwb0`.
	 * @type {String}
	 */
	static get AUDIO_EVRCWB0()
	{
		return 'audio/evrcwb0';
	}

	/**
	 * Represents the content type `audio/evrcwb1`.
	 * @type {String}
	 */
	static get AUDIO_EVRCWB1()
	{
		return 'audio/evrcwb1';
	}

	/**
	 * Represents the content type `audio/evs`.
	 * @type {String}
	 */
	static get AUDIO_EVS()
	{
		return 'audio/evs';
	}

	/**
	 * Represents the content type `audio/example`.
	 * @type {String}
	 */
	static get AUDIO_EXAMPLE()
	{
		return 'audio/example';
	}

	/**
	 * Represents the content type `audio/fwdred`.
	 * @type {String}
	 */
	static get AUDIO_FWDRED()
	{
		return 'audio/fwdred';
	}

	/**
	 * Represents the content type `audio/g711-0`.
	 * @type {String}
	 */
	static get AUDIO_G711_0()
	{
		return 'audio/g711-0';
	}

	/**
	 * Represents the content type `audio/g719`.
	 * @type {String}
	 */
	static get AUDIO_G719()
	{
		return 'audio/g719';
	}

	/**
	 * Represents the content type `audio/g722`.
	 * @type {String}
	 */
	static get AUDIO_G722()
	{
		return 'audio/g722';
	}

	/**
	 * Represents the content type `audio/g7221`.
	 * @type {String}
	 */
	static get AUDIO_G7221()
	{
		return 'audio/g7221';
	}

	/**
	 * Represents the content type `audio/g723`.
	 * @type {String}
	 */
	static get AUDIO_G723()
	{
		return 'audio/g723';
	}

	/**
	 * Represents the content type `audio/g726-16`.
	 * @type {String}
	 */
	static get AUDIO_G726_16()
	{
		return 'audio/g726-16';
	}

	/**
	 * Represents the content type `audio/g726-24`.
	 * @type {String}
	 */
	static get AUDIO_G726_24()
	{
		return 'audio/g726-24';
	}

	/**
	 * Represents the content type `audio/g726-32`.
	 * @type {String}
	 */
	static get AUDIO_G726_32()
	{
		return 'audio/g726-32';
	}

	/**
	 * Represents the content type `audio/g726-40`.
	 * @type {String}
	 */
	static get AUDIO_G726_40()
	{
		return 'audio/g726-40';
	}

	/**
	 * Represents the content type `audio/g728`.
	 * @type {String}
	 */
	static get AUDIO_G728()
	{
		return 'audio/g728';
	}

	/**
	 * Represents the content type `audio/g729`.
	 * @type {String}
	 */
	static get AUDIO_G729()
	{
		return 'audio/g729';
	}

	/**
	 * Represents the content type `audio/g7291`.
	 * @type {String}
	 */
	static get AUDIO_G7291()
	{
		return 'audio/g7291';
	}

	/**
	 * Represents the content type `audio/g729d`.
	 * @type {String}
	 */
	static get AUDIO_G729D()
	{
		return 'audio/g729d';
	}

	/**
	 * Represents the content type `audio/g729e`.
	 * @type {String}
	 */
	static get AUDIO_G729E()
	{
		return 'audio/g729e';
	}

	/**
	 * Represents the content type `audio/gsm`.
	 * @type {String}
	 */
	static get AUDIO_GSM()
	{
		return 'audio/gsm';
	}

	/**
	 * Represents the content type `audio/gsm-efr`.
	 * @type {String}
	 */
	static get AUDIO_GSM_EFR()
	{
		return 'audio/gsm-efr';
	}

	/**
	 * Represents the content type `audio/gsm-hr-08`.
	 * @type {String}
	 */
	static get AUDIO_GSM_HR_08()
	{
		return 'audio/gsm-hr-08';
	}

	/**
	 * Represents the content type `audio/ilbc`.
	 * @type {String}
	 */
	static get AUDIO_ILBC()
	{
		return 'audio/ilbc';
	}

	/**
	 * Represents the content type `audio/ip-mr_v2.5`.
	 * @type {String}
	 */
	static get AUDIO_IP_MR_V2_5()
	{
		return 'audio/ip-mr_v2.5';
	}

	/**
	 * Represents the content type `audio/isac`.
	 * @type {String}
	 */
	static get AUDIO_ISAC()
	{
		return 'audio/isac';
	}

	/**
	 * Represents the content type `audio/l16`.
	 * @type {String}
	 */
	static get AUDIO_L16()
	{
		return 'audio/l16';
	}

	/**
	 * Represents the content type `audio/l20`.
	 * @type {String}
	 */
	static get AUDIO_L20()
	{
		return 'audio/l20';
	}

	/**
	 * Represents the content type `audio/l24`.
	 * @type {String}
	 */
	static get AUDIO_L24()
	{
		return 'audio/l24';
	}

	/**
	 * Represents the content type `audio/l8`.
	 * @type {String}
	 */
	static get AUDIO_L8()
	{
		return 'audio/l8';
	}

	/**
	 * Represents the content type `audio/lpc`.
	 * @type {String}
	 */
	static get AUDIO_LPC()
	{
		return 'audio/lpc';
	}

	/**
	 * Represents the content type `audio/midi`.
	 * @type {String}
	 */
	static get AUDIO_MIDI()
	{
		return 'audio/midi';
	}

	/**
	 * Represents the content type `audio/mobile-xmf`.
	 * @type {String}
	 */
	static get AUDIO_MOBILE_XMF()
	{
		return 'audio/mobile-xmf';
	}

	/**
	 * Represents the content type `audio/mp4`.
	 * @type {String}
	 */
	static get AUDIO_MP4()
	{
		return 'audio/mp4';
	}

	/**
	 * Represents the content type `audio/mp4a-latm`.
	 * @type {String}
	 */
	static get AUDIO_MP4A_LATM()
	{
		return 'audio/mp4a-latm';
	}

	/**
	 * Represents the content type `audio/mpa`.
	 * @type {String}
	 */
	static get AUDIO_MPA()
	{
		return 'audio/mpa';
	}

	/**
	 * Represents the content type `audio/mpa-robust`.
	 * @type {String}
	 */
	static get AUDIO_MPA_ROBUST()
	{
		return 'audio/mpa-robust';
	}

	/**
	 * Represents the content type `audio/mpeg`.
	 * @type {String}
	 */
	static get AUDIO_MPEG()
	{
		return 'audio/mpeg';
	}

	/**
	 * Represents the content type `audio/mpeg4-generic`.
	 * @type {String}
	 */
	static get AUDIO_MPEG4_GENERIC()
	{
		return 'audio/mpeg4-generic';
	}

	/**
	 * Represents the content type `audio/musepack`.
	 * @type {String}
	 */
	static get AUDIO_MUSEPACK()
	{
		return 'audio/musepack';
	}

	/**
	 * Represents the content type `audio/ogg`.
	 * @type {String}
	 */
	static get AUDIO_OGG()
	{
		return 'audio/ogg';
	}

	/**
	 * Represents the content type `audio/opus`.
	 * @type {String}
	 */
	static get AUDIO_OPUS()
	{
		return 'audio/opus';
	}

	/**
	 * Represents the content type `audio/parityfec`.
	 * @type {String}
	 */
	static get AUDIO_PARITYFEC()
	{
		return 'audio/parityfec';
	}

	/**
	 * Represents the content type `audio/pcma`.
	 * @type {String}
	 */
	static get AUDIO_PCMA()
	{
		return 'audio/pcma';
	}

	/**
	 * Represents the content type `audio/pcma-wb`.
	 * @type {String}
	 */
	static get AUDIO_PCMA_WB()
	{
		return 'audio/pcma-wb';
	}

	/**
	 * Represents the content type `audio/pcmu`.
	 * @type {String}
	 */
	static get AUDIO_PCMU()
	{
		return 'audio/pcmu';
	}

	/**
	 * Represents the content type `audio/pcmu-wb`.
	 * @type {String}
	 */
	static get AUDIO_PCMU_WB()
	{
		return 'audio/pcmu-wb';
	}

	/**
	 * Represents the content type `audio/prs.sid`.
	 * @type {String}
	 */
	static get AUDIO_PRS_SID()
	{
		return 'audio/prs.sid';
	}

	/**
	 * Represents the content type `audio/qcelp`.
	 * @type {String}
	 */
	static get AUDIO_QCELP()
	{
		return 'audio/qcelp';
	}

	/**
	 * Represents the content type `audio/raptorfec`.
	 * @type {String}
	 */
	static get AUDIO_RAPTORFEC()
	{
		return 'audio/raptorfec';
	}

	/**
	 * Represents the content type `audio/red`.
	 * @type {String}
	 */
	static get AUDIO_RED()
	{
		return 'audio/red';
	}

	/**
	 * Represents the content type `audio/rtp-enc-aescm128`.
	 * @type {String}
	 */
	static get AUDIO_RTP_ENC_AESCM128()
	{
		return 'audio/rtp-enc-aescm128';
	}

	/**
	 * Represents the content type `audio/rtp-midi`.
	 * @type {String}
	 */
	static get AUDIO_RTP_MIDI()
	{
		return 'audio/rtp-midi';
	}

	/**
	 * Represents the content type `audio/rtploopback`.
	 * @type {String}
	 */
	static get AUDIO_RTPLOOPBACK()
	{
		return 'audio/rtploopback';
	}

	/**
	 * Represents the content type `audio/rtx`.
	 * @type {String}
	 */
	static get AUDIO_RTX()
	{
		return 'audio/rtx';
	}

	/**
	 * Represents the content type `audio/s3m`.
	 * @type {String}
	 */
	static get AUDIO_S3M()
	{
		return 'audio/s3m';
	}

	/**
	 * Represents the content type `audio/silk`.
	 * @type {String}
	 */
	static get AUDIO_SILK()
	{
		return 'audio/silk';
	}

	/**
	 * Represents the content type `audio/smv`.
	 * @type {String}
	 */
	static get AUDIO_SMV()
	{
		return 'audio/smv';
	}

	/**
	 * Represents the content type `audio/smv-qcp`.
	 * @type {String}
	 */
	static get AUDIO_SMV_QCP()
	{
		return 'audio/smv-qcp';
	}

	/**
	 * Represents the content type `audio/smv0`.
	 * @type {String}
	 */
	static get AUDIO_SMV0()
	{
		return 'audio/smv0';
	}

	/**
	 * Represents the content type `audio/sp-midi`.
	 * @type {String}
	 */
	static get AUDIO_SP_MIDI()
	{
		return 'audio/sp-midi';
	}

	/**
	 * Represents the content type `audio/speex`.
	 * @type {String}
	 */
	static get AUDIO_SPEEX()
	{
		return 'audio/speex';
	}

	/**
	 * Represents the content type `audio/t140c`.
	 * @type {String}
	 */
	static get AUDIO_T140C()
	{
		return 'audio/t140c';
	}

	/**
	 * Represents the content type `audio/t38`.
	 * @type {String}
	 */
	static get AUDIO_T38()
	{
		return 'audio/t38';
	}

	/**
	 * Represents the content type `audio/telephone-event`.
	 * @type {String}
	 */
	static get AUDIO_TELEPHONE_EVENT()
	{
		return 'audio/telephone-event';
	}

	/**
	 * Represents the content type `audio/tone`.
	 * @type {String}
	 */
	static get AUDIO_TONE()
	{
		return 'audio/tone';
	}

	/**
	 * Represents the content type `audio/uemclip`.
	 * @type {String}
	 */
	static get AUDIO_UEMCLIP()
	{
		return 'audio/uemclip';
	}

	/**
	 * Represents the content type `audio/ulpfec`.
	 * @type {String}
	 */
	static get AUDIO_ULPFEC()
	{
		return 'audio/ulpfec';
	}

	/**
	 * Represents the content type `audio/vdvi`.
	 * @type {String}
	 */
	static get AUDIO_VDVI()
	{
		return 'audio/vdvi';
	}

	/**
	 * Represents the content type `audio/vmr-wb`.
	 * @type {String}
	 */
	static get AUDIO_VMR_WB()
	{
		return 'audio/vmr-wb';
	}

	/**
	 * Represents the content type `audio/vnd.3gpp.iufp`.
	 * @type {String}
	 */
	static get AUDIO_VND_3GPP_IUFP()
	{
		return 'audio/vnd.3gpp.iufp';
	}

	/**
	 * Represents the content type `audio/vnd.4sb`.
	 * @type {String}
	 */
	static get AUDIO_VND_4SB()
	{
		return 'audio/vnd.4sb';
	}

	/**
	 * Represents the content type `audio/vnd.audiokoz`.
	 * @type {String}
	 */
	static get AUDIO_VND_AUDIOKOZ()
	{
		return 'audio/vnd.audiokoz';
	}

	/**
	 * Represents the content type `audio/vnd.celp`.
	 * @type {String}
	 */
	static get AUDIO_VND_CELP()
	{
		return 'audio/vnd.celp';
	}

	/**
	 * Represents the content type `audio/vnd.cisco.nse`.
	 * @type {String}
	 */
	static get AUDIO_VND_CISCO_NSE()
	{
		return 'audio/vnd.cisco.nse';
	}

	/**
	 * Represents the content type `audio/vnd.cmles.radio-events`.
	 * @type {String}
	 */
	static get AUDIO_VND_CMLES_RADIO_EVENTS()
	{
		return 'audio/vnd.cmles.radio-events';
	}

	/**
	 * Represents the content type `audio/vnd.cns.anp1`.
	 * @type {String}
	 */
	static get AUDIO_VND_CNS_ANP1()
	{
		return 'audio/vnd.cns.anp1';
	}

	/**
	 * Represents the content type `audio/vnd.cns.inf1`.
	 * @type {String}
	 */
	static get AUDIO_VND_CNS_INF1()
	{
		return 'audio/vnd.cns.inf1';
	}

	/**
	 * Represents the content type `audio/vnd.dece.audio`.
	 * @type {String}
	 */
	static get AUDIO_VND_DECE_AUDIO()
	{
		return 'audio/vnd.dece.audio';
	}

	/**
	 * Represents the content type `audio/vnd.digital-winds`.
	 * @type {String}
	 */
	static get AUDIO_VND_DIGITAL_WINDS()
	{
		return 'audio/vnd.digital-winds';
	}

	/**
	 * Represents the content type `audio/vnd.dlna.adts`.
	 * @type {String}
	 */
	static get AUDIO_VND_DLNA_ADTS()
	{
		return 'audio/vnd.dlna.adts';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.heaac.1`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_HEAAC_1()
	{
		return 'audio/vnd.dolby.heaac.1';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.heaac.2`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_HEAAC_2()
	{
		return 'audio/vnd.dolby.heaac.2';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.mlp`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_MLP()
	{
		return 'audio/vnd.dolby.mlp';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.mps`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_MPS()
	{
		return 'audio/vnd.dolby.mps';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.pl2`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_PL2()
	{
		return 'audio/vnd.dolby.pl2';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.pl2x`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_PL2X()
	{
		return 'audio/vnd.dolby.pl2x';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.pl2z`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_PL2Z()
	{
		return 'audio/vnd.dolby.pl2z';
	}

	/**
	 * Represents the content type `audio/vnd.dolby.pulse.1`.
	 * @type {String}
	 */
	static get AUDIO_VND_DOLBY_PULSE_1()
	{
		return 'audio/vnd.dolby.pulse.1';
	}

	/**
	 * Represents the content type `audio/vnd.dra`.
	 * @type {String}
	 */
	static get AUDIO_VND_DRA()
	{
		return 'audio/vnd.dra';
	}

	/**
	 * Represents the content type `audio/vnd.dts`.
	 * @type {String}
	 */
	static get AUDIO_VND_DTS()
	{
		return 'audio/vnd.dts';
	}

	/**
	 * Represents the content type `audio/vnd.dts.hd`.
	 * @type {String}
	 */
	static get AUDIO_VND_DTS_HD()
	{
		return 'audio/vnd.dts.hd';
	}

	/**
	 * Represents the content type `audio/vnd.dvb.file`.
	 * @type {String}
	 */
	static get AUDIO_VND_DVB_FILE()
	{
		return 'audio/vnd.dvb.file';
	}

	/**
	 * Represents the content type `audio/vnd.everad.plj`.
	 * @type {String}
	 */
	static get AUDIO_VND_EVERAD_PLJ()
	{
		return 'audio/vnd.everad.plj';
	}

	/**
	 * Represents the content type `audio/vnd.hns.audio`.
	 * @type {String}
	 */
	static get AUDIO_VND_HNS_AUDIO()
	{
		return 'audio/vnd.hns.audio';
	}

	/**
	 * Represents the content type `audio/vnd.lucent.voice`.
	 * @type {String}
	 */
	static get AUDIO_VND_LUCENT_VOICE()
	{
		return 'audio/vnd.lucent.voice';
	}

	/**
	 * Represents the content type `audio/vnd.ms-playready.media.pya`.
	 * @type {String}
	 */
	static get AUDIO_VND_MS_PLAYREADY_MEDIA_PYA()
	{
		return 'audio/vnd.ms-playready.media.pya';
	}

	/**
	 * Represents the content type `audio/vnd.nokia.mobile-xmf`.
	 * @type {String}
	 */
	static get AUDIO_VND_NOKIA_MOBILE_XMF()
	{
		return 'audio/vnd.nokia.mobile-xmf';
	}

	/**
	 * Represents the content type `audio/vnd.nortel.vbk`.
	 * @type {String}
	 */
	static get AUDIO_VND_NORTEL_VBK()
	{
		return 'audio/vnd.nortel.vbk';
	}

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp4800`.
	 * @type {String}
	 */
	static get AUDIO_VND_NUERA_ECELP4800()
	{
		return 'audio/vnd.nuera.ecelp4800';
	}

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp7470`.
	 * @type {String}
	 */
	static get AUDIO_VND_NUERA_ECELP7470()
	{
		return 'audio/vnd.nuera.ecelp7470';
	}

	/**
	 * Represents the content type `audio/vnd.nuera.ecelp9600`.
	 * @type {String}
	 */
	static get AUDIO_VND_NUERA_ECELP9600()
	{
		return 'audio/vnd.nuera.ecelp9600';
	}

	/**
	 * Represents the content type `audio/vnd.octel.sbc`.
	 * @type {String}
	 */
	static get AUDIO_VND_OCTEL_SBC()
	{
		return 'audio/vnd.octel.sbc';
	}

	/**
	 * Represents the content type `audio/vnd.qcelp`.
	 * @type {String}
	 */
	static get AUDIO_VND_QCELP()
	{
		return 'audio/vnd.qcelp';
	}

	/**
	 * Represents the content type `audio/vnd.rhetorex.32kadpcm`.
	 * @type {String}
	 */
	static get AUDIO_VND_RHETOREX_32KADPCM()
	{
		return 'audio/vnd.rhetorex.32kadpcm';
	}

	/**
	 * Represents the content type `audio/vnd.rip`.
	 * @type {String}
	 */
	static get AUDIO_VND_RIP()
	{
		return 'audio/vnd.rip';
	}

	/**
	 * Represents the content type `audio/vnd.sealedmedia.softseal.mpeg`.
	 * @type {String}
	 */
	static get AUDIO_VND_SEALEDMEDIA_SOFTSEAL_MPEG()
	{
		return 'audio/vnd.sealedmedia.softseal.mpeg';
	}

	/**
	 * Represents the content type `audio/vnd.vmx.cvsd`.
	 * @type {String}
	 */
	static get AUDIO_VND_VMX_CVSD()
	{
		return 'audio/vnd.vmx.cvsd';
	}

	/**
	 * Represents the content type `audio/vorbis`.
	 * @type {String}
	 */
	static get AUDIO_VORBIS()
	{
		return 'audio/vorbis';
	}

	/**
	 * Represents the content type `audio/vorbis-config`.
	 * @type {String}
	 */
	static get AUDIO_VORBIS_CONFIG()
	{
		return 'audio/vorbis-config';
	}

	/**
	 * Represents the content type `audio/webm`.
	 * @type {String}
	 */
	static get AUDIO_WEBM()
	{
		return 'audio/webm';
	}

	/**
	 * Represents the content type `audio/x-aac`.
	 * @type {String}
	 */
	static get AUDIO_X_AAC()
	{
		return 'audio/x-aac';
	}

	/**
	 * Represents the content type `audio/x-aiff`.
	 * @type {String}
	 */
	static get AUDIO_X_AIFF()
	{
		return 'audio/x-aiff';
	}

	/**
	 * Represents the content type `audio/x-caf`.
	 * @type {String}
	 */
	static get AUDIO_X_CAF()
	{
		return 'audio/x-caf';
	}

	/**
	 * Represents the content type `audio/x-flac`.
	 * @type {String}
	 */
	static get AUDIO_X_FLAC()
	{
		return 'audio/x-flac';
	}

	/**
	 * Represents the content type `audio/x-matroska`.
	 * @type {String}
	 */
	static get AUDIO_X_MATROSKA()
	{
		return 'audio/x-matroska';
	}

	/**
	 * Represents the content type `audio/x-mpegurl`.
	 * @type {String}
	 */
	static get AUDIO_X_MPEGURL()
	{
		return 'audio/x-mpegurl';
	}

	/**
	 * Represents the content type `audio/x-ms-wax`.
	 * @type {String}
	 */
	static get AUDIO_X_MS_WAX()
	{
		return 'audio/x-ms-wax';
	}

	/**
	 * Represents the content type `audio/x-ms-wma`.
	 * @type {String}
	 */
	static get AUDIO_X_MS_WMA()
	{
		return 'audio/x-ms-wma';
	}

	/**
	 * Represents the content type `audio/x-pn-realaudio`.
	 * @type {String}
	 */
	static get AUDIO_X_PN_REALAUDIO()
	{
		return 'audio/x-pn-realaudio';
	}

	/**
	 * Represents the content type `audio/x-pn-realaudio-plugin`.
	 * @type {String}
	 */
	static get AUDIO_X_PN_REALAUDIO_PLUGIN()
	{
		return 'audio/x-pn-realaudio-plugin';
	}

	/**
	 * Represents the content type `audio/x-tta`.
	 * @type {String}
	 */
	static get AUDIO_X_TTA()
	{
		return 'audio/x-tta';
	}

	/**
	 * Represents the content type `audio/x-wav`.
	 * @type {String}
	 */
	static get AUDIO_X_WAV()
	{
		return 'audio/x-wav';
	}

	/**
	 * Represents the content type `audio/xm`.
	 * @type {String}
	 */
	static get AUDIO_XM()
	{
		return 'audio/xm';
	}

	/**
	 * Represents the content type `chemical/x-cdx`.
	 * @type {String}
	 */
	static get CHEMICAL_X_CDX()
	{
		return 'chemical/x-cdx';
	}

	/**
	 * Represents the content type `chemical/x-cif`.
	 * @type {String}
	 */
	static get CHEMICAL_X_CIF()
	{
		return 'chemical/x-cif';
	}

	/**
	 * Represents the content type `chemical/x-cmdf`.
	 * @type {String}
	 */
	static get CHEMICAL_X_CMDF()
	{
		return 'chemical/x-cmdf';
	}

	/**
	 * Represents the content type `chemical/x-cml`.
	 * @type {String}
	 */
	static get CHEMICAL_X_CML()
	{
		return 'chemical/x-cml';
	}

	/**
	 * Represents the content type `chemical/x-csml`.
	 * @type {String}
	 */
	static get CHEMICAL_X_CSML()
	{
		return 'chemical/x-csml';
	}

	/**
	 * Represents the content type `chemical/x-pdb`.
	 * @type {String}
	 */
	static get CHEMICAL_X_PDB()
	{
		return 'chemical/x-pdb';
	}

	/**
	 * Represents the content type `chemical/x-xyz`.
	 * @type {String}
	 */
	static get CHEMICAL_X_XYZ()
	{
		return 'chemical/x-xyz';
	}

	/**
	 * Represents the content type `font/collection`.
	 * @type {String}
	 */
	static get FONT_COLLECTION()
	{
		return 'font/collection';
	}

	/**
	 * Represents the content type `font/otf`.
	 * @type {String}
	 */
	static get FONT_OTF()
	{
		return 'font/otf';
	}

	/**
	 * Represents the content type `font/sfnt`.
	 * @type {String}
	 */
	static get FONT_SFNT()
	{
		return 'font/sfnt';
	}

	/**
	 * Represents the content type `font/ttf`.
	 * @type {String}
	 */
	static get FONT_TTF()
	{
		return 'font/ttf';
	}

	/**
	 * Represents the content type `font/woff`.
	 * @type {String}
	 */
	static get FONT_WOFF()
	{
		return 'font/woff';
	}

	/**
	 * Represents the content type `font/woff2`.
	 * @type {String}
	 */
	static get FONT_WOFF2()
	{
		return 'font/woff2';
	}

	/**
	 * Represents the content type `image/bmp`.
	 * @type {String}
	 */
	static get IMAGE_BMP()
	{
		return 'image/bmp';
	}

	/**
	 * Represents the content type `image/cgm`.
	 * @type {String}
	 */
	static get IMAGE_CGM()
	{
		return 'image/cgm';
	}

	/**
	 * Represents the content type `image/dicom-rle`.
	 * @type {String}
	 */
	static get IMAGE_DICOM_RLE()
	{
		return 'image/dicom-rle';
	}

	/**
	 * Represents the content type `image/emf`.
	 * @type {String}
	 */
	static get IMAGE_EMF()
	{
		return 'image/emf';
	}

	/**
	 * Represents the content type `image/example`.
	 * @type {String}
	 */
	static get IMAGE_EXAMPLE()
	{
		return 'image/example';
	}

	/**
	 * Represents the content type `image/fits`.
	 * @type {String}
	 */
	static get IMAGE_FITS()
	{
		return 'image/fits';
	}

	/**
	 * Represents the content type `image/g3fax`.
	 * @type {String}
	 */
	static get IMAGE_G3FAX()
	{
		return 'image/g3fax';
	}

	/**
	 * Represents the content type `image/gif`.
	 * @type {String}
	 */
	static get IMAGE_GIF()
	{
		return 'image/gif';
	}

	/**
	 * Represents the content type `image/ief`.
	 * @type {String}
	 */
	static get IMAGE_IEF()
	{
		return 'image/ief';
	}

	/**
	 * Represents the content type `image/jls`.
	 * @type {String}
	 */
	static get IMAGE_JLS()
	{
		return 'image/jls';
	}

	/**
	 * Represents the content type `image/jp2`.
	 * @type {String}
	 */
	static get IMAGE_JP2()
	{
		return 'image/jp2';
	}

	/**
	 * Represents the content type `image/jpeg`.
	 * @type {String}
	 */
	static get IMAGE_JPEG()
	{
		return 'image/jpeg';
	}

	/**
	 * Represents the content type `image/jpm`.
	 * @type {String}
	 */
	static get IMAGE_JPM()
	{
		return 'image/jpm';
	}

	/**
	 * Represents the content type `image/jpx`.
	 * @type {String}
	 */
	static get IMAGE_JPX()
	{
		return 'image/jpx';
	}

	/**
	 * Represents the content type `image/ktx`.
	 * @type {String}
	 */
	static get IMAGE_KTX()
	{
		return 'image/ktx';
	}

	/**
	 * Represents the content type `image/naplps`.
	 * @type {String}
	 */
	static get IMAGE_NAPLPS()
	{
		return 'image/naplps';
	}

	/**
	 * Represents the content type `image/png`.
	 * @type {String}
	 */
	static get IMAGE_PNG()
	{
		return 'image/png';
	}

	/**
	 * Represents the content type `image/prs.btif`.
	 * @type {String}
	 */
	static get IMAGE_PRS_BTIF()
	{
		return 'image/prs.btif';
	}

	/**
	 * Represents the content type `image/prs.pti`.
	 * @type {String}
	 */
	static get IMAGE_PRS_PTI()
	{
		return 'image/prs.pti';
	}

	/**
	 * Represents the content type `image/pwg-raster`.
	 * @type {String}
	 */
	static get IMAGE_PWG_RASTER()
	{
		return 'image/pwg-raster';
	}

	/**
	 * Represents the content type `image/sgi`.
	 * @type {String}
	 */
	static get IMAGE_SGI()
	{
		return 'image/sgi';
	}

	/**
	 * Represents the content type `image/svg+xml`.
	 * @type {String}
	 */
	static get IMAGE_SVG_XML()
	{
		return 'image/svg+xml';
	}

	/**
	 * Represents the content type `image/t38`.
	 * @type {String}
	 */
	static get IMAGE_T38()
	{
		return 'image/t38';
	}

	/**
	 * Represents the content type `image/tiff`.
	 * @type {String}
	 */
	static get IMAGE_TIFF()
	{
		return 'image/tiff';
	}

	/**
	 * Represents the content type `image/tiff-fx`.
	 * @type {String}
	 */
	static get IMAGE_TIFF_FX()
	{
		return 'image/tiff-fx';
	}

	/**
	 * Represents the content type `image/vnd.adobe.photoshop`.
	 * @type {String}
	 */
	static get IMAGE_VND_ADOBE_PHOTOSHOP()
	{
		return 'image/vnd.adobe.photoshop';
	}

	/**
	 * Represents the content type `image/vnd.airzip.accelerator.azv`.
	 * @type {String}
	 */
	static get IMAGE_VND_AIRZIP_ACCELERATOR_AZV()
	{
		return 'image/vnd.airzip.accelerator.azv';
	}

	/**
	 * Represents the content type `image/vnd.cns.inf2`.
	 * @type {String}
	 */
	static get IMAGE_VND_CNS_INF2()
	{
		return 'image/vnd.cns.inf2';
	}

	/**
	 * Represents the content type `image/vnd.dece.graphic`.
	 * @type {String}
	 */
	static get IMAGE_VND_DECE_GRAPHIC()
	{
		return 'image/vnd.dece.graphic';
	}

	/**
	 * Represents the content type `image/vnd.djvu`.
	 * @type {String}
	 */
	static get IMAGE_VND_DJVU()
	{
		return 'image/vnd.djvu';
	}

	/**
	 * Represents the content type `image/vnd.dvb.subtitle`.
	 * @type {String}
	 */
	static get IMAGE_VND_DVB_SUBTITLE()
	{
		return 'image/vnd.dvb.subtitle';
	}

	/**
	 * Represents the content type `image/vnd.dwg`.
	 * @type {String}
	 */
	static get IMAGE_VND_DWG()
	{
		return 'image/vnd.dwg';
	}

	/**
	 * Represents the content type `image/vnd.dxf`.
	 * @type {String}
	 */
	static get IMAGE_VND_DXF()
	{
		return 'image/vnd.dxf';
	}

	/**
	 * Represents the content type `image/vnd.fastbidsheet`.
	 * @type {String}
	 */
	static get IMAGE_VND_FASTBIDSHEET()
	{
		return 'image/vnd.fastbidsheet';
	}

	/**
	 * Represents the content type `image/vnd.fpx`.
	 * @type {String}
	 */
	static get IMAGE_VND_FPX()
	{
		return 'image/vnd.fpx';
	}

	/**
	 * Represents the content type `image/vnd.fst`.
	 * @type {String}
	 */
	static get IMAGE_VND_FST()
	{
		return 'image/vnd.fst';
	}

	/**
	 * Represents the content type `image/vnd.fujixerox.edmics-mmr`.
	 * @type {String}
	 */
	static get IMAGE_VND_FUJIXEROX_EDMICS_MMR()
	{
		return 'image/vnd.fujixerox.edmics-mmr';
	}

	/**
	 * Represents the content type `image/vnd.fujixerox.edmics-rlc`.
	 * @type {String}
	 */
	static get IMAGE_VND_FUJIXEROX_EDMICS_RLC()
	{
		return 'image/vnd.fujixerox.edmics-rlc';
	}

	/**
	 * Represents the content type `image/vnd.globalgraphics.pgb`.
	 * @type {String}
	 */
	static get IMAGE_VND_GLOBALGRAPHICS_PGB()
	{
		return 'image/vnd.globalgraphics.pgb';
	}

	/**
	 * Represents the content type `image/vnd.microsoft.icon`.
	 * @type {String}
	 */
	static get IMAGE_VND_MICROSOFT_ICON()
	{
		return 'image/vnd.microsoft.icon';
	}

	/**
	 * Represents the content type `image/vnd.mix`.
	 * @type {String}
	 */
	static get IMAGE_VND_MIX()
	{
		return 'image/vnd.mix';
	}

	/**
	 * Represents the content type `image/vnd.mozilla.apng`.
	 * @type {String}
	 */
	static get IMAGE_VND_MOZILLA_APNG()
	{
		return 'image/vnd.mozilla.apng';
	}

	/**
	 * Represents the content type `image/vnd.ms-modi`.
	 * @type {String}
	 */
	static get IMAGE_VND_MS_MODI()
	{
		return 'image/vnd.ms-modi';
	}

	/**
	 * Represents the content type `image/vnd.ms-photo`.
	 * @type {String}
	 */
	static get IMAGE_VND_MS_PHOTO()
	{
		return 'image/vnd.ms-photo';
	}

	/**
	 * Represents the content type `image/vnd.net-fpx`.
	 * @type {String}
	 */
	static get IMAGE_VND_NET_FPX()
	{
		return 'image/vnd.net-fpx';
	}

	/**
	 * Represents the content type `image/vnd.radiance`.
	 * @type {String}
	 */
	static get IMAGE_VND_RADIANCE()
	{
		return 'image/vnd.radiance';
	}

	/**
	 * Represents the content type `image/vnd.sealed.png`.
	 * @type {String}
	 */
	static get IMAGE_VND_SEALED_PNG()
	{
		return 'image/vnd.sealed.png';
	}

	/**
	 * Represents the content type `image/vnd.sealedmedia.softseal.gif`.
	 * @type {String}
	 */
	static get IMAGE_VND_SEALEDMEDIA_SOFTSEAL_GIF()
	{
		return 'image/vnd.sealedmedia.softseal.gif';
	}

	/**
	 * Represents the content type `image/vnd.sealedmedia.softseal.jpg`.
	 * @type {String}
	 */
	static get IMAGE_VND_SEALEDMEDIA_SOFTSEAL_JPG()
	{
		return 'image/vnd.sealedmedia.softseal.jpg';
	}

	/**
	 * Represents the content type `image/vnd.svf`.
	 * @type {String}
	 */
	static get IMAGE_VND_SVF()
	{
		return 'image/vnd.svf';
	}

	/**
	 * Represents the content type `image/vnd.tencent.tap`.
	 * @type {String}
	 */
	static get IMAGE_VND_TENCENT_TAP()
	{
		return 'image/vnd.tencent.tap';
	}

	/**
	 * Represents the content type `image/vnd.valve.source.texture`.
	 * @type {String}
	 */
	static get IMAGE_VND_VALVE_SOURCE_TEXTURE()
	{
		return 'image/vnd.valve.source.texture';
	}

	/**
	 * Represents the content type `image/vnd.wap.wbmp`.
	 * @type {String}
	 */
	static get IMAGE_VND_WAP_WBMP()
	{
		return 'image/vnd.wap.wbmp';
	}

	/**
	 * Represents the content type `image/vnd.xiff`.
	 * @type {String}
	 */
	static get IMAGE_VND_XIFF()
	{
		return 'image/vnd.xiff';
	}

	/**
	 * Represents the content type `image/vnd.zbrush.pcx`.
	 * @type {String}
	 */
	static get IMAGE_VND_ZBRUSH_PCX()
	{
		return 'image/vnd.zbrush.pcx';
	}

	/**
	 * Represents the content type `image/webp`.
	 * @type {String}
	 */
	static get IMAGE_WEBP()
	{
		return 'image/webp';
	}

	/**
	 * Represents the content type `image/wmf`.
	 * @type {String}
	 */
	static get IMAGE_WMF()
	{
		return 'image/wmf';
	}

	/**
	 * Represents the content type `image/x-3ds`.
	 * @type {String}
	 */
	static get IMAGE_X_3DS()
	{
		return 'image/x-3ds';
	}

	/**
	 * Represents the content type `image/x-cmu-raster`.
	 * @type {String}
	 */
	static get IMAGE_X_CMU_RASTER()
	{
		return 'image/x-cmu-raster';
	}

	/**
	 * Represents the content type `image/x-cmx`.
	 * @type {String}
	 */
	static get IMAGE_X_CMX()
	{
		return 'image/x-cmx';
	}

	/**
	 * Represents the content type `image/x-freehand`.
	 * @type {String}
	 */
	static get IMAGE_X_FREEHAND()
	{
		return 'image/x-freehand';
	}

	/**
	 * Represents the content type `image/x-icon`.
	 * @type {String}
	 */
	static get IMAGE_X_ICON()
	{
		return 'image/x-icon';
	}

	/**
	 * Represents the content type `image/x-mrsid-image`.
	 * @type {String}
	 */
	static get IMAGE_X_MRSID_IMAGE()
	{
		return 'image/x-mrsid-image';
	}

	/**
	 * Represents the content type `image/x-pcx`.
	 * @type {String}
	 */
	static get IMAGE_X_PCX()
	{
		return 'image/x-pcx';
	}

	/**
	 * Represents the content type `image/x-pict`.
	 * @type {String}
	 */
	static get IMAGE_X_PICT()
	{
		return 'image/x-pict';
	}

	/**
	 * Represents the content type `image/x-portable-anymap`.
	 * @type {String}
	 */
	static get IMAGE_X_PORTABLE_ANYMAP()
	{
		return 'image/x-portable-anymap';
	}

	/**
	 * Represents the content type `image/x-portable-bitmap`.
	 * @type {String}
	 */
	static get IMAGE_X_PORTABLE_BITMAP()
	{
		return 'image/x-portable-bitmap';
	}

	/**
	 * Represents the content type `image/x-portable-graymap`.
	 * @type {String}
	 */
	static get IMAGE_X_PORTABLE_GRAYMAP()
	{
		return 'image/x-portable-graymap';
	}

	/**
	 * Represents the content type `image/x-portable-pixmap`.
	 * @type {String}
	 */
	static get IMAGE_X_PORTABLE_PIXMAP()
	{
		return 'image/x-portable-pixmap';
	}

	/**
	 * Represents the content type `image/x-rgb`.
	 * @type {String}
	 */
	static get IMAGE_X_RGB()
	{
		return 'image/x-rgb';
	}

	/**
	 * Represents the content type `image/x-tga`.
	 * @type {String}
	 */
	static get IMAGE_X_TGA()
	{
		return 'image/x-tga';
	}

	/**
	 * Represents the content type `image/x-xbitmap`.
	 * @type {String}
	 */
	static get IMAGE_X_XBITMAP()
	{
		return 'image/x-xbitmap';
	}

	/**
	 * Represents the content type `image/x-xpixmap`.
	 * @type {String}
	 */
	static get IMAGE_X_XPIXMAP()
	{
		return 'image/x-xpixmap';
	}

	/**
	 * Represents the content type `image/x-xwindowdump`.
	 * @type {String}
	 */
	static get IMAGE_X_XWINDOWDUMP()
	{
		return 'image/x-xwindowdump';
	}

	/**
	 * Represents the content type `message/cpim`.
	 * @type {String}
	 */
	static get MESSAGE_CPIM()
	{
		return 'message/cpim';
	}

	/**
	 * Represents the content type `message/delivery-status`.
	 * @type {String}
	 */
	static get MESSAGE_DELIVERY_STATUS()
	{
		return 'message/delivery-status';
	}

	/**
	 * Represents the content type `message/disposition-notification`.
	 * @type {String}
	 */
	static get MESSAGE_DISPOSITION_NOTIFICATION()
	{
		return 'message/disposition-notification';
	}

	/**
	 * Represents the content type `message/example`.
	 * @type {String}
	 */
	static get MESSAGE_EXAMPLE()
	{
		return 'message/example';
	}

	/**
	 * Represents the content type `message/external-body`.
	 * @type {String}
	 */
	static get MESSAGE_EXTERNAL_BODY()
	{
		return 'message/external-body';
	}

	/**
	 * Represents the content type `message/feedback-report`.
	 * @type {String}
	 */
	static get MESSAGE_FEEDBACK_REPORT()
	{
		return 'message/feedback-report';
	}

	/**
	 * Represents the content type `message/global`.
	 * @type {String}
	 */
	static get MESSAGE_GLOBAL()
	{
		return 'message/global';
	}

	/**
	 * Represents the content type `message/global-delivery-status`.
	 * @type {String}
	 */
	static get MESSAGE_GLOBAL_DELIVERY_STATUS()
	{
		return 'message/global-delivery-status';
	}

	/**
	 * Represents the content type `message/global-disposition-notification`.
	 * @type {String}
	 */
	static get MESSAGE_GLOBAL_DISPOSITION_NOTIFICATION()
	{
		return 'message/global-disposition-notification';
	}

	/**
	 * Represents the content type `message/global-headers`.
	 * @type {String}
	 */
	static get MESSAGE_GLOBAL_HEADERS()
	{
		return 'message/global-headers';
	}

	/**
	 * Represents the content type `message/http`.
	 * @type {String}
	 */
	static get MESSAGE_HTTP()
	{
		return 'message/http';
	}

	/**
	 * Represents the content type `message/imdn+xml`.
	 * @type {String}
	 */
	static get MESSAGE_IMDN_XML()
	{
		return 'message/imdn+xml';
	}

	/**
	 * Represents the content type `message/news`.
	 * @type {String}
	 */
	static get MESSAGE_NEWS()
	{
		return 'message/news';
	}

	/**
	 * Represents the content type `message/partial`.
	 * @type {String}
	 */
	static get MESSAGE_PARTIAL()
	{
		return 'message/partial';
	}

	/**
	 * Represents the content type `message/rfc822`.
	 * @type {String}
	 */
	static get MESSAGE_RFC822()
	{
		return 'message/rfc822';
	}

	/**
	 * Represents the content type `message/s-http`.
	 * @type {String}
	 */
	static get MESSAGE_S_HTTP()
	{
		return 'message/s-http';
	}

	/**
	 * Represents the content type `message/sip`.
	 * @type {String}
	 */
	static get MESSAGE_SIP()
	{
		return 'message/sip';
	}

	/**
	 * Represents the content type `message/sipfrag`.
	 * @type {String}
	 */
	static get MESSAGE_SIPFRAG()
	{
		return 'message/sipfrag';
	}

	/**
	 * Represents the content type `message/tracking-status`.
	 * @type {String}
	 */
	static get MESSAGE_TRACKING_STATUS()
	{
		return 'message/tracking-status';
	}

	/**
	 * Represents the content type `message/vnd.si.simp`.
	 * @type {String}
	 */
	static get MESSAGE_VND_SI_SIMP()
	{
		return 'message/vnd.si.simp';
	}

	/**
	 * Represents the content type `message/vnd.wfa.wsc`.
	 * @type {String}
	 */
	static get MESSAGE_VND_WFA_WSC()
	{
		return 'message/vnd.wfa.wsc';
	}

	/**
	 * Represents the content type `model/example`.
	 * @type {String}
	 */
	static get MODEL_EXAMPLE()
	{
		return 'model/example';
	}

	/**
	 * Represents the content type `model/gltf+json`.
	 * @type {String}
	 */
	static get MODEL_GLTF_JSON()
	{
		return 'model/gltf+json';
	}

	/**
	 * Represents the content type `model/iges`.
	 * @type {String}
	 */
	static get MODEL_IGES()
	{
		return 'model/iges';
	}

	/**
	 * Represents the content type `model/mesh`.
	 * @type {String}
	 */
	static get MODEL_MESH()
	{
		return 'model/mesh';
	}

	/**
	 * Represents the content type `model/vnd.collada+xml`.
	 * @type {String}
	 */
	static get MODEL_VND_COLLADA_XML()
	{
		return 'model/vnd.collada+xml';
	}

	/**
	 * Represents the content type `model/vnd.dwf`.
	 * @type {String}
	 */
	static get MODEL_VND_DWF()
	{
		return 'model/vnd.dwf';
	}

	/**
	 * Represents the content type `model/vnd.flatland.3dml`.
	 * @type {String}
	 */
	static get MODEL_VND_FLATLAND_3DML()
	{
		return 'model/vnd.flatland.3dml';
	}

	/**
	 * Represents the content type `model/vnd.gdl`.
	 * @type {String}
	 */
	static get MODEL_VND_GDL()
	{
		return 'model/vnd.gdl';
	}

	/**
	 * Represents the content type `model/vnd.gs-gdl`.
	 * @type {String}
	 */
	static get MODEL_VND_GS_GDL()
	{
		return 'model/vnd.gs-gdl';
	}

	/**
	 * Represents the content type `model/vnd.gs.gdl`.
	 * @type {String}
	 */
	static get MODEL_VND_GS_GDL()
	{
		return 'model/vnd.gs.gdl';
	}

	/**
	 * Represents the content type `model/vnd.gtw`.
	 * @type {String}
	 */
	static get MODEL_VND_GTW()
	{
		return 'model/vnd.gtw';
	}

	/**
	 * Represents the content type `model/vnd.moml+xml`.
	 * @type {String}
	 */
	static get MODEL_VND_MOML_XML()
	{
		return 'model/vnd.moml+xml';
	}

	/**
	 * Represents the content type `model/vnd.mts`.
	 * @type {String}
	 */
	static get MODEL_VND_MTS()
	{
		return 'model/vnd.mts';
	}

	/**
	 * Represents the content type `model/vnd.opengex`.
	 * @type {String}
	 */
	static get MODEL_VND_OPENGEX()
	{
		return 'model/vnd.opengex';
	}

	/**
	 * Represents the content type `model/vnd.parasolid.transmit.binary`.
	 * @type {String}
	 */
	static get MODEL_VND_PARASOLID_TRANSMIT_BINARY()
	{
		return 'model/vnd.parasolid.transmit.binary';
	}

	/**
	 * Represents the content type `model/vnd.parasolid.transmit.text`.
	 * @type {String}
	 */
	static get MODEL_VND_PARASOLID_TRANSMIT_TEXT()
	{
		return 'model/vnd.parasolid.transmit.text';
	}

	/**
	 * Represents the content type `model/vnd.rosette.annotated-data-model`.
	 * @type {String}
	 */
	static get MODEL_VND_ROSETTE_ANNOTATED_DATA_MODEL()
	{
		return 'model/vnd.rosette.annotated-data-model';
	}

	/**
	 * Represents the content type `model/vnd.valve.source.compiled-map`.
	 * @type {String}
	 */
	static get MODEL_VND_VALVE_SOURCE_COMPILED_MAP()
	{
		return 'model/vnd.valve.source.compiled-map';
	}

	/**
	 * Represents the content type `model/vnd.vtu`.
	 * @type {String}
	 */
	static get MODEL_VND_VTU()
	{
		return 'model/vnd.vtu';
	}

	/**
	 * Represents the content type `model/vrml`.
	 * @type {String}
	 */
	static get MODEL_VRML()
	{
		return 'model/vrml';
	}

	/**
	 * Represents the content type `model/x3d+binary`.
	 * @type {String}
	 */
	static get MODEL_X3D_BINARY()
	{
		return 'model/x3d+binary';
	}

	/**
	 * Represents the content type `model/x3d+fastinfoset`.
	 * @type {String}
	 */
	static get MODEL_X3D_FASTINFOSET()
	{
		return 'model/x3d+fastinfoset';
	}

	/**
	 * Represents the content type `model/x3d+vrml`.
	 * @type {String}
	 */
	static get MODEL_X3D_VRML()
	{
		return 'model/x3d+vrml';
	}

	/**
	 * Represents the content type `model/x3d+xml`.
	 * @type {String}
	 */
	static get MODEL_X3D_XML()
	{
		return 'model/x3d+xml';
	}

	/**
	 * Represents the content type `model/x3d-vrml`.
	 * @type {String}
	 */
	static get MODEL_X3D_VRML()
	{
		return 'model/x3d-vrml';
	}

	/**
	 * Represents the content type `multipart/alternative`.
	 * @type {String}
	 */
	static get MULTIPART_ALTERNATIVE()
	{
		return 'multipart/alternative';
	}

	/**
	 * Represents the content type `multipart/appledouble`.
	 * @type {String}
	 */
	static get MULTIPART_APPLEDOUBLE()
	{
		return 'multipart/appledouble';
	}

	/**
	 * Represents the content type `multipart/byteranges`.
	 * @type {String}
	 */
	static get MULTIPART_BYTERANGES()
	{
		return 'multipart/byteranges';
	}

	/**
	 * Represents the content type `multipart/digest`.
	 * @type {String}
	 */
	static get MULTIPART_DIGEST()
	{
		return 'multipart/digest';
	}

	/**
	 * Represents the content type `multipart/encrypted`.
	 * @type {String}
	 */
	static get MULTIPART_ENCRYPTED()
	{
		return 'multipart/encrypted';
	}

	/**
	 * Represents the content type `multipart/example`.
	 * @type {String}
	 */
	static get MULTIPART_EXAMPLE()
	{
		return 'multipart/example';
	}

	/**
	 * Represents the content type `multipart/form-data`.
	 * @type {String}
	 */
	static get MULTIPART_FORM_DATA()
	{
		return 'multipart/form-data';
	}

	/**
	 * Represents the content type `multipart/header-set`.
	 * @type {String}
	 */
	static get MULTIPART_HEADER_SET()
	{
		return 'multipart/header-set';
	}

	/**
	 * Represents the content type `multipart/mixed`.
	 * @type {String}
	 */
	static get MULTIPART_MIXED()
	{
		return 'multipart/mixed';
	}

	/**
	 * Represents the content type `multipart/parallel`.
	 * @type {String}
	 */
	static get MULTIPART_PARALLEL()
	{
		return 'multipart/parallel';
	}

	/**
	 * Represents the content type `multipart/related`.
	 * @type {String}
	 */
	static get MULTIPART_RELATED()
	{
		return 'multipart/related';
	}

	/**
	 * Represents the content type `multipart/report`.
	 * @type {String}
	 */
	static get MULTIPART_REPORT()
	{
		return 'multipart/report';
	}

	/**
	 * Represents the content type `multipart/signed`.
	 * @type {String}
	 */
	static get MULTIPART_SIGNED()
	{
		return 'multipart/signed';
	}

	/**
	 * Represents the content type `multipart/voice-message`.
	 * @type {String}
	 */
	static get MULTIPART_VOICE_MESSAGE()
	{
		return 'multipart/voice-message';
	}

	/**
	 * Represents the content type `multipart/x-mixed-replace`.
	 * @type {String}
	 */
	static get MULTIPART_X_MIXED_REPLACE()
	{
		return 'multipart/x-mixed-replace';
	}

	/**
	 * Represents the content type `text/1d-interleaved-parityfec`.
	 * @type {String}
	 */
	static get TEXT_1D_INTERLEAVED_PARITYFEC()
	{
		return 'text/1d-interleaved-parityfec';
	}

	/**
	 * Represents the content type `text/cache-manifest`.
	 * @type {String}
	 */
	static get TEXT_CACHE_MANIFEST()
	{
		return 'text/cache-manifest';
	}

	/**
	 * Represents the content type `text/calendar`.
	 * @type {String}
	 */
	static get TEXT_CALENDAR()
	{
		return 'text/calendar';
	}

	/**
	 * Represents the content type `text/css`.
	 * @type {String}
	 */
	static get TEXT_CSS()
	{
		return 'text/css';
	}

	/**
	 * Represents the content type `text/csv`.
	 * @type {String}
	 */
	static get TEXT_CSV()
	{
		return 'text/csv';
	}

	/**
	 * Represents the content type `text/csv-schema`.
	 * @type {String}
	 */
	static get TEXT_CSV_SCHEMA()
	{
		return 'text/csv-schema';
	}

	/**
	 * Represents the content type `text/directory`.
	 * @type {String}
	 */
	static get TEXT_DIRECTORY()
	{
		return 'text/directory';
	}

	/**
	 * Represents the content type `text/dns`.
	 * @type {String}
	 */
	static get TEXT_DNS()
	{
		return 'text/dns';
	}

	/**
	 * Represents the content type `text/ecmascript`.
	 * @type {String}
	 */
	static get TEXT_ECMASCRIPT()
	{
		return 'text/ecmascript';
	}

	/**
	 * Represents the content type `text/encaprtp`.
	 * @type {String}
	 */
	static get TEXT_ENCAPRTP()
	{
		return 'text/encaprtp';
	}

	/**
	 * Represents the content type `text/enriched`.
	 * @type {String}
	 */
	static get TEXT_ENRICHED()
	{
		return 'text/enriched';
	}

	/**
	 * Represents the content type `text/example`.
	 * @type {String}
	 */
	static get TEXT_EXAMPLE()
	{
		return 'text/example';
	}

	/**
	 * Represents the content type `text/fwdred`.
	 * @type {String}
	 */
	static get TEXT_FWDRED()
	{
		return 'text/fwdred';
	}

	/**
	 * Represents the content type `text/grammar-ref-list`.
	 * @type {String}
	 */
	static get TEXT_GRAMMAR_REF_LIST()
	{
		return 'text/grammar-ref-list';
	}

	/**
	 * Represents the content type `text/html`.
	 * @type {String}
	 */
	static get TEXT_HTML()
	{
		return 'text/html';
	}

	/**
	 * Represents the content type `text/javascript`.
	 * @type {String}
	 */
	static get TEXT_JAVASCRIPT()
	{
		return 'text/javascript';
	}

	/**
	 * Represents the content type `text/jcr-cnd`.
	 * @type {String}
	 */
	static get TEXT_JCR_CND()
	{
		return 'text/jcr-cnd';
	}

	/**
	 * Represents the content type `text/markdown`.
	 * @type {String}
	 */
	static get TEXT_MARKDOWN()
	{
		return 'text/markdown';
	}

	/**
	 * Represents the content type `text/mizar`.
	 * @type {String}
	 */
	static get TEXT_MIZAR()
	{
		return 'text/mizar';
	}

	/**
	 * Represents the content type `text/n3`.
	 * @type {String}
	 */
	static get TEXT_N3()
	{
		return 'text/n3';
	}

	/**
	 * Represents the content type `text/parameters`.
	 * @type {String}
	 */
	static get TEXT_PARAMETERS()
	{
		return 'text/parameters';
	}

	/**
	 * Represents the content type `text/parityfec`.
	 * @type {String}
	 */
	static get TEXT_PARITYFEC()
	{
		return 'text/parityfec';
	}

	/**
	 * Represents the content type `text/plain`.
	 * @type {String}
	 */
	static get TEXT_PLAIN()
	{
		return 'text/plain';
	}

	/**
	 * Represents the content type `text/provenance-notation`.
	 * @type {String}
	 */
	static get TEXT_PROVENANCE_NOTATION()
	{
		return 'text/provenance-notation';
	}

	/**
	 * Represents the content type `text/prs.fallenstein.rst`.
	 * @type {String}
	 */
	static get TEXT_PRS_FALLENSTEIN_RST()
	{
		return 'text/prs.fallenstein.rst';
	}

	/**
	 * Represents the content type `text/prs.lines.tag`.
	 * @type {String}
	 */
	static get TEXT_PRS_LINES_TAG()
	{
		return 'text/prs.lines.tag';
	}

	/**
	 * Represents the content type `text/prs.prop.logic`.
	 * @type {String}
	 */
	static get TEXT_PRS_PROP_LOGIC()
	{
		return 'text/prs.prop.logic';
	}

	/**
	 * Represents the content type `text/raptorfec`.
	 * @type {String}
	 */
	static get TEXT_RAPTORFEC()
	{
		return 'text/raptorfec';
	}

	/**
	 * Represents the content type `text/red`.
	 * @type {String}
	 */
	static get TEXT_RED()
	{
		return 'text/red';
	}

	/**
	 * Represents the content type `text/rfc822-headers`.
	 * @type {String}
	 */
	static get TEXT_RFC822_HEADERS()
	{
		return 'text/rfc822-headers';
	}

	/**
	 * Represents the content type `text/richtext`.
	 * @type {String}
	 */
	static get TEXT_RICHTEXT()
	{
		return 'text/richtext';
	}

	/**
	 * Represents the content type `text/rtf`.
	 * @type {String}
	 */
	static get TEXT_RTF()
	{
		return 'text/rtf';
	}

	/**
	 * Represents the content type `text/rtp-enc-aescm128`.
	 * @type {String}
	 */
	static get TEXT_RTP_ENC_AESCM128()
	{
		return 'text/rtp-enc-aescm128';
	}

	/**
	 * Represents the content type `text/rtploopback`.
	 * @type {String}
	 */
	static get TEXT_RTPLOOPBACK()
	{
		return 'text/rtploopback';
	}

	/**
	 * Represents the content type `text/rtx`.
	 * @type {String}
	 */
	static get TEXT_RTX()
	{
		return 'text/rtx';
	}

	/**
	 * Represents the content type `text/sgml`.
	 * @type {String}
	 */
	static get TEXT_SGML()
	{
		return 'text/sgml';
	}

	/**
	 * Represents the content type `text/t140`.
	 * @type {String}
	 */
	static get TEXT_T140()
	{
		return 'text/t140';
	}

	/**
	 * Represents the content type `text/tab-separated-values`.
	 * @type {String}
	 */
	static get TEXT_TAB_SEPARATED_VALUES()
	{
		return 'text/tab-separated-values';
	}

	/**
	 * Represents the content type `text/troff`.
	 * @type {String}
	 */
	static get TEXT_TROFF()
	{
		return 'text/troff';
	}

	/**
	 * Represents the content type `text/turtle`.
	 * @type {String}
	 */
	static get TEXT_TURTLE()
	{
		return 'text/turtle';
	}

	/**
	 * Represents the content type `text/ulpfec`.
	 * @type {String}
	 */
	static get TEXT_ULPFEC()
	{
		return 'text/ulpfec';
	}

	/**
	 * Represents the content type `text/uri-list`.
	 * @type {String}
	 */
	static get TEXT_URI_LIST()
	{
		return 'text/uri-list';
	}

	/**
	 * Represents the content type `text/vcard`.
	 * @type {String}
	 */
	static get TEXT_VCARD()
	{
		return 'text/vcard';
	}

	/**
	 * Represents the content type `text/vnd.a`.
	 * @type {String}
	 */
	static get TEXT_VND_A()
	{
		return 'text/vnd.a';
	}

	/**
	 * Represents the content type `text/vnd.abc`.
	 * @type {String}
	 */
	static get TEXT_VND_ABC()
	{
		return 'text/vnd.abc';
	}

	/**
	 * Represents the content type `text/vnd.curl`.
	 * @type {String}
	 */
	static get TEXT_VND_CURL()
	{
		return 'text/vnd.curl';
	}

	/**
	 * Represents the content type `text/vnd.curl.dcurl`.
	 * @type {String}
	 */
	static get TEXT_VND_CURL_DCURL()
	{
		return 'text/vnd.curl.dcurl';
	}

	/**
	 * Represents the content type `text/vnd.curl.mcurl`.
	 * @type {String}
	 */
	static get TEXT_VND_CURL_MCURL()
	{
		return 'text/vnd.curl.mcurl';
	}

	/**
	 * Represents the content type `text/vnd.curl.scurl`.
	 * @type {String}
	 */
	static get TEXT_VND_CURL_SCURL()
	{
		return 'text/vnd.curl.scurl';
	}

	/**
	 * Represents the content type `text/vnd.debian.copyright`.
	 * @type {String}
	 */
	static get TEXT_VND_DEBIAN_COPYRIGHT()
	{
		return 'text/vnd.debian.copyright';
	}

	/**
	 * Represents the content type `text/vnd.dmclientscript`.
	 * @type {String}
	 */
	static get TEXT_VND_DMCLIENTSCRIPT()
	{
		return 'text/vnd.dmclientscript';
	}

	/**
	 * Represents the content type `text/vnd.dvb.subtitle`.
	 * @type {String}
	 */
	static get TEXT_VND_DVB_SUBTITLE()
	{
		return 'text/vnd.dvb.subtitle';
	}

	/**
	 * Represents the content type `text/vnd.esmertec.theme-descriptor`.
	 * @type {String}
	 */
	static get TEXT_VND_ESMERTEC_THEME_DESCRIPTOR()
	{
		return 'text/vnd.esmertec.theme-descriptor';
	}

	/**
	 * Represents the content type `text/vnd.fly`.
	 * @type {String}
	 */
	static get TEXT_VND_FLY()
	{
		return 'text/vnd.fly';
	}

	/**
	 * Represents the content type `text/vnd.fmi.flexstor`.
	 * @type {String}
	 */
	static get TEXT_VND_FMI_FLEXSTOR()
	{
		return 'text/vnd.fmi.flexstor';
	}

	/**
	 * Represents the content type `text/vnd.graphviz`.
	 * @type {String}
	 */
	static get TEXT_VND_GRAPHVIZ()
	{
		return 'text/vnd.graphviz';
	}

	/**
	 * Represents the content type `text/vnd.in3d.3dml`.
	 * @type {String}
	 */
	static get TEXT_VND_IN3D_3DML()
	{
		return 'text/vnd.in3d.3dml';
	}

	/**
	 * Represents the content type `text/vnd.in3d.spot`.
	 * @type {String}
	 */
	static get TEXT_VND_IN3D_SPOT()
	{
		return 'text/vnd.in3d.spot';
	}

	/**
	 * Represents the content type `text/vnd.iptc.newsml`.
	 * @type {String}
	 */
	static get TEXT_VND_IPTC_NEWSML()
	{
		return 'text/vnd.iptc.newsml';
	}

	/**
	 * Represents the content type `text/vnd.iptc.nitf`.
	 * @type {String}
	 */
	static get TEXT_VND_IPTC_NITF()
	{
		return 'text/vnd.iptc.nitf';
	}

	/**
	 * Represents the content type `text/vnd.latex-z`.
	 * @type {String}
	 */
	static get TEXT_VND_LATEX_Z()
	{
		return 'text/vnd.latex-z';
	}

	/**
	 * Represents the content type `text/vnd.motorola.reflex`.
	 * @type {String}
	 */
	static get TEXT_VND_MOTOROLA_REFLEX()
	{
		return 'text/vnd.motorola.reflex';
	}

	/**
	 * Represents the content type `text/vnd.ms-mediapackage`.
	 * @type {String}
	 */
	static get TEXT_VND_MS_MEDIAPACKAGE()
	{
		return 'text/vnd.ms-mediapackage';
	}

	/**
	 * Represents the content type `text/vnd.net2phone.commcenter.command`.
	 * @type {String}
	 */
	static get TEXT_VND_NET2PHONE_COMMCENTER_COMMAND()
	{
		return 'text/vnd.net2phone.commcenter.command';
	}

	/**
	 * Represents the content type `text/vnd.radisys.msml-basic-layout`.
	 * @type {String}
	 */
	static get TEXT_VND_RADISYS_MSML_BASIC_LAYOUT()
	{
		return 'text/vnd.radisys.msml-basic-layout';
	}

	/**
	 * Represents the content type `text/vnd.si.uricatalogue`.
	 * @type {String}
	 */
	static get TEXT_VND_SI_URICATALOGUE()
	{
		return 'text/vnd.si.uricatalogue';
	}

	/**
	 * Represents the content type `text/vnd.sun.j2me.app-descriptor`.
	 * @type {String}
	 */
	static get TEXT_VND_SUN_J2ME_APP_DESCRIPTOR()
	{
		return 'text/vnd.sun.j2me.app-descriptor';
	}

	/**
	 * Represents the content type `text/vnd.trolltech.linguist`.
	 * @type {String}
	 */
	static get TEXT_VND_TROLLTECH_LINGUIST()
	{
		return 'text/vnd.trolltech.linguist';
	}

	/**
	 * Represents the content type `text/vnd.wap.si`.
	 * @type {String}
	 */
	static get TEXT_VND_WAP_SI()
	{
		return 'text/vnd.wap.si';
	}

	/**
	 * Represents the content type `text/vnd.wap.sl`.
	 * @type {String}
	 */
	static get TEXT_VND_WAP_SL()
	{
		return 'text/vnd.wap.sl';
	}

	/**
	 * Represents the content type `text/vnd.wap.wml`.
	 * @type {String}
	 */
	static get TEXT_VND_WAP_WML()
	{
		return 'text/vnd.wap.wml';
	}

	/**
	 * Represents the content type `text/vnd.wap.wmlscript`.
	 * @type {String}
	 */
	static get TEXT_VND_WAP_WMLSCRIPT()
	{
		return 'text/vnd.wap.wmlscript';
	}

	/**
	 * Represents the content type `text/x-asm`.
	 * @type {String}
	 */
	static get TEXT_X_ASM()
	{
		return 'text/x-asm';
	}

	/**
	 * Represents the content type `text/x-c`.
	 * @type {String}
	 */
	static get TEXT_X_C()
	{
		return 'text/x-c';
	}

	/**
	 * Represents the content type `text/x-fortran`.
	 * @type {String}
	 */
	static get TEXT_X_FORTRAN()
	{
		return 'text/x-fortran';
	}

	/**
	 * Represents the content type `text/x-java-source`.
	 * @type {String}
	 */
	static get TEXT_X_JAVA_SOURCE()
	{
		return 'text/x-java-source';
	}

	/**
	 * Represents the content type `text/x-nfo`.
	 * @type {String}
	 */
	static get TEXT_X_NFO()
	{
		return 'text/x-nfo';
	}

	/**
	 * Represents the content type `text/x-opml`.
	 * @type {String}
	 */
	static get TEXT_X_OPML()
	{
		return 'text/x-opml';
	}

	/**
	 * Represents the content type `text/x-pascal`.
	 * @type {String}
	 */
	static get TEXT_X_PASCAL()
	{
		return 'text/x-pascal';
	}

	/**
	 * Represents the content type `text/x-setext`.
	 * @type {String}
	 */
	static get TEXT_X_SETEXT()
	{
		return 'text/x-setext';
	}

	/**
	 * Represents the content type `text/x-sfv`.
	 * @type {String}
	 */
	static get TEXT_X_SFV()
	{
		return 'text/x-sfv';
	}

	/**
	 * Represents the content type `text/x-uuencode`.
	 * @type {String}
	 */
	static get TEXT_X_UUENCODE()
	{
		return 'text/x-uuencode';
	}

	/**
	 * Represents the content type `text/x-vcalendar`.
	 * @type {String}
	 */
	static get TEXT_X_VCALENDAR()
	{
		return 'text/x-vcalendar';
	}

	/**
	 * Represents the content type `text/x-vcard`.
	 * @type {String}
	 */
	static get TEXT_X_VCARD()
	{
		return 'text/x-vcard';
	}

	/**
	 * Represents the content type `text/xml`.
	 * @type {String}
	 */
	static get TEXT_XML()
	{
		return 'text/xml';
	}

	/**
	 * Represents the content type `text/xml-external-parsed-entity`.
	 * @type {String}
	 */
	static get TEXT_XML_EXTERNAL_PARSED_ENTITY()
	{
		return 'text/xml-external-parsed-entity';
	}

	/**
	 * Represents the content type `video/1d-interleaved-parityfec`.
	 * @type {String}
	 */
	static get VIDEO_1D_INTERLEAVED_PARITYFEC()
	{
		return 'video/1d-interleaved-parityfec';
	}

	/**
	 * Represents the content type `video/3gpp`.
	 * @type {String}
	 */
	static get VIDEO_3GPP()
	{
		return 'video/3gpp';
	}

	/**
	 * Represents the content type `video/3gpp-tt`.
	 * @type {String}
	 */
	static get VIDEO_3GPP_TT()
	{
		return 'video/3gpp-tt';
	}

	/**
	 * Represents the content type `video/3gpp2`.
	 * @type {String}
	 */
	static get VIDEO_3GPP2()
	{
		return 'video/3gpp2';
	}

	/**
	 * Represents the content type `video/bmpeg`.
	 * @type {String}
	 */
	static get VIDEO_BMPEG()
	{
		return 'video/bmpeg';
	}

	/**
	 * Represents the content type `video/bt656`.
	 * @type {String}
	 */
	static get VIDEO_BT656()
	{
		return 'video/bt656';
	}

	/**
	 * Represents the content type `video/celb`.
	 * @type {String}
	 */
	static get VIDEO_CELB()
	{
		return 'video/celb';
	}

	/**
	 * Represents the content type `video/dv`.
	 * @type {String}
	 */
	static get VIDEO_DV()
	{
		return 'video/dv';
	}

	/**
	 * Represents the content type `video/encaprtp`.
	 * @type {String}
	 */
	static get VIDEO_ENCAPRTP()
	{
		return 'video/encaprtp';
	}

	/**
	 * Represents the content type `video/example`.
	 * @type {String}
	 */
	static get VIDEO_EXAMPLE()
	{
		return 'video/example';
	}

	/**
	 * Represents the content type `video/h261`.
	 * @type {String}
	 */
	static get VIDEO_H261()
	{
		return 'video/h261';
	}

	/**
	 * Represents the content type `video/h263`.
	 * @type {String}
	 */
	static get VIDEO_H263()
	{
		return 'video/h263';
	}

	/**
	 * Represents the content type `video/h263-1998`.
	 * @type {String}
	 */
	static get VIDEO_H263_1998()
	{
		return 'video/h263-1998';
	}

	/**
	 * Represents the content type `video/h263-2000`.
	 * @type {String}
	 */
	static get VIDEO_H263_2000()
	{
		return 'video/h263-2000';
	}

	/**
	 * Represents the content type `video/h264`.
	 * @type {String}
	 */
	static get VIDEO_H264()
	{
		return 'video/h264';
	}

	/**
	 * Represents the content type `video/h264-rcdo`.
	 * @type {String}
	 */
	static get VIDEO_H264_RCDO()
	{
		return 'video/h264-rcdo';
	}

	/**
	 * Represents the content type `video/h264-svc`.
	 * @type {String}
	 */
	static get VIDEO_H264_SVC()
	{
		return 'video/h264-svc';
	}

	/**
	 * Represents the content type `video/h265`.
	 * @type {String}
	 */
	static get VIDEO_H265()
	{
		return 'video/h265';
	}

	/**
	 * Represents the content type `video/iso.segment`.
	 * @type {String}
	 */
	static get VIDEO_ISO_SEGMENT()
	{
		return 'video/iso.segment';
	}

	/**
	 * Represents the content type `video/jpeg`.
	 * @type {String}
	 */
	static get VIDEO_JPEG()
	{
		return 'video/jpeg';
	}

	/**
	 * Represents the content type `video/jpeg2000`.
	 * @type {String}
	 */
	static get VIDEO_JPEG2000()
	{
		return 'video/jpeg2000';
	}

	/**
	 * Represents the content type `video/jpm`.
	 * @type {String}
	 */
	static get VIDEO_JPM()
	{
		return 'video/jpm';
	}

	/**
	 * Represents the content type `video/mj2`.
	 * @type {String}
	 */
	static get VIDEO_MJ2()
	{
		return 'video/mj2';
	}

	/**
	 * Represents the content type `video/mp1s`.
	 * @type {String}
	 */
	static get VIDEO_MP1S()
	{
		return 'video/mp1s';
	}

	/**
	 * Represents the content type `video/mp2p`.
	 * @type {String}
	 */
	static get VIDEO_MP2P()
	{
		return 'video/mp2p';
	}

	/**
	 * Represents the content type `video/mp2t`.
	 * @type {String}
	 */
	static get VIDEO_MP2T()
	{
		return 'video/mp2t';
	}

	/**
	 * Represents the content type `video/mp4`.
	 * @type {String}
	 */
	static get VIDEO_MP4()
	{
		return 'video/mp4';
	}

	/**
	 * Represents the content type `video/mp4v-es`.
	 * @type {String}
	 */
	static get VIDEO_MP4V_ES()
	{
		return 'video/mp4v-es';
	}

	/**
	 * Represents the content type `video/mpeg`.
	 * @type {String}
	 */
	static get VIDEO_MPEG()
	{
		return 'video/mpeg';
	}

	/**
	 * Represents the content type `video/mpeg4-generic`.
	 * @type {String}
	 */
	static get VIDEO_MPEG4_GENERIC()
	{
		return 'video/mpeg4-generic';
	}

	/**
	 * Represents the content type `video/mpv`.
	 * @type {String}
	 */
	static get VIDEO_MPV()
	{
		return 'video/mpv';
	}

	/**
	 * Represents the content type `video/nv`.
	 * @type {String}
	 */
	static get VIDEO_NV()
	{
		return 'video/nv';
	}

	/**
	 * Represents the content type `video/ogg`.
	 * @type {String}
	 */
	static get VIDEO_OGG()
	{
		return 'video/ogg';
	}

	/**
	 * Represents the content type `video/parityfec`.
	 * @type {String}
	 */
	static get VIDEO_PARITYFEC()
	{
		return 'video/parityfec';
	}

	/**
	 * Represents the content type `video/pointer`.
	 * @type {String}
	 */
	static get VIDEO_POINTER()
	{
		return 'video/pointer';
	}

	/**
	 * Represents the content type `video/quicktime`.
	 * @type {String}
	 */
	static get VIDEO_QUICKTIME()
	{
		return 'video/quicktime';
	}

	/**
	 * Represents the content type `video/raptorfec`.
	 * @type {String}
	 */
	static get VIDEO_RAPTORFEC()
	{
		return 'video/raptorfec';
	}

	/**
	 * Represents the content type `video/raw`.
	 * @type {String}
	 */
	static get VIDEO_RAW()
	{
		return 'video/raw';
	}

	/**
	 * Represents the content type `video/rtp-enc-aescm128`.
	 * @type {String}
	 */
	static get VIDEO_RTP_ENC_AESCM128()
	{
		return 'video/rtp-enc-aescm128';
	}

	/**
	 * Represents the content type `video/rtploopback`.
	 * @type {String}
	 */
	static get VIDEO_RTPLOOPBACK()
	{
		return 'video/rtploopback';
	}

	/**
	 * Represents the content type `video/rtx`.
	 * @type {String}
	 */
	static get VIDEO_RTX()
	{
		return 'video/rtx';
	}

	/**
	 * Represents the content type `video/smpte292m`.
	 * @type {String}
	 */
	static get VIDEO_SMPTE292M()
	{
		return 'video/smpte292m';
	}

	/**
	 * Represents the content type `video/ulpfec`.
	 * @type {String}
	 */
	static get VIDEO_ULPFEC()
	{
		return 'video/ulpfec';
	}

	/**
	 * Represents the content type `video/vc1`.
	 * @type {String}
	 */
	static get VIDEO_VC1()
	{
		return 'video/vc1';
	}

	/**
	 * Represents the content type `video/vnd.cctv`.
	 * @type {String}
	 */
	static get VIDEO_VND_CCTV()
	{
		return 'video/vnd.cctv';
	}

	/**
	 * Represents the content type `video/vnd.dece.hd`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_HD()
	{
		return 'video/vnd.dece.hd';
	}

	/**
	 * Represents the content type `video/vnd.dece.mobile`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_MOBILE()
	{
		return 'video/vnd.dece.mobile';
	}

	/**
	 * Represents the content type `video/vnd.dece.mp4`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_MP4()
	{
		return 'video/vnd.dece.mp4';
	}

	/**
	 * Represents the content type `video/vnd.dece.pd`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_PD()
	{
		return 'video/vnd.dece.pd';
	}

	/**
	 * Represents the content type `video/vnd.dece.sd`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_SD()
	{
		return 'video/vnd.dece.sd';
	}

	/**
	 * Represents the content type `video/vnd.dece.video`.
	 * @type {String}
	 */
	static get VIDEO_VND_DECE_VIDEO()
	{
		return 'video/vnd.dece.video';
	}

	/**
	 * Represents the content type `video/vnd.directv.mpeg`.
	 * @type {String}
	 */
	static get VIDEO_VND_DIRECTV_MPEG()
	{
		return 'video/vnd.directv.mpeg';
	}

	/**
	 * Represents the content type `video/vnd.directv.mpeg-tts`.
	 * @type {String}
	 */
	static get VIDEO_VND_DIRECTV_MPEG_TTS()
	{
		return 'video/vnd.directv.mpeg-tts';
	}

	/**
	 * Represents the content type `video/vnd.dlna.mpeg-tts`.
	 * @type {String}
	 */
	static get VIDEO_VND_DLNA_MPEG_TTS()
	{
		return 'video/vnd.dlna.mpeg-tts';
	}

	/**
	 * Represents the content type `video/vnd.dvb.file`.
	 * @type {String}
	 */
	static get VIDEO_VND_DVB_FILE()
	{
		return 'video/vnd.dvb.file';
	}

	/**
	 * Represents the content type `video/vnd.fvt`.
	 * @type {String}
	 */
	static get VIDEO_VND_FVT()
	{
		return 'video/vnd.fvt';
	}

	/**
	 * Represents the content type `video/vnd.hns.video`.
	 * @type {String}
	 */
	static get VIDEO_VND_HNS_VIDEO()
	{
		return 'video/vnd.hns.video';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.1dparityfec-1010`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_1DPARITYFEC_1010()
	{
		return 'video/vnd.iptvforum.1dparityfec-1010';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.1dparityfec-2005`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_1DPARITYFEC_2005()
	{
		return 'video/vnd.iptvforum.1dparityfec-2005';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.2dparityfec-1010`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_2DPARITYFEC_1010()
	{
		return 'video/vnd.iptvforum.2dparityfec-1010';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.2dparityfec-2005`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_2DPARITYFEC_2005()
	{
		return 'video/vnd.iptvforum.2dparityfec-2005';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.ttsavc`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_TTSAVC()
	{
		return 'video/vnd.iptvforum.ttsavc';
	}

	/**
	 * Represents the content type `video/vnd.iptvforum.ttsmpeg2`.
	 * @type {String}
	 */
	static get VIDEO_VND_IPTVFORUM_TTSMPEG2()
	{
		return 'video/vnd.iptvforum.ttsmpeg2';
	}

	/**
	 * Represents the content type `video/vnd.motorola.video`.
	 * @type {String}
	 */
	static get VIDEO_VND_MOTOROLA_VIDEO()
	{
		return 'video/vnd.motorola.video';
	}

	/**
	 * Represents the content type `video/vnd.motorola.videop`.
	 * @type {String}
	 */
	static get VIDEO_VND_MOTOROLA_VIDEOP()
	{
		return 'video/vnd.motorola.videop';
	}

	/**
	 * Represents the content type `video/vnd.mpegurl`.
	 * @type {String}
	 */
	static get VIDEO_VND_MPEGURL()
	{
		return 'video/vnd.mpegurl';
	}

	/**
	 * Represents the content type `video/vnd.ms-playready.media.pyv`.
	 * @type {String}
	 */
	static get VIDEO_VND_MS_PLAYREADY_MEDIA_PYV()
	{
		return 'video/vnd.ms-playready.media.pyv';
	}

	/**
	 * Represents the content type `video/vnd.nokia.interleaved-multimedia`.
	 * @type {String}
	 */
	static get VIDEO_VND_NOKIA_INTERLEAVED_MULTIMEDIA()
	{
		return 'video/vnd.nokia.interleaved-multimedia';
	}

	/**
	 * Represents the content type `video/vnd.nokia.videovoip`.
	 * @type {String}
	 */
	static get VIDEO_VND_NOKIA_VIDEOVOIP()
	{
		return 'video/vnd.nokia.videovoip';
	}

	/**
	 * Represents the content type `video/vnd.objectvideo`.
	 * @type {String}
	 */
	static get VIDEO_VND_OBJECTVIDEO()
	{
		return 'video/vnd.objectvideo';
	}

	/**
	 * Represents the content type `video/vnd.radgamettools.bink`.
	 * @type {String}
	 */
	static get VIDEO_VND_RADGAMETTOOLS_BINK()
	{
		return 'video/vnd.radgamettools.bink';
	}

	/**
	 * Represents the content type `video/vnd.radgamettools.smacker`.
	 * @type {String}
	 */
	static get VIDEO_VND_RADGAMETTOOLS_SMACKER()
	{
		return 'video/vnd.radgamettools.smacker';
	}

	/**
	 * Represents the content type `video/vnd.sealed.mpeg1`.
	 * @type {String}
	 */
	static get VIDEO_VND_SEALED_MPEG1()
	{
		return 'video/vnd.sealed.mpeg1';
	}

	/**
	 * Represents the content type `video/vnd.sealed.mpeg4`.
	 * @type {String}
	 */
	static get VIDEO_VND_SEALED_MPEG4()
	{
		return 'video/vnd.sealed.mpeg4';
	}

	/**
	 * Represents the content type `video/vnd.sealed.swf`.
	 * @type {String}
	 */
	static get VIDEO_VND_SEALED_SWF()
	{
		return 'video/vnd.sealed.swf';
	}

	/**
	 * Represents the content type `video/vnd.sealedmedia.softseal.mov`.
	 * @type {String}
	 */
	static get VIDEO_VND_SEALEDMEDIA_SOFTSEAL_MOV()
	{
		return 'video/vnd.sealedmedia.softseal.mov';
	}

	/**
	 * Represents the content type `video/vnd.uvvu.mp4`.
	 * @type {String}
	 */
	static get VIDEO_VND_UVVU_MP4()
	{
		return 'video/vnd.uvvu.mp4';
	}

	/**
	 * Represents the content type `video/vnd.vivo`.
	 * @type {String}
	 */
	static get VIDEO_VND_VIVO()
	{
		return 'video/vnd.vivo';
	}

	/**
	 * Represents the content type `video/vp8`.
	 * @type {String}
	 */
	static get VIDEO_VP8()
	{
		return 'video/vp8';
	}

	/**
	 * Represents the content type `video/webm`.
	 * @type {String}
	 */
	static get VIDEO_WEBM()
	{
		return 'video/webm';
	}

	/**
	 * Represents the content type `video/x-f4v`.
	 * @type {String}
	 */
	static get VIDEO_X_F4V()
	{
		return 'video/x-f4v';
	}

	/**
	 * Represents the content type `video/x-fli`.
	 * @type {String}
	 */
	static get VIDEO_X_FLI()
	{
		return 'video/x-fli';
	}

	/**
	 * Represents the content type `video/x-flv`.
	 * @type {String}
	 */
	static get VIDEO_X_FLV()
	{
		return 'video/x-flv';
	}

	/**
	 * Represents the content type `video/x-m4v`.
	 * @type {String}
	 */
	static get VIDEO_X_M4V()
	{
		return 'video/x-m4v';
	}

	/**
	 * Represents the content type `video/x-matroska`.
	 * @type {String}
	 */
	static get VIDEO_X_MATROSKA()
	{
		return 'video/x-matroska';
	}

	/**
	 * Represents the content type `video/x-mng`.
	 * @type {String}
	 */
	static get VIDEO_X_MNG()
	{
		return 'video/x-mng';
	}

	/**
	 * Represents the content type `video/x-ms-asf`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_ASF()
	{
		return 'video/x-ms-asf';
	}

	/**
	 * Represents the content type `video/x-ms-vob`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_VOB()
	{
		return 'video/x-ms-vob';
	}

	/**
	 * Represents the content type `video/x-ms-wm`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_WM()
	{
		return 'video/x-ms-wm';
	}

	/**
	 * Represents the content type `video/x-ms-wmv`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_WMV()
	{
		return 'video/x-ms-wmv';
	}

	/**
	 * Represents the content type `video/x-ms-wmx`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_WMX()
	{
		return 'video/x-ms-wmx';
	}

	/**
	 * Represents the content type `video/x-ms-wvx`.
	 * @type {String}
	 */
	static get VIDEO_X_MS_WVX()
	{
		return 'video/x-ms-wvx';
	}

	/**
	 * Represents the content type `video/x-msvideo`.
	 * @type {String}
	 */
	static get VIDEO_X_MSVIDEO()
	{
		return 'video/x-msvideo';
	}

	/**
	 * Represents the content type `video/x-sgi-movie`.
	 * @type {String}
	 */
	static get VIDEO_X_SGI_MOVIE()
	{
		return 'video/x-sgi-movie';
	}

	/**
	 * Represents the content type `video/x-smv`.
	 * @type {String}
	 */
	static get VIDEO_X_SMV()
	{
		return 'video/x-smv';
	}

	/**
	 * Represents the content type `x-conference/x-cooltalk`.
	 * @type {String}
	 */
	static get X_CONFERENCE_X_COOLTALK()
	{
		return 'x-conference/x-cooltalk';
	}

	/**
	 * Creates a content type with a specific charset.
	 * @param {String} contentType The content type.
	 * @param {String} charset The charset.
	 * @return {String} The content type with the charset.
	 * @throws InvalidCharSetException The charset is empty.
	 */
	static with_charset( contentType, charset )
	{
		if ( String.empty === charset.trim() )
		{
			throw new InvalidCharSetException( this._ERROR_MESSAGE_CHARSET_IS_EMPTY );
		}

		return String.format`${ 0 }; charset="${ 1 }"`( contentType, charset );
	}
}
