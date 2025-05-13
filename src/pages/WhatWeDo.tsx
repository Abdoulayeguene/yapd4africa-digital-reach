import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Users, Lightbulb, Globe, Heart, Shield, BookOpen, Megaphone, Vote, Leaf } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                What We Do
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transforming communities through youth-led initiatives, inclusive governance, and sustainable development approaches.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/hero-what-we-do.jpg"
                alt="YAPD4Africa Initiatives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Approach to Social Development"
                subtitle="Comprehensive, community-led strategies for lasting change"
              />
              
              <div className="prose max-w-none text-gray-700 mt-8">
                <p className="text-lg leading-relaxed">
                  At YAPD4Africa, we implement a holistic approach to social development through our CARE-SD methodology, which stands for Community-Led, Adaptive Learning, Resource Mobilization, Empowerment Focus, Sustainable Impact, and Diverse Partnerships.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  This approach ensures that our initiatives are not only responsive to community needs but also designed for long-term sustainability and impact. We work closely with local stakeholders, including youth leaders, community elders, government officials, and other development partners, to create and implement programs that address the unique challenges faced by African communities.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Our work spans multiple sectors, including education, health, economic empowerment, environmental sustainability, and governance, with a cross-cutting focus on youth leadership and gender equality.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/approach-overview.jpg"
                alt="Our Approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Homegrown Initiatives Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Homegrown Initiatives"
            subtitle="Locally developed programs addressing specific community needs"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: Users,
                number: "01",
                title: "Community Action-Led Initiative (CAL)",
                description: "A comprehensive civic education program aimed at empowering and educating underserved marginalized communities to understand their rights, responsibilities and duties as citizens. Currently operating in Nigeria and Cameroon.",
                impact: "Addressing the lack of knowledge regarding civic participatory mechanisms in Sub-Saharan Africa.",
                image: "/images/initiatives/cal.jpg"
              },
              {
                icon: Lightbulb,
                number: "02",
                title: "Murya",
                description: "An innovative civic tech initiative designed to bridge the gaps between citizens' needs and government projects. Provides a platform for citizens to voice their concerns about service delivery and empowers the government with data-driven evidence reports.",
                impact: "Enabling better alignment of government projects with essential citizen needs.",
                image: "/images/initiatives/murya.jpg"
              },
              {
                icon: Vote,
                number: "03",
                title: "Kuri'a",
                description: "A citizen-led initiative that combines digital and physical engagement to promote electoral accountability, transparency and inclusiveness in Nigeria. Through mobile and web platforms, community outreach and physical events.",
                impact: "Empowering citizens to participate actively in the electoral process and demand good governance.",
                image: "/images/initiatives/kuria.jpg"
              },
              {
                icon: Leaf,
                number: "04",
                title: "Rescue A Girl Initiative",
                description: "A social enterprise empowering hard-to-reach marginalized grassroots girls and women through the provision of eco-friendly reusable sanitary products.",
                impact: "Protecting the environment while addressing women's health needs.",
                image: "/images/initiatives/rescue-girl.jpg"
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                      <initiative.icon className="h-7 w-7" />
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-lg font-bold text-emerald-600">{initiative.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    <p className="text-gray-600">
                      <strong className="text-emerald-600">Impact:</strong> {initiative.impact}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Other Projects"
            subtitle="Collaborative initiatives with partners and communities"
          />
          
          <div className="space-y-8 mt-12">
            {[
              {
                title: "Who Is Almajiri Project",
                description: "An active project in northern Nigeria advocating for the rights of street children. The project developed policy recommendations for reducing school dropout rates through sustainable reformation for both Almajiri and other street children.",
                impact: "Successfully led to the signing of a bill to establish a national commission for Almajiris and out-of-school children by former President Mohammad Buhari in 2023.",
                tags: ["Education", "Policy Change", "Child Rights"],
                image: "/images/projects/almajiri.jpg"
              },
              {
                title: "Rescue Mission against COVID-19",
                description: "A short-term project from March to May 2020 that directly impacted 500 beneficiaries while using social media to mobilize over 1000 young people for COVID-19 awareness and resource mobilization.",
                impact: "Distributed relief materials to vulnerable groups, including orphanage homes, and provided homemade face masks and sanitizers.",
                tags: ["Health", "Emergency Response", "Community Support"],
                image: "/images/projects/covid.jpg"
              },
              {
                title: "We Need Peace Project",
                description: "Implemented from September 2018 to March 2019, engaging community leaders, religious scholars, security agents, and political parties to promote peace as a tool for all.",
                impact: "Contributed to peaceful, free, and fair elections through community engagement and advocacy.",
                tags: ["Peace Building", "Community Engagement", "Advocacy"],
                image: "/images/projects/peace.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50/80 backdrop-blur-sm rounded-3xl hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] md:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong className="text-emerald-600">Impact:</strong> {project.impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Us in Creating Positive Change
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Whether you're interested in volunteering, partnering, or supporting our initiatives, there are many ways to contribute to YAPD4Africa's mission.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Involved Today
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/get-involved.jpg"
                alt="Get Involved"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
