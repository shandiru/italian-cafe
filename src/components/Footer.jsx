import React from 'react';

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

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Le Gemelle Cafe & Deli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
