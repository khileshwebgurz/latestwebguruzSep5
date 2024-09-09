
import React from "react";

function Hubspotcrm() {
  const challenges = [
    {
      title: "Creating a scalable architecture",
      description:
        "You need support with the creation and distribution of website content at scale and keep up with your dynamic content as it evolves.",
    },
    {
      title: "Code editability",
      description:
        "You want your HubSpot pages to have an editable code so you can make any changes whenever needed in the future.",
    },
    {
      title: "Setting up correct automation",
      description:
        "While it’s essential to set up flawless automation for your HubSpot email workflows, you’re not really on top of the game.",
    },
    {
      title: "Page speed optimization",
      description:
        "Your HubSpot pages are slower to load and you are worried you are losing visitors because of the slow loading time.",
    },
  ];

  return (
    <section id="hubsptcrmsct">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="heading-main">
              <h3>
                Are you facing these challenges with your
                <br />
                <span>HubSpot CRM?</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="sclbarchtct">
              {challenges.map((challenge, index) => (
                <div className="sclbarchtctinr" key={index}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotcrm;
