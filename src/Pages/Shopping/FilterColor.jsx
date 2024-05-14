
import "./shoppingpage.css";

function FilterColor({ setColor, color }) {
  function handleChangeColor(color) {
    setColor(color);
  }

  return (
    <div className=" filter-color   flex  gap-x-[10px] ">
      <div
        onClick={() => handleChangeColor("white")}
        className={`btn-color  white ${color === "white" && "active"} `}
      ></div>
      <div
        onClick={() => handleChangeColor("black")}
        className={`btn-color black ${color === "black" && "active"}`}
      ></div>
      <div
        onClick={() => handleChangeColor("Beige")}
        className={`btn-color Beige ${color === "Beige" && "active"}`}
      ></div>
    </div>
  );
}

export default FilterColor;
