// Hero.jsx
export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[280px_1fr_64px]">
        {/* Desktop Left Navigation */}
        <aside className="hidden md:flex flex-col justify-center bg-black text-white py-20">
          <nav className="flex flex-col gap-16 pl-10">
            <a href="#" className="text-3xl font-extrabold tracking-wide hover:text-amber-400 transition">
              Reservations
            </a>
            <a href="#" className="text-3xl font-extrabold tracking-wide hover:text-amber-400 transition">
              About Us
            </a>
            <a href="#" className="text-3xl font-extrabold tracking-wide hover:text-amber-400 transition">
              Our Menu
            </a>
          </nav>
        </aside>

        {/* Hero image */}
        <div className="relative h-[85vh]">
          <img
            src="/male-bartender-is-making-cocktail.jpg"
            alt="Bartender pouring cocktail"
            className="h-full w-full object-cover"
          />

          {/* Mobile nav (bottom overlay) */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex md:hidden bg-black/80 text-white">
            <nav className="flex w-full justify-around py-4 text-sm font-medium">
              <a href="#" className="hover:text-amber-400 transition">Reservations</a>
              <a href="#" className="hover:text-amber-400 transition">About Us</a>
              <a href="#" className="hover:text-amber-400 transition">Our Menu</a>
            </nav>
          </div>
        </div>

        {/* Right spacer (only desktop) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
