import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function VisitUsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Visit Us <span className="text-gray-900">Today</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Location */}
          <div className="flex flex-col items-center">
            <a
              href="https://maps.app.goo.gl/XZcF8fLm9UqF3sqi9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100 p-4 rounded-full mb-4 hover:bg-emerald-200 transition"
            >
              <FaMapMarkerAlt className="w-8 h-8 text-emerald-600" />
            </a>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-center">
              14 St Martins Square<br />
              Leicester LE1 5DF
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <FaClock className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Mon–Fri: 8:30 am–5 pm<br />
              Fri Night: 8 pm–12 am<br />
              Sat: 8:30 am–4:30 pm & 8 pm–12 am<br />
              Sun: 12 am–5 pm
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <a
              href="tel:01163191390"
              className="bg-emerald-100 p-4 rounded-full mb-4 hover:bg-emerald-200 transition"
            >
              <FaPhoneAlt className="w-8 h-8 text-emerald-600" />
            </a>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">0116 319 1390</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:hello@legemelle.co.uk"
              className="bg-teal-100 p-4 rounded-full mb-4 hover:bg-teal-200 transition"
            >
              <FaEnvelope className="w-8 h-8 text-teal-600" />
            </a>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">hello@legemelle.co.uk</p>
          </div>
        </div>

        {/* Google Maps CTA */}
        <div className="mb-8">
          <div className="bg-white border border-emerald-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto py-6">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-emerald-600 mr-2" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Find Us on Google Maps
              </h3>
            </div>
            <a
              href="https://maps.app.goo.gl/XZcF8fLm9UqF3sqi9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-6"
            >
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                View on Google Maps
              </button>
            </a>
          </div>
        </div>

        {/* Reservation Button */}
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
          Make a Reservation
        </button>
      </div>
    </section>
  );
}
