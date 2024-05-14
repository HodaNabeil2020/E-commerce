import { useDispatch, useSelector } from "react-redux";

function RigthCheckOut() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity - product.discount;
    return acc;
  }, 0);

  const BeforeDiscount = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className=" rigth-checkout relative pb-[110px] md:pb-[0px] top-[100px] ">
      <div>
        <div className="flex-between">
          <h4 className=" text-dark font-medium">Subtotal </h4>
          <span className=" font-bold">${BeforeDiscount}</span>
        </div>
        <div className="flex-between">
          <h4 className="text-dark font-medium">Cart Total Discount</h4>
          <span className=" font-bold">${totalPrice}</span>
        </div>
        <div className="flex-between">
          <h4 className=" text-dark font-medium">free delivery</h4>
          <span className=" font-bold">$0.0</span>
        </div>
      </div>
      <div className=" form-group-radio flex items-start gap-x-[10px]">
        <input type="radio" name="payingoff" id="Cash" />
        <label htmlFor="Cash">Cash on delivery</label>
      </div>

      <div className=" form-group-radio flex items-start gap-x-[10px]">
        <input type="radio" name="payingoff" id="valU" />
        <label htmlFor="valU"> valU</label>
        <div  >
        </div>
      </div>

      <div className=" form-group-radio flex items-start  gap-x-[20px]">
        <input type="radio" name="payingoff" id="card" />
        <label htmlFor="card"> Online Cards </label>
      </div>
      <div className=" box-checkbox flex items-start gap-x-[10px]">
        <input type="checkbox" name="payingoff" id="finsh" />
        <label htmlFor="finsh">
          I have read and agree to the website terms and conditions *{" "}
        </label>
      </div>

      <button type="submit"
       className=" uppercase  duration-200 transition-all bg-[#db794ad9]  hover:bg-[#db794a] color-light
          py-[10px] px-[20px] block  mb-[15px] rounded-[2px] " >
         PLACE ORDER 
         </button>

      <p className=" text-sm text-dark font-medium">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy .
      </p>
    </div>
  );
}

export default RigthCheckOut;
