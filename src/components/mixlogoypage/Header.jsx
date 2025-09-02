// src/components/Header.jsx

import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full flex h-20">
      {/* Left Sidebar with Menu */}
      <div className="bg-[#783b05] w-[240px] flex items-center justify-start px-6">
        <button className="flex items-center gap-3 text-white text-base font-semibold uppercase tracking-wide">
          <FaBars className="text-white text-lg" />
          Menu
        </button>
      </div>

      {/* Center Logo Area */}
      <div className="bg-black flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl md:text-3xl tracking-wide">
            MIXOLOGY
          </h1>
          <p className="text-gray-400 text-xs tracking-widest mt-1">
            EST 2010
          </p>
        </div>
      </div>
    </header>
  );
}
