// Hero.jsx
export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[300px_1fr_64px]">
        {/* Left navigation */}
        <aside className="hidden bg-black text-white md:flex md:flex-col md:justify-center">
          <nav className="flex flex-col gap-16 px-10">
            <a href="#" className="text-2xl font-semibold hover:text-amber-400 transition">
              Reservations
            </a>
            <a href="#" className="text-2xl font-semibold hover:text-amber-400 transition">
              About Us
            </a>
            <a href="#" className="text-2xl font-semibold hover:text-amber-400 transition">
              Our Menu
            </a>
          </nav>
        </aside>

        {/* Hero image */}
        <div className="relative h-[70vh] md:h-[78vh]">
          <img
            src="/male-bartender-is-making-cocktail.jpg"
            alt="Bartender pouring into a cocktail glass"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right spacer column */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
