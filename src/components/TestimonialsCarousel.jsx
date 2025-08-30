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
      "Beautiful evening with friends at Le Gemelle. Italian cocktails, with personalised recommendations from the boss, as I'd never tried cocktails! Small snack-sized cicchetti/tapas was lovely, and the atmosphere was great. Beautiful genuine Italian cannoli too, and a small deli selection to take away, including amazing cheeses.",
    author: "Ian Maynard Smith",
  },
  {
    quote:
      "What a find! Superb proper coffee and delicious amaretto and raspberry brownie which was warmed for us. Will be back to try lunch. Staff welcoming and service prompt.",
    author: "Jonny",
  },
  {
    quote:
      "Popped into Le Gemelle to escape the rain this evening and it was lovely! Beautiful food, excellent wine and friendly service.",
    author: "Rebecca Cooke-Pytel",
  },
  {
    quote:
      "Wow, what a little gem! A little taste of Italy right in the heart of Leicester. Amazing food, incredible service and very reasonably priced for such high quality Italian food!",
    author: "Karl Hardwick",
  },
  {
    quote:
      "Fabulous evening at Le Gemelle, enjoying their new cocktail bar! Ehren the Cocktail Sommelier was outstanding, selecting and creating the perfect cocktails for us based on our likes. We accompanied our cocktails with wonderful Foccacia, Cicchetti board and finished with delicious cannoli. We can’t recommend this place enough - brilliant evening out with friends!",
    author: "Mel Sallis",
  },
  {
    quote:
      "Ate in and had toasties with the family. Best I’ve had — the Italian bread was amazing. Will definitely be visiting again soon. Thank you.",
    author: "Carina Grimsley",
  },
  {
    quote:
      "My friend and I came for lunch and shared an antipasti platter — so nice and more than enough for both of us. Great, friendly service. Sunny day so we sat in the outside area, gave perfect relaxed holiday vibes, will definitely visit soon.",
    author: "Lorraine Grimsley",
  },
  {
    quote:
      "I came here for lunch with my friend. I went for a vegetarian toastie and a caramel latte. The toastie was really nice and freshly made. The staff were friendly and the atmosphere in the cafe was nice and relaxing.",
    author: "Joe Agar",
  },
  {
    quote:
      "Had a great lunch there. Delicious toasted Italian sandwich, Italian sausage roll and a couple of Morettis. Perfect. Even bought some tasty goods from the deli to take home with me.",
    author: "Jeremy Moore",
  },
  {
    quote:
      "They are always lovely 😍, great food and great drinks 🍸 😋",
    author: "Sibel Yasharoglu",
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
