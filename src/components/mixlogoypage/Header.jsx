// Header.jsx
export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div
        className="
          mx-auto grid items-center
          h-16 sm:h-20 md:h-28
          grid-cols-[56px_1fr_56px] md:grid-cols-[64px_1fr_64px]
          px-4 md:px-8
          md:max-w-[1400px]
        "
      >
        {/* Left: Menu */}
        <button className="flex items-center gap-2" aria-label="Open menu">
          <span className="text-xl md:text-2xl leading-none">☰</span>
          {/* Hide 'Menu' label on small screens */}
          <span className="hidden sm:inline uppercase tracking-wide text-sm md:text-lg font-semibold">
            Menu
          </span>
        </button>

        {/* Center: Logo (always perfectly centered) */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.35em] text-gray-400">
            FRESH
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.35em]">
            MIXOLOGY
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.35em] text-gray-400">
            EST 2010
          </p>
        </div>

        {/* Right spacer to balance layout */}
        <div aria-hidden />
      </div>
    </header>
  );
}
