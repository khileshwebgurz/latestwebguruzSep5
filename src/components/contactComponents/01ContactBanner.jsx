import React from "react";
import Contact from "../homeComponents/11HomeContact";
import ContactClient from "../homeComponents/clientcomp/ContactClient";

const ContactBanner = () => {
  return (
    <div>
      <section className="contact-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h2 className="color-wt">
                Kickstart Your
                <br />
                <strong> Journey Today</strong>
              </h2>
              <p className="color-wt">
                Get all your questions answered by our business development
                team.
              </p>
              <div className="btn-merge">
                <a className="explore-btn me-3" href="/">
                  For Business
                </a>
                <a className="explore-btn no-color" href="/">
                  For Career
                </a>
              </div>
            </div>
                <ContactClient/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;
