"use client";
import Image from "next/image";
import Slider from "react-slick";
import Portfolio1 from "../../../public/images/serviceImages/portf1.png";
import Portfolio2 from "../../../public/images/serviceImages/portf2.png";
import Portfolio3 from "../../../public/images/serviceImages/portf3.png";
import Arrowleft from "../../../public/images/serviceImages/arrow-left.png";
import ArrowRight from "../../../public/images/serviceImages/arrow-right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolioItems = [
  {
    src: Portfolio1,
    title: "Global IP Partners",
    link: "#",
  },
  {
    src: Portfolio2,
    title: "Robert James Realty",
    link: "#",
  },
  {
    src: Portfolio3,
    title: "Milwaukee House Buyers",
    link: "#",
  },
  {
    src: Portfolio2,
    title: "Robert James Realty",
    link: "#",
  },
];

// Custom arrow components
const SamplePrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <Image src={Arrowleft} alt="Previous" />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <Image src={ArrowRight} alt="Next" />
  </div>
);

const CreativePortfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="creativeportfolio py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h3>
                Our Creative <span>Portfolio</span>
              </h3>
              <p>
                Signity, a leading digital marketing services provider, delivers
                online marketing solutions to various businesses across
                industries to widen their business reach and profitability.
              </p>
            </div>

            <div className="creativeprtfl">
              <Slider {...settings}>
                {portfolioItems.map((item, index) => (
                  <div className="creativeprtflinr" key={index}>
                    <div className="crportflio">
                      <a href={item.link}>
                        <Image src={item.src} className="img-fluid" />
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;
