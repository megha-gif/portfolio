"use client";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "@/components/ContactForm";
import heroimg from "@/images/hero-img.png";
import radial from "@/images/radial.png";
import Link from "next/link";

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const onClose = () => setIsThankYouOpen(false);
  return (
    // Hero Section
    <div
      id="home"
      className="bg-black relative overflow-clip min-h-screen w-full"
    >
      {/* Wrapping Div */}
      <div className="container mx-auto text-[#FFFFFF] overflow-clip flex justify-center items-center lg:gap-[250px] md:gap-[40px] mt-[150px] md:mt-[240px] lg:mt-[10px]">
        <div className="flex flex-col text-left relative pl-5 md:pl-0">
          <h1 className="font-slabo text-[45px] font-light ml-1 mb-1 md:pl-0 pl-2">
            <span className="font-overpass lg:text-[46px] md:text-[40px]">
              Hi
            </span>
            , I’m Megha{" "}
          </h1>
          <h1 className="text-[30px] font-inter leading-9 mt-1">
            Your Frontend Landing
            <span className="block">Page Specialist</span>
          </h1>
          <p className="font-inter text-[19px] mt-3">
            Every scroll, every click, every layout{" "}
            <span className="block">Planned with purpose and precision.</span>
          </p>

          <div className="flex mt-13 md:gap-9 pl-3 gap-5">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#000000] p-[8px] md:p-[10px] bg-white rounded-[8px] md:px-6 px-3 flex gap-2 md:gap-3 font-inter font-medium hover:bg-[#eeeded] hover:scale-101"
            >
              <span className="mt-1">{`Let's Collaborate`}</span>{" "}
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={20}
                height={10}
                className="mt-0.5"
              />
            </button>
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
                    I’ll get back to you within 24 hours—your thoughts are
                    important to me!
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
            <Link href="#mywork">
              <button
                className="text-[#000000] 
            p-[10px] bg-white rounded-[8px] font-poppins font-medium hover:bg-[#eeeded] hover:scale-101"
              >
                View My Work
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-col justify-center relative hidden md:inline-block">
          <Image
            src={heroimg}
            width={348}
            alt="Hero Img"
            className="mt-10 md:w-[310px]"
          />

          <div className="ml-33 md:ml-28">
            <Image src={radial} width={128} alt="Radial Gradient" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
