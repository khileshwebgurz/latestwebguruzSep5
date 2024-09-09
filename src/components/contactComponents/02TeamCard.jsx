import React from "react";
import Image from "next/image";
import stepone from "../../../public/images/contactimages/setp1.svg";
import steptwo from "../../../public/images/contactimages/step2.svg";
import stepthree from "../../../public/images/contactimages/step3.svg";

const TeamCard = () => {
  return (
    <>
      <section className="team-card py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12">
              <div className="team-sub-card">
                <h4>At Your Team in India</h4>
                <p>
                  We strive to make it as effortless as possible for our clients
                  to get in touch with us and have their problems solved.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepone} alt="step1" />
                </div>
                <div className="content">
                  <span className="tag">Step 1</span>
                  <h5>Put Forward Your Requirement</h5>
                  <p>
                    Fill out the form to send us your inquiry, and our experts
                    will reach out within 24 hours to discuss your requirements
                    in detail.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={steptwo} alt="step1" />
                </div>
                <div className="content">
                  <span className="tag">Step 1</span>
                  <h5>Put Forward Your Requirement</h5>
                  <p>
                    Fill out the form to send us your inquiry, and our experts
                    will reach out within 24 hours to discuss your requirements
                    in detail.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepthree} alt="step1" />
                </div>
                <div className="content">
                  <span className="tag">Step 1</span>
                  <h5>Put Forward Your Requirement</h5>
                  <p>
                    Fill out the form to send us your inquiry, and our experts
                    will reach out within 24 hours to discuss your requirements
                    in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;
