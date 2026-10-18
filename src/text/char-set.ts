'use strict';

/**
 * Represents an enumeration of charsets.
 * @link https://www.iana.org/assignments/character-sets/character-sets.xhtml
 * @version 2022-07-14
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum CharSet
{
	/**
	 * Represents the charset `US-ASCII`.
	 */
	US_ASCII                                      = 'US-ASCII',

	/**
	 * Represents the charset `ISO_8859-1:1987`.
	 */
	ISO_8859_1_1987                               = 'ISO-8859-1',

	/**
	 * Represents the charset `ISO_8859-2:1987`.
	 */
	ISO_8859_2_1987                               = 'ISO-8859-2',

	/**
	 * Represents the charset `ISO_8859-3:1988`.
	 */
	ISO_8859_3_1988                               = 'ISO-8859-3',

	/**
	 * Represents the charset `ISO_8859-4:1988`.
	 */
	ISO_8859_4_1988                               = 'ISO-8859-4',

	/**
	 * Represents the charset `ISO_8859-5:1988`.
	 */
	ISO_8859_5_1988                               = 'ISO-8859-5',

	/**
	 * Represents the charset `ISO_8859-6:1987`.
	 */
	ISO_8859_6_1987                               = 'ISO-8859-6',

	/**
	 * Represents the charset `ISO_8859-7:1987`.
	 */
	ISO_8859_7_1987                               = 'ISO-8859-7',

	/**
	 * Represents the charset `ISO_8859-8:1988`.
	 */
	ISO_8859_8_1988                               = 'ISO-8859-8',

	/**
	 * Represents the charset `ISO_8859-9:1989`.
	 */
	ISO_8859_9_1989                               = 'ISO-8859-9',

	/**
	 * Represents the charset `ISO-8859-10`.
	 */
	ISO_8859_10                                   = 'ISO-8859-10',

	/**
	 * Represents the charset `ISO_6937-2-add`.
	 */
	ISO_6937_2_ADD                                = 'ISO_6937-2-add',

	/**
	 * Represents the charset `JIS_X0201`.
	 */
	JIS_X0201                                     = 'JIS_X0201',

	/**
	 * Represents the charset `JIS_Encoding`.
	 */
	JIS_ENCODING                                  = 'JIS_Encoding',

	/**
	 * Represents the charset `Shift_JIS`.
	 */
	SHIFT_JIS                                     = 'Shift_JIS',

	/**
	 * Represents the charset `Extended_UNIX_Code_Packed_Format_for_Japanese`.
	 */
	EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE = 'EUC-JP',

	/**
	 * Represents the charset `Extended_UNIX_Code_Fixed_Width_for_Japanese`.
	 */
	EXTENDED_UNIX_CODE_FIXED_WIDTH_FOR_JAPANESE   = 'Extended_UNIX_Code_Fixed_Width_for_Japanese',

	/**
	 * Represents the charset `BS_4730`.
	 */
	BS_4730                                       = 'BS_4730',

	/**
	 * Represents the charset `SEN_850200_C`.
	 */
	SEN_850200_C                                  = 'SEN_850200_C',

	/**
	 * Represents the charset `IT`.
	 */
	IT                                            = 'IT',

	/**
	 * Represents the charset `ES`.
	 */
	ES                                            = 'ES',

	/**
	 * Represents the charset `DIN_66003`.
	 */
	DIN_66003                                     = 'DIN_66003',

	/**
	 * Represents the charset `NS_4551-1`.
	 */
	NS_4551_1                                     = 'NS_4551-1',

	/**
	 * Represents the charset `NF_Z_62-010`.
	 */
	NF_Z_62_010                                   = 'NF_Z_62-010',

	/**
	 * Represents the charset `ISO-10646-UTF-1`.
	 */
	ISO_10646_UTF_1                               = 'ISO-10646-UTF-1',

	/**
	 * Represents the charset `ISO_646.basic:1983`.
	 */
	ISO_646_BASIC_1983                            = 'ISO_646.basic:1983',

	/**
	 * Represents the charset `INVARIANT`.
	 */
	INVARIANT                                     = 'INVARIANT',

	/**
	 * Represents the charset `ISO_646.irv:1983`.
	 */
	ISO_646_IRV_1983                              = 'ISO_646.irv:1983',

	/**
	 * Represents the charset `NATS-SEFI`.
	 */
	NATS_SEFI                                     = 'NATS-SEFI',

	/**
	 * Represents the charset `NATS-SEFI-ADD`.
	 */
	NATS_SEFI_ADD                                 = 'NATS-SEFI-ADD',

	/**
	 * Represents the charset `NATS-DANO`.
	 */
	NATS_DANO                                     = 'NATS-DANO',

	/**
	 * Represents the charset `NATS-DANO-ADD`.
	 */
	NATS_DANO_ADD                                 = 'NATS-DANO-ADD',

	/**
	 * Represents the charset `SEN_850200_B`.
	 */
	SEN_850200_B                                  = 'SEN_850200_B',

	/**
	 * Represents the charset `KS_C_5601-1987`.
	 */
	KS_C_5601_1987                                = 'KS_C_5601-1987',

	/**
	 * Represents the charset `ISO-2022-KR`.
	 */
	ISO_2022_KR                                   = 'ISO-2022-KR',

	/**
	 * Represents the charset `EUC-KR`.
	 */
	EUC_KR                                        = 'EUC-KR',

	/**
	 * Represents the charset `ISO-2022-JP`.
	 */
	ISO_2022_JP                                   = 'ISO-2022-JP',

	/**
	 * Represents the charset `ISO-2022-JP-2`.
	 */
	ISO_2022_JP_2                                 = 'ISO-2022-JP-2',

	/**
	 * Represents the charset `JIS_C6220-1969-jp`.
	 */
	JIS_C6220_1969_JP                             = 'JIS_C6220-1969-jp',

	/**
	 * Represents the charset `JIS_C6220-1969-ro`.
	 */
	JIS_C6220_1969_RO                             = 'JIS_C6220-1969-ro',

	/**
	 * Represents the charset `PT`.
	 */
	PT                                            = 'PT',

	/**
	 * Represents the charset `greek7-old`.
	 */
	GREEK7_OLD                                    = 'greek7-old',

	/**
	 * Represents the charset `latin-greek`.
	 */
	LATIN_GREEK                                   = 'latin-greek',

	/**
	 * Represents the charset `NF_Z_62-010_(1973)`.
	 */
	NF_Z_62_010_1973                              = 'NF_Z_62-010_(1973)',

	/**
	 * Represents the charset `Latin-greek-1`.
	 */
	LATIN_GREEK_1                                 = 'Latin-greek-1',

	/**
	 * Represents the charset `ISO_5427`.
	 */
	ISO_5427                                      = 'ISO_5427',

	/**
	 * Represents the charset `JIS_C6226-1978`.
	 */
	JIS_C6226_1978                                = 'JIS_C6226-1978',

	/**
	 * Represents the charset `BS_viewdata`.
	 */
	BS_VIEWDATA                                   = 'BS_viewdata',

	/**
	 * Represents the charset `INIS`.
	 */
	INIS                                          = 'INIS',

	/**
	 * Represents the charset `INIS-8`.
	 */
	INIS_8                                        = 'INIS-8',

	/**
	 * Represents the charset `INIS-cyrillic`.
	 */
	INIS_CYRILLIC                                 = 'INIS-cyrillic',

	/**
	 * Represents the charset `ISO_5427:1981`.
	 */
	ISO_5427_1981                                 = 'ISO_5427:1981',

	/**
	 * Represents the charset `ISO_5428:1980`.
	 */
	ISO_5428_1980                                 = 'ISO_5428:1980',

	/**
	 * Represents the charset `GB_1988-80`.
	 */
	GB_1988_80                                    = 'GB_1988-80',

	/**
	 * Represents the charset `GB_2312-80`.
	 */
	GB_2312_80                                    = 'GB_2312-80',

	/**
	 * Represents the charset `NS_4551-2`.
	 */
	NS_4551_2                                     = 'NS_4551-2',

	/**
	 * Represents the charset `videotex-suppl`.
	 */
	VIDEOTEX_SUPPL                                = 'videotex-suppl',

	/**
	 * Represents the charset `PT2`.
	 */
	PT2                                           = 'PT2',

	/**
	 * Represents the charset `ES2`.
	 */
	ES2                                           = 'ES2',

	/**
	 * Represents the charset `MSZ_7795.3`.
	 */
	MSZ_7795_3                                    = 'MSZ_7795.3',

	/**
	 * Represents the charset `JIS_C6226-1983`.
	 */
	JIS_C6226_1983                                = 'JIS_C6226-1983',

	/**
	 * Represents the charset `greek7`.
	 */
	GREEK7                                        = 'greek7',

	/**
	 * Represents the charset `ASMO_449`.
	 */
	ASMO_449                                      = 'ASMO_449',

	/**
	 * Represents the charset `iso-ir-90`.
	 */
	ISO_IR_90                                     = 'iso-ir-90',

	/**
	 * Represents the charset `JIS_C6229-1984-a`.
	 */
	JIS_C6229_1984_A                              = 'JIS_C6229-1984-a',

	/**
	 * Represents the charset `JIS_C6229-1984-b`.
	 */
	JIS_C6229_1984_B                              = 'JIS_C6229-1984-b',

	/**
	 * Represents the charset `JIS_C6229-1984-b-add`.
	 */
	JIS_C6229_1984_B_ADD                          = 'JIS_C6229-1984-b-add',

	/**
	 * Represents the charset `JIS_C6229-1984-hand`.
	 */
	JIS_C6229_1984_HAND                           = 'JIS_C6229-1984-hand',

	/**
	 * Represents the charset `JIS_C6229-1984-hand-add`.
	 */
	JIS_C6229_1984_HAND_ADD                       = 'JIS_C6229-1984-hand-add',

	/**
	 * Represents the charset `JIS_C6229-1984-kana`.
	 */
	JIS_C6229_1984_KANA                           = 'JIS_C6229-1984-kana',

	/**
	 * Represents the charset `ISO_2033-1983`.
	 */
	ISO_2033_1983                                 = 'ISO_2033-1983',

	/**
	 * Represents the charset `ANSI_X3.110-1983`.
	 */
	ANSI_X3_110_1983                              = 'ANSI_X3.110-1983',

	/**
	 * Represents the charset `T.61-7bit`.
	 */
	T_61_7BIT                                     = 'T.61-7bit',

	/**
	 * Represents the charset `T.61-8bit`.
	 */
	T_61_8BIT                                     = 'T.61-8bit',

	/**
	 * Represents the charset `ECMA-cyrillic`.
	 */
	ECMA_CYRILLIC                                 = 'ECMA-cyrillic',

	/**
	 * Represents the charset `CSA_Z243.4-1985-1`.
	 */
	CSA_Z243_4_1985_1                             = 'CSA_Z243.4-1985-1',

	/**
	 * Represents the charset `CSA_Z243.4-1985-2`.
	 */
	CSA_Z243_4_1985_2                             = 'CSA_Z243.4-1985-2',

	/**
	 * Represents the charset `CSA_Z243.4-1985-gr`.
	 */
	CSA_Z243_4_1985_GR                            = 'CSA_Z243.4-1985-gr',

	/**
	 * Represents the charset `ISO_8859-6-E`.
	 */
	ISO_8859_6_E                                  = 'ISO-8859-6-E',

	/**
	 * Represents the charset `ISO_8859-6-I`.
	 */
	ISO_8859_6_I                                  = 'ISO-8859-6-I',

	/**
	 * Represents the charset `T.101-G2`.
	 */
	T_101_G2                                      = 'T.101-G2',

	/**
	 * Represents the charset `ISO_8859-8-E`.
	 */
	ISO_8859_8_E                                  = 'ISO-8859-8-E',

	/**
	 * Represents the charset `ISO_8859-8-I`.
	 */
	ISO_8859_8_I                                  = 'ISO-8859-8-I',

	/**
	 * Represents the charset `CSN_369103`.
	 */
	CSN_369103                                    = 'CSN_369103',

	/**
	 * Represents the charset `JUS_I.B1.002`.
	 */
	JUS_I_B1_002                                  = 'JUS_I.B1.002',

	/**
	 * Represents the charset `IEC_P27-1`.
	 */
	IEC_P27_1                                     = 'IEC_P27-1',

	/**
	 * Represents the charset `JUS_I.B1.003-serb`.
	 */
	JUS_I_B1_003_SERB                             = 'JUS_I.B1.003-serb',

	/**
	 * Represents the charset `JUS_I.B1.003-mac`.
	 */
	JUS_I_B1_003_MAC                              = 'JUS_I.B1.003-mac',

	/**
	 * Represents the charset `greek-ccitt`.
	 */
	GREEK_CCITT                                   = 'greek-ccitt',

	/**
	 * Represents the charset `NC_NC00-10:81`.
	 */
	NC_NC00_10_81                                 = 'NC_NC00-10:81',

	/**
	 * Represents the charset `ISO_6937-2-25`.
	 */
	ISO_6937_2_25                                 = 'ISO_6937-2-25',

	/**
	 * Represents the charset `GOST_19768-74`.
	 */
	GOST_19768_74                                 = 'GOST_19768-74',

	/**
	 * Represents the charset `ISO_8859-supp`.
	 */
	ISO_8859_SUPP                                 = 'ISO_8859-supp',

	/**
	 * Represents the charset `ISO_10367-box`.
	 */
	ISO_10367_BOX                                 = 'ISO_10367-box',

	/**
	 * Represents the charset `latin-lap`.
	 */
	LATIN_LAP                                     = 'latin-lap',

	/**
	 * Represents the charset `JIS_X0212-1990`.
	 */
	JIS_X0212_1990                                = 'JIS_X0212-1990',

	/**
	 * Represents the charset `DS_2089`.
	 */
	DS_2089                                       = 'DS_2089',

	/**
	 * Represents the charset `us-dk`.
	 */
	US_DK                                         = 'us-dk',

	/**
	 * Represents the charset `dk-us`.
	 */
	DK_US                                         = 'dk-us',

	/**
	 * Represents the charset `KSC5636`.
	 */
	KSC5636                                       = 'KSC5636',

	/**
	 * Represents the charset `UNICODE-1-1-UTF-7`.
	 */
	UNICODE_1_1_UTF_7                             = 'UNICODE-1-1-UTF-7',

	/**
	 * Represents the charset `ISO-2022-CN`.
	 */
	ISO_2022_CN                                   = 'ISO-2022-CN',

	/**
	 * Represents the charset `ISO-2022-CN-EXT`.
	 */
	ISO_2022_CN_EXT                               = 'ISO-2022-CN-EXT',

	/**
	 * Represents the charset `UTF-8`.
	 */
	UTF_8                                         = 'UTF-8',

	/**
	 * Represents the charset `ISO-8859-13`.
	 */
	ISO_8859_13                                   = 'ISO-8859-13',

	/**
	 * Represents the charset `ISO-8859-14`.
	 */
	ISO_8859_14                                   = 'ISO-8859-14',

	/**
	 * Represents the charset `ISO-8859-15`.
	 */
	ISO_8859_15                                   = 'ISO-8859-15',

	/**
	 * Represents the charset `ISO-8859-16`.
	 */
	ISO_8859_16                                   = 'ISO-8859-16',

	/**
	 * Represents the charset `GBK`.
	 */
	GBK                                           = 'GBK',

	/**
	 * Represents the charset `GB18030`.
	 */
	GB18030                                       = 'GB18030',

	/**
	 * Represents the charset `OSD_EBCDIC_DF04_15`.
	 */
	OSD_EBCDIC_DF04_15                            = 'OSD_EBCDIC_DF04_15',

	/**
	 * Represents the charset `OSD_EBCDIC_DF03_IRV`.
	 */
	OSD_EBCDIC_DF03_IRV                           = 'OSD_EBCDIC_DF03_IRV',

	/**
	 * Represents the charset `OSD_EBCDIC_DF04_1`.
	 */
	OSD_EBCDIC_DF04_1                             = 'OSD_EBCDIC_DF04_1',

	/**
	 * Represents the charset `ISO-11548-1`.
	 */
	ISO_11548_1                                   = 'ISO-11548-1',

	/**
	 * Represents the charset `KZ-1048`.
	 */
	KZ_1048                                       = 'KZ-1048',

	/**
	 * Represents the charset `ISO-10646-UCS-2`.
	 */
	ISO_10646_UCS_2                               = 'ISO-10646-UCS-2',

	/**
	 * Represents the charset `ISO-10646-UCS-4`.
	 */
	ISO_10646_UCS_4                               = 'ISO-10646-UCS-4',

	/**
	 * Represents the charset `ISO-10646-UCS-Basic`.
	 */
	ISO_10646_UCS_BASIC                           = 'ISO-10646-UCS-Basic',

	/**
	 * Represents the charset `ISO-10646-Unicode-Latin1`.
	 */
	ISO_10646_UNICODE_LATIN1                      = 'ISO-10646-Unicode-Latin1',

	/**
	 * Represents the charset `ISO-10646-J-1`.
	 */
	ISO_10646_J_1                                 = 'ISO-10646-J-1',

	/**
	 * Represents the charset `ISO-Unicode-IBM-1261`.
	 */
	ISO_UNICODE_IBM_1261                          = 'ISO-Unicode-IBM-1261',

	/**
	 * Represents the charset `ISO-Unicode-IBM-1268`.
	 */
	ISO_UNICODE_IBM_1268                          = 'ISO-Unicode-IBM-1268',

	/**
	 * Represents the charset `ISO-Unicode-IBM-1276`.
	 */
	ISO_UNICODE_IBM_1276                          = 'ISO-Unicode-IBM-1276',

	/**
	 * Represents the charset `ISO-Unicode-IBM-1264`.
	 */
	ISO_UNICODE_IBM_1264                          = 'ISO-Unicode-IBM-1264',

	/**
	 * Represents the charset `ISO-Unicode-IBM-1265`.
	 */
	ISO_UNICODE_IBM_1265                          = 'ISO-Unicode-IBM-1265',

	/**
	 * Represents the charset `UNICODE-1-1`.
	 */
	UNICODE_1_1                                   = 'UNICODE-1-1',

	/**
	 * Represents the charset `SCSU`.
	 */
	SCSU                                          = 'SCSU',

	/**
	 * Represents the charset `UTF-7`.
	 */
	UTF_7                                         = 'UTF-7',

	/**
	 * Represents the charset `UTF-16BE`.
	 */
	UTF_16BE                                      = 'UTF-16BE',

	/**
	 * Represents the charset `UTF-16LE`.
	 */
	UTF_16LE                                      = 'UTF-16LE',

	/**
	 * Represents the charset `UTF-16`.
	 */
	UTF_16                                        = 'UTF-16',

	/**
	 * Represents the charset `CESU-8`.
	 */
	CESU_8                                        = 'CESU-8',

	/**
	 * Represents the charset `UTF-32`.
	 */
	UTF_32                                        = 'UTF-32',

	/**
	 * Represents the charset `UTF-32BE`.
	 */
	UTF_32BE                                      = 'UTF-32BE',

	/**
	 * Represents the charset `UTF-32LE`.
	 */
	UTF_32LE                                      = 'UTF-32LE',

	/**
	 * Represents the charset `BOCU-1`.
	 */
	BOCU_1                                        = 'BOCU-1',

	/**
	 * Represents the charset `UTF-7-IMAP`.
	 */
	UTF_7_IMAP                                    = 'UTF-7-IMAP',

	/**
	 * Represents the charset `ISO-8859-1-Windows-3.0-Latin-1`.
	 */
	ISO_8859_1_WINDOWS_3_0_LATIN_1                = 'ISO-8859-1-Windows-3.0-Latin-1',

	/**
	 * Represents the charset `ISO-8859-1-Windows-3.1-Latin-1`.
	 */
	ISO_8859_1_WINDOWS_3_1_LATIN_1                = 'ISO-8859-1-Windows-3.1-Latin-1',

	/**
	 * Represents the charset `ISO-8859-2-Windows-Latin-2`.
	 */
	ISO_8859_2_WINDOWS_LATIN_2                    = 'ISO-8859-2-Windows-Latin-2',

	/**
	 * Represents the charset `ISO-8859-9-Windows-Latin-5`.
	 */
	ISO_8859_9_WINDOWS_LATIN_5                    = 'ISO-8859-9-Windows-Latin-5',

	/**
	 * Represents the charset `hp-roman8`.
	 */
	HP_ROMAN8                                     = 'hp-roman8',

	/**
	 * Represents the charset `Adobe-Standard-Encoding`.
	 */
	ADOBE_STANDARD_ENCODING                       = 'Adobe-Standard-Encoding',

	/**
	 * Represents the charset `Ventura-US`.
	 */
	VENTURA_US                                    = 'Ventura-US',

	/**
	 * Represents the charset `Ventura-International`.
	 */
	VENTURA_INTERNATIONAL                         = 'Ventura-International',

	/**
	 * Represents the charset `DEC-MCS`.
	 */
	DEC_MCS                                       = 'DEC-MCS',

	/**
	 * Represents the charset `IBM850`.
	 */
	IBM850                                        = 'IBM850',

	/**
	 * Represents the charset `PC8-Danish-Norwegian`.
	 */
	PC8_DANISH_NORWEGIAN                          = 'PC8-Danish-Norwegian',

	/**
	 * Represents the charset `IBM862`.
	 */
	IBM862                                        = 'IBM862',

	/**
	 * Represents the charset `PC8-Turkish`.
	 */
	PC8_TURKISH                                   = 'PC8-Turkish',

	/**
	 * Represents the charset `IBM-Symbols`.
	 */
	IBM_SYMBOLS                                   = 'IBM-Symbols',

	/**
	 * Represents the charset `IBM-Thai`.
	 */
	IBM_THAI                                      = 'IBM-Thai',

	/**
	 * Represents the charset `HP-Legal`.
	 */
	HP_LEGAL                                      = 'HP-Legal',

	/**
	 * Represents the charset `HP-Pi-font`.
	 */
	HP_PI_FONT                                    = 'HP-Pi-font',

	/**
	 * Represents the charset `HP-Math8`.
	 */
	HP_MATH8                                      = 'HP-Math8',

	/**
	 * Represents the charset `Adobe-Symbol-Encoding`.
	 */
	ADOBE_SYMBOL_ENCODING                         = 'Adobe-Symbol-Encoding',

	/**
	 * Represents the charset `HP-DeskTop`.
	 */
	HP_DESKTOP                                    = 'HP-DeskTop',

	/**
	 * Represents the charset `Ventura-Math`.
	 */
	VENTURA_MATH                                  = 'Ventura-Math',

	/**
	 * Represents the charset `Microsoft-Publishing`.
	 */
	MICROSOFT_PUBLISHING                          = 'Microsoft-Publishing',

	/**
	 * Represents the charset `Windows-31J`.
	 */
	WINDOWS_31J                                   = 'Windows-31J',

	/**
	 * Represents the charset `GB2312`.
	 */
	GB2312                                        = 'GB2312',

	/**
	 * Represents the charset `Big5`.
	 */
	BIG5                                          = 'Big5',

	/**
	 * Represents the charset `macintosh`.
	 */
	MACINTOSH                                     = 'macintosh',

	/**
	 * Represents the charset `IBM037`.
	 */
	IBM037                                        = 'IBM037',

	/**
	 * Represents the charset `IBM038`.
	 */
	IBM038                                        = 'IBM038',

	/**
	 * Represents the charset `IBM273`.
	 */
	IBM273                                        = 'IBM273',

	/**
	 * Represents the charset `IBM274`.
	 */
	IBM274                                        = 'IBM274',

	/**
	 * Represents the charset `IBM275`.
	 */
	IBM275                                        = 'IBM275',

	/**
	 * Represents the charset `IBM277`.
	 */
	IBM277                                        = 'IBM277',

	/**
	 * Represents the charset `IBM278`.
	 */
	IBM278                                        = 'IBM278',

	/**
	 * Represents the charset `IBM280`.
	 */
	IBM280                                        = 'IBM280',

	/**
	 * Represents the charset `IBM281`.
	 */
	IBM281                                        = 'IBM281',

	/**
	 * Represents the charset `IBM284`.
	 */
	IBM284                                        = 'IBM284',

	/**
	 * Represents the charset `IBM285`.
	 */
	IBM285                                        = 'IBM285',

	/**
	 * Represents the charset `IBM290`.
	 */
	IBM290                                        = 'IBM290',

	/**
	 * Represents the charset `IBM297`.
	 */
	IBM297                                        = 'IBM297',

	/**
	 * Represents the charset `IBM420`.
	 */
	IBM420                                        = 'IBM420',

	/**
	 * Represents the charset `IBM423`.
	 */
	IBM423                                        = 'IBM423',

	/**
	 * Represents the charset `IBM424`.
	 */
	IBM424                                        = 'IBM424',

	/**
	 * Represents the charset `IBM437`.
	 */
	IBM437                                        = 'IBM437',

	/**
	 * Represents the charset `IBM500`.
	 */
	IBM500                                        = 'IBM500',

	/**
	 * Represents the charset `IBM851`.
	 */
	IBM851                                        = 'IBM851',

	/**
	 * Represents the charset `IBM852`.
	 */
	IBM852                                        = 'IBM852',

	/**
	 * Represents the charset `IBM855`.
	 */
	IBM855                                        = 'IBM855',

	/**
	 * Represents the charset `IBM857`.
	 */
	IBM857                                        = 'IBM857',

	/**
	 * Represents the charset `IBM860`.
	 */
	IBM860                                        = 'IBM860',

	/**
	 * Represents the charset `IBM861`.
	 */
	IBM861                                        = 'IBM861',

	/**
	 * Represents the charset `IBM863`.
	 */
	IBM863                                        = 'IBM863',

	/**
	 * Represents the charset `IBM864`.
	 */
	IBM864                                        = 'IBM864',

	/**
	 * Represents the charset `IBM865`.
	 */
	IBM865                                        = 'IBM865',

	/**
	 * Represents the charset `IBM868`.
	 */
	IBM868                                        = 'IBM868',

	/**
	 * Represents the charset `IBM869`.
	 */
	IBM869                                        = 'IBM869',

	/**
	 * Represents the charset `IBM870`.
	 */
	IBM870                                        = 'IBM870',

	/**
	 * Represents the charset `IBM871`.
	 */
	IBM871                                        = 'IBM871',

	/**
	 * Represents the charset `IBM880`.
	 */
	IBM880                                        = 'IBM880',

	/**
	 * Represents the charset `IBM891`.
	 */
	IBM891                                        = 'IBM891',

	/**
	 * Represents the charset `IBM903`.
	 */
	IBM903                                        = 'IBM903',

	/**
	 * Represents the charset `IBM904`.
	 */
	IBM904                                        = 'IBM904',

	/**
	 * Represents the charset `IBM905`.
	 */
	IBM905                                        = 'IBM905',

	/**
	 * Represents the charset `IBM918`.
	 */
	IBM918                                        = 'IBM918',

	/**
	 * Represents the charset `IBM1026`.
	 */
	IBM1026                                       = 'IBM1026',

	/**
	 * Represents the charset `EBCDIC-AT-DE`.
	 */
	EBCDIC_AT_DE                                  = 'EBCDIC-AT-DE',

	/**
	 * Represents the charset `EBCDIC-AT-DE-A`.
	 */
	EBCDIC_AT_DE_A                                = 'EBCDIC-AT-DE-A',

	/**
	 * Represents the charset `EBCDIC-CA-FR`.
	 */
	EBCDIC_CA_FR                                  = 'EBCDIC-CA-FR',

	/**
	 * Represents the charset `EBCDIC-DK-NO`.
	 */
	EBCDIC_DK_NO                                  = 'EBCDIC-DK-NO',

	/**
	 * Represents the charset `EBCDIC-DK-NO-A`.
	 */
	EBCDIC_DK_NO_A                                = 'EBCDIC-DK-NO-A',

	/**
	 * Represents the charset `EBCDIC-FI-SE`.
	 */
	EBCDIC_FI_SE                                  = 'EBCDIC-FI-SE',

	/**
	 * Represents the charset `EBCDIC-FI-SE-A`.
	 */
	EBCDIC_FI_SE_A                                = 'EBCDIC-FI-SE-A',

	/**
	 * Represents the charset `EBCDIC-FR`.
	 */
	EBCDIC_FR                                     = 'EBCDIC-FR',

	/**
	 * Represents the charset `EBCDIC-IT`.
	 */
	EBCDIC_IT                                     = 'EBCDIC-IT',

	/**
	 * Represents the charset `EBCDIC-PT`.
	 */
	EBCDIC_PT                                     = 'EBCDIC-PT',

	/**
	 * Represents the charset `EBCDIC-ES`.
	 */
	EBCDIC_ES                                     = 'EBCDIC-ES',

	/**
	 * Represents the charset `EBCDIC-ES-A`.
	 */
	EBCDIC_ES_A                                   = 'EBCDIC-ES-A',

	/**
	 * Represents the charset `EBCDIC-ES-S`.
	 */
	EBCDIC_ES_S                                   = 'EBCDIC-ES-S',

	/**
	 * Represents the charset `EBCDIC-UK`.
	 */
	EBCDIC_UK                                     = 'EBCDIC-UK',

	/**
	 * Represents the charset `EBCDIC-US`.
	 */
	EBCDIC_US                                     = 'EBCDIC-US',

	/**
	 * Represents the charset `UNKNOWN-8BIT`.
	 */
	UNKNOWN_8BIT                                  = 'UNKNOWN-8BIT',

	/**
	 * Represents the charset `MNEMONIC`.
	 */
	MNEMONIC                                      = 'MNEMONIC',

	/**
	 * Represents the charset `MNEM`.
	 */
	MNEM                                          = 'MNEM',

	/**
	 * Represents the charset `VISCII`.
	 */
	VISCII                                        = 'VISCII',

	/**
	 * Represents the charset `VIQR`.
	 */
	VIQR                                          = 'VIQR',

	/**
	 * Represents the charset `KOI8-R`.
	 */
	KOI8_R                                        = 'KOI8-R',

	/**
	 * Represents the charset `HZ-GB-2312`.
	 */
	HZ_GB_2312                                    = 'HZ-GB-2312',

	/**
	 * Represents the charset `IBM866`.
	 */
	IBM866                                        = 'IBM866',

	/**
	 * Represents the charset `IBM775`.
	 */
	IBM775                                        = 'IBM775',

	/**
	 * Represents the charset `KOI8-U`.
	 */
	KOI8_U                                        = 'KOI8-U',

	/**
	 * Represents the charset `IBM00858`.
	 */
	IBM00858                                      = 'IBM00858',

	/**
	 * Represents the charset `IBM00924`.
	 */
	IBM00924                                      = 'IBM00924',

	/**
	 * Represents the charset `IBM01140`.
	 */
	IBM01140                                      = 'IBM01140',

	/**
	 * Represents the charset `IBM01141`.
	 */
	IBM01141                                      = 'IBM01141',

	/**
	 * Represents the charset `IBM01142`.
	 */
	IBM01142                                      = 'IBM01142',

	/**
	 * Represents the charset `IBM01143`.
	 */
	IBM01143                                      = 'IBM01143',

	/**
	 * Represents the charset `IBM01144`.
	 */
	IBM01144                                      = 'IBM01144',

	/**
	 * Represents the charset `IBM01145`.
	 */
	IBM01145                                      = 'IBM01145',

	/**
	 * Represents the charset `IBM01146`.
	 */
	IBM01146                                      = 'IBM01146',

	/**
	 * Represents the charset `IBM01147`.
	 */
	IBM01147                                      = 'IBM01147',

	/**
	 * Represents the charset `IBM01148`.
	 */
	IBM01148                                      = 'IBM01148',

	/**
	 * Represents the charset `IBM01149`.
	 */
	IBM01149                                      = 'IBM01149',

	/**
	 * Represents the charset `Big5-HKSCS`.
	 */
	BIG5_HKSCS                                    = 'Big5-HKSCS',

	/**
	 * Represents the charset `IBM1047`.
	 */
	IBM1047                                       = 'IBM1047',

	/**
	 * Represents the charset `PTCP154`.
	 */
	PTCP154                                       = 'PTCP154',

	/**
	 * Represents the charset `Amiga-1251`.
	 */
	AMIGA_1251                                    = 'Amiga-1251',

	/**
	 * Represents the charset `KOI7-switched`.
	 */
	KOI7_SWITCHED                                 = 'KOI7-switched',

	/**
	 * Represents the charset `BRF`.
	 */
	BRF                                           = 'BRF',

	/**
	 * Represents the charset `TSCII`.
	 */
	TSCII                                         = 'TSCII',

	/**
	 * Represents the charset `CP51932`.
	 */
	CP51932                                       = 'CP51932',

	/**
	 * Represents the charset `windows-874`.
	 */
	WINDOWS_874                                   = 'windows-874',

	/**
	 * Represents the charset `windows-1250`.
	 */
	WINDOWS_1250                                  = 'windows-1250',

	/**
	 * Represents the charset `windows-1251`.
	 */
	WINDOWS_1251                                  = 'windows-1251',

	/**
	 * Represents the charset `windows-1252`.
	 */
	WINDOWS_1252                                  = 'windows-1252',

	/**
	 * Represents the charset `windows-1253`.
	 */
	WINDOWS_1253                                  = 'windows-1253',

	/**
	 * Represents the charset `windows-1254`.
	 */
	WINDOWS_1254                                  = 'windows-1254',

	/**
	 * Represents the charset `windows-1255`.
	 */
	WINDOWS_1255                                  = 'windows-1255',

	/**
	 * Represents the charset `windows-1256`.
	 */
	WINDOWS_1256                                  = 'windows-1256',

	/**
	 * Represents the charset `windows-1257`.
	 */
	WINDOWS_1257                                  = 'windows-1257',

	/**
	 * Represents the charset `windows-1258`.
	 */
	WINDOWS_1258                                  = 'windows-1258',

	/**
	 * Represents the charset `TIS-620`.
	 */
	TIS_620                                       = 'TIS-620',

	/**
	 * Represents the charset `CP50220`.
	 */
	CP50220                                       = 'CP50220'
}
