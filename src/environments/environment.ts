// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DEFAULT_CONFIG } from 'src/configs/default';

export const environment = {
  apiEndpoint: DEFAULT_CONFIG.apiEndpoint,
  //apiNewEndpoint: 'http://localhost:3000/api1/',
   recaptcha_key: '6LejbfQdAAAAAJ9NL2-ukdypLjBeuAxMH3YxwN8x', // local Server captcha key
  //recaptcha_key: '6LeBcGQjAAAAAGjYjgW3qKrIExHwzBa69SEBKSvX',   // UAT Server captcha key
  // recaptcha_key: '6LdYeg0eAAAAAFaG7Zr-QhPaUHI7yviLxZYSnG2y',   // Staging captcha key
  apiNewEndpoint:DEFAULT_CONFIG.apiNewEndpoint,
  apiEndpointNew: DEFAULT_CONFIG.apiEndpointNew,
  frontEndUrl: DEFAULT_CONFIG.frontEndUrl,
  production: false, 
  awsUrl: DEFAULT_CONFIG.awsUrl,
  filesPath:'https://s3.ap-southeast-1.amazonaws.com/storage.collegey/',
  stripePublickKey: 'pk_test_51JFDNEKtPs6CiLuhAKvxW1siXZbkzKq8dLEPt3YwNYXL7XIvPgflMrPMMbr3tWyoeegXuDMR8mg5UJqXNA2I2KK2006vTKIzOf',
  googleclient_Id: '457276257832-omse6pnpmk7fqc14mmd9v9ho5nacf03s.apps.googleusercontent.com',
  page_limit: 10,
};

