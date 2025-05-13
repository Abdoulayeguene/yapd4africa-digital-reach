import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Connect with the YAPD4Africa team for inquiries, partnerships, or to learn more about our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Contact Information" />
              <p className="text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question about our programs, want to partner with us, or are interested in volunteering, please don't hesitate to reach out.
              </p>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6 group-hover:bg-emerald-200 transition-colors">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Get in touch with us by calling our direct line</p>
                    <a href="tel:+2348167185897" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                      +234 816 718 5897
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6 group-hover:bg-emerald-200 transition-colors">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">Get in touch with us by forwarding us a direct email</p>
                    <a href="mailto:yapd2020@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                      yapd2020@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6 group-hover:bg-emerald-200 transition-colors">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-gray-600">
                      Hayin Banki Kaduna North,<br />
                      Kaduna State, Nigeria
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-100 hover:bg-emerald-600 hover:text-white p-4 rounded-2xl transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-100 hover:bg-emerald-600 hover:text-white p-4 rounded-2xl transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-100 hover:bg-emerald-600 hover:text-white p-4 rounded-2xl transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-100 hover:bg-emerald-600 hover:text-white p-4 rounded-2xl transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Send Us a Message" />
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-0">
        <div className="container-custom">
          <SectionHeading 
            title="Our Location" 
            subtitle="Find us on the map"
            centered
          />
        </div>
        <div className="w-full h-[500px] mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5!2d7.6!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3wrAzNicwMC4wIkU!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Ways to Get Involved" 
            subtitle="Join us in making a difference in African communities"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: "01",
                title: "Volunteer",
                description: "Contribute your skills and time to support our programs and initiatives.",
                link: "#"
              },
              {
                number: "02",
                title: "Partner With Us",
                description: "Explore collaboration opportunities for organizations and institutions.",
                link: "#"
              },
              {
                number: "03",
                title: "Support Our Work",
                description: "Make a donation or provide resources to help sustain and expand our impact.",
                link: "#"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-emerald-600">{item.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
