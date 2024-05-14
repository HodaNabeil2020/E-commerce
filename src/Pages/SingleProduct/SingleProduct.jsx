import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./singleproduct.css";

import Footer from "../../components/Footer/Footer";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../Store/ProductSlice/Cart";
import NewProducts from "../Home/NewProducts";

function SingleProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === +id);

  const [selectProduct, setSelectProduct] = useState({});
  const [selectSize, setSelectSize] = useState({});
  const [selectColor, setSelectColor] = useState("");
  const [price, setPrice] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    if (product) {
      const defaultSize = product.sizes[0];
      handleSizeSelection(product.id, defaultSize);
    }
  }, [product]);

  const handleSizeSelection = (productId, size) => {
    setSelectProduct({
      id: productId,
      name: size.name,
      image: size.image,
      price: size.price,
      selectSize: size.size,
    });
    setSelectSize({
      ...selectSize,
      [productId]: size.size,
    });
    setPrice(size.price);
  };

  const handleIncreaseQuantity = () => {
    setNewQuantity((prev) => prev + 1);
    dispatch(
      increaseQuantity({
        ...product,
        id: id,
        selectSize: selectSize,
        color: selectColor,
        quantity: newQuantity,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    if (newQuantity > 1) {
      setNewQuantity((prev) => prev - 1);
    }

    decreaseQuantity({
      ...product,
      id: id,
      selectSize: selectSize,
      color: selectColor,
      quantity: newQuantity,
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        selectSize: selectSize[product.id],
        price: selectProduct.price,
        color: selectColor,
        quantity: newQuantity,
      })
    );
    setActiveLink(true);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-light  page-single-product relative top-[74px] ">
      <Header schangebackground={"#DDC2AB"} />

      <div className=" container">
        <div className="  py-[20px]  flex-wrap md:flex-nowrap  flex   gap-[20px]">
          <div className="flex  m-auto md:m-0 gap-[20px]">
            <div className="image-wrapper  hidden  sm:block ">
              {Array.isArray(product.image) &&
                product.image.map((img, index) => (
                  <div
                    className="w-[70px] h-[70px] cursor-pointer  
                 flex  justify-center items-center
                  bg-main-color mb-[6px] rounded-[6px]"
                    key={index}
                  >
                    <img
                      className="object-cover p-[4px]"
                      src={img}
                      alt={product.title}
                    />
                  </div>
                ))}
            </div>
            <div
              className=" main-image  bg-main-color  
               w-[300px] h-[300px] md:w-[200px] lg:w-[300px] 
                  rounded-[6px] p-[20px]"
            >
              <img
                className="object-cover element-center-flex w-[100%] h-[100%]"
                src={Array.isArray(product.image) ? product.image[0] : ""}
                alt={product.title}
              />
            </div>
          </div>

          <div className="  px-[20px] m-auto md:m-0">
            <h3 className=" text-[18px] sm:text-[20px] md:text-[25px]  text-dark capitalize">
              {product.title}
            </h3>
            <small className=" text-dark my-[2px]">
              price : <b>{price > 0 ? `$${price}` : " $00"} </b>
            </small>
            <div
              className="   icons-wrapper  relative my-[15px] 
              color-dark-light flex items-center gap-x-[5px]"
            >
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <small className=" text-dark  ml-1">
                Customer review {product.rating}{" "}
              </small>
            </div>
            <div>
              <h4 className=" color-dark-light my-[10px]">Dimension</h4>
              <ul
                style={{ listStyle: "inherit" }}
                className=" color-dark-light ml-[20px]"
              >
                {product.sizes.map((size, index) => {
                  return (
                    <li
                      onClick={() => handleSizeSelection(product.id, size)}
                      className={` capitalize  cursor-pointer  
                      mb-[10px] hover:text-[#db794a] duration-200 transition-all 
                      text-[15px] sm:text-[16px]
                       ${
                         selectSize[product.id] === size.size
                           ? "text-[#db794a]   "
                           : " "
                       } `}
                      key={index}
                    >
                      {size.size}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className=" color-dark-light my-[10px]"> Choose colors</h4>
              <div className=" flex gap-x-[10px]  items-center  ">
                {product.colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => setSelectColor(color)}
                      className={` color-item  ${color} ${
                        selectColor === color ? "active" : " "
                      }`}
                      key={index}
                    >
                      <span className=" opacity-0">{index}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="  container-btn-add-to-cart flex items-center gap-[10px]  sm:gap-[15px] md:gap-[20px] my-[15px] ">
              <div
                className="  btn-quantity flex  cursor-pointer justify-center items-center  
              gap-[10px] border border-[#D39C80] py-[6px] px-[20px] 
              rounded-[6px] capitalize text-dark  "
              >
                <div onClick={handleIncreaseQuantity}>
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="mx-[10px] text-sm  sm:text-[16px] ">
                  {newQuantity}
                </div>
                <div onClick={handleDecreaseQuantity}>
                  <i className="fa-solid fa-minus"></i>
                </div>
              </div>

              <div
                onClick={handleAddToCart}
                className={` btn-add-to-cart  relative flex 
                gap-[5px] sm:gap-[15px] justify-center items-center 
                border text-dark   border-[#D39C80]  rounded-[6px]
                ${loading === false ? "  py-[8px] px-[20px] h-[40px] w-[120px] sm:w-[150px] md:w-[170px]" : " py-[8px] px-[20px] h-[40px] w-[120px] sm:w-[150px] md:w-[170px] "}
                
                ${activeLink && "bg-[#db794a]  border-[#db794a] text-[#f8f2EE]"}
                ${
                  price > 0 && selectColor !== ""
                    ? " cursor-pointer"
                    : "  pointer-events-none  "
                }
                `}
              >
                {loading === false ? 
                (
                  <>
                    <i className="   text-[10px]  sm:text-sm md:text-[15px]  fa-solid fa-basket-shopping"></i>

                    <span
                      className={`
                      capitalize 
                      text-[10px]  sm:text-[13px] md:text-[16px]

                      `}
                    >
                      Add To Cart
                    </span>
                  </>
                ) :
                 (
                  <p className="spinner"></p>
                )}
              </div>
            </div>

            <hr className="  border-[#d4d0d0] " />
            <div className=" my-[10px] flex items-start ">
              <img
                className=" relative w-[28px] md:w-[32px]  right-[20px] "
                src={require(`../../IMg/truck.png`)}
                alt=" Delivery"
              />
              <div>
                <h4 className=" text-dark capitalize text-[15px] sm:text-[16px]  ">
                  Free Delivery
                </h4>
                <p
                  className=" color-dark-light text-sm sm:text-[15px] mt-[5px] 
                   capitalize w-[180px] sm:w-[250px] md:w-[320px] "
                >
                  Enter your pin for delivery availitty enter pin code here
                </p>
              </div>
            </div>

            <hr className="  border-[#d4d0d0] " />
            <div className=" my-[10px] flex items-start ">
              <img
                className=" relative  w-[28px] md:w-[32px] right-[20px]"
                src={require(`../../IMg/shopping-bag.png`)}
                alt=" Delivery"
              />
              <div>
                <h4 className=" text-dark capitalize text-[15] sm:text-[16px]  ">
                  Reture Delivery
                </h4>
                <p
                  className=" color-dark-light text-[15px] mt-[5px] capitalize  
                text-sm sm:text-[15px]
                   w-[180px] sm:w-[250px] md:w-[320px] "
                >
                  Free 15 days Deivery Reture .
                  <Link to={"/"} className=" cursor-pointer color-dark-light">
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" border-[#d4d0d0] " />

      <div className=" container">
        <div className=" flex gap-x-[40px]  p-[20px] pt-[30px]  border-b-2 border-[#db794a] w-[17%]">
          <h4 className=" active-color text-sm sm:text-[18px] ">description</h4>
          <h4 className="text-sm sm:text-[18px] text-dark">review</h4>
        </div>
        <hr className=" border-[#d4d0d0] " />

        <div className=" my-[20px]">
          <h4 className=" color-dark-light my-[10px] text-[17px] sm:text-[18px]  font-medium">
            Product details
          </h4>
          <p className=" color-dark-light  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, illo reprehenderit, aperiam ab molestiae nulla aliquam
            temporibus, libero laboriosam doloremque id iste minima blanditiis!
            Dolore culpa eveniet deleniti quia illum?
          </p>
        </div>
        <div className="hidden  md:block ">
          <h4 className=" color-dark-light my-[10px] text-[17px] sm:text-[18px]   font-medium">
            Care instruction
          </h4>
          <ul style={{ listStyle: "inherit" }} className=" pb-[10px]">
            <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className=" color-dark-light text-sm mb-[8px] py-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[#d4d0d0] " />
      <NewProducts title=" Related  products"></NewProducts>
      <Footer />
    </div>
  );
}

export default SingleProduct;
