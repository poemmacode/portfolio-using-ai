export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Full-Stack Developer",
    name: "Emma Estrada",
    headline: "Hi, I'm",
    subtitle:
      "I build enterprise integrations, web applications, and automation systems that handle real business impact — from inventory sync across 4 platforms to 30K+ daily communications.",
    cta1: "Let's talk",
    cta2: "See my work",
    downloadCta: "Download resume",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "Full-stack developer with 8+ years shipping production systems — enterprise integrations, web apps, APIs, and automation that businesses depend on daily.",
      "I work across Ruby on Rails, Python, React, PostgreSQL, GraphQL, Salesforce, and cloud platforms. My sweet spot is the intersection of complex data flows and clean, maintainable code.",
      "I've been integrating AI tools into my workflow since before it was trendy — using Claude, Cursor, and custom RAG pipelines to accelerate delivery without sacrificing quality.",
    ],
    stats: [
      { value: "8+", label: "Years shipping" },
      { value: "30K+", label: "Daily messages" },
      { value: "40%", label: "Revenue lift" },
      { value: "150%", label: "Traffic growth" },
    ],
  },
  skills: {
    heading: "My Skills",
    categories: [
      {
        title: "Languages & Frameworks",
        icon: "💻",
        skills: [
          { name: "Ruby / Ruby on Rails", level: "Expert" },
          { name: "Python", level: "Expert" },
          { name: "React / Next.js", level: "Expert" },
          { name: "TypeScript / JavaScript", level: "Expert" },
          { name: "GraphQL / REST APIs", level: "Expert" },
          { name: "PHP / Laravel", level: "Proficient" },
        ],
      },
      {
        title: "AI & Data",
        icon: "🤖",
        skills: [
          { name: "TensorFlow / PyTorch", level: "Proficient" },
          { name: "RAG / Fine-Tuning / NLP", level: "Proficient" },
          { name: "Claude / OpenAI API", level: "Expert" },
          { name: "Hugging Face / AWS Bedrock", level: "Proficient" },
          { name: "LangChain / Prompt Engineering", level: "Proficient" },
        ],
      },
      {
        title: "Databases",
        icon: "🗄️",
        skills: [
          { name: "PostgreSQL", level: "Expert" },
          { name: "SQL Server", level: "Proficient" },
          { name: "MongoDB", level: "Proficient" },
          { name: "Firebase Firestore", level: "Proficient" },
          { name: "SQLite / CoreData", level: "Proficient" },
        ],
      },
      {
        title: "Cloud & DevOps",
        icon: "☁️",
        skills: [
          { name: "AWS (EC2, Cognito, S3)", level: "Proficient" },
          { name: "Azure (Blob, SQL, Functions)", level: "Proficient" },
          { name: "Docker / Kubernetes", level: "Proficient" },
          { name: "GitHub Actions / Azure Pipelines", level: "Proficient" },
          { name: "Git / GitHub / GitLab", level: "Expert" },
          { name: "Salesforce / D365", level: "Proficient" },
        ],
      },
    ],
  },
  experience: {
    heading: "Work Experience",
    entries: [
      {
        company: "ArkusNexus",
        role: "Software Engineer",
        period: "Feb 2023 – Present",
        highlights: [
          "Designed and shipped integrations between SKUSavvy, Microsoft Dynamics 365, RMS, and Salesforce — syncing inventory across 4 business systems in real time",
          "Built Python and Ruby on Rails services automating inventory adjustments, transfers, reporting, and data synchronization",
          "Developed GraphQL and REST APIs processing inventory and operational data across enterprise platforms",
          "Implemented automated CSV generation and SFTP delivery workflows for enterprise data pipelines",
          "Built APIs and backend services supporting order management and customer communication workflows",
          "Contributed to systems responsible for delivering 30,000+ transactional communications daily",
          "Integrated AI tools (ChatGPT, Claude, Cursor, Ollama) into the development workflow to accelerate troubleshooting, design, and delivery",
        ],
        technologies: ["Python", "Ruby on Rails", "PostgreSQL", "GraphQL", "Salesforce", "D365", "AWS"],
      },
      {
        company: "Villagroup",
        role: "Full Stack Software Engineer",
        period: "Apr 2019 – Feb 2023",
        highlights: [
          "Developed booking engines, reservation systems, and customer-facing web applications for hospitality brands",
          "Built backend services and frontend experiences supporting hotel reservations and membership management",
          "Drove a 40% increase in reservation revenue, 60% revenue growth, and 150% increase in website traffic",
          "Built content management systems, promotional landing pages, and internal business tools",
        ],
        technologies: ["Ruby on Rails", "React", "PostgreSQL", "AWS", "JavaScript"],
      },
      {
        company: "OH! Travel Marketing",
        role: "Full Stack Web Developer",
        period: "May 2017 – Apr 2019",
        highlights: [
          "Developed websites, CMS platforms, and e-commerce solutions for tourism industry clients",
          "Implemented technical SEO improvements and performance optimizations",
          "Built custom WordPress and Laravel applications based on client business requirements",
        ],
        technologies: ["PHP", "Laravel", "WordPress", "JavaScript", "MySQL"],
      },
    ],
  },
  projects: {
    heading: "Featured Projects",
    entries: [
      {
        title: "Enterprise Inventory Integration",
        description:
          "Real-time inventory sync between SKUSavvy, Dynamics 365, RMS, and Salesforce — automating transfers, reporting, and data pipelines across 4 business systems.",
        technologies: ["Python", "Rails", "GraphQL", "PostgreSQL", "AWS"],
        highlights: [
          "Real-time sync across 4 platforms",
          "Automated CSV/SFTP workflows",
          "Enterprise-scale data processing",
        ],
      },
      {
        title: "Reservation & Hospitality Platform",
        description:
          "Booking engines and reservation systems for hospitality brands — driving a 40% increase in reservation revenue and 150% growth in website traffic.",
        technologies: ["React", "Ruby on Rails", "PostgreSQL", "AWS"],
        highlights: [
          "40% revenue increase",
          "150% traffic growth",
          "Full-stack booking system",
        ],
      },
      {
        title: "Customer Communications Engine",
        description:
          "Backend services for order management and customer communication workflows, delivering 30,000+ transactional messages daily via Salesforce Marketing Cloud.",
        technologies: ["Ruby on Rails", "Salesforce", "Marketing Cloud", "SQL"],
        highlights: [
          "30K+ daily communications",
          "Order management APIs",
          "Finance reporting dashboards",
        ],
      },
      {
        title: "AI-Assisted Development Workflows",
        description:
          "Integrated Claude, Cursor, and Ollama into the development process to accelerate debugging, integration design, documentation, and delivery across projects.",
        technologies: ["Claude", "OpenAI", "Cursor", "Ollama", "RAG"],
        highlights: [
          "Reduced implementation time",
          "AI-assisted debugging",
          "Documentation automation",
        ],
      },
    ],
  },
  education: {
    heading: "Education",
    degree: "Bachelor of Computer Systems Engineering",
    institution: "Instituto Tecnológico de Tepic",
    year: "2017",
  },
  contact: {
    heading: "Get in touch",
    subtitle:
      "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send message",
    downloadCta: "Download resume",
    connect: "Connect",
    quickInfo: "Quick info",
    infoItems: [
      "Open to remote opportunities",
      "Available for freelance projects",
      "Full-stack development specialist",
      "Enterprise integrations & AI workflows",
    ],
  },
  footer: {
    copyright: "Emma Estrada. All rights reserved.",
    builtWith: "",
  },
  resume: {
    downloadLabel: "Download resume",
    downloadLabelEs: "Descargar CV",
    summary: "Professional Summary",
    workExperience: "Work Experience",
    technicalSkills: "Technical Skills",
    projects: "Projects",
    education: "Education",
  },
};

export type Translations = typeof en;
