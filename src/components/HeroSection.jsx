import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/bgvideo.mp4" // Change this to your local or hosted path
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/le-gemelle-logo.png" // Make sure the logo path matches your project
            alt="Le Gemelle Logo"
            className="rounded-full shadow-lg"
            width={200}
            height={200}
          />
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Le Gemelle
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-light drop-shadow-md">
          Cafe & Deli
        </p>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-emerald-200 font-medium italic mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            "From sunrise coffee to sunset cocktails — world-class flavour in the heart of Leicester."
          </p>
        </div>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
          View Our Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
