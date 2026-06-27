import { education, experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">TIMELINE</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Education & Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-6 text-sky-300">Education</h3>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="bg-slate-900 border border-white/10 rounded-3xl p-7">
                  <p className="text-sky-400 font-bold mb-2">{item.year}</p>
                  <h4 className="text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-slate-300">{item.place}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-6 text-sky-300">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.title} className="bg-slate-900 border border-white/10 rounded-3xl p-7">
                  <p className="text-sky-400 font-bold mb-2">{item.year}</p>
                  <h4 className="text-xl font-black mb-1">{item.title}</h4>
                  <p className="text-slate-400 mb-4">{item.company}</p>

                  <ul className="space-y-3 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;