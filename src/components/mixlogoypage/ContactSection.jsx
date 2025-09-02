import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-orange-600 font-semibold tracking-widest uppercase">
          Visit Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">Contact Us</h2>

        <div className="space-y-6 text-lg">
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-xl">📧</span>
            <span>contact@email.com</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-xl">🕒</span>
            <span>Monday to Friday 7pm to 11pm</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-xl">📞</span>
            <span>123 456 789</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-xl">📍</span>
            <span>Coppice Celyn 123, MA US</span>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 font-semibold tracking-wide uppercase"
          >
            Book a Table
          </a>
        </div>
      </div>

     
    </section>
  );
}
