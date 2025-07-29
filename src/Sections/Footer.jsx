import React from "react";
import { images } from "../constants";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="h-[110dvh] md:h-[100dvh] w-full grid grid-rows-[1fr_1fr] bg-[#030718f3] text-[#ffffff] px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-8">
        <div className="flex  flex-col items-center md:items-start">
          <h3 className="text-[4vh] md:text-[6vh] font-black mb-4 text-[#d3965d] font-[Regular] w-full ">
            Space-furnitures
          </h3>
          <p className="text-sm text-[#424242] leading-relaxed w-[100%] md:w-[60%]">
            We are passionate creators building experiences that blend emotion,
            innovation, and design. Fueled by purpose, driven by detail.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#424242]">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#collabs" className="hover:text-white">
                Collaborations
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-[#424242] space-y-2">
            <li>Email: hello@example.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center relative gap-3">
        <img
          src={images.TextwithLogo}
          className="h-[10vh] md:h-[60%] object-center object-contain"
          alt="Text with Logo"
        />
        <div className="absolute bottom-4 left-[10%] w-[80%] text-center text-sm text-gray-400 ">
          Copyright &copy; {new Date().getFullYear()} SPACE. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
