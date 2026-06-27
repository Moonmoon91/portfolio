import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">TECH STACK</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Skills That Match Software Engineering Roles
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-slate-900 border border-white/10 rounded-2xl p-5">
              <div className="flex justify-between mb-3">
                <p className="font-bold">{skill.name}</p>
                <p className="text-sky-400">{skill.level}%</p>
              </div>

              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;