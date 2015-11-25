var country_choices = [
  {isocode: "AF", name: "Afghanistan"},
  {isocode: "AX", name: "Åland Islands"},
  {isocode: "AL", name: "Albania"},
  {isocode: "DZ", name: "Algeria"},
  {isocode: "AS", name: "American Samoa"},
  {isocode: "AD", name: "Andorra"},
  {isocode: "AO", name: "Angola"},
  {isocode: "AI", name: "Anguilla"},
  {isocode: "AQ", name: "Antarctica"},
  {isocode: "AG", name: "Antigua and Barbuda"},
  {isocode: "AR", name: "Argentina"},
  {isocode: "AM", name: "Armenia"},
  {isocode: "AW", name: "Aruba"},
  {isocode: "AU", name: "Australia"},
  {isocode: "AT", name: "Austria"},
  {isocode: "AZ", name: "Azerbaijan"},
  {isocode: "BS", name: "Bahamas"},
  {isocode: "BH", name: "Bahrain"},
  {isocode: "BD", name: "Bangladesh"},
  {isocode: "BB", name: "Barbados"},
  {isocode: "BY", name: "Belarus"},
  {isocode: "BE", name: "Belgium"},
  {isocode: "BZ", name: "Belize"},
  {isocode: "BJ", name: "Benin"},
  {isocode: "BM", name: "Bermuda"},
  {isocode: "BT", name: "Bhutan"},
  {isocode: "BO", name: "Bolivia (Plurinational State of)"},
  {isocode: "BQ", name: "Bonaire, Sint Eustatius and Saba"},
  {isocode: "BA", name: "Bosnia and Herzegovina"},
  {isocode: "BW", name: "Botswana"},
  {isocode: "BV", name: "Bouvet Island"},
  {isocode: "BR", name: "Brazil"},
  {isocode: "IO", name: "British Indian Ocean Territory"},
  {isocode: "BN", name: "Brunei Darussalam"},
  {isocode: "BG", name: "Bulgaria"},
  {isocode: "BF", name: "Burkina Faso"},
  {isocode: "BI", name: "Burundi"},
  {isocode: "KH", name: "Cambodia"},
  {isocode: "CM", name: "Cameroon"},
  {isocode: "CA", name: "Canada"},
  {isocode: "CV", name: "Cape Verde"},
  {isocode: "KY", name: "Cayman Islands"},
  {isocode: "CF", name: "Central African Republic"},
  {isocode: "TD", name: "Chad"},
  {isocode: "CL", name: "Chile"},
  {isocode: "CN", name: "China"},
  {isocode: "CX", name: "Christmas Island"},
  {isocode: "CC", name: "Cocos (Keeling) Islands"},
  {isocode: "CO", name: "Colombia"},
  {isocode: "KM", name: "Comoros"},
  {isocode: "CG", name: "Congo"},
  {isocode: "CD", name: "Congo (The Democratic Republic of The)"},
  {isocode: "CK", name: "Cook Islands"},
  {isocode: "CR", name: "Costa Rica"},
  {isocode: "CI", name: "Côte D'Ivoire"},
  {isocode: "HR", name: "Croatia"},
  {isocode: "CU", name: "Cuba"},
  {isocode: "CW", name: "Curaçao"},
  {isocode: "CY", name: "Cyprus"},
  {isocode: "CZ", name: "Czech Republic"},
  {isocode: "DK", name: "Denmark"},
  {isocode: "DJ", name: "Djibouti"},
  {isocode: "DM", name: "Dominica"},
  {isocode: "DO", name: "Dominican Republic"},
  {isocode: "EC", name: "Ecuador"},
  {isocode: "EG", name: "Egypt"},
  {isocode: "SV", name: "El Salvador"},
  {isocode: "GQ", name: "Equatorial Guinea"},
  {isocode: "ER", name: "Eritrea"},
  {isocode: "EE", name: "Estonia"},
  {isocode: "ET", name: "Ethiopia"},
  {isocode: "FK", name: "Falkland Islands (Malvinas)"},
  {isocode: "FO", name: "Faroe Islands"},
  {isocode: "FJ", name: "Fiji"},
  {isocode: "FI", name: "Finland"},
  {isocode: "FR", name: "France"},
  {isocode: "GF", name: "French Guiana"},
  {isocode: "PF", name: "French Polynesia"},
  {isocode: "TF", name: "French Southern Territories"},
  {isocode: "GA", name: "Gabon"},
  {isocode: "GM", name: "Gambia"},
  {isocode: "GE", name: "Georgia"},
  {isocode: "DE", name: "Germany"},
  {isocode: "GH", name: "Ghana"},
  {isocode: "GI", name: "Gibraltar"},
  {isocode: "GR", name: "Greece"},
  {isocode: "GL", name: "Greenland"},
  {isocode: "GD", name: "Grenada"},
  {isocode: "GP", name: "Guadeloupe"},
  {isocode: "GU", name: "Guam"},
  {isocode: "GT", name: "Guatemala"},
  {isocode: "GG", name: "Guernsey"},
  {isocode: "GN", name: "Guinea"},
  {isocode: "GW", name: "Guinea-Bissau"},
  {isocode: "GY", name: "Guyana"},
  {isocode: "HT", name: "Haiti"},
  {isocode: "HM", name: "Heard Island and Mcdonald Islands"},
  {isocode: "VA", name: "Holy See (Vatican City State)"},
  {isocode: "HN", name: "Honduras"},
  {isocode: "HK", name: "Hong Kong"},
  {isocode: "HU", name: "Hungary"},
  {isocode: "IS", name: "Iceland"},
  {isocode: "IN", name: "India"},
  {isocode: "ID", name: "Indonesia"},
  {isocode: "IR", name: "Iran (Islamic Republic of)"},
  {isocode: "IQ", name: "Iraq"},
  {isocode: "IE", name: "Ireland"},
  {isocode: "IM", name: "Isle of Man"},
  {isocode: "IL", name: "Israel"},
  {isocode: "IT", name: "Italy"},
  {isocode: "JM", name: "Jamaica"},
  {isocode: "JP", name: "Japan"},
  {isocode: "JE", name: "Jersey"},
  {isocode: "JO", name: "Jordan"},
  {isocode: "KZ", name: "Kazakhstan"},
  {isocode: "KE", name: "Kenya"},
  {isocode: "KI", name: "Kiribati"},
  {isocode: "KP", name: "Korea (Democratic People's Republic of)"},
  {isocode: "KR", name: "Korea (Republic of)"},
  {isocode: "KW", name: "Kuwait"},
  {isocode: "KG", name: "Kyrgyzstan"},
  {isocode: "LA", name: "Lao People's Democratic Republic"},
  {isocode: "LV", name: "Latvia"},
  {isocode: "LB", name: "Lebanon"},
  {isocode: "LS", name: "Lesotho"},
  {isocode: "LR", name: "Liberia"},
  {isocode: "LY", name: "Libya"},
  {isocode: "LI", name: "Liechtenstein"},
  {isocode: "LT", name: "Lithuania"},
  {isocode: "LU", name: "Luxembourg"},
  {isocode: "MO", name: "Macao"},
  {isocode: "MK", name: "Macedonia (The Former Yugoslav Republic of)"},
  {isocode: "MG", name: "Madagascar"},
  {isocode: "MW", name: "Malawi"},
  {isocode: "MY", name: "Malaysia"},
  {isocode: "MV", name: "Maldives"},
  {isocode: "ML", name: "Mali"},
  {isocode: "MT", name: "Malta"},
  {isocode: "MH", name: "Marshall Islands"},
  {isocode: "MQ", name: "Martinique"},
  {isocode: "MR", name: "Mauritania"},
  {isocode: "MU", name: "Mauritius"},
  {isocode: "YT", name: "Mayotte"},
  {isocode: "MX", name: "Mexico"},
  {isocode: "FM", name: "Micronesia (Federated States of)"},
  {isocode: "MD", name: "Moldova (Republic of)"},
  {isocode: "MC", name: "Monaco"},
  {isocode: "MN", name: "Mongolia"},
  {isocode: "ME", name: "Montenegro"},
  {isocode: "MS", name: "Montserrat"},
  {isocode: "MA", name: "Morocco"},
  {isocode: "MZ", name: "Mozambique"},
  {isocode: "MM", name: "Myanmar"},
  {isocode: "NA", name: "Namibia"},
  {isocode: "NR", name: "Nauru"},
  {isocode: "NP", name: "Nepal"},
  {isocode: "NL", name: "Netherlands"},
  {isocode: "AN", name: "Netherlands Antilles"},
  {isocode: "NC", name: "New Caledonia"},
  {isocode: "NZ", name: "New Zealand"},
  {isocode: "NI", name: "Nicaragua"},
  {isocode: "NE", name: "Niger"},
  {isocode: "NG", name: "Nigeria"},
  {isocode: "NU", name: "Niue"},
  {isocode: "NF", name: "Norfolk Island"},
  {isocode: "MP", name: "Northern Mariana Islands"},
  {isocode: "NO", name: "Norway"},
  {isocode: "OM", name: "Oman"},
  {isocode: "PK", name: "Pakistan"},
  {isocode: "PW", name: "Palau"},
  {isocode: "PS", name: "Palestine, State of"},
  {isocode: "PA", name: "Panama"},
  {isocode: "PG", name: "Papua New Guinea"},
  {isocode: "PY", name: "Paraguay"},
  {isocode: "PE", name: "Peru"},
  {isocode: "PH", name: "Philippines"},
  {isocode: "PN", name: "Pitcairn"},
  {isocode: "PL", name: "Poland"},
  {isocode: "PT", name: "Portugal"},
  {isocode: "PR", name: "Puerto Rico"},
  {isocode: "QA", name: "Qatar"},
  {isocode: "RE", name: "Réunion"},
  {isocode: "RO", name: "Romania"},
  {isocode: "RU", name: "Russian Federation"},
  {isocode: "RW", name: "Rwanda"},
  {isocode: "BL", name: "Saint Barthélemy"},
  {isocode: "SH", name: "Saint Helena"},
  {isocode: "KN", name: "Saint Kitts and Nevis"},
  {isocode: "LC", name: "Saint Lucia"},
  {isocode: "MF", name: "Saint Martin (French part)"},
  {isocode: "PM", name: "Saint Pierre and Miquelon"},
  {isocode: "VC", name: "Saint Vincent and The Grenadines"},
  {isocode: "WS", name: "Samoa"},
  {isocode: "SM", name: "San Marino"},
  {isocode: "ST", name: "São Tomé and Príncipe"},
  {isocode: "SA", name: "Saudi Arabia"},
  {isocode: "SN", name: "Senegal"},
  {isocode: "RS", name: "Serbia"},
  {isocode: "SC", name: "Seychelles"},
  {isocode: "SL", name: "Sierra Leone"},
  {isocode: "SG", name: "Singapore"},
  {isocode: "SX", name: "Sint Maarten (Dutch part)"},
  {isocode: "SK", name: "Slovakia"},
  {isocode: "SI", name: "Slovenia"},
  {isocode: "SB", name: "Solomon Islands"},
  {isocode: "SO", name: "Somalia"},
  {isocode: "ZA", name: "South Africa"},
  {isocode: "GS", name: "South Georgia and The South Sandwich Islands"},
  {isocode: "SS", name: "South Sudan"},
  {isocode: "ES", name: "Spain"},
  {isocode: "LK", name: "Sri Lanka"},
  {isocode: "SD", name: "Sudan"},
  {isocode: "SR", name: "Suriname"},
  {isocode: "SJ", name: "Svalbard and Jan Mayen"},
  {isocode: "SZ", name: "Swaziland"},
  {isocode: "SE", name: "Sweden"},
  {isocode: "CH", name: "Switzerland"},
  {isocode: "SY", name: "Syrian Arab Republic"},
  {isocode: "TW", name: "Taiwan, Province of China"},
  {isocode: "TJ", name: "Tajikistan"},
  {isocode: "TZ", name: "Tanzania, United Republic of"},
  {isocode: "TH", name: "Thailand"},
  {isocode: "TL", name: "Timor-Leste"},
  {isocode: "TG", name: "Togo"},
  {isocode: "TK", name: "Tokelau"},
  {isocode: "TO", name: "Tonga"},
  {isocode: "TT", name: "Trinidad and Tobago"},
  {isocode: "TN", name: "Tunisia"},
  {isocode: "TR", name: "Turkey"},
  {isocode: "TM", name: "Turkmenistan"},
  {isocode: "TC", name: "Turks and Caicos Islands"},
  {isocode: "TV", name: "Tuvalu"},
  {isocode: "UG", name: "Uganda"},
  {isocode: "UA", name: "Ukraine"},
  {isocode: "AE", name: "United Arab Emirates"},
  {isocode: "GB", name: "United Kingdom of Great Britain and Northern Ireland"},
  {isocode: "US", name: "United States"},
  {isocode: "UM", name: "United States Minor Outlying Islands"},
  {isocode: "UY", name: "Uruguay"},
  {isocode: "UZ", name: "Uzbekistan"},
  {isocode: "VU", name: "Vanuatu"},
  {isocode: "VE", name: "Venezuela (Bolivarian Republic of)"},
  {isocode: "VN", name: "Viet Nam"},
  {isocode: "VG", name: "Virgin Islands (British)"},
  {isocode: "VI", name: "Virgin Islands (U.S.)"},
  {isocode: "WF", name: "Wallis and Futuna"},
  {isocode: "EH", name: "Western Sahara"},
  {isocode: "YE", name: "Yemen"},
  {isocode: "ZM", name: "Zambia"},
  {isocode: "ZW", name: "Zimbabwe"},
];

