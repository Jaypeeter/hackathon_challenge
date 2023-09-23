"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Hamburger from "../../../public/images/hamburger.png";
import Close from "../../../public/images/close.png";
import Image from "next/image";
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    
    <div className="flex justify-between px-6 pb-2 lg:px-24 pt-12 bg-primary items-center h-24 w-full fixed z-10">
      <h1 className="text-lg lg:text-2xl font-bold">
        get<span className="text-secondary">linked</span>
      </h1>

      <div className="hidden lg:flex space-x-40">
        <ul className="flex space-x-8">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button className="w-36 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
          Register
        </button>
      </div>
      {isMobileMenuOpen ? (
        <Image
          src={Close}
          alt="close"
          className="lg:hidden"
          onClick={toggleMobileMenuOpen}
        />
      ) : (
        <Image
          src={Hamburger}
          alt="hamburger"
          className="lg:hidden"
          onClick={toggleMobileMenuOpen}
        />
      )}
      {isMobileMenuOpen ? (
        <div className="bg-primary min-w-full h-[200px] absolute top-20 left-0 px-6 pt-6 z-10">
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
          <button className="mt-2 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
            Register
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
