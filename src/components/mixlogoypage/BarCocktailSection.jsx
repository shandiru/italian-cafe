import React from "react";

export default function BarCocktailSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Our Bar Section */}
        <div
          className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/male-barman-in-apron-prepares-alcoholic-coctail-768x513.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center text-white z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bar</h2>
            <a
              href="#"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold transition"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Our Cocktails Section */}
        <div
          className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/gin-and-tonic-drink-768x512.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center text-white z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cocktails</h2>
            <a
              href="#"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold transition"
            >
              Our Menu
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
}
