import HomeNumbers from "@/components/homeComponents/04HomeNumbers";
import HomeBanner from "@/components/homeComponents/01HomeBanner";
import CounterHome from "@/components/homeComponents/02CounterHome";
import HomeTab from "@/components/homeComponents/03HomeTabber";
import TechnicalHome from "@/components/homeComponents/05TechnicalHome";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import FeaturedProject from "@/components/homeComponents/08FeaturedProject";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import HomeTestimonial from "@/components/homeComponents/07HomeTestimonial";
import Webguruzwe from "@/components/homeComponents/10WgzLogoZoom";
import Homeaward from "@/components/homeComponents/Homeaward";

export default function Home() {
  return (
    <>
    <HomeBanner/>
    <CounterHome/>
    <HomeTab/>
    <HomeNumbers/>
    <TechnicalHome/>
    <CustomizeHome/>
    <FeaturedProject/>
    <HomeTestimonial/>
    <Featuredblog/>
    <Homeaward/>
    <Webguruzwe/>
    </>
  );
}