var us_region_choices = [
  "Far West (AK, CA, HI, NV, OR, WA)",
  "Great Lakes (IL, IN, MI, OH, WI)",
  "Mideast (DE, D.C., MA, NJ, NY, PA)",
  "New England (CT, VT, NH, ME, MA, RI)",
  "Plains (IA, KS, MN, MO, NE, ND, SD)",
  "Rocky Mountain (CO, ID, MT, UT, WY)",
  "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)",
  "Southwest (AZ, NM, OK, TX)"
];

var census_regions = [
  { region: "Northeast",
    subregions: [
      "New England (CT, ME, MA, NH, RI, VT)",
      "Mid-Atlantic (NJ, NY, PA)"
    ]
  },
  {
    region: "Midwest",
    subregions: [
      "East North Central (IL, IN, MI, OH, WI)",
      "West North Central (IA, KS, MN, MO, NE, ND, SD)"
    ]
  },
  {
    region: "South",
    subregions: [
      "South Atlantic (DE, FL, GA, MD, NC, SC, VA, DC, WV)",
      "East South Central (AL, KY, MS,TN)"
    ]
  },
  {
    region: "West",
    subregions: [
      "West South Central (AR, LA, OK, TX)",
      "Mountain (AZ, CO, ID, MO, NV, NM, UT, WY)",
      "Pacific (AK, CA, HI, OR, WA)"
    ]
  }
];


