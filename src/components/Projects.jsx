import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">SELECTED WORK</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">Project Gallery</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900/90 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/60 hover:-translate-y-2 transition duration-300"
            >
              <ProjectMockup project={project} />

              <div className="p-7">
                <p className="text-sky-400 font-bold mb-1">{project.category}</p>
                <h3 className="text-2xl font-black mb-4">{project.title}</h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <p className="text-sm text-emerald-300 mb-5">
                  Impact: {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 px-3 py-2 rounded-full text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ project }) {
  if (project.type === "Phone Mockup") {
    return (
      <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
        <div className="w-32 h-56 rounded-[2rem] border-4 border-slate-700 bg-slate-950 p-3 shadow-2xl">
          <div className="h-4 w-14 bg-slate-700 rounded-full mx-auto mb-4"></div>
          <div className="space-y-3">
            <div className="h-8 bg-sky-400/30 rounded-xl"></div>
            <div className="h-8 bg-purple-400/30 rounded-xl"></div>
            <div className="h-8 bg-emerald-400/30 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (project.type === "Laptop Mockup") {
    return (
      <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
        <div className="w-80">
          <div className="h-44 bg-slate-950 border-4 border-slate-700 rounded-t-2xl p-4">
            <div className="h-full rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-white/10 p-3">
              <div className="h-4 w-28 bg-sky-400/50 rounded mb-3"></div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-20 bg-white/10 rounded"></div>
                <div className="h-20 bg-white/10 rounded"></div>
                <div className="h-20 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
          <div className="h-4 bg-slate-700 rounded-b-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🧠</div>
        <p className="text-sky-300 font-bold">{project.type}</p>
      </div>
    </div>
  );
}

export default Projects;