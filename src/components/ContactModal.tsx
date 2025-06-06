"use client";

import React, { useState } from "react";
import { send } from "emailjs-com";

interface ContactModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    send(
      "service_eohwycd", //
      "template_vpt2a2c", //
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "x1QGZTqBsH3vNtKQ3" //
    )
      .then(() => {
        // setShowPopup(true);
        onSuccess();
        // setForm({ name: "", email: "", message: "" });
        // setTimeout(() => setShowPopup(false), 6000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err?.text || err);
        alert("Something went wrong. Please try again!");
      });
  };

  return (
    // Form Wrapping
    <div className="fixed bg-white border border-gray-800 shadow-lg z-50 right-0 w-[390px]">
      {/* Actual Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow-xl text-black  max-w-md mx-auto pb-5"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-[#000000] hover:scale-120 text-lg  font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Let’s Talk</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A0A0A)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A0A0A)]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A0A0A)]"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-md hover:scale-105 mx-auto focus:ring-[#0A0A0A] transition"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* Success Popup */}
      {/* {showPopup && (
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-8 rounded-lg z-50 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You</h2>
        <p className="text-gray-600">
        I’ll get back to you within 24 hours—your thoughts are important to me!
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Close
        </button>
        </div>
        </div>
    
      )} */}
    </div>
  );
};

export default ContactModal;
