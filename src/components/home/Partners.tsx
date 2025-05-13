
import React, { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: "ALDA", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
    { name: "WYDE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
    { name: "Partner 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
    { name: "Partner 4", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
    { name: "Partner 5", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
    { name: "Partner 6", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Announcement Section */}
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-1 flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-[#008000]"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-[#008000]">Recent Recognition</span>
            </div>

            <h3 className="mb-4 text-xl font-bold text-gray-900">
              YAPD4Africa selected among 10 organizations in WYDE Civic Engagement Project.
            </h3>

            <p className="mb-6 text-gray-600">
              We are proud to announce that YAPD4Africa has been selected as one of the 10 organizations to participate in
              the WYDE Civic Engagement Project, recognizing our commitment to youth empowerment and community
              development.
            </p>

            <a
              href="https://www.alda-europe.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#008000] text-white px-4 py-2 rounded hover:bg-[#006800]"
            >
              Read Article
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Email</h4>
                  <a href="mailto:yapd2020@gmail.com" className="text-gray-900 hover:text-[#008000]">
                    yapd2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Phone</h4>
                  <a href="tel:+2348167185897" className="text-gray-900 hover:text-[#008000]">
                    +234 816 718 5897
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Address</h4>
                  <p className="text-gray-900">Hayin Banki Kaduna North, Kaduna State, Nigeria</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium text-gray-700">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title="Our Partners" 
            subtitle="Collaborating with leading organizations to maximize our impact"
            centered 
          />
        </motion.div>
        
        <div className="relative mt-12">
          <div className="flex gap-8 overflow-hidden py-4">
            <motion.div 
              className="flex gap-8 animate-slide"
              style={{
                transform: `translateX(-${currentIndex * (100 / partners.length)}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[200px] aspect-square bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="w-full h-full relative">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">{partner.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with YAPD4Africa to create positive change?
          </p>
          <Link 
            to="/contact" 
            className="bg-[#008000] text-white px-6 py-3 rounded hover:bg-[#006800] inline-block"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
