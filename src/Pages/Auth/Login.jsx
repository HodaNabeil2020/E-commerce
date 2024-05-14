import { useState } from "react";
import Header from "../../components/Header/Header";


import "./account.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  
  return (
    <div className=" page-account  login   bg-light  h-[100vh]">
      <Header schangebackground={"#DDC2AB"}></Header>

      <div className="container relative  pt-[200px]">
        <form
          className="  bg-second-color sm:p-[40px] 
         w-[80%]  p-[20px]  sm:w-[400px]  element-center-flex   flex-col  m-auto "
        >
          <input
            className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
            outline-none  border-b-[1px] 
                        border-[#f8f2eeb8]     text-[15px]   w-[100%]"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" mb-[10px]   md:mb-[15px] py-[8px] md:py-[10px] px-[14px]  bg-transparent 
    outline-none  border-b-[1px] 
                border-[#f8f2eeb8]   text-[15px]   w-[100%]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value={"Send"}
            className=" btn mb-[20px] bg-[#f8f2EE] text-sm  sm:text-[16px] text-[#353431] 
       w-[100px]  cursor-pointer  sm:w-[160px] block  py-[8px] sm:py-[10px] px-[15px] "
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
