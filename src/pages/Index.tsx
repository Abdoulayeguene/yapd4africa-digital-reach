
import React, { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Mission from "../components/home/Mission";
import Partners from "../components/home/Partners";
import SectionHeading from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Mission />
      
      {/* Focus Areas Section avec animation */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <SectionHeading 
            title="Our Focus Areas" 
            subtitle="Strategic priorities that guide our work and impact"
            centered
            className="text-gray-800"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Youth Empowerment",
                description: "Building leadership skills and creating opportunities for youth to become changemakers.",
                icon: "👥"
              },
              {
                title: "Inclusive Governance",
                description: "Promoting transparent, participatory governance systems that address community needs.",
                icon: "🤝"
              },
              {
                title: "Sustainable Development",
                description: "Implementing environmentally responsible initiatives for lasting benefits.",
                icon: "🌱"
              },
              {
                title: "Policy Advocacy",
                description: "Amplifying community voices to influence policies across Africa.",
                icon: "📢"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">{area.title}</h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Our Approach Section avec effet parallax */}
      <section className="section-padding relative bg-white">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            backgroundImage: 'url("/pattern.svg")',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Our Approach (CARE-SD)" 
            subtitle="A comprehensive methodology for sustainable community development"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 mt-12">
              {[
                {
                  letter: "C",
                  title: "Community-Led",
                  description: "We believe that sustainable development starts with the community."
                },
                {
                  letter: "A",
                  title: "Adaptive Learning",
                  description: "Our approach emphasizes continuous learning and adaptation."
                },
                {
                  letter: "R",
                  title: "Resource Mobilization",
                  description: "We strategically mobilize resources through partnerships."
                },
                {
                  letter: "E",
                  title: "Empowerment Focus",
                  description: "Building skills and capacities of individuals and communities."
                },
                {
                  letter: "S",
                  title: "Sustainable Impact",
                  description: "Designing initiatives with long-term sustainability in mind."
                },
                {
                  letter: "D",
                  title: "Diverse Partnerships",
                  description: "Cultivating partnerships across sectors and borders."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.letter}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section avec compteurs animés */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          <SectionHeading 
            title="Our Impact" 
            subtitle="Making a difference across African communities"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: "5,000+",
                title: "Youth Leaders Trained",
                description: "Equipped with leadership and advocacy skills",
                color: "secondary"
              },
              {
                number: "25+",
                title: "Community Projects",
                description: "Successfully implemented initiatives",
                color: "accent"
              },
              {
                number: "15+",
                title: "Policy Changes",
                description: "Influenced through advocacy campaigns",
                color: "gold"
              },
              {
                number: "100,000+",
                title: "Community Members",
                description: "Benefitted from our programs",
                color: "primary"
              },
              {
                number: "30+",
                title: "Partnerships",
                description: "Formed with organizations",
                color: "secondary"
              },
              {
                number: "12",
                title: "African Countries",
                description: "With active YAPD4Africa programs",
                color: "accent"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-${stat.color}/10 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className={`text-4xl font-bold text-${stat.color} mb-3`}>{stat.number}</div>
                <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/what-we-do" 
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors duration-300 text-lg font-medium"
            >
              Explore Our Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
      
      <Partners />
    </div>
  );
};

export default Index;
