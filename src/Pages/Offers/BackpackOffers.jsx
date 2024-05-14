import { useEffect, useState } from "react";
import CardOffer from "./CardOffer";



function BackpackOffers() {
  const [backpack, setBackpack] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/BackpackOffers.json");
        const data = await res.json();
        setBackpack(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container  overflow-hidden pb-[30px]">
      <h2
        className=" center-flex p-[30px]  font-2  font-bold
          
        text-[23px]  sm:text-[25]   md:text-[30px] tracking-[1px]  active-color"
      >
      Backpack 
      </h2>
      <div className="pb-[30px]  grid grid-cols-2 md:grid-cols-4 
       gap-[20px]
        sm:gap-[40px] ">
        {backpack.map((item) => {
          return <CardOffer key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default BackpackOffers
