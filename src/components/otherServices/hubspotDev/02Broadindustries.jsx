
import React from "react";
import Image from "next/image";
import Icnbroad1 from "../../../../public/images/hubspotimages/icn1.png";
import Icnbroad2 from "../../../../public/images/hubspotimages/icn2.png";
import Icnbroad3 from "../../../../public/images/hubspotimages/icn3.png";
import Icnbroad4 from "../../../../public/images/hubspotimages/icn4.png";

function Broadindustries() {
  const industries = [
    {
      img: Icnbroad1,
      title: "Fintech.",
      description:
        "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
    },
    {
      img: Icnbroad2,
      title: "Retail & Ecommerce.",
      description:
        "By developing a mobile app, businesses can provide their customers with a convenient, user-friendly way to shop for products and services.",
    },
    {
      img: Icnbroad3,
      title: "Healthcare.",
      description:
        "With mobile apps, healthcare providers can give their patients the tools they need to live healthier lives, like tracking their health goals or medical information.",
    },
    {
      img: Icnbroad4,
      title: "Education.",
      description:
        "Mobile apps are a powerful tool for a variety of purposes, from keeping track of assignments and grades to providing a platform for distance learning.",
    },
  ];

  return (
    <section id="brdindstries">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="heading-main">
              <h3>
                Experienced across a
                <br />
                <span>broad range of industries</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="brdighdtxt">
              <p>
                At WebOccult, we have experienced HubSpot website developers who
                can utilize the cutting-edge tools to build a customized
                business solutions with HubSpot.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="indrngserv">
              {industries.map((industry, index) => (
                <div className="indrngservinnr" key={index}>
                  <div className="indrngservimg">
                    <Image
                      src={industry.img}
                      className="img-fluid"
                      alt={industry.title}
                    />
                  </div>
                  <div className="indrngservcnnct">
                    <h5>{industry.title}</h5>
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Broadindustries;
