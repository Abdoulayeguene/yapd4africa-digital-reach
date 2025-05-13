
import React from "react";
import { motion } from "framer-motion";


import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            À Propos de <span className="text-blue-500">Nous</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Fondée en 2017, Connected Youth for Accountability, Peace and Development Initiative (YAPD4Africa)
          est une organisation à but non lucratif dirigée par des jeunes, axée sur le renforcement des personnes et des communautés durables
          à travers l'Afrique. Nous donnons aux individus les moyens de défendre leurs droits et le développement communautaire grâce à leurs connaissances et à leurs compétences.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-green-700">Mission</h3>
            <p>Construire des personnes fortes et des communautés durables en Afrique.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">Vision</h3>
            <p>
              Un monde où les gens sont habilités à conduire un développement social durable, même dans les zones les plus reculées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
