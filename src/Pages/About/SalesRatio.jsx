import React, { useRef, useEffect } from "react";

function SalesRatio() {
  const sectionRef = useRef();
  const propressSpans = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >=
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 100
      ) {
        propressSpans.current.forEach((span) => {
          span.style.width = span.dataset.width;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>


    <h2 
     className=" element-center-flex font-2 
       text-[25px] w-fit m-auto text-dark pt-[70px] pb-[10px] border-b-[3px] border-dashed border-[#D39C80] ">
      Sales Ratio</h2>
        <div
      ref={sectionRef}
      className="sales-ratio flex flex-wrap md:flex-nowrap md:justify-between items-center gap-[40px] container py-[50px]"
    >
      <div className="  hidden sm:flex w-[100%] md:w-[48%] box-img relative">
        <img
          className="w-[100%] md:w-[350px] h-[450px] rounded-[2px] object-cover"
          src={require(`../../IMg/story-smll.jpg`)}
          alt=""
        />
      </div>

      <div className="w-[100%] md:w-[48%]">
        <div className="flex-between ">
          <h3>Handbag</h3>
          <span className="ratio">70%</span>
        </div>
        <div className="progress">
          <span 
            ref={(el) => (propressSpans.current[0] = el)}
            style={{ width: "0%" }}
            data-width="70%"
          ></span>
        </div>
        <div className="flex-between ">
          <h3>Dufflebag</h3>
          <span className="ratio">80%</span>
        </div>
        <div className="progress">
          <span
            ref={(el) => (propressSpans.current[1] = el)}
            style={{ width: "0%" }}
            data-width="80%"
          ></span>
        </div>
        <div className="flex-between ">
          <h3>Backbag</h3>
          <span className="ratio">95%</span>
        </div>
        <div className="progress">
          <span
            ref={(el) => (propressSpans.current[2] = el)}
            style={{ width: "0%" }}
            data-width="95%"
          ></span>
        </div>
        <div className="flex-between ">
          <h3>Lap bag</h3>
          <span className="ratio">85%</span>
        </div>
        <div className="progress">
          <span
            ref={(el) => (propressSpans.current[3] = el)}
            style={{ width: "0%" }}
            data-width="85%"
          ></span>
        </div>
      </div>
    </div>
    
    </>

  );
}

export default SalesRatio;
