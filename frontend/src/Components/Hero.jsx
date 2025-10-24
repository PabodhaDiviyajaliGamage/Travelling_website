import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homepageImages from "../assets/HomepageImages/home"; // ✅ array of { title, subtitle, background }

const Hero = () => {
  const slides = homepageImages; // ✅ define slides from your imported data
  const [index, setIndex] = useState(0);

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* --- Background Transition --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.background})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* --- Dark Overlay --- */}
      <div className="absolute inset-0 bg-black/50" />

      {/* --- Hero Text --- */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 sm:px-16">
        <motion.h3
          key={"subtitle-" + index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg uppercase tracking-widest font-light"
        >
          {current.subtitle}
        </motion.h3>
        <motion.h1
          key={"title-" + index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-bold mt-3"
        >
          {current.title}
        </motion.h1>
      </div>

      {/* --- Next 3 Preview Cards (Bottom Right) --- */}
      <motion.div
        key={"cards-" + index}
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-10 right-10 flex space-x-4"
      >
        {slides.slice(index + 1, index + 4).map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg w-48 sm:w-56 hover:scale-105 transition-transform"
          >
            <img
              src={card.background}
              alt={card.title}
              className="w-full h-32 sm:h-36 object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* --- Slide Indicator Dots --- */}
      <div className="absolute bottom-8 left-10 sm:left-16 flex space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-6 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
