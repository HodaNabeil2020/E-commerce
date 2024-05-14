function Why() {
  return (
    <div className="bg-light ">
      <h2 className=" element-center-flex text-dark p-[50px]  sm:text-[18px] md:text-[20px]">
        Why to Buy From us ?
      </h2>
      <div className="  container   grid grid-cols-2 md:grid-cols-4 pb-[50px] gap-[20px] ">
        <div className="  element-center-flex  flex-col p-[10px] md:p-[20px] duration-500 transition-all rounded-[10px]  hover:shadow-3xl  ">
          <img
            className="  w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]  
            object-cover  mb-[10px]   "
            src={require(`../../IMg/delivery-van.webp`)}
            alt="delivery"
          />
          <h4 className="    leading-[1.7] text-sm  text-dark ">
            Free Shipping
          </h4>
        </div>
        <div className=" element-center-flex  flex-col p-[10px] md:p-[20px] duration-500 transition-all rounded-[10px]  hover:shadow-3xl  ">
          <img
            className="  w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]  
            object-cover  mb-[10px]   "
            src={require(`../../IMg/authenticity.webp`)}
            alt="delivery"
          />
          <h4 className=" leading-[1.7] text-sm  text-dark ">
            FGenuine product
          </h4>
        </div>
        <div className=" element-center-flex  flex-col p-[10px] md:p-[20px]  duration-500 transition-all rounded-[10px]  hover:shadow-3xl  ">
          <img
            className="  w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]  
            object-cover  mb-[10px]   "
            src={require(`../../IMg/money.webp`)}
            alt="delivery"
          />
          <h4 className=" leading-[1.7] text-sm  text-dark ">secure payment</h4>
        </div>
        <div className=" element-center-flex  flex-col p-[10px] md:p-[20px]   duration-500 transition-all rounded-[10px]  hover:shadow-3xl  ">
          <img
            className="  w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]  
            object-cover  mb-[10px]   "
            src={require(`../../IMg/support.webp`)}
            alt="delivery"
          />

          <h4 className=" leading-[1.7] text-sm  text-dark ">Support </h4>
        </div>
      </div>
    </div>
  );
}

export default Why;
