function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-black tracking-wide text-sky-400">MUNIRAH.DEV</h1>

        <div className="hidden md:flex gap-7 text-sm text-slate-300">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#experience" className="hover:text-sky-400">Experience</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;