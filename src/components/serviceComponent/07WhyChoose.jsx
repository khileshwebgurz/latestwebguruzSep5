import Image from "next/image";
import earnings from "../../../public/images/serviceImages/Earning.png";
import conversion from "../../../public/images/serviceImages/conversion.png";
import competitor from "../../../public/images/serviceImages/competitors.png";
import businessaudit from "../../../public/images/serviceImages/business-audit.png";
import roi from "../../../public/images/serviceImages/roi.png";
import reatltime from "../../../public/images/serviceImages/real-time.png";

const WhyChoose = () => {
  return (
    <section className="whychoose py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h3>
                Why Choose Signity For
                <br /> <span>Digital Marketing Services?</span>
              </h3>
              <p>
                As a renowned digital marketing company, we utilize
                top-of-the-line tools to design an inbound marketing plan for
                our customers. Our customized strategies and tools ensure we
                deliver the best results to meet the client's requirements.
              </p>
            </div>

            <div className="earntraffic">
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={earnings} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>Earning Traffic</h5>
                  <p>
                    Drive 10X traffic to your website with customized and
                    comprehensive digital marketing services.
                  </p>
                </div>
              </div>
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={conversion} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>Better Conversion Rates</h5>
                  <p>
                    Boost your conversion rate by 2X with our rigorous tested
                    conversion rate optimization strategies.
                  </p>
                </div>
              </div>
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={competitor} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>In-Depth Competitor Analysis</h5>
                  <p>
                    We evaluate opportunities and threats with in-depth
                    competitor analysis to create up- to-date metrics and
                    generate actionable insights.
                  </p>
                </div>
              </div>
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={businessaudit} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>Complete Business Audit</h5>
                  <p>
                    We do comprehensive business audits to incorporate your
                    customer experience in all stages of strategy development.
                  </p>
                </div>
              </div>
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={roi} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>ROI Projections</h5>
                  <p>
                    We help you measure the performance of your marketing
                    campaigns which can influence your marketing investment,
                    strategy, and more. You can achieve a 44% average increase
                    in conversions with accurate projection.
                  </p>
                </div>
              </div>
              <div className="earntrafficinr">
                <div className="earntrfimg">
                  <Image src={reatltime} className="img-fluid" alt="" />
                </div>
                <div className="earntrfcnt">
                  <h5>Real-Time Results</h5>
                  <p>
                    As an experienced digital marketing company, we take a
                    360-degree approach to online marketing and deliver
                    real-time results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
