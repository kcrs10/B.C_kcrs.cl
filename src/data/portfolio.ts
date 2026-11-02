// src/data/portfolio.ts
export const siteConfig = {
  name: "Benjamin Caceres Mejias",
  title: "Benjamin Caceres · Ciberseguridad y SOC",
  description: "Benjamin Caceres Mejias, técnico en ciberseguridad desde Vicuña, Chile. Monitoreo SIEM con Wazuh, auditoría ISO 27001, pentesting y análisis de vulnerabilidades.",
  location: "Vicuña, Valle del Elqui, Chile",
  email: "tu-correo@ejemplo.cl", // Edita con tu correo real
  github: "https://github.com/tu-usuario", // Edita con tu GitHub
  linkedin: "https://linkedin.com/in/tu-usuario", // Edita con tu LinkedIn
};

export const marqueeItems = [
  "SOC", "WAZUH", "ISO 27001", "eJPTv2", "PENTESTING", "NESSUS", "NMAP", "OSINT"
];

export const experience = [
  {
    role: "Práctica profesional",
    org: "Municipalidad de Vicuña",
    description: "Desplegué Wazuh como SIEM para centralizar logs y alertas de seguridad de la institución.",
    tags: ["Wazuh", "SIEM", "Monitoreo", "Logs"],
  },
  {
    role: "Encargado de TI",
    org: "Hospital de Vicuña",
    description: "Soporte y administración de la infraestructura TI de un centro de salud público, con foco en continuidad del servicio.",
    tags: ["Soporte TI", "Redes", "Administración de sistemas"],
  },
];

export const projects = [
  {
    featured: true,
    meta: "Proyecto personal",
    title: "Plataforma OSINT",
    description: "Aplicación web para organizar investigaciones: casos, personas, empresas y hallazgos vinculados entre sí. Ejecuta Sherlock en segundo plano y guarda los resultados en la base de datos, con un grafo de relaciones.",
    tags: ["FastAPI", "Tailwind CSS", "SQLite → PostgreSQL", "Docker", "Cytoscape.js"],
  },
  {
    featured: false,
    meta: "Académico · Duoc UC",
    title: "Auditoría a Kioptrix Level 1",
    description: "Informe técnico de evaluación de vulnerabilidades: escaneo con Nmap y Nessus, hallazgos clasificados por severidad (Samba, OpenSSH, SSLv2/3, mod_ssl), falsos positivos y plan de remediación con re-escaneo.",
    tags: ["Nmap", "Nessus", "Kali Linux", "CVE / CWE", "OWASP"],
  },
  {
    featured: false,
    meta: "Académico · Duoc UC",
    title: "Monitoreo reputacional con RSS",
    description: "Pipeline en Python que recolecta noticias por RSS sobre LATAM Airlines y las prepara para análisis de reputación, entregado como solución automatizada de ciberinteligencia.",
    tags: ["Python", "RSS", "OSINT", "OPSEC"],
  },
  {
    featured: false,
    meta: "Proyecto personal",
    title: "SOS-Talento",
    description: "Plataforma de ayuda académica entre pares para estudiantes en Chile. Incluye la mecánica de la bengala para pedir ayuda y una economía de reputación. Seguridad a nivel de fila con Supabase.",
    tags: ["Next.js 15", "Supabase", "PostgreSQL RLS"],
  },
  {
    featured: false,
    meta: "Proyecto personal",
    title: "Monitor de precios de perfumes",
    description: "App de escritorio que busca un perfume en varias tiendas en paralelo, unifica los precios y marca como posible error los valores bajo el 40 % de la mediana.",
    tags: ["Python", "tkinter", "BeautifulSoup", "pandas"],
  },
];

export const stack = [
  {
    category: "Defensa y monitoreo",
    items: ["Wazuh", "SIEM", "Análisis de logs", "ISO 27001"],
  },
  {
    category: "Ofensiva y vulnerabilidades",
    items: ["Kali Linux", "Nmap", "Nessus", "Sherlock", "Metodología OWASP"],
  },
  {
    category: "Desarrollo",
    items: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Supabase", "pandas"],
  },
  {
    category: "Infraestructura",
    items: ["Linux", "WSL2", "Docker", "PostgreSQL", "Cloudflare Pages"],
  },
];