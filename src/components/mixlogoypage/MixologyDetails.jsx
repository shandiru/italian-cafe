import React from 'react';

export default function MixologyDetails() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 text-center md:text-left">
        {/* Text Content */}
        <div>
          <h4 className="text-orange-500 text-sm font-semibold uppercase tracking-wide mb-3">
            Mixology
          </h4>
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Attention to <br className="hidden md:inline" /> Details
          </h2>
          <p className="text-gray-300 text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <ul className="space-y-4 text-gray-300 text-base list-none">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="text-orange-500 text-lg mt-1">•</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorp.
              </span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="text-orange-500 text-lg mt-1">•</span>
              <span>Curabitur interdum nunc sit amet ornare aliquam.</span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="text-orange-500 text-lg mt-1">•</span>
              <span>
                Consectetur adipiscing elit. Ut elit lorem ipsuet tellus, luctus nec
                ullamcorp.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/mixology-image.png"
            alt="Mixology presentation"
            className="w-full max-w-md rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
