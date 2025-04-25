import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/logo.jpg";
import { GiByzantinTemple } from "react-icons/gi";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".box",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ".boxx",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, { scope: container });

  return (
    <>
      <header className='h-20 w-full relative' ref={container}>
        {/* Logo */}
        <div className='box absolute left-1/2 -translate-x-1/2 h-full w-full sm:w-[40%] cursor-pointer'>
          <img
            src={Logo}
            alt="Logo"
            className='h-full w-full object-contain p-2 sm:p-0'
          />
        </div>

        {/* Icon - hidden on mobile */}
        <div className='boxx absolute top-2 left-[65%] sm:left-[85%] h-10 w-10 sm:h-14 sm:w-[10%] hidden sm:block'>
          <GiByzantinTemple className='h-full w-full text-[#964B00] cursor-pointer hover:text-[#7B3F00] transition' />
        </div>
      </header>
    </>
  );
};

export default Navbar;
