"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Love this café 😍 enjoyed a yummy ham toasties with delicious side salad and a decaf latte which was also excellent. Very reasonably priced with a friendly and relaxed atmosphere.",
    author: "Heather Lewin",
  },
  {
    quote:
      "A cute little Italian spot offering pastries, coffees, focaccia, pizza and arancini. Has a lovely deli area inside and nice outdoor seating. Would go again!",
    author: "Jessica Morningstar",
  },
  {
    quote:
      "Beautiful evening with friends at Le Gemelle. Italian cocktails, tapas, amazing cannoli. Great service and atmosphere. Will return!",
    author: "Ian Maynard Smith",
  },
  {
    quote:
      "Such a lovely little discovery today! Delicious food, great coffee and very friendly service. My toddler loved it too – we’ll be back! ☺️",
    author: "Caitlin Alborn",
  },
  {
    quote:
      "What a find! Superb coffee and delicious brownie. Staff were welcoming and prompt. Will be back for lunch.",
    author: "Jonny",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Le Gemelle Experience
          </h2>
          <p className="text-lg md:text-xl text-emerald-600 font-medium italic mb-4">
            "A global café and cocktail journey, crafted for those who crave luxury."
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-emerald-100 rounded-xl shadow-lg px-8 py-10 text-center">
                <FaQuoteLeft className="text-emerald-600 text-4xl mx-auto mb-6" />
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-6">"{t.quote}"</p>
                <p className="text-emerald-700 text-lg font-semibold">{t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination styling */}
        <style>{`
          .swiper-pagination-bullet {
            background-color: #ccc;
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 0 4px;
            border-radius: 9999px;
            transition: background-color 0.3s, transform 0.3s;
          }
          .swiper-pagination-bullet-active {
            background-color: #059669;
            transform: scale(1.25);
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
