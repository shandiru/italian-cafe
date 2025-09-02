import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "These are solidly high-end cocktail bar worthy drinks that happen to be affordable",
    name: "Mary Smith",
    title: "Cocktail Expert",
  },
  {
    text: "Amazing cocktails with fruit margarita from a fancy bar, it has its own place in the cocktail kingdom.",
    name: "John Doe",
    title: "Drinks Reviewer",
  },
  {
    text: "When you taste their cocktails, that's when you know you've just had a cocktail crafted by a master mixologist!",
    name: "Cocktail Magazine",
    title: "Reviewer",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="relative w-full min-h-[500px] bg-black text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/glass-cocktail-black-table.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top-left quote mark */}
      <div className="absolute top-3 left-3 text-orange-600 text-6xl font-bold z-20 leading-none">
        &ldquo;
      </div>
      {/* Bottom-right quote mark */}
      <div className="absolute bottom-3 right-3 text-orange-600 text-6xl font-bold z-20 leading-none">
        &rdquo;
      </div>

      {/* Carousel content */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 py-20 text-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          loop
          slidesPerView={1}
          spaceBetween={30}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <p className="text-xl md:text-2xl italic font-light mb-6 max-w-3xl mx-auto leading-relaxed">
                {item.text}
              </p>
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-300">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
