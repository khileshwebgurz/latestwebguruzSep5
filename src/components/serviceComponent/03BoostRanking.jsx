import Image from "next/image";
import dollar from "../../../public/images/serviceImages/dollar-fig.png";

const BoostRanking = () => {
  return (
    <>
      <section className="boost-ranking py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h3>
                <span>Boost Rankings</span> with On-Page SEO Optimization
              </h3>
              <p className="mt-3 mb-4">
                Enhance your <b>business’s SERP rankings</b> with our expert
                on-page SEO optimization
              </p>
              <video
                autoPlay
                muted
                loop
                preload="auto"
                width={"100%"}
                playsInline
              >
                <source src="/video/baner-video.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div className="col-sm-6 col-xs-12 content-right form">
              <div className="quote-main">
                <h4>Get a Quote</h4>
              </div>
              <div className="quote-content ">
                <h5>
                  <Image src={dollar} alt="dollar-sign" />
                  Starting from<span>$1000</span>
                </h5>
                <p>
                  <b>Start your project</b> with a custom quote designed to fit
                  your needs!
                </p>
                <ul className="mb-4">
                  <li>Quick and easy quote process</li>
                  <li>No-obligation, transparent pricing</li>
                  <li>Customized to your project requirements</li>
                </ul>
                <form className="quote-form">
                  <div className="merge-main">
                    <label>
                      First Name*
                      <input type="text" placeholder="First Name" />
                    </label>
                    <label>
                      Last name*
                      <input type="text" placeholder="Last name" />
                    </label>
                  </div>
                  <div className="merge-main">
                    <label>
                      Email*
                      <input type="text" placeholder="Email Address" />
                    </label>
                    <label>
                      Phone Number*
                      <input type="number" placeholder="+91" />
                    </label>
                  </div>
                  <label>
                    Brief about the project*
                    <textarea></textarea>
                  </label>
                  <a className="explore-btn" href="#">
                    Submit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostRanking;
