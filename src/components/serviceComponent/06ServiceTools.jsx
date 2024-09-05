import semrush from "../../../public/images/serviceImages/semrush.png";
import hubspot from "../../../public/images/serviceImages/hubspot.png";
import alexa from "../../../public/images/serviceImages/alexa.png";
import graph from "../../../public/images/serviceImages/graph.png";
import robot from "../../../public/images/serviceImages/robot.png";
import fire from "../../../public/images/serviceImages/fire.png";
import block from "../../../public/images/serviceImages/block.png";
import Image from "next/image";

const ServiceTools = () => {
  return (
    <>
      <section className="tools-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
              <h3>
                <span>Digital Marketing</span> Tools We Use
              </h3>
              <p className="pt-2 pb-3">
                As a renowned digital marketing company, we utilize
                top-of-the-line tools to design an inbound marketing plan for
                our customers. Our customized strategies and tools ensure we
                deliver the best results to meet the client's requirements.
              </p>
              <ul className="toolsicon-list d-flex align-items-center">
                <li>
                  <Image src={semrush} alt="semrush" />
                  <p className="mb-0 pt-2">Semrush</p>
                </li>
                <li>
                  <Image src={graph} alt="graph" />
                  <p className="mb-0 pt-2">SEO PowerSuite</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">Justuno</p>
                </li>
                <li>
                  <Image src={robot} alt="robot" />
                  <p className="mb-0 pt-2">SEO Site Checkup</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">Moz Pro</p>
                </li>
                <li>
                  <Image src={block} alt="block" />
                  <p className="mb-0 pt-2">Surfer</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">Rank Math</p>
                </li>
                <li>
                  <Image src={graph} alt="graph" />
                  <p className="mb-0 pt-2">Marketgoo</p>
                </li>
                <li>
                  <Image src={robot} alt="robot" />
                  <p className="mb-0 pt-2">Keyword Tool</p>
                </li>
                <li>
                  <Image src={alexa} alt="alexa" />
                  <p className="mb-0 pt-2">Alexa</p>
                </li>
                <li>
                  <Image src={hubspot} alt="hubspot" />
                  <p className="mb-0 pt-2">Hubspot</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">SEOptimer</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">Clicdata</p>
                </li>
                <li>
                  <Image src={fire} alt="" />
                  <p className="mb-0 pt-2">Channable</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTools;
