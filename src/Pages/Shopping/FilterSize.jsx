



function FilterSize({size,setSize}) {

  const onChangeSizes= (e) => {
    setSize(e.target.id);
  };


  return (
    <div className="filter-category">

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="small"

          onChange={onChangeSizes}
        />
        <label htmlFor="small" className="text-[15px] md:text-[16px]">small</label>
      </div>
      

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="medium"
          onChange={onChangeSizes}
        />
        <label htmlFor="medium" className="text-[15px] md:text-[16px]">medium</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="large"
          onChange={onChangeSizes}
        />
        <label htmlFor="large" className="text-[15px] md:text-[16px]">large</label>
      </div>
    </div>
  );
}

export default FilterSize
