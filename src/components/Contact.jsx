import { profile } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-sky-400 font-bold mb-2">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let’s Connect
          </h2>

          <p className="text-slate-300 text-lg mb-8">
            I am open for a 6-month internship opportunity in Software
            Engineering, IT, QA, Software Testing, Web Development, or related fields.
          </p>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-6">
            <p className="text-sky-400 font-bold mb-3">Google Maps</p>
            <div className="h-56 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 flex items-center justify-center">
              <p className="text-slate-400">Selangor, Malaysia</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 space-y-4">
          <ContactRow label="Email" value={profile.email} />
          <ContactRow label="LinkedIn" value={profile.linkedin} />
          <ContactRow label="GitHub" value={profile.github} />
          <ContactRow label="Location" value={profile.location} />
          <ContactRow label="Phone Number" value={profile.phone} />

          <a href="/resume.pdf" className="inline-block mt-4 bg-sky-400 text-slate-950 px-6 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-bold text-white break-words">{value}</p>
    </div>
  );
}

export default Contact;