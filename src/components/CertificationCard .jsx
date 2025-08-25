import React from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

// Exemple de données de certifications
const certifications = [
  {
    title: "2ᵉ Place au concours HACKATHON GSN 2025",
    subtitle: "Thème : Plateforme d’éducation numérique",
    institution: "GSN",
    location: "Antananarivo, Madagascar",
    date: "2025",
    image: "/images/hack.jpg", // chemin vers l’image/logo
  },
  {
    title: "Formation D-CLIC : Développement Front-end",
    subtitle: "Certification officielle",
    institution: "Sayna Academy",
    location: "Madagascar",
    date: "2023",
    image: "/images/dclic.jpg", // chemin vers l’image/logo
  },
];

const CertificationCard = () => {
  return (
    <div className="bg-gradient-to-b from-white to-zinc-50 p-6 sm:p-10">
      <div className="mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900">
          Certifications & Distinctions
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200/60 
              bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 
              w-full lg:w-[500px] flex flex-col items-center text-center"
            >
              {/* Image ou logo */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-100 h-45 object-cover mb-4"
                />
              )}

              <header className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">
                  {cert.title}
                </h3>
                {cert.subtitle && (
                  <p className="text-sm text-zinc-600 italic">{cert.subtitle}</p>
                )}
                <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-zinc-600">
                  <span className="inline-flex items-center gap-1.5">
                    <FaAward />
                    {cert.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt />
                    {cert.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendar />
                    <span>{cert.date}</span>
                  </span>
                </div>
              </header>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
