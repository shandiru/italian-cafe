"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  FaStar,
  FaCocktail,
  FaGlassCheers,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    title: "Premium Ingredients",
    description:
      "We source only the finest spirits, fresh herbs, and artisanal mixers to create exceptional cocktails that tantalize your taste buds.",
    icon: <FaStar className="text-white w-6 h-6" />,
    color: "bg-emerald-600",
  },
  {
    title: "Expert Mixology",
    description:
      "Our skilled bartenders craft each drink with precision and passion, balancing flavors to create the perfect cocktail experience.",
    icon: <FaCocktail className="text-white w-6 h-6" />,
    color: "bg-teal-600",
  },
  {
    title: "Perfect Atmosphere",
    description:
      "Enjoy your cocktails in our intimate setting with soft lighting, comfortable seating, and the perfect ambiance for any occasion.",
    icon: <FaGlassCheers className="text-white w-6 h-6" />,
    color: "bg-emerald-500",
  },
];

const images = [
  "/cocktail-1.jpg",
  "/cocktail-2.jpg",
  "/cocktail-3.jpg",
  "/cocktail-4.jpg",
  
];

const EveningCocktails = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-100 to-teal-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Evening Cocktails
          </h2>
          <p className="text-lg md:text-xl text-emerald-600 font-medium italic mb-4">
            "Sip, savour, and feel like royalty — from artisan brews to elegant nightcaps."
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As the sun sets, Le Gemelle transforms into an intimate cocktail lounge with carefully
            crafted drinks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${item.color} p-3 rounded-full`}>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Swiper with arrows and autoplay */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false, // 💡 This keeps autoplay ON after clicking arrows
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                setSwiperReady(true); // Trigger re-render so refs are available
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="w-full rounded-lg shadow-lg"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Cocktail ${i + 1}`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <button
              ref={prevRef}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-emerald-600 rounded-full p-2 shadow-md hover:bg-emerald-100 z-10"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-emerald-600 rounded-full p-2 shadow-md hover:bg-emerald-100 z-10"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveningCocktails;
