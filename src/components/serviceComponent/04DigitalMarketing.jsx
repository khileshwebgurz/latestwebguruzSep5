import Image from "next/image";
import optimized from "../../../public/images/serviceImages/seo.png";
import socialmarketing from "../../../public/images/serviceImages/Social-Media-Marketing.webp";
import automation from "../../../public/images/serviceImages/Marketing-Automation.webp";
import paid from "../../../public/images/serviceImages/paid-markeitng.webp";
import emailmarket from "../../../public/images/serviceImages/email-marketing.webp";
import contentmarkt from "../../../public/images/serviceImages/content-marketing.webp";
const DigitalMarketing = () => {
  return (
    <>
      <section className="digital-marketing py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                <span>Digital Marketing</span> Services We Offer
              </h3>
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Search Engine Optimization</h5>
              <p>
                Optimize your ranking in search results for the most competitive
                keywords. Drive traffic and boost conversion rates by 2x.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="optimized" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Social Media Marketing</h5>
              <p>
                Implement comprehensive social media strategies to optimize your
                site's brand visibility and improve customer engagement.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="socialmarketing" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Content Marketing</h5>
              <p>
                We create high-performing content that grows your business by
                reaching out to the target audience and ensuring more
                conversions.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="contentmarkt" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Marketing Automation</h5>
              <p>
                Leverage our marketing automation cost-effective solutions and
                identify potential customers by automating the process of
                translating those leads to sales-readiness.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={automation} alt="automation" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Paid Marketing</h5>
              <p>
                Enlist our paid search marketing services to improve your
                ranking and impression share. Scale your business growth within
                your budget.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={paid} alt="paid" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Email Marketing</h5>
              <p>
                Invest in our email marketing campaigns that will enable you to
                achieve reliable, stream of quality traffic.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={emailmarket} alt="emailmarket" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
