
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Rocket, Eye, Award } from "lucide-react";

const Mission = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#008000]/10 rounded-lg">
                <Rocket className="h-8 w-8 text-[#008000]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To drive positive social change in Africa by mobilizing youth leadership, fostering inclusive governance, and advocating for sustainable development at the grassroots level.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#008000]/10 rounded-lg">
                <Eye className="h-8 w-8 text-[#008000]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              An Africa where empowered youth lead the way in creating equitable, sustainable, and thriving communities through innovative approaches to social development.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <SectionHeading 
            title="Core Values" 
            subtitle="The principles that guide our work"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                alt="Youth Leadership"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                <Award className="h-8 w-8 text-white mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Youth Leadership</h3>
                <p className="text-white/90 text-sm">Empowering young leaders to drive change in their communities</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1556484687-30636164638b"
                alt="Innovation"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                <Award className="h-8 w-8 text-white mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-white/90 text-sm">Finding creative solutions to address complex social challenges</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Collaboration"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                <Award className="h-8 w-8 text-white mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-white/90 text-sm">Working together for greater impact across communities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
