import React, { useEffect, useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import ProductList from "./ProductList";
import ProductSidebar from "./ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/ProductSlice/productsSlice";
import "./shoppingpage.css";

import SortFilter from "./SortFilter";
import Pagination from "./Pagination";

import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";


function Shop() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [category, setCategory] = useState("all");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [prand, setPrand] = useState("");
  const [sortItem, setSortItem] = useState("");

  const [minPrice, setMinPrice] = useState(0);

  const [maxPrice, setMaxPrice] = useState(500);

  const [currentPage, setCurrentPage] = useState(1);

  const [mobileSortFilter, setMobileSortFilter] = useState(false);

  const [mobileFilterItem, setMobileFilterItem] = useState(false);



  useEffect(() => {
    dispatch(fetchProducts());

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > window.innerHeight) {
        setMobileSortFilter(false);
        setMobileFilterItem(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  const filteredProducts = useMemo(() => {
    let updatedProducts = products;

    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (color !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        if (Array.isArray(product.colors)) {
          return product.colors.some((item) => item === color);
        }
        return false;
      });
    }
    if (size !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        return product.sizes.some((item) => item.size === size);
      });
    }

    if (prand !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        if (Array.isArray(product.prand)) {
          return product.prand.some((item) => item === prand);
        }
        return false;
      });
    }

    if (minPrice !== 0 || maxPrice <= 500) {
      updatedProducts = updatedProducts.filter((product) => {
        const prices = product.sizes.map((item) => parseFloat(item.price));
        const minProductPrice = Math.min(...prices);
        const maxProductPrice = Math.max(...prices);
        return minProductPrice >= minPrice && maxProductPrice <= maxPrice;
      });
    }

    if (sortItem === "low") {
      updatedProducts.sort(
        (a, b) => parseFloat(a.sizes[0].price) - parseFloat(b.sizes[0].price)
      );
    } else if (sortItem === "high") {
      updatedProducts.sort(
        (a, b) => parseFloat(b.sizes[0].price) - parseFloat(a.sizes[0].price)
      );
    }
    return updatedProducts;
  }, [category, color, products, size, prand, minPrice, maxPrice, sortItem]);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div className=" text-red-700 text-[40px]  ">Error: {error}</div>;
  }

  const product_per_page = 6;
  const pages = Math.ceil(filteredProducts.length / product_per_page);

  const startIndex = (currentPage - 1) * product_per_page;

  const finishIndex = currentPage * product_per_page;

  const orderProducts = filteredProducts.slice(startIndex, finishIndex);


  return (
    <div className="shopping-page  ">
      <Header  schangebackground={"#DDC2AB"}/>

      <div
        className={`overlay-filter ${
          mobileSortFilter || mobileFilterItem ? "block" : "hidden"
        }`}
      ></div>

      <div
        onClick={() => {
          setMobileSortFilter(!mobileSortFilter);
          setMobileFilterItem(false);
        }}
        className=" sort-filter-mobile"
      >
        <i className="fa-solid fa-sort"></i>
        Sort
      </div>
      <div
        onClick={() => {
          setMobileSortFilter(false);
          setMobileFilterItem(!mobileFilterItem);
        }}
        className=" item-filter-mobile"
      >
        <i className="fa-solid fa-filter"></i>
        Filter
      </div>
      <div className="bg-light">
        <div className=" sortProducts  sm:bg-[#f0e2d9] top-[50px] relative">
          <SortFilter
            setMobileSortFilter={setMobileSortFilter}
            mobileSortFilter={mobileSortFilter}
            sortItem={sortItem}
            setSortItem={setSortItem}
          />
        </div>

        <div className="container container-shopping-page">
          <ProductSidebar
            filteredProducts={filteredProducts}
            setColor={setColor}
            setCategory={setCategory}
            color={color}
            size={size}
            setSize={setSize}
            prand={prand}
            setPrand={setPrand}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            mobileFilterItem={mobileFilterItem}
          />
          <ProductList products={orderProducts} />
        </div>
        <div  className=" container">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Shop;
