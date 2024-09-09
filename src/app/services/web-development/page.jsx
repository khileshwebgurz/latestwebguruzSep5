import DevBusiness from '@/components/otherServices/webDevelopment/01DevBusiness'
import WebCompany from '@/components/otherServices/webDevelopment/02WebCompany'
import WebFrameworks from '@/components/otherServices/webDevelopment/03WebFrameworks'
import WebProcess from '@/components/otherServices/webDevelopment/04WebProcess'
import WebScalable from '@/components/otherServices/webDevelopment/05WebScalable'
import Webpillar from '@/components/otherServices/webDevelopment/06Webpillar'
import OurSuccessStories from '@/components/otherServices/webDevelopment/08OurSuccessStories'
import Webpartnering from '@/components/otherServices/webDevelopment/09Webpartnering'
import './style.css'
import '@/app/services/digital-marketing/services.css'
import CustomizeHome from '@/components/homeComponents/06CustomizeHome'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import Featuredblog from '@/components/homeComponents/09Featuredblog'
import WebStation from '@/components/otherServices/webDevelopment/07WebStation'
import WebDevBanner from '@/components/otherServices/webDevelopment/00WebDevBanner'

const page = () => {
  return (
    <>
      <WebDevBanner/>
      <DevBusiness/>
      <WebCompany/>
      <WebFrameworks/>
      <WebProcess/>
      <WebScalable/>
      <Webpillar/>
      <WebStation/>
      <CustomizeHome/>
      <OurSuccessStories/>
      <ServiceFaq/>
      <Webpartnering/>
      <Featuredblog/>
    </>
  )
}

export default page
