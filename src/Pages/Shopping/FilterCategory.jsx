import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterCategory({ setCategory }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  
  const getItemCountForCategory = (category) => {
    return products.filter((product) => product.category === category).length;
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <div className="filter-category">
      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="all"
          onChange={onChangeCategory}
        />
        <label htmlFor="all" className="flex justify-between items-center">
          <span className="text-[15px] md:text-[16px]" >all</span>
          <span>{products.length}</span>
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="handbag"
          onChange={onChangeCategory}
        />
        <label htmlFor="handbag"  className="flex justify-between items-center text-[15px] md:text-[16px]">
          handbag <span>{getItemCountForCategory("handbag")}</span>
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="dufflebag"
          onChange={onChangeCategory}
        />
        <label htmlFor="dufflebag"  className="flex justify-between items-center text-[15px] md:text-[16px]">
          dufflebag <span>{getItemCountForCategory("dufflebag")}</span>{" "}
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="backbag"
          onChange={onChangeCategory}
        />
        <label htmlFor="backbag"  className="flex justify-between items-center text-[15px] md:text-[16px]">
          backbag <span>{getItemCountForCategory("backbag")}</span>{" "}
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="laptop"
          onChange={onChangeCategory}
        />
        <label htmlFor="laptop"  className="flex justify-between items-center text-[15px] md:text-[16px]">
          laptop <span>{getItemCountForCategory("laptop")}</span>{" "}
        </label>
      </div>
    </div>
  );
}

export default FilterCategory;
