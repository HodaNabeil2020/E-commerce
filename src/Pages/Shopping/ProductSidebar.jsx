import FilterCategory from "./FilterCategory";
import FilterColor from "./FilterColor";
import FilterPrand from "./FilterPrand";
import FilterPrice from "./FilterPrice";
import FilterSize from "./FilterSize";

function ProductSidebar({
  setCategory,
  category,
  filteredProducts,
  setColor,
  color,
  size,
  setSize,
  prand,
  setPrand,
  changePrice,
  setChangePrice,
  setMaxPrice,
  setMinPrice,
  minPrice,
  maxPrice,
  mobileFilterItem,
}) {
  return (
    <div
      className={`products-sidebar h-[95vh] bg-[#ddc2ab52] p-[10px] 
    
    ${mobileFilterItem === false ? " " : "show"} `}
    >
      <div>
        <h3 className=" mb-[10px] ml-[10px] text-dark">Filter</h3>
        <FilterCategory
          category={category}
          setCategory={setCategory}
          filteredProducts={filteredProducts}
        />
      </div>
      <div className="my-[15px]">
        <h3 className="mb-[10px]  ml-[10px] text-dark">Price</h3>
        <FilterPrice
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>

      <div className="my-[15px]">
        <h3 className=" text-dark p[10px] my-[10px]">Colors</h3>
        <FilterColor setColor={setColor} color={color} />
      </div>
      <div className="my-[15px]">
        <h3 className=" text-dark p[10px] my-[10px]">Sizes</h3>
        <FilterSize size={size} setSize={setSize} />
      </div>
      <div className="my-[15px]">
        <h3 className=" text-dark p[10px] my-[10px]">Prand</h3>
        <FilterPrand prand={prand} setPrand={setPrand} />
      </div>
    </div>
  );
}

export default ProductSidebar;
