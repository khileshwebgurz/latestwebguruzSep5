import Link from "next/link";
import React from "react";
import ExploreIcon from "../../../public/images/marketing-left.png";
import ExploreArrow from "../../../public/images/explore-next-icons.png";

import Leftseo from "../../../public/images/left-seo.png";
import Leftppc from "../../../public/images/left-ppc.png";
import Leftsocialmedia from "../../../public/images/left-social-media.png";
import Leftwebdesign from "../../../public/images/left-web-design.png";
import Leftinternet from "../../../public/images/left-internet.png";

import Image from "next/image";
const ExploreList = () => {
  return (
    <div className="row mt-4">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={ExploreIcon} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              Marketing <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftseo} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              Seo <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftppc} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              PPC <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftsocialmedia} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              Social Media <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftwebdesign} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              Web Design <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftinternet} />
          <div className="content_explore_wrap">
            <Link href="#">
              {" "}
              Internet <Image src={ExploreArrow} />
            </Link>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
              aliquam tristique.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreList;
