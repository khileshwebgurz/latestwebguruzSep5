import HomeClient from "@/components/homeComponents/clientcomp/HomeClient";

const HomeBanner = () => {
  return (
    <section className="home-banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 video-banner">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              width={"100%"}
              playsInline
            >
              <source src="/video/baner-video.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col col-sm-8 col-xs-12 banner-content">
            <h1>
              A{" "}
              <span className="animate-charcter">
                Website & Mobile App Development Company
              </span>{" "}
              with You in Mind
            </h1>
            <p>Innovative Digital Solutions to Fuel your Growth</p>
            {/* Client component to handle form */}
            <HomeClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
