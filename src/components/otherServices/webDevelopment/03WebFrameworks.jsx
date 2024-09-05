import React from "react";
import Image from "next/image";
import webimage from "../../../../public/images/webimages/serviceimg.svg";
import webicon from "../../../../public/images/webimages/webicon.svg";

const WebFrameworks = () => {
  return (
    <div>
      <section className="web-framework py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pt-2 pb-4">
              <h3>
                Scalable Web Application <span>Development Frameworks</span>
              </h3>
              <p>
                From concept ideation to product development and launch in the
                market, we help you in every stage ofthe development lifecycle
                to build high-performing and scalable web applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="image-content">
                <div className="image">
                  <Image src={webimage} alt="webimage" />
                </div>
                <div className="content">
                  <div className="contentimg">
                    <Image src={webicon} alt="webimage" />
                  </div>
                  <p className="color-wt">
                    Custom Web Applications Development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Custom Web Applications Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="image-content">
                <div className="image">
                  <Image src={webimage} alt="webimage" />
                </div>
                <div className="content">
                  <div className="contentimg">
                    <Image src={webicon} alt="webimage" />
                  </div>
                  <p className="color-wt">
                    Custom Web Applications Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebFrameworks;
