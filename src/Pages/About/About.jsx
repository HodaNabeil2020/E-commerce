import Header from "../../components/Header/Header";
import Story from "../../components/Story/Story";
import HeroAbout from "./HeroAbout";
import ReviewSlider from "./ReviewSlider";
import SalesRatio from "./SalesRatio";

import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className=" page-about bg-light ">
      <Header schangebackground={"#DDC2AB"}></Header>
      <HeroAbout />
      <Story />
      <SalesRatio />
      <ReviewSlider />
      <Footer />
    </div>
  );
}

export default About;
