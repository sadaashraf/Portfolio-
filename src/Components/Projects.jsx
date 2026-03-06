const Projects = () => {

  const projects = [
    {
      title: "Inventory Management System",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      desc: "Manage products, stock and orders with full dashboard.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Hospital Management System",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600",
      desc: "Manage patients, doctors and appointments.",
      tech: ["React", "NestJS", "PostgreSQL"]
    },
    {
      title: "Todo Application",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600",
      desc: "Task management application with authentication.",
      tech: ["React", "NestJS", "PostgreSQL"]
    },
    {
      title: "Membership Management System",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
      desc: "Manage members, registrations, payments and profiles.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Famous Places Website",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      desc: "Website showing famous places with images and details.",
      tech: ["React", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="px-10 py-24">

      <h2 className="text-3xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )

}

export default Projects