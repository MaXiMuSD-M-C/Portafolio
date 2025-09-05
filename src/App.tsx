import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cog, Database, Github, Linkedin, Mail, Rocket, Server, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import React from "react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

const PROFILE = {
  name: "Raúl Márquez",
  title: "Ingeniero de Software · Android & Backend",
  summary:
    "Desarrollo aplicaciones Android modernas (Kotlin, MVVM/Compose) y servicios backend en Go con integración a SAP, Keycloak y SQL Server. Me apasiona el diseño limpio, la arquitectura escalable y los flujos offline-first.",
  location: "México",
  email: "raul.marquez@outlook.com",
  github: "https://github.com/MaXiMuSD-M-C",
  linkedin: "https://www.linkedin.com/in/ra%C3%BAl-m%C3%A1rquez-12924011b/",
};

const STACK = [
  "Kotlin","Jetpack Compose","MVVM","Hilt","Room","DataStore",
  "Android AGP 8+","CameraX","WorkManager",
  "Go (Golang)","sqlx","MS SQL Server","Docker","Docker Compose",
  "Keycloak (OIDC)","OAuth2","SAP RFC/BAPIs","Power BI/Power Query",
  "Vue 3","Quasar","TypeScript"
];

const PROJECTS = [
  {
    title: "TrackExplo · Gestión de Explosivos (Next-Gen)",
    description:
      "Reescritura moderna en Android con Kotlin + Jetpack Compose e inyección con Hilt. Soporta lectores tipo escáner, WorkManager para sincronización y modo offline-first.",
    tags: ["Kotlin","Compose","Hilt","DataStore","WorkManager"],
    links: { demo: "#", repo: "#" },
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: "GatoExplo · Android + Backend en Go",
    description:
      "Ecosistema Android + Go para administración de explosivos: picking, entregas, inventario y trazabilidad con SQL Server y Keycloak.",
    tags: ["Kotlin","MVVM","Go","SQL Server","Keycloak"],
    links: { demo: "#", repo: "#" },
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "MCLG Delivery · Despacho de Diésel",
    description:
      "Aplicación para despacho y control de combustible con dashboards Quasar/Vue y servicios en Go. Reportes en tiempo real y control de lotes.",
    tags: ["Vue","Quasar","Go","SQL Server"],
    links: { demo: "#", repo: "#" },
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    title: "Integración SAP · BAPIs (RESERVATION & GOODSMVT)",
    description:
      "Servicios en Go (gorfc) para creación/actualización de reservas y movimientos de materiales. Manejo de mensajes SAP y confirmaciones al frontend.",
    tags: ["Go","SAP RFC","BAPI","REST"],
    links: { demo: "#", repo: "#" },
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: "Conectores Power BI/Power Query",
    description:
      "Conector personalizado (.mez) con autenticación Keycloak/OIDC para analítica de datos. Enfoque en seguridad y rendimiento.",
    tags: ["Power BI","OAuth2","Keycloak"],
    links: { demo: "#", repo: "#" },
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Lector de PDF con TTS (Android)",
    description:
      "App Android para leer PDFs en voz alta, optimizada para uso nocturno y sin anuncios. UI accesible y controles inteligentes.",
    tags: ["Kotlin","TTS","PdfBox-Android"],
    links: { demo: "#", repo: "#" },
    icon: <Rocket className="w-5 h-5" />,
  },
];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

const Glass = ({ children }: { children: React.ReactNode }) => (
  <div className="backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border border-white/20 dark:border-white/10 shadow-xl rounded-2xl">
    {children}
  </div>
);

