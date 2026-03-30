
import * as React from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: 1,
    company: "Tech Company",
    companyUrl: "https://example.com",
    role: "Senior Software Engineer",
    period: "2023 — Presente",
    description: [
      "Lideré el desarrollo de una plataforma web que procesa más de 10,000 transacciones diarias.",
      "Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%.",
      "Mentoricé a un equipo de 5 desarrolladores junior, estableciendo mejores prácticas de código.",
      "Colaboré con equipos de producto y diseño para entregar funcionalidades de alto impacto.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 2,
    company: "Startup Innovation",
    companyUrl: "https://example.com",
    role: "Full Stack Developer",
    period: "2021 — 2023",
    description: [
      "Desarrollé aplicaciones web responsivas utilizando React y Next.js.",
      "Diseñé e implementé APIs RESTful con Node.js y Express.",
      "Optimicé consultas de base de datos, reduciendo tiempos de carga en un 60%.",
      "Participé en sprints ágiles y revisiones de código colaborativas.",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "GraphQL"],
  },
  {
    id: 3,
    company: "Digital Agency",
    companyUrl: "https://example.com",
    role: "Frontend Developer",
    period: "2019 — 2021",
    description: [
      "Creé interfaces de usuario interactivas y accesibles para múltiples clientes.",
      "Implementé sistemas de diseño reutilizables que aceleraron el desarrollo.",
      "Integré APIs de terceros y servicios de pago.",
      "Colaboré directamente con clientes para entender y cumplir requisitos.",
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
  },
]

export const Experience = () =>  {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              Experiencia
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium whitespace-nowrap text-left transition-all",
                    "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                    activeTab === index
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 min-h-[350px]">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={cn(
                    "transition-opacity duration-300",
                    activeTab === index ? "opacity-100" : "hidden opacity-0"
                  )}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                    {exp.role}{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      @ {exp.company}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    {exp.period}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
