import React from 'react';

export default function ContactFooterSection() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-y-0">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left space-y-2 w-full md:w-1/3">
          <h3 className="font-bold uppercase text-white tracking-wide">Contact Info</h3>
          <p className="text-[#e2b29b]">Email us: contact@email.com</p>
          <p className="text-[#e2b29b]">Call us: 123 456 789</p>
        </div>

        {/* Center: Logo Block */}
        <div className="text-center w-full md:w-1/3">
          <p className="uppercase tracking-[0.35em] text-xs text-[#e2b29b] mb-1">Fresh</p>
          <h1 className="text-4xl font-bold tracking-wide text-white">Mixology</h1>
          <p className="uppercase tracking-[0.25em] text-xs text-[#e2b29b] mt-1">Est 2010</p>
        </div>

        {/* Right: Visit Info */}
        <div className="text-center md:text-right space-y-2 w-full md:w-1/3">
          <h3 className="font-bold uppercase text-white tracking-wide">Visit Us</h3>
          <p className="text-[#e2b29b]">Monday to Friday 7am to 8pm</p>
          <p className="text-[#e2b29b]">Coppice Celyn 123, MA US</p>
        </div>
      </div>
    </section>
  );
}
