import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./shoppingpage.css";

function SortFilter({ sortItem, setSortItem , mobileSortFilter }) {
  const [select, setSelect] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelect(option);
    setIsDropdownOpen(false);
    const sort = option.split(" ");
    setSortItem(sort[0]);
  };

  return (
    <div className=" sort-filter-section flex-between container p-[10px]">
      <div className=" links-page">
        <Link to={"/"} className="text-dark md:ml-[40px]">
          Home
        </Link>
        <span className="mx-[6px] text-[18px]">&gt;</span>
        <Link to={"products"} className="text-dark">
          Shopping
        </Link>
      </div>

      <div className={`select-menu relative ${mobileSortFilter === false ? " " : " show "} `} ref={dropdownRef}>
        <div
          className={`select-btn  `}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p  className=" text-[15px] md:text-[16px]"> Sort by price: {select}</p>
          <i
            className={`fa-solid fa-chevron-down ${
              isDropdownOpen ? "rotate-[-180deg]" : ""
            }`}
          />
        </div>

        {isDropdownOpen && (
          <ul className="options">
            <li onClick={() => handleOptionClick("not sort")}>
              <i className="   mr-[5px] fa-solid fa-arrows-rotate"></i>not sort
            </li>
            <li onClick={() => handleOptionClick("low to high")}>
              <i className="  mr-[5px]  fa-solid fa-arrow-down-wide-short"></i>{" "}
              Low to high
            </li>
            <li onClick={() => handleOptionClick("high to low")}>
              <i className="   mr-[5px]   fa-solid fa-arrow-up-short-wide"></i>{" "}
              High to low
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortFilter;
