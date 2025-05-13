
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">À Propos de Nous</h2>
        <p className="mb-4">
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
