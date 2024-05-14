

import { Link } from "react-router-dom";
import CardCollection from "./CardCollection"



import "./style/ourcollection.css"
function OurCollections() {
  return (
<div className="padding-y-50  bg-light relative overflow-hidden">

      <div className="container relative">
        <h2 className=" text-center text-dark mb-[25px] text-[19px]  sm:text-[22px] md:text-[25px] ">Our latest Collections</h2>
        <div className=" container-box
      
        ">
          <CardCollection title={"Backpacks"} img={`/Img/collection_1.png`}/>
          <CardCollection title={"DuffleBags"} img={`/Img/collection_2.png`}/>
          <CardCollection title={"Laptop"} img={`/Img/collection_3.png`}/>
        </div>

        <Link 
          className=" main-btn  duration-300 element-center-flex my-[20px] 
          mx-auto "
          to={"/products"}>
          <span >View Collection</span>
        </Link>
    
      </div>
</div>
  )
}

export default OurCollections
