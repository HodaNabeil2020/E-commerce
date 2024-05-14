import Header from "../../components/Header/Header"


import { useEffect, useState } from "react"


import "./style/landingHome.css"

function LandingHome() {
  const [currentImg,setCurrentImg]= useState(0)



  useEffect(()=> {
    const timer =setTimeout(()=> {
      if(currentImg === 2) {
          setCurrentImg(0)
      }else {
        setCurrentImg(currentImg + 1)
      }

    },4000)

    return ()=>clearTimeout(timer)
  },[currentImg])
  const elmentsSlider = [
    {
      url:"/Img/sliderimg-1-md.jpg",
      title:"Laptop bags",
      des:"Our Leather Bags Blend Style and Utility in Perfect Harmony ",
    },
    {
      url:"/Img/slider-1-md.jpg",
      title:"Duffle Bags",
      des:"Our Leather Bags Blend Style and Utility in Perfect Harmony ",
    },
    {
      url:"/Img/img-slider-3.jpg",
      title:"Backpacks",
      des:"Our Leather Bags Blend Style and Utility in Perfect Harmony ",
    }
  ]

  const bgImagStyle ={
   backgroundImage:`url(${elmentsSlider[currentImg].url})`,
    height:"100%",
    backgroundPosition:"center",
    backgroundSize:"cover",
    transition:"1s",
  }

  const goToNext = (currentIndexImg)=> {
    setCurrentImg(currentIndexImg)
  }
  return (
    <div className=" h-[100vh] relative">
      <div 
      className=" relative overley "
      style={bgImagStyle}
      >
      </div>
      <div className="header-slider ">
        <Header schangebackground={" transparent "} />
      </div>
      <div className=" absolute element-center-transform">
          <h1 
            className=" active-color text-center font-2 
            font-bold text-[30px] sm:text-[40px] 
            md:text-[50px] mb-[10px] tracking-[2px] ">
              {elmentsSlider[currentImg].title}   
          </h1>
          <p 
            className=" 
            color-light 
             text-[14px]
             sm:text-[18px]
             md:text-[20px] 
             text-center">
              {elmentsSlider[currentImg].des}
          </p>
        </div>
        <div className="   container-balls">
            {
              elmentsSlider.map((imageSlide,currentIndexImg) => {
              return  (
                <div 
                  className={`${currentImg === currentIndexImg ? "active":" "}`}
                  key={currentIndexImg} onClick={()=> {
                  goToNext(currentIndexImg)
                }}>

                </div>
              )
              })
            }
          </div>
    </div>
  )
}

export default LandingHome
