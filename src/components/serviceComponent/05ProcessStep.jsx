import process from "../../../public/images/serviceImages/creative agency.webp";
import Image from "next/image";

const ProcessStep = () => {
  return (
    <>
      <section className="process-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
              <h3>
                <span>Our 4 Steps </span> Process
              </h3>
              <p className="pt-3 pb-5">
                Drive best results by executing our online marketing process
                with proven strategies. Our four steps will enable you to
                optimize your online marketing strategies and help you achieve
                pre-defined marketing goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12 image text-center">
              <Image src={process} alt="process-Image" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="content">
                <ul>
                  <li>
                    <span className="number">1</span>
                    <h5>Understand Client Business</h5>
                    <p>
                      The first and foremost step is understanding client
                      business needs and requirements by evaluating their
                      products and services in-depth.
                    </p>
                  </li>
                  <li>
                    <span className="number">2</span>
                    <h5>Analyze Opportunities</h5>
                    <p>
                      Conduct consumer and market research to understand target
                      consumers' mindsets, preferences, and buying patterns.
                    </p>
                  </li>
                  <li>
                    <span className="number">3</span>
                    <h5>Execute Strategy</h5>
                    <p>
                      The third step is to execute the planned custom strategy
                      and evaluate the outcome.
                    </p>
                  </li>
                  <li>
                    <span className="number">4</span>
                    <h5>Update Progress Report</h5>
                    <p>
                      In this step, we regularly update the progress report and
                      share it with the client.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessStep;
