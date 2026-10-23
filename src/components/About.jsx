import { profile, professionalSkills, languages } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-wrap px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker">INTRODUCTION</p>
        <h2 className="section-title">A little about me<span className="text-sky-400">.</span></h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 panel p-7 sm:p-9">
            <p className="text-slate-300 text-lg leading-relaxed mb-5">I’m a Software Engineering undergraduate at <strong className="text-white font-semibold">UniKL MIIT</strong>, currently gaining real-world enterprise integration experience at <strong className="text-white font-semibold">IBM Malaysia</strong>.</p>
            <p className="text-slate-300 text-lg leading-relaxed">At IBM, my focus includes SAP S/4HANA, SAP Integration Suite (CPI), APIs, data and value mapping, integration testing and monitoring. Before that, I supported PHP/MySQL software development at Securiforce. Beyond enterprise integration, I’ve built full-stack applications, an AI classification project and an RFID solution.</p>
          </div>
          <div className="panel p-7 sm:p-9 border-sky-400/20">
            <p className="text-sky-400 text-sm font-bold tracking-widest mb-4">WHAT'S NEXT</p>
            <h3 className="text-2xl font-black mb-4">Ready to grow into my next role.</h3>
            <p className="text-slate-300 leading-relaxed mb-6">I’m exploring junior and entry-level opportunities in SAP Integration, Software Engineering, System Integration and Application Development after my internship ends in February 2027.</p>
            <p className="text-sky-200 font-semibold text-sm">Available: {profile.availability}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="panel p-7 sm:p-8">
            <h3 className="text-xl font-black text-sky-300 mb-5">How I work</h3>
            <div className="flex flex-wrap gap-2">{professionalSkills.map((item) => <span key={item} className="tag">{item}</span>)}</div>
          </div>
          <div className="panel p-7 sm:p-8">
            <h3 className="text-xl font-black text-sky-300 mb-5">Languages</h3>
            <div className="space-y-4">{languages.map((item) => <p key={item} className="text-slate-300 border-b border-white/10 pb-3">{item}</p>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
