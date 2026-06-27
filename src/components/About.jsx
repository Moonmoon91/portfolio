function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">INTRODUCTION</p>
        <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <p className="lg:col-span-2 text-slate-300 text-lg leading-relaxed">
            I am currently pursuing a Bachelor of Information Technology (Hons)
            in Software Engineering at UniKL MIIT. I enjoy developing practical
            systems that solve real problems, especially web applications,
            real-time systems, mobile applications, AI-based solutions,
            database-driven platforms, and software testing.
          </p>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-7">
            <h3 className="text-xl font-black text-sky-300 mb-4">Career Target</h3>
            <p className="text-slate-300">
              Software Engineering, IT, QA, Software Testing, Web Development,
              or related technical internship roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;