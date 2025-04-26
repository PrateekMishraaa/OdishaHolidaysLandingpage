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

  // Animation for mobile menu
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
    { name: "Attractions", href: "/attractions" },
    { name: "Destinations", href: "#destinations" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
    { name: "Book Now", href: "#book", highlight: true }
  ];

  return (
    <header className="w-full py-4 px-4 shadow-md bg-white" ref={container}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="nav-item flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 md:h-10 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-item font-serif font-semibold transition-colors ${
                  item.highlight 
                    ? "text-white bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded" 
                    : "text-blue-700 hover:text-blue-900 hover:underline transition"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Temple Icon */}
            <div className="nav-item ml-2">
              <GiByzantinTemple className="h-8 w-8 text-[#964B00] cursor-pointer hover:text-[#7B3F00] transition" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="nav-item md:hidden text-blue-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <IoMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={menuRef} 
          className={`md:hidden overflow-hidden opacity-0 h-0`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-serif font-semibold py-2 ${
                  item.highlight 
                    ? "text-white bg-blue-700 rounded text-center" 
                    : "text-blue-700 border-b border-gray-200"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Temple Icon - Mobile */}
            <div className="flex justify-center py-2">
              <GiByzantinTemple className="h-8 w-8 text-[#964B00]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;