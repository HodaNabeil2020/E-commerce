




import img1 from "../../IMg/new-products-sho.png";
import img2 from "../../IMg/newproduct-labtop.png";
import img3 from "../../IMg/new-product.png";
import img4 from "../../IMg/newproduct-sh.png";


import "./style/newproducts.css"
import { Link } from "react-router-dom";

function NewProducts({title}) {
  const newproduct = [
    {
      img:img1,
      price:250,
      title:"shoulder Backpacks"
    },
    {
      img:img2,
      price:300,
      title:"Laptop Bags"
    },
    {
      img:img3,
      price:350,
      title:"Sling Bags"
    },
    {
      img:img4,
      price:400,
      title:"School Backpacks"
    }
  ]
  return (
    <div className=" bg-light new-products  pb-[30px] overflow-hidden ">
      <div className="container  ">
          <h2  
            className=" pt-[50px] mb-[30px] text-[20px] sm:text-[22px] md:text-[25px]  text-dark element-center-flex ">
            {title}
          </h2>
          <div className="pb-[50px] grid grid-cols-2 md:grid-cols-4 gap-[15px] ">
            {newproduct.map((item ,index)=> {
              return(
                <div  key={index} className=" box   cursor-pointer relative overflow-hidden  bg-[#d39c8040] rounded-[10px]"  >
                  <div 
                    className="  h-[100px] sm:h-[140px] lg:h-[175px]  w-[100%] sm:w-[80%] element-center-flex m-auto">
                    <img 
                      className=" object-cover max-w-full h-[100%]"
                    src={item.img} alt="new-product" />
                  </div>
                  <div className=" box-info  flex felement-center-flex flex-col 
                      text-dark items-center   w-[100%]  py-[5px] px-[10px] sm:p-[10px]
                        text-center m-auto">
                  <h4 className="mb-[4px] text-[15px]   sm:text-[16px]">{item.title}</h4>
                  <p>{item.price}$</p>
                  </div>
                </div>
              )
            })}
          </div>
      
          <Link 
            className="bg-second-color     main-btn element-center-flex  m-auto "
            to="/products"> <span >View All</span></Link>
      </div>
    </div>
  )
}

export default NewProducts
