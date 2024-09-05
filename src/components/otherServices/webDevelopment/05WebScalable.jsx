import React from "react";
import Image from "next/image";
import frontendimg from "../../../../public/images/webimages/frontendimg.svg";
import backendimg from "../../../../public/images/webimages/backendimg.svg";
import frontend1 from "../../../../public/images/webimages/frontend1.svg";
import frontend2 from "../../../../public/images/webimages/frontend2.svg";
import frontend3 from "../../../../public/images/webimages/frontend3.svg";
import frontend4 from "../../../../public/images/webimages/frontend4.svg";
import frontend5 from "../../../../public/images/webimages/frontend5.svg";
import frontend6 from "../../../../public/images/webimages/frontend6.svg";
import frontend7 from "../../../../public/images/webimages/frontend7.svg";
import frontend8 from "../../../../public/images/webimages/frontend8.svg";
import frontend9 from "../../../../public/images/webimages/frontend9.svg";

const WebScalable = () => {
  return (
    <div>
      <section className="web-scalable py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
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
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 image">
              <p>Frontend Development Framework</p>
              <Image src={frontendimg} alt="dev-framework" />
            </div>
            <div className="col-sm-6 col-xs-12 logoicon-img">
              <ul>
                <li>
                  <div className="image">
                    <Image src={frontend1} alt="frontend1" />
                  </div>
                  <p>HTML</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend2} alt="frontend2" />
                  </div>
                  <p>React Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend3} alt="frontend3" />
                  </div>
                  <p>Angular Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend4} alt="frontend4" />
                  </div>
                  <p>Vue Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend5} alt="frontend5" />
                  </div>
                  <p>Backbone Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend6} alt="frontend6" />
                  </div>
                  <p>Node Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend7} alt="frontend7" />
                  </div>
                  <p>Bootstrap</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend8} alt="frontend8" />
                  </div>
                  <p>CSS</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend9} alt="frontend9" />
                  </div>
                  <p>html</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center reverse">
            <div className="col-sm-6 col-xs-12 image">
              <p className="text-end">Backend Development Framework</p>
              <Image src={frontendimg} alt="dev-framework" />
            </div>
            <div className="col-sm-6 col-xs-12 logoicon-img">
              <ul>
                <li>
                  <div className="image">
                    <Image src={frontend1} alt="frontend1" />
                  </div>
                  <p>HTML</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend2} alt="frontend2" />
                  </div>
                  <p>React Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend3} alt="frontend3" />
                  </div>
                  <p>Angular Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend4} alt="frontend4" />
                  </div>
                  <p>Vue Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend5} alt="frontend5" />
                  </div>
                  <p>Backbone Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend6} alt="frontend6" />
                  </div>
                  <p>Node Js</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend7} alt="frontend7" />
                  </div>
                  <p>Bootstrap</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend8} alt="frontend8" />
                  </div>
                  <p>CSS</p>
                </li>
                <li>
                  <div className="image">
                    <Image src={frontend9} alt="frontend9" />
                  </div>
                  <p>html</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebScalable;
