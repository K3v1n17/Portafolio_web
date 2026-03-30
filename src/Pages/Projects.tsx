export const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-20 lg:py-32">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
