import React from "react";
import imgHeader from "../../public/images/PXL_20250504_090334035.NIGHT.jpg";

const Header = () => {
  const links = [
    { name: "Mes Projets", href: "#" },
    { name: "Compétences Techniques", href: "#" },
    { name: "Expérience", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const stats = [
    { name: "Années d'Expérience", value: "2+" },
    { name: "Projets Réalisés", value: "5+" },
    { name: "Certifications", value: "4+" },
    { name: "Collaborateurs satisfaits", value: "5+" },
  ];
  return (
    <div className="relative isolate overflow-hidden bg-[#F2F2F2] py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          alt=""
          src={imgHeader}
          className="size-full object-cover object-[80%_20%] opacity-85"
        />
                {/* Overlay sombre semi-transparent */}
        <div className="absolute inset-0 bg-[#000000]/20"></div>

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl" >
            Développeur Front-end & Administrateur Réseaux Junior
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
            Passionné par la création d'expériences web modernes et fluides. Ma
            double expertise en développement front-end et en administration
            réseaux me permet de bâtir des solutions complètes et robustes, de
            la conception à l'infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-600 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex hover:text-white transition-colors bg-white/50 px-4 py-1 rounded-full hover:bg-green-600/90"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col-reverse gap-1 border-l-4 border-[#4CAF50] pl-4"
              >
                <dt className="text-base/7 text-white font-medium">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-[#ffd24b]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Header;
