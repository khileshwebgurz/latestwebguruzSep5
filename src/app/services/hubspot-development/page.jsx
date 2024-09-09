import Hubspotbanner from '@/components/otherServices/hubspotDev/01HubspotBanner'
import Broadindustries from '@/components/otherServices/hubspotDev/02Broadindustries'
import Hubspotdevelopment from '@/components/otherServices/hubspotDev/03HubspotDevelopment'
import Hubspotcms from '@/components/otherServices/hubspotDev/04Hubspotcms'
import Hubspotcrm from '@/components/otherServices/hubspotDev/05Hubspotcrm'
import OurTeamhubspot from '@/components/otherServices/hubspotDev/06Ourteam'
import Serviceprovide from '@/components/otherServices/hubspotDev/07Serviceprovide'
import './style.css'
import '../../contact-us/contact.css'
import '../digital-marketing/services.css'
import ContactLogo from '@/components/contactComponents/07ContactLogo'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import AddsPartner from '@/components/serviceComponent/11AddsPartner'
import Featuredblog from '@/components/homeComponents/09Featuredblog'
import BoostHubRank from '@/components/otherServices/hubspotDev/BoostHubRank'
import HubServiceDisplay from '@/components/otherServices/hubspotDev/HubServiceDisplay'
import WhyHubspot from '@/components/otherServices/hubspotDev/WhyHubspot'
const page = () => {
  return (
    <>
      <Hubspotbanner/>
      <HubServiceDisplay/>
      <BoostHubRank/>
      <Serviceprovide/>
      <Hubspotdevelopment/>
      <Broadindustries/>
      <Hubspotcrm/>
      <WhyHubspot/>
      <Hubspotcms/>
      <ContactLogo/>
      <OurTeamhubspot/>
      <ServiceFaq/>
      <AddsPartner/>
      <Featuredblog/>
    </>
  )
}

export default page
