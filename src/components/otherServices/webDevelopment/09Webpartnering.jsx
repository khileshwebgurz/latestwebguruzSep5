import React from "react";
import Image from "next/image";
import experience from "../../../../public/images/webimages/experience.svg";
import certified from "../../../../public/images/webimages/certified.svg";
import successful from "../../../../public/images/webimages/successful.svg";
import presence from "../../../../public/images/webimages/presence.svg";
import clients from "../../../../public/images/webimages/clients.svg";

const Webpartnering = () => {
  return (
    <>
      <section className="partnering-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 partnering-left">
              <h4 className="color-wt">
                Advantage of partnering with webguruz
              </h4>
              <p className="color-wt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar.
              </p>
              <ul>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Truly Your Own Teams</h6>
                  <p className="color-wt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida
                    pulvinar.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-xs-12 partnering-right heading-main">
              <h3>
                Why Choose Webguruz for offshore
                <span>Software Development</span>
              </h3>
              <ul className="mt-5">
                <li>
                  <div className="image-icon">
                    <Image src={experience} alt="experience" />
                  </div>
                  <div className="content-icon">
                    <h6>14+</h6>
                    <p>Years of Experience</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={certified} alt="certified" />
                  </div>
                  <div className="content-icon">
                    <h6>200+</h6>
                    <p>Certified Professionals</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={successful} alt="successful" />
                  </div>
                  <div className="content-icon">
                    <h6>1000+</h6>
                    <p>Successful Projects</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={clients} alt="clients" />
                  </div>
                  <div className="content-icon">
                    <h6>500+</h6>
                    <p>Clients</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={presence} alt="presence" />
                  </div>
                  <div className="content-icon">
                    <h6>Global Presence</h6>
                    <p>Offices in USA, New Zealand & India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webpartnering;
