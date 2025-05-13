import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { User, Award, Users, Heart, Lightbulb, Shield, Handshake } from "lucide-react";

const WhoAreWe = () => {
  const teamMembers = [
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      role: "Chief Executive",
      bio: "Leading YAPD4Africa's vision and strategic direction with extensive experience in youth development and community engagement.",
      image: "/images/team/idris.jpg"
    },
    {
      name: "Sa'adatu Idris Ndasadu'Lau",
      role: "Head of Programs",
      bio: "Overseeing program development and implementation with a focus on sustainable community impact.",
      image: "/images/team/saadatu.jpg"
    },
    {
      name: "Yahya Abubakar",
      role: "Programs Manager (Youth Engagement)",
      bio: "Specializing in youth mobilization and leadership development across African communities.",
      image: "/images/team/yahya.jpg"
    },
    {
      name: "Fatima Muftau",
      role: "Assistant Monitoring and Evaluation Manager",
      bio: "Ensuring program effectiveness and impact through rigorous monitoring and evaluation.",
      image: "/images/team/fatima.jpg"
    },
    {
      name: "Baqau Hassan Omotayo",
      role: "Creative Design Manager",
      bio: "Leading our visual communication and creative strategy to amplify our impact.",
      image: "/images/team/baqau.jpg"
    }
  ];

  const boardMembers = [
    {
      name: "Fatima Mohammed Habib",
      title: "Board Chair",
      organization: "YAPD4Africa",
      image: "/images/board/fatima-habib.jpg"
    },
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      title: "Board Secretary",
      organization: "YAPD4Africa",
      image: "/images/board/idris.jpg"
    },
    {
      name: "Tagwai Zigwai",
      title: "Board Secretary II",
      organization: "YAPD4Africa",
      image: "/images/board/tagwai.jpg"
    },
    {
      name: "Aisha Dabo",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/aisha.jpg"
    },
    {
      name: "Abbas Inuwa",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/abbas.jpg"
    },
    {
      name: "Zainab Suleiman Ajuma",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/zainab.jpg"
    },
    {
      name: "Ayomide Ladipo Yetunde",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/ayomide.jpg"
    },
    {
      name: "Mbah Aaron Promise",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/aaron.jpg"
    },
    {
      name: "Valentine Okafor",
      title: "Board Member",
      organization: "YAPD4Africa",
      image: "/images/board/valentine.jpg"
    }
  ];

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
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/team-hero.jpg"
                alt="YAPD4Africa Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
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
                src="/images/our-story.jpg"
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
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
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
                className="group bg-gray-50/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
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
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide our work"
            centered
            className="text-white"
          />
          
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
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
