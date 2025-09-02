import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Brand Name */}
        <h3 className="font-serif text-2xl font-bold mb-4">Le Gemelle</h3>

        {/* Tagline */}
        <p className="text-gray-300 mb-4 text-lg italic">
          "Luxury without borders — café by day, cocktails by night, always unforgettable"
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/le_gemelle_leics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://web.facebook.com/p/Le-Gemelle-Leicester-61553350498542/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Le Gemelle Cafe & Deli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
