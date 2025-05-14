import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const Mission = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Build strong people and sustainable communities in Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where people are empowered to drive sustainable social development, even in the most remote areas of the globe.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r"></div>
          <div className="relative z-10">
            <SectionHeading 
              title="Core Values" 
              subtitle="The principles that drive our impact"
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Innovation",
                  description: "Pioneering creative solutions for community development",
                  image: "lovable-uploads/Our Core Values/Collaboration and Parntership.JPG",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Teamwork Ethic",
                  description: "Working together with dedication and purpose",
                  image: "lovable-uploads/Our Core Values/Commitment and Make Difference.jpg",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Gender Inclusivity",
                  description: "Ensuring equal opportunities and representation",
                  image: "lovable-uploads/Our Core Values/Gender Inclusivity.jpg",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  title: "Transparency",
                  description: "Maintaining accountability in all our actions",
                  image: "lovable-uploads/Our Core Values/Teamwork.jpg",
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Commitment",
                  description: "Dedicated to making a lasting difference",
                  image: "lovable-uploads/Our Core Values/Transparency and Accountability.jpeg",
                  color: "from-amber-500 to-amber-600"
                },
                {
                  title: "Partnership",
                  description: "Building strong collaborations for greater impact",
                  image: "lovable-uploads/Home/IMG_3127.jpeg", 
                  color: "from-red-500 to-red-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-white/90 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
