
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
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
            <div 
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
              Get in touch with the YAPD4Africa team for inquiries, partnerships, or to learn more about our work.
              </p>
            </div>
            <div
              className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl" // Increased height from 300px to 350px
            >
              <img
                src="/lovable-uploads/logoyapd.png"
                alt="YAPD4Africa Initiatives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get In Touch" />
              <p className="text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question about our programs, want to partner with us, or are interested in volunteering, please don't hesitate to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">123 Main Street, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:info@yapd4africa.org" className="text-primary hover:text-secondary transition-colors">
                      info@yapd4africa.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+254123456789" className="text-primary hover:text-secondary transition-colors">
                      +254 123 456 789
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Send Us a Message" />
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <ContactForm />
              </div>
            </div>
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
        <div className="w-full h-[400px] bg-gray-200 mt-8">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Google Maps Embed would appear here</p>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;
