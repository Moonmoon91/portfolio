import { profile } from "../data/portfolioData";

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/munirah-munir", href: profile.linkedin },
  { label: "GitHub", value: "github.com/Moonmoon91", href: profile.github },
];

function Contact() {
  return (
    <section id="contact" className="section-wrap px-6 py-24 bg-white/[0.025]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="section-kicker">SAY HELLO</p>
          <h2 className="section-title mb-6">Let’s build something good<span className="text-sky-400">.</span></h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">I’m exploring my next opportunity in SAP Integration, Software Engineering or related technology roles after my IBM internship ends in February 2027. My degree is expected to be completed in November 2027. Happy to connect with recruiters, engineers and fellow builders.</p>
          <p className="text-sky-200 font-semibold mb-8">Open to roles from {profile.availability} · {profile.location}</p>
          <a className="inline-block bg-sky-400 hover:bg-cyan-300 text-slate-950 font-black px-7 py-4 rounded-xl transition" href={`mailto:${profile.email}?subject=Let's%20Connect%20-%20Portfolio`}>Send me an email ↗</a>
        </div>
        <div className="panel p-7 sm:p-9 space-y-5">
          <h3 className="font-black text-2xl mb-5">Find me online</h3>
          {socials.map(item=><a key={item.label} href={item.href} target={item.label === "Email" ? undefined : "_blank"} rel={item.label === "Email" ? undefined : "noopener noreferrer"} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 pb-5 border-b border-white/10 group">
            <span className="text-slate-400 text-sm">{item.label}</span><span className="font-semibold text-slate-100 group-hover:text-sky-300 break-all transition">{item.value} ↗</span>
          </a>)}
          <p className="text-slate-400 text-sm leading-relaxed">Have a role or project in mind? Send me a message. I’d love to learn more.</p>
        </div>
      </div>
    </section>
  );
}
export default Contact;
