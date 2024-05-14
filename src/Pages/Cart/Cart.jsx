import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./cart.css";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import {
  clearProduct,
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../../Store/ProductSlice/Cart";
function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const totalPrice = products.reduce((acc, product) => {
    
    acc += (product.price * product.quantity ) - product.discount;
    return acc;
  }, 0);

  const BeforeDiscount = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return products.length > 0 ? (
    <>
      <div className="bg-light page-cart">
        <Header schangebackground={"#DDC2AB"}></Header>
        <div className=" container pt-[120px] pb-[20px] ">
          <div
            onClick={() => dispatch(clearProduct())}
            className="  cursor-pointer  bg-main-color  w-fit rounded-[6px] 
       text-dark py-[10px] px-[15px] mb-[10px] 
          hover:bg-[#D39C80]  hover:text-[#f8f2EE] 
          duration-150 transition-all"
          >
            Clear
          </div>

          <div
            className="  left-cart-item
         flex flex-wrap  lg:flex-nowrap  justify-between  "
          >
            <div className=" w-[100%] lg:w-[66%] ">
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className=" cart-item border  mb-[20px] flex  relative
                 border-[#ddc2ab]  p-[10px] md:p-[20px] rounded-[6px] cart-item"
                  >
                    <div className=" w-[30%]">
                      <img
                        className="  object-cover p-[10px] w-[100px]  sm:w-[140px] h-[100px] sm:h-[150px]"
                        src={product.image[0]}
                        alt={product.title}
                      />
                    </div>
                    <div className=" w-[70%] flex  flex-col justify-center ">
                      <div className="  flex-between  text-dark ">
                        <h5>{product.title}</h5>
                        <p>{product.price} $</p>
                      </div>

                      <div className=" text-dark flex-between my-[10px] sm:my-[15px]  gap-x-[30px]">
                        <p>{product.selectSize}</p>
                        <div
                          className="  flex items-center   top-2 w-[115px]  border border-[#ddc2ab] 
                    rounded-[2px]  py-[5px] px-[10px]   gap-x-[25px]"
                        >
                          <i
                            onClick={() =>
                              dispatch(
                                increaseQuantity({
                                  id: product.id,
                                  selectSize: product.selectSize,
                                  color: product.color,
                                })
                              )
                            }
                            className="    cursor-pointer fa-solid fa-plus"
                          ></i>
                          <p> {product.quantity}</p>
                          <i
                            onClick={() =>
                              dispatch(
                                decreaseQuantity({
                                  id: product.id,
                                  selectSize: product.selectSize,
                                  color: product.color,
                                })
                              )
                            }
                            className="  cursor-pointer fa-solid fa-minus"
                          ></i>
                        </div>
                      </div>
                      <div className=" text-dark flex-between">
                        <span>{product.color}</span>

                        <button
                          onClick={() =>
                            dispatch(
                              deleteFromCart({
                                id: product.id,
                                selectSize: product.selectSize,
                                color: product.color,
                              })
                            )
                          }
                          className=" btn-remove border w-[115px]    border-[#ddc2ab] rounded-[2px]  py-[5px] px-[10px] "
                        >
                          <i className=" text-[#3d3333] mr-[5px]     fa-solid fa-trash"></i>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>




            <div className="   rigth-cart-item  w-[100%] details-cart  lg:w-[30%]  ">
              <div className="  bg-[#ddc2ab82] p-[15px]  rounded-tr-[6px]  rounded-tl-[6px] ">
                <h3 className=" text-[16px] md:text-[18px]  text-dark text-center my-[10px]">
                  Order Summory
                </h3>
                <h4 className="   text-[15px]  my-[5px] text-left text-dark ">
                  Apply promo Code
                </h4>
                <input
                  type="text"
                  placeholder="Promo Code .."
                  className=" w-full rounded-[2px]  my-[10px]
              text-dark   bg-transparent border border-[#D39C80]
                border-solid text-[13px] outline-none py-[8px] px-[12px]"
                />
                <div>
                  <h4>Subtotal </h4>
                  <span>${BeforeDiscount}</span>
                </div>
                <div>
                  <h4>Cart Total Discount</h4>
                  <span>${totalPrice}</span>
                </div>
                <div>
                  <h4>free delivery</h4>
                  <span>$0.0</span>
                </div>

                <div>
                  <h3>Total</h3>
                  <span>${totalPrice}</span>
                </div>
                <Link to="/checkout"> Checkout</Link>
              </div>
              <div className="    bg-[#ddc2ab82] p-[15px]  rounded-b-[6px]  mt-[5px]">
                <h4
                  className="  py-[10px] 
         border-b-[2px] border-[#3333338f]  text-dark text-center "
                >
                  Order inFormation
                </h4>
                <p className=" w-[280px]   my-[10px]  text-dark   text-sm  ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, perspiciatis?
                </p>
                <h6 className=" border-t-[2px] border-[#3333338f]  text-dark   pt-[10px]">
                  Free marketing
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div  className= "page-cart">
      <Header schangebackground={"#DDC2AB"}></Header>
      <div
        className=" bg-light h-[100vh]  w-[100%] text-[#3333338a] 
         flex justify-center items-center  font-medium md:font-bold 
          text-[20px] sm:text-[25px]  md:text-[30px] top-[50%] 
           absolute left-[50%] font-2
    translate-x-[-50%] translate-y-[-50%] "
      >
        Your shopping cart is empty
      </div>
    </div>
  );
}

export default Cart;
