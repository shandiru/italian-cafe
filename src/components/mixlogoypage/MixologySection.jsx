// src/components/MixologySection.jsx

import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function MixologySection() {
  return (
    <>
      {/* Floating Social Icons (ALWAYS visible) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        <a
          href="#"
          className="bg-orange-600 text-black w-10 h-10 flex items-center justify-center rounded-sm hover:bg-orange-500 transition"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="bg-orange-600 text-black w-10 h-10 flex items-center justify-center rounded-sm hover:bg-orange-500 transition"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="#"
          className="bg-orange-600 text-black w-10 h-10 flex items-center justify-center rounded-sm hover:bg-orange-500 transition"
        >
          <FaEnvelope size={18} />
        </a>
      </div>

      {/* Section Content */}
      <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <h6 className="uppercase text-orange-600 font-semibold tracking-widest mb-4 text-sm">
            Mixology
          </h6>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            ENJOY THE
            <br />
            EXPERIENCE
          </h1>

          {/* Description */}
          <p className="text-base text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit ipsum ac rhoncus vehicula. Curabitur ac nibh lorem.
            Pellentesque blandit non nisi rutrum sollicitudin. interdum nunc sit
            amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur
            sit lorem ipuset.
          </p>
        </div>
      </section>
    </>
  );
}
