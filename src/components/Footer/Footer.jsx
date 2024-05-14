import { Link } from "react-router-dom";



import "./footer.css"
function Footer() {
  return (
    <div className=" footer   bg-light  overflow-hidden  padding-y-50">
      <div className="container   grid  grid-cols-1 sm:grid-cols-2 gap-[25px] md:gap-[10px] lg:gap-[30px]  md:grid-cols-4">
        <div>
          <h4 className="  font-bold   md:text-[22px] lg:text-[25px] active-color  uppercase">
            Luxury Line
          </h4>
          <div className="  w-[150px] sm:w-[200px] uppercase  text-dark font-medium mt-[20px] md:text-[18px] ">
            COPYRIGHT © 2024 A-PRIL ALL RIGHTS RESERVED
          </div>
        </div>

        <div>
          <h4 className="  font-medium md:text-[18px] text-second-color  mb-[10px]">
            About Luxury
          </h4>
          <ul>
            <li>
              <Link
                className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
                   border-b border-transparent 
                     hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/about"
              >
          
                about us{" "}
              </Link>
            </li>
            <li>
              <Link
      className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
      border-b border-transparent 
        hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Offices
              </Link>
            </li>
            <li>
              <Link
          className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
          border-b border-transparent 
            hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Work with us
              </Link>
            </li>
            <li>
              <Link
            className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
            border-b border-transparent 
              hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Our policies
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h4 className="  font-medium md:text-[18px] text-second-color  mb-[10px]">
            Services Luxury
          </h4>
          <ul>
            <li>
              <Link
                className=" text-dark   capitalize  md:text-[17px] block mb-[10px] 
                   border-b border-transparent 
                     hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/about"
              >
          
                about us{" "}
              </Link>
            </li>
            <li>
              <Link
      className=" text-dark   capitalize  md:text-[17px] block mb-[10px] 
      border-b border-transparent 
        hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Offices
              </Link>
            </li>
            <li>
              <Link
          className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
          border-b border-transparent 
            hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Work with us
              </Link>
            </li>
            <li>
              <Link
            className=" text-dark   capitalize md:text-[17px] block mb-[10px] 
            border-b border-transparent 
              hover:border-[#D39C80] duration-100 transition-all  w-fit  "
                to="/"
              >
                Our policies
              </Link>
            </li>
          </ul>
        </div>


        <div className="">
          <h4 className=" uppercase active-color  font-medium mb-[5px] w-[100%] ">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
          <div className=" relative  ">
            <input
              className=" px-[15px] py-[8px]  w-[100%] text-[15px]   rounded-[50px]   outline-none"
              type="email"
              placeholder="Email.."
            />
            <div className="  absolute right-[0px]  top-[0px] ">
              <span
                className=" element-center-flex  cursor-pointer  w-[40px] h-[40px] bg-active-color 
              color-light rounded-r-[50px]"
              >
                <i
                  className=" 
            
              fa-regular fa-envelope"
                ></i>
              </span>
            </div>
          </div>
          <div className="  overflow-hidden  container-icons mt-[30px]  flex  justify-center gap-x-[20px] md:gap-x-0  md:justify-between  items-center">     
            <span className="  w-[35px] h-[35px] md:w-[30px] md:h-[30px] p-[15px]  lg:w-[40px] lg:h-[40px] rounded-[50px] cursor-pointer bg-second-color element-center-flex       relative ">            <i className="   z-[2]    fa-brands fa-facebook"></i></span>
              <span className="  w-[35px] h-[35px] md:w-[30px] md:h-[30px] p-[15px]  lg:w-[40px] lg:h-[40px] rounded-[50px] cursor-pointer bg-second-color element-center-flex     relative    ">      <i className="      z-[2]     fa-brands fa-instagram"></i></span>
              <span className="  w-[35px] h-[35px] md:w-[30px] md:h-[30px] p-[15px]  lg:w-[40px] lg:h-[40px] rounded-[50px] cursor-pointer bg-second-color element-center-flex     relative    ">    <i className="        z-[2]   fa-brands fa-twitter"></i></span>
              <span className="  w-[35px] h-[35px] md:w-[30px] md:h-[30px] p-[15px]  lg:w-[40px] lg:h-[40px] rounded-[50px] cursor-pointer bg-second-color element-center-flex     relative    ">    <i className="        z-[2]   fa-brands fa-x-twitter"></i></span>
      
        
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
