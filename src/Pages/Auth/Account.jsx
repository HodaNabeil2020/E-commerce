import Header from "../../components/Header/Header";
import Register from "./Register";

import "./account.css";
function Account() {
  return (
    <div className="bg-light page-account   ">
      <Header schangebackground={"#DDC2AB"}></Header>
      <Register />
    </div>
  );
}

export default Account;
