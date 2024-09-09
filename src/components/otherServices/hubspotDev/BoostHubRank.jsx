import Image from "next/image";
import time from '../../../../public/images/hubspotimages/Time.svg'
import usdollar from '../../../../public/images/hubspotimages/UsDollarCircled.svg'
import CustomerInsight from '../../../../public/images/hubspotimages/CustomerInsight.svg'
import devskill from '../../../../public/images/hubspotimages/devskill.svg'

const BoostHubRank = () => {
  return (
    <>
      <section className="boost-ranking hub-ranking py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h3>
                <span>Boost Rankings</span> with On-Page SEO Optimization
              </h3>
              <p className="mt-3 mb-4">
              Grow your business with stunning HubSpot development services and a one-stop solution for all your HubSpot-related needs. We focus on your goal and make sure to provide high-quality services that boost your sales and make you a market leader. With our HubSpot Development agency, you will get custom HubSpot web development services that will benefit you in the long term.
              </p>
              <div className="py-4 hub-icons">
                <ul>
                  <li>
                    <Image src={time} alt="Image 1"  style={{height:"20px", width:"20px"}} />
                    <p>Support and Maintenance</p>
                  </li>
                  <li>
                    <Image src={devskill} alt="Image 1"  style={{height:"20px", width:"20px"}} />
                    <p>20+ Technical Experts</p>
                  </li>
                  <li>
                    <Image src={CustomerInsight} alt="Image 1"  style={{height:"20px", width:"20px"}} />
                    <p>8+ Years of Experience</p>
                  </li>
                  <li>
                    <Image src={usdollar} alt="Image 1"  style={{height:"20px", width:"20px"}} />
                    <p>We’re Affordable</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 content-right form">
              <div className="quote-main">
                <h4>Contact Us Today</h4>
              </div>
              <div className="quote-content ">
                <form className="quote-form">
                  <div className="merge-main">
                    <label>
                      <input type="text" placeholder="First Name" />
                    </label>
                    <label>
                      <input type="text" placeholder="Last name" />
                    </label>
                  </div>
                  <div className="merge-main">
                    <label>
                      <input type="text" placeholder="Email Address" />
                    </label>
                    <label>
                     <input type="number" placeholder="+91" />
                    </label>
                  </div>
                  <label>
                    <textarea placeholder="Brief About The Project"></textarea>
                  </label>
                  <a className="explore-btn" href="#">
                    Get Started
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

export default BoostHubRank;
