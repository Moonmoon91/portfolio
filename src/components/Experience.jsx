import { timeline } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">TIMELINE</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Education & Experience
        </h2>

        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.title} className="grid md:grid-cols-[160px_1fr] gap-6">
              <p className="text-sky-400 font-black">{item.year}</p>

              <div className="bg-slate-900 border border-white/10 rounded-3xl p-7">
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;