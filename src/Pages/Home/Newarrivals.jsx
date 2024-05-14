

function Newarrivals() {
  return (
    <div className=" bg-main-color  flex   flex-col   md:flex-row " >
      <div className=" container  w-full md:w-[50%]  ">
        <h2 className=" m-[30px]  sm:m-[50px] md:m-0 text-left capitalize font-bold  text-[#83715f]
          text-[20px]  sm:text-[25px]   md:text-[33px] ">
          <span className=" active-color">  new arrivals </span><br /> premium and luxury <br /> for professionals
        </h2>
      </div>
      <div className="  w-full md:w-[50%]">
        <img  
        className=" object-cover w-full  "
        src={"/Img/new-3.jpg"} alt="new-bags" />
      </div>
    </div>
  )
}

export default Newarrivals
