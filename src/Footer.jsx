import React from "react";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-[374px] bg-gradient-to-t from-[#600606] to-[#c60c0c] relative text-yellow-400 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-4 gap-x-12 items-center">
        {/* About Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4 tracking-wide">About Us</h3>
          <ul className="text-white space-y-3 text-lg tracking-wide">
            <li>Loan Products</li>
            <li>Interest Rates</li>
            <li>FAQs</li>
            <li>Loan Calculator</li>
          </ul>
        </div>

        {/* Loan Processor Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4 tracking-wide">Loan Processor</h3>
          <ul className="text-white space-y-3 text-lg tracking-wide">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Responsible Lending Policy</li>
            <li>Contact Support</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4 tracking-wide">Contact Us</h3>
          <p className="text-white text-lg tracking-wide">Email: blinkerloans@gmail.com</p>
          <p className="text-white text-lg tracking-wide">Phone: +91 XXXXXXXXXX</p>
          <p className="font-bold text-lg mt-4 tracking-wide">Social Media</p>
          <div className="flex space-x-4 mt-2 text-yellow-400 text-3xl">
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* Flash Footer Image */}
        <div className="flex justify-end">
          <img
            src="/flash-footer2.png"
            alt="Flash Footer"
            className="w-[228px] h-[348px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
