import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { User, Award, Users, Heart, Lightbulb, Shield, Handshake } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const WhoAreWe = () => {
  const teamMembers = [
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      role: "Chief Executive",
      bio: "Leading YAPD4Africa's vision and strategic direction with extensive experience in youth development and community engagement.",
      image: "/lovable-uploads/Staff/Idris.JPG",
      social: {
        linkedin: "https://linkedin.com/in/idris-bilyaminu",
        twitter: "https://twitter.com/idris",
        instagram: "https://instagram.com/idris",
        facebook: "https://facebook.com/idris"
      }
    },
    {
      name: "Sa'adatu Idris Ndasadu'Lau",
      role: "Head of Programs",
      bio: "Overseeing program development and implementation with a focus on sustainable community impact.",
      image: "/lovable-uploads/Staff/saadatu.png",
      social: {
        linkedin: "https://linkedin.com/in/saadatu",
        twitter: "https://twitter.com/saadatu",
        instagram: "https://instagram.com/saadatu",
        facebook: "https://facebook.com/saadatu"
      }
    },
    {
      name: "Yahya Abubakar",
      role: "Programs Manager (Youth Engagement)",
      bio: "Specializing in youth mobilization and leadership development across African communities.",
      image: "/lovable-uploads/Staff/Yahaya.JPG",
      social: {
        linkedin: "https://linkedin.com/in/yahya",
        twitter: "https://twitter.com/yahya",
        instagram: "https://instagram.com/yahya",
        facebook: "https://facebook.com/yahya"
      }
    },
    {
      name: "Fatima Muftau",
      role: "Assistant Monitoring and Evaluation Manager",
      bio: "Ensuring program effectiveness and impact through rigorous monitoring and evaluation.",
      image: "/lovable-uploads/Staff/fatima.png",
      social: {
        linkedin: "https://linkedin.com/in/fatima",
        twitter: "https://twitter.com/fatima",
        instagram: "https://instagram.com/fatima",
        facebook: "https://facebook.com/fatima"
      }
    },
    {
      name: "Baqau Hassan Omotayo",
      role: "Creative Design Manager",
      bio: "Leading our visual communication and creative strategy to amplify our impact.",
      image: "/lovable-uploads/Staff/Hassan.JPG",
      social: {
        linkedin: "https://linkedin.com/in/hassan",
        twitter: "https://twitter.com/hassan",
        instagram: "https://instagram.com/hassan",
        facebook: "https://facebook.com/hassan"
      }
    }
  ];

  const boardMembers = [
    {
      name: "Fatima Mohammed Habib",
      title: "Board Chair",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Fatima.JPG",
      social: {
        linkedin: "https://linkedin.com/in/fatima-mohammed",
        twitter: "https://twitter.com/fatima",
        instagram: "https://instagram.com/fatima",
        facebook: "https://facebook.com/fatima"
      }
    },
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      title: "Board Secretary",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Staff/Idris.JPG",
      social: {
        linkedin: "https://linkedin.com/in/idris-bilyaminu",
        twitter: "https://twitter.com/idris",
        instagram: "https://instagram.com/idris",
        facebook: "https://facebook.com/idris"
      }
    },
    {
      name: "Tagwai Zigwai",
      title: "Board Secretary II",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Zigwai.JPG",
      social: {
        linkedin: "https://linkedin.com/in/tagwai",
        twitter: "https://twitter.com/tagwai",
        instagram: "https://instagram.com/tagwai",
        facebook: "https://facebook.com/tagwai"
      }
    },
    {
      name: "Aisha Dabo",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Aisha.JPG",
      social: {
        linkedin: "https://linkedin.com/in/aisha",
        twitter: "https://twitter.com/aisha",
        instagram: "https://instagram.com/aisha",
        facebook: "https://facebook.com/aisha"
      }
    },
    {
      name: "Abbas Inuwa",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Abbas.JPG",
      social: {
        linkedin: "https://linkedin.com/in/abbas",
        twitter: "https://twitter.com/abbas",
        instagram: "https://instagram.com/abbas",
        facebook: "https://facebook.com/abbas"
      }
    },
    {
      name: "Zainab Suleiman Ajuma",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Zainab.JPG",
      social: {
        linkedin: "https://linkedin.com/in/zainab",
        twitter: "https://twitter.com/zainab",
        instagram: "https://instagram.com/zainab",
        facebook: "https://facebook.com/zainab"
      }
    },
    {
      name: "Ayomide Ladipo Yetunde",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Ayomide.JPG",
      social: {
        linkedin: "https://linkedin.com/in/ayomide",
        twitter: "https://twitter.com/ayomide",
        instagram: "https://instagram.com/ayomide",
        facebook: "https://facebook.com/ayomide"
      }
    },
    {
      name: "Mbah Aaron Promise",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Promise.JPG",
      social: {
        linkedin: "https://linkedin.com/in/promise",
        twitter: "https://twitter.com/promise",
        instagram: "https://instagram.com/promise",
        facebook: "https://facebook.com/promise"
      }
    },
    {
      name: "Valentine Okafor",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Okafor.JPG",
      social: {
        linkedin: "https://linkedin.com/in/valentine",
        twitter: "https://twitter.com/valentine",
        instagram: "https://instagram.com/valentine",
        facebook: "https://facebook.com/valentine"
      }
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 to-emerald-800 py-16 md:py-20 overflow-hidden">
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
              Who Are We
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
              Meet our brilliant and inspiring team of changemakers dedicated to transforming communities across Africa through youth-led initiatives and sustainable development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl" // Increased height from 300px to 350px
            >
              <img
                src="/lovable-uploads/logoyapd.png"
                alt="YAPD4Africa Initiatives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="Our Story" 
                subtitle="The journey of YAPD4Africa from inception to impact"
              />
              
              <div className="prose max-w-none text-gray-700 mt-8">
                <p className="text-lg leading-relaxed">
                  YAPD4Africa was founded in 2010 by a group of passionate young Africans who believed in the power of youth-led initiatives to address pressing social challenges. What began as a small network of volunteers has grown into a respected organization with programs in multiple African countries.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Our founders recognized that despite being the continent with the youngest population, young people in Africa were often excluded from development processes and decision-making. They established YAPD4Africa to bridge this gap, creating platforms for youth leadership and meaningful participation in community development.
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
                src="/lovable-uploads/Staff/Idris.JPG"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet our brilliant and inspiring colleagues"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                      {member.social?.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaLinkedin size={24} />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.social?.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaInstagram size={24} />
                        </a>
                      )}
                      {member.social?.facebook && (
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaFacebook size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Board of Trustees" 
            subtitle="Meet our diverse group of experts across Nigeria's geopolitical and Africa"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                      {member.social?.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaLinkedin size={24} />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.social?.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaInstagram size={24} />
                        </a>
                      )}
                      {member.social?.facebook && (
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all">
                          <FaFacebook size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600">{member.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50/40 via-gray-50/30 to-green-50/40">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Our Values" 
              subtitle="The principles that guide our work"
              centered
              className="text-gray-900"
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Users,
                title: "Youth Leadership",
                description: "Empowering young people to lead change in their communities."
              },
              {
                icon: Heart,
                title: "Inclusivity",
                description: "Ensuring diverse voices are heard and represented."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Embracing creative solutions to complex challenges."
              },
              {
                icon: Shield,
                title: "Sustainability",
                description: "Creating lasting impact through sustainable approaches."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Maintaining high standards in all our work."
              },
              {
                icon: Handshake,
                title: "Partnership",
                description: "Building strong collaborations for greater impact."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group bg-white/70 backdrop-blur-md rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border border-gray-100/30 hover:border-emerald-100/50"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in contributing your skills and passion to YAPD4Africa's mission? Explore current opportunities to join our team or volunteer with us.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Opportunities
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;
