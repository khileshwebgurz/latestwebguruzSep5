import SlotCounter from "react-slot-counter";

const ServicesDisplay = () => {
  return (
    <section className="counter-main service-counter py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
            <h3>
              Our <span>Expertise</span>
            </h3>
            <p>Ready to grow with Digital Marketing Agency you can trust?</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "8", "0", "0", "+"]} />
              <p>Projects Launched</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "4", "+"]} />
              <p>Years of Experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["5", "7", "5", "+"]} />
              <p>Dedicated Developers</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["9", "2", "%"]} />
              <p>Client Retention</p>
            </label>
          </div>
        </div>
        <div className="row">
          <button className="explore-btn">Get Your Proposal Now!</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesDisplay;
