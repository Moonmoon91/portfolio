import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">ACHIEVEMENTS</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Highlights That Recruiters Should Notice
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={achievement} className="bg-slate-900 border border-white/10 rounded-3xl p-7">
              <p className="text-sky-400 font-black text-3xl mb-4">
                0{index + 1}
              </p>
              <p className="text-slate-300 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;