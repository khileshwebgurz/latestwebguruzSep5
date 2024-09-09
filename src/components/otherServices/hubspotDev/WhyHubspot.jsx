import Image from "next/image";
import optimized from "../../../../public/images/serviceImages/seo.png";
import socialmarketing from "../../../../public/images/serviceImages/Social-Media-Marketing.webp";
import automation from "../../../../public/images/serviceImages/Marketing-Automation.webp";
import paid from "../../../../public/images/serviceImages/paid-markeitng.webp";
import emailmarket from "../../../../public/images/serviceImages/email-marketing.webp";
import contentmarkt from "../../../../public/images/serviceImages/content-marketing.webp";
const WhyHubspot = () => {
  return (
    <>
      <section className="digital-marketing py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
              Why Choose Webguruz for <span> Hubspot Development ?</span>
              </h3><p>As a renowned digital marketing company, we utilize top-of-the-line tools to design an inbound marketing plan for our customers.</p>
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Create a Unique Brand Presence</h5>
              <p>
              Give your brand an impressive online presence with our HubSpot web development solutions. Create unique experiences that reverberate your brand value and deliver results.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="optimized" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Maximize Benefits From HubSpot Integrations</h5>
              <p>
              We help you create a feature-rich website packed with functionalities built by combining HubSpot's third-party integrations.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="socialmarketing" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Efficient & Effective</h5>
              <p>
              Enjoy the freedom of building distinctive solutions with zero developer dependency. Drag & drop your custom-built templates, themes, and modules to create digital assets on the go.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="contentmarkt" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Maximize Benefits From HubSpot Integrations</h5>
              <p>
              We help you create a feature-rich website packed with functionalities built by combining HubSpot's third-party integrations.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={automation} alt="automation" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default WhyHubspot;
