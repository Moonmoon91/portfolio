// All public-facing details are collected here for easy future editing.
// Keep private addresses, client system details and referee contacts off a public website.
export const profile = {
  name: "Nur Munirah Binti Ali Munir",
  shortName: "Munirah",
  role: "SAP S/4HANA Integration Consultant Intern | Software Engineer",
  eyebrow: "SOFTWARE ENGINEERING × SAP INTEGRATION",
  description:
    "Software Engineering undergraduate at UniKL MIIT, currently gaining hands-on SAP S/4HANA and SAP Integration Suite (CPI) experience at IBM Malaysia. I also build web and software applications with Java, PHP, Laravel, React, Python and Firebase, and enjoy turning complex technical requirements into reliable solutions.",
  email: "akumunirah05@gmail.com",
  linkedin: "https://www.linkedin.com/in/munirah-munir",
  github: "https://github.com/Moonmoon91",
  location: "Selangor, Malaysia",
  availability: "March 2027 onwards",
  internshipEnds: "February 2027",
  graduation: "Expected November 2027",
  currentRole: "SAP S/4HANA Integration Consultant Intern at IBM Malaysia",
  careerInterests: ["SAP Integration / CPI", "Software Engineering", "System Integration", "Application Development"],
};

export const skillGroups = [
  {
    title: "SAP & Integration",
    description: "Enterprise integration and SAP technologies",
    skills: [
      "SAP S/4HANA", "SAP BTP", "SAP Integration Suite (CPI)",
      "SAP API Management", "SAPUI5 / Fiori", "REST APIs", "OData",
      "SOAP Web Services", "IDoc", "JSON", "XML", "Data Mapping", "Value Mapping",
      "OAuth 2.0", "API Testing", "CPI Monitoring", "Integration Troubleshooting",
    ],
  },
  {
    title: "Software Development",
    description: "Programming, frameworks and databases",
    skills: [
      "JavaScript", "React.js", "HTML", "CSS", "PHP", "Laravel", "Java",
      "Python", "Dart", "Flutter", "ASP.NET", ".NET", "MySQL",
      "Apache Derby (JavaDB)", "Firebase Realtime Database",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development, design, delivery and collaboration",
    skills: [
      "Postman", "SAP Business Application Studio", "SAP GUI",
      "SAP Build Work Zone", "SAP Cloud Connector", "VS Code", "GitHub",
      "Figma", "phpMyAdmin", "NetBeans", "Microsoft Word",
      "Microsoft Excel", "Microsoft PowerPoint",
    ],
  },
];

export const projects = [
  {
    title: "SAP CPI Monitoring Dashboard",
    category: "Professional work · IBM Malaysia",
    type: "Enterprise integration",
    group: "Enterprise",
    featured: true,
    desc: "Designed and developed an SAP CPI monitoring dashboard to track message processing logs, integration status, failed interfaces and error details, supporting operational monitoring and troubleshooting.",
    tech: ["SAP Integration Suite (CPI)", "Integration Monitoring", "Message Logs", "Troubleshooting"],
    impact: "Visibility into integration processing, failures and errors",
  },
  {
    title: "RTWTIRS",
    fullTitle: "Real-Time Weapon Tracking & Incident Reporting System",
    category: "Degree final year project",
    group: "Web & Apps",
    image: "/rtwtirs.png",
    desc: "Final Year Degree Project developed in collaboration with Angkatan Tentera Darat Malaysia, Bahagian Operasi dan Latihan (MINDEF). The system monitors weapon locations, detects gunshot incidents, generates officer alerts, digitises incident reporting and records soldier duty shifts via barcode scanning.",
    tech: ["Laravel", "PHP", "Firebase Realtime Database", "Google Maps API"],
    impact: "Real-time monitoring and streamlined reporting",
  },
  {
    title: "FurLink",
    fullTitle: "Pet Adoption, Missing Pet Reporting & Service Booking",
    category: "Web application",
    group: "Web & Apps",
    image: "/furlink.png",
    desc: "Built a Java and JavaDB web application for pet adoption, reporting missing pets and booking pet services such as grooming and pet hotels.",
    tech: ["Java", "JavaDB", "NetBeans"],
    impact: "Brings pet services and community reporting together",
  },
  {
    title: "AI Dog Breed Classification",
    fullTitle: "AI-Powered Animal Subspecies Classification",
    category: "Artificial intelligence",
    group: "AI",
    image: "/ai-dog.png",
    desc: "Developed a deep-learning dog-breed classification model, comparing ResNet50, DenseNet121, MobileNetV2 and Vision Transformer (ViT) on approximately 14,000 images with an 80% training, 10% validation and 10% testing split.",
    tech: ["Deep Learning", "ResNet50", "DenseNet121", "MobileNetV2", "ViT", "Image Classification"],
    impact: "Compared four model architectures for breed recognition",
  },
  {
    title: "RFID Attendance System",
    fullTitle: "Kolej UNITI Attendance System by RFID",
    category: "Diploma final year project",
    group: "Hardware",
    image: "/rfid.png",
    desc: "Final Year Diploma Project: developed an RFID-based student attendance system that captures attendance via student-card scanning and stores records digitally instead of on paper.",
    tech: ["RFID", "Attendance Tracking", "Database", "System Development"],
    impact: "Digitised a manual attendance process",
  },
];

export const education = [
  {
    year: "March 2024 – November 2027 (expected)",
    title: "Bachelor of Information Technology (Hons) in Software Engineering",
    place: "Universiti Kuala Lumpur (UniKL MIIT)",
  },
  {
    year: "July 2020 – October 2023",
    title: "Diploma in Information Technology (System Support)",
    place: "Kolej UNITI Port Dickson",
  },
];

export const experience = [
  {
    year: "August 2026 – Present",
    title: "SAP S/4HANA Integration Consultant Intern",
    company: "IBM Malaysia Sdn. Bhd.",
    current: true,
    points: [
      "Developed and tested SAP Integration Suite (CPI) integration flows connecting SAP S/4HANA with external systems.",
      "Contributed to SAP S/4HANA implementation activities for a healthcare client, including integration development and testing.",
      "Worked on data mapping, payload transformation, value mapping, API testing and interface troubleshooting.",
      "Performed end-to-end integration tests involving REST APIs, SOAP services, IDocs, JSON/XML payloads and authentication mechanisms.",
      "Supported SIT and UAT through defect analysis, issue validation, retesting and technical documentation.",
      "Designed and developed an SAP CPI monitoring dashboard for message logs, interface statuses and errors.",
      "Assisted the SAP Plant Maintenance (PM) team with training materials and process documentation for end users.",
    ],
  },
  {
    year: "January 2023 – May 2023",
    title: "Software Support Intern",
    company: "Securiforce Sdn. Bhd.",
    points: [
      "Supported PHP and MySQL application development, troubleshooting and improvements to existing systems.",
      "Prepared, cleaned and organised data in Microsoft Excel before migrating it to a database.",
      "Delivered mobile-app user training to ATM operations customers.",
      "Applied MVC architecture and used phpMyAdmin for MySQL database management.",
    ],
  },
];

export const achievements = [
  { type: "Award", title: "Dean's List Award", detail: "UniKL · 2024" },
  { type: "Certificate", title: "Google Project Management", detail: "Coursera" },
  { type: "Certificate", title: "Microsoft Security, Compliance & Identity Fundamentals", detail: "UniKL" },
  { type: "Certificate", title: "Cloud Security: Fortifying the Digital Frontier", detail: "UniKL" },
  { type: "Training", title: "Linux Certification Programme", detail: "Kolej UNITI" },
  { type: "Workshop", title: "MikroTik: A Router for Today & Tomorrow", detail: "Technology workshop" },
  { type: "Leadership", title: "Secretary · Love Our River", detail: "Sungai Semungkis · UniKL" },
  { type: "Leadership", title: "Assistant Project Manager · Mental Health Awareness", detail: "Taman Tasik Titiwangsa · UniKL" },
  { type: "Volunteer", title: "Community Gotong-Royong Programme", detail: "Kolej UNITI" },
];

export const professionalSkills = [
  "Problem Solving", "Analytical Thinking", "Team Collaboration",
  "Communication", "Technical Documentation", "Requirements Analysis",
  "System Integration Testing (SIT)", "User Acceptance Testing (UAT)",
  "Project Management", "Adaptability",
];

export const languages = ["Malay · Native", "English · Secondary language"];