const Nav = () => (
  <div className="fixed top-0 inset-x-0 z-50">
    <div className="max-w-6xl mx-auto px-6 py-3">
      <div className="flex items-center justify-between rounded-2xl px-3 py-2 border border-white/20 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-neutral-900/70 shadow-lg">
        <a href="#inicio" className="font-semibold">RM</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:opacity-80" href="#proyectos">Proyectos</a>
          <a className="hover:opacity-80" href="#experiencia">Experiencia</a>
          <a className="hover:opacity-80" href="#stack">Tecnologías</a>
          <a className="hover:opacity-80" href="#contacto">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild>
            <a href="#contacto">Contáctame</a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <div id="inicio" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{
        backgroundImage:
          "radial-gradient(1000px 400px at 0% 0%, rgba(123, 97, 255, 0.25), transparent)," +
          "radial-gradient(800px 400px at 100% 0%, rgba(0, 220, 130, 0.20), transparent)," +
          "radial-gradient(800px 600px at 50% 100%, rgba(0, 180, 255, 0.18), transparent)",
      }} />
      <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)] bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>

    <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
      <Glass>
        <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12">
          <div className="md:col-span-7">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold tracking-tight">
              {PROFILE.name}
            </motion.h1>
            <p className="mt-3 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
              {PROFILE.title}
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
              {PROFILE.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#proyectos">Ver proyectos <ArrowUpRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#stack">Tecnologías clave</a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Database className="w-5 h-5"/>Arquitectura & Seguridad</CardTitle>
                <CardDescription>Enfoque en OIDC (Keycloak), MVVM/Compose y servicios robustos en Go.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><ShieldCheck className="w-4 h-4 mt-0.5"/> SSO con Keycloak (OAuth2/OIDC).</li>
                  <li className="flex gap-2"><Cog className="w-4 h-4 mt-0.5"/> BAPIs SAP (reservas/movimientos) vía gorfc.</li>
                  <li className="flex gap-2"><Server className="w-4 h-4 mt-0.5"/> SQL Server, transacciones e índices.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Glass>
    </div>
  </div>
);

const Projects = () => (
  <Section id="proyectos" title="Proyectos Destacados">
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/30">
                  {p.icon}
                </span>
                {p.title}
              </CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (<Badge key={t} variant="secondary">{t}</Badge>))}
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm" asChild><a href={p.links.demo} target="_blank" rel="noreferrer">Demo</a></Button>
                <Button size="sm" asChild><a href={p.links.repo} target="_blank" rel="noreferrer">Repositorio</a></Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experiencia" title="Experiencia">
    <div className="space-y-6">
      <Glass>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">Desarrollador Android / Backend</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Mina Cerro Los Gatos (MCLG)</p>
            </div>
            <span className="text-sm opacity-80">2023 — Presente</span>
          </div>
          <ul className="mt-4 grid gap-2 list-disc list-inside text-sm">
            <li>Diseño e implementación de TrackExplo con Compose y Hilt.</li>
            <li>Microservicios en Go integrados con SAP (BAPIs) y SQL Server.</li>
            <li>Autenticación centralizada mediante Keycloak (OIDC).</li>
          </ul>
        </div>
      </Glass>
    </div>
  </Section>
);

const Stack = () => (
  <Section id="stack" title="Tecnologías y Herramientas">
    <Glass>
      <div className="p-6 flex flex-wrap gap-2">
        {STACK.map((s) => (<Badge key={s} variant="outline">{s}</Badge>))}
      </div>
    </Glass>
  </Section>
);

const Contact = () => (
  <Section id="contacto" title="Contacto">
    <Glass>
      <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Trabajemos juntos</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
            Estoy disponible para colaborar en proyectos Android, integraciones backend en Go y analítica.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild><a href={`mailto:${PROFILE.email}`}><Mail className="w-4 h-4 mr-2"/> {PROFILE.email}</a></Button>
          <Button variant="secondary" asChild><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</a></Button>
          <Button variant="ghost" asChild><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2"/> GitHub</a></Button>
        </div>
      </div>
    </Glass>
  </Section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-50">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm opacity-70">
          © {new Date().getFullYear()} {PROFILE.name}. Construido con React + Tailwind y un poco de ChatGPT ;). 
        </div>
      </footer>
    </div>
  );
}