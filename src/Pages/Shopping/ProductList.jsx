import CardItem from "./CardItem";

function ProductList({ products ,mobileFilterItem }) {


  return (
    <div className={`product-list  grid  grid-cols-2  md:grid-cols-3     gap-[20px] 
     ${mobileFilterItem === false ? " " : " show "}`}>
      {products.map((product, index) => {
        return (
            <CardItem product={product}  key={index}/>
        );
      })}
    </div>
  );
}

export default ProductList;
