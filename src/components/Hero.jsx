import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-32 pb-20 relative aurora grid-bg isolate">
      <div className="particles pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full mb-7 text-xs sm:text-sm tracking-wide font-semibold">
            <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            Available for opportunities from {profile.availability}
          </div>
          <p className="text-sky-300 tracking-[.24em] font-bold text-xs sm:text-sm mb-4">{profile.eyebrow}</p>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-5 tracking-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">{profile.shortName}.</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-5">Building bridges between systems and ideas.</h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl">{profile.description}</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#projects" className="bg-sky-400 text-slate-950 px-6 py-3.5 rounded-xl font-bold hover:bg-cyan-300 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Explore My Work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="border border-white/20 bg-white/5 px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Let’s Connect <span aria-hidden="true">↗</span></a>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-xl">
            <Stat num="02" label="Industry internships" />
            <Stat num="04" label="Academic projects" />
            <Stat num="CPI" label="SAP integration focus" />
          </div>
        </div>

        <div className="relative max-w-lg w-full mx-auto float">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 blur opacity-35" aria-hidden="true"></div>
          <div className="relative bg-slate-900/95 border border-white/10 rounded-[2rem] p-6 sm:p-8 pulse-glow">
            <div className="flex items-center gap-5 mb-7">
              <img src="/profile.jpg" alt="Portrait of Nur Munirah" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-sky-400/50 shadow-xl" />
              <div>
                <p className="text-sky-400 font-bold tracking-[.14em] text-xs mb-2">CURRENTLY AT IBM MALAYSIA</p>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">SAP Integration<br />Consultant Intern</h3>
              </div>
            </div>
            <div className="border-y border-white/10 py-5 space-y-4">
              <Info label="Specialisation" value="SAP BTP · Integration Suite (CPI)" />
              <Info label="Business exposure" value="SAP S/4HANA · FI & MM" />
              <Info label="Internship ends" value={profile.internshipEnds} />
              <Info label="Open to roles" value={profile.availability} />
              <Info label="Degree" value={profile.graduation} />
              <Info label="Based in" value={profile.location} />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-5">
              <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true"></span>
              Integration · Software Engineering · AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, label }) {
  return <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4"><p className="text-2xl font-black text-sky-400">{num}</p><p className="text-xs sm:text-sm text-slate-400 leading-snug mt-1">{label}</p></div>;
}

function Info({ label, value }) {
  return <div className="grid grid-cols-[110px_1fr] gap-3 items-start"><p className="text-xs text-slate-400 mt-1">{label}</p><p className="font-semibold text-sm text-white">{value}</p></div>;
}

export default Hero;
