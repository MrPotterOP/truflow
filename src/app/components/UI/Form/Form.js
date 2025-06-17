'use client';
import { useState } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

// Country codes data with validation rules
const countryCodes = [
  { "code": "+91", "country": "IND", "maxLength": 10, "placeholder": "9876543210" },
  { "code": "+93", "country": "AFG", "maxLength": 9, "placeholder": "701234567" },
  { "code": "+355", "country": "ALB", "maxLength": 9, "placeholder": "672345678" },
  { "code": "+213", "country": "DZA", "maxLength": 9, "placeholder": "771234567" },
  { "code": "+376", "country": "AND", "maxLength": 6, "placeholder": "123456" },
  { "code": "+244", "country": "AGO", "maxLength": 9, "placeholder": "923456789" },
  { "code": "+1-264", "country": "AIA", "maxLength": 7, "placeholder": "2351234" },
  { "code": "+1-268", "country": "ATG", "maxLength": 7, "placeholder": "4641234" },
  { "code": "+54", "country": "ARG", "maxLength": 10, "placeholder": "1123456789" },
  { "code": "+374", "country": "ARM", "maxLength": 8, "placeholder": "77123456" },
  { "code": "+297", "country": "ABW", "maxLength": 7, "placeholder": "5601234" },
  { "code": "+61", "country": "AUS", "maxLength": 9, "placeholder": "412345678" },
  { "code": "+43", "country": "AUT", "maxLength": 10, "placeholder": "6641234567" },
  { "code": "+994", "country": "AZE", "maxLength": 9, "placeholder": "501234567" },
  { "code": "+1-242", "country": "BHS", "maxLength": 7, "placeholder": "3571234" },
  { "code": "+973", "country": "BHR", "maxLength": 8, "placeholder": "36001234" },
  { "code": "+880", "country": "BGD", "maxLength": 10, "placeholder": "1712345678" },
  { "code": "+1-246", "country": "BRB", "maxLength": 7, "placeholder": "2311234" },
  { "code": "+375", "country": "BLR", "maxLength": 9, "placeholder": "291234567" },
  { "code": "+32", "country": "BEL", "maxLength": 9, "placeholder": "471234567" },
  { "code": "+501", "country": "BLZ", "maxLength": 7, "placeholder": "2221234" },
  { "code": "+229", "country": "BEN", "maxLength": 8, "placeholder": "90123456" },
  { "code": "+1-441", "country": "BMU", "maxLength": 7, "placeholder": "2951234" },
  { "code": "+975", "country": "BTN", "maxLength": 8, "placeholder": "17123456" },
  { "code": "+591", "country": "BOL", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+387", "country": "BIH", "maxLength": 8, "placeholder": "61123456" },
  { "code": "+267", "country": "BWA", "maxLength": 8, "placeholder": "72123456" },
  { "code": "+55", "country": "BRA", "maxLength": 11, "placeholder": "11987654321" },
  { "code": "+246", "country": "IOT", "maxLength": 7, "placeholder": "3801234" },
  { "code": "+1-284", "country": "VGB", "maxLength": 7, "placeholder": "4941234" },
  { "code": "+673", "country": "BRN", "maxLength": 7, "placeholder": "7123456" },
  { "code": "+359", "country": "BGR", "maxLength": 9, "placeholder": "881234567" },
  { "code": "+226", "country": "BFA", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+257", "country": "BDI", "maxLength": 8, "placeholder": "79501234" },
  { "code": "+855", "country": "KHM", "maxLength": 9, "placeholder": "961234567" },
  { "code": "+237", "country": "CMR", "maxLength": 9, "placeholder": "671234567" },
  { "code": "+1", "country": "CAN", "maxLength": 10, "placeholder": "4161234567" },
  { "code": "+238", "country": "CPV", "maxLength": 7, "placeholder": "2211234" },
  { "code": "+1-345", "country": "CYM", "maxLength": 7, "placeholder": "3251234" },
  { "code": "+236", "country": "CAF", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+235", "country": "TCD", "maxLength": 8, "placeholder": "90123456" },
  { "code": "+56", "country": "CHL", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+86", "country": "CHN", "maxLength": 11, "placeholder": "13812345678" },
  { "code": "+57", "country": "COL", "maxLength": 10, "placeholder": "3123456789" },
  { "code": "+269", "country": "COM", "maxLength": 7, "placeholder": "7601234" },
  { "code": "+242", "country": "COG", "maxLength": 9, "placeholder": "551234567" },
  { "code": "+243", "country": "COD", "maxLength": 9, "placeholder": "971234567" },
  { "code": "+682", "country": "COK", "maxLength": 5, "placeholder": "20123" },
  { "code": "+506", "country": "CRI", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+385", "country": "HRV", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+53", "country": "CUB", "maxLength": 8, "placeholder": "51234567" },
  { "code": "+599", "country": "CUW", "maxLength": 7, "placeholder": "9512345" },
  { "code": "+357", "country": "CYP", "maxLength": 8, "placeholder": "96123456" },
  { "code": "+420", "country": "CZE", "maxLength": 9, "placeholder": "601234567" },
  { "code": "+45", "country": "DNK", "maxLength": 8, "placeholder": "20123456" },
  { "code": "+253", "country": "DJI", "maxLength": 8, "placeholder": "77123456" },
  { "code": "+1-767", "country": "DMA", "maxLength": 7, "placeholder": "2251234" },
  { "code": "+1-809", "country": "DOM", "maxLength": 10, "placeholder": "8091234567" },
  { "code": "+670", "country": "TLS", "maxLength": 8, "placeholder": "73123456" },
  { "code": "+593", "country": "ECU", "maxLength": 9, "placeholder": "991234567" },
  { "code": "+20", "country": "EGY", "maxLength": 10, "placeholder": "1012345678" },
  { "code": "+503", "country": "SLV", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+240", "country": "GNQ", "maxLength": 9, "placeholder": "551234567" },
  { "code": "+291", "country": "ERI", "maxLength": 7, "placeholder": "1123456" },
  { "code": "+372", "country": "EST", "maxLength": 8, "placeholder": "51234567" },
  { "code": "+268", "country": "SWZ", "maxLength": 8, "placeholder": "76123456" },
  { "code": "+251", "country": "ETH", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+500", "country": "FLK", "maxLength": 5, "placeholder": "31234" },
  { "code": "+298", "country": "FRO", "maxLength": 6, "placeholder": "201234" },
  { "code": "+679", "country": "FJI", "maxLength": 7, "placeholder": "9012345" },
  { "code": "+358", "country": "FIN", "maxLength": 9, "placeholder": "401234567" },
  { "code": "+33", "country": "FRA", "maxLength": 9, "placeholder": "612345678" },
  { "code": "+594", "country": "GUF", "maxLength": 9, "placeholder": "694123456" },
  { "code": "+689", "country": "PYF", "maxLength": 6, "placeholder": "891234" },
  { "code": "+241", "country": "GAB", "maxLength": 8, "placeholder": "74123456" },
  { "code": "+220", "country": "GMB", "maxLength": 7, "placeholder": "3012345" },
  { "code": "+995", "country": "GEO", "maxLength": 9, "placeholder": "551234567" },
  { "code": "+49", "country": "DEU", "maxLength": 11, "placeholder": "15112345678" },
  { "code": "+233", "country": "GHA", "maxLength": 9, "placeholder": "201234567" },
  { "code": "+350", "country": "GIB", "maxLength": 8, "placeholder": "56123456" },
  { "code": "+30", "country": "GRC", "maxLength": 10, "placeholder": "6912345678" },
  { "code": "+299", "country": "GRL", "maxLength": 6, "placeholder": "221234" },
  { "code": "+1-473", "country": "GRD", "maxLength": 7, "placeholder": "4401234" },
  { "code": "+590", "country": "GLP", "maxLength": 9, "placeholder": "690123456" },
  { "code": "+1-671", "country": "GUM", "maxLength": 7, "placeholder": "6711234" },
  { "code": "+502", "country": "GTM", "maxLength": 8, "placeholder": "40123456" },
  { "code": "+44-1481", "country": "GGY", "maxLength": 10, "placeholder": "7811234567" },
  { "code": "+224", "country": "GIN", "maxLength": 9, "placeholder": "621234567" },
  { "code": "+245", "country": "GNB", "maxLength": 9, "placeholder": "951234567" },
  { "code": "+592", "country": "GUY", "maxLength": 7, "placeholder": "2311234" },
  { "code": "+509", "country": "HTI", "maxLength": 8, "placeholder": "34123456" },
  { "code": "+504", "country": "HND", "maxLength": 8, "placeholder": "88123456" },
  { "code": "+852", "country": "HKG", "maxLength": 8, "placeholder": "51234567" },
  { "code": "+36", "country": "HUN", "maxLength": 9, "placeholder": "201234567" },
  { "code": "+354", "country": "ISL", "maxLength": 7, "placeholder": "6112345" },
  { "code": "+62", "country": "IDN", "maxLength": 11, "placeholder": "81234567890" },
  { "code": "+98", "country": "IRN", "maxLength": 10, "placeholder": "9123456789" },
  { "code": "+964", "country": "IRQ", "maxLength": 10, "placeholder": "7712345678" },
  { "code": "+353", "country": "IRL", "maxLength": 9, "placeholder": "851234567" },
  { "code": "+44-1624", "country": "IMN", "maxLength": 10, "placeholder": "7624123456" },
  { "code": "+972", "country": "ISR", "maxLength": 9, "placeholder": "571234567" },
  { "code": "+39", "country": "ITA", "maxLength": 10, "placeholder": "3456789012" },
  { "code": "+225", "country": "CIV", "maxLength": 10, "placeholder": "0712345678" },
  { "code": "+1-876", "country": "JAM", "maxLength": 7, "placeholder": "8761234" },
  { "code": "+81", "country": "JPN", "maxLength": 10, "placeholder": "9012345678" },
  { "code": "+44-1534", "country": "JEY", "maxLength": 10, "placeholder": "7797123456" },
  { "code": "+962", "country": "JOR", "maxLength": 9, "placeholder": "781234567" },
  { "code": "+7", "country": "KAZ", "maxLength": 10, "placeholder": "7012345678" },
  { "code": "+254", "country": "KEN", "maxLength": 9, "placeholder": "712345678" },
  { "code": "+686", "country": "KIR", "maxLength": 8, "placeholder": "72012345" },
  { "code": "+383", "country": "KOS", "maxLength": 8, "placeholder": "44123456" },
  { "code": "+965", "country": "KWT", "maxLength": 8, "placeholder": "50123456" },
  { "code": "+996", "country": "KGZ", "maxLength": 9, "placeholder": "701234567" },
  { "code": "+856", "country": "LAO", "maxLength": 8, "placeholder": "20123456" },
  { "code": "+371", "country": "LVA", "maxLength": 8, "placeholder": "20123456" },
  { "code": "+961", "country": "LBN", "maxLength": 8, "placeholder": "71123456" },
  { "code": "+266", "country": "LSO", "maxLength": 8, "placeholder": "62123456" },
  { "code": "+231", "country": "LBR", "maxLength": 9, "placeholder": "771234567" },
  { "code": "+218", "country": "LBY", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+423", "country": "LIE", "maxLength": 9, "placeholder": "701234567" },
  { "code": "+370", "country": "LTU", "maxLength": 8, "placeholder": "61234567" },
  { "code": "+352", "country": "LUX", "maxLength": 9, "placeholder": "621234567" },
  { "code": "+853", "country": "MAC", "maxLength": 8, "placeholder": "66123456" },
  { "code": "+389", "country": "MKD", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+261", "country": "MDG", "maxLength": 9, "placeholder": "341234567" },
  { "code": "+265", "country": "MWI", "maxLength": 9, "placeholder": "991234567" },
  { "code": "+60", "country": "MYS", "maxLength": 10, "placeholder": "123456789" },
  { "code": "+960", "country": "MDV", "maxLength": 7, "placeholder": "7771234" },
  { "code": "+223", "country": "MLI", "maxLength": 8, "placeholder": "70123456" },
  { "code": "+356", "country": "MLT", "maxLength": 8, "placeholder": "79123456" },
  { "code": "+692", "country": "MHL", "maxLength": 7, "placeholder": "6351234" },
  { "code": "+596", "country": "MTQ", "maxLength": 9, "placeholder": "696123456" },
  { "code": "+222", "country": "MRT", "maxLength": 8, "placeholder": "20123456" },
  { "code": "+230", "country": "MUS", "maxLength": 8, "placeholder": "58123456" },
  { "code": "+262", "country": "MYT", "maxLength": 9, "placeholder": "639123456" },
  { "code": "+52", "country": "MEX", "maxLength": 10, "placeholder": "1234567890" },
  { "code": "+691", "country": "FSM", "maxLength": 7, "placeholder": "1234567" },
  { "code": "+373", "country": "MDA", "maxLength": 8, "placeholder": "69123456" },
  { "code": "+377", "country": "MCO", "maxLength": 9, "placeholder": "441234567" },
  { "code": "+976", "country": "MNG", "maxLength": 8, "placeholder": "88123456" },
  { "code": "+382", "country": "MNE", "maxLength": 8, "placeholder": "67123456" },
  { "code": "+1-664", "country": "MSR", "maxLength": 7, "placeholder": "6641234" },
  { "code": "+212", "country": "MAR", "maxLength": 9, "placeholder": "661234567" },
  { "code": "+258", "country": "MOZ", "maxLength": 9, "placeholder": "821234567" },
  { "code": "+95", "country": "MMR", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+264", "country": "NAM", "maxLength": 9, "placeholder": "811234567" },
  { "code": "+674", "country": "NRU", "maxLength": 7, "placeholder": "4441234" },
  { "code": "+977", "country": "NPL", "maxLength": 10, "placeholder": "9841234567" },
  { "code": "+31", "country": "NLD", "maxLength": 9, "placeholder": "612345678" },
  { "code": "+599", "country": "ANT", "maxLength": 7, "placeholder": "3181234" },
  { "code": "+687", "country": "NCL", "maxLength": 6, "placeholder": "751234" },
  { "code": "+64", "country": "NZL", "maxLength": 9, "placeholder": "211234567" },
  { "code": "+505", "country": "NIC", "maxLength": 8, "placeholder": "81234567" },
  { "code": "+227", "country": "NER", "maxLength": 8, "placeholder": "90123456" },
  { "code": "+234", "country": "NGA", "maxLength": 10, "placeholder": "8031234567" },
  { "code": "+683", "country": "NIU", "maxLength": 6, "placeholder": "123456" },
  { "code": "+672", "country": "NFK", "maxLength": 6, "placeholder": "321234" },
  { "code": "+1-670", "country": "MNP", "maxLength": 7, "placeholder": "2345678" },
  { "code": "+47", "country": "NOR", "maxLength": 8, "placeholder": "41234567" },
  { "code": "+968", "country": "OMN", "maxLength": 8, "placeholder": "90123456" },
  { "code": "+92", "country": "PAK", "maxLength": 10, "placeholder": "3012345678" },
  { "code": "+680", "country": "PLW", "maxLength": 7, "placeholder": "7751234" },
  { "code": "+970", "country": "PSE", "maxLength": 9, "placeholder": "591234567" },
  { "code": "+507", "country": "PAN", "maxLength": 8, "placeholder": "61234567" },
  { "code": "+675", "country": "PNG", "maxLength": 7, "placeholder": "7012345" },
  { "code": "+595", "country": "PRY", "maxLength": 9, "placeholder": "981234567" },
  { "code": "+51", "country": "PER", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+63", "country": "PHL", "maxLength": 10, "placeholder": "9123456789" },
  { "code": "+48", "country": "POL", "maxLength": 9, "placeholder": "501234567" },
  { "code": "+351", "country": "PRT", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+1-787", "country": "PRI", "maxLength": 10, "placeholder": "7871234567" },
  { "code": "+974", "country": "QAT", "maxLength": 8, "placeholder": "33123456" },
  { "code": "+262", "country": "REU", "maxLength": 9, "placeholder": "692345678" },
  { "code": "+40", "country": "ROU", "maxLength": 9, "placeholder": "712345678" },
  { "code": "+7", "country": "RUS", "maxLength": 10, "placeholder": "9012345678" },
  { "code": "+250", "country": "RWA", "maxLength": 9, "placeholder": "781234567" },
  { "code": "+590", "country": "BLM", "maxLength": 9, "placeholder": "690123456" },
  { "code": "+508", "country": "SPM", "maxLength": 6, "placeholder": "551234" },
  { "code": "+1-784", "country": "VCT", "maxLength": 7, "placeholder": "7841234" },
  { "code": "+685", "country": "WSM", "maxLength": 7, "placeholder": "7212345" },
  { "code": "+378", "country": "SMR", "maxLength": 10, "placeholder": "7712345678" },
  { "code": "+239", "country": "STP", "maxLength": 7, "placeholder": "9812345" },
  { "code": "+966", "country": "SAU", "maxLength": 9, "placeholder": "501234567" },
  { "code": "+221", "country": "SEN", "maxLength": 9, "placeholder": "701234567" },
  { "code": "+381", "country": "SRB", "maxLength": 9, "placeholder": "611234567" },
  { "code": "+248", "country": "SYC", "maxLength": 7, "placeholder": "2512345" },
  { "code": "+232", "country": "SLE", "maxLength": 8, "placeholder": "76123456" },
  { "code": "+65", "country": "SGP", "maxLength": 8, "placeholder": "81234567" },
  { "code": "+1-721", "country": "SXM", "maxLength": 7, "placeholder": "5421234" },
  { "code": "+421", "country": "SVK", "maxLength": 9, "placeholder": "901234567" },
  { "code": "+386", "country": "SVN", "maxLength": 8, "placeholder": "40123456" },
  { "code": "+677", "country": "SLB", "maxLength": 7, "placeholder": "7012345" },
  { "code": "+252", "country": "SOM", "maxLength": 9, "placeholder": "611234567" },
  { "code": "+27", "country": "ZAF", "maxLength": 9, "placeholder": "821234567" },
  { "code": "+211", "country": "SSD", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+82", "country": "KOR", "maxLength": 10, "placeholder": "1012345678" },
  { "code": "+34", "country": "ESP", "maxLength": 9, "placeholder": "612345678" },
  { "code": "+94", "country": "LKA", "maxLength": 9, "placeholder": "712345678" },
  { "code": "+249", "country": "SDN", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+597", "country": "SUR", "maxLength": 7, "placeholder": "7123456" },
  { "code": "+46", "country": "SWE", "maxLength": 10, "placeholder": "701234567" },
  { "code": "+41", "country": "CHE", "maxLength": 9, "placeholder": "761234567" },
  { "code": "+963", "country": "SYR", "maxLength": 9, "placeholder": "911234567" },
  { "code": "+886", "country": "TWN", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+992", "country": "TJK", "maxLength": 9, "placeholder": "917234567" },
  { "code": "+255", "country": "TZA", "maxLength": 9, "placeholder": "681234567" },
  { "code": "+66", "country": "THA", "maxLength": 9, "placeholder": "811234567" },
  { "code": "+228", "country": "TGO", "maxLength": 8, "placeholder": "90123456" },
  { "code": "+676", "country": "TON", "maxLength": 7, "placeholder": "7712345" },
  { "code": "+1-868", "country": "TTO", "maxLength": 7, "placeholder": "8681234" },
  { "code": "+216", "country": "TUN", "maxLength": 8, "placeholder": "20123456" },
  { "code": "+90", "country": "TUR", "maxLength": 10, "placeholder": "5012345678" },
  { "code": "+993", "country": "TKM", "maxLength": 8, "placeholder": "66123456" },
  { "code": "+1-649", "country": "TCA", "maxLength": 7, "placeholder": "6491234" },
  { "code": "+688", "country": "TUV", "maxLength": 6, "placeholder": "901234" },
  { "code": "+256", "country": "UGA", "maxLength": 9, "placeholder": "701234567" },
  { "code": "+380", "country": "UKR", "maxLength": 9, "placeholder": "671234567" },
  { "code": "+971", "country": "ARE", "maxLength": 9, "placeholder": "501234567" },
  { "code": "+44", "country": "GBR", "maxLength": 10, "placeholder": "7712345678" },
  { "code": "+1", "country": "USA", "maxLength": 10, "placeholder": "1234567890" },
  { "code": "+598", "country": "URY", "maxLength": 8, "placeholder": "91234567" },
  { "code": "+998", "country": "UZB", "maxLength": 9, "placeholder": "901234567" },
  { "code": "+678", "country": "VUT", "maxLength": 7, "placeholder": "5912345" },
  { "code": "+58", "country": "VEN", "maxLength": 10, "placeholder": "4121234567" },
  { "code": "+84", "country": "VNM", "maxLength": 9, "placeholder": "912345678" },
  { "code": "+681", "country": "WLF", "maxLength": 6, "placeholder": "721234" },
  { "code": "+967", "country": "YEM", "maxLength": 9, "placeholder": "711234567" },
  { "code": "+260", "country": "ZMB", "maxLength": 9, "placeholder": "961234567" },
  { "code": "+263", "country": "ZWE", "maxLength": 9, "placeholder": "771234567" }
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