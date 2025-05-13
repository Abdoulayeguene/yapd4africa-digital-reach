import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Mission from "../components/home/Mission";
import Partners from "../components/home/Partners";
import SectionHeading from "../components/ui/SectionHeading";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <About />
      <Mission />

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <SectionHeading 
            title="Core Values" 
            subtitle="The principles that guide our work"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Youth Leadership", icon: "👥", desc: "Empowering young leaders to drive change" },
              { title: "Inclusivity", icon: "🤝", desc: "Ensuring diverse voices are heard and valued" },
              { title: "Innovation", icon: "💡", desc: "Finding creative solutions to challenges" },
              { title: "Sustainability", icon: "🌱", desc: "Creating lasting positive impact" },
              { title: "Accountability", icon: "⚖️", desc: "Maintaining transparency in all actions" },
              { title: "Collaboration", icon: "🤲", desc: "Working together for greater impact" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#008000]">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-[#008000]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom text-white"
        >
          <SectionHeading 
            title="Our Impact" 
            subtitle="Making a difference across African communities"
            centered
            className="text-white"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { number: "5,000+", label: "Youth Leaders Trained" },
              { number: "25+", label: "Community Projects" },
              { number: "15+", label: "Countries Reached" },
              { number: "100K+", label: "Lives Impacted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Partners />
    </div>
  );
};

export default Index;