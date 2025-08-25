import React from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { experiences } from "../Data/Experiences";

const ExperienceCard = () => {
  return (
    <div className="bg-gradient-to-b from-white to-zinc-50 p-6 sm:p-10">
      <div className="mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900">
          Expériences professionnelles
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200/60 
              bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 
              w-full  lg:w-[550px] flex flex-col"
            >
              <header className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-cyan-800">
                  {exp.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600">
                  <span className="inline-flex items-center gap-1.5">
                    <FaRegCalendarCheck />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendar />
                    <span>{exp.date}</span>
                  </span>
                </div>
              </header>

              <ul className="space-y-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                      aria-hidden
                    ></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
