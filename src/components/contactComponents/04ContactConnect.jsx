import React from "react";
import Image from "next/image";
import bloging from "../../../public/images/contactimages/blogging.svg";
import success from "../../../public/images/contactimages/success.svg";
const ContactConnect = () => {
  return (
    <div>
      <section className="connect-level py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                Let’s Connect & <span>Level Up Together</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-xs-12 vacent-div"></div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={bloging} alt="bloging" />
                <h5>Blog</h5>
                <p>
                  Discover insights, trends, and expert advice in our engaging
                  blog. Stay informed, inspired, and ahead with our articles
                  tailored to empower your journey.
                </p>
                <a className="explore-btn" href="/">View More</a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={success} alt="success" />
                <h5>Success Stories</h5>
                <p>
                  Let us become an enabler to your business growth. Partner with
                  us to build your own success story.
                </p>
                <a className="explore-btn" href="/">View More</a>
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 vacent-div"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactConnect;
