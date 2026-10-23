import { useState } from "react";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Awards", "#achievements"], ["Contact", "#contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center gap-4">
        <a href="#home" onClick={() => setOpen(false)} className="font-black tracking-widest text-sky-300 shrink-0 hover:text-cyan-300">MUNIRAH<span className="text-white">.DEV</span></a>
        <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {links.map(([label, href]) => <a key={href} href={href} className="hover:text-sky-300 transition">{label}</a>)}
        </div>
        <a href="mailto:akumunirah05@gmail.com" className="hidden lg:block rounded-xl px-4 py-2 border border-sky-400/40 text-sky-200 text-sm font-bold hover:bg-sky-400/10 transition">Let's talk ↗</a>
        <button className="lg:hidden border border-white/20 rounded-lg px-3 py-2 text-sm" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "Close ✕" : "Menu ☰"}</button>
      </div>
      {open && <div id="mobile-nav" className="lg:hidden px-6 pb-5 pt-1 flex flex-col gap-1 bg-slate-950 border-t border-white/10">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-slate-200 hover:text-sky-300 border-b border-white/5">{label}</a>)}</div>}
    </nav>
  );
}

export default Navbar;
