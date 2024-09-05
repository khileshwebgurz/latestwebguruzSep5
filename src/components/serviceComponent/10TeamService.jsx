import Image from "next/image";
import servTeam from "../../../public/images/serviceImages/Our-Team-is-Your-Team.webp";

const TeamService = () => {
  return (
    <section className="teamservice py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h3>
              Our Team is <span>Your Team</span>
            </h3>
            <p>
              More the years, the better the solutions! We have been partnering
              <br />
              with brands and offering our expertise for more than a decade.
            </p>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image src={servTeam} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="teamquality">
              <div className="teamqualityinr">
                <h4>Quality</h4>
                <p>
                  We aim to deliver high-quality products. Hence, we take care
                  of everything at the granular level.
                </p>
              </div>
              <div className="teamqualityinr">
                <h4>Reliability</h4>
                <p>
                  Our teams are made up of highly-skilled and certified
                  engineers with industry-specific domain knowledge.
                </p>
              </div>
              <div className="teamqualityinr">
                <h4>Flexibility</h4>
                <p>
                  Our team keeps the requirements of our clients on priority &
                  the development process transparent.
                </p>
              </div>
              <div className="teamqualityinr">
                <h4>Competence</h4>
                <p>
                  Our team consists of expert developers who have knowledge of
                  domain expertise for all business industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamService;
