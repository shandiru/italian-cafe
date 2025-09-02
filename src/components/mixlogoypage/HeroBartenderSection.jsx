import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function HeroBartenderSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image from /public */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/barman-is-making-cocktail-at-night-club-.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Floating Social Icons */}
      <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
        {[FaFacebookF, FaTwitter, FaEnvelope].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="bg-orange-600 hover:bg-orange-500 text-black w-10 h-10 rounded-sm flex items-center justify-center transition"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Centered Heading Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Pouring Perfection
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md max-w-xl mx-auto">
            Elevate your evening with handcrafted cocktails.
          </p>
        </div>
      </div>
    </section>
  );
}
