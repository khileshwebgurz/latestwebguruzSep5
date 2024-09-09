import React from "react";

const services = [
  {
    id: "01",
    title: "HubSpot Website Development",
    description:
      "Our website development HubSpot services will provide you to get a visually appealing website. Utilize our HubSpot developers expertise to build your website for growth-driven results.",
  },
  {
    id: "02",
    title: "HubSpot API & Integrations",
    description:
      "Our experts provide help in HubSpot API & integrations to serve the specific needs in line with your business. We drill down to your need to help you to identify & set up the right integrations efficiently!",
  },
  {
    id: "03",
    title: "Landing Page & Email Template",
    description:
      "Our HubSpot Certified Experts will help in the design and development of Landing Pages & Email Templates aligned with the requirement of delivering more value to your marketing campaigns efficiently.",
  },
  {
    id: "04",
    title: "HubSpot Migration",
    description:
      "Our experts provide services to migrate assets & data from the existing platform to HubSpot. Let our experts help you to enrich your business, making an easy shift to HubSpot.",
  },
  {
    id: "05",
    title: "HubDB and Knowledge Base Builder",
    description:
      "Maximize acceleration with rich resources & growth-driven results for your business with HubDB and HubSpot Knowledge Base Builder, leading to delivering value.",
  },
  {
    id: "06",
    title: "HubSpot Blog Development",
    description:
      "Our website development HubSpot services will provide you to get a visually appealing website. Utilize our HubSpot developers expertise to build your website for growth-driven results.",
  },
];

function Serviceprovide() {
  return (
    <section id="serviceprovide">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main pb-5">
              <h3>
                <span>Service</span> We Provide
              </h3>
              <p>
                At WebOccult, we have experienced HubSpot website developers who
                can utilize the
                <br />
                cutting-edge tools to build a customized business solution with
                HubSpot.
              </p>
            </div>

            <div className="servdvlpmnt">
              {services.map((service) => (
                <div key={service.id} className="serdvinnr">
                  <div className="servcntr">{service.id}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serviceprovide;
