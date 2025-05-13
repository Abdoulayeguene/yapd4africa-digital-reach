
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white py-28 px-6">
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Faire avancer le développement social et autonomiser les communautés locales africaines grâce à l'autonomisation des jeunes, à la gouvernance inclusive et au plaidoyer.
        </h1>
        <Link to="#about" className="inline-block mt-4 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded shadow">
          En Savoir Plus
        </Link>
      </div>
    </section>
  );
};

export default Hero;
