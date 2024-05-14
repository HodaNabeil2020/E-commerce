import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToFavorites } from "../../Store/ProductSlice/FavoritesSlice";
import { addToCart } from "../../Store/ProductSlice/Cart";
function CardOffer({ item }) {
  const dispatch = useDispatch();
  const [currentimage, setCurentImage] = useState(0);

  const [loading, setLoading] = useState(false);
  const hundleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        selectSize: item.sizes[0].size,
        price: item.sizes[0].price,
        color: item.colors && item.colors.length > 0 ? item.colors[0] : "",
        quantity: item.quantity || 1,
      })
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    setCurentImage(1);
  };

  const handleMouseLeave = () => {
    setCurentImage(0);
  };
  return (
    <div
      className="  card-offer 
       relative flex justify-center items-center flex-col"
    >
      <div className=" bg-[#ddc2ab52] rounded-[6px] relative overflow-hidden ">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" relative"
        >
          <img
            className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] 
                  lg:w-[200px] lg:h-[200px] p-[10px] md:-[15px] lg:p-[20px]  duration-200 transition-all  object-cover "
            src={item.image[currentimage]}
            alt={item.title}
          />
          <div
            className=" flex-col absolute  top-[20%]   
                translate-y-[-50%] right-[10px] "
          >
            <span
              onClick={() => dispatch(addToFavorites(item))}
              className="  box-icon  duration-500 transition-all  
                  relative  w-[25px] h-[25px]   sm:w-[35px] sm:h-[35px] 
                  lg:w-[40px] lg:h-[40px] element-center-flex  rounded-[50px] color-light 
                  cursor-pointer   bg-second-color mb-[10px]"
            >
              <i className="  z-[2]  text-[12px] sm:text-[16px]  fa-regular fa-heart"></i>
            </span>
          </div>
        </div>

        <div
          onClick={() => {
            if (item && item.sizes && item.sizes.length > 0) {
              hundleAddToCart(item);
            } else {
              console.error("item sizes are undefined or empty.");
            }
          }}
          className={`element-add-to-card  cursor-pointer bg-second-color 
          text-[12px]  sm:text-[15px] 
              absolute  w-[100%]  bottom-[-100%]  text-center  hover:bg-[#dd8b61]  
             duration-300 transition-all  p-0 sm:px-[10px] py-[8px] sm:py-[10px]  
             lg:px-[10px] lg:py-[10px]
             color-light  rounded-b-[6px]
             ${
               loading === false
                 ? " h-[28px] sm:h-[35px] md:h-[42px] flex justify-center items-center "
                 : "h-[28px]  sm:h-[35px] md:h-[42px] flex justify-center items-center"
             }
             
             `}
        >
          {loading === false ? (
            <>
              <i className="    mr-[5px] fa-solid fa-plus"></i>
              Add to Cart
            </>
          ) : (
            <p className="spinner"></p>
          )}
        </div>
      </div>

      <div className=" p-0 sm:px-[20px]  text-center mt-[10px]">
        <h4
          className=" text-dark  hover:text-[#db794a]  duration-150 transition-all 
             text-[14px]  sm:text-[15px] w-[100%] capitalize  font-medium mb-[4px]"
        >
          {item.title}
        </h4>

        <div
          className="   icons-wrapper  relative my-[15px] 
              color-dark-light flex items-center gap-x-[2px] md:gap-x-[5px]"
        >
          <i className="  text-[10px] md:text-[15px] mr-[4px]    fa-solid fa-star"></i>
          <i className="   text-[10px]  md:text-[15px] mr-[4px]   fa-solid fa-star"></i>
          <i className="   text-[10px]  md:text-[15px] mr-[4px]   fa-solid fa-star"></i>
          <i className="   text-[10px]  md:text-[15px] mr-[4px]   fa-solid fa-star"></i>
          <i className="   text-[10px]  md:text-[15px] mr-[4px]   fa-solid fa-star-half"></i>
          <small className="text-[10px] md:text-[15px]  text-dark  ml-1">
            {item.rating}
          </small>
        </div>

        <div className="  flex-between  ">
          <span className="line-through   text-[13px] md:text-[14px] font-medium text-dark">
            ${item.OldPrice}
          </span>
          <span className=" active-color  text-[13px]  md:text-[14px]  font-bold">
            ${item.sizes[0].price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardOffer;
