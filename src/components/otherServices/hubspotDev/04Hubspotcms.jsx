
import React from "react";
import Image from "next/image";
import Arrwcheck from "../../../../public/images/hubspotimages/arrow-check.png";
import Hbstcntr from "../../../../public/images/hubspotimages/hubdev.png";

function Hubspotcms() {
  return (
    <section id="hubsptcms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h3>
                Why Choose Our HubSpot CMS
                <br />
                <span>Development Services?</span>
              </h3>
              <p>
                With our expertise, customized solutions, and ongoing support,
                we help you
                <br /> create a powerful online presence that drives results.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstexprts">
              <div className="hbstexprtsinr left">
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Extensive HubSpot Expertise</h4>
                  <p>
                    We specialize in HubSpot CMS development, bringing in-depth
                    knowledge and expertise to deliver exceptional solutions.
                  </p>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Enhanced Performance and Speed</h4>
                  <p>
                    Our expertise optimizes your website for fast load times,
                    smooth navigation, and improved performance.
                  </p>
                </div>
                <div className="hbperfrm right lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Mobile-Optimized and Responsive Designs</h4>
                  <p>
                    We ensure your website looks and performs flawlessly on all
                    devices, maximizing user experience.
                  </p>
                </div>
              </div>
              <div className="hbstexprtsinr center">
                <div className="hbbtmgs">
                  <Image src={Hbstcntr} className="img-fluid" />
                </div>
              </div>
              <div className="hbstexprtsinr right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Customized Website Solutions</h4>
                  <p>
                    Our HubSpot CMS development creates fully customized
                    websites tailored to your brand and goals.
                  </p>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Seamless Integration with HubSpot Tools</h4>
                  <p>
                    We integrate your website with HubSpot tools for
                    synchronized data, personalized experiences, and streamlined
                    workflows.
                  </p>
                </div>
                <div className="hbperfrm left lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" />
                  </div>
                  <h4>Customized Website Solutions</h4>
                  <p>
                    Our HubSpot CMS development creates fully customized
                    websites tailored to your brand and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotcms;
