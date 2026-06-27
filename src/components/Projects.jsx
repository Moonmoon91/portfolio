import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">SELECTED WORK</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Project Gallery
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900/90 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/60 hover:-translate-y-2 transition duration-300"
            >
              <div className="h-64 bg-slate-950 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

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
                    <span
                      key={t}
                      className="text-xs bg-white/5 border border-white/10 px-3 py-2 rounded-full text-slate-300"
                    >
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

export default Projects;