import DevBusiness from '@/components/otherServices/webDevelopment/01DevBusiness'
import WebCompany from '@/components/otherServices/webDevelopment/02WebCompany'
import WebFrameworks from '@/components/otherServices/webDevelopment/03WebFrameworks'
import WebProcess from '@/components/otherServices/webDevelopment/04WebProcess'
import WebScalable from '@/components/otherServices/webDevelopment/05WebScalable'
import Webpillar from '@/components/otherServices/webDevelopment/06Webpillar'
import OurSuccessStories from '@/components/otherServices/webDevelopment/08OurSuccessStories'
import Webpartnering from '@/components/otherServices/webDevelopment/09Webpartnering'
import Service from '@/components/serviceComponent/01ServiceBanner'
import './style.css'
import '@/app/services/digital-marketing/services.css'

const page = () => {
  return (
    <>
      <Service/>
      <DevBusiness/>
      <WebCompany/>
      <WebFrameworks/>
      <WebProcess/>
      <WebScalable/>
      <Webpillar/>
      <OurSuccessStories/>
      <Webpartnering/>
    </>
  )
}

export default page
