import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

          <div className="mx-auto max-w-4xl mt-12">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Promote Gender Equality",
                  description: "Ensure equal opportunities and rights for all genders in community development initiatives.",
                },
                {
                  title: "Develop Learning Platforms",
                  description: "Create accessible educational resources that empower communities with knowledge and skills.",
                },
                {
                  title: "Strengthen Local Governance",
                  description: "Support inclusive decision-making processes and accountable leadership at the community level.",
                },
                {
                  title: "Advance Youth Leadership",
                  description: "Cultivate the next generation of leaders through mentorship and practical opportunities.",
                },
                {
                  title: "Foster Economic Resilience",
                  description: "Build sustainable livelihoods and economic opportunities within vulnerable communities.",
                },
                {
                  title: "Promote Environmental Sustainability",
                  description: "Integrate ecological considerations into all development activities and community practices.",
                },
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#008000] hover:shadow-md"
                >
                  <div className="mr-4 mt-1 flex-shrink-0 rounded-full bg-[#e6f2e6] p-2">
                    <Check className="h-5 w-5 text-[#008000]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{objective.title}</h3>
                    <p className="text-sm text-gray-600">{objective.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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