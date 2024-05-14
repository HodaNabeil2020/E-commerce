import React, { useState, useEffect } from "react";

function TimerOffers() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const now = new Date();
    const sixMonthsFromNow = new Date(now);
    sixMonthsFromNow.setMonth(now.getMonth() + 6);
    sixMonthsFromNow.setHours(0, 0, 0, 0);

    const difference = sixMonthsFromNow - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="conteiner  overflow-hidden p-[50px] bg-main-color ">
      <div className=" container-offer flex justify-center items-center flex-col bg-light 
      p-[10px]  sm:p-[20px] md:p-[30px] rounded-[15px]   ">
        <h3 className=" my-[20px] font-bold 
           text-[16px] sm:text-[20px]  md:text-[25px]  active-color    tracking-[2px] font-2">
          Limited-Time Timer Offer
        </h3>
        <div className="   flex gap-x-[10px] md:gap-[20px]">
          <div className=" center-flex  flex-col">
            <h2 className=" font-[600] text-[16px] md:text-[18px]  text-dark ">
              {" "}
              {timeLeft.days}
            </h2>
            <span className=" text-dark text-sm font-normal">days</span>
          </div>
          <span className=" text-[25px]">:</span>

          <div>
            <h2 className=" font-[600]  text-[16px] md:text-[18px]  text-dark ">
              {timeLeft.hours}
            </h2>
            <span className=" text-dark text-sm font-normal">hrs</span>
          </div>

          <span className=" text-[25px]">:</span>
          <div>
            <h2 className=" font-[600]  text-[16px] md:text-[18px] text-dark ">
              {" "}
              {timeLeft.minutes}
            </h2>
            <span className=" text-dark text-sm font-normal">mins</span>
          </div>
          <span className=" text-[25px]">:</span>
          <div>
            <h2 className=" font-[600]  text-[16px] md:text-[18px]  text-dark ">
              {timeLeft.seconds}{" "}
            </h2>
            <span className=" text-dark text-sm font-normal">secs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerOffers;
