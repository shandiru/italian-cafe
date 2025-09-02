import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

const images = [
  "/male-bartender-is-making-cocktail.jpg",
  "/barman-is-making-cocktail-at-night-club-.jpg",
  
];

export default function SidebarSplitSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 bg-black text-white flex flex-col justify-center items-center gap-12 px-6 py-12">
        {["Reservations", "About Us", "Our Menu"].map((item, idx) => (
          <div
            key={idx}
            className="w-full text-center border-b border-gray-800 pb-8"
          >
            <a
              href="#"
              className="text-2xl font-semibold hover:text-orange-500 transition duration-200"
            >
              {item}
            </a>
          </div>
        ))}
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-2/3 h-full">
        <img
          src={images[currentImage]}
          alt="Bartender"
          className="w-full h-[300px] md:h-full object-cover transition-opacity duration-1000 ease-in-out"
        />

        {/* Floating Social Icons */}
        <div className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
          {[FaFacebookF, FaTwitter, FaEnvelope].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-orange-600 w-10 h-10 text-black rounded-sm flex items-center justify-center hover:bg-orange-500 transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
