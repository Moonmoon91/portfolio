import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-28 relative aurora grid-bg">
      <div className="particles"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full mb-6">
            ✦ Software Engineering Internship Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">
              {profile.shortName}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Software Engineering student passionate about building web systems,
            mobile applications, real-time systems, AI solutions, databases, and
            software testing workflows.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="bg-sky-400 text-slate-950 px-7 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition">
              View Projects
            </a>

            <a href="/resume.pdf" className="border border-white/20 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition">
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <Stat num="4+" label="Major Projects" />
            <Stat num="12+" label="Tech Skills" />
            <Stat num="6 mo" label="Internship" />
          </div>
        </div>

        <div className="relative float">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 blur opacity-50"></div>

          <div className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 pulse-glow">
         <img
  src="/images/profile.jpg"
  alt="Nur Munirah"
  className="w-36 h-36 rounded-full object-cover mx-auto mb-6 border-4 border-sky-400/50 shadow-2xl"
/>

            <p className="text-sky-400 font-bold mb-2">PROFILE SNAPSHOT</p>
            <h2 className="text-3xl font-black mb-6">Internship Ready Candidate</h2>

            <div className="space-y-4">
              <Info label="Name" value={profile.name} />
              <Info label="Field" value="Software Engineering" />
              <Info label="Availability" value={profile.availability} />
              <Info label="Duration" value={profile.duration} />
              <Info label="Location" value={profile.location} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-2xl font-black text-sky-400">{num}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
}

export default Hero;