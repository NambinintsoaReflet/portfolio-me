import React from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";

// Exemple de données de formation
const formations = [
  {
    title: "LICENCE, Informatique et Programmation",
    institution: "Institut de Formation Technique (IFT)",
    location: "Toamasina, Madagascar",
    date: "11/2021 - 10/2022",
    distinction: "Major de promotion",
  },
  {
    title: "Baccalauréat, Série D (Mathématiques et Sciences physiques)",
    institution: "Lycée Toamasina II",
    location: "Toamasina, Madagascar",
    date: "2017",
    distinction: "Mention Passable",
  },
];

const Formations = () => {
  return (
    <div className="bg-gradient-to-b from-white to-zinc-50 p-6 sm:p-10">
      <div className="mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900">
          Formations
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {formations.map((form, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200/60 
              bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 
              w-full lg:w-[550px] flex flex-col"
            >
              <header className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-6">
                  {form.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600">
                  <span className="inline-flex items-center gap-1.5">
                    <FaRegCalendarCheck />
                    {form.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt />
                    {form.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendar />
                    <span>{form.date}</span>
                  </span>
                </div>
              </header>

              {form.distinction && (
                <p className="text-sm text-zinc-700 sm:text-base italic">
                  🎓 {form.distinction}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formations;
