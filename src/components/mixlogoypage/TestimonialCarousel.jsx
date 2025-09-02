// QuoteCarousel.jsx
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    quote:
      "Amazing cocktails with fruit margarita from a fancy bar, it has it's own place in the cocktail kingdom",
    author: "John Doe",
    role: "Drinks Reviewer",
    image: "/quotes/slide-1.jpg", // <-- put YOUR image path
  },
  {
    quote:
      "Amazing cocktails with fruit margarita from a fancy bar, it has it's own place in the cocktail kingdom",
    author: "John Doe",
    role: "Drinks Reviewer",
    image: "/quotes/slide-1.jpg", // <-- put YOUR image path
  },
  {
    quote:
      "Amazing cocktailss with fruit margarita from a fancy bar, it has it's own place in the cocktail kingdom",
    author: "John Doe",
    role: "Drinks Reviewer",
    image: "/quotes/slide-1.jpg", // <-- put YOUR image path
  },
  // add more if you like
  // { quote: "...", author: "...", role: "...", image: "/quotes/slide-2.jpg" },
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  }, []);
  const next = useCallback(() => {
    setIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));
  }, []);

  // optional: keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const slide = SLIDES[index];

  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="relative overflow-hidden rounded border border-white/10">
          {/* Background */}
          <div className="relative h-[58vh] min-h-[420px]">
            <img
              key={slide.image}
              src={slide.image}
              alt="testimonial background"
              className="absolute inset-0 h-full w-full object-cover z-0"
            />

            {/* Dark overlay (doesn't block clicks) */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />

            {/* Top-left orange quotes */}
            <div className="pointer-events-none absolute left-10 -top-6 z-20 text-amber-600">
              <span className="text-[88px] leading-none font-extrabold">“</span>
              <span className="ml-2 text-[88px] leading-none font-extrabold">“</span>
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full items-center justify-center px-6">
              <div className="mx-auto max-w-5xl text-center">
                <p className="text-white/95 text-3xl sm:text-4xl lg:text-6xl italic font-semibold leading-tight">
                  {slide.quote}
                </p>

                <div className="mt-10">
                  <div className="text-white text-xl sm:text-2xl font-extrabold underline underline-offset-4">
                    {slide.author}
                  </div>
                  <div className="text-white/80 text-base sm:text-lg">
                    {slide.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows (big hit area, above overlay) */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-10 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="absolute right-10 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl"
            >
              ›
            </button>

            {/* Bottom-right orange quotes */}
            <div className="pointer-events-none absolute right-10 -bottom-8 z-20 text-amber-600">
              <span className="text-[88px] leading-none font-extrabold">”</span>
              <span className="ml-2 text-[88px] leading-none font-extrabold">”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
