import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Local image imports (or use direct URL as shown)
const drinks = [
  {
    src: 'https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/drink2-1.png',
    alt: 'Lemoncelli',
  },
  {
    src: 'https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/coldice.png',
    alt: 'Captain Ice',
  },
  {
    src: 'https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/drink1-1.png',
    alt: 'A Day in Bahamas',
  },
  {
    src: 'https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/sweet2-1.png',
    alt: 'Princess of Kenya',
  },
]

export default function CocktailSlider() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cocktail-bg.jpg"
          alt="Cocktail background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h6 className="text-orange-600 font-bold tracking-wide mb-2 uppercase">
            Fresh & Tasty
          </h6>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Signature <br /> Cocktails
          </h2>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded font-medium transition"
          >
            Explore Our Menu
          </a>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            loop
            slidesPerView={1}
            className="w-full"
          >
            {drinks.map((drink, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={drink.src}
                    alt={drink.alt}
                    className="w-[300px] h-auto mx-auto object-contain"
                  />
                  <p className="text-lg mt-4">{drink.alt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
