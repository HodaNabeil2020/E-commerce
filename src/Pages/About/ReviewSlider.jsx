import React, { useEffect, useState } from "react";

function ReviewSlider() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewSlider = [
    {
      url: "/Img/client_1.jpg",
      name: "Hoda Nabeil",
      des: "High level of sophistication in dealing. Enjoy the quality",
    },
    {
      url: "/Img/client_2.jpg",
      name: "Mohmed Ahmed",
      des: "High level of sophistication in dealing. Enjoy the quality",
    },
    {
      url: "/Img/client_3.jpg",
      name: "Tark Mohmed",
      des: "High level of sophistication in dealing. Enjoy the quality",
    },
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviewSlider.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewSlider.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-main-color review-slider">
      <div className=" container  py-[50px] ">
        <div className=" w-[70%] m-auto relative rounded-[6px] p-[20px] bg-second-color">
          <div className=" flex justify-center items-center m-auto">
            <img
              className=" w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] 
               lg:w-[180px] lg:h-[180px] rounded-[50%] "
              src={reviewSlider[currentReviewIndex].url}
              alt={`Client ${currentReviewIndex + 1}`}
            />
          </div>
          <h3  className=" color-light my-[8px] font-bold font-2 tracking-[1px]">{reviewSlider[currentReviewIndex].name}</h3>
          <p  className=" text-sm sm:text-[15px]  md:text-[16px] text-dark ">{reviewSlider[currentReviewIndex].des}</p>
          <button
            className="btn-slider left   "
            onClick={prevReview}
          >
            <i className=" icon-slider  fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="btn-slider rigth  "
            onClick={nextReview}
          >
              <i className=" icon-slider  fa-solid fa-arrow-right"></i>
          </button>
  
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
