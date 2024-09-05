import React from "react";
import Image from "next/image";
import contactimg from "../../../public/images/contactimages/contact.svg";
import emailimg from "../../../public/images/contactimages/email.svg";
import enquiryimg from "../../../public/images/contactimages/enquiry.svg";

const ContactTalent = () => {
  return (
    <div>
      <section className="talent py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 col-xs- 12 talent-btn ">
              <div className="btn-merge pe-4 me-4">
                <button className="explore-btn hire-talent mb-3">
                  Hire A Talent
                </button>
                <button className="explore-btn job-apply no-color">
                  Apply For a Job
                </button>
              </div>
            </div>
            <div className="col-sm-8 col-xs-12 talent-cards">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <Image src={contactimg} alt="contactimg" className="mb-3" />
                    <p>Contact Sales</p>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <Image src={emailimg} alt="emailimg" className="mb-3" />
                    <p>Send An Email</p>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <Image src={enquiryimg} alt="enquiryimg" className="mb-3" />
                    <p>Send An Enquiry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactTalent;
