import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  {
    src: "../../public/images/PXL_20231207_102249427.jpg",
    title: "Nambinintsoa Olivier VOLANA",
    text: "Développeur passionné et administrateur réseaux junior."
  },
  {
    src: "../../public/images/PXL_20250504_090334035.NIGHT.jpg",
    title: "Développeur Front-End",
    text: "Spécialisé en React.js, TailwindCSS et UI/UX moderne."
  },
  {
    src: "",
    title: "Administrateur Réseaux Junior",
    text: "Compétences en réseaux, sécurité et infrastructure IT."
  }
];

function PortfolioSlideshow() {
  const [index, setIndex] = useState(0);

  // Auto défilement toutes les 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl h-[80vh] shadow-lg rounded-2xl overflow-hidden bg-gray-800">
        
        {/* Texte à gauche */}
        <div className="flex flex-col justify-center p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {images[index].title}
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {images[index].text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Boutons navigation */}
          <div className="flex gap-3 mt-8">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition ${
                  i === index ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Image à droite */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].title}
              className="w-full h-full object-cover"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlideshow;
