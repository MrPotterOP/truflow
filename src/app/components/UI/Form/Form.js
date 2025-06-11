'use client';
import { useState } from "react";
import styles from "./styles.module.css";

import { useSearchParams } from "next/navigation";

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

  const querry = useSearchParams();

  const source = querry.get("utm_source") || "direct";

  const medium = querry.get("utm_medium") || "lead_form";

  const campaign = querry.get("utm_campaign") || "direct";




  // Initialize form state with empty values for each input
  const initialFormData = inputs.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...formData, source, medium, campaign}),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFormData(initialFormData); // Reset form
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to submit form");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContent}>
        <div className={styles.formInputs}>
          {inputs.map((input, index) => (
            <div key={index} className={styles.formInput}>
              <label htmlFor={input.name}>{input.label}</label>
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
            </div>
          ))}
        </div>
        <button type="submit" className={styles.btnPrime}>
          Submit
        </button>
        {message && <p className={styles.success}>{message}</p>}
        {!message &&error && <p className={styles.error}>{error}</p>}
      </div>
    </form>
  );
}

export default Form;