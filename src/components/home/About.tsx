import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Globe, DollarSign, Share2, Flag } from "lucide-react";

const About = () => {
  const [counters, setCounters] = useState({
    lives: 0,
    communities: 0,
    funds: 0,
    reach: 0,
    countries: 0
  });

  const stats = [
    {
      icon: Users,
      value: "30,000+",
      label: "Lives Impacted",
      color: "from-blue-500 to-blue-600",
      key: "lives"
    },
    {
      icon: Globe,
      value: "80+",
      label: "Communities Reached",
      color: "from-green-500 to-green-600",
      key: "communities"
    },
    {
      icon: DollarSign,
      value: "$25,000+",
      label: "Funds Raised",
      color: "from-amber-500 to-amber-600",
      key: "funds"
    },
    {
      icon: Share2,
      value: "60,000+",
      label: "Global Reach",
      color: "from-purple-500 to-purple-600",
      key: "reach"
    },
    {
      icon: Flag,
      value: "30+",
      label: "Countries Recognition",
      color: "from-red-500 to-red-600",
      key: "countries"
    }
  ];

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Animate counters
      stats.forEach((stat) => {
        const value = parseInt(stat.value.replace(/[^0-9]/g, ""));
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            current = value;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, duration / steps);
      });
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About <span className="text-green-600">Us</span>
              </motion.h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
            </div>

            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Founded in 2017, Connected Youth for Accountability, Peace and Development Initiative (YAPD4Africa) is a well-known youth-led nonprofit and civic society organization, whose dedicated mission is to build strong people and sustainable communities in Africa.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our primary focus is to empower people with the right knowledge and skills to advocate for their rights and community development across the continent through our various homegrown initiatives and projects.
            </motion.p>

            <motion.div 
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value.includes("$") ? "$" : ""}
                    {counters[stat.key].toLocaleString()}
                    {stat.value.includes("+") ? "+" : ""}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="lovable-uploads/Home/IMG_0549.jpeg"
              alt="YAPD4Africa Team"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
