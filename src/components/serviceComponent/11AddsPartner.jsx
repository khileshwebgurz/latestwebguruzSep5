import Link from "next/link";
import Conversion from "../../../public/images/serviceImages/conversion.jpg";

const AddsPartner = () => {
  return (
    <section
      className="addspartnr py-8"
      style={{
        backgroundImage: `url(${Conversion.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 50%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h3 className="color-wt">
              Maximize Your Reach and Conversions with Trusted PPC Ads Partner
            </h3>
            <p className="color-wt">
              Run paid advertising campaigns that put your business on the
              growth curve. Let our team make every dollar
              <br /> spent on the campaign accounted for.
            </p>
            <Link className="explore-btn" href="/">
              Call To Action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddsPartner;
