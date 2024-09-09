import React from "react";
import Image from "next/image";
import logo1 from "../../../public/images/contactimages/logo1.png";
import logo2 from "../../../public/images/contactimages/logo2.png";
import logo3 from "../../../public/images/contactimages/logo3.png";
import logo4 from "../../../public/images/contactimages/logo4.png";

const ContactLogo = () => {
  return (
    <>
      <section className="contact-logo py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
              <h3>
                Our <span>Clients</span>
              </h3>
              <p>
                Clients of immense value guide our commitment to exceptional
                service
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo1} alt="logo1" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo2} alt="logo2" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo3} alt="logo3" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo4} alt="logo4" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo1} alt="logo1" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo2} alt="logo2" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo3} alt="logo3" />
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="logo-card">
                <Image src={logo4} alt="logo4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactLogo;
