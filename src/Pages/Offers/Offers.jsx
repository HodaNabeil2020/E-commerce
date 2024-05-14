




import Header from "../../components/Header/Header"
import LandingOffers from "./LandingOffers"
import TimerOffers from "./TimerOffers"
import LaptopBagsOffers from "./LaptopBagsOffers"
import "./offers.css"
import BackpackOffers from "./BackpackOffers"

import Footer from "../../components/Footer/Footer"


function Offers() {
  return (
    <div className="page-offers overflow-hidden   bg-light" >
            <Header  schangebackground={"#DDC2AB"}/>
        <LandingOffers />
        <TimerOffers/>
        <LaptopBagsOffers/>
        <BackpackOffers/>
        <Footer/>
    </div>
  )
}

export default Offers
