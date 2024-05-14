
function Pagination({ pages ,setCurrentPage ,currentPage}) {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className=" pagination        py-[40px] sm:p-[80px]   overflow-hidden  flex items-center  justify-center gap-[20px] ">
      <div
      
      

        onClick={()=> {
          setCurrentPage((perv)=> perv - 1 )
        }}
        className={` btn previous  w-[80px] h-[30px] text-sm  sm:w-[90px] sm:h-[40px] 
         element-center-flex bg-[#f1e5de] text-dark      text-[14px] sm:text-[16px]
         capitalize p-0  sm:py-[4px] sm:px-[6px]   cursor-pointer
        transition-all  duration-500  rounded-[6px]
        ${currentPage === 1 &&  " pointer-events-none"}

      `}
      >
        Previous 
      </div>

      <div className="  number-pagination flex  justify-center  items-center  gap-x-1  sm:gap-x-[20px] ">
        {generatedPages.map((page, index) => {
          return (
            <div
              onClick={()=> setCurrentPage(page)}
              key={index}
              className={` w-[30px] h-[30px] p-0 sm:w-[40px] sm:h-[40px] 
               rounded-[6px]  duration-200 transition-all  
               text-[14px] sm:text-[16px]
               sm:py-[4px] sm:px-[6px]   element-center-flex  cursor-pointer
              ${page === currentPage ? " bg-[#dd8b61] rounded-[6px]  color-light": "text-dark  bg-[#f1e5de]" }
              `}
            >
              {page}
            </div>
          );
        })}
      </div>

      <div 
          onClick={()=> {
            setCurrentPage((perv)=> perv + 1 )
          }}
      
          className={` btn next w-[80px] h-[30px] text-sm  sm:w-[90px] sm:h-[40px] 
          element-center-flex bg-[#f1e5de] text-dark      text-[14px] sm:text-[16px]
          capitalize p-0  sm:py-[4px] sm:px-[6px]   cursor-pointer
         transition-all  duration-500  rounded-[6px]
          ${currentPage === pages &&  " pointer-events-none"}
  
        `}>
  
        Next 
      </div>
    </div>
  );
}

export default Pagination;
