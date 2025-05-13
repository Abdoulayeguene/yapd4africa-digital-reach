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

      {/* Our Objectives Section */}
      <section className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <SectionHeading 
            title="Our Objectives" 
            subtitle="Building a better future through strategic goals"
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { title: "Lifelong Learning & Development", desc: "Increase people's participation in lifelong skill opportunities, sustainable development, good governance and access to information." },
              { title: "Policy & Accountability", desc: "Advocate for better policies, public accountability, civic participation and social development." },
              { title: "Gender Equality", desc: "Advocate for gender equality especially in achieving and promoting girls and women rights at all levels." },
              { title: "Innovation & Solutions", desc: "Develop innovative platforms for learning and addressing social, environmental and governance issues." },
              { title: "Peace & Justice", desc: "Promote peace, social rights, justice and strong institutions for all." }
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#008000]">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Focus Areas Section */}
      <section className="section-padding bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <SectionHeading 
            title="Our Core Focus Areas" 
            subtitle="Key domains of our impact"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { 
                title: "Civic Engagement",
                icon: "🤝",
                desc: "Fostering active citizen participation in governance and community decision-making processes."
              },
              {
                title: "Community Development",
                icon: "🏘️",
                desc: "Building sustainable and resilient communities through grassroots initiatives and local empowerment."
              },
              {
                title: "Policy Advocacy",
                icon: "📜",
                desc: "Promoting policy changes that advance social justice and sustainable development."
              },
              {
                title: "Empowerment",
                icon: "⭐",
                desc: "Equipping individuals with skills and resources to drive positive change in their communities."
              }
            ].map((focus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-all"
              >
                <div className="text-4xl mb-4">{focus.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#008000]">{focus.title}</h3>
                <p className="text-gray-600 text-sm">{focus.desc}</p>
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