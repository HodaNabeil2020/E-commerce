import { useState } from "react";
import Slider from "react-slider";

function FilterPrice({ minPrice, setMinPrice, setMaxPrice, maxPrice }) {
  const MIN = 0;
  const MAX = 500;
  const [values, setValues] = useState([MIN, MAX]);

  const handleChange = (newValues) => {
    setValues(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left:`${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
          width: `${((values[1] - values[0] ) / (MAX - MIN)) * 100}%`,
          height: "3px",
          backgroundColor: "#db794a",
          zIndex: 1,
          opacity: 0.5,
        }}
      ></div>
      <Slider
        className="slider-price"
        value={values}
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <small className="mt-[12px] block text-dark" >  Range: {values[0]} - {values[1]}</small>
    </div>
  );
}

export default FilterPrice;