var language_choices = [
  "Abkhaz",
  "Achinese [Acehnese]",
  "Acoli [Acholi]",
  "Adangme [Dangme]",
  "Adygei",
  "Adyghe",
  "Afar",
  "Afrikaans",
  "Akan",
  "Albanian",
  "Alsatian",
  "Amharic",
  "Angika",
  "Arabic",
  "Aragonese",
  "Armenian",
  "Aromanian",
  "Assamese",
  "Asturian [Bable]",
  "Avar",
  "Awadhi",
  "Aymara",
  "Azerbaijani",
  "Balinese",
  "Balochi",
  "Bambara",
  "Bashkir",
  "Basque",
  "Bedawiyet [Beja]",
  "Belarusian",
  "Bemba",
  "Bengali",
  "Bhojpuri",
  "Bilen",
  "Bilin",
  "[Central] Bikol",
  "Bini [Edo]",
  "Bislama",
  "Bosnian",
  "Braj [Brasha]",
  "Breton",
  "Buginese",
  "Bulgarian",
  "Burmese",
  "Buryat",
  "Carib",
  "Castilian",
  "Catalan",
  "Cebuano",
  "Central Khmer",
  "Chamorro",
  "Chechen",
  "Cherokee",
  "Chewa",
  "Chipewyan",
  "Choctaw",
  "Chuukese",
  "Chuvash",
  "Cook Islands Maori",
  "Corsican",
  "Cree",
  "Creek",
  "Crimean Tatar",
  "Croatian",
  "Czech",
  "Dakota",
  "Danish",
  "Dargwa",
  "Dene Suline [Chipewyan]",
  "Dhivehi [Maldivian]",
  "Dimli [Zaza]",
  "Dinka",
  "Dogri",
  "Duala",
  "Dutch",
  "Dyula",
  "Dzongkha",
  "Efik",
  "Ekajuk [Kajuk]",
  "Erzya",
  "Estonian",
  "Ewe",
  "Ewondo",
  "Fang",
  "Fanti",
  "Faroese",
  "Fijian",
  "Finnish",
  "Fon",
  "French",
  "Friulian",
  "Fula",
  "Ga",
  "Galician",
  "Gayo",
  "Georgian",
  "German",
  "Gikuyu",
  "Gilbertese",
  "Gondi",
  "Gorontalo",
  "Grebo",
  "Greek",
  "Greenlandic",
  "Guarani",
  "Gujarati",
  "Haitian Creole",
  "Hausa",
  "Hawaiian",
  "Herero",
  "Hiligaynon",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Iban",
  "Icelandic",
  "Igbo",
  "Iloko",
  "Indonesian",
  "Ingush",
  "Inuktitut",
  "Inupiat",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Jingpho",
  "Kabardian",
  "Kabyle",
  "Kalmyk",
  "Kamba",
  "Kannada",
  "Kanuri",
  "Kapampangan",
  "Karachay-Balkar",
  "Karakalpak",
  "Karelian",
  "Kashmiri",
  "Kashubian",
  "Kazakh",
  "Khasi",
  "Kikuyu",
  "Kimbundu",
  "Kinyarwanda",
  "Kirghiz",
  "Komi",
  "Kongo",
  "Konkani",
  "Korean",
  "Kosraean",
  "Kpelle",
  "Kumyk",
  "Kurdish",
  "Kurukh",
  "Kwanyama",
  "Kyrgyz",
  "Ladino",
  "Lahnda",
  "Lamba",
  "Lao",
  "Latvian",
  "Leonese",
  "Lezghian",
  "Limburgish",
  "Lingala",
  "Lithuanian",
  "Low German",
  "Lower Sorbian",
  "Lowland Scots",
  "Lozi",
  "Luba-Kasai",
  "Luba-Katanga",
  "Luganda",
  "Lunda",
  "Luo (Kenya and Tanzania) [Dholuo]",
  "Lushai [Mizo]",
  "Luxembourgish",
  "Macedonian",
  "Madurese",
  "Magahi",
  "Maithili",
  "Makasar",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maldivian",
  "Maltese",
  "Mandar",
  "Mandinka",
  "Manipuri",
  "Maori",
  "Mapuche",
  "Mapudungun",
  "Marathi",
  "Mari",
  "Marshallese",
  "Marwari",
  "Masai",
  "Mende",
  "Mi'kmaq",
  "Micmac",
  "Minangkabau",
  "Mirandese",
  "Mohawk",
  "Moksha",
  "Moldovan",
  "Mongo",
  "Mongolian",
  "Mossi",
  "Navajo",
  "Ndonga",
  "Neapolitan",
  "Nepal Bhasa",
  "Nepali",
  "Nias",
  "Niuean",
  "Nogai",
  "North Ndebele",
  "Northern Frisian",
  "Northern Sami",
  "Northern Sotho",
  "Norwegian",
  "Nuosu",
  "Nyamwezi",
  "Nyankole [Nkore]",
  "Nyoro",
  "Nzema",
  "Occitan",
  "Oirat",
  "Ojibwe",
  "Oriya [Odia]",
  "Oromo",
  "Ossetian",
  "Palauan",
  "Pangasinan",
  "Papiamento",
  "Pashto",
  "Persian",
  "Pohnpeian",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Quechuan",
  "Rajasthani",
  "Romani",
  "Romanian",
  "Romansh",
  "Rundi",
  "Russian",
  "Samoan",
  "Sandawe",
  "Sango",
  "Sanskrit",
  "Santali",
  "Sardinian",
  "Sasak",
  "Scottish Gaelic",
  "Serbian",
  "Serer",
  "Shan",
  "Shona",
  "Sicilian",
  "Sidamo [Sidaama]",
  "Siksika [Blackfoot]",
  "Sindhi",
  "Sinhalese",
  "Slovak",
  "Slovenian",
  "Somali",
  "Soninke",
  "Sotho",
  "South Ndebele",
  "Southern Altai",
  "Southern Sami",
  "Spanish",
  "Sranan Tongo",
  "Sukuma",
  "Sundanese",
  "Susu",
  "Swahili",
  "Swati [Swazi]",
  "Swedish",
  "Tagalog",
  "Tahitian",
  "Tajik",
  "Tamashek",
  "Tamil",
  "Tatar",
  "Telugu",
  "Temne",
  "Terena",
  "Tetum",
  "Thai",
  "Tibetan",
  "Tigre",
  "Tigrinya",
  "Tiv",
  "Tlingit",
  "Tok Pisin",
  "Tonga (Nyasa) [Western Nyasa]",
  "Tonga (Tonga Islands)",
  "Tsonga",
  "Tswana",
  "Tumbuka",
  "Turkish",
  "Turkmen",
  "Tuvaluan",
  "Tuvinian [Tuvan]",
  "Twi",
  "Udmurt",
  "Ukrainian",
  "Umbundu",
  "Upper Sorbian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Vai",
  "Valencian",
  "Venda",
  "Vietnamese",
  "Walloon",
  "Waray",
  "Welsh",
  "Western Frisian",
  "Wolaytta",
  "Wolof",
  "Xhosa",
  "Yakut",
  "Yao",
  "Yapese",
  "Yiddish",
  "Yoruba",
  "Zulu",
  "Zuni"
];

