"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";

const Contact = () => {
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

      const formdata = new FormData();
      formdata.append("your-name", formData.name);
      formdata.append("your-email", formData.email);
      formdata.append("number", formData.phone);
      formdata.append("your-message", formData.projectDetails);
      formdata.append("_wpcf7_unit_tag", "wpcf7-f7908-p7932-o5"); // Add this or any other required field

      try {
        const response = await fetch(
          "https://webguruz.in/wp-json/contact-form-7/v1/contact-forms/7908/feedback",
          {
            method: "POST",
            body: formdata,
            redirect: "follow",
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
    <section className="contact-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12 contact-sub left">
            <p>Get in Touch with</p>
            <h2>Our Experts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <p>Integrate Towards Innovation</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <Link href="/" className="partner-btn about--btn">
              Become a Partner&nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                role="img"
                aria-label="Arrow Right"
              />
            </Link>
            <div className="contact-info">
              <h4>Contact Info:</h4>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="ps-1"
                        role="image"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales - <a href="tel:7307001777">(+91) 730 700 1777</a>
                      </p>
                      <p>
                        Jobs - <a href="tel:9592016444">(+91) 959 201 6444</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="ps-1"
                        role="image"
                        aria-label="Envelope"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales -{" "}
                        <a
                          href="mailto:provider@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          provider@webguruz.in
                        </a>
                      </p>
                      <p>
                        Jobs -
                        <a
                          href="mailto:careers@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          careers@webguruz.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  onChange={(e) =>
                    handleChange("projectDetails", e.target.value)
                  }
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
