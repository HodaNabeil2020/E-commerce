import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Store/ProductSlice/Cart";
import { addToFavorites } from "../../Store/ProductSlice/FavoritesSlice";
import { useState } from "react";

function CardItem({ product }) {
  const [Loading, setLoading] = useState(false);
  const hundleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        selectSize: product.sizes[0].size,
        price: product.sizes[0].price,
        color:
          product.colors && product.colors.length > 0 ? product.colors[0] : "",
        quantity: product.quantity || 1,
      })
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const dispatch = useDispatch();

  return (
    <div className="  product-item  relative flex justify-center items-center flex-col">
      <div className=" bg-[#ddc2ab52] rounded-[6px] relative overflow-hidden ">
        <div className=" relative">
          <img
            className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] 
              lg:w-[200px] lg:h-[200px] p-[10px] md:-[15px] lg:p-[20px] object-cover "
            src={product.image[0]}
            alt={product.title}
          />
          <div
            className="  container-box-icon hidden flex-col absolute  top-[33%]   
            translate-y-[-50%] right-[10px] "
          >
            <span
              onClick={() => dispatch(addToFavorites(product))}
              className="  box-icon  duration-500 transition-all  
              relative  w-[25px] h-[25px]   sm:w-[35px] sm:h-[35px] 
              lg:w-[40px] lg:h-[40px] element-center-flex  rounded-[50px] color-light 
              cursor-pointer   bg-second-color mb-[10px]"
            >
              <i className="  z-[2]  text-[12px] sm:text-[16px]  fa-regular fa-heart"></i>
            </span>
            <Link
              to={`${product.id}`}
              className="   box-icon   duration-500 transition-all  
                relative  w-[25px] h-[25px]   sm:w-[35px] sm:h-[35px] 
                lg:w-[40px] lg:h-[40px]  element-center-flex  rounded-[50px] color-light  
                cursor-pointer  bg-second-color"
            >
              <i className="z-[2] text-[12px] sm:text-[16px]  fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            if (product && product.sizes && product.sizes.length > 0) {
              hundleAddToCart(product);
            } else {
              console.error("Product sizes are undefined or empty.");
            }
          }}
          className={`  add-cart  cursor-pointer bg-second-color  text-[12px]  sm:text-[15px] 
          absolute  w-[100%] bottom-[-100%]  text-center  hover:bg-[#dd8b61]  
         duration-300 transition-all     
         color-light  rounded-b-[6px] 
    
                  ${
                    Loading === false
                      ? " h-[28px] sm:h-[35px] md:h-[42px] flex justify-center items-center "
                      : "h-[28px]  sm:h-[35px] md:h-[42px] flex justify-center items-center"
                  }
         `}
        >
          {Loading === false ? (
            <>
              <i className="  icon-cart   mr-[5px] fa-solid fa-plus"></i>
              Add to Cart
            </>
          ) : (
            <p className="spinner">
              
            </p>
          )}
        </div>
      </div>

      <div className=" w-[100%] p-0 sm:px-[20px]  text-center mt-[10px]">
        <h4
          className=" text-dark  hover:text-[#db794a]  duration-150 transition-all 
         text-[14px]  sm:text-[15px] w-[100%] capitalize  font-medium mb-[4px]"
        >
          {product.title}
        </h4>
        <div>
          <span className="  text-[14px] font-medium text-dark">
            ${product.sizes[0].price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
