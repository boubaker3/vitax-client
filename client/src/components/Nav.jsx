import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import CancelIcon from '@mui/icons-material/Cancel';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-8 py-8 sm:px-16 z-10 absolute w-full ">
      <nav className="flex justify-between mx-auto max-w-[1440px]">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <div className="lg:hidden relative">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="z-20" // Set z-index of the hamburger icon
          />
          {isMenuOpen && (
            <ul className="fixed right-0 top-0 bg-black w-30 z-20 h-full"> {/* Set z-index of the menu */}
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="block py-6 px-6 text-white"
                    href={link.href}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <CancelIcon onClick={toggleMenu} color="primary" sx={{width:"64px",height:"64px",right:100,position:'absolute'}}/>
            </ul>
          )}
        </div>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden items-center">
          {navLinks.map((link, index) => (
            <a
              className="font-montserrat text-lg leading-normal text-slate-500 "
              key={index}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
