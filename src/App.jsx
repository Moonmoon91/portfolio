function App() {
  const skills = [
    "Laravel", "PHP", "React", "JavaScript", "Java", "Flutter",
    "MySQL", "Firebase", "Python", "TensorFlow", "UI/UX", "Software Testing",
    "Google Maps API", "REST API", "UAT", "Agile"
  ];

  const projects = [
    {
      title: "RTWTIRS",
      category: "Final Year Project",
      desc: "A real-time weapon tracking and incident reporting system designed for military-related operational use. Includes weapon scan flow, live map tracking, role-based access, real-time alerts, incident management, and Firebase integration.",
      tech: ["Laravel", "PHP", "Firebase", "Google Maps API", "ESP32"],
      impact: "Real-time tracking + incident reporting"
    },
    {
      title: "AI Dog Breed Classification",
      category: "Artificial Intelligence",
      desc: "Developed an AI image classification model to identify dog breeds using deep learning architectures including ResNet50, DenseNet121, MobileNetV2, and Vision Transformer.",
      tech: ["Python", "TensorFlow", "Keras", "Computer Vision"],
      impact: "Model comparison + image classification"
    },
    {
      title: "Restaurant Ordering System",
      category: "Mobile Application",
      desc: "A Flutter mobile application for digital restaurant ordering, menu browsing, order placement, and order management using local database storage.",
      tech: ["Flutter", "Dart", "SQLite"],
      impact: "Mobile ordering workflow"
    },
    {
      title: "FURLINK-PET ADOPTION, MISSING PET REPORTING AND PET SERVICE BOOKING SYSTEM",
      category: "Web Application",
      desc: " find owners for missing and adoption pets while promoting grooming and hotel service booking for pets.",
      tech: ["Java EE", "JSP", "Servlet", "MySQL"],
      impact: "problem-solving system"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden glow-bg">
      <Navbar />

      <section className="min-h-screen flex items-center px-6 pt-28 relative grid-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full mb-6">
              ✦ Software Engineering Internship Portfolio
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">
                Nur Munirah
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Software Engineering student passionate about building web systems,
              mobile applications, real-time systems, AI solutions, databases,
              and software testing workflows.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="bg-sky-400 text-slate-950 px-7 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition">
                View Projects
              </a>
              <a href="/resume.pdf" className="border border-white/20 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition">
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <Stat num="4+" label="Major Projects" />
              <Stat num="10+" label="Tech Skills" />
              <Stat num="6 mo" label="Internship" />
            </div>
          </div>

          <div className="relative float">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 blur opacity-50"></div>

            <div className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 pulse-glow">
              <p className="text-sky-400 font-bold mb-2">PROFILE SNAPSHOT</p>
              <h2 className="text-3xl font-black mb-6">
                Internship Ready Candidate
              </h2>

              <div className="space-y-4">
                <Info label="Name" value="Nur Munirah Binti Ali Munir" />
                <Info label="Field" value="Software Engineering" />
                <Info label="Availability" value="August / September 2026" />
                <Info label="Duration" value="6 months" />
                <Info label="Location" value="Kuala Lumpur / Selangor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
          I am currently pursuing a Bachelor of Information Technology (Hons) in
          Software Engineering at UniKL MIIT. I enjoy developing practical systems
          that solve real problems, especially web applications, real-time systems,
          mobile applications, AI-based solutions, database-driven platforms, and
          software testing. I am a fast learner, able to work in a team, and willing
          to continuously improve my technical and professional skills.
        </p>
      </Section>

      <section id="skills" className="px-6 py-24 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sky-400 font-bold mb-2">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Skills That Match Software Engineering Roles
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-900 border border-white/10 px-5 py-3 rounded-full text-sky-300 hover:border-sky-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sky-400 font-bold mb-2">SELECTED WORK</p>
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-7">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-900/90 border border-white/10 rounded-3xl p-7 hover:border-sky-400/60 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sky-400 font-bold mb-1">{project.category}</p>
                    <h3 className="text-2xl font-black">{project.title}</h3>
                  </div>
                  <span className="text-2xl">↗</span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <p className="text-sm text-emerald-300 mb-5">
                  Impact: {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 px-3 py-2 rounded-full text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sky-400 font-bold mb-2">WHY ME</p>
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            What I Can Contribute
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Software Development" text="Able to build web and mobile systems using Laravel, Java, React, Flutter, MySQL, and Firebase." />
            <Card title="Testing & UAT" text="Experienced in testing flows, user acceptance testing, bug fixing, and improving system usability." />
            <Card title="Real Project Experience" text="Developed practical academic projects including real-time systems, AI classification, and database platforms." />
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-sky-400 font-bold mb-2">CONTACT</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let’s Connect
            </h2>
            <p className="text-slate-300 text-lg">
              I am open for a 6-month internship opportunity in Software
              Engineering, IT, QA, Software Testing, Web Development, or related fields.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 space-y-4">
            <Contact label="Email" value="your-email@example.com" />
            <Contact label="LinkedIn" value="linkedin.com/in/your-linkedin" />
            <Contact label="GitHub" value="github.com/yourgithub" />
            <Contact label="Location" value="Selangor, Malaysia" />

            <a href="/resume.pdf" className="inline-block mt-4 bg-sky-400 text-slate-950 px-6 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        © 2026 Nur Munirah Binti Ali Munir. Built with React + Tailwind CSS.
      </footer>
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-black tracking-wide text-sky-400">
          MUNIRAH.DEV
        </h1>

        <div className="hidden md:flex gap-7 text-sm text-slate-300">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sky-400 font-bold mb-2">INTRODUCTION</p>
        <h2 className="text-4xl md:text-5xl font-black mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-2xl font-black text-sky-400">{num}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-3xl p-7 hover:border-sky-400/50 transition">
      <h3 className="text-xl font-black mb-3 text-sky-300">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}

function Contact({ label, value }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
}

export default App;