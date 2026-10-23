import { skillGroups } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section-wrap px-6 py-24 bg-white/[0.025]">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker">TECHNICAL TOOLKIT</p>
        <h2 className="section-title">What I work with<span className="text-sky-400">.</span></h2>
        <p className="text-slate-400 max-w-2xl mb-10">From enterprise APIs and middleware to full-stack applications and cloud-connected databases.</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => <article key={group.title} className="panel p-7 sm:p-8 hover:border-sky-400/35 transition-colors">
            <div className="text-sky-400 font-bold text-xs tracking-widest mb-5">0{i + 1} / SKILL SET</div>
            <h3 className="text-2xl font-black mb-2">{group.title}</h3>
            <p className="text-sm text-slate-400 mb-7 min-h-10">{group.description}</p>
            <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