var proficiency_scale = [
  {level: 'NA', text: "N/A"},
  {level: 0, text: "none"},
  {level: 1, text: "very low"},
  {level: 2, text: "low"},
  {level: 3, text: "fair"},
  {level: 4, text: "slightly less than adequate"},
  {level: 5, text: "adequate"},
  {level: 6, text: "slightly more than adequate"},
  {level: 7, text: "good"},
  {level: 8, text: "very good"},
  {level: 9, text: "excellent"},
  {level: 10, text: "native / native-like"}
];

var accent_scale = [
  {level: 0, text: "none"},
  {level: 1, text: "almost none"},
  {level: 2, text: "very light"},
  {level: 3, text: "light"},
  {level: 4, text: "some"},
  {level: 5, text: "moderate"},
  {level: 6, text: "considerable"},
  {level: 7, text: "heavy"},
  {level: 8, text: "very heavy"},
  {level: 9, text: "extremely heavy"},
  {level: 10, text: "pervasive"}
];

var identify_scale = [
  {level: 0, text: "never"},
  {level: 1, text: "almost never"},
  {level: 2, text: ""},
  {level: 3, text: ""},
  {level: 4, text: ""},
  {level: 5, text: "half of the time"},
  {level: 6, text: ""},
  {level: 7, text: ""},
  {level: 8, text: ""},
  {level: 9, text: ""},
  {level: 10, text: "always"},
];


// TODO: at the end of the form dump the JSON into a single form element

var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {
    country_choices: country_choices,
    us_region_choices: us_region_choices,
    census_regions: census_regions,
    language_choices: language_choices,
    proficiency_scale: proficiency_scale,
    accent_scale: accent_scale,
    identify_scale: identify_scale,
    all_lang_used: [{name: 'English'}],
    general_questions: {},
    _: _, // include underscore/lodash as a helper
  },
  addAllLanguage: function(event) {
    // TODO: check for empty string
    this.push('all_lang_used', {name: event.node.value});
    event.node.value = ''; // reset
  },
  removeAllLanguage: function(event,index) {
    this.splice('all_lang_used', index, 1);
  },
  inputKeypress: function(event) {
    if (event.original.keyCode == 13) {
      event.original.preventDefault();
      event.original.stopPropagation();
      $(event.original.target).blur().focus();
      return false;
    }
  },
  saveSurvey: function(event) {
    var survey_data = JSON.stringify({
      all_lang_used: this.get('all_lang_used'),
      general_questions: this.get('general_questions')
    });
    console.log(survey_data);
  },
  partials: {lang_option: '#lang_option'},
});
