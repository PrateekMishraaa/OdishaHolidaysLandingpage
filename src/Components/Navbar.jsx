import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/logo.jpg";
import { GiByzantinTemple } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  gsap.registerPlugin(useGSAP);

  const container = useRef();
  const menuRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".nav-item",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.1 }
    );
  }, { scope: container });

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, height: 0, duration: 0.3, ease: "power3.in" });
    }
  }, { scope: menuRef, dependencies: [isMenuOpen] });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Attractions", href: "/attractions" },
    {name:"Packages",href:"/packages"},
    { name: "Destinations", href: "/destinations" },
    { name: "About ", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact ", href: "/contact" },
    
  ];

  return (
    <header className="w-full py-4 px-6 md:px-10 shadow-md bg-white fixed top-0 left-0 z-50" ref={container}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="nav-item flex items-center">
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-item text-orange-600 mr-10 hover:text-blue-900 hover:underline font-serif font-semibold text-base lg:text-lg xl:text-xl transition"
            >
              {item.name}
            </a>
          ))}

          {/* Temple Icon */}
          <div className="nav-item ml-2 lg:ml-6">
            <GiByzantinTemple className="h-8 w-8 lg:h-10 lg:w-10 text-[#964B00] cursor-pointer hover:text-[#7B3F00] transition" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="nav-item md:hidden text-blue-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose className="h-8 w-8" />
          ) : (
            <IoMenu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef} 
        className="md:hidden overflow-hidden opacity-0 h-0 transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col space-y-4 pt-6 pb-6 px-4 bg-white shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-center text-blue-700 font-serif font-semibold text-lg py-2 border-b border-gray-200"
            >
              {item.name}
            </a>
          ))}

          {/* Temple Icon Mobile */}
          <div className="flex justify-center pt-4">
            <GiByzantinTemple className="h-10 w-10 text-[#964B00]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
