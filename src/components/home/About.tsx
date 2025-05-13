
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold text-[#008000] bg-[#008000]/10 px-4 py-2 rounded-full"
              >
                About YAPD4Africa
              </motion.span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Empowering Youth for African Development
            </h2>
            
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 leading-relaxed"
              >
                YAPD4Africa is a youth-led organization advancing social development in Africa, focusing on grassroots communities. We believe in the transformative power of youth leadership in driving sustainable change and community empowerment.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 leading-relaxed"
              >
                Through strategic partnerships with community leaders, government agencies, and international organizations, we develop and implement initiatives that address pressing social challenges across the continent.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-[#008000] mb-2">15+</div>
                <div className="text-gray-600">Countries Reached</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-[#008000] mb-2">100K+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link 
                to="/who-are-we" 
                className="inline-flex items-center px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006400] transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
                alt="Youth empowerment in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="text-2xl font-bold text-[#008000] mb-2">50+</div>
              <div className="text-gray-700">Active Projects Across Africa</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
