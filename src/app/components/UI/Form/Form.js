'use client';
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

// Country codes data with validation rules
const countryCodes = [
  { "code": "+93", "country": "AFG", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AF" },
  { "code": "+91", "country": "IND", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "IN" },
  { "code": "+355", "country": "ALB", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AL" },
  { "code": "+376", "country": "AND", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "AD" },
  { "code": "+244", "country": "AGO", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AO" },
  { "code": "+1-264", "country": "AIA", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "AI" },
  { "code": "+1-268", "country": "ATG", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "AG" },
  { "code": "+54", "country": "ARG", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "AR" },
  { "code": "+374", "country": "ARM", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "AM" },
  { "code": "+297", "country": "ABW", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "AW" },
  { "code": "+61", "country": "AUS", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AU" },
  { "code": "+43", "country": "AUT", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "AT" },
  { "code": "+994", "country": "AZE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AZ" },
  { "code": "+1-242", "country": "BHS", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "BS" },
  { "code": "+973", "country": "BHR", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BH" },
  { "code": "+880", "country": "BGD", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "BD" },
  { "code": "+1-246", "country": "BRB", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "BB" },
  { "code": "+375", "country": "BLR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "BY" },
  { "code": "+32", "country": "BEL", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "BE" },
  { "code": "+501", "country": "BLZ", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "BZ" },
  { "code": "+229", "country": "BEN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BJ" },
  { "code": "+1-441", "country": "BMU", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "BM" },
  { "code": "+975", "country": "BTN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BT" },
  { "code": "+591", "country": "BOL", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BO" },
  { "code": "+387", "country": "BIH", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BA" },
  { "code": "+267", "country": "BWA", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BW" },
  { "code": "+55", "country": "BRA", "maxLength": 11, "placeholder": "XXXXXXXXXXX", "countryCode": "BR" },
  { "code": "+246", "country": "IOT", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "IO" },
  { "code": "+1-284", "country": "VGB", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "VG" },
  { "code": "+673", "country": "BRN", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "BN" },
  { "code": "+359", "country": "BGR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "BG" },
  { "code": "+226", "country": "BFA", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BF" },
  { "code": "+257", "country": "BDI", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "BI" },
  { "code": "+855", "country": "KHM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "KH" },
  { "code": "+237", "country": "CMR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CM" },
  { "code": "+1", "country": "CAN", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "CA" },
  { "code": "+238", "country": "CPV", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "CV" },
  { "code": "+1-345", "country": "CYM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "KY" },
  { "code": "+236", "country": "CAF", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "CF" },
  { "code": "+235", "country": "TCD", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "TD" },
  { "code": "+56", "country": "CHL", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CL" },
  { "code": "+86", "country": "CHN", "maxLength": 11, "placeholder": "XXXXXXXXXXX", "countryCode": "CN" },
  { "code": "+57", "country": "COL", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "CO" },
  { "code": "+269", "country": "COM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "KM" },
  { "code": "+242", "country": "COG", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CG" },
  { "code": "+243", "country": "COD", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CD" },
  { "code": "+682", "country": "COK", "maxLength": 5, "placeholder": "XXXXX", "countryCode": "CK" },
  { "code": "+506", "country": "CRI", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "CR" },
  { "code": "+385", "country": "HRV", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "HR" },
  { "code": "+53", "country": "CUB", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "CU" },
  { "code": "+599", "country": "CUW", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "CW" },
  { "code": "+357", "country": "CYP", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "CY" },
  { "code": "+420", "country": "CZE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CZ" },
  { "code": "+45", "country": "DNK", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "DK" },
  { "code": "+253", "country": "DJI", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "DJ" },
  { "code": "+1-767", "country": "DMA", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "DM" },
  { "code": "+1-809", "country": "DOM", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "DO" },
  { "code": "+213", "country": "DZA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "DZ" },
  { "code": "+670", "country": "TLS", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "TL" },
  { "code": "+593", "country": "ECU", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "EC" },
  { "code": "+20", "country": "EGY", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "EG" },
  { "code": "+503", "country": "SLV", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "SV" },
  { "code": "+240", "country": "GNQ", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GQ" },
  { "code": "+291", "country": "ERI", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "ER" },
  { "code": "+372", "country": "EST", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "EE" },
  { "code": "+268", "country": "SWZ", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "SZ" },
  { "code": "+251", "country": "ETH", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "ET" },
  { "code": "+500", "country": "FLK", "maxLength": 5, "placeholder": "XXXXX", "countryCode": "FK" },
  { "code": "+298", "country": "FRO", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "FO" },
  { "code": "+679", "country": "FJI", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "FJ" },
  { "code": "+358", "country": "FIN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "FI" },
  { "code": "+33", "country": "FRA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "FR" },
  { "code": "+594", "country": "GUF", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GF" },
  { "code": "+689", "country": "PYF", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "PF" },
  { "code": "+241", "country": "GAB", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "GA" },
  { "code": "+220", "country": "GMB", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "GM" },
  { "code": "+995", "country": "GEO", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GE" },
  { "code": "+49", "country": "DEU", "maxLength": 11, "placeholder": "XXXXXXXXXXX", "countryCode": "DE" },
  { "code": "+233", "country": "GHA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GH" },
  { "code": "+350", "country": "GIB", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "GI" },
  { "code": "+30", "country": "GRC", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "GR" },
  { "code": "+299", "country": "GRL", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "GL" },
  { "code": "+1-473", "country": "GRD", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "GD" },
  { "code": "+590", "country": "GLP", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GP" },
  { "code": "+1-671", "country": "GUM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "GU" },
  { "code": "+502", "country": "GTM", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "GT" },
  { "code": "+44-1481", "country": "GGY", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "GG" },
  { "code": "+224", "country": "GIN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GN" },
  { "code": "+245", "country": "GNB", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "GW" },
  { "code": "+592", "country": "GUY", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "GY" },
  { "code": "+509", "country": "HTI", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "HT" },
  { "code": "+504", "country": "HND", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "HN" },
  { "code": "+852", "country": "HKG", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "HK" },
  { "code": "+36", "country": "HUN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "HU" },
  { "code": "+354", "country": "ISL", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "IS" },
  { "code": "+62", "country": "IDN", "maxLength": 11, "placeholder": "XXXXXXXXXXX", "countryCode": "ID" },
  { "code": "+98", "country": "IRN", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "IR" },
  { "code": "+964", "country": "IRQ", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "IQ" },
  { "code": "+353", "country": "IRL", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "IE" },
  { "code": "+44-1624", "country": "IMN", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "IM" },
  { "code": "+972", "country": "ISR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "IL" },
  { "code": "+39", "country": "ITA", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "IT" },
  { "code": "+225", "country": "CIV", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "CI" },
  { "code": "+1-876", "country": "JAM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "JM" },
  { "code": "+81", "country": "JPN", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "JP" },
  { "code": "+44-1534", "country": "JEY", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "JE" },
  { "code": "+962", "country": "JOR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "JO" },
  { "code": "+7", "country": "KAZ", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "KZ" },
  { "code": "+254", "country": "KEN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "KE" },
  { "code": "+686", "country": "KIR", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "KI" },
  { "code": "+383", "country": "KOS", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "XK" },
  { "code": "+965", "country": "KWT", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "KW" },
  { "code": "+996", "country": "KGZ", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "KG" },
  { "code": "+856", "country": "LAO", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "LA" },
  { "code": "+371", "country": "LVA", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "LV" },
  { "code": "+961", "country": "LBN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "LB" },
  { "code": "+266", "country": "LSO", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "LS" },
  { "code": "+231", "country": "LBR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "LR" },
  { "code": "+218", "country": "LBY", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "LY" },
  { "code": "+423", "country": "LIE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "LI" },
  { "code": "+370", "country": "LTU", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "LT" },
  { "code": "+352", "country": "LUX", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "LU" },
  { "code": "+853", "country": "MAC", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MO" },
  { "code": "+389", "country": "MKD", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MK" },
  { "code": "+261", "country": "MDG", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MG" },
  { "code": "+265", "country": "MWI", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MW" },
  { "code": "+60", "country": "MYS", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "MY" },
  { "code": "+960", "country": "MDV", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "MV" },
  { "code": "+223", "country": "MLI", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "ML" },
  { "code": "+356", "country": "MLT", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MT" },
  { "code": "+692", "country": "MHL", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "MH" },
  { "code": "+596", "country": "MTQ", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MQ" },
  { "code": "+222", "country": "MRT", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MR" },
  { "code": "+230", "country": "MUS", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MU" },
  { "code": "+262", "country": "MYT", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "YT" },
  { "code": "+52", "country": "MEX", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "MX" },
  { "code": "+691", "country": "FSM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "FM" },
  { "code": "+373", "country": "MDA", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MD" },
  { "code": "+377", "country": "MCO", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MC" },
  { "code": "+976", "country": "MNG", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "MN" },
  { "code": "+382", "country": "MNE", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "ME" },
  { "code": "+1-664", "country": "MSR", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "MS" },
  { "code": "+212", "country": "MAR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MA" },
  { "code": "+258", "country": "MOZ", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MZ" },
  { "code": "+95", "country": "MMR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "MM" },
  { "code": "+264", "country": "NAM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "NA" },
  { "code": "+674", "country": "NRU", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "NR" },
  { "code": "+977", "country": "NPL", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "NP" },
  { "code": "+31", "country": "NLD", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "NL" },
  { "code": "+599", "country": "ANT", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "AN" },
  { "code": "+687", "country": "NCL", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "NC" },
  { "code": "+64", "country": "NZL", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "NZ" },
  { "code": "+505", "country": "NIC", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "NI" },
  { "code": "+227", "country": "NER", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "NE" },
  { "code": "+234", "country": "NGA", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "NG" },
  { "code": "+683", "country": "NIU", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "NU" },
  { "code": "+672", "country": "NFK", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "NF" },
  { "code": "+1-670", "country": "MNP", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "MP" },
  { "code": "+47", "country": "NOR", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "NO" },
  { "code": "+968", "country": "OMN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "OM" },
  { "code": "+92", "country": "PAK", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "PK" },
  { "code": "+680", "country": "PLW", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "PW" },
  { "code": "+970", "country": "PSE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "PS" },
  { "code": "+507", "country": "PAN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "PA" },
  { "code": "+675", "country": "PNG", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "PG" },
  { "code": "+595", "country": "PRY", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "PY" },
  { "code": "+51", "country": "PER", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "PE" },
  { "code": "+63", "country": "PHL", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "PH" },
  { "code": "+48", "country": "POL", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "PL" },
  { "code": "+351", "country": "PRT", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "PT" },
  { "code": "+1-787", "country": "PRI", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "PR" },
  { "code": "+974", "country": "QAT", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "QA" },
  { "code": "+262", "country": "REU", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "RE" },
  { "code": "+40", "country": "ROU", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "RO" },
  { "code": "+7", "country": "RUS", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "RU" },
  { "code": "+250", "country": "RWA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "RW" },
  { "code": "+590", "country": "BLM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "BL" },
  { "code": "+508", "country": "SPM", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "PM" },
  { "code": "+1-784", "country": "VCT", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "VC" },
  { "code": "+685", "country": "WSM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "WS" },
  { "code": "+378", "country": "SMR", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "SM" },
  { "code": "+239", "country": "STP", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "ST" },
  { "code": "+966", "country": "SAU", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SA" },
  { "code": "+221", "country": "SEN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SN" },
  { "code": "+381", "country": "SRB", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "RS" },
  { "code": "+248", "country": "SYC", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "SC" },
  { "code": "+232", "country": "SLE", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "SL" },
  { "code": "+65", "country": "SGP", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "SG" },
  { "code": "+1-721", "country": "SXM", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "SX" },
  { "code": "+421", "country": "SVK", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SK" },
  { "code": "+386", "country": "SVN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "SI" },
  { "code": "+677", "country": "SLB", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "SB" },
  { "code": "+252", "country": "SOM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SO" },
  { "code": "+27", "country": "ZAF", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "ZA" },
  { "code": "+211", "country": "SSD", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SS" },
  { "code": "+82", "country": "KOR", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "KR" },
  { "code": "+34", "country": "ESP", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "ES" },
  { "code": "+94", "country": "LKA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "LK" },
  { "code": "+249", "country": "SDN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SD" },
  { "code": "+597", "country": "SUR", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "SR" },
  { "code": "+46", "country": "SWE", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "SE" },
  { "code": "+41", "country": "CHE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "CH" },
  { "code": "+963", "country": "SYR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "SY" },
  { "code": "+886", "country": "TWN", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "TW" },
  { "code": "+992", "country": "TJK", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "TJ" },
  { "code": "+255", "country": "TZA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "TZ" },
  { "code": "+66", "country": "THA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "TH" },
  { "code": "+228", "country": "TGO", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "TG" },
  { "code": "+676", "country": "TON", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "TO" },
  { "code": "+1-868", "country": "TTO", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "TT" },
  { "code": "+216", "country": "TUN", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "TN" },
  { "code": "+90", "country": "TUR", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "TR" },
  { "code": "+993", "country": "TKM", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "TM" },
  { "code": "+1-649", "country": "TCA", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "TC" },
  { "code": "+688", "country": "TUV", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "TV" },
  { "code": "+256", "country": "UGA", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "UG" },
  { "code": "+380", "country": "UKR", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "UA" },
  { "code": "+971", "country": "ARE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "AE" },
  { "code": "+44", "country": "GBR", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "GB" },
  { "code": "+1", "country": "USA", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "US" },
  { "code": "+598", "country": "URY", "maxLength": 8, "placeholder": "XXXXXXXX", "countryCode": "UY" },
  { "code": "+998", "country": "UZB", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "UZ" },
  { "code": "+678", "country": "VUT", "maxLength": 7, "placeholder": "XXXXXXX", "countryCode": "VU" },
  { "code": "+58", "country": "VEN", "maxLength": 10, "placeholder": "XXXXXXXXXX", "countryCode": "VE" },
  { "code": "+84", "country": "VNM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "VN" },
  { "code": "+681", "country": "WLF", "maxLength": 6, "placeholder": "XXXXXX", "countryCode": "WF" },
  { "code": "+967", "country": "YEM", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "YE" },
  { "code": "+260", "country": "ZMB", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "ZM" },
  { "code": "+263", "country": "ZWE", "maxLength": 9, "placeholder": "XXXXXXXXX", "countryCode": "ZW" }
];

function Form({
  inputs = [
    {
      type: "text",
      label: "First Name",
      placeholder: "John",
      required: true,
      name: "firstName",
    },
    {
      type: "text",
      label: "Last Name",
      placeholder: "Doe",
      required: true,
      name: "lastName",
    },
    {
      type: "email",
      label: "Email",
      placeholder: "your@email.com",
      required: true,
      name: "email",
    },
    {
      type: "tel",
      label: "Phone Number",
      placeholder: "9898989898",
      name: "number",
      required: true,
    },
    {
      type: "text",
      label: "Designation",
      placeholder: "CEO",
      name: "designation",

    },
    {
      type: "text",
      label: "Company Name",
      placeholder: "TruFlo",
      name: "company",
    },
  ],
  ...props
}) {

  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const dd = new Date().getDate();
  const mm = months[new Date().getMonth()];
  const yyyy = new Date().getFullYear();
  const today = dd + mm + (yyyy - 2000);

  const querry = useSearchParams();
  const source = querry.get("utm_source") || "direct";
  const medium = querry.get("utm_medium") || "lead_form";
  const campaign = querry.get("utm_campaign") || "truflo_onepager_website_" + today;


  const initialFormData = inputs.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[1]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Submit");


   useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser.');
      return;
    }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            if (data?.countryName){
              const country = countryCodes.find(c => c.countryCode == data.countryCode);
              if (country) {
                setSelectedCountryCode(country);
              }
            }
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number validation
    if (name === 'number') {

      const cleanValue = value.replace(/\D/g, '');
      

      if (cleanValue.length <= selectedCountryCode.maxLength) {
        setFormData({ ...formData, [name]: cleanValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    setMessage("");
    setError("");
  };

  const handleCountryCodeSelect = (e) => {
    const selectedCode = e.target.value;
    const countryCode = countryCodes.find(country => country.code === selectedCode);
    setSelectedCountryCode(countryCode);
    
    // Reset phone number when country code changes
    setFormData({ ...formData, number: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Submitting...");
    

    const phone = formData.number ? (selectedCountryCode.code == '+91') ? formData.number : (selectedCountryCode.code + " " + formData.number) : '';
    const submissionData = { ...formData, number: phone, country: selectedCountryCode.country };
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...submissionData, source, medium, campaign }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setStatus("Submitted");
        setFormData(initialFormData); 
      } else {
        setError(data.error || "Something went wrong");
        setStatus("Submit");
      }
    } catch (err) {
      setError("Failed to submit form");
      setStatus("Submit");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContent}>
        <div className={styles.formInputs}>
          {inputs.map((input, index) => (
            <div key={index} className={styles.formInput}>
              <label htmlFor={input.name}>{input.label}</label>
              
              {input.name === 'number' ? (
                <div className={styles.phoneInputContainer}>
                  <select 
                    className={styles.countryCodeSelect}
                    value={selectedCountryCode.code}
                    onChange={handleCountryCodeSelect}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.country} value={country.code}>
                       {country.country} {country.code} 
                      </option>
                    ))}
                  </select>
                  
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    placeholder={selectedCountryCode.placeholder}
                    required={input.required}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.phoneInput}`}
                    maxLength={selectedCountryCode.maxLength}
                    minLength={selectedCountryCode.maxLength}
                  />
                </div>
              ) : (
                // Regular input
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  placeholder={input.placeholder}
                  required={input.required}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className={styles.input}
                />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className={styles.btnPrime} disabled={status !== "Submit"}>
          {status}
        </button>
        {message && <p className={styles.success}>{message}</p>}
        {!message && error && <p className={styles.error}>{error}</p>}
      </div>
    </form>
  );
}

export default Form;