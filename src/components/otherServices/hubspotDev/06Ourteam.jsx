
import React from "react";
import Image from "next/image";
import Hbteam from "../../../../public/images/hubspotimages/m-team.png";

function OurTeamhubspot() {
  return (
    <section id="ourTeamhbspt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h3>
                Our Team Is <span>Your Team</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image src={Hbteam} className="img-fluid" />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h4>Tech savvy project managers</h4>
                  <p>
                    Mavlers’ project managers are fluent with diverse
                    technologies which enables them to configure the tech stack
                    most suitable for a particular project.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h4>Variety of engagement models</h4>
                  <p>
                    Choose from engagement models carefully designed to
                    accommodate a wide range of requirements and businesses of
                    all sizes.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h4>CRM expertise</h4>
                  <p>
                    Being a HubSpot solutions partner and having served global
                    clients spanning diverse industries, our developers are
                    well-equipped to tackle any problem statement.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h4>Growth driven approach</h4>
                  <p>
                    Our HubSpot developers align their processes with yours to
                    facilitate a smooth collaboration and work singularly
                    towards securing the growth of your brand.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h4>Flexible pricing</h4>
                  <p>
                    Find pricing models that aim to give you the most bang for
                    your buck, irrespective of your budget! You can onboard our
                    resources both long-term as well as on a contractual basis.
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

export default OurTeamhubspot;
