import Image from "next/image";
import serviceright from "../../../../public/images/webimages/hbsptban.webp";

const WebDevBanner = () => {
  return (
    <>
      <section className="service-banner web-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h2 className="mb-3">
              Custom Web Application<span> Development Services</span>
              </h2>
                <p className="fw-bold">Unlock Quality-Assured Custom Coding with Webguruz Solutions</p>
              <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar, eros ligula condimentum magna, a malesuada ex dolor sit amet magna.
              </p>
              <a className="explore-btn" href="#">
                Get Your Custom Web App
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

export default WebDevBanner;
