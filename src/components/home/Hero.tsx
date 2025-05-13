
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight"
        >
          Faire avancer le développement social et autonomiser les communautés locales africaines par l'engagement des jeunes, la gouvernance inclusive et le plaidoyer.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link 
            to="#about" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1"
          >
            En Savoir Plus
            <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
