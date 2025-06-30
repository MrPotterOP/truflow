'use client';
import { useState } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

// Country codes data with validation rules
const countryCodes = [
  { "code": "+93", "country": "AFG", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+91", "country": "IND", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+355", "country": "ALB", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+376", "country": "AND", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+244", "country": "AGO", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+1-264", "country": "AIA", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+1-268", "country": "ATG", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+54", "country": "ARG", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+374", "country": "ARM", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+297", "country": "ABW", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+61", "country": "AUS", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+43", "country": "AUT", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+994", "country": "AZE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+1-242", "country": "BHS", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+973", "country": "BHR", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+880", "country": "BGD", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+1-246", "country": "BRB", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+375", "country": "BLR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+32", "country": "BEL", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+501", "country": "BLZ", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+229", "country": "BEN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+1-441", "country": "BMU", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+975", "country": "BTN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+591", "country": "BOL", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+387", "country": "BIH", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+267", "country": "BWA", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+55", "country": "BRA", "maxLength": 11, "placeholder": "XXXXXXXXXXX" },
  { "code": "+246", "country": "IOT", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+1-284", "country": "VGB", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+673", "country": "BRN", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+359", "country": "BGR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+226", "country": "BFA", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+257", "country": "BDI", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+855", "country": "KHM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+237", "country": "CMR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+1", "country": "CAN", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+238", "country": "CPV", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+1-345", "country": "CYM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+236", "country": "CAF", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+235", "country": "TCD", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+56", "country": "CHL", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+86", "country": "CHN", "maxLength": 11, "placeholder": "XXXXXXXXXXX" },
  { "code": "+57", "country": "COL", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+269", "country": "COM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+242", "country": "COG", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+243", "country": "COD", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+682", "country": "COK", "maxLength": 5, "placeholder": "XXXXX" },
  { "code": "+506", "country": "CRI", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+385", "country": "HRV", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+53", "country": "CUB", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+599", "country": "CUW", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+357", "country": "CYP", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+420", "country": "CZE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+45", "country": "DNK", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+253", "country": "DJI", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+1-767", "country": "DMA", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+1-809", "country": "DOM", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+213", "country": "DZA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+670", "country": "TLS", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+593", "country": "ECU", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+20", "country": "EGY", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+503", "country": "SLV", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+240", "country": "GNQ", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+291", "country": "ERI", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+372", "country": "EST", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+268", "country": "SWZ", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+251", "country": "ETH", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+500", "country": "FLK", "maxLength": 5, "placeholder": "XXXXX" },
  { "code": "+298", "country": "FRO", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+679", "country": "FJI", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+358", "country": "FIN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+33", "country": "FRA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+594", "country": "GUF", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+689", "country": "PYF", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+241", "country": "GAB", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+220", "country": "GMB", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+995", "country": "GEO", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+49", "country": "DEU", "maxLength": 11, "placeholder": "XXXXXXXXXXX" },
  { "code": "+233", "country": "GHA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+350", "country": "GIB", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+30", "country": "GRC", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+299", "country": "GRL", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+1-473", "country": "GRD", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+590", "country": "GLP", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+1-671", "country": "GUM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+502", "country": "GTM", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+44-1481", "country": "GGY", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+224", "country": "GIN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+245", "country": "GNB", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+592", "country": "GUY", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+509", "country": "HTI", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+504", "country": "HND", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+852", "country": "HKG", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+36", "country": "HUN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+354", "country": "ISL", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+62", "country": "IDN", "maxLength": 11, "placeholder": "XXXXXXXXXXX" },
  { "code": "+98", "country": "IRN", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+964", "country": "IRQ", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+353", "country": "IRL", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+44-1624", "country": "IMN", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+972", "country": "ISR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+39", "country": "ITA", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+225", "country": "CIV", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+1-876", "country": "JAM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+81", "country": "JPN", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+44-1534", "country": "JEY", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+962", "country": "JOR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+7", "country": "KAZ", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+254", "country": "KEN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+686", "country": "KIR", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+383", "country": "KOS", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+965", "country": "KWT", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+996", "country": "KGZ", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+856", "country": "LAO", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+371", "country": "LVA", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+961", "country": "LBN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+266", "country": "LSO", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+231", "country": "LBR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+218", "country": "LBY", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+423", "country": "LIE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+370", "country": "LTU", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+352", "country": "LUX", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+853", "country": "MAC", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+389", "country": "MKD", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+261", "country": "MDG", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+265", "country": "MWI", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+60", "country": "MYS", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+960", "country": "MDV", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+223", "country": "MLI", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+356", "country": "MLT", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+692", "country": "MHL", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+596", "country": "MTQ", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+222", "country": "MRT", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+230", "country": "MUS", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+262", "country": "MYT", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+52", "country": "MEX", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+691", "country": "FSM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+373", "country": "MDA", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+377", "country": "MCO", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+976", "country": "MNG", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+382", "country": "MNE", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+1-664", "country": "MSR", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+212", "country": "MAR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+258", "country": "MOZ", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+95", "country": "MMR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+264", "country": "NAM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+674", "country": "NRU", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+977", "country": "NPL", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+31", "country": "NLD", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+599", "country": "ANT", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+687", "country": "NCL", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+64", "country": "NZL", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+505", "country": "NIC", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+227", "country": "NER", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+234", "country": "NGA", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+683", "country": "NIU", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+672", "country": "NFK", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+1-670", "country": "MNP", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+47", "country": "NOR", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+968", "country": "OMN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+92", "country": "PAK", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+680", "country": "PLW", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+970", "country": "PSE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+507", "country": "PAN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+675", "country": "PNG", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+595", "country": "PRY", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+51", "country": "PER", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+63", "country": "PHL", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+48", "country": "POL", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+351", "country": "PRT", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+1-787", "country": "PRI", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+974", "country": "QAT", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+262", "country": "REU", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+40", "country": "ROU", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+7", "country": "RUS", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+250", "country": "RWA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+590", "country": "BLM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+508", "country": "SPM", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+1-784", "country": "VCT", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+685", "country": "WSM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+378", "country": "SMR", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+239", "country": "STP", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+966", "country": "SAU", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+221", "country": "SEN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+381", "country": "SRB", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+248", "country": "SYC", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+232", "country": "SLE", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+65", "country": "SGP", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+1-721", "country": "SXM", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+421", "country": "SVK", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+386", "country": "SVN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+677", "country": "SLB", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+252", "country": "SOM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+27", "country": "ZAF", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+211", "country": "SSD", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+82", "country": "KOR", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+34", "country": "ESP", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+94", "country": "LKA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+249", "country": "SDN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+597", "country": "SUR", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+46", "country": "SWE", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+41", "country": "CHE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+963", "country": "SYR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+886", "country": "TWN", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+992", "country": "TJK", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+255", "country": "TZA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+66", "country": "THA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+228", "country": "TGO", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+676", "country": "TON", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+1-868", "country": "TTO", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+216", "country": "TUN", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+90", "country": "TUR", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+993", "country": "TKM", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+1-649", "country": "TCA", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+688", "country": "TUV", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+256", "country": "UGA", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+380", "country": "UKR", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+971", "country": "ARE", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+44", "country": "GBR", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+1", "country": "USA", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+598", "country": "URY", "maxLength": 8, "placeholder": "XXXXXXXX" },
  { "code": "+998", "country": "UZB", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+678", "country": "VUT", "maxLength": 7, "placeholder": "XXXXXXX" },
  { "code": "+58", "country": "VEN", "maxLength": 10, "placeholder": "XXXXXXXXXX" },
  { "code": "+84", "country": "VNM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+681", "country": "WLF", "maxLength": 6, "placeholder": "XXXXXX" },
  { "code": "+967", "country": "YEM", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+260", "country": "ZMB", "maxLength": 9, "placeholder": "XXXXXXXXX" },
  { "code": "+263", "country": "ZWE", "maxLength": 9, "placeholder": "XXXXXXXXX" }
]

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
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[1]); // Default to +91 (India)
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Submit");

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