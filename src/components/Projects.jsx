import { useState } from "react";
import { projects } from "../data/portfolioData";

const filters = ["All", "Enterprise", "Web & Apps", "AI", "Hardware"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [featured, ...otherProjects] = projects;
  const filtered = otherProjects.filter((project) => filter === "All" || project.group === filter);
  return (
    <section id="projects" className="section-wrap px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker">SELECTED WORK</p>
        <h2 className="section-title">Projects & real-world work<span className="text-sky-400">.</span></h2>
        <p className="text-slate-400 max-w-3xl mb-10">A mix of enterprise integration work, full-stack builds, AI experiments and academic projects.</p>
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f} className={`px-4 py-2 text-sm font-semibold border rounded-full transition ${filter === f ? "bg-sky-400 text-slate-950 border-sky-400" : "bg-white/5 text-slate-300 border-white/15 hover:border-sky-400/50"}`}>{f}</button>)}</div>
        {(filter === "All" || filter === "Enterprise") && <article className="panel overflow-hidden mb-7 border-sky-400/25 grid lg:grid-cols-2">
          <div className="p-7 sm:p-10 flex flex-col justify-center">
            <p className="text-sky-400 text-xs font-extrabold tracking-[.2em] mb-3">{featured.category.toUpperCase()}</p>
            <h3 className="text-3xl font-black mb-4">{featured.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{featured.desc}</p>
            <p className="text-emerald-300 text-sm font-medium mb-6">{featured.impact}</p>
            <div className="flex flex-wrap gap-2">{featured.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
          </div>
          <div className="min-h-[270px] p-7 sm:p-10 flex items-center bg-gradient-to-br from-sky-950/90 via-slate-900 to-purple-950/70 border-t lg:border-t-0 lg:border-l border-white/10" aria-label="Illustration of an integration monitoring overview, not actual client data">
            <div className="w-full rounded-2xl border border-white/15 bg-slate-950/75 shadow-2xl p-5">
              <div className="flex items-center gap-2 mb-5"><span className="w-2.5 h-2.5 rounded-full bg-sky-400"/><span className="w-2.5 h-2.5 rounded-full bg-violet-400"/><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"/><span className="text-slate-400 text-xs ml-auto tracking-widest">CPI / MONITOR</span></div>
              <p className="font-bold text-lg mb-4">Integration overview</p>
              <div className="grid grid-cols-3 gap-2 text-center mb-5">
                <MiniMetric label="Messages" value="LOGS" color="text-sky-300"/>
                <MiniMetric label="Status" value="FLOW" color="text-emerald-300"/>
                <MiniMetric label="Errors" value="TRACE" color="text-purple-300"/>
              </div>
              <div className="space-y-2" aria-hidden="true"><div className="h-2 w-full bg-gradient-to-r from-sky-500/70 to-transparent rounded"/><div className="h-2 w-4/5 bg-gradient-to-r from-purple-500/70 to-transparent rounded"/><div className="h-2 w-2/3 bg-gradient-to-r from-emerald-500/70 to-transparent rounded"/></div>
            </div>
          </div>
        </article>}
        <div className="grid md:grid-cols-2 gap-7">
          {filtered.map(project => <article key={project.title} className="group panel overflow-hidden hover:border-sky-400/50 transition duration-300 hover:-translate-y-1">
            <div className="h-56 sm:h-64 bg-slate-950 border-b border-white/10 overflow-hidden"><img src={project.image} alt={`Preview of ${project.fullTitle || project.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-7">
              <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl font-black mb-1">{project.title}</h3>
              {project.fullTitle && <p className="text-slate-400 text-xs mb-4">{project.fullTitle}</p>}
              <p className="text-slate-300 leading-relaxed mb-5">{project.desc}</p>
              <p className="text-emerald-300 text-sm mb-5">{project.impact}</p>
              <div className="flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          </article>)}
        </div>
        {filtered.length === 0 && filter !== "Enterprise" && <p className="text-slate-400 py-10">No projects in this category yet.</p>}
      </div>
    </section>
  );
}

function MiniMetric({ label, value, color }) { return <div className="rounded-lg border border-white/10 bg-white/5 p-2.5"><p className={`${color} text-sm font-black tracking-wider`}>{value}</p><p className="text-slate-400 text-[10px] mt-1">{label}</p></div>; }

export default Projects;
