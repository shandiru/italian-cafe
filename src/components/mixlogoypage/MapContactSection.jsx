import React from 'react'

export default function MapContactSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/your-bar-background.jpg')", // Replace with actual path
          zIndex: -1,
        }}
      />

      {/* Map Embed */}
      <div className="flex justify-center py-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.3149140812836!2d-0.08346699999999999!3d51.5210974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb447f09e8d%3A0x2cd3a57c54a439bd!2sThe%20Napoleon%20Hotel!5e0!3m2!1sen!2slk!4v1693442567092!5m2!1sen!2slk"
          width="90%"
          height="400"
          className="rounded shadow-lg border-4 border-white"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

     
      
    </section>
  )
}
