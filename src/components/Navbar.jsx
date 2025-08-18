import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../style";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`
        ${styles.paddingX} 
        w-full flex items-center py-3 fixed top-0 z-20 
        ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between max-w-screen-2xl mx-auto items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <h1 className="paragraphFont text-[24px] md:text-left text-center pink-text-gradient my-2 uppercase">
            .Srmcll
          </h1>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`paragraphFont text-[16px] font-[400] cursor-pointer transition-colors duration-300 ${
                isActive("/") ? "text-[#DF6BBE] font-semibold" : "text-[#7E66F8] hover:text-[#DF6BBE]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sarah"
              onClick={() => window.scrollTo(0, 0)}
              className={`paragraphFont text-[16px] font-[400] cursor-pointer transition-colors duration-300 ${
                isActive("/sarah") ? "text-[#DF6BBE] font-semibold" : "text-[#7E66F8] hover:text-[#DF6BBE]"
              }`}
            >
              About me
            </Link>
          </li>
        </ul>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`
            ${styles.paddingX} absolute top-0 right-0 bg-[#03000C] sm:hidden py-5 min-w-[100%] z-10
            ${!toggle ? "hidden" : "flex"}
          `}
        >
          <img
            src={closeIcon}
            alt="close"
            onClick={() => setToggle(false)}
            className="absolute right-6 top-9 w-7 h-7 object-contain cursor-pointer"
          />
          <ul className="list-none h-[100vh] flex items-center justify-center flex-1 flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setToggle(false);
                  window.scrollTo(0, 0);
                }}
                className={`paragraphFont text-[16px] font-[400] cursor-pointer transition-colors duration-300 ${
                  isActive("/") ? "text-[#DF6BBE] font-semibold" : "text-white hover:text-[#DF6BBE]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sarah"
                onClick={() => {
                  setToggle(false);
                  window.scrollTo(0, 0);
                }}
                className={`paragraphFont text-[16px] font-[400] cursor-pointer transition-colors duration-300 ${
                  isActive("/sarah") ? "text-[#DF6BBE] font-semibold" : "text-white hover:text-[#DF6BBE]"
                }`}
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
