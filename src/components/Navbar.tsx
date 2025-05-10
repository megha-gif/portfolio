"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Logo.png";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import menuicon from "@/images/menu.png";
import menuclose from "@/images/menu-close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const onClose = () => setIsThankYouOpen(false);
  const [menu, setMenuValue] = useState(false);
  const closeMenu = () => setMenuValue(false);
  return (
    // Navbar
    <>
      <nav className="backdrop-blur-lg fixed top-0 left-0 z-50 w-full bg-transparent">
        {/* Wrapping Div */}
        <div className="max-w-7xl flex items-center justify-between px-3 mx-auto text-white">
          {/* Logo */}
          <Image src={Logo} alt="logo" width={150} height={150} />
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-7 text-[18px]">
            <ul className="flex space-x-5 font-poppins">
              <Link href="#howiwork">
                <span className="hover:text-[#CCCCCC]">How I Work</span>
              </Link>
              <Link href="#mywork">
                <span className="hover:text-[#CCCCCC]">My Work</span>
              </Link>
              <Link href="#contact">
                <span className="hover:text-[#CCCCCC]">Contact</span>
              </Link>
            </ul>
            <button
              onClick={() => setIsOpen(true)}
              className="p-1.5 px-3 rounded-[3px] text-[black] bg-[white] font-overpass font-medium hover:border-[white] hover:border-1 hover:bg-[#F7F7F7] hover:text-black hover:scale-104"
            >
              {`Let's Talk`}
            </button>
          </div>

          {/* Hamburger Mobile Menu Btn*/}
          <button
            onClick={() => {
              setMenuValue(!menu);
            }}
            className="focus:outline-none md:hidden"
          >
            {menu ? (
              <Image
                src={menuclose}
                alt="Menu Close Icon"
                width={40}
                height={40}
              />
            ) : (
              <Image src={menuicon} alt="Menu Icon" width={40} height={40} />
            )}
          </button>
          {/* Mobile Menu */}
          {menu && (
            <div className="pt-5 pb-5 font-poppins md:hidden top-full absolute left-0 flex flex-col items-center justify-center w-full mx-auto space-y-5 bg-black">
              <Link href="#mywork">
                <button
                  onClick={closeMenu}
                  className="text-[19px] text-[black] p-5 px-[112px] rounded-[2px] bg-[#FFFFFF] hover:bg-[#F7F7F7] hover:scale-104"
                >
                  My Work
                </button>
              </Link>
              <Link href="#contact">
                <button
                  onClick={closeMenu}
                  className="text-[19px] text-[black] p-5 px-[100px] rounded-[2px] bg-[#FFFFFF] hover:bg-[#F7F7F7] hover:scale-104"
                >
                  Contact Us
                </button>
              </Link>
              <Link href="#howiwork">
                <button
                  onClick={closeMenu}
                  className="text-[19px] text-[black] p-5 px-[100px] rounded-[2px] bg-[#FFFFFF] hover:bg-[#F7F7F7] hover:scale-104"
                >
                  How I Work
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      {isOpen && (
        <ContactModal
          onClose={() => setIsOpen(false)}
          onSuccess={() => setIsThankYouOpen(true)}
        />
      )}

      {isThankYouOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded-lg z-50 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Thank You
            </h2>
            <p className="text-gray-600">
              I’ll get back to you within 24 hours—your thoughts are important
              to me!
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
