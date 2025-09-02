import React from "react";

export default function CocktailHighlight() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/cocktail-girl.png"
            alt="Woman enjoying cocktail"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <p className="text-orange-500 uppercase text-sm font-semibold tracking-wide mb-3">
            Our Cocktails
          </p>
          <h2 className="text-4xl font-extrabold mb-6">Fresh &amp; Colorful</h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ipsum ac rhoncus vehicula.
          </p>
          <p className="text-gray-300">
            Curabitur ac nibh lorem. Pellentesque blandit non nisi rutrum sollicitudin. Curabitur interdum nunc sit amet ornare aliquet. Nunc in feugiat nisi. Nam elit felis, consectetur sit. Donec vel quam odio. Vestibulum sit amet volutpat turpis. Praesent viverra lacinia sapien id volutpat.
          </p>
        </div>
      </div>
    </section>
  );
}