export const timezone = { 
 'Europe/Berlin': '(GMT+01:00) Central European Time - Berlin',
 'Pacific/Niue': '(GMT-11:00) Niue Time', 
 'Pacific/Pago_Pago': '(GMT-11:00) Samoa Standard Time', 
 'Pacific/Rarotonga': '(GMT-10:00) Cook Islands Standard Time', 
 'Pacific/Honolulu': '(GMT-10:00) Hawaii-Aleutian Standard Time', 
 'America/Adak': '(GMT-10:00) Hawaii-Aleutian Time', 
 'Pacific/Tahiti': '(GMT-10:00) Tahiti Time', 
 'Pacific/Marquesas': '(GMT-09:30) Marquesas Time', 
 'America/Anchorage': '(GMT-09:00) Alaska Time - Anchorage', 
 'America/Juneau': '(GMT-09:00) Alaska Time - Juneau', 
 'America/Metlakatla': '(GMT-09:00) Alaska Time - Metlakatla', 
 'America/Nome': '(GMT-09:00) Alaska Time - Nome', 
 'America/Sitka': '(GMT-09:00) Alaska Time - Sitka', 
 'America/Yakutat': '(GMT-09:00) Alaska Time - Yakutat', 
 'Pacific/Gambier': '(GMT-09:00) Gambier Time', 
 'America/Los_Angeles': '(GMT-08:00) Pacific Time - Los Angeles', 
 'America/Tijuana': '(GMT-08:00) Pacific Time - Tijuana', 
 'America/Vancouver': '(GMT-08:00) Pacific Time - Vancouver', 
 'Pacific/Pitcairn': '(GMT-08:00) Pitcairn Time', 
 'America/Hermosillo': '(GMT-07:00) Mexican Pacific Standard Time', 
 'America/Chihuahua': '(GMT-07:00) Mexican Pacific Time - Chihuahua', 
 'America/Mazatlan': '(GMT-07:00) Mexican Pacific Time - Mazatlan', 
 'America/Dawson_Creek': '(GMT-07:00) Mountain Standard Time - Dawson Creek', 
 'America/Fort_Nelson': '(GMT-07:00) Mountain Standard Time - Fort Nelson', 
 'America/Phoenix': '(GMT-07:00) Mountain Standard Time - Phoenix', 
 'America/Boise': '(GMT-07:00) Mountain Time - Boise', 
 'America/Cambridge_Bay': '(GMT-07:00) Mountain Time - Cambridge Bay', 
 'America/Denver': '(GMT-07:00) Mountain Time - Denver', 
 'America/Edmonton': '(GMT-07:00) Mountain Time - Edmonton', 
 'America/Inuvik': '(GMT-07:00) Mountain Time - Inuvik', 
 'America/Ojinaga': '(GMT-07:00) Mountain Time - Ojinaga', 
 'America/Yellowknife': '(GMT-07:00) Mountain Time - Yellowknife', 
 'America/Dawson': '(GMT-07:00) Yukon Time - Dawson', 
 'America/Whitehorse': '(GMT-07:00) Yukon Time - Whitehorse', 
 'America/Belize': '(GMT-06:00) Central Standard Time - Belize', 
 'America/Costa_Rica': '(GMT-06:00) Central Standard Time - Costa Rica', 
 'America/El_Salvador': '(GMT-06:00) Central Standard Time - El Salvador', 
 'America/Guatemala': '(GMT-06:00) Central Standard Time - Guatemala', 
 'America/Managua': '(GMT-06:00) Central Standard Time - Managua', 
 'America/Regina': '(GMT-06:00) Central Standard Time - Regina', 
 'America/Swift_Current': '(GMT-06:00) Central Standard Time - Swift Current', 
 'America/Tegucigalpa': '(GMT-06:00) Central Standard Time - Tegucigalpa', 
 'America/Bahia_Banderas': '(GMT-06:00) Central Time - Bahia Banderas', 
 'America/North_Dakota/Beulah': '(GMT-06:00) Central Time - Beulah, North Dakota', 
 'America/North_Dakota/Center': '(GMT-06:00) Central Time - Center, North Dakota', 
 'America/Chicago': '(GMT-06:00) Central Time - Chicago', 
 'America/Indiana/Knox': '(GMT-06:00) Central Time - Knox, Indiana', 
 'America/Matamoros': '(GMT-06:00) Central Time - Matamoros', 
 'America/Menominee': '(GMT-06:00) Central Time - Menominee', 
 'America/Merida': '(GMT-06:00) Central Time - Merida', 
 'America/Mexico_City': '(GMT-06:00) Central Time - Mexico City', 
 'America/Monterrey': '(GMT-06:00) Central Time - Monterrey', 
 'America/North_Dakota/New_Salem': '(GMT-06:00) Central Time - New Salem, North Dakota', 
 'America/Rainy_River': '(GMT-06:00) Central Time - Rainy River', 
 'America/Rankin_Inlet': '(GMT-06:00) Central Time - Rankin Inlet', 
 'America/Resolute': '(GMT-06:00) Central Time - Resolute', 
 'America/Indiana/Tell_City': '(GMT-06:00) Central Time - Tell City, Indiana', 
 'America/Winnipeg': '(GMT-06:00) Central Time - Winnipeg', 
 'Pacific/Galapagos': '(GMT-06:00) Galapagos Time', 
 'America/Eirunepe': '(GMT-05:00) Acre Standard Time - Eirunepe', 
 'America/Rio_Branco': '(GMT-05:00) Acre Standard Time - Rio Branco', 
 'America/Bogota': '(GMT-05:00) Colombia Standard Time', 
 'America/Havana': '(GMT-05:00) Cuba Time', 
 'Pacific/Easter': '(GMT-05:00) Easter Island Time', 
 'America/Cancun': '(GMT-05:00) Eastern Standard Time - Cancun', 
 'America/Jamaica': '(GMT-05:00) Eastern Standard Time - Jamaica', 
 'America/Panama': '(GMT-05:00) Eastern Standard Time - Panama', 
 'America/Detroit': '(GMT-05:00) Eastern Time - Detroit', 
 'America/Grand_Turk': '(GMT-05:00) Eastern Time - Grand Turk', 
 'America/Indiana/Indianapolis': '(GMT-05:00) Eastern Time - Indianapolis', 
 'America/Iqaluit': '(GMT-05:00) Eastern Time - Iqaluit', 
 'America/Kentucky/Louisville': '(GMT-05:00) Eastern Time - Louisville', 
 'America/Indiana/Marengo': '(GMT-05:00) Eastern Time - Marengo, Indiana', 
 'America/Kentucky/Monticello': '(GMT-05:00) Eastern Time - Monticello, Kentucky', 
 'America/New_York': '(GMT-05:00) Eastern Time - New York', 
 'America/Nipigon': '(GMT-05:00) Eastern Time - Nipigon', 
 'America/Pangnirtung': '(GMT-05:00) Eastern Time - Pangnirtung', 
 'America/Indiana/Petersburg': '(GMT-05:00) Eastern Time - Petersburg, Indiana', 
 'America/Port-au-Prince': '(GMT-05:00) Eastern Time - Port-au-Prince', 
 'America/Thunder_Bay': '(GMT-05:00) Eastern Time - Thunder Bay', 
 'America/Toronto': '(GMT-05:00) Eastern Time - Toronto', 
 'America/Indiana/Vevay': '(GMT-05:00) Eastern Time - Vevay, Indiana', 
 'America/Indiana/Vincennes': '(GMT-05:00) Eastern Time - Vincennes, Indiana', 
 'America/Indiana/Winamac': '(GMT-05:00) Eastern Time - Winamac, Indiana', 
 'America/Guayaquil': '(GMT-05:00) Ecuador Time', 
 'America/Lima': '(GMT-05:00) Peru Standard Time', 
 'America/Boa_Vista': '(GMT-04:00) Amazon Standard Time - Boa Vista', 
 'America/Campo_Grande': '(GMT-04:00) Amazon Standard Time - Campo Grande', 
 'America/Cuiaba': '(GMT-04:00) Amazon Standard Time - Cuiaba', 
 'America/Manaus': '(GMT-04:00) Amazon Standard Time - Manaus', 
 'America/Porto_Velho': '(GMT-04:00) Amazon Standard Time - Porto Velho', 
 'America/Barbados': '(GMT-04:00) Atlantic Standard Time - Barbados', 
 'America/Martinique': '(GMT-04:00) Atlantic Standard Time - Puerto Rico', 
 'America/Santo_Domingo': '(GMT-04:00) Atlantic Standard Time - Santo Domingo', 
 'Atlantic/Bermuda': '(GMT-04:00) Atlantic Time - Bermuda', 
 'America/Glace_Bay': '(GMT-04:00) Atlantic Time - Glace Bay', 
 'America/Goose_Bay': '(GMT-04:00) Atlantic Time - Goose Bay', 
 'America/Halifax': '(GMT-04:00) Atlantic Time - Halifax', 
 'America/Moncton': '(GMT-04:00) Atlantic Time - Moncton', 
 'America/Thule': '(GMT-04:00) Atlantic Time - Thule', 
 'America/La_Paz': '(GMT-04:00) Bolivia Time', 
 'America/Guyana': '(GMT-04:00) Guyana Time', 
 'America/Caracas': '(GMT-04:00) Venezuela Time', 
 'America/St_Johns': '(GMT-03:30) Newfoundland Time', 
 'America/Argentina/Buenos_Aires': '(GMT-03:00) Argentina Standard Time - Buenos Aires', 
 'America/Argentina/Catamarca': '(GMT-03:00) Argentina Standard Time - Catamarca', 
 'America/Argentina/Cordoba': '(GMT-03:00) Argentina Standard Time - Cordoba', 
 'America/Argentina/Jujuy': '(GMT-03:00) Argentina Standard Time - Jujuy', 
 'America/Argentina/La_Rioja': '(GMT-03:00) Argentina Standard Time - La Rioja', 
 'America/Argentina/Mendoza': '(GMT-03:00) Argentina Standard Time - Mendoza', 
 'America/Argentina/Rio_Gallegos': '(GMT-03:00) Argentina Standard Time - Rio Gallegos', 
 'America/Argentina/Salta': '(GMT-03:00) Argentina Standard Time - Salta', 
 'America/Argentina/San_Juan': '(GMT-03:00) Argentina Standard Time - San Juan', 
 'America/Argentina/San_Luis': '(GMT-03:00) Argentina Standard Time - San Luis', 
 'America/Argentina/Tucuman': '(GMT-03:00) Argentina Standard Time - Tucuman', 
 'America/Argentina/Ushuaia': '(GMT-03:00) Argentina Standard Time - Ushuaia', 
 'America/Araguaina': '(GMT-03:00) Brasilia Standard Time - Araguaina', 
 'America/Bahia': '(GMT-03:00) Brasilia Standard Time - Bahia', 
 'America/Belem': '(GMT-03:00) Brasilia Standard Time - Belem', 
 'America/Fortaleza': '(GMT-03:00) Brasilia Standard Time - Fortaleza', 
 'America/Maceio': '(GMT-03:00) Brasilia Standard Time - Maceio', 
 'America/Recife': '(GMT-03:00) Brasilia Standard Time - Recife', 
 'America/Santarem': '(GMT-03:00) Brasilia Standard Time - Santarem', 
 'America/Sao_Paulo': '(GMT-03:00) Brasilia Standard Time - Sao Paulo', 
 'America/Santiago': '(GMT-03:00) Chile Time', 
 'Atlantic/Stanley': '(GMT-03:00) Falkland Islands Standard Time', 
 'America/Cayenne': '(GMT-03:00) French Guiana Time', 
 'Antarctica/Palmer': '(GMT-03:00) Palmer Time', 
 'America/Asuncion': '(GMT-03:00) Paraguay Time', 
 'America/Punta_Arenas': '(GMT-03:00) Punta Arenas Time', 
 'Antarctica/Rothera': '(GMT-03:00) Rothera Time', 
 'America/Miquelon': '(GMT-03:00) St. Pierre &amp; Miquelon Time', 
 'America/Paramaribo': '(GMT-03:00) Suriname Time', 
 'America/Montevideo': '(GMT-03:00) Uruguay Standard Time', 
 'America/Nuuk': '(GMT-03:00) West Greenland Time', 
 'America/Noronha': '(GMT-02:00) Fernando de Noronha Standard Time', 
 'Atlantic/South_Georgia': '(GMT-02:00) South Georgia Time', 
 'Atlantic/Azores': '(GMT-01:00) Azores Time', 
 'Atlantic/Cape_Verde': '(GMT-01:00) Cape Verde Standard Time', 
 'America/Scoresbysund': '(GMT-01:00) East Greenland Time', 
 'UTC': '(GMT+00:00) Coordinated Universal Time', 
 'Etc/GMT': '(GMT+00:00) Greenwich Mean Time', 
 'Africa/Abidjan': '(GMT+00:00) Greenwich Mean Time - Abidjan', 
 'Africa/Bissau': '(GMT+00:00) Greenwich Mean Time - Bissau', 
 'America/Danmarkshavn': '(GMT+00:00) Greenwich Mean Time - Danmarkshavn', 
 'Africa/Monrovia': '(GMT+00:00) Greenwich Mean Time - Monrovia', 
 'Atlantic/Reykjavik': '(GMT+00:00) Greenwich Mean Time - Reykjavik', 
 'Africa/Sao_Tome': '(GMT+00:00) Greenwich Mean Time - São Tomé', 
 'Europe/Dublin': '(GMT+00:00) Ireland Time', 
 'Antarctica/Troll': '(GMT+00:00) Troll Time', 
 'Europe/London': '(GMT+00:00) United Kingdom Time', 
 'Atlantic/Canary': '(GMT+00:00) Western European Time - Canary', 
 'Atlantic/Faroe': '(GMT+00:00) Western European Time - Faroe', 
 'Europe/Lisbon': '(GMT+00:00) Western European Time - Lisbon', 
 'Atlantic/Madeira': '(GMT+00:00) Western European Time - Madeira', 
 'Africa/Algiers': '(GMT+01:00) Central European Standard Time - Algiers', 
 'Africa/Tunis': '(GMT+01:00) Central European Standard Time - Tunis', 
 'Europe/Amsterdam': '(GMT+01:00) Central European Time - Amsterdam', 
 'Europe/Andorra': '(GMT+01:00) Central European Time - Andorra', 
 'Europe/Belgrade': '(GMT+01:00) Central European Time - Belgrade', 
 'Europe/Brussels': '(GMT+01:00) Central European Time - Brussels', 
 'Europe/Budapest': '(GMT+01:00) Central European Time - Budapest', 
 'Africa/Ceuta': '(GMT+01:00) Central European Time - Ceuta', 
 'Europe/Copenhagen': '(GMT+01:00) Central European Time - Copenhagen', 
 'Europe/Gibraltar': '(GMT+01:00) Central European Time - Gibraltar', 
 'Europe/Luxembourg': '(GMT+01:00) Central European Time - Luxembourg', 
 'Europe/Madrid': '(GMT+01:00) Central European Time - Madrid', 
 'Europe/Malta': '(GMT+01:00) Central European Time - Malta', 
 'Europe/Monaco': '(GMT+01:00) Central European Time - Monaco', 
 'Europe/Oslo': '(GMT+01:00) Central European Time - Oslo', 
 'Europe/Paris': '(GMT+01:00) Central European Time - Paris', 
 'Europe/Prague': '(GMT+01:00) Central European Time - Prague', 
 'Europe/Rome': '(GMT+01:00) Central European Time - Rome', 
 'Europe/Stockholm': '(GMT+01:00) Central European Time - Stockholm', 
 'Europe/Tirane': '(GMT+01:00) Central European Time - Tirane', 
 'Europe/Vienna': '(GMT+01:00) Central European Time - Vienna', 
 'Europe/Warsaw': '(GMT+01:00) Central European Time - Warsaw', 
 'Europe/Zurich': '(GMT+01:00) Central European Time - Zurich', 
 'Africa/Casablanca': '(GMT+01:00) Morocco Time', 
 'Africa/Lagos': '(GMT+01:00) West Africa Standard Time - Lagos', 
 'Africa/Ndjamena': '(GMT+01:00) West Africa Standard Time - Ndjamena', 
 'Africa/El_Aaiun': '(GMT+01:00) Western Sahara Time', 
 'Africa/Juba': '(GMT+02:00) Central Africa Time - Juba', 
 'Africa/Khartoum': '(GMT+02:00) Central Africa Time - Khartoum', 
 'Africa/Maputo': '(GMT+02:00) Central Africa Time - Maputo', 
 'Africa/Windhoek': '(GMT+02:00) Central Africa Time - Windhoek', 
 'Africa/Cairo': '(GMT+02:00) Eastern European Standard Time - Cairo', 
 'Europe/Kaliningrad': '(GMT+02:00) Eastern European Standard Time - Kaliningrad', 
 'Africa/Tripoli': '(GMT+02:00) Eastern European Standard Time - Tripoli', 
 'Europe/Athens': '(GMT+02:00) Eastern European Time - Athens', 
 'Asia/Beirut': '(GMT+02:00) Eastern European Time - Beirut', 
 'Europe/Bucharest': '(GMT+02:00) Eastern European Time - Bucharest', 
 'Europe/Chisinau': '(GMT+02:00) Eastern European Time - Chisinau', 
 'Asia/Damascus': '(GMT+02:00) Eastern European Time - Damascus', 
 'Asia/Gaza': '(GMT+02:00) Eastern European Time - Gaza', 
 'Asia/Hebron': '(GMT+02:00) Eastern European Time - Hebron', 
 'Europe/Helsinki': '(GMT+02:00) Eastern European Time - Helsinki', 
 'Europe/Kiev': '(GMT+02:00) Eastern European Time - Kiev', 
 'Asia/Nicosia': '(GMT+02:00) Eastern European Time - Nicosia', 
 'Europe/Riga': '(GMT+02:00) Eastern European Time - Riga', 
 'Europe/Sofia': '(GMT+02:00) Eastern European Time - Sofia', 
 'Europe/Tallinn': '(GMT+02:00) Eastern European Time - Tallinn', 
 'Europe/Uzhgorod': '(GMT+02:00) Eastern European Time - Uzhhorod', 
 'Europe/Vilnius': 'GMT+02:00) Eastern European Time - Vilnius', 
 'Europe/Zaporozhye': '(GMT+02:00) Eastern European Time - Zaporozhye', 
 'Asia/Famagusta': '(GMT+02:00) Famagusta Time', 
 'Asia/Jerusalem': '(GMT+02:00) Israel Time', 
 'Africa/Johannesburg': '(GMT+02:00) South Africa Standard Time', 
 'Asia/Baghdad': '(GMT+03:00) Arabian Standard Time - Baghdad', 
 'Asia/Qatar': '(GMT+03:00) Arabian Standard Time - Qatar', 
 'Asia/Riyadh': '(GMT+03:00) Arabian Standard Time - Riyadh', 
 'Africa/Nairobi': '(GMT+03:00) East Africa Time', 
 'Asia/Amman': '(GMT+03:00) Eastern European Time (Jordan)', 
 'Europe/Kirov': '(GMT+03:00) Kirov Time', 
 'Europe/Minsk': '(GMT+03:00) Moscow Standard Time - Minsk', 
 'Europe/Moscow': '(GMT+03:00) Moscow Standard Time - Moscow', 
 'Europe/Simferopol': '(GMT+03:00) Moscow Standard Time - Simferopol', 
 'Europe/Istanbul': '(GMT+03:00) Turkey Time', 
 'Europe/Volgograd': '(GMT+03:00) Volgograd Standard Time', 
 'Asia/Tehran': '(GMT+03:30) Iran Time', 
 'Asia/Yerevan': '(GMT+04:00) Armenia Standard Time', 
 'Europe/Astrakhan': '(GMT+04:00) Astrakhan Time', 
 'Asia/Baku': '(GMT+04:00) Azerbaijan Standard Time', 
 'Asia/Tbilisi': '(GMT+04:00) Georgia Standard Time', 
 'Asia/Dubai': '(GMT+04:00) Gulf Standard Time', 
 'Indian/Mauritius': '(GMT+04:00) Mauritius Standard Time', 
 'Indian/Reunion': '(GMT+04:00) Réunion Time', 
 'Europe/Samara': '(GMT+04:00) Samara Standard Time', 
 'Europe/Saratov': '(GMT+04:00) Saratov Time', 
 'Indian/Mahe': '(GMT+04:00) Seychelles Time', 
 'Europe/Ulyanovsk': '(GMT+04:00) Ulyanovsk Time', 
 'Asia/Kabul': '(GMT+04:30) Afghanistan Time', 
 'Indian/Kerguelen': '(GMT+05:00) French Southern &amp; Antarctic Time', 
 'Indian/Maldives': '(GMT+05:00) Maldives Time', 
 'Antarctica/Mawson': '(GMT+05:00) Mawson Time', 
 'Asia/Karachi': '(GMT+05:00) Pakistan Standard Time', 
 'Asia/Dushanbe': '(GMT+05:00) Tajikistan Time', 
 'Asia/Ashgabat': '(GMT+05:00) Turkmenistan Standard Time', 
 'Asia/Samarkand': '(GMT+05:00) Uzbekistan Standard Time - Samarkand', 
 'Asia/Tashkent': '(GMT+05:00) Uzbekistan Standard Time - Tashkent', 
 'Asia/Aqtau': '(GMT+05:00) West Kazakhstan Time - Aqtau', 
 'Asia/Aqtobe': '(GMT+05:00) West Kazakhstan Time - Aqtobe', 
 'Asia/Atyrau': '(GMT+05:00) West Kazakhstan Time - Atyrau', 
 'Asia/Oral': '(GMT+05:00) West Kazakhstan Time - Oral', 
 'Asia/Qyzylorda': '(GMT+05:00) West Kazakhstan Time - Qyzylorda', 
 'Asia/Yekaterinburg': '(GMT+05:00) Yekaterinburg Standard Time', 
 'Asia/Colombo': '(GMT+05:30) India Standard Time - Colombo', 
 'Asia/Kolkata': '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi', 
 'Asia/Kathmandu': '(GMT+05:45) Nepal Time', 
 'Asia/Dhaka': '(GMT+06:00) Bangladesh Standard Time', 
 'Asia/Thimphu': '(GMT+06:00) Bhutan Time', 
 'Asia/Almaty': '(GMT+06:00) East Kazakhstan Time - Almaty', 
 'Asia/Qostanay': '(GMT+06:00) East Kazakhstan Time - Kostanay', 
 'Indian/Chagos': '(GMT+06:00) Indian Ocean Time', 
 'Asia/Bishkek': '(GMT+06:00) Kyrgyzstan Time', 
 'Asia/Omsk': '(GMT+06:00) Omsk Standard Time', 
 'Asia/Urumqi': '(GMT+06:00) Urumqi Time', 
 'Antarctica/Vostok': '(GMT+06:00) Vostok Time', 
 'Indian/Cocos': '(GMT+06:30) Cocos Islands Time', 
 'Asia/Yangon': '(GMT+06:30) Myanmar Time', 
 'Asia/Barnaul': '(GMT+07:00) Barnaul Time', 
 'Indian/Christmas': '(GMT+07:00) Christmas Island Time', 
 'Antarctica/Davis': '(GMT+07:00) Davis Time', 
 'Asia/Hovd': '(GMT+07:00) Hovd Standard Time', 
 'Asia/Bangkok': '(GMT+07:00) Indochina Time - Bangkok', 
 'Asia/Ho_Chi_Minh': '(GMT+07:00) Indochina Time - Ho Chi Minh City', 
 'Asia/Krasnoyarsk': '(GMT+07:00) Krasnoyarsk Standard Time - Krasnoyarsk', 
 'Asia/Novokuznetsk': '(GMT+07:00) Krasnoyarsk Standard Time - Novokuznetsk', 
 'Asia/Novosibirsk': '(GMT+07:00) Novosibirsk Standard Time', 
 'Asia/Tomsk': '(GMT+07:00) Tomsk Time', 
 'Asia/Jakarta': '(GMT+07:00) Western Indonesia Time - Jakarta', 
 'Asia/Pontianak': '(GMT+07:00) Western Indonesia Time - Pontianak', 
 'Australia/Perth': '(GMT+08:00) Australian Western Standard Time', 
 'Asia/Brunei': '(GMT+08:00) Brunei Darussalam Time', 
 'Asia/Makassar': '(GMT+08:00) Central Indonesia Time', 
 'Asia/Macau': '(GMT+08:00) China Standard Time - Macao', 
 'Asia/Shanghai': '(GMT+08:00) China Standard Time - Shanghai', 
 'Asia/Hong_Kong': '(GMT+08:00) Hong Kong Standard Time', 
 'Asia/Irkutsk': '(GMT+08:00) Irkutsk Standard Time', 
 'Asia/Kuala_Lumpur': '(GMT+08:00) Malaysia Time - Kuala Lumpur', 
 'Asia/Kuching': '(GMT+08:00) Malaysia Time - Kuching', 
 'Asia/Manila': '(GMT+08:00) Philippine Standard Time', 
 'Asia/Singapore': '(GMT+08:00) Kuala Lumpur, Singapore', 
 'Asia/Taipei': '(GMT+08:00) Taipei Standard Time', 
 'Asia/Choibalsan': '(GMT+08:00) Ulaanbaatar Standard Time - Choibalsan', 
 'Asia/Ulaanbaatar': '(GMT+08:00) Ulaanbaatar Standard Time - Ulaanbaatar', 
 'Australia/Eucla': '(GMT+08:45) Australian Central Western Standard Time', 
 'Asia/Dili': '(GMT+09:00) East Timor Time', 
 'Asia/Jayapura': '(GMT+09:00) Eastern Indonesia Time', 
 'Asia/Tokyo': '(GMT+09:00) Japan Standard Time', 
 'Asia/Pyongyang': '(GMT+09:00) Korean Standard Time - Pyongyang', 
 'Asia/Seoul': '(GMT+09:00) Korean Standard Time - Seoul', 
 'Pacific/Palau': '(GMT+09:00) Palau Time', 
 'Asia/Chita': '(GMT+09:00) Yakutsk Standard Time - Chita', 
 'Asia/Khandyga': '(GMT+09:00) Yakutsk Standard Time - Khandyga', 
 'Asia/Yakutsk': '(GMT+09:00) Yakutsk Standard Time - Yakutsk', 
 'Australia/Darwin': '(GMT+09:30) Australian Central Standard Time', 
 'Australia/Brisbane': '(GMT+10:00) Australian Eastern Standard Time - Brisbane', 
 'Australia/Lindeman': '(GMT+10:00) Australian Eastern Standard Time - Lindeman', 
 'Pacific/Guam': '(GMT+10:00) Chamorro Standard Time', 
 'Pacific/Chuuk': '(GMT+10:00) Chuuk Time', 
 'Pacific/Port_Moresby': '(GMT+10:00) Papua New Guinea Time', 
 'Asia/Ust-Nera': '(GMT+10:00) Vladivostok Standard Time - Ust-Nera', 
 'Asia/Vladivostok': '(GMT+10:00) Vladivostok Standard Time - Vladivostok', 
 'Australia/Adelaide': '(GMT+10:30) Central Australia Time - Adelaide', 
 'Australia/Broken_Hill': '(GMT+10:30) Central Australia Time - Broken Hill', 
 'Pacific/Bougainville': '(GMT+11:00) Bougainville Time', 
 'Antarctica/Casey': '(GMT+11:00) Casey Time', 
 'Australia/Hobart': '(GMT+11:00) Eastern Australia Time - Hobart', 
 'Antarctica/Macquarie': '(GMT+11:00) Eastern Australia Time - Macquarie', 
 'Australia/Melbourne': '(GMT+11:00) Eastern Australia Time - Melbourne', 
 'Australia/Sydney': '(GMT+11:00) Eastern Australia Time - Sydney', 
 'Pacific/Kosrae': '(GMT+11:00) Kosrae Time', 
 'Australia/Lord_Howe': '(GMT+11:00) Lord Howe Time', 
 'Asia/Magadan': '(GMT+11:00) Magadan Standard Time', 
 'Pacific/Noumea': '(GMT+11:00) New Caledonia Standard Time', 
 'Pacific/Pohnpei': '(GMT+11:00) Ponape Time', 
 'Asia/Sakhalin': '(GMT+11:00) Sakhalin Standard Time', 
 'Pacific/Guadalcanal': '(GMT+11:00) Solomon Islands Time', 
 'Asia/Srednekolymsk': '(GMT+11:00) Srednekolymsk Time', 
 'Pacific/Efate': '(GMT+11:00) Vanuatu Standard Time', 
 'Asia/Anadyr': '(GMT+12:00) Anadyr Standard Time', 
 'Pacific/Fiji': '(GMT+12:00) Fiji Standard Time', 
 'Pacific/Tarawa': '(GMT+12:00) Gilbert Islands Time', 
 'Pacific/Kwajalein': '(GMT+12:00) Marshall Islands Time - Kwajalein', 
 'Pacific/Majuro': '(GMT+12:00) Marshall Islands Time - Majuro', 
 'Pacific/Nauru': '(GMT+12:00) Nauru Time', 
 'Pacific/Norfolk': '(GMT+12:00) Norfolk Island Time', 
 'Asia/Kamchatka': '(GMT+12:00) Petropavlovsk-Kamchatski Standard Time', 
 'Pacific/Funafuti': '(GMT+12:00) Tuvalu Time', 
 'Pacific/Wake': '(GMT+12:00) Wake Island Time', 
 'Pacific/Wallis': '(GMT+12:00) Wallis and Futuna Time', 
 'Pacific/Apia': '(GMT+13:00) Apia Standard Time', 
 'Pacific/Auckland': '(GMT+13:00) New Zealand Time', 
 'Pacific/Kanton': '(GMT+13:00) Phoenix Islands Time', 
 'Pacific/Fakaofo': '(GMT+13:00) Tokelau Time', 
 'Pacific/Tongatapu': '(GMT+13:00) Tonga Standard Time', 
 'Pacific/Chatham': '(GMT+13:45) Chatham Time', 
 'Pacific/Kiritimati': '(GMT+14:00) Line Islands Time', 
 }

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
