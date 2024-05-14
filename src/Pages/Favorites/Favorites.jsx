import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

import "./favorites.css";
import CardFavorite from "./CardFavorite";
import Footer from "../../components/Footer/Footer";
function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return favorites.length > 0 ? (
    <div className="page-favorites ">
      <Header></Header>

      <div className="container pt-[100px] pb-[40px] ">
        <h2
          className=" element-center-flex 
          active-color  font-medium 
          text-[30px] font-2
          mb-[15px]
         "
        >
          Favorites
        </h2>

        <div className=" grid md:grid-cols-3 grid-cols-2   gap-[20px] ">
          {favorites.map((product) => {
            return <CardFavorite key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <>
      <Header schangebackground={"#DDC2AB"}></Header>
      <div
        className=" bg-light h-[100vh]  w-[100%] text-[#3333338a] 
         flex justify-center items-center  font-medium md:font-bold 
          text-[20px] sm:text-[25px]  md:text-[30px] top-[50%] 
           absolute left-[50%]  font-2
    translate-x-[-50%] translate-y-[-50%] "
      >
        Your Favorites is empty
      </div>
    </>
  );
}

export default Favorites;
