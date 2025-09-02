// Header.jsx
export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto flex h-28 max-w-[1400px] items-center justify-between px-8">
        {/* Left: Menu */}
        <button className="flex items-center gap-3" aria-label="Menu">
          <span className="text-2xl">☰</span>
          <span className="uppercase tracking-wide text-lg font-semibold">
            Menu
          </span>
        </button>

        {/* Center: Logo */}
        <div className="text-center">
          <p className="text-sm tracking-[0.35em] text-gray-400">FRESH</p>
          <h1 className="text-4xl font-bold tracking-[0.35em]">MIXOLOGY</h1>
          <p className="text-sm tracking-[0.35em] text-gray-400">EST 2010</p>
        </div>

        {/* Right: Spacer */}
        <div className="w-16"></div>
      </div>
    </header>
  );
}
