import React from "react";
import Image from "next/image";
import StationIcon1 from "../../../../public/images/webimages/station-icon-1.svg";
import StationIcon2 from "../../../../public/images/webimages/station-icon-2.svg";
import StationIcon3 from "../../../../public/images/webimages/station-icon-3.svg";
import StationIcon4 from "../../../../public/images/webimages/station-icon-4.svg";
import StationIcon5 from "../../../../public/images/webimages/station-icon-5.svg";
import StationIcon6 from "../../../../public/images/webimages/station-icon-6.svg";
const WebStation = () => {
  return (
    <div className="web-scalable py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h3>
              Webguruz is Your One-Stop Station for
              <br />
              <span>Web Development Service</span>
            </h3>
            <p>
              From concept ideation to product development and launch in the
              market, we help you in every stage of the development lifecycle to
              build high-performing and scalable web applications.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap">
              <div className="inner-flex-statins-list">
                <Image src={StationIcon1} alt="stations1" />
                <h4 className="station-develop-title">
                  {" "}
                  Cost-Effective Process{" "}
                </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  At Apptunix, our web app development services are designed for
                  cost-effectiveness, ensuring your project is executed
                  efficiently without compromising quality.{" "}
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon2} alt="stations1" />
                <h4 className="station-develop-title"> All Under One Roof </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  We are a one-stop web application development company,
                  offering a comprehensive range of services, from concept to
                  deployment, all conveniently available under one roof.{" "}
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon3} alt="stations1" />
                <h4 className="station-develop-title"> Creative Team </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  Creative web app developers at Apptunix are committed to
                  turning your vision into innovative web solutions, infusing
                  creativity into every aspect of your project.{" "}
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon4} alt="stations1" />
                <h4 className="station-develop-title"> 24/7 Help Desk </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  With a commitment to assistance, Apptunix ensures that you
                  have support whenever you need it, guaranteeing a seamless
                  development experience.{" "}
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon5} alt="stations1" />
                <h4 className="station-develop-title">
                  {" "}
                  New Technology Integration{" "}
                </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  Being one of the top web application development companies
                  Apptunix stays at the forefront of technology, integrating new
                  advancements into your web apps, keeping you ahead of the
                  curve.{" "}
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon6} alt="stations1" />
                <h4 className="station-develop-title">
                  {" "}
                  Post-Deployment Services{" "}
                </h4>
                <p className="station-develop-peragraph">
                  {" "}
                  Our web development services go beyond launch by ensuring the
                  ongoing success of your web application with regular updates,
                  maintenance, and support.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStation;
