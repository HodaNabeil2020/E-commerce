import { useState } from "react";
import { Link } from "react-router-dom";


import "./account.css"

function Register() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("")
  const [passwordConfirmation ,setPasswordConfirmation] = useState("")
  const [emailError,setEmailError] = useState("")

  
  const [accept,setAccept] =useState(false)

  function submite(e) {
    let sendData = false
    e.preventDefault();
    setAccept(true)

    if(  name === "" ||password.length < 6 ) {
      sendData = false
    }else sendData = true


    // try{
    //   if(sendDate) {
    //     // sendData
    //       let res = await axios.post("", {
    //       name: name,
    //       email: email,
    //       password: password,
    //     })
    //       if (res.status === 200) {
    //         window.localStorage.setItem("email", email);
    //         window.location.pathname='/'
    //       }
    //   }
    // } catch (error) {
    //   setEmailError(error.response.status)
    // }
  }
  return (
    <div className=" container pt-[100px] pb-[50px] ">
      <div
        className=" flex flex-wrap md:flex-nowrap
          w-[90%] m-auto p-[30px] relative  bg-second-color 
       flex-between "
      >
        <div className="  sm:mb-[800px]  md:mb-0 relative w-[100%] md:w-[50%]">
          <h6 className=" font-2 text-dark  mb-[60px]"> Luxury Line</h6>

          <div className=" text-dark ">
            <h2 className="text-[26px] sm:text-[35px] md:text-[40px] font-2 mb-0">
              Hello there{" "}
            </h2>
            <span className=" text-[14px]  sm:text-[16px] relative top-[-10px]">
              You need to create an account
            </span>
          </div>

          <form onSubmit={submite}>
            <input
              className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
            outline-none  border-b-[1px] 
                        border-[#f8f2eeb8]     text-[15px]   w-[100%]"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
                {
                  name === "" && accept && <p className="error ">Username required</p> 
                }
            <input
              className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
            outline-none  border-b-[1px] 
                        border-[#f8f2eeb8]     text-[15px]   w-[100%]"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
            outline-none  border-b-[1px] 
                        border-[#f8f2eeb8]   text-[15px]   w-[100%]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              
            />
            
            {
                  password.length < 6 &&accept && <p className="error">
                    he number of letters is not less than 6 </p>
                }
            <input
              className=" mb-[10px]   md:mb-[20px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
            outline-none  border-b-[1px] 
                        border-[#f8f2eeb8]     text-[15px]   w-[100%]"
              type="password"
              placeholder="Repeat Password"
              value={passwordConfirmation}
              onChange={(e)=>setPasswordConfirmation(e.target.value)}

            />

            <input type="submit" value={"Send"}
              className=" btn mb-[20px] bg-[#f8f2EE] text-sm  sm:text-[16px] text-[#353431] 
               w-[100px]  cursor-pointer  sm:w-[160px] block  py-[8px] sm:py-[10px] px-[15px] "
            >
            
            </input>
          </form>
          <small className=" text-dark">
            You already have an account?
            <Link to="/login" className="  font-bold">
              Login in
            </Link>
          </small>
        </div>

        <div
          className="  imge   w-[100%]  md:w-[40%] absolute  bottom-0  md:top-0  
       h-[60%]  md:h-[100%]
      "
        >
          <img
            className=" object-cover hidden sm:block sm:w-[100%] h-[100%]"
            src={require(`../../IMg/story_right.jpg`)}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
