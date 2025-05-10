"use client";

import { useRef, useState } from "react";
import { sendForm } from "emailjs-com";
import Image from "next/image";
import icon1 from "@/images/availability-icon.png";
import icon2 from "@/images/phone-icon.png";
import icon3 from "@/images/profile-icon.png";
import twitter from "@/images/social4.jpg";
import React from "react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    sendForm(
      "service_eohwycd",
      "template_vpt2a2c",
      form.current,
      "x1QGZTqBsH3vNtKQ3"
    )
      .then(() => {
        setSuccess(true);
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setSuccess(false);
      });
  };

  const handleEmail = () => {
    window.location.href = "mailto:varshini173@gmail.com";
  };

  return (
    <div
      id="contact"
      className="bg-black relative overflow-clip min-h-screen w-full"
    >
      {/* Wrapping Div */}
      <div className="container mx-auto text-[#FFFFFF] overflow-clip flex flex-col justify-center items-center lg:pb-30 md:pb-10 pb-20">
        {/* Title */}
        <h1 className="font-inria md:text-[40px] text-[25px] text-[#FFFFFF] mt-25 mb-2 font-light md:mt-30">
          {`"Let's Build Something Together"`}
        </h1>
        {/* Subtitle */}
        <p className="font-inter text-[#A1A1A1] md:text-[18px] text-[16px] px-[35px] md:px-0 text-center">
          Have an idea or project? Just send me a message
        </p>

        <div className="flex flex-col  lg:flex-row md:flex-col justify-center items-center lg:gap-50 md:gap-20 mt-[75px]">
          {/* Left */}
          <div className="flex flex-col gap-y-3">
            <h1 className="font-inter md:text-[28px] text-[23px] text-center text-[#C0C0C0]">{`"Tell Me What You're Dreaming of"`}</h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="ml-5 mt-8 space-y-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-[380px] p-5 bg-[#050505] rounded-2 text-[#C0C0C0] placeholder:text-[#C0C0C0]"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-[380px] p-5 bg-[#050505] rounded-2 text-[#C0C0C0] block placeholder:text-[#C0C0C0]"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-[380px] p-5 bg-[#050505] rounded-2 text-[#C0C0C0] block placeholder:text-[#C0C0C0]"
              />
              <button
                type="submit"
                className="bg-gray-300 text-black font-medium py-2 px-6 rounded-md hover:bg-gray-400 transition ml-35"
              >
                Submit
              </button>
              {success && (
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
                      onClick={() => setSuccess(false)}
                      className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right*/}
          <div className="flex flex-col gap-y-6 mt-11 justify-center">
            <h1 className="font-inter text-[28px] text-[#D9D9D9] text-center">{`Let’s connect`}</h1>
            <p
              onClick={handleEmail}
              className="text-[#C0C0C0] flex gap-5 w-[380px] p-5 bg-[#050505] rounded-2 items-center hover:scale-104 hover:cursor-pointer"
            >
              <span>
                <Image
                  src={icon3}
                  alt="profile icon"
                  width={30}
                  height={5}
                  className="mt-[4px] "
                />
              </span>
              <span className="mt-2">Email - Varshini173gmail.com</span>
            </p>
            <p className="text-[#C0C0C0] flex gap-4 w-[380px] p-5 bg-[#050505] rounded-2 items-center hover:cursor-pointer">
              <span>
                <Image
                  src={icon1}
                  alt="available icon"
                  width={25}
                  height={5}
                  className="mt-[4px]"
                />
              </span>
              <span className="mt-1">
                Currently accepting freelance projects
              </span>
            </p>
            <p className="text-[#C0C0C0] flex gap-12 w-[380px] p-5 bg-[#050505] rounded-2 items-center  hover:cursor-pointer">
              <span>
                <Image
                  src={icon2}
                  alt="contact icon"
                  width={30}
                  height={5}
                  className="mt-[4px] "
                />
              </span>
              <span className="mt-1">Contact: +91 70220 08102</span>
            </p>

            <div className="w-[380px] p-5 bg-[#050505] rounded-2">
              <p className="text-[#C0C0C0] text-center">🔗Connect with me</p>
              <div className="flex gap-5 justify-center mt-4">
                <a
                  href="https://github.com/megha-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/social-icon-1.svg"
                    alt="social link1"
                    width={30}
                    height={5}
                    className="mt-[4px]  hover:border-[#C0C0C0] hover:scale-120"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/megha-varshini-697747364/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/social-icon-2.svg"
                    alt="social link2"
                    width={25}
                    height={5}
                    className="mt-[4px] hover:scale-120"
                  />
                </a>

                <a
                  href="https://www.instagram.com/meghafrontend/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/social-icon-3.svg"
                    alt="social link3"
                    width={30}
                    height={5}
                    className="mt-[4px] hover:scale-120"
                  />
                </a>

                <a
                  href="https://x.com/meghafrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={twitter}
                    alt="social link4"
                    width={30}
                    height={5}
                    className="mt-[4px] hover:scale-120"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
