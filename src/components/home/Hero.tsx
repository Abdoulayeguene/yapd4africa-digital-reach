
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container-custom relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Advancing social development and empowering African grassroots communities through youth-led empowerment, inclusive governance and advocacy.
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/what-we-do" className="bg-[#008000] hover:bg-[#006400] text-white px-8 py-4 rounded-md font-medium transition-colors text-lg">
              Learn More
            </Link>
            <Link to="/contact" className="bg-white text-[#008000] hover:bg-gray-100 px-8 py-4 rounded-md font-medium transition-colors text-lg">
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
