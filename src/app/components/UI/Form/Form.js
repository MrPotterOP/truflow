'use client';
import { useState } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

// Country codes data with validation rules
const countryCodes = [
  { "code": "+1", "country": "USA", "flag": "🇺🇸", "maxLength": 10, "placeholder": "2125551234" },
  { "code": "+91", "country": "IND", "flag": "🇮🇳", "maxLength": 10, "placeholder": "9876543210" },
  { "code": "+44", "country": "GBR", "flag": "🇬🇧", "maxLength": 10, "placeholder": "7123456789" },
  { "code": "+61", "country": "AUS", "flag": "🇦🇺", "maxLength": 9, "placeholder": "412345678" },
  { "code": "+49", "country": "DEU", "flag": "🇩🇪", "maxLength": 11, "placeholder": "15123456789" },
  { "code": "+33", "country": "FRA", "flag": "🇫🇷", "maxLength": 9, "placeholder": "612345678" },
  { "code": "+81", "country": "JPN", "flag": "🇯🇵", "maxLength": 10, "placeholder": "9012345678" },
  { "code": "+86", "country": "CHN", "flag": "🇨🇳", "maxLength": 11, "placeholder": "13812345678" },
  { "code": "+7", "country": "RUS", "flag": "🇷🇺", "maxLength": 10, "placeholder": "9123456789" },
  { "code": "+55", "country": "BRA", "flag": "🇧🇷", "maxLength": 11, "placeholder": "11987654321" },
  { "code": "+27", "country": "ZAF", "flag": "🇿🇦", "maxLength": 9, "placeholder": "712345678" },
  { "code": "+82", "country": "KOR", "flag": "🇰🇷", "maxLength": 10, "placeholder": "1012345678" },
  { "code": "+34", "country": "ESP", "flag": "🇪🇸", "maxLength": 9, "placeholder": "612345678" },
  { "code": "+39", "country": "ITA", "flag": "🇮🇹", "maxLength": 10, "placeholder": "3123456789" },
  { "code": "+52", "country": "MEX", "flag": "🇲🇽", "maxLength": 10, "placeholder": "5512345678" },
  { "code": "+90", "country": "TUR", "flag": "🇹🇷", "maxLength": 10, "placeholder": "5123456789" },
  { "code": "+966", "country": "SAU", "flag": "🇸🇦", "maxLength": 9, "placeholder": "512345678" },
  { "code": "+65", "country": "SGP", "flag": "🇸🇬", "maxLength": 8, "placeholder": "81234567" },
  { "code": "+64", "country": "NZL", "flag": "🇳🇿", "maxLength": 9, "placeholder": "212345678" }
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleCountryCodeSelect = (countryCode) => {
    setSelectedCountryCode(countryCode);
    setIsDropdownOpen(false);
    

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
                  <div className={styles.countryCodeDropdown}>
                    <button 
                      type="button"
                      className={styles.countryCodeButton}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={styles.flag}>{selectedCountryCode.country}</span>
                      <span className={styles.code}>{selectedCountryCode.code}</span>
                      <span className={styles.dropdownArrow}>▼</span>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            className={`${styles.dropdownItem} ${
                              selectedCountryCode.code === country.code ? styles.selected : ''
                            }`}
                            onClick={() => handleCountryCodeSelect(country)}
                          >
                            <span className={styles.flag}>{country.flag}</span>
                            <span className={styles.code}>{country.code}</span>
                            <span className={styles.country}>{country.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
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