import Image from "next/image";
import serviceright from "../../../public/images/digital-marketing.svg";

const Service = () => {
  return (
    <>
      <section className="service-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h6 className="dot">Digital Marketing Services</h6>
              <h2>
                Build An Impactful<span> Online Presence</span>
              </h2>
              <p>
                Improve your site visits with powerful digital marketing
                strategies.
              </p>
              <a className="explore-btn" href="#">
                Get Started
              </a>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="service-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
