import React from 'react'

export default function PrivateEventForm() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Private Hire
          </h2>
          <p className="text-lg md:text-xl text-emerald-600 font-medium italic mb-4">
            "Create unforgettable moments in our exclusive space"
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Host your special event at Le Gemelle. From intimate celebrations to
            corporate gatherings, we'll make your occasion truly memorable.
          </p>
        </div>

        <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 border-emerald-200 shadow-xl">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 text-center rounded-t-xl">
            <h3 className="font-semibold text-2xl font-serif">Book Your Private Event</h3>
            <p className="text-sm text-emerald-100 mt-1">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="eventTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Time
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guestCount"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-20">10–20 guests</option>
                    <option value="21-30">21–30 guests</option>
                    <option value="31-50">31–50 guests</option>
                    <option value="51+">51+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding Reception</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="graduation">Graduation Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  id="specialRequests"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition resize-none"
                  placeholder="Tell us about any special requirements, dietary needs, decorations, or specific arrangements you'd like..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll respond to your inquiry within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
