"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
const ContactClient = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!validator.trim(formData.name))
      newErrors.name = "Full Name is required";
    if (!validator.isEmail(formData.email)) {
      newErrors.email = formData.email
        ? "Email is invalid"
        : "Business Email is required";
    }
    if (!validator.trim(formData.phone))
      newErrors.phone = "Phone Number is required";
    if (!validator.trim(formData.projectDetails))
      newErrors.projectDetails = "Project Details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Response from server:", data);

        // Reset the form data to initial state
        setFormData(initialFormData);
        setErrors({}); // Clear any existing errors
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <>
      <div className="col-sm-6 col-xs-12">
        <form
          className="contact-right-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3>Let&apos;s Get to know you</h3>
          <label>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            <input
              type="text"
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            <PhoneInput
              country={"in"}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(phone) => handleChange("phone", phone)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <label>
            <textarea
              placeholder="About Project"
              value={formData.projectDetails}
              onChange={(e) => handleChange("projectDetails", e.target.value)}
            ></textarea>
            {errors.projectDetails && (
              <span className="error">{errors.projectDetails}</span>
            )}
          </label>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactClient;
