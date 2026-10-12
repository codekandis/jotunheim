'use strict';

import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Represents an enumeration of charsets.
 * @link https://www.iana.org/assignments/character-sets/character-sets.xhtml
 * @version 2022-07-14
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CharSet extends AbstractStatic
{
	/**
	 * Represents the charset `US-ASCII`.
	 * @type {string}
	 */
	static get US_ASCII()
	{
		return 'US-ASCII';
	}

	/**
	 * Represents the charset `ISO_8859-1:1987`.
	 * @type {string}
	 */
	static get ISO_8859_1_1987()
	{
		return 'ISO-8859-1';
	}

	/**
	 * Represents the charset `ISO_8859-2:1987`.
	 * @type {string}
	 */
	static get ISO_8859_2_1987()
	{
		return 'ISO-8859-2';
	}

	/**
	 * Represents the charset `ISO_8859-3:1988`.
	 * @type {string}
	 */
	static get ISO_8859_3_1988()
	{
		return 'ISO-8859-3';
	}

	/**
	 * Represents the charset `ISO_8859-4:1988`.
	 * @type {string}
	 */
	static get ISO_8859_4_1988()
	{
		return 'ISO-8859-4';
	}

	/**
	 * Represents the charset `ISO_8859-5:1988`.
	 * @type {string}
	 */
	static get ISO_8859_5_1988()
	{
		return 'ISO-8859-5';
	}

	/**
	 * Represents the charset `ISO_8859-6:1987`.
	 * @type {string}
	 */
	static get ISO_8859_6_1987()
	{
		return 'ISO-8859-6';
	}

	/**
	 * Represents the charset `ISO_8859-7:1987`.
	 * @type {string}
	 */
	static get ISO_8859_7_1987()
	{
		return 'ISO-8859-7';
	}

	/**
	 * Represents the charset `ISO_8859-8:1988`.
	 * @type {string}
	 */
	static get ISO_8859_8_1988()
	{
		return 'ISO-8859-8';
	}

	/**
	 * Represents the charset `ISO_8859-9:1989`.
	 * @type {string}
	 */
	static get ISO_8859_9_1989()
	{
		return 'ISO-8859-9';
	}

	/**
	 * Represents the charset `ISO-8859-10`.
	 * @type {string}
	 */
	static get ISO_8859_10()
	{
		return 'ISO-8859-10';
	}

	/**
	 * Represents the charset `ISO_6937-2-add`.
	 * @type {string}
	 */
	static get ISO_6937_2_ADD()
	{
		return 'ISO_6937-2-add';
	}

	/**
	 * Represents the charset `JIS_X0201`.
	 * @type {string}
	 */
	static get JIS_X0201()
	{
		return 'JIS_X0201';
	}

	/**
	 * Represents the charset `JIS_Encoding`.
	 * @type {string}
	 */
	static get JIS_ENCODING()
	{
		return 'JIS_Encoding';
	}

	/**
	 * Represents the charset `Shift_JIS`.
	 * @type {string}
	 */
	static get SHIFT_JIS()
	{
		return 'Shift_JIS';
	}

	/**
	 * Represents the charset `Extended_UNIX_Code_Packed_Format_for_Japanese`.
	 * @type {string}
	 */
	static get EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE()
	{
		return 'EUC-JP';
	}

	/**
	 * Represents the charset `Extended_UNIX_Code_Fixed_Width_for_Japanese`.
	 * @type {string}
	 */
	static get EXTENDED_UNIX_CODE_FIXED_WIDTH_FOR_JAPANESE()
	{
		return 'Extended_UNIX_Code_Fixed_Width_for_Japanese';
	}

	/**
	 * Represents the charset `BS_4730`.
	 * @type {string}
	 */
	static get BS_4730()
	{
		return 'BS_4730';
	}

	/**
	 * Represents the charset `SEN_850200_C`.
	 * @type {string}
	 */
	static get SEN_850200_C()
	{
		return 'SEN_850200_C';
	}

	/**
	 * Represents the charset `IT`.
	 * @type {string}
	 */
	static get IT()
	{
		return 'IT';
	}

	/**
	 * Represents the charset `ES`.
	 * @type {string}
	 */
	static get ES()
	{
		return 'ES';
	}

	/**
	 * Represents the charset `DIN_66003`.
	 * @type {string}
	 */
	static get DIN_66003()
	{
		return 'DIN_66003';
	}

	/**
	 * Represents the charset `NS_4551-1`.
	 * @type {string}
	 */
	static get NS_4551_1()
	{
		return 'NS_4551-1';
	}

	/**
	 * Represents the charset `NF_Z_62-010`.
	 * @type {string}
	 */
	static get NF_Z_62_010()
	{
		return 'NF_Z_62-010';
	}

	/**
	 * Represents the charset `ISO-10646-UTF-1`.
	 * @type {string}
	 */
	static get ISO_10646_UTF_1()
	{
		return 'ISO-10646-UTF-1';
	}

	/**
	 * Represents the charset `ISO_646.basic:1983`.
	 * @type {string}
	 */
	static get ISO_646_BASIC_1983()
	{
		return 'ISO_646.basic:1983';
	}

	/**
	 * Represents the charset `INVARIANT`.
	 * @type {string}
	 */
	static get INVARIANT()
	{
		return 'INVARIANT';
	}

	/**
	 * Represents the charset `ISO_646.irv:1983`.
	 * @type {string}
	 */
	static get ISO_646_IRV_1983()
	{
		return 'ISO_646.irv:1983';
	}

	/**
	 * Represents the charset `NATS-SEFI`.
	 * @type {string}
	 */
	static get NATS_SEFI()
	{
		return 'NATS-SEFI';
	}

	/**
	 * Represents the charset `NATS-SEFI-ADD`.
	 * @type {string}
	 */
	static get NATS_SEFI_ADD()
	{
		return 'NATS-SEFI-ADD';
	}

	/**
	 * Represents the charset `NATS-DANO`.
	 * @type {string}
	 */
	static get NATS_DANO()
	{
		return 'NATS-DANO';
	}

	/**
	 * Represents the charset `NATS-DANO-ADD`.
	 * @type {string}
	 */
	static get NATS_DANO_ADD()
	{
		return 'NATS-DANO-ADD';
	}

	/**
	 * Represents the charset `SEN_850200_B`.
	 * @type {string}
	 */
	static get SEN_850200_B()
	{
		return 'SEN_850200_B';
	}

	/**
	 * Represents the charset `KS_C_5601-1987`.
	 * @type {string}
	 */
	static get KS_C_5601_1987()
	{
		return 'KS_C_5601-1987';
	}

	/**
	 * Represents the charset `ISO-2022-KR`.
	 * @type {string}
	 */
	static get ISO_2022_KR()
	{
		return 'ISO-2022-KR';
	}

	/**
	 * Represents the charset `EUC-KR`.
	 * @type {string}
	 */
	static get EUC_KR()
	{
		return 'EUC-KR';
	}

	/**
	 * Represents the charset `ISO-2022-JP`.
	 * @type {string}
	 */
	static get ISO_2022_JP()
	{
		return 'ISO-2022-JP';
	}

	/**
	 * Represents the charset `ISO-2022-JP-2`.
	 * @type {string}
	 */
	static get ISO_2022_JP_2()
	{
		return 'ISO-2022-JP-2';
	}

	/**
	 * Represents the charset `JIS_C6220-1969-jp`.
	 * @type {string}
	 */
	static get JIS_C6220_1969_JP()
	{
		return 'JIS_C6220-1969-jp';
	}

	/**
	 * Represents the charset `JIS_C6220-1969-ro`.
	 * @type {string}
	 */
	static get JIS_C6220_1969_RO()
	{
		return 'JIS_C6220-1969-ro';
	}

	/**
	 * Represents the charset `PT`.
	 * @type {string}
	 */
	static get PT()
	{
		return 'PT';
	}

	/**
	 * Represents the charset `greek7-old`.
	 * @type {string}
	 */
	static get GREEK7_OLD()
	{
		return 'greek7-old';
	}

	/**
	 * Represents the charset `latin-greek`.
	 * @type {string}
	 */
	static get LATIN_GREEK()
	{
		return 'latin-greek';
	}

	/**
	 * Represents the charset `NF_Z_62-010_(1973)`.
	 * @type {string}
	 */
	static get NF_Z_62_010_1973()
	{
		return 'NF_Z_62-010_(1973)';
	}

	/**
	 * Represents the charset `Latin-greek-1`.
	 * @type {string}
	 */
	static get LATIN_GREEK_1()
	{
		return 'Latin-greek-1';
	}

	/**
	 * Represents the charset `ISO_5427`.
	 * @type {string}
	 */
	static get ISO_5427()
	{
		return 'ISO_5427';
	}

	/**
	 * Represents the charset `JIS_C6226-1978`.
	 * @type {string}
	 */
	static get JIS_C6226_1978()
	{
		return 'JIS_C6226-1978';
	}

	/**
	 * Represents the charset `BS_viewdata`.
	 * @type {string}
	 */
	static get BS_VIEWDATA()
	{
		return 'BS_viewdata';
	}

	/**
	 * Represents the charset `INIS`.
	 * @type {string}
	 */
	static get INIS()
	{
		return 'INIS';
	}

	/**
	 * Represents the charset `INIS-8`.
	 * @type {string}
	 */
	static get INIS_8()
	{
		return 'INIS-8';
	}

	/**
	 * Represents the charset `INIS-cyrillic`.
	 * @type {string}
	 */
	static get INIS_CYRILLIC()
	{
		return 'INIS-cyrillic';
	}

	/**
	 * Represents the charset `ISO_5427:1981`.
	 * @type {string}
	 */
	static get ISO_5427_1981()
	{
		return 'ISO_5427:1981';
	}

	/**
	 * Represents the charset `ISO_5428:1980`.
	 * @type {string}
	 */
	static get ISO_5428_1980()
	{
		return 'ISO_5428:1980';
	}

	/**
	 * Represents the charset `GB_1988-80`.
	 * @type {string}
	 */
	static get GB_1988_80()
	{
		return 'GB_1988-80';
	}

	/**
	 * Represents the charset `GB_2312-80`.
	 * @type {string}
	 */
	static get GB_2312_80()
	{
		return 'GB_2312-80';
	}

	/**
	 * Represents the charset `NS_4551-2`.
	 * @type {string}
	 */
	static get NS_4551_2()
	{
		return 'NS_4551-2';
	}

	/**
	 * Represents the charset `videotex-suppl`.
	 * @type {string}
	 */
	static get VIDEOTEX_SUPPL()
	{
		return 'videotex-suppl';
	}

	/**
	 * Represents the charset `PT2`.
	 * @type {string}
	 */
	static get PT2()
	{
		return 'PT2';
	}

	/**
	 * Represents the charset `ES2`.
	 * @type {string}
	 */
	static get ES2()
	{
		return 'ES2';
	}

	/**
	 * Represents the charset `MSZ_7795.3`.
	 * @type {string}
	 */
	static get MSZ_7795_3()
	{
		return 'MSZ_7795.3';
	}

	/**
	 * Represents the charset `JIS_C6226-1983`.
	 * @type {string}
	 */
	static get JIS_C6226_1983()
	{
		return 'JIS_C6226-1983';
	}

	/**
	 * Represents the charset `greek7`.
	 * @type {string}
	 */
	static get GREEK7()
	{
		return 'greek7';
	}

	/**
	 * Represents the charset `ASMO_449`.
	 * @type {string}
	 */
	static get ASMO_449()
	{
		return 'ASMO_449';
	}

	/**
	 * Represents the charset `iso-ir-90`.
	 * @type {string}
	 */
	static get ISO_IR_90()
	{
		return 'iso-ir-90';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-a`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_A()
	{
		return 'JIS_C6229-1984-a';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-b`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_B()
	{
		return 'JIS_C6229-1984-b';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-b-add`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_B_ADD()
	{
		return 'JIS_C6229-1984-b-add';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-hand`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_HAND()
	{
		return 'JIS_C6229-1984-hand';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-hand-add`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_HAND_ADD()
	{
		return 'JIS_C6229-1984-hand-add';
	}

	/**
	 * Represents the charset `JIS_C6229-1984-kana`.
	 * @type {string}
	 */
	static get JIS_C6229_1984_KANA()
	{
		return 'JIS_C6229-1984-kana';
	}

	/**
	 * Represents the charset `ISO_2033-1983`.
	 * @type {string}
	 */
	static get ISO_2033_1983()
	{
		return 'ISO_2033-1983';
	}

	/**
	 * Represents the charset `ANSI_X3.110-1983`.
	 * @type {string}
	 */
	static get ANSI_X3_110_1983()
	{
		return 'ANSI_X3.110-1983';
	}

	/**
	 * Represents the charset `T.61-7bit`.
	 * @type {string}
	 */
	static get T_61_7BIT()
	{
		return 'T.61-7bit';
	}

	/**
	 * Represents the charset `T.61-8bit`.
	 * @type {string}
	 */
	static get T_61_8BIT()
	{
		return 'T.61-8bit';
	}

	/**
	 * Represents the charset `ECMA-cyrillic`.
	 * @type {string}
	 */
	static get ECMA_CYRILLIC()
	{
		return 'ECMA-cyrillic';
	}

	/**
	 * Represents the charset `CSA_Z243.4-1985-1`.
	 * @type {string}
	 */
	static get CSA_Z243_4_1985_1()
	{
		return 'CSA_Z243.4-1985-1';
	}

	/**
	 * Represents the charset `CSA_Z243.4-1985-2`.
	 * @type {string}
	 */
	static get CSA_Z243_4_1985_2()
	{
		return 'CSA_Z243.4-1985-2';
	}

	/**
	 * Represents the charset `CSA_Z243.4-1985-gr`.
	 * @type {string}
	 */
	static get CSA_Z243_4_1985_GR()
	{
		return 'CSA_Z243.4-1985-gr';
	}

	/**
	 * Represents the charset `ISO_8859-6-E`.
	 * @type {string}
	 */
	static get ISO_8859_6_E()
	{
		return 'ISO-8859-6-E';
	}

	/**
	 * Represents the charset `ISO_8859-6-I`.
	 * @type {string}
	 */
	static get ISO_8859_6_I()
	{
		return 'ISO-8859-6-I';
	}

	/**
	 * Represents the charset `T.101-G2`.
	 * @type {string}
	 */
	static get T_101_G2()
	{
		return 'T.101-G2';
	}

	/**
	 * Represents the charset `ISO_8859-8-E`.
	 * @type {string}
	 */
	static get ISO_8859_8_E()
	{
		return 'ISO-8859-8-E';
	}

	/**
	 * Represents the charset `ISO_8859-8-I`.
	 * @type {string}
	 */
	static get ISO_8859_8_I()
	{
		return 'ISO-8859-8-I';
	}

	/**
	 * Represents the charset `CSN_369103`.
	 * @type {string}
	 */
	static get CSN_369103()
	{
		return 'CSN_369103';
	}

	/**
	 * Represents the charset `JUS_I.B1.002`.
	 * @type {string}
	 */
	static get JUS_I_B1_002()
	{
		return 'JUS_I.B1.002';
	}

	/**
	 * Represents the charset `IEC_P27-1`.
	 * @type {string}
	 */
	static get IEC_P27_1()
	{
		return 'IEC_P27-1';
	}

	/**
	 * Represents the charset `JUS_I.B1.003-serb`.
	 * @type {string}
	 */
	static get JUS_I_B1_003_SERB()
	{
		return 'JUS_I.B1.003-serb';
	}

	/**
	 * Represents the charset `JUS_I.B1.003-mac`.
	 * @type {string}
	 */
	static get JUS_I_B1_003_MAC()
	{
		return 'JUS_I.B1.003-mac';
	}

	/**
	 * Represents the charset `greek-ccitt`.
	 * @type {string}
	 */
	static get GREEK_CCITT()
	{
		return 'greek-ccitt';
	}

	/**
	 * Represents the charset `NC_NC00-10:81`.
	 * @type {string}
	 */
	static get NC_NC00_10_81()
	{
		return 'NC_NC00-10:81';
	}

	/**
	 * Represents the charset `ISO_6937-2-25`.
	 * @type {string}
	 */
	static get ISO_6937_2_25()
	{
		return 'ISO_6937-2-25';
	}

	/**
	 * Represents the charset `GOST_19768-74`.
	 * @type {string}
	 */
	static get GOST_19768_74()
	{
		return 'GOST_19768-74';
	}

	/**
	 * Represents the charset `ISO_8859-supp`.
	 * @type {string}
	 */
	static get ISO_8859_SUPP()
	{
		return 'ISO_8859-supp';
	}

	/**
	 * Represents the charset `ISO_10367-box`.
	 * @type {string}
	 */
	static get ISO_10367_BOX()
	{
		return 'ISO_10367-box';
	}

	/**
	 * Represents the charset `latin-lap`.
	 * @type {string}
	 */
	static get LATIN_LAP()
	{
		return 'latin-lap';
	}

	/**
	 * Represents the charset `JIS_X0212-1990`.
	 * @type {string}
	 */
	static get JIS_X0212_1990()
	{
		return 'JIS_X0212-1990';
	}

	/**
	 * Represents the charset `DS_2089`.
	 * @type {string}
	 */
	static get DS_2089()
	{
		return 'DS_2089';
	}

	/**
	 * Represents the charset `us-dk`.
	 * @type {string}
	 */
	static get US_DK()
	{
		return 'us-dk';
	}

	/**
	 * Represents the charset `dk-us`.
	 * @type {string}
	 */
	static get DK_US()
	{
		return 'dk-us';
	}

	/**
	 * Represents the charset `KSC5636`.
	 * @type {string}
	 */
	static get KSC5636()
	{
		return 'KSC5636';
	}

	/**
	 * Represents the charset `UNICODE-1-1-UTF-7`.
	 * @type {string}
	 */
	static get UNICODE_1_1_UTF_7()
	{
		return 'UNICODE-1-1-UTF-7';
	}

	/**
	 * Represents the charset `ISO-2022-CN`.
	 * @type {string}
	 */
	static get ISO_2022_CN()
	{
		return 'ISO-2022-CN';
	}

	/**
	 * Represents the charset `ISO-2022-CN-EXT`.
	 * @type {string}
	 */
	static get ISO_2022_CN_EXT()
	{
		return 'ISO-2022-CN-EXT';
	}

	/**
	 * Represents the charset `UTF-8`.
	 * @type {string}
	 */
	static get UTF_8()
	{
		return 'UTF-8';
	}

	/**
	 * Represents the charset `ISO-8859-13`.
	 * @type {string}
	 */
	static get ISO_8859_13()
	{
		return 'ISO-8859-13';
	}

	/**
	 * Represents the charset `ISO-8859-14`.
	 * @type {string}
	 */
	static get ISO_8859_14()
	{
		return 'ISO-8859-14';
	}

	/**
	 * Represents the charset `ISO-8859-15`.
	 * @type {string}
	 */
	static get ISO_8859_15()
	{
		return 'ISO-8859-15';
	}

	/**
	 * Represents the charset `ISO-8859-16`.
	 * @type {string}
	 */
	static get ISO_8859_16()
	{
		return 'ISO-8859-16';
	}

	/**
	 * Represents the charset `GBK`.
	 * @type {string}
	 */
	static get GBK()
	{
		return 'GBK';
	}

	/**
	 * Represents the charset `GB18030`.
	 * @type {string}
	 */
	static get GB18030()
	{
		return 'GB18030';
	}

	/**
	 * Represents the charset `OSD_EBCDIC_DF04_15`.
	 * @type {string}
	 */
	static get OSD_EBCDIC_DF04_15()
	{
		return 'OSD_EBCDIC_DF04_15';
	}

	/**
	 * Represents the charset `OSD_EBCDIC_DF03_IRV`.
	 * @type {string}
	 */
	static get OSD_EBCDIC_DF03_IRV()
	{
		return 'OSD_EBCDIC_DF03_IRV';
	}

	/**
	 * Represents the charset `OSD_EBCDIC_DF04_1`.
	 * @type {string}
	 */
	static get OSD_EBCDIC_DF04_1()
	{
		return 'OSD_EBCDIC_DF04_1';
	}

	/**
	 * Represents the charset `ISO-11548-1`.
	 * @type {string}
	 */
	static get ISO_11548_1()
	{
		return 'ISO-11548-1';
	}

	/**
	 * Represents the charset `KZ-1048`.
	 * @type {string}
	 */
	static get KZ_1048()
	{
		return 'KZ-1048';
	}

	/**
	 * Represents the charset `ISO-10646-UCS-2`.
	 * @type {string}
	 */
	static get ISO_10646_UCS_2()
	{
		return 'ISO-10646-UCS-2';
	}

	/**
	 * Represents the charset `ISO-10646-UCS-4`.
	 * @type {string}
	 */
	static get ISO_10646_UCS_4()
	{
		return 'ISO-10646-UCS-4';
	}

	/**
	 * Represents the charset `ISO-10646-UCS-Basic`.
	 * @type {string}
	 */
	static get ISO_10646_UCS_BASIC()
	{
		return 'ISO-10646-UCS-Basic';
	}

	/**
	 * Represents the charset `ISO-10646-Unicode-Latin1`.
	 * @type {string}
	 */
	static get ISO_10646_UNICODE_LATIN1()
	{
		return 'ISO-10646-Unicode-Latin1';
	}

	/**
	 * Represents the charset `ISO-10646-J-1`.
	 * @type {string}
	 */
	static get ISO_10646_J_1()
	{
		return 'ISO-10646-J-1';
	}

	/**
	 * Represents the charset `ISO-Unicode-IBM-1261`.
	 * @type {string}
	 */
	static get ISO_UNICODE_IBM_1261()
	{
		return 'ISO-Unicode-IBM-1261';
	}

	/**
	 * Represents the charset `ISO-Unicode-IBM-1268`.
	 * @type {string}
	 */
	static get ISO_UNICODE_IBM_1268()
	{
		return 'ISO-Unicode-IBM-1268';
	}

	/**
	 * Represents the charset `ISO-Unicode-IBM-1276`.
	 * @type {string}
	 */
	static get ISO_UNICODE_IBM_1276()
	{
		return 'ISO-Unicode-IBM-1276';
	}

	/**
	 * Represents the charset `ISO-Unicode-IBM-1264`.
	 * @type {string}
	 */
	static get ISO_UNICODE_IBM_1264()
	{
		return 'ISO-Unicode-IBM-1264';
	}

	/**
	 * Represents the charset `ISO-Unicode-IBM-1265`.
	 * @type {string}
	 */
	static get ISO_UNICODE_IBM_1265()
	{
		return 'ISO-Unicode-IBM-1265';
	}

	/**
	 * Represents the charset `UNICODE-1-1`.
	 * @type {string}
	 */
	static get UNICODE_1_1()
	{
		return 'UNICODE-1-1';
	}

	/**
	 * Represents the charset `SCSU`.
	 * @type {string}
	 */
	static get SCSU()
	{
		return 'SCSU';
	}

	/**
	 * Represents the charset `UTF-7`.
	 * @type {string}
	 */
	static get UTF_7()
	{
		return 'UTF-7';
	}

	/**
	 * Represents the charset `UTF-16BE`.
	 * @type {string}
	 */
	static get UTF_16BE()
	{
		return 'UTF-16BE';
	}

	/**
	 * Represents the charset `UTF-16LE`.
	 * @type {string}
	 */
	static get UTF_16LE()
	{
		return 'UTF-16LE';
	}

	/**
	 * Represents the charset `UTF-16`.
	 * @type {string}
	 */
	static get UTF_16()
	{
		return 'UTF-16';
	}

	/**
	 * Represents the charset `CESU-8`.
	 * @type {string}
	 */
	static get CESU_8()
	{
		return 'CESU-8';
	}

	/**
	 * Represents the charset `UTF-32`.
	 * @type {string}
	 */
	static get UTF_32()
	{
		return 'UTF-32';
	}

	/**
	 * Represents the charset `UTF-32BE`.
	 * @type {string}
	 */
	static get UTF_32BE()
	{
		return 'UTF-32BE';
	}

	/**
	 * Represents the charset `UTF-32LE`.
	 * @type {string}
	 */
	static get UTF_32LE()
	{
		return 'UTF-32LE';
	}

	/**
	 * Represents the charset `BOCU-1`.
	 * @type {string}
	 */
	static get BOCU_1()
	{
		return 'BOCU-1';
	}

	/**
	 * Represents the charset `UTF-7-IMAP`.
	 * @type {string}
	 */
	static get UTF_7_IMAP()
	{
		return 'UTF-7-IMAP';
	}

	/**
	 * Represents the charset `ISO-8859-1-Windows-3.0-Latin-1`.
	 * @type {string}
	 */
	static get ISO_8859_1_WINDOWS_3_0_LATIN_1()
	{
		return 'ISO-8859-1-Windows-3.0-Latin-1';
	}

	/**
	 * Represents the charset `ISO-8859-1-Windows-3.1-Latin-1`.
	 * @type {string}
	 */
	static get ISO_8859_1_WINDOWS_3_1_LATIN_1()
	{
		return 'ISO-8859-1-Windows-3.1-Latin-1';
	}

	/**
	 * Represents the charset `ISO-8859-2-Windows-Latin-2`.
	 * @type {string}
	 */
	static get ISO_8859_2_WINDOWS_LATIN_2()
	{
		return 'ISO-8859-2-Windows-Latin-2';
	}

	/**
	 * Represents the charset `ISO-8859-9-Windows-Latin-5`.
	 * @type {string}
	 */
	static get ISO_8859_9_WINDOWS_LATIN_5()
	{
		return 'ISO-8859-9-Windows-Latin-5';
	}

	/**
	 * Represents the charset `hp-roman8`.
	 * @type {string}
	 */
	static get HP_ROMAN8()
	{
		return 'hp-roman8';
	}

	/**
	 * Represents the charset `Adobe-Standard-Encoding`.
	 * @type {string}
	 */
	static get ADOBE_STANDARD_ENCODING()
	{
		return 'Adobe-Standard-Encoding';
	}

	/**
	 * Represents the charset `Ventura-US`.
	 * @type {string}
	 */
	static get VENTURA_US()
	{
		return 'Ventura-US';
	}

	/**
	 * Represents the charset `Ventura-International`.
	 * @type {string}
	 */
	static get VENTURA_INTERNATIONAL()
	{
		return 'Ventura-International';
	}

	/**
	 * Represents the charset `DEC-MCS`.
	 * @type {string}
	 */
	static get DEC_MCS()
	{
		return 'DEC-MCS';
	}

	/**
	 * Represents the charset `IBM850`.
	 * @type {string}
	 */
	static get IBM850()
	{
		return 'IBM850';
	}

	/**
	 * Represents the charset `PC8-Danish-Norwegian`.
	 * @type {string}
	 */
	static get PC8_DANISH_NORWEGIAN()
	{
		return 'PC8-Danish-Norwegian';
	}

	/**
	 * Represents the charset `IBM862`.
	 * @type {string}
	 */
	static get IBM862()
	{
		return 'IBM862';
	}

	/**
	 * Represents the charset `PC8-Turkish`.
	 * @type {string}
	 */
	static get PC8_TURKISH()
	{
		return 'PC8-Turkish';
	}

	/**
	 * Represents the charset `IBM-Symbols`.
	 * @type {string}
	 */
	static get IBM_SYMBOLS()
	{
		return 'IBM-Symbols';
	}

	/**
	 * Represents the charset `IBM-Thai`.
	 * @type {string}
	 */
	static get IBM_THAI()
	{
		return 'IBM-Thai';
	}

	/**
	 * Represents the charset `HP-Legal`.
	 * @type {string}
	 */
	static get HP_LEGAL()
	{
		return 'HP-Legal';
	}

	/**
	 * Represents the charset `HP-Pi-font`.
	 * @type {string}
	 */
	static get HP_PI_FONT()
	{
		return 'HP-Pi-font';
	}

	/**
	 * Represents the charset `HP-Math8`.
	 * @type {string}
	 */
	static get HP_MATH8()
	{
		return 'HP-Math8';
	}

	/**
	 * Represents the charset `Adobe-Symbol-Encoding`.
	 * @type {string}
	 */
	static get ADOBE_SYMBOL_ENCODING()
	{
		return 'Adobe-Symbol-Encoding';
	}

	/**
	 * Represents the charset `HP-DeskTop`.
	 * @type {string}
	 */
	static get HP_DESKTOP()
	{
		return 'HP-DeskTop';
	}

	/**
	 * Represents the charset `Ventura-Math`.
	 * @type {string}
	 */
	static get VENTURA_MATH()
	{
		return 'Ventura-Math';
	}

	/**
	 * Represents the charset `Microsoft-Publishing`.
	 * @type {string}
	 */
	static get MICROSOFT_PUBLISHING()
	{
		return 'Microsoft-Publishing';
	}

	/**
	 * Represents the charset `Windows-31J`.
	 * @type {string}
	 */
	static get WINDOWS_31J()
	{
		return 'Windows-31J';
	}

	/**
	 * Represents the charset `GB2312`.
	 * @type {string}
	 */
	static get GB2312()
	{
		return 'GB2312';
	}

	/**
	 * Represents the charset `Big5`.
	 * @type {string}
	 */
	static get BIG5()
	{
		return 'Big5';
	}

	/**
	 * Represents the charset `macintosh`.
	 * @type {string}
	 */
	static get MACINTOSH()
	{
		return 'macintosh';
	}

	/**
	 * Represents the charset `IBM037`.
	 * @type {string}
	 */
	static get IBM037()
	{
		return 'IBM037';
	}

	/**
	 * Represents the charset `IBM038`.
	 * @type {string}
	 */
	static get IBM038()
	{
		return 'IBM038';
	}

	/**
	 * Represents the charset `IBM273`.
	 * @type {string}
	 */
	static get IBM273()
	{
		return 'IBM273';
	}

	/**
	 * Represents the charset `IBM274`.
	 * @type {string}
	 */
	static get IBM274()
	{
		return 'IBM274';
	}

	/**
	 * Represents the charset `IBM275`.
	 * @type {string}
	 */
	static get IBM275()
	{
		return 'IBM275';
	}

	/**
	 * Represents the charset `IBM277`.
	 * @type {string}
	 */
	static get IBM277()
	{
		return 'IBM277';
	}

	/**
	 * Represents the charset `IBM278`.
	 * @type {string}
	 */
	static get IBM278()
	{
		return 'IBM278';
	}

	/**
	 * Represents the charset `IBM280`.
	 * @type {string}
	 */
	static get IBM280()
	{
		return 'IBM280';
	}

	/**
	 * Represents the charset `IBM281`.
	 * @type {string}
	 */
	static get IBM281()
	{
		return 'IBM281';
	}

	/**
	 * Represents the charset `IBM284`.
	 * @type {string}
	 */
	static get IBM284()
	{
		return 'IBM284';
	}

	/**
	 * Represents the charset `IBM285`.
	 * @type {string}
	 */
	static get IBM285()
	{
		return 'IBM285';
	}

	/**
	 * Represents the charset `IBM290`.
	 * @type {string}
	 */
	static get IBM290()
	{
		return 'IBM290';
	}

	/**
	 * Represents the charset `IBM297`.
	 * @type {string}
	 */
	static get IBM297()
	{
		return 'IBM297';
	}

	/**
	 * Represents the charset `IBM420`.
	 * @type {string}
	 */
	static get IBM420()
	{
		return 'IBM420';
	}

	/**
	 * Represents the charset `IBM423`.
	 * @type {string}
	 */
	static get IBM423()
	{
		return 'IBM423';
	}

	/**
	 * Represents the charset `IBM424`.
	 * @type {string}
	 */
	static get IBM424()
	{
		return 'IBM424';
	}

	/**
	 * Represents the charset `IBM437`.
	 * @type {string}
	 */
	static get IBM437()
	{
		return 'IBM437';
	}

	/**
	 * Represents the charset `IBM500`.
	 * @type {string}
	 */
	static get IBM500()
	{
		return 'IBM500';
	}

	/**
	 * Represents the charset `IBM851`.
	 * @type {string}
	 */
	static get IBM851()
	{
		return 'IBM851';
	}

	/**
	 * Represents the charset `IBM852`.
	 * @type {string}
	 */
	static get IBM852()
	{
		return 'IBM852';
	}

	/**
	 * Represents the charset `IBM855`.
	 * @type {string}
	 */
	static get IBM855()
	{
		return 'IBM855';
	}

	/**
	 * Represents the charset `IBM857`.
	 * @type {string}
	 */
	static get IBM857()
	{
		return 'IBM857';
	}

	/**
	 * Represents the charset `IBM860`.
	 * @type {string}
	 */
	static get IBM860()
	{
		return 'IBM860';
	}

	/**
	 * Represents the charset `IBM861`.
	 * @type {string}
	 */
	static get IBM861()
	{
		return 'IBM861';
	}

	/**
	 * Represents the charset `IBM863`.
	 * @type {string}
	 */
	static get IBM863()
	{
		return 'IBM863';
	}

	/**
	 * Represents the charset `IBM864`.
	 * @type {string}
	 */
	static get IBM864()
	{
		return 'IBM864';
	}

	/**
	 * Represents the charset `IBM865`.
	 * @type {string}
	 */
	static get IBM865()
	{
		return 'IBM865';
	}

	/**
	 * Represents the charset `IBM868`.
	 * @type {string}
	 */
	static get IBM868()
	{
		return 'IBM868';
	}

	/**
	 * Represents the charset `IBM869`.
	 * @type {string}
	 */
	static get IBM869()
	{
		return 'IBM869';
	}

	/**
	 * Represents the charset `IBM870`.
	 * @type {string}
	 */
	static get IBM870()
	{
		return 'IBM870';
	}

	/**
	 * Represents the charset `IBM871`.
	 * @type {string}
	 */
	static get IBM871()
	{
		return 'IBM871';
	}

	/**
	 * Represents the charset `IBM880`.
	 * @type {string}
	 */
	static get IBM880()
	{
		return 'IBM880';
	}

	/**
	 * Represents the charset `IBM891`.
	 * @type {string}
	 */
	static get IBM891()
	{
		return 'IBM891';
	}

	/**
	 * Represents the charset `IBM903`.
	 * @type {string}
	 */
	static get IBM903()
	{
		return 'IBM903';
	}

	/**
	 * Represents the charset `IBM904`.
	 * @type {string}
	 */
	static get IBM904()
	{
		return 'IBM904';
	}

	/**
	 * Represents the charset `IBM905`.
	 * @type {string}
	 */
	static get IBM905()
	{
		return 'IBM905';
	}

	/**
	 * Represents the charset `IBM918`.
	 * @type {string}
	 */
	static get IBM918()
	{
		return 'IBM918';
	}

	/**
	 * Represents the charset `IBM1026`.
	 * @type {string}
	 */
	static get IBM1026()
	{
		return 'IBM1026';
	}

	/**
	 * Represents the charset `EBCDIC-AT-DE`.
	 * @type {string}
	 */
	static get EBCDIC_AT_DE()
	{
		return 'EBCDIC-AT-DE';
	}

	/**
	 * Represents the charset `EBCDIC-AT-DE-A`.
	 * @type {string}
	 */
	static get EBCDIC_AT_DE_A()
	{
		return 'EBCDIC-AT-DE-A';
	}

	/**
	 * Represents the charset `EBCDIC-CA-FR`.
	 * @type {string}
	 */
	static get EBCDIC_CA_FR()
	{
		return 'EBCDIC-CA-FR';
	}

	/**
	 * Represents the charset `EBCDIC-DK-NO`.
	 * @type {string}
	 */
	static get EBCDIC_DK_NO()
	{
		return 'EBCDIC-DK-NO';
	}

	/**
	 * Represents the charset `EBCDIC-DK-NO-A`.
	 * @type {string}
	 */
	static get EBCDIC_DK_NO_A()
	{
		return 'EBCDIC-DK-NO-A';
	}

	/**
	 * Represents the charset `EBCDIC-FI-SE`.
	 * @type {string}
	 */
	static get EBCDIC_FI_SE()
	{
		return 'EBCDIC-FI-SE';
	}

	/**
	 * Represents the charset `EBCDIC-FI-SE-A`.
	 * @type {string}
	 */
	static get EBCDIC_FI_SE_A()
	{
		return 'EBCDIC-FI-SE-A';
	}

	/**
	 * Represents the charset `EBCDIC-FR`.
	 * @type {string}
	 */
	static get EBCDIC_FR()
	{
		return 'EBCDIC-FR';
	}

	/**
	 * Represents the charset `EBCDIC-IT`.
	 * @type {string}
	 */
	static get EBCDIC_IT()
	{
		return 'EBCDIC-IT';
	}

	/**
	 * Represents the charset `EBCDIC-PT`.
	 * @type {string}
	 */
	static get EBCDIC_PT()
	{
		return 'EBCDIC-PT';
	}

	/**
	 * Represents the charset `EBCDIC-ES`.
	 * @type {string}
	 */
	static get EBCDIC_ES()
	{
		return 'EBCDIC-ES';
	}

	/**
	 * Represents the charset `EBCDIC-ES-A`.
	 * @type {string}
	 */
	static get EBCDIC_ES_A()
	{
		return 'EBCDIC-ES-A';
	}

	/**
	 * Represents the charset `EBCDIC-ES-S`.
	 * @type {string}
	 */
	static get EBCDIC_ES_S()
	{
		return 'EBCDIC-ES-S';
	}

	/**
	 * Represents the charset `EBCDIC-UK`.
	 * @type {string}
	 */
	static get EBCDIC_UK()
	{
		return 'EBCDIC-UK';
	}

	/**
	 * Represents the charset `EBCDIC-US`.
	 * @type {string}
	 */
	static get EBCDIC_US()
	{
		return 'EBCDIC-US';
	}

	/**
	 * Represents the charset `UNKNOWN-8BIT`.
	 * @type {string}
	 */
	static get UNKNOWN_8BIT()
	{
		return 'UNKNOWN-8BIT';
	}

	/**
	 * Represents the charset `MNEMONIC`.
	 * @type {string}
	 */
	static get MNEMONIC()
	{
		return 'MNEMONIC';
	}

	/**
	 * Represents the charset `MNEM`.
	 * @type {string}
	 */
	static get MNEM()
	{
		return 'MNEM';
	}

	/**
	 * Represents the charset `VISCII`.
	 * @type {string}
	 */
	static get VISCII()
	{
		return 'VISCII';
	}

	/**
	 * Represents the charset `VIQR`.
	 * @type {string}
	 */
	static get VIQR()
	{
		return 'VIQR';
	}

	/**
	 * Represents the charset `KOI8-R`.
	 * @type {string}
	 */
	static get KOI8_R()
	{
		return 'KOI8-R';
	}

	/**
	 * Represents the charset `HZ-GB-2312`.
	 * @type {string}
	 */
	static get HZ_GB_2312()
	{
		return 'HZ-GB-2312';
	}

	/**
	 * Represents the charset `IBM866`.
	 * @type {string}
	 */
	static get IBM866()
	{
		return 'IBM866';
	}

	/**
	 * Represents the charset `IBM775`.
	 * @type {string}
	 */
	static get IBM775()
	{
		return 'IBM775';
	}

	/**
	 * Represents the charset `KOI8-U`.
	 * @type {string}
	 */
	static get KOI8_U()
	{
		return 'KOI8-U';
	}

	/**
	 * Represents the charset `IBM00858`.
	 * @type {string}
	 */
	static get IBM00858()
	{
		return 'IBM00858';
	}

	/**
	 * Represents the charset `IBM00924`.
	 * @type {string}
	 */
	static get IBM00924()
	{
		return 'IBM00924';
	}

	/**
	 * Represents the charset `IBM01140`.
	 * @type {string}
	 */
	static get IBM01140()
	{
		return 'IBM01140';
	}

	/**
	 * Represents the charset `IBM01141`.
	 * @type {string}
	 */
	static get IBM01141()
	{
		return 'IBM01141';
	}

	/**
	 * Represents the charset `IBM01142`.
	 * @type {string}
	 */
	static get IBM01142()
	{
		return 'IBM01142';
	}

	/**
	 * Represents the charset `IBM01143`.
	 * @type {string}
	 */
	static get IBM01143()
	{
		return 'IBM01143';
	}

	/**
	 * Represents the charset `IBM01144`.
	 * @type {string}
	 */
	static get IBM01144()
	{
		return 'IBM01144';
	}

	/**
	 * Represents the charset `IBM01145`.
	 * @type {string}
	 */
	static get IBM01145()
	{
		return 'IBM01145';
	}

	/**
	 * Represents the charset `IBM01146`.
	 * @type {string}
	 */
	static get IBM01146()
	{
		return 'IBM01146';
	}

	/**
	 * Represents the charset `IBM01147`.
	 * @type {string}
	 */
	static get IBM01147()
	{
		return 'IBM01147';
	}

	/**
	 * Represents the charset `IBM01148`.
	 * @type {string}
	 */
	static get IBM01148()
	{
		return 'IBM01148';
	}

	/**
	 * Represents the charset `IBM01149`.
	 * @type {string}
	 */
	static get IBM01149()
	{
		return 'IBM01149';
	}

	/**
	 * Represents the charset `Big5-HKSCS`.
	 * @type {string}
	 */
	static get BIG5_HKSCS()
	{
		return 'Big5-HKSCS';
	}

	/**
	 * Represents the charset `IBM1047`.
	 * @type {string}
	 */
	static get IBM1047()
	{
		return 'IBM1047';
	}

	/**
	 * Represents the charset `PTCP154`.
	 * @type {string}
	 */
	static get PTCP154()
	{
		return 'PTCP154';
	}

	/**
	 * Represents the charset `Amiga-1251`.
	 * @type {string}
	 */
	static get AMIGA_1251()
	{
		return 'Amiga-1251';
	}

	/**
	 * Represents the charset `KOI7-switched`.
	 * @type {string}
	 */
	static get KOI7_SWITCHED()
	{
		return 'KOI7-switched';
	}

	/**
	 * Represents the charset `BRF`.
	 * @type {string}
	 */
	static get BRF()
	{
		return 'BRF';
	}

	/**
	 * Represents the charset `TSCII`.
	 * @type {string}
	 */
	static get TSCII()
	{
		return 'TSCII';
	}

	/**
	 * Represents the charset `CP51932`.
	 * @type {string}
	 */
	static get CP51932()
	{
		return 'CP51932';
	}

	/**
	 * Represents the charset `windows-874`.
	 * @type {string}
	 */
	static get WINDOWS_874()
	{
		return 'windows-874';
	}

	/**
	 * Represents the charset `windows-1250`.
	 * @type {string}
	 */
	static get WINDOWS_1250()
	{
		return 'windows-1250';
	}

	/**
	 * Represents the charset `windows-1251`.
	 * @type {string}
	 */
	static get WINDOWS_1251()
	{
		return 'windows-1251';
	}

	/**
	 * Represents the charset `windows-1252`.
	 * @type {string}
	 */
	static get WINDOWS_1252()
	{
		return 'windows-1252';
	}

	/**
	 * Represents the charset `windows-1253`.
	 * @type {string}
	 */
	static get WINDOWS_1253()
	{
		return 'windows-1253';
	}

	/**
	 * Represents the charset `windows-1254`.
	 * @type {string}
	 */
	static get WINDOWS_1254()
	{
		return 'windows-1254';
	}

	/**
	 * Represents the charset `windows-1255`.
	 * @type {string}
	 */
	static get WINDOWS_1255()
	{
		return 'windows-1255';
	}

	/**
	 * Represents the charset `windows-1256`.
	 * @type {string}
	 */
	static get WINDOWS_1256()
	{
		return 'windows-1256';
	}

	/**
	 * Represents the charset `windows-1257`.
	 * @type {string}
	 */
	static get WINDOWS_1257()
	{
		return 'windows-1257';
	}

	/**
	 * Represents the charset `windows-1258`.
	 * @type {string}
	 */
	static get WINDOWS_1258()
	{
		return 'windows-1258';
	}

	/**
	 * Represents the charset `TIS-620`.
	 * @type {string}
	 */
	static get TIS_620()
	{
		return 'TIS-620';
	}

	/**
	 * Represents the charset `CP50220`.
	 * @type {string}
	 */
	static get CP50220()
	{
		return 'CP50220';
	}
}
