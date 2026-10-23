import { education, experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section-wrap px-6 py-24 bg-white/[0.025]">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker">MY JOURNEY</p>
        <h2 className="section-title">Experience & education<span className="text-sky-400">.</span></h2>
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8">
          <div><h3 className="text-2xl font-black text-sky-300 mb-6">Experience</h3><div className="space-y-6">{experience.map(item => <article key={item.title} className="panel p-7 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3"><span className="text-sky-300 text-sm font-bold">{item.year}</span>{item.current && <span className="text-[11px] bg-emerald-400/10 text-emerald-300 border border-emerald-400/25 px-2 py-1 rounded-full">Current</span>}</div>
            <h4 className="text-xl sm:text-2xl font-black mb-1">{item.title}</h4><p className="text-slate-400 mb-5">{item.company}</p><ul className="space-y-3 text-slate-300 leading-relaxed list-disc pl-5 marker:text-sky-400">{item.points.map(point=><li key={point}>{point}</li>)}</ul>
          </article>)}</div></div>
          <div><h3 className="text-2xl font-black text-sky-300 mb-6">Education</h3><div className="space-y-6">{education.map(item=><article key={item.title} className="panel p-7 sm:p-8"><p className="text-sky-300 text-sm font-bold mb-3">{item.year}</p><h4 className="text-xl font-black mb-2">{item.title}</h4><p className="text-slate-300">{item.place}</p></article>)}</div>
            <div className="mt-6 border border-sky-400/20 rounded-3xl p-7 bg-gradient-to-br from-sky-400/10 to-purple-400/5"><p className="text-sky-300 font-bold text-sm mb-2">CAREER DIRECTION</p><p className="text-slate-300 leading-relaxed">Combining a software engineering foundation with hands-on SAP integration experience to build reliable, connected applications.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
