






function CardCollection( {img,title}) {
  return (
    <div 
    className="box-collection     p-[20px]   relative
    bg-[#b7bcc778] element-center-flex flex-col  rounded-[8px] ">
    <div className=" w-[100%]  element-center-flex">
      <img 
        className="  sm:w-[150px] sm:h-[150px] lg:w-[180px]  lg:h-[180px] object-cover mb-[10px] "
        src={img} alt="collection-img" />
    </div>
    <h3
    className=" text-dark text-center  element-center-flex 
    my-[8px] text-[18px] md:text-[20px] m-auto  w-[20%]" 
    >
    {title}  
    </h3>
  </div>
  )
}

export default CardCollection
