import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Store/ProductSlice/FavoritesSlice";
import { addToCart } from "../../Store/ProductSlice/Cart";

function CardFavorite({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="  product-item   relative flex justify-center items-center flex-col">
      <div className=" bg-[#ddc2ab52] rounded-[6px] relative overflow-hidden ">
        <div className="">
          <img
            className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] 
                lg:w-[200px] lg:h-[200px] p-[10px] md:-[15px] lg:p-[20px] object-cover "
            src={product.image[0]}
            alt={product.title}
          />
          <div
            className="  container-box-icon hidden flex-col absolute top-[35%]  ms:top-[36%] md:top-[37%]   
               translate-y-[-50%] right-[10px] "
          >
            <span
              onClick={() => dispatch(removeFromFavorites(product))}
              className="  box-icon  duration-500 transition-all  
                relative  w-[25px] h-[25px]   sm:w-[35px] sm:h-[35px] 
                lg:w-[40px] lg:h-[40px] element-center-flex  rounded-[50px] color-light 
                cursor-pointer   bg-second-color "
            >
              <i className="  z-[2]  text-[12px] sm:text-[16px]  fa-solid fa-trash"></i>
            </span>

            <span
              onClick={() => {
                if (product && product.sizes && product.sizes.length > 0) {
                  dispatch(
                    addToCart({
                      ...product,
                      selectSize: product.sizes[0].size,
                      price: product.sizes[0].price,
                      color:
                        product.colors && product.colors.length > 0
                          ? product.colors[0]
                          : "",
                      quantity: product.quantity || 1,
                    })
                  );
                } else {
                  console.error("Product sizes are undefined or empty.");
                }
              }}
              className="   box-icon  mt-[10px]  duration-500 transition-all  
                relative  w-[25px] h-[25px]   sm:w-[35px] sm:h-[35px] 
                lg:w-[40px] lg:h-[40px]  element-center-flex  rounded-[50px] color-light  
                cursor-pointer  bg-second-color"
            >
              <i className="  z-[2]  text-[12px] sm:text-[16px] fa-solid fa-bag-shopping"></i>
            </span>
          </div>
        </div>
        <div
          className="  add-cart  flex-between  cursor-pointer bg-second-color  text-[12px]  sm:text-[15px] 
          absolute  w-[100%] bottom-[-100%]  text-center  hover:bg-[#dd8b61]  
          duration-300 transition-all py-[4px] px-[6px] sm:p-[8px]   
          md:p-[10px]
          color-light  rounded-b-[6px]"
        >
          <h4
            className=" text-dark  hover:text-[#db794a]  duration-150 transition-all 
             text-[10px]  sm:text-[15px] w-[100%] capitalize  font-medium mb-[2px]"
          >
            {product.title}
          </h4>
          <div>
            <span className=" text-[11px] sm:text-[14px] font-medium text-dark">
              ${product.sizes[0].price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFavorite;
