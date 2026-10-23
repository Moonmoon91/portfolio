import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements" className="section-wrap px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker">BEYOND THE CODE</p>
        <h2 className="section-title">Awards, learning & giving back<span className="text-sky-400">.</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{achievements.map(item=><article key={item.title} className="panel p-6"><p className="text-sky-400 text-xs font-extrabold uppercase tracking-widest mb-4">{item.type}</p><h3 className="text-lg font-bold mb-2 leading-snug">{item.title}</h3><p className="text-slate-400 text-sm">{item.detail}</p></article>)}</div>
      </div>
    </section>
  );
}
export default Achievements;
