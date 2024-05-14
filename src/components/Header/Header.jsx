import { Link, NavLink } from "react-router-dom";

import "./header.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


function Header({ schangebackground }) {
  const cartNumbers= useSelector((state) => state.cart);
  const favorites = useSelector((state)=> state.favorites)

  const headerRef = useRef();
  const [openNav, setOpenNav] = useState(false);
  const [activeLinke, setActiveLinke] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.background = window.scrollY
          ? "#D39C80"
          : schangebackground;

          headerRef.current.style.color=window.scrollY?  "#f8f2EE" : "#353431" 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [schangebackground]);

  useEffect(() => {
    const handleClikOutSide = (e) => {
      if (
        openNav &&
        !e.target.closest(".nav-links") &&
        !e.target.closest(".menu-icon")
      ) {
        setOpenNav(false);
      }
    };

    window.addEventListener("click", handleClikOutSide);

    return () => {
      window.removeEventListener("click", handleClikOutSide);
    };
  }, [openNav]);
  const Links = [
    { linkname: "Home", to: "/" },
    { linkname: "Shop", to: "/products" },
    { linkname: "Offers", to: "/offer" },
    { linkname: "Contact", to: "/contact" },
    { linkname: "About", to: "/about" },
  
  ];

  function handleActiveLinke(link) {
    setActiveLinke(link);
  }
  function toggleNav() {
    setOpenNav(!openNav);
  }
  return (
    <header ref={headerRef} className="header ">
      <Link to={"/"} className="logo font-2 ">
        Luxury Line
      </Link>
      <nav>
        <ul className={`nav-links ${openNav === true ? "show" : ""}`}>
          {Links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  onClick={() => {
                    handleActiveLinke(link.linkname);
                  }}
                  to={link.to}
                  className={`nav-link ${openNav ? "show" : ""}`}
                >
                  {link.linkname}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="icon-links">
        <Link to={"/account"}>
          <i className="fa-regular fa-user"></i>
        </Link>
        <Link to={"/favorites"}>
          <div className=" relative">
            <i className="fa-regular fa-heart"></i>
            <span className="icon-number">{favorites.length}</span>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className=" relative">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="icon-number">{cartNumbers.length}</span>
          </div>
        </Link>

        <div onClick={toggleNav} className="menu-icon">
          {[1, 2, 3].map((_, index) => (
            <span
              key={index}
              className={`menu-bar ${openNav ? "active-menu" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
