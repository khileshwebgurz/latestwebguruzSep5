import React from "react";
import Image from "next/image";
import web1 from "../../../../public/images/webimages/web1.svg";
import web2 from "../../../../public/images/webimages/web2.svg";
import web3 from "../../../../public/images/webimages/web3.svg";
import web4 from "../../../../public/images/webimages/web4.svg";
import web5 from "../../../../public/images/webimages/web5.svg";
import web6 from "../../../../public/images/webimages/web6.svg";
import web7 from "../../../../public/images/webimages/web7.svg";

const WebProcess = () => {
  return (
    <>
      <section className="webdev-process">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
              <h3>
                Our Custom Web Application <span>Development Process</span>
              </h3>
              <p className="mt-3 mb-4">
                From concept ideation to product development and launch in the
                market, we help you in every stage of the development lifecycle
                to build high-performing and scalable web applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <ul>
                <li>
                  <div className="icon-content">
                    <span className="number">1</span>
                    <Image src={web1} alt="web1" />
                    <p>Discovery & Planning</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">2</span>
                    <Image src={web2} alt="web2" />
                    <p>Sprint 0: Project Initiation</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">3</span>
                    <Image src={web3} alt="web3" />
                    <p>UI/UX Design, Development, QA</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">4</span>
                    <Image src={web4} alt="web4" />
                    <p>User Acceptance Testing</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">5</span>
                    <Image src={web5} alt="web5" />
                    <p>MVP/Soft Launch</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">6</span>
                    <Image src={web6} alt="web6" />
                    <p>Launch</p>
                  </div>
                </li>
                <li>
                  <div className="icon-content">
                    <span className="number">7</span>
                    <Image src={web7} alt="web7" />
                    <p>Support</p>
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

export default WebProcess;
