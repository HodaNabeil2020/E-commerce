import "./checkout.css";

function LeftCheckout() {
  return (
    <div>
      <div>
        <h3 className=" text-[20px]  text-dark mb-[20px] capitalize">
          Billing &amp; shipping{" "}
        </h3>

        <div className=" grid grid-cols-2 gap-x-[40px]">
          <div>
            <label htmlFor="name">
              {" "}
              First name <span>*</span>{" "}
            </label>
            <input type="text" id="name" placeholder=" First Name " />
          </div>
          <div>
            <label htmlFor="lastname">
              {" "}
              Last name <span>*</span>
            </label>
            <input type="text" id="lastname" placeholder=" Last Name" />
          </div>
        </div>
        <div>
          <label htmlFor="phone">
            {" "}
            Phone <span>*</span>
          </label>
          <input
            required
            type="number"
            id="phone"
            placeholder="Phone number required"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input id="email" type="email" placeholder="Email " />
        </div>

        <div>
          <label htmlFor="">
            Company name (optional) <span>*</span>
          </label>
          <input type="text" placeholder="name... " />
        </div>
        <div>
          <h4 className=" text-dark my-[10px]">
            Country / Region <span>*</span>
          </h4>
          <h5 className=" text-dark my-[10px]">Egypt</h5>
        </div>

        <div>
          <label htmlFor="">
            Street Number <span>*</span>
          </label>
          <div className=" grid grid-cols-2 gap-x-[20px]">
            <input type="text" />
            <input type="text" placeholder="Address information" />
          </div>
        </div>

        <div>
          <label className=" text-dark my-[10px] "> State (optional)</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">
            City <span>*</span>
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""> Postcode (optional)</label>
          <input type="text" />
        </div>
        <div className=" flex  box-checkbox  items-center gap-x-[10px]" >
          <input  type="checkbox" name="" id="news" />
          <label  htmlFor="news" className=" text-dark "> Subscribe to our newsletter</label>
        </div>

        <div >
          <h4 className="mb-[10px] text-dark " > Order notes (optional)</h4>
          <textarea  placeholder="Notes about your order, e.g. special notes for delivery" ></textarea>
        </div>
      </div>
    </div>
  );
}

export default LeftCheckout;
