
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="container-custom relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="space-y-4 mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#008000] font-bold text-xl md:text-2xl"
            >
              YAPD4Africa
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white space-y-3"
            >
              <div>Advancing social development</div>
              <div>and empowering African</div>
              <div>grassroots communities</div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/90 text-lg md:text-xl font-light max-w-2xl"
            >
              through youth-led empowerment, inclusive governance and advocacy
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/what-we-do" className="bg-[#008000] hover:bg-[#006400] text-white px-6 py-3 rounded-md font-medium transition-colors">
              Learn More
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/20">
              Get Involved
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
