import SlotCounter from "react-slot-counter";

const HubServiceDisplay = () => {
  return (
    <section className="counter-main service-counter hubspot-counting py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
            <h3>
              Fast Track Your Business Growth <span>with our Hubspot Expertise</span>
            </h3>
            <p>From workflows to analytics to reporting, grow your business with our HubSpot services. We have:</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["8", "0", "+"]} />
              <p>Hubspot Customers</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["4", "0", "+"]} />
              <p>Certified HUbspot Experts</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["3", "0", "%"]} />
              <p>Increase in HubSpot Campaign Efficiency</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubServiceDisplay;
