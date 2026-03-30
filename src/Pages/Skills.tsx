export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "VS Code", "Figma"],
    },
  ]

  return (
    <section id="skills" className="container mx-auto px-4 py-20 lg:py-32">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((cat, index) => (
          <div key={index} className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground">
                  ✓ {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
