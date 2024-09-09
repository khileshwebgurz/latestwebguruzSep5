import React from "react";
import Image from "next/image";
import pillarbg from "../../../../public/images/webimages/pillarbg.svg";

const Webpillar = () => {
  return (
    <>
      <section className="pillar-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h3 className="mb-4">
                Key Pillars of Our <span>Web Development</span>
              </h3>
              <Image src={pillarbg} alt="pillarbg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webpillar;
