import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeftCheckout from "./LeftCheckout";
import RigthCheckOut from "./RigthCheckOut";


import "./checkout.css"
function Checkout() {
  return (
    <div className="bg-light page-checkout ">
    <Header schangebackground={"#DDC2AB"}></Header>

      <div className="  overflow-hidden container  pt-[100px] grid  gap-x-[40px]  md:grid-cols-2">
        <LeftCheckout />
        <RigthCheckOut/>
      </div>

      <Footer ></Footer>
    </div>
  );
}

export default Checkout;
