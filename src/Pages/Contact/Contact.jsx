import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import "./contact.css";
function Contact() {
  return (
    <div className="contact-page ">
      <Header schangebackground={"#DDC2AB"}></Header>

      <div className=" g-light ">
        <div
          className=" container relative
             flex   flex-wrap-reverse   md:flex-nowrap justify-between items-center gap-[30px]
             pt-[100px] 
        "
        >
          <div className=" w-[100%] md:w-[49%]">
            <img
              className=" object-cover rounded-[4px] w-[100%]  h-[100vh] "
              src={require(`../../IMg/contactsmall.jpg`)}
              alt=""
            />
          </div>

          <div
            className="  w-[100%] md:w-[49%] relative   
          element-center-flex flex-col    mb-[30px]"
          >
            <h2 className=" text-dark text-[22px] font-medium   capitalize font-2">
              contact The{" "}
              <span className=" font-2  active-color">Luxury Line</span>
            </h2>
            <div className=" w-[300px] text-center text-dark my-[15px]">
              <div>
                <small className="text-second-color capitalize font-medium mr-[6px]">
                  {" "}
                  Email
                </small>
                luxury123@gmail.com
              </div>
              <div className=" my-[10px]">
                <small className="text-second-color capitalize font-medium mr-[6px]">
                  {" "}
                  Phone
                </small>
                985-456-1234
              </div>

              <div>
                <small className="text-second-color capitalize font-medium mr-[6px]">
                  {" "}
                  Address
                </small>
                55 ST, City EGYPT
              </div>
            </div>
            <button className=" p-[15px] w-[80px]  main-btn  capitalize">
              <span>shopping</span>
            </button>

            <div className=" container-icons  flex justify-between items-center gap-[20px] my-[15px] ">
              <div>
                <i className="fa-brands fa-square-facebook"></i>
              </div>
              <div>
                <i className="   fa-brands fa-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div>
                <i className="  fa-solid fa-envelope"></i>
              </div>
            </div>

            <form action="" className=" container-form">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="/" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="/" id="email" />
              </div>
              <div>
                <label htmlFor="messge">messge</label>
                <textarea name="" id="messge"></textarea>
              </div>
              <button className=" main-btn">send</button>
            </form>
          </div>
        </div>
      </div>

      <div className=" mt-[30px]">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Contact;
