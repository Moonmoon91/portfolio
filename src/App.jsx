function App() {
  const skills = [
    "PHP", "Laravel", "Java", "JavaScript", "React", "HTML", "CSS",
    "Flutter", "MySQL", "Firebase", "Google Maps API", "Software Testing",
    "UI/UX", "Python", "TensorFlow"
  ];

  const projects = [
    {
      title: "RTWTIRS",
      subtitle: "Real-Time Weapon Tracking & Incident Reporting System",
      desc: "A real-time tracking system with live monitoring, weapon scan flow, incident alerts, role-based access, Firebase integration, and Google Maps visualization.",
      tech: "Laravel, PHP, Firebase, Google Maps API, ESP32",
    },
    {
      title: "AI Dog Breed Classification",
      subtitle: "AI Image Classification",
      desc: "A deep learning project comparing ResNet50, DenseNet121, MobileNetV2, and Vision Transformer models for dog breed recognition.",
      tech: "Python, TensorFlow/Keras, Deep Learning, Computer Vision",
    },
    {
      title: "Restaurant Ordering System",
      subtitle: "Mobile Application",
      desc: "A Flutter mobile app for menu browsing, order placement, and order management with local database storage.",
      tech: "Flutter, SQLite",
    },
    {
      title: "FindIt@Campus",
      subtitle: "Campus Lost & Found System",
      desc: "A Java EE web system for students to report, search, and manage lost or found campus items.",
      tech: "Java EE, JSP, Servlet, MySQL",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black text-sky-400">MUNIRAH.DEV</h1>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="inline-block mb-6 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300">
              Software Engineering Internship Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
                Nur Munirah
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              I build web systems, mobile applications, AI solutions, and real-time
              database systems. Currently seeking a 6-month internship in Software
              Engineering, IT, QA, Software Testing, Web Development, or related areas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-7 py-4 rounded-2xl bg-sky-400 text-slate-950 font-bold">
                View My Work
              </a>
              <a href="/resume.pdf" className="px-7 py-4 rounded-2xl border border-white/20 font-bold">
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-sky-400 mb-6">
              Internship Ready
            </h3>
            <div className="grid gap-4">
              <Info label="Duration" value="6 months" />
              <Info label="Availability" value="August / September 2026" />
              <Info label="Location" value="Kuala Lumpur / Selangor" />
              <Info label="Interested Roles" value="Software Engineering, IT, QA, Testing, Web Development" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
            I am pursuing a Bachelor of Information Technology (Hons) in Software
            Engineering at UniKL MIIT. I enjoy building practical systems that solve
            real problems, especially web applications, real-time systems,
            database-driven platforms, mobile applications, and AI-based solutions.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 py-24 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Tech Stack & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-5 py-3 rounded-full bg-slate-900 border border-white/10 text-sky-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-7">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-900 border border-white/10 rounded-3xl p-7 hover:border-sky-400/50 transition">
                <p className="text-sky-400 font-semibold mb-2">{project.subtitle}</p>
                <h3 className="text-2xl font-black mb-4">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-5">{project.desc}</p>
                <p className="text-sm text-slate-400"><b>Tech:</b> {project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-8">Let’s Connect</h2>
          <div className="grid lg:grid-cols-2 gap-7">
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-7 space-y-4 text-slate-300">
              <p>Email: your-email@example.com</p>
              <p>LinkedIn: linkedin.com/in/your-linkedin</p>
              <p>GitHub: github.com/yourgithub</p>
              <p>Location: Selangor, Malaysia</p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-7">
              <h3 className="text-2xl font-black mb-3">Open for Internship</h3>
              <p className="text-slate-300 mb-6">
                I am available for a 6-month internship and interested in contributing to real software projects.
              </p>
              <a href="/resume.pdf" className="inline-block bg-sky-400 text-slate-950 px-6 py-4 rounded-2xl font-bold">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-white/10 text-slate-500">
        © 2026 Nur Munirah Binti Ali Munir. Built with React.
      </footer>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="font-bold text-white mt-1">{value}</p>
    </div>
  );
}

export default App;