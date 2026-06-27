import { professionalSkills, languages } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">INTRODUCTION</p>
        <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am currently pursuing a Bachelor of Information Technology
              (Hons) in Software Engineering at UniKL MIIT. I have hands-on
              experience in software development, web application design,
              database management, system analysis, UI/UX design, software
              testing, and the RAD model through academic and project-based
              experiences.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-black text-sky-300 mb-4">Career Target</h3>
            <p className="text-slate-300">
              Software Engineering, IT, QA, Software Testing, Web Development,
              System Development, or related technical internship roles.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-black text-sky-300 mb-5">Professional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((item) => (
                <span key={item} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-slate-300 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-black text-sky-300 mb-5">Languages</h3>
            <div className="space-y-3">
              {languages.map((item) => (
                <p key={item} className="text-slate-300">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;