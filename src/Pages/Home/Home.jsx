import LandingHome from "./LandingHome"
import NewProducts from "./NewProducts"
import Newarrivals from "./Newarrivals"
import OfferBags from "./OfferBags"
import OurCollections from "./OurCollections"
import Why from "./Why"



import Story from '../../components/Story/Story';

import Footer from '../../components/Footer/Footer';




function Home() {
  return (
    <div>
      
      <LandingHome/>
        <OurCollections/>
        <Newarrivals />
        <NewProducts title="New Arrivals"/>
        <OfferBags/>
        <Why/>
        <Story/>
        <Footer />
    </div>
  )
}

export default Home
