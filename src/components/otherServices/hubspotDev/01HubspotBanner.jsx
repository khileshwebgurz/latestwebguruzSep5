
import React from "react";
import Image from "next/image";
import Hbstptimg from "../../../../public/images/hubspotimages/hbsptban.png";

function Hubspotbanner() {
  return (
    <section className="hubsptbanner service-banner py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
              <h2>
                <span>HubSpot Development</span>
                <br />
                Services
              </h2>
              <p className="unls">
                <strong>Unleash the Full Potential of HubSpot</strong>
              </p>
              <p>
                Accelerate growth with the help of our expert HubSpot
                developers, delivering growth-driven, fully optimized, and
                secure solutions.
              </p>
              <div className="gtintchbtn">
                <a className="explore-btn" href="/">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hbsptbnrimg">
              <Image src={Hbstptimg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotbanner;
