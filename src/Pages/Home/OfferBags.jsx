import { Link } from "react-router-dom";
import "./style/offerBags.css";

function OfferBags() {
  return (
    <div className=" bg-main-color">
      <div className=" container  offer-products ">
        <h2 className=" element-center-flex     sm:text-[19px] md:text-[22px] text-dark  font-medium mb-[30px]">
          life is better with you
          <span className=" ml-[5px] active-color font-bold  text-[17px] sm:text-[25px] md:text-[30px]">
            70% off
          </span>
        </h2>
        <div className=" flex flex-col gap-[20px]">
          <div className=" flex  flex-wrap   md:flex-nowrap gap-[10px] items-center justify-center  md:gap-x-[10px]">
            <div className=" box-imgs w-[48%] sm:w-[49%] ">
              <img src={require(`../../IMg/offer_1.png`)} alt="img_offer" />
              <h4>sale 30%</h4>
            </div>

            <div className="  box-imgs  w-[48%] sm:w-[49%] md:w-[25%] ">
              <img src={require(`../../IMg/offer_2.webp`)} alt="img_offer" />
              <h4>sale 70%</h4>
            </div>

            <div className="  box-imgs w-[98%] sm:w-[100%]   md:w-[25%]  ">
              <img src={require(`../../IMg/offer_6.webp`)} alt="img_offer" />
              <h4>sale 50%</h4>
            </div>
          </div>

          <div className=" flex  flex-wrap   md:flex-nowrap gap-[10px] items-center justify-center  ">
            <div className=" box-imgs  w-[48%]  sm:w-[49%] md:w-[25%] ">
              <img
                className=" "
                src={require(`../../IMg/offer_5.webp`)}
                alt="img_offer"
              />
              <h4>sale 70%</h4>
            </div>

            <div className="  box-imgs w-[48%]  sm:w-[49%]  ">
              <img src={require(`../../IMg/offer_4.webp`)} alt="img_offer" />
              <h4>sale 50%</h4>
            </div>

            <div className="  box-imgs w-[98%] sm:w-[100%] md:w-[25%]  ">
              <img src={require(`../../IMg/new-product.png`)} alt="img_offer" />
              <h4>sale 30%</h4>
            </div>
          </div>
        </div>

        <Link
          className="main-btn element-center-flex  my-[40px] mx-auto"
          to="offer"
        >
          <span>View All</span>
        </Link>
      </div>
    </div>
  );
}

export default OfferBags;
