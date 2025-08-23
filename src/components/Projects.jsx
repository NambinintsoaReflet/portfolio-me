import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Application de gestion de Letchi (Front-end)",
      period: "08/2024 - 09/2024",
      client: "Faly Hordea, Toamasina, Madagascar",
    },
    {
      name: "Application web de gestion des bulletins de notes",
      period: "06/2021 - 09/2021",
      client: "Lycée privé MAHATOMBO, Toamasina, Madagascar",
    },
  ];

  return (
    <section id="projets" className="py-24 sm:py-32 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-[#2E2E2E] sm:text-5xl text-center">
          Projets Réalisés
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-sm shadow-md border-l-4 border-[#4CAF50]"
            >
              <div className="flex justify-between">
                <h3 className="w-100 text-xl font-semibold text-[#2E2E2E]">
                  {project.name}
                </h3>
                <p className="text-sm mt-2 text-gray-600">{project.period}</p>
              </div>

              <p className="mt-2 text-lg font-medium text-[#000000]">
                - {project.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
