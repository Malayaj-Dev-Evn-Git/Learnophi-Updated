import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../Assets/image/learnophi-large.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false);
    }
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between h-20 px-8 items-center">
        <img
          src={logo}
          alt="Logo"
          target="https://learnophi.com"
          className="h-12 drop-shadow-md cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("course")}>Courses</li>
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("resources")}>Resources</li>
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[60%] bg-white z-40 border-r border-gray-300 transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-200">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <ul className="uppercase p-4 font-semibold text-gray-800">
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("company")}>Courses</li>
          <li className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection("resources")}>Resources</li>
            <li className="p-4" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
