import type { Translations } from "./en";

export const es: Translations = {
  nav: {
    about: "Sobre Mí",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Educación",
    contact: "Contacto",
  },
  hero: {
    greeting: "Desarrolladora Full-Stack",
    name: "Emma Estrada",
    headline: "Hola, soy",
    subtitle:
      "Construyo integraciones empresariales, aplicaciones web y sistemas de automatización que mueven el negocio real — desde sincronización de inventario en 4 plataformas hasta 30K+ comunicaciones diarias.",
    cta1: "Hablemos",
    cta2: "Ver mi trabajo",
    downloadCta: "Descargar CV",
  },
  about: {
    heading: "Sobre Mí",
    paragraphs: [
      "Desarrolladora full-stack con más de 8 años entregando sistemas en producción — integraciones empresariales, aplicaciones web, APIs y automatización del que los negocios dependen a diario.",
      "Trabajo con Ruby on Rails, Python, React, PostgreSQL, GraphQL, Salesforce y plataformas en la nube. Mi punto fuerte es la intersección entre flujos de datos complejos y código limpio y mantenible.",
      "He integrado herramientas de IA en mi flujo de trabajo desde antes que fuera tendencia — usando Claude, Cursor y pipelines RAG personalizados para acelerar la entrega sin sacrificar calidad.",
    ],
    stats: [
      { value: "8+", label: "Años entregando" },
      { value: "30K+", label: "Mensajes diarios" },
      { value: "40%", label: "Más ingresos" },
      { value: "150%", label: "Más tráfico" },
    ],
  },
  skills: {
    heading: "Mis Habilidades",
    categories: [
      {
        title: "Lenguajes y Frameworks",
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
        title: "IA y Datos",
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
        title: "Bases de Datos",
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
        title: "Cloud y DevOps",
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
    heading: "Experiencia Laboral",
    entries: [
      {
        company: "ArkusNexus",
        role: "Ingeniera de Software",
        period: "Feb 2023 – Presente",
        highlights: [
          "Diseñé e implementé integraciones entre SKUSavvy, Microsoft Dynamics 365, RMS y Salesforce — sincronizando inventario en 4 sistemas empresariales en tiempo real",
          "Construí servicios en Python y Ruby on Rails automatizando ajustes de inventario, transferencias, reportes y sincronización de datos",
          "Desarrollé APIs GraphQL y REST procesando datos de inventario y operaciones en plataformas empresariales",
          "Implementé generación automatizada de CSV y flujos de trabajo SFTP para pipelines de datos empresariales",
          "Construí APIs y servicios backend soportando gestión de pedidos y flujos de comunicación con clientes",
          "Contribuí a sistemas responsables de entregar 30,000+ comunicaciones transaccionales diarias",
          "Integré herramientas de IA (ChatGPT, Claude, Cursor, Ollama) en el flujo de trabajo para acelerar resolución de problemas, diseño y entrega",
        ],
        technologies: ["Python", "Ruby on Rails", "PostgreSQL", "GraphQL", "Salesforce", "D365", "AWS"],
      },
      {
        company: "Villagroup",
        role: "Ingeniera de Software Full Stack",
        period: "Abr 2019 – Feb 2023",
        highlights: [
          "Desarrollé motores de reserva, sistemas de reservación y aplicaciones web para clientes de marcas de hospitalidad",
          "Construí servicios backend y experiencias frontend soportando reservaciones de hotel y gestión de membresías",
          "Impulsé un aumento del 40% en ingresos por reservaciones, 60% de crecimiento de ingresos y 150% de aumento en tráfico web",
          "Construí sistemas de gestión de contenido, landing pages promocionales y herramientas internas de negocio",
        ],
        technologies: ["Ruby on Rails", "React", "PostgreSQL", "AWS", "JavaScript"],
      },
      {
        company: "OH! Travel Marketing",
        role: "Desarrolladora Web Full Stack",
        period: "May 2017 – Abr 2019",
        highlights: [
          "Desarrollé sitios web, plataformas CMS y soluciones de e-commerce para clientes de la industria turística",
          "Implementé mejoras técnicas de SEO y optimizaciones de rendimiento",
          "Construí aplicaciones personalizadas de WordPress y Laravel basadas en requerimientos de negocio del cliente",
        ],
        technologies: ["PHP", "Laravel", "WordPress", "JavaScript", "MySQL"],
      },
    ],
  },
  projects: {
    heading: "Proyectos Destacados",
    entries: [
      {
        title: "Integración Empresarial de Inventario",
        description:
          "Sincronización de inventario en tiempo real entre SKUSavvy, Dynamics 365, RMS y Salesforce — automatizando transferencias, reportes y pipelines de datos en 4 sistemas empresariales.",
        technologies: ["Python", "Rails", "GraphQL", "PostgreSQL", "AWS"],
        highlights: [
          "Sincronización en tiempo real en 4 plataformas",
          "Flujos CSV/SFTP automatizados",
          "Procesamiento de datos a escala empresarial",
        ],
      },
      {
        title: "Plataforma de Reservaciones y Hospitalidad",
        description:
          "Motores de reserva y sistemas de reservación para marcas de hospitalidad — impulsando un 40% de aumento en ingresos por reservaciones y 150% de crecimiento en tráfico web.",
        technologies: ["React", "Ruby on Rails", "PostgreSQL", "AWS"],
        highlights: [
          "40% de aumento de ingresos",
          "150% de crecimiento de tráfico",
          "Sistema full-stack de reservas",
        ],
      },
      {
        title: "Motor de Comunicaciones con Clientes",
        description:
          "Servicios backend para gestión de pedidos y flujos de comunicación con clientes, entregando 30,000+ mensajes transaccionales diarios vía Salesforce Marketing Cloud.",
        technologies: ["Ruby on Rails", "Salesforce", "Marketing Cloud", "SQL"],
        highlights: [
          "30K+ comunicaciones diarias",
          "APIs de gestión de pedidos",
          "Dashboards de reportes financieros",
        ],
      },
      {
        title: "Flujos de Desarrollo Asistidos por IA",
        description:
          "Integré Claude, Cursor y Ollama en el proceso de desarrollo para acelerar depuración, diseño de integraciones, documentación y entrega en múltiples proyectos.",
        technologies: ["Claude", "OpenAI", "Cursor", "Ollama", "RAG"],
        highlights: [
          "Reducción de tiempo de implementación",
          "Depuración asistida por IA",
          "Automatización de documentación",
        ],
      },
    ],
  },
  education: {
    heading: "Educación",
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Tecnológico de Tepic",
    year: "2017",
  },
  contact: {
    heading: "Contáctame",
    subtitle:
      "¿Tienes un proyecto en mente o quieres discutir oportunidades? Me encantaría saber de ti.",
    nameLabel: "Nombre",
    emailLabel: "Correo Electrónico",
    messageLabel: "Mensaje",
    sendButton: "Enviar mensaje",
    downloadCta: "Descargar CV",
    connect: "Conectar",
    quickInfo: "Info rápida",
    infoItems: [
      "Abierta a oportunidades remotas",
      "Disponible para proyectos freelance",
      "Especializada en desarrollo full-stack",
      "Integraciones empresariales y flujos de IA",
    ],
  },
  footer: {
    copyright: "Emma Estrada. Todos los derechos reservados.",
    builtWith: "",
  },
  resume: {
    downloadLabel: "Descargar CV",
    downloadLabelEs: "Descargar CV",
    summary: "Resumen Profesional",
    workExperience: "Experiencia Laboral",
    technicalSkills: "Habilidades Técnicas",
    projects: "Proyectos",
    education: "Educación",
  },
};
